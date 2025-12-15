'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Layers, ShieldCheck, Cpu } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-32 bg-[#020617] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-20 md:text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6"
          >
            Built for <span className="text-blue-500">Scale</span> & <span className="text-blue-500">Security</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Kami bukan sekadar vendor, tapi mitra strategis. Dengan pengalaman lebih dari 8 tahun, kami membangun fondasi digital yang kokoh untuk pertumbuhan bisnis Anda.
          </motion.p>
        </div>

        {/* --- SPOTLIGHT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* CARD 1: EXPERIENCE */}
          <SpotlightCard 
            icon={<Clock size={40} className="text-blue-400" />}
            title="8+ Years of Excellence"
            // Sumber: PDF Halaman 6 
            desc="Telah dipercaya oleh berbagai sektor industri dan pemerintahan selama lebih dari sewindu. Pengalaman kami adalah jaminan keberhasilan proyek Anda."
          />

          {/* CARD 2: INTEGRATED SOLUTION */}
          <SpotlightCard 
            icon={<Layers size={40} className="text-purple-400" />}
            title="End-to-End Ecosystem"
            // Sumber: PDF Halaman 6 
            desc="Solusi satu atap. Dari Software, Mobile App, AI, hingga pengadaan Server dan Hardware. Kami mengurus semuanya agar Anda fokus pada bisnis."
          />

          {/* CARD 3: SECURITY FIRST */}
          <SpotlightCard 
            icon={<ShieldCheck size={40} className="text-emerald-400" />}
            title="Security & Reliability"
            // Sumber: PDF Halaman 6 [cite: 95]
            desc="Keamanan bukan opsi, tapi prioritas. Kami menerapkan standar keamanan siber berlapis untuk melindungi data aset dan reputasi perusahaan Anda."
          />

          {/* CARD 4: FUTURE READY */}
          <SpotlightCard 
            icon={<Cpu size={40} className="text-orange-400" />}
            title="Future-Proof Technology"
            // Sumber: PDF Halaman 6 [cite: 94]
            desc="Kami menggunakan stack teknologi terkini (AI & IoT) yang skalabel, memastikan sistem Anda tetap relevan untuk 5-10 tahun ke depan."
          />

        </div>
      </div>
    </section>
  );
}

// --- SUB KOMPONEN: KARTU DENGAN EFEK SPOTLIGHT ---
function SpotlightCard({ icon, title, desc }) {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative w-full h-full rounded-3xl border border-white/10 bg-[#0B1120] overflow-hidden p-10 group"
    >
      {/* SPOTLIGHT EFFECT LAYER */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59,130,246,0.15), transparent 40%)`,
        }}
      />
      
      {/* CONTENT */}
      <div className="relative z-10">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/10">
          {icon}
        </div>
        <h3 className="mb-4 text-2xl font-bold text-white tracking-tight">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
          {desc}
        </p>
      </div>

      {/* DECORATIVE BORDER GLOW */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent transition duration-300 group-hover:ring-white/20"
      />
    </motion.div>
  );
}