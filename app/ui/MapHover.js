"use client";

import { useEffect, useRef, useState } from "react";

// Tooltip kecil untuk peta: membaca data-nama/data-info dari path yang di-hover
export default function MapHover() {
  const ref = useRef(null);
  const [tip, setTip] = useState(null);

  useEffect(() => {
    const box = ref.current?.closest("[data-map]");
    if (!box) return;
    const show = (e) => {
      const el = e.target.closest?.("[data-nama]");
      if (!el) return setTip(null);
      const r = box.getBoundingClientRect();
      setTip({ nama: el.dataset.nama, info: el.dataset.info, x: e.clientX - r.left, y: e.clientY - r.top, w: r.width });
    };
    const hide = () => setTip(null);
    box.addEventListener("mousemove", show);
    box.addEventListener("mouseleave", hide);
    return () => (box.removeEventListener("mousemove", show), box.removeEventListener("mouseleave", hide));
  }, []);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0">
      {tip && (
        <div
          className="px-box px-drop absolute px-3 py-2"
          style={{ "--bg": "#FBF9F4", left: Math.min(tip.x + 14, tip.w - 230), top: tip.y + 14, width: 216 }}
        >
          <p className="text-[15px] font-bold text-ink">{tip.nama}</p>
          <p className="text-[13px] text-ink-500">{tip.info}</p>
          <p className="mt-1 font-pixel text-[11px] uppercase text-brand-700">klik untuk lihat →</p>
        </div>
      )}
    </div>
  );
}
