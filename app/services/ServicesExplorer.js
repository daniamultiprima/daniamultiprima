"use client";

import { useState } from "react";
import Link from "next/link";
import PixelIcon from "@/ui/PixelIcon";
import ScrollRow from "@/ui/ScrollRow";
import { SERVICE_CATEGORIES, SERVICES } from "@/lib/content";

export default function ServicesExplorer() {
  const [cat, setCat] = useState("Semua");
  const list = cat === "Semua" ? SERVICES : SERVICES.filter((s) => s.cat === cat);

  return (
    <>
      <ScrollRow label="Filter kategori">
        {SERVICE_CATEGORIES.map((c) => (
          <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)} className={`btn btn-sm shrink-0 snap-start ${cat === c ? "btn-dark" : "btn-light"}`}>
            {c}
          </button>
        ))}
      </ScrollRow>
      <p className="sr-only" aria-live="polite">
        {list.length} layanan ditampilkan
      </p>
      <ul key={cat} className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {list.map((s, i) => {
          const Wrap = s.slug ? Link : "div";
          return (
            <li key={s.id} className="anim-card" style={{ "--i": Math.min(i, 9) }}>
              <Wrap {...(s.slug ? { href: `/services/${s.slug}` } : {})} className={`px-box group flex h-full flex-col p-6 ${s.slug ? "px-drop px-lift" : ""}`}>
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center bg-ink text-white group-hover:bg-brand-600">
                    <PixelIcon name={s.icon} size={24} className="group-hover:animate-hop" />
                  </span>
                  <span className="font-pixel text-[11px] uppercase text-ink-500">{s.cat}</span>
                </div>
                <h2 className="t-h3 mt-5">{s.title}</h2>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-500">{s.desc}</p>
                {s.slug && <span className="mt-5 text-[14px] font-bold text-brand-700">Detail layanan →</span>}
              </Wrap>
            </li>
          );
        })}
      </ul>
    </>
  );
}
