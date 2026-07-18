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
    <section className="relative w-full py-20 md:py-28 bg-[#020617] border-b-[8px] border-black overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Pixel Dots */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="relative z-10 text-center mb-16 md:mb-24 px-6 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Pixel Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 border-[4px] border-black bg-blue-700 shadow-[6px_6px_0_0_#000] mb-8 transform rotate-1">
          <span className="w-3 h-3 bg-white border-[2px] border-black animate-pulse" />
          <span className="font-logo text-[10px] md:text-xs tracking-[0.2em] text-white uppercase drop-shadow-[2px_2px_0px_#000] font-bold">
            PARTNER TERPERCAYA
          </span>
        </div>

        {/* Neo-Brutalist Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-logo text-2xl md:text-3xl lg:text-[2.5rem] text-white tracking-widest leading-[1.5] uppercase drop-shadow-[4px_4px_0_#000] z-10 relative mb-6 md:mb-8">
            Dipercaya Oleh Instansi
          </h2>
          <div className="inline-block bg-yellow-400 border-[6px] border-black px-6 md:px-10 py-3 shadow-[8px_8px_0_0_#fff] transform -rotate-1 z-20 relative">
            <span className="font-logo text-xl md:text-3xl lg:text-[2.5rem] text-black tracking-widest uppercase drop-shadow-[2px_2px_0_#fff]">
              Pemerintah & Swasta.
            </span>
          </div>
        </div>

        {/* Solid Paragraph Box */}
        <div className="bg-gray-800 border-[4px] border-black p-4 md:p-6 shadow-[6px_6px_0_0_#000] max-w-3xl transform rotate-1">
          <p className="font-sans text-sm md:text-lg text-gray-300 leading-relaxed font-bold">
            Menjadi mitra teknologi andalan bagi <strong className="text-white font-black bg-blue-600 px-1 border-[2px] border-black mx-1">Kementerian, Dinas Pemerintahan</strong> dan <strong className="text-white font-black bg-blue-600 px-1 border-[2px] border-black mx-1">Perusahaan Swasta</strong> di seluruh Indonesia.
          </p>
        </div>

      </div>

      {/* TICKER TAPE MARQUEE SECTION */}
      <div className="relative w-full flex flex-col gap-10 md:gap-14 z-10 mt-4 bg-[#020617] py-16 shadow-[0_10px_0_0_rgba(0,0,0,0.5)] overflow-hidden">
        
        {/* Decorative Grid Top/Bottom */}
        <div className="absolute top-0 left-0 w-full h-2 bg-blue-900/30 border-b-[2px] border-blue-500/20" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-blue-900/30 border-t-[2px] border-blue-500/20" />

        <MarqueeRow items={row1} direction="left" speed={200} />
        <MarqueeRow items={row2} direction="right" speed={200} />
      </div>
    </section>
  );
}

function MarqueeRow({ items, direction, speed }) {
  return (
    <div className="flex select-none w-full bg-[#020617] py-8 shadow-inner relative z-20 overflow-visible">
      {/* Directory Grid Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      <motion.div
        className="flex gap-8 md:gap-12 items-center flex-nowrap pl-8 md:pl-12"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      >
        {[...items, ...items, ...items, ...items].map((partner, idx) => (
          <BlockyCard key={`${direction}-${idx}`} logoSrc={partner.logo} name={partner.name} isDark={partner.isDark} />
        ))}
      </motion.div>
    </div>
  );
}

function BlockyCard({ logoSrc, name, isDark }) {
  return (
    <div className="group relative w-[160px] h-[90px] md:w-[220px] md:h-[120px] flex-shrink-0 mt-6 cursor-crosshair">
      
      {/* Folder Tab */}
      <div className="absolute -top-[16px] md:-top-[20px] left-[-2px] w-[50%] h-[20px] md:h-[24px] bg-[#cbd5e1] border-[3px] border-b-0 border-black rounded-t-md transition-all duration-300 group-hover:bg-[#fbbf24] z-10 flex items-center justify-center">
         {/* Dotted lines on tab */}
         <div className="flex gap-1 md:gap-1.5 opacity-50">
           <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-black rounded-full" />
           <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-black rounded-full" />
           <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-black rounded-full" />
         </div>
      </div>

      {/* Folder Body */}
      <div className="relative w-full h-full bg-[#e2e8f0] border-[3px] border-black rounded-b-md rounded-tr-md flex items-center justify-center p-2.5 transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-[#fbbf24] shadow-[6px_6px_0_0_#1e293b] group-hover:shadow-[8px_8px_0_0_#000] z-20">
        
        {/* Inner paper/screen */}
        <div className="w-full h-full bg-white border-[2px] border-black flex items-center justify-center relative p-2 shadow-inner">
           <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-110 z-10">
             <Image 
               src={logoSrc} 
               alt={`Logo ${name}`} 
               fill 
               className={`object-contain transition-all duration-300 ${isDark ? "opacity-70 group-hover:opacity-100" : "grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"}`} 
               sizes="(max-width: 768px) 160px, 220px" 
             />
           </div>
        </div>
      </div>

      {/* Hover Tooltip (Pixel Style) */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[100] whitespace-nowrap hidden md:block">
        <div className="bg-black border-[2px] border-[#fbbf24] px-3 py-1.5 shadow-[2px_2px_0_0_#fff]">
          <span className="font-mono text-[10px] font-bold text-[#fbbf24] tracking-widest uppercase">{name}</span>
        </div>
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-t-[5px] border-t-[#fbbf24] border-r-[5px] border-r-transparent" />
      </div>
      
    </div>
  );
}