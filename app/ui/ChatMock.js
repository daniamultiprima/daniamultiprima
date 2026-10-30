"use client";

import { useEffect, useRef, useState } from "react";

// Simulasi percakapan chatbot WhatsApp AI (contoh tampilan)
const SCRIPT = [
  { from: "user", text: "Sabtu buka nggak untuk urus KTP?" },
  { from: "bot", text: "Layanan tatap muka buka Senin–Jumat, 08.00–15.00. Hari Sabtu bisa daftar lewat layanan online." },
  { from: "user", text: "Boleh minta link-nya?" },
  { from: "bot", text: "Tentu, ini tautannya. Syaratnya cukup foto KK. Ada lagi yang bisa dibantu?" },
];

export default function ChatMock({ className = "", compact = false }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(1);
  const [typing, setTyping] = useState(false);
  const [round, setRound] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: "-40px" });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = setTimeout(() => setCount(SCRIPT.length), 0);
      return () => clearTimeout(t);
    }
    const timers = [];
    if (count < SCRIPT.length) {
      if (SCRIPT[count].from === "bot") {
        timers.push(setTimeout(() => setTyping(true), 450));
        timers.push(setTimeout(() => (setTyping(false), setCount((c) => c + 1)), 1800));
      } else timers.push(setTimeout(() => setCount((c) => c + 1), 1200));
    } else timers.push(setTimeout(() => (setCount(1), setRound((r) => r + 1)), 4200));
    return () => timers.forEach(clearTimeout);
  }, [count, visible]);

  return (
    <div ref={ref} className={`px-box px-drop w-[290px] ${className}`} aria-hidden>
      <div className="flex items-center gap-2.5 bg-ink px-3 py-2.5">
        <span className="grid h-8 w-8 place-items-center bg-brand-600 font-pixel text-[11px] text-white">AI</span>
        <div className="leading-tight">
          <p className="text-[13px] font-bold text-white">Asisten Layanan</p>
          <p className="font-pixel text-[11px] text-brand-300">{typing ? "mengetik..." : "online"}</p>
        </div>
      </div>
      <div className={`flex flex-col justify-end gap-2 overflow-hidden bg-sand p-3 ${compact ? "h-[200px]" : "h-[230px]"}`}>
        {SCRIPT.slice(0, count).map((msg, i) => (
          <p
            key={`${round}-${i}`}
            className={`anim-bubble max-w-[86%] border-2 border-ink px-2.5 py-1.5 text-[12px] leading-snug ${msg.from === "user" ? "self-end origin-bottom-right bg-brand-600 text-white" : "self-start origin-bottom-left bg-white text-ink"}`}
          >
            {msg.text}
          </p>
        ))}
        {typing && (
          <span className="anim-bubble flex gap-1 self-start border-2 border-ink bg-white px-2.5 py-2.5">
            {[0, 1, 2].map((d) => (
              <i key={d} className="h-1.5 w-1.5 animate-dot bg-ink" style={{ animationDelay: `${d * 0.2}s` }} />
            ))}
          </span>
        )}
      </div>
    </div>
  );
}
