"use client";

import { useEffect, useRef, useState } from "react";

const INK = "#0F1A33";

// Sprite robot 12x15, dua frame langkah
function Robot({ frame, w = 48 }) {
  const px = (x, y, w, h, f) => <rect key={`${x}${y}${w}${h}${f}`} x={x} y={y} width={w} height={h} fill={f} />;
  return (
    <svg viewBox="0 0 12 15" width={w} height={w * 1.25} shapeRendering="crispEdges" aria-hidden>
      {px(5, 0, 2, 1, "#2563EB")}
      {px(5.5, 1, 1, 1, INK)}
      {px(1, 2, 10, 6, INK)}
      {px(2, 3, 8, 4, "#FBF9F4")}
      {px(3, 4, 6, 2, INK)}
      {px(4, 4, 1, 1, "#60A5FA")}
      {px(7, 4, 1, 1, "#60A5FA")}
      {px(2, 8, 8, 4, INK)}
      {px(3, 9, 6, 2, "#FBF9F4")}
      {px(5, 9, 2, 1, "#2563EB")}
      {frame ? [px(3, 12, 2, 2, INK), px(7, 12, 2, 1, INK), px(8, 13, 2, 1, INK)] : [px(7, 12, 2, 2, INK), px(3, 12, 2, 1, INK), px(2, 13, 2, 1, INK)]}
    </svg>
  );
}

// Robot berjalan di jalur bertahap mengikuti scroll (tanpa library animasi)
export default function Journey({ steps }) {
  const ref = useRef(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = ref.current.getBoundingClientRect();
      const start = innerHeight * 0.8, end = innerHeight * 0.45;
      const v = (start - r.top) / (r.height + start - end);
      setP(Math.round(Math.min(1, Math.max(0, v)) * 40) / 40);
    };
    const onScroll = () => raf || (raf = requestAnimationFrame(update));
    update();
    addEventListener("scroll", onScroll, { passive: true });
    return () => (removeEventListener("scroll", onScroll), cancelAnimationFrame(raf));
  }, []);

  const pct = p * 100;
  const reached = Math.floor(p * steps.length + 0.15);
  const frame = Math.round(p * 40) % 2;

  return (
    <div ref={ref} className="relative">
      <div className="relative hidden h-[84px] md:block" aria-hidden>
        <div className="absolute bottom-[18px]" style={{ left: `calc(${pct}% - ${pct * 0.48}px)` }}>
          <Robot frame={frame} />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-3 bg-sand" style={{ boxShadow: "0 -3px 0 0 #0F1A33, 0 3px 0 0 #0F1A33, -3px 0 0 0 #0F1A33, 3px 0 0 0 #0F1A33" }}>
          <div className="h-full bg-brand-600" style={{ width: `${Math.round(p * 20) * 5}%` }} />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0_calc(5%-3px),#0F1A33_calc(5%-3px)_5%)]" />
        </div>
      </div>
      {/* HP: jalur vertikal di kiri, robot turun mengikuti scroll */}
      <div aria-hidden className="absolute bottom-0 left-[14px] top-8 w-3 bg-sand md:hidden" style={{ boxShadow: "0 -3px 0 0 #0F1A33, 0 3px 0 0 #0F1A33, -3px 0 0 0 #0F1A33, 3px 0 0 0 #0F1A33" }}>
        <div className="w-full bg-brand-600" style={{ height: `${Math.round(p * 20) * 5}%` }} />
      </div>
      <div aria-hidden className="absolute left-0 z-10 md:hidden" style={{ top: `calc(32px + (100% - 77px) * ${p})` }}>
        <Robot frame={frame} w={36} />
      </div>
      <ol className="rv-group mt-8 grid gap-4 pl-12 md:mt-10 md:grid-cols-2 md:gap-6 md:pl-0 lg:grid-cols-4">
        {steps.map((s, i) => {
          const done = i < reached;
          return (
            <li key={s.t} className="rv rv-up px-box p-5 transition-colors duration-200 md:p-6" style={{ "--bg": done ? "#DCE8FF" : "#fff" }}>
              <div className="flex items-center justify-between">
                <span className={`grid h-10 w-10 place-items-center font-pixel text-[22px] transition-colors ${done ? "bg-brand-600 text-white" : "bg-sand text-ink"}`}>{done ? "✓" : i + 1}</span>
                {s.time && <span className="font-pixel text-[11px] uppercase tracking-wider text-ink-500">{s.time}</span>}
              </div>
              <h3 className="t-h3 mt-4 max-md:!text-[19px] md:mt-5">{s.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{s.d}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
