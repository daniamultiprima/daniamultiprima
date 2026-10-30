"use client";

import { useState } from "react";
import CaseCard from "@/ui/CaseCard";
import ScrollRow from "@/ui/ScrollRow";
import { PROJECT_CATEGORIES, PROJECTS } from "@/lib/content";

export default function PortfolioExplorer() {
  const [cat, setCat] = useState("Semua");
  const list = (cat === "Semua" ? PROJECTS : PROJECTS.filter((p) => p.cat === cat)).slice().sort((a, b) => Number(!!b.featured) - Number(!!a.featured));

  return (
    <>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0 md:max-w-[75%]">
          <ScrollRow label="Filter sektor">
            {PROJECT_CATEGORIES.map((c) => (
              <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)} className={`btn btn-sm shrink-0 snap-start ${cat === c ? "btn-dark" : "btn-light"}`}>
                {c}
                <span className={`font-pixel text-[11px] ${cat === c ? "text-brand-300" : "text-ink-400"}`}>{c === "Semua" ? PROJECTS.length : PROJECTS.filter((p) => p.cat === c).length}</span>
              </button>
            ))}
          </ScrollRow>
        </div>
        <p className="font-pixel text-[11px] uppercase tracking-wider text-ink-500" aria-live="polite">
          {list.length} proyek ditampilkan
        </p>
      </div>
      <ul key={cat} className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <li key={p.id} className="anim-card" style={{ "--i": Math.min(i, 9) }}>
            <CaseCard p={p} />
          </li>
        ))}
      </ul>
    </>
  );
}
