"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[^a-z0-9 ]/g, "");

// Cari kab/kota atau provinsi. Data (±550 entri) baru diunduh saat kolom pertama kali dipakai.
export default function CityFinder({ popular = [] }) {
  const [q, setQ] = useState("");
  const [items, setItems] = useState(null);
  const loading = useRef(false);

  const load = () => {
    if (items || loading.current) return;
    loading.current = true;
    fetch("/wilayah/cari.json")
      .then((r) => r.json())
      .then(setItems)
      .catch(() => (loading.current = false));
  };

  const results = useMemo(() => {
    const n = norm(q.trim());
    if (n.length < 2 || !items) return [];
    return items
      .map((it) => ({ it, i: norm(it.label).indexOf(n) }))
      .filter((r) => r.i >= 0)
      .sort((a, b) => a.i - b.i || a.it.label.length - b.it.label.length)
      .slice(0, 8)
      .map((r) => r.it);
  }, [q, items]);

  return (
    <div>
      <label className="px-box px-drop flex items-center gap-3 px-4" style={{ "--bg": "#fff" }}>
        <Search size={20} className="shrink-0 text-ink-500" />
        <span className="sr-only">Cari kabupaten, kota, atau provinsi</span>
        <input
          type="search"
          value={q}
          onFocus={load}
          onChange={(e) => (load(), setQ(e.target.value.slice(0, 60)))}
          placeholder="Ketik nama kota atau kabupaten, mis. Makassar"
          className="h-14 w-full bg-transparent text-[16px] text-ink placeholder:text-ink-400 focus:outline-none"
          autoComplete="off"
        />
      </label>
      {q.trim().length >= 2 && (
        <ul className="anim-drop px-box mt-4 divide-y-2 divide-line" style={{ "--bg": "#fff" }}>
          {!items ? (
            <li className="px-4 py-3 font-pixel text-[11px] uppercase text-ink-500">Memuat data wilayah...</li>
          ) : results.length ? (
            results.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="group flex items-center justify-between gap-3 px-4 py-3 hover:bg-brand-50">
                  <span>
                    <span className="block font-semibold text-ink">{r.label}</span>
                    <span className="block text-[13px] text-ink-500">{r.sub}</span>
                  </span>
                  <ArrowRight size={18} className="text-ink-400 group-hover:text-brand-700" />
                </Link>
              </li>
            ))
          ) : (
            <li className="px-4 py-3 text-[15px] text-ink-500">Tidak ditemukan. Coba ejaan lain, atau hubungi kami langsung.</li>
          )}
        </ul>
      )}
      {popular.length > 0 && (
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="mr-1 text-[14px] font-semibold text-ink-500">Populer:</span>
          {popular.map((p) => (
            <Link key={p.href} href={p.href} className="chip">
              {p.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
