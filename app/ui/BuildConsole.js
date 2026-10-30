"use client";

import { useEffect, useRef, useState } from "react";
import PixelIcon from "./PixelIcon";
import ChatMock from "./ChatMock";
import { BrowserMock, DashboardMock, PhoneMock } from "./Mockups";

// Konsol "build" interaktif: pilih produk -> layar dirender ulang dengan efek
// pixel yang larut, log terminal berjalan, bar progres terisi. Berganti otomatis.
const TABS = [
  {
    id: "web",
    icon: "web",
    label: "Website",
    view: <BrowserMock className="w-full max-w-[380px]" />,
    log: ["$ dmp new website --company-profile", "desain responsif untuk HP & laptop", "metadata, sitemap & schema SEO", "online di domain Anda"],
  },
  {
    id: "app",
    icon: "mobile",
    label: "Aplikasi",
    view: <PhoneMock />,
    fit: "scale-[0.66] sm:scale-[0.8]",
    log: ["$ dmp build app --android --ios", "absensi GPS + pengenalan wajah", "tetap jalan saat offline", "siap rilis ke Play Store"],
  },
  {
    id: "ai",
    icon: "bot",
    label: "Chatbot AI",
    view: <ChatMock compact />,
    log: ["$ dmp train chatbot --sumber dokumen-resmi", "jawaban dari data Anda (RAG)", "terhubung WhatsApp Business API", "melayani 24 jam"],
  },
  {
    id: "dash",
    icon: "chart",
    label: "Dashboard",
    view: <DashboardMock className="w-full max-w-[340px]" />,
    log: ["$ dmp deploy dashboard --pemda", "data antar dinas tersinkron", "grafik real-time untuk pimpinan", "bisa dibuka dari HP"],
  },
];

const COLS = 32, ROWS = 20, WIPE_MS = 750, CYCLE_MS = 6500;

export default function BuildConsole() {
  const [idx, setIdx] = useState(0);
  const [lines, setLines] = useState(TABS[0].log.length);
  const [auto, setAuto] = useState(true);
  const [hover, setHover] = useState(false);
  const canvas = useRef(null);
  const first = useRef(true);
  const reduce = useRef(false);

  // efek pixel larut saat produk berganti
  useEffect(() => {
    reduce.current = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (first.current) {
      first.current = false;
      return;
    }
    const c = canvas.current;
    if (!c || reduce.current) return;
    const ctx = c.getContext("2d");
    const cells = [];
    for (let y = 0; y < ROWS; y++) for (let x = 0; x < COLS; x++) cells.push([x, y, x + y * 1.4 + Math.random() * 9]);
    cells.sort((a, b) => a[2] - b[2]);
    cells.forEach(([x, y]) => {
      ctx.fillStyle = Math.random() < 0.12 ? "#2563EB" : "#0F1A33";
      ctx.fillRect(x, y, 1, 1);
    });
    c.style.opacity = "1";
    const start = performance.now();
    let raf, cleared = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / WIPE_MS);
      const target = Math.floor(p * cells.length);
      for (; cleared < target; cleared++) ctx.clearRect(cells[cleared][0], cells[cleared][1], 1, 1);
      if (p < 1) raf = requestAnimationFrame(tick);
      else c.style.opacity = "0";
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [idx]);

  // log terminal muncul baris demi baris
  useEffect(() => {
    const n = TABS[idx].log.length;
    const timers = reduce.current ? [setTimeout(() => setLines(n), 0)] : [setTimeout(() => setLines(0), 0), ...TABS[idx].log.map((_, i) => setTimeout(() => setLines(i + 1), 350 + i * 520))];
    return () => timers.forEach(clearTimeout);
  }, [idx]);

  // ganti produk otomatis (berhenti saat di-hover atau setelah diklik)
  useEffect(() => {
    if (!auto || hover) return;
    const t = setTimeout(() => setIdx((i) => (i + 1) % TABS.length), CYCLE_MS);
    return () => clearTimeout(t);
  }, [idx, auto, hover]);

  const tab = TABS[idx];
  const progress = Math.round((lines / tab.log.length) * 20);

  return (
    <div className="px-box px-drop" style={{ "--sh": "#1E3A8A" }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="flex items-center justify-between bg-ink px-3 py-2">
        <span className="flex items-center gap-2 font-pixel text-[11px] uppercase tracking-wider text-white">
          <i className="h-2 w-2 animate-blink bg-brand-400" /> dmp/build — pilih produk
        </span>
        <button type="button" onClick={() => setAuto((a) => !a)} className="-my-2 -mr-2 p-2 font-pixel text-[11px] uppercase text-brand-300 hover:text-white" aria-label={auto ? "Hentikan putar otomatis" : "Putar otomatis"}>
          {auto ? "❚❚ auto" : "▶ auto"}
        </button>
      </div>

      <div role="tablist" aria-label="Contoh produk" className="grid grid-cols-4 border-b-[3px] border-ink bg-panel">
        {TABS.map((t, i) => (
          <button
            key={t.id}
            role="tab"
            type="button"
            aria-selected={i === idx}
            onClick={() => (setIdx(i), setAuto(false))}
            className={`flex flex-col items-center gap-1 border-r-[3px] border-ink py-2.5 text-[12px] font-bold transition-colors last:border-r-0 sm:flex-row sm:justify-center sm:gap-2 sm:text-[13px] ${
              i === idx ? "bg-brand-600 text-white" : "text-ink-600 hover:bg-brand-100"
            }`}
          >
            <PixelIcon name={t.icon} size={24} className={i === idx ? "animate-hop" : ""} />
            {t.label}
          </button>
        ))}
      </div>

      <div className="relative h-[310px] overflow-hidden bg-brand-100 bg-pixel-dots sm:h-[330px]">
        {/* Area tampilan dimulai di bawah label agar label tidak menimpa mockup */}
        <div key={tab.id} className="anim-screen absolute inset-x-0 bottom-0 top-9 flex items-center justify-center px-4 pb-2 sm:top-0 sm:p-5">
          <div className={`flex w-full origin-center justify-center ${tab.fit || "scale-[0.82] sm:scale-90"}`}>{tab.view}</div>
        </div>
        <canvas ref={canvas} width={COLS} height={ROWS} aria-hidden className="pixelated pointer-events-none absolute inset-0 h-full w-full opacity-0" />
        <span className="absolute left-3 top-3 bg-ink px-2 py-1 font-pixel text-[11px] uppercase text-white">contoh tampilan</span>
      </div>

      <div className="border-t-[3px] border-ink bg-ink px-4 py-3 font-pixel text-[11px] leading-[1.9] text-ink-300 sm:text-[12px]" aria-live="off">
        {tab.log.map((l, i) => (
          <p key={`${tab.id}-${i}`} className={`truncate ${i < lines ? "anim-line" : "invisible"} ${i === 0 ? "text-white" : ""}`}>
            {i === 0 ? l : <><span className="text-brand-400">✓</span> {l}</>}
            {i === lines - 1 && <span className="ml-1 inline-block h-3 w-2 translate-y-0.5 animate-blink bg-brand-400" />}
          </p>
        ))}
        <div className="mt-2 flex gap-[3px]" aria-hidden>
          {Array.from({ length: 20 }, (_, i) => (
            <i key={i} className={`h-2 flex-1 transition-colors duration-100 ${i < progress ? "bg-brand-500" : "bg-ink-700"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
