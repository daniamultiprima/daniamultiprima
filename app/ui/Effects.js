"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Efek global yang ringan:
// 1) memunculkan elemen .rv saat masuk layar,
// 2) bar progres scroll bergaya pixel di atas halaman,
// 3) percikan pixel saat tombol utama diklik.
export default function Effects() {
  const pathname = usePathname();
  const barRef = useRef(null);

  // 1. Reveal on scroll (dipindai ulang setiap pindah halaman)
  useEffect(() => {
    const els = document.querySelectorAll(".rv:not(.in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // 2. Progres scroll (20 blok)
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - innerHeight;
      const p = max > 0 ? scrollY / max : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${Math.round(p * 40) / 40})`;
    };
    const onScroll = () => raf || (raf = requestAnimationFrame(update));
    update();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, [pathname]);

  // 3. Percikan pixel pada klik tombol
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const colors = ["#2563EB", "#60A5FA", "#0F1A33", "#93B8FD"];
    const onClick = (e) => {
      const btn = e.target.closest?.(".btn");
      if (!btn) return;
      for (let i = 0; i < 10; i++) {
        const s = document.createElement("i");
        const a = (Math.PI * 2 * i) / 10 + Math.random() * 0.4;
        const d = 26 + Math.random() * 22;
        s.className = "px-spark";
        s.style.left = `${e.clientX}px`;
        s.style.top = `${e.clientY}px`;
        s.style.background = colors[i % colors.length];
        s.style.setProperty("--dx", `${Math.cos(a) * d}px`);
        s.style.setProperty("--dy", `${Math.sin(a) * d}px`);
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 600);
      }
    };
    addEventListener("click", onClick);
    return () => removeEventListener("click", onClick);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-1">
      <div ref={barRef} className="h-full origin-left bg-brand-600" style={{ transform: "scaleX(0)" }} />
    </div>
  );
}
