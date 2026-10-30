"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import PixelIcon from "./PixelIcon";
import { NAV, waLink } from "@/lib/site";
import { SERVICE_PAGES } from "@/lib/service-pages";

export default function Header({ popular = [] }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);
  const closeTimer = useRef();

  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMega(false);
    setDrawer(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = drawer ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && (setMega(false), setDrawer(false));
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawer]);

  const openMega = () => (clearTimeout(closeTimer.current), setMega(true));
  const closeMega = () => (closeTimer.current = setTimeout(() => setMega(false), 140));
  const active = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <a href="#konten" className="sr-only z-[70] bg-brand-600 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Langsung ke konten
      </a>
      <header className={`sticky top-0 z-50 bg-paper transition-shadow duration-150 ${scrolled || mega ? "shadow-[0_3px_0_0_#0F1A33]" : ""}`}>
        <nav aria-label="Navigasi utama" className="container-site flex h-[72px] items-center justify-between gap-6">
          <Logo />
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) =>
              item.menu ? (
                <li key={item.href} onMouseEnter={openMega} onMouseLeave={closeMega}>
                  <button
                    type="button"
                    aria-expanded={mega}
                    aria-controls="mega-layanan"
                    onClick={() => setMega((v) => !v)}
                    className={`flex items-center gap-1 px-3.5 py-2 text-[15px] font-semibold ${active(item.href) || mega ? "text-ink" : "text-ink-500 hover:text-ink"}`}
                  >
                    {item.name}
                    <ChevronDown size={16} strokeWidth={2.5} className={`transition-transform ${mega ? "rotate-180" : ""}`} />
                  </button>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active(item.href) ? "page" : undefined}
                    className={`nav-link relative block px-3.5 py-2 text-[15px] font-semibold ${active(item.href) ? "is-active text-ink" : "text-ink-500 hover:text-ink"}`}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>
          <div className="flex items-center gap-3">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm hidden sm:inline-flex">
              Konsultasi gratis
            </a>
            <button type="button" onClick={() => setDrawer(true)} aria-label="Buka menu" aria-expanded={drawer} aria-controls="menu-mobile" className="px-box grid h-11 w-11 place-items-center text-ink lg:hidden">
              <Menu size={20} strokeWidth={2.5} />
            </button>
          </div>
        </nav>

        {mega && (
          <div id="mega-layanan" onMouseEnter={openMega} onMouseLeave={closeMega} className="anim-drop absolute inset-x-0 top-full hidden border-y-[3px] border-ink bg-panel lg:block">
            <div className="container-site grid grid-cols-12 gap-10 py-8">
              <div className="col-span-8">
                <p className="font-pixel text-[11px] uppercase tracking-wider text-ink-500">Layanan</p>
                <ul className="mt-3 grid grid-cols-2 gap-1">
                  {SERVICE_PAGES.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="group flex gap-3 p-3 hover:bg-brand-100">
                        <span className="grid h-11 w-11 shrink-0 place-items-center bg-ink text-white group-hover:bg-brand-600">
                          <PixelIcon name={s.icon} size={24} className="group-hover:animate-hop" />
                        </span>
                        <span>
                          <span className="block text-[15px] font-bold text-ink">{s.name}</span>
                          <span className="mt-0.5 line-clamp-1 block text-[13px] text-ink-500">{s.lead}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-4 bg-sand p-5">
                <p className="font-pixel text-[11px] uppercase tracking-wider text-ink-500">Layanan di kota Anda</p>
                <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1">
                  {popular.slice(0, 12).map((p) => (
                    <li key={p.href}>
                      <Link href={p.href} className="block py-1 text-[14px] font-semibold text-ink-700 hover:text-brand-700">
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/wilayah" className="mt-4 inline-flex items-center gap-1 text-[14px] font-bold text-brand-700 hover:underline">
                  Cari 514 kabupaten/kota <ArrowRight size={15} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {drawer && (
        <>
          <div className="anim-fade fixed inset-0 z-[55] bg-ink/50 lg:hidden" onClick={() => setDrawer(false)} />
          <div id="menu-mobile" role="dialog" aria-modal="true" aria-label="Menu" className="anim-slide fixed inset-y-0 right-0 z-[60] flex w-full max-w-sm flex-col border-l-[3px] border-ink bg-paper lg:hidden">
            <div className="flex h-[72px] items-center justify-between border-b-[3px] border-ink px-5">
              <Logo />
              <button type="button" onClick={() => setDrawer(false)} aria-label="Tutup menu" className="px-box grid h-11 w-11 place-items-center">
                <X size={20} strokeWidth={2.5} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-3">
              <ul>
                {NAV.map((item, i) =>
                  item.menu ? (
                    <li key={item.href} className="anim-item border-b-2 border-line" style={{ "--i": i }}>
                      <button type="button" onClick={() => setMobileServices((v) => !v)} aria-expanded={mobileServices} className="flex w-full items-center justify-between py-4 font-pixel text-[22px] text-ink">
                        {item.name}
                        <ChevronDown size={20} className={`transition-transform ${mobileServices ? "rotate-180" : ""}`} />
                      </button>
                      {mobileServices && (
                        <ul className="space-y-1 pb-4">
                          {[...SERVICE_PAGES.map((s) => ({ href: `/services/${s.slug}`, name: s.name })), { href: "/services", name: "Semua layanan" }, { href: "/wilayah", name: "Layanan di kota Anda" }].map((l) => (
                            <li key={l.href}>
                              <Link href={l.href} onClick={() => setDrawer(false)} className="block px-3 py-2 text-[15px] font-semibold text-ink-600 hover:bg-brand-100">
                                {l.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li key={item.href} className="anim-item border-b-2 border-line" style={{ "--i": i }}>
                      <Link href={item.href} onClick={() => setDrawer(false)} className={`block py-4 font-pixel text-[22px] ${active(item.href) ? "text-brand-700" : "text-ink"}`}>
                        {item.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="border-t-[3px] border-ink p-5">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                Konsultasi gratis via WhatsApp
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
