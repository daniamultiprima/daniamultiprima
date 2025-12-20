'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, Landmark, GraduationCap, Wifi, 
  Building2, Plane, Coffee, ShoppingBag 
} from 'lucide-react';
 
const partners = [
  { name: "Telkom Indonesia", icon: Wifi },
  { name: "Universitas Sumatera Utara", icon: GraduationCap },
  { name: "RSUD Drs. H. Amri Tambunan", icon: Stethoscope },
  { name: "DPRD Deli Serdang", icon: Landmark },
  { name: "Politeknik Penerbangan", icon: Plane },
  { name: "Pemkab Serdang Bedagai", icon: Building2 },
  { name: "Pemko Binjai", icon: Landmark },
  { name: "RS Sri Pamela", icon: Stethoscope },
  { name: "Kian & Kei Cafe", icon: Coffee },
  { name: "Amberjaini", icon: ShoppingBag },
  { name: "RSGM USU", icon: Stethoscope },
  { name: "Politeknik Negeri Medan", icon: GraduationCap },
];

// Bagi data menjadi 2 baris
const halfLength = Math.ceil(partners.length / 2);
const row1 = partners.slice(0, halfLength);
const row2 = partners.slice(halfLength);

export default function LogoMarquee() {
  return (
    <section className="w-full py-24 bg-[#020617] border-y border-white/5 overflow-hidden relative">
        
      {/* Background Decor (Optional Glow di belakang) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
        <p className="text-base md:text-lg font-bold tracking-[0.3em] text-blue-500 uppercase mb-3">
          Trusted Partners
        </p>
        <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Powering <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Industry Leaders</span>
        </h3>
      </div>

      {/* Container Slider */}
      <div className="relative flex flex-col gap-10 w-full overflow-hidden">
        
        {/* Masking Gradient yang lebih lebar agar transisi lebih halus */}
        <div className="absolute top-0 left-0 z-20 w-32 md:w-64 h-full bg-gradient-to-r from-[#020617] to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 z-20 w-32 md:w-64 h-full bg-gradient-to-l from-[#020617] to-transparent pointer-events-none" />

        {/* --- ROW 1: Gerak ke KIRI --- */}
        <motion.div 
          className="flex gap-6 md:gap-10 items-center whitespace-nowrap"
          // Gunakan persentase agar loop lebih mulus tidak peduli lebar layar
          animate={{ x: ["0%", "-50%"] }} 
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 50, // Lebih lambat karena item lebih besar
          }}
        >
          {/* Duplikasi array cukup banyak untuk mengisi layar lebar */}
          {[...row1, ...row1, ...row1, ...row1].map((partner, index) => (
            <LogoItem key={`r1-${index}`} Icon={partner.icon} name={partner.name} />
          ))}
        </motion.div>

        {/* --- ROW 2: Gerak ke KANAN (Reverse) --- */}
        <motion.div 
          className="flex gap-6 md:gap-10 items-center whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }} 
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 55, 
          }}
        >
          {[...row2, ...row2, ...row2, ...row2].map((partner, index) => (
            <LogoItem key={`r2-${index}`} Icon={partner.icon} name={partner.name} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

// Sub-komponen Item yang lebih BESAR dan PREMIUM
function LogoItem({ Icon, name }) {
  return (
    <div className="group relative flex items-center gap-5 px-8 py-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-500 cursor-default">
      
      {/* Icon Container with subtle glow */}
      <div className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/20 transition-colors duration-500">
        <Icon 
          strokeWidth={1.5}
          className="w-8 h-8 md:w-10 md:h-10 text-gray-400 group-hover:text-blue-400 transition-colors duration-500" 
        />
      </div>
      
      {/* Nama dengan ukuran font lebih besar */}
      <span className="text-lg md:text-xl font-bold text-gray-300 font-sans tracking-wide whitespace-nowrap group-hover:text-white transition-colors duration-500">
        {name}
      </span>

      {/* Dekorasi kilau saat hover (Optional) */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </div>
  );
}