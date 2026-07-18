"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Layers, ShieldCheck, Cpu, Power } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#0a0a0a] border-b-[8px] border-[#333] overflow-hidden">
      
      {/* INDUSTRIAL GRATING BACKGROUND */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, #333 10px, #333 12px), repeating-linear-gradient(90deg, transparent, transparent 10px, #333 10px, #333 12px)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* CLEAN NEO-BRUTALIST HEADER */}
        <div className="mb-20 w-full flex flex-col items-center text-center">
            <div className="bg-yellow-400 border-[4px] border-black px-6 py-2 shadow-[4px_4px_0_0_#000] mb-8 transform -rotate-2">
              <span className="font-logo text-black text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                Mengapa Memilih Kami
              </span>
            </div>

            <h2 className="font-logo text-3xl md:text-5xl lg:text-[3.5rem] text-white tracking-widest leading-[1.4] uppercase drop-shadow-[4px_4px_0_#000] mb-8">
              Pilihan Tepat<br/>
              <span className="bg-yellow-400 text-black px-4 py-2 border-[4px] border-black shadow-[6px_6px_0_0_#000] inline-block mt-4 transform rotate-1">
                Untuk Bisnis Anda.
              </span>
            </h2>

            <div className="max-w-2xl bg-black border-[4px] border-gray-800 p-6 shadow-[8px_8px_0_0_#2563eb]">
              <p className="font-sans text-sm md:text-base text-gray-300 font-bold leading-relaxed">
                Kami bukan sekadar vendor, tapi mitra strategis. Dengan pengalaman lebih dari 8 tahun, kami membangun fondasi digital yang kokoh untuk pertumbuhan bisnis Anda.
              </p>
            </div>
        </div>

        {/* MECHANICAL BUTTONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 w-full max-w-5xl">
          
          <MechanicalCard
            icon={<Clock size={40} className="text-black" />}
            title="Pengalaman 8+ Tahun"
            desc="Telah dipercaya oleh berbagai sektor industri dan pemerintahan selama lebih dari sewindu. Pengalaman kami adalah jaminan keberhasilan proyek Anda."
            color="bg-orange-500"
          />

          <MechanicalCard
            icon={<Layers size={40} className="text-black" />}
            title="Ekosistem Menyeluruh"
            desc="Solusi satu atap. Dari Software, Mobile App, AI, hingga pengadaan Server dan Hardware. Kami mengurus semuanya agar Anda fokus pada bisnis."
            color="bg-blue-500"
          />

          <MechanicalCard
            icon={<ShieldCheck size={40} className="text-black" />}
            title="Keamanan & Keandalan"
            desc="Keamanan bukan opsi, tapi prioritas. Kami menerapkan standar keamanan siber berlapis untuk melindungi data aset dan reputasi perusahaan Anda."
            color="bg-green-500"
          />

          <MechanicalCard
            icon={<Cpu size={40} className="text-black" />}
            title="Teknologi Masa Depan"
            desc="Kami menggunakan stack teknologi terkini (AI & IoT) yang skalabel, memastikan sistem Anda tetap relevan untuk 5-10 tahun ke depan."
            color="bg-yellow-400"
          />

        </div>
      </div>
    </section>
  );
}

function Screw({ className }) {
  return (
    <div className={`w-3 h-3 md:w-4 md:h-4 bg-[#4b5563] border-[2px] border-black rounded-full flex items-center justify-center shadow-[1px_1px_0_0_#000] ${className}`}>
      <div className="w-full h-[2px] bg-[#222] transform rotate-45" />
    </div>
  );
}

function MechanicalCard({ icon, title, desc, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative w-full group cursor-pointer"
    >
      {/* Container holding the 3D button logic */}
      <div className="relative bg-[#111827] border-[4px] border-[#333] p-6 md:p-8 
                      shadow-[8px_8px_0_0_#2563eb] 
                      transition-all duration-150 ease-out 
                      active:shadow-none active:translate-y-[8px] active:translate-x-[8px]
                      hover:shadow-[4px_4px_0_0_#2563eb] hover:translate-y-[4px] hover:translate-x-[4px]
                      hover:border-[#3b82f6] hover:bg-[#1e293b]
                      h-full flex flex-col"
      >
        {/* Hardware Screws */}
        <Screw className="absolute top-2 left-2" />
        <Screw className="absolute top-2 right-2" />
        <Screw className="absolute bottom-2 left-2" />
        <Screw className="absolute bottom-2 right-2" />

        <div className="relative z-10 flex flex-col h-full mt-2">
          
          <div className="flex items-start gap-4 mb-6 border-b-[4px] border-[#333] pb-4 group-hover:border-[#3b82f6] transition-colors">
            <div className={`w-16 h-16 ${color} border-[4px] border-black shadow-[4px_4px_0_0_#000] flex items-center justify-center flex-shrink-0 group-active:scale-95 transition-transform`}>
              {icon}
            </div>
            
            <h3 className="text-xl md:text-2xl font-black text-white tracking-tight leading-tight uppercase font-logo pt-1">
              {title}
            </h3>
          </div>
          
          <p className="text-gray-400 text-sm md:text-base font-bold leading-relaxed border-l-[4px] border-gray-600 pl-4 mt-auto group-hover:text-gray-200">
            {desc}
          </p>

          {/* Hazard warning decor */}
          <div className="absolute top-0 right-10 w-16 h-1.5 bg-[repeating-linear-gradient(45deg,#000,#000_4px,#eab308_4px,#eab308_8px)] opacity-80" />

        </div>
      </div>
    </motion.div>
  );
}
