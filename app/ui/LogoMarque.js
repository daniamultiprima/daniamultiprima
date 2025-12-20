'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// --- DATA CLIENTS ---
// TIPS:
// isDark: true -> Untuk logo teks hitam (biar jadi putih).
// isDim: true  -> Untuk logo berwarna gelap (biar lebih terang).

const partners = [
  { name: "Kementerian Komunikasi dan Digital", logo: "/images/clients/komdigi.svg" },
  { name: "AJ ThinkLab", logo: "/images/clients/ajthinklab.png" },
  { name: "Pemko Tanjung Balai", logo: "/images/clients/tanjung_balai.png" },
  { name: "Telkom Indonesia", logo: "/images/clients/telkom.png", isDark: true },
  { name: "Autolinx", logo: "/images/clients/autolinx.png", isDark: true },
  { name: "Pemkab Agam", logo: "/images/clients/agam.png", },
  { name: "Universitas Sumatera Utara", logo: "/images/clients/usu.png" },
  { name: "RSUD Drs. H. Amri Tambunan", logo: "/images/clients/tambunan.png" },
  { name: "DPRD Deli Serdang", logo: "/images/clients/deliserdang.png" },
  { name: "PT. Dat Daramenta Sejahtera", logo: "/images/clients/dds.png" },
  { name: "Politeknik Penerbangan", logo: "/images/clients/poltekbang.png" },
  { name: "Pemkab Serdang Bedagai", logo: "/images/clients/sergai.png" },
  { name: "Pemko Binjai", logo: "/images/clients/binjai.png" },
  { name: "RS Sri Pamela", logo: "/images/clients/sripamela.png" },
  { name: "Kian & Kei Cafe", logo: "/images/clients/kian.jpg" },
  { name: "Amberjaini", logo: "/images/clients/amberjaini.png" },
  { name: "Gudang Sayur Kamtibmas", logo: "/images/clients/kamtibmas.png" },
  { name: "Politeknik Negeri Medan", logo: "/images/clients/polmed.png" },
  { name: "Pemkab Deli Serdang", logo: "/images/clients/deliserdang.png" },
  { name: "Prima Vision", logo: "/images/clients/prima.png", isDark: true },
  { name: "SMKN 1", logo: "/images/clients/smkn1.png" },
  { name: "Lagizha", logo: "/images/clients/lagizha.png" },
  { name: "Darussalam", logo: "/images/clients/darussalam.png" },
];

const row1 = partners.slice(0, Math.ceil(partners.length / 2));
const row2 = partners.slice(Math.ceil(partners.length / 2));

export default function LogoMarquee() {
  return (
    <section className="relative w-full py-28 bg-[#050505] overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center mb-20 px-6 max-w-4xl mx-auto">
        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-widest text-blue-400 uppercase mb-4 backdrop-blur-sm">
          Our Amazing Clients
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Building Future with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500">
            our clients
          </span>
        </h2>
      </div>

      {/* Marquee Area */}
      <div className="relative w-full flex flex-col gap-8 z-10">
        
        {/* Gradient Fade */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#050505] via-[#050505]/90 to-transparent z-20 pointer-events-none" />

        {/* SPEED ADJUSTMENT:
            Saya ubah speed menjadi 100 dan 120.
            Semakin TINGGI angkanya, semakin LAMBAT gerakannya.
        */}
        <MarqueeRow items={row1} direction="left" speed={220} />
        <MarqueeRow items={row2} direction="right" speed={220} />
        
      </div>
    </section>
  );
}

function MarqueeRow({ items, direction, speed }) {
  return (
    <div className="flex overflow-hidden select-none">
      <motion.div 
        className="flex gap-6 md:gap-10 items-center flex-nowrap" 
        animate={{ x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"] }} 
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: speed // Menggunakan prop speed yang sudah diperlambat
        }}
      >
        {[...items, ...items, ...items, ...items].map((partner, idx) => (
          <CleanCard 
            key={`${direction}-${idx}`} 
            logoSrc={partner.logo} 
            name={partner.name}
            isDark={partner.isDark}
            isDim={partner.isDim}
          />
        ))}
      </motion.div>
    </div>
  );
}

// --- BAGIAN CARD (SIZE BESAR & DESIGN MEWAH) ---
function CleanCard({ logoSrc, name, isDark, isDim }) {
  return (
    // 1. Ukuran KARTU (Mobile: 150x85, Desktop: 220x130)
    <div className="group relative w-[150px] h-[85px] md:w-[220px] md:h-[130px] flex-shrink-0">
      
      <div className="relative w-full h-full bg-white/[0.03] border border-white/[0.05] rounded-xl flex items-center justify-center transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm overflow-hidden">
        
        {/* 2. Ukuran IMAGE wrapper (Mobile: w-28, Desktop: w-44) */}
        <div className="relative w-28 h-14 md:w-44 md:h-24 transition-transform duration-500 group-hover:scale-110">
          <Image 
            src={logoSrc}
            alt={name}
            fill
            className={`object-contain transition-all duration-300
              ${isDark ? 'brightness-0 invert opacity-80 group-hover:opacity-100' : ''}
              ${isDim ? 'brightness-[1.5] contrast-[1.2] group-hover:brightness-100' : ''}
              ${!isDark && !isDim ? 'brightness-100' : ''}
            `}
            sizes="(max-width: 768px) 150px, 220px"
            quality={90}
          />
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 -translate-x-[150%] skew-x-12 group-hover:animate-shine bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      
      </div>

      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30 whitespace-nowrap">
        <span className="text-[10px] md:text-xs font-medium text-gray-400 tracking-wide bg-black/50 px-2 py-1 rounded border border-white/10 backdrop-blur-md">
          {name}
        </span>
      </div>

    </div>
  );
}