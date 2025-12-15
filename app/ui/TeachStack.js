'use client';

import React from 'react';
import { motion } from 'framer-motion';

// DATA DARI PDF HALAMAN 10 [cite: 150-160]
const languages = [
  "React.js", "Node.js", "Python", "PHP Native", "Laravel", "Next.js", "TypeScript", "GoLang"
];

const infrastructure = [
  "Cisco Network", "Apache", "Nginx", "MongoDB", "MySQL", "PostgreSQL", "Apache Kafka", "Docker", "Ubuntu Server"
];

export default function TechStack() {
  return (
    <section className="relative w-full py-20 bg-[#020617] overflow-hidden border-y border-white/5">
      
      {/* Background Decor (Noise Texture biar kesan industrial) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
        <p className="text-blue-500 font-bold tracking-[0.2em] text-xs uppercase mb-2">
          Powering Your Business
        </p>
        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
          World-Class <span className="text-gray-500">Technology Stack.</span>
        </h3>
      </div>

      {/* --- ROW 1: LANGUAGES (Gerak ke Kiri) --- */}
      <div className="relative flex w-full overflow-hidden mask-linear-gradient mb-6">
        <motion.div 
          className="flex gap-4 items-center whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          {/* Loop 3x biar panjang dan gak putus */}
          {[...languages, ...languages, ...languages].map((tech, i) => (
            <TechBadge key={i} text={tech} color="blue" />
          ))}
        </motion.div>
      </div>

      {/* --- ROW 2: INFRASTRUCTURE (Gerak ke Kanan) --- */}
      <div className="relative flex w-full overflow-hidden mask-linear-gradient">
        <motion.div 
          className="flex gap-4 items-center whitespace-nowrap"
          animate={{ x: [-1000, 0] }} // Arah sebaliknya
          transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
        >
          {/* Loop 3x */}
          {[...infrastructure, ...infrastructure, ...infrastructure].map((tech, i) => (
            <TechBadge key={i} text={tech} color="purple" />
          ))}
        </motion.div>
      </div>

    </section>
  );
}

// SUB-COMPONENT: TECH BADGE (Gaya Chip/Tombol)
function TechBadge({ text, color }) {
  const colorStyles = {
    blue: "border-blue-500/20 bg-blue-500/5 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.1)]",
    purple: "border-purple-500/20 bg-purple-500/5 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.1)]"
  };

  return (
    <div className={`
      px-6 py-3 rounded-xl border ${colorStyles[color]} 
      font-mono text-sm md:text-base font-bold tracking-wide uppercase 
      backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:text-white hover:border-white/30 cursor-default
    `}>
      {text}
    </div>
  );
}