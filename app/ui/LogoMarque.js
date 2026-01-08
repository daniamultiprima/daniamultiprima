'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "Kementerian Komunikasi dan Digital", logo: "/images/clients/komdigi.svg", isDark: false },
  { name: "AJ ThinkLab", logo: "/images/clients/ajthinklab.svg" },
  { name: "Pemko Tanjung Balai", logo: "/images/clients/tanjung_balai.svg" },
  { name: "Telkom Indonesia", logo: "/images/clients/telkom.png", isDark: true },
  { name: "Autolinx", logo: "/images/clients/autolinx.png", isDark: true },
  { name: "Pemkab Agam", logo: "/images/clients/agam.svg" },
  { name: "Universitas Sumatera Utara", logo: "/images/clients/usu.svg" },
  { name: "RSUD Drs. H. Amri Tambunan", logo: "/images/clients/tambunan.svg" },
  { name: "DPRD Deli Serdang", logo: "/images/clients/deliserdang.svg" },
  { name: "PT. Dat Daramenta Sejahtera", logo: "/images/clients/dds.svg" },
  { name: "Politeknik Penerbangan", logo: "/images/clients/poltekbang.svg" },
  { name: "Pemkab Serdang Bedagai", logo: "/images/clients/sergai.svg" },
  { name: "Pemko Binjai", logo: "/images/clients/binjai.svg" },
  { name: "RS Sri Pamela", logo: "/images/clients/sripamela.svg" },
  { name: "Kian & Kei Cafe", logo: "/images/clients/kian.svg" },
  { name: "Amberjaini", logo: "/images/clients/amberjaini.svg" },
  { name: "Gudang Sayur Kamtibmas", logo: "/images/clients/kamtibmas.svg" },
  { name: "Politeknik Negeri Medan", logo: "/images/clients/polmed.svg" },
  { name: "Pemkab Deli Serdang", logo: "/images/clients/deliserdang.svg" },
  { name: "Prima Vision", logo: "/images/clients/prima.png", isDark: true },
  { name: "SMKN 1", logo: "/images/clients/smkn1.svg" },
  { name: "Lagizha", logo: "/images/clients/lagizha.svg" },
  { name: "Darussalam", logo: "/images/clients/darussalam.svg" },
];

const row1 = partners.slice(0, Math.ceil(partners.length / 2));
const row2 = partners.slice(Math.ceil(partners.length / 2));

export default function LogoMarquee() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-[#050505] overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505] pointer-events-none" />

      <div className="relative z-10 text-center mb-12 md:mb-20 px-6 max-w-4xl mx-auto">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          Partner Terpercaya
        </span>

        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4 md:mb-6">
          Dipercaya oleh Instansi <br className="hidden md:block" />
          <span className="text-blue-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]">
            Pemerintah & Swasta.
          </span>
        </h2>

        <p className="text-sm md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Menjadi mitra teknologi andalan bagi <strong className="text-white font-semibold">Kementerian, Dinas Pemerintahan</strong> dan <strong className="text-white font-semibold">Perusahaan Swasta</strong> di seluruh Indonesia.
        </p>
      </div>

      <div className="relative w-full flex flex-col gap-6 md:gap-8 z-10">
        <div className="absolute inset-y-0 left-0 w-10 md:w-64 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-10 md:w-64 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />
        <MarqueeRow items={row1} direction="left" speed={180} />
        <MarqueeRow items={row2} direction="right" speed={180} />
      </div>
    </section>
  );
}

function MarqueeRow({ items, direction, speed }) {
  return (
    <div className="flex overflow-hidden select-none">
      <motion.div
        className="flex gap-4 md:gap-10 items-center flex-nowrap"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      >
        {[...items, ...items, ...items, ...items].map((partner, idx) => (
          <CleanCard key={`${direction}-${idx}`} logoSrc={partner.logo} name={partner.name} isDark={partner.isDark} />
        ))}
      </motion.div>
    </div>
  );
}

function CleanCard({ logoSrc, name, isDark }) {
  return (
    <div className="group relative w-[140px] h-[70px] md:w-[220px] md:h-[130px] flex-shrink-0">
      <div className="relative w-full h-full bg-white/[0.03] border border-white/[0.05] rounded-xl flex items-center justify-center transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm overflow-hidden">
        <div className="relative w-24 h-12 md:w-44 md:h-24 transition-transform duration-500 group-hover:scale-110">
          <Image src={logoSrc} alt={`Logo ${name} - Partner Dania Multi Prima`} fill className={`object-contain transition-all duration-300 px-2 md:px-0 ${isDark ? "brightness-0 invert opacity-80 group-hover:opacity-100" : ""}`} sizes="(max-width: 768px) 140px, 220px" quality={90} />
        </div>
        <div className="absolute inset-0 -translate-x-[150%] skew-x-12 group-hover:animate-shine bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      </div>
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30 whitespace-nowrap hidden md:block">
        <span className="text-xs font-medium text-gray-400 tracking-wide bg-black/50 px-2 py-1 rounded border border-white/10 backdrop-blur-md">{name}</span>
      </div>
    </div>
  );
}