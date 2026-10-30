"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import PixelIcon from "./PixelIcon";

// Baris horizontal yang bisa di-scroll (sentuh, roda mouse, atau tombol kiri/kanan).
// Padding dalam menjaga border & bayangan pixel tidak terpotong.
export default function ScrollRow({ children, label }) {
  const ref = useRef(null);
  const [edge, setEdge] = useState({ left: true, right: true });

  const check = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setEdge({ left: el.scrollLeft <= 12, right: el.scrollLeft + el.clientWidth >= el.scrollWidth - 12 });
  }, []);

  useEffect(() => {
    const el = ref.current;
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    // roda mouse vertikal -> geser horizontal (hanya saat memang bisa digeser)
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX) || el.scrollWidth <= el.clientWidth) return;
      const atEnd = (e.deltaY > 0 && el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) || (e.deltaY < 0 && el.scrollLeft <= 0);
      if (atEnd) return;
      e.preventDefault();
      el.scrollBy({ left: e.deltaY, behavior: "auto" });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => (ro.disconnect(), el.removeEventListener("wheel", onWheel));
  }, [check]);

  const go = (dir) => ref.current.scrollBy({ left: dir * ref.current.clientWidth * 0.7, behavior: "smooth" });
  const both = edge.left && edge.right;

  return (
    <div className="relative flex items-center gap-3">
      {!both && (
        <button type="button" onClick={() => go(-1)} disabled={edge.left} aria-label="Geser ke kiri" className="btn btn-light btn-sm !h-11 !w-11 shrink-0 !px-0 disabled:opacity-30">
          <PixelIcon name="arrow" size={24} className="rotate-180" />
        </button>
      )}
      <div ref={ref} onScroll={check} role="group" aria-label={label} className="no-scrollbar flex min-w-0 flex-1 snap-x gap-4 overflow-x-auto scroll-smooth px-1.5 py-3 pr-3">
        {children}
      </div>
      {!both && (
        <button type="button" onClick={() => go(1)} disabled={edge.right} aria-label="Geser ke kanan" className="btn btn-light btn-sm !h-11 !w-11 shrink-0 !px-0 disabled:opacity-30">
          <PixelIcon name="arrow" size={24} />
        </button>
      )}
    </div>
  );
}
