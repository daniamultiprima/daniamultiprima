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
    <section className="w-full py-16 bg-[#020617] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-sm font-bold tracking-[0.3em] text-blue-500 uppercase mb-2">
          Trusted Partners
        </p>
        <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
          Powering <span className="text-gray-500">Industry Leaders</span>
        </h3>
      </div>

      {/* Container Slider dengan Masking Gradient */}
      <div className="relative flex flex-col gap-6 w-full overflow-hidden mask-linear-gradient">
        
        {/* Efek Fade di Kiri & Kanan */}
        <div className="absolute top-0 left-0 z-10 w-24 h-full bg-gradient-to-r from-[#020617] to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 z-10 w-24 h-full bg-gradient-to-l from-[#020617] to-transparent pointer-events-none" />

        {/* --- ROW 1: Gerak ke KIRI --- */}
        <motion.div 
          className="flex gap-8 items-center whitespace-nowrap"
          animate={{ x: [0, -1000] }} 
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40, 
          }}
        >
          {/* Loop 3x untuk efek infinite seamless */}
          {[...row1, ...row1, ...row1, ...row1].map((partner, index) => (
            <LogoItem key={`r1-${index}`} Icon={partner.icon} name={partner.name} />
          ))}
        </motion.div>

        {/* --- ROW 2: Gerak ke KANAN (Reverse) --- */}
        <motion.div 
          className="flex gap-8 items-center whitespace-nowrap"
          animate={{ x: [-1000, 0] }} 
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 45, // Beda durasi sedikit biar terlihat organik
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

// Sub-komponen Item
function LogoItem({ Icon, name }) {
  return (
    <div className="group flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default">
      {/* Icon */}
      <Icon size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
      
      {/* Nama */}
      <span className="text-sm font-bold text-gray-300 font-sans tracking-wide whitespace-nowrap group-hover:text-white transition-colors">
        {name}
      </span>
    </div>
  );
}