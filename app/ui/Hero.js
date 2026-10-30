import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import BuildConsole from "./BuildConsole";
import PixelIcon from "./PixelIcon";
import { PixelEdge } from "./blocks";
import { waLink } from "@/lib/site";

// Dekorasi pixel kecil yang berkedip di latar hero
const SPARKS = [
  [6, 18], [44, 10], [92, 22], [97, 70], [3, 82], [52, 92], [70, 6],
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper bg-pixel-dots">
      {SPARKS.map(([x, y], i) => (
        <span key={i} aria-hidden className="spark absolute hidden md:block" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.45}s` }} />
      ))}

      <div className="container-site relative grid items-center gap-14 pb-20 pt-10 md:pt-14 lg:grid-cols-12 lg:pb-24">
        <div className="lg:col-span-6">
          <p className="hero-in inline-flex items-center gap-2 bg-ink px-3 py-1.5 font-pixel text-[11px] uppercase tracking-wider text-white">
            <i className="h-2 w-2 animate-blink bg-brand-400" /> Software house & konsultan IT · sejak 2017
          </p>

          {/* H1 tanpa animasi masuk agar langsung terbaca (LCP & SEO) */}
          <h1 className="mt-6">
            <span className="t-hero block">Jasa pembuatan website, aplikasi &amp; AI</span>
            <span className="mt-4 block text-[20px] font-bold leading-snug text-brand-700 md:text-[24px]">dan konsultan IT untuk 514 kabupaten/kota di seluruh Indonesia</span>
          </h1>

          <p className="hero-in lead mt-6 max-w-xl" style={{ "--d": "0.1s" }}>
            Kami membangun sistem untuk pemerintah daerah, rumah sakit, kampus, dan bisnis, mulai dari konsultasi gratis sampai sistemnya dipakai setiap
            hari.
          </p>

          <div className="hero-in mt-9 flex flex-col gap-4 sm:flex-row" style={{ "--d": "0.2s" }}>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <MessageCircle size={18} strokeWidth={2.5} /> Konsultasi gratis
            </a>
            <Link href="/portfolio" className="btn btn-light group">
              Lihat hasil kerja <ArrowRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <ul className="hero-in mt-10 flex flex-wrap gap-3" style={{ "--d": "0.3s" }}>
            {[
              ["rocket", "35+ proyek selesai"],
              ["cart", "Terdaftar E-Katalog"],
              ["hospital", "Penyedia SATUSEHAT"],
            ].map(([icon, label]) => (
              <li key={label} className="chip">
                <PixelIcon name={icon} size={24} className="-my-1 scale-75 text-brand-600" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-in relative lg:col-span-6" style={{ "--d": "0.15s" }}>
          <BuildConsole />
        </div>
      </div>
      <PixelEdge color="#E9E1CF" />
    </section>
  );
}
