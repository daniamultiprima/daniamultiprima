"use client";

import { useEffect, useRef, useState } from "react";

// Angka menghitung naik saat terlihat; teks asli tetap ada di HTML untuk SEO
export default function CountUp({ value, className }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const match = /^(\D*)(\d+)(.*)$/.exec(value);
    if (!match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [, pre, num, post] = match;
    const target = Number(num);
    const from = target > 1000 ? target - 9 : 0;
    let raf;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - start) / 1000);
        // naik bertahap (12 langkah) seperti penghitung game
        const stepped = Math.floor(p * 12) / 12;
        setShown(`${pre}${Math.round(from + (target - from) * stepped)}${post}`);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(ref.current);
    return () => (io.disconnect(), cancelAnimationFrame(raf));
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {shown}
    </span>
  );
}
