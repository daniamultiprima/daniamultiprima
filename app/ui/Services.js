'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Smartphone, Globe, BrainCircuit, Wifi, Server, 
  ShieldCheck, MonitorPlay, ShoppingBag, LayoutTemplate, 
  Settings, Wrench, BarChart3, HardDrive, 
  Network, Radio, Search
} from 'lucide-react';

const services = [
  {
    title: "Software Development",
    desc: "Jasa pembuatan software custom (Web & Desktop) yang fleksibel sesuai kebutuhan bisnis Anda di Medan.",
    icon: Code2
  },
  {
    title: "Mobile App Development",
    desc: "Jasa pembuatan aplikasi Android & iOS profesional. Solusi mobile app modern untuk bisnis dan startup.",
    icon: Smartphone
  },
  {
    title: "Web Development",
    desc: "Jasa pembuatan website company profile, e-commerce, dan portal berita yang SEO friendly dan cepat.",
    icon: Globe
  },
  {
    title: "Artificial Intelligence",
    desc: "Integrasi AI & Chatbot Cerdas untuk otomatisasi layanan pelanggan dan efisiensi operasional.",
    icon: BrainCircuit
  },
  {
    title: "Sistem Informasi",
    desc: "Pengembangan sistem manajemen rumah sakit (SIMRS) dan aplikasi pemerintahan (SPBE/E-Gov).",
    icon: BarChart3
  },
  {
    title: "Internet of Things",
    desc: "Solusi Smart City dan monitoring aset real-time dengan teknologi sensor IoT terkini.",
    icon: Wifi
  },
  {
    title: "IT Procurement",
    desc: "Pengadaan perangkat keras (Server, Laptop, Videotron) resmi dan bergaransi untuk instansi.",
    icon: ShoppingBag
  },
  {
    title: "Cybersecurity Pentest",
    desc: "Layanan audit keamanan sistem dan penetration testing untuk mencegah kebocoran data.",
    icon: ShieldCheck
  },
  {
    title: "Network Infrastructure",
    desc: "Instalasi jaringan LAN/WAN, Fiber Optic, dan manajemen server kantor yang stabil.",
    icon: Network
  },
  {
    title: "IT Training",
    desc: "Pelatihan teknologi dan workshop digital untuk peningkatan SDM perusahaan/dinas.",
    icon: MonitorPlay
  },
  {
    title: "System Integration",
    desc: "Menghubungkan berbagai aplikasi terpisah (API Integration) agar data terpusat.",
    icon: Settings
  },
  {
    title: "SEO Optimization",
    desc: "Jasa SEO untuk meningkatkan ranking website Anda di halaman pertama Google.",
    icon: Search
  }
];

const winColors = [
    "bg-blue-600", "bg-red-600", "bg-emerald-600", "bg-yellow-500", "bg-purple-600", "bg-orange-600",
    "bg-teal-600", "bg-pink-600", "bg-indigo-600", "bg-green-600", "bg-cyan-600", "bg-rose-600"
];

export default function ServicesBento() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#020617] border-b-[8px] border-black overflow-hidden">
      
      {/* BACKGROUND PIXEL GRID */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* SIMPLIFIED RETRO HEADER */}
        <div className="flex flex-col items-center text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-yellow-400 border-[4px] border-black shadow-[6px_6px_0_0_#000] mb-8 transform -rotate-2">
                <span className="font-logo text-black text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                    Katalog Layanan
                </span>
            </div>

            <h2 className="font-logo text-3xl md:text-5xl lg:text-[4rem] font-black text-white leading-[1.3] uppercase mb-8 drop-shadow-[4px_4px_0_#000]">
                Layanan IT & Solusi <br/>
                <span className="text-yellow-400">Transformasi Digital.</span>
            </h2>

            <div className="bg-[#e5e7eb] border-[4px] border-black p-4 md:p-6 shadow-[8px_8px_0_0_#eab308] transform rotate-1">
                <p className="font-sans text-sm md:text-xl font-bold text-black leading-relaxed">
                    Sebagai IT Consultant terpercaya, kami menyediakan solusi teknologi <span className="bg-yellow-400 px-2 py-0.5 border-[2px] border-black ml-1 mr-1">end-to-end</span> untuk kebutuhan bisnis dan pemerintahan Anda.
                </p>
            </div>
        </div>

        {/* APPLICATION WINDOWS GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode='popLayout'>
            {visibleServices.map((service, index) => (
              <WindowCard key={service.title} item={service} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BRUTALIST TOGGLE BUTTON */}
        <div className="mt-20 flex justify-center">
            <button
                onClick={() => setShowAll(!showAll)}
                className="group relative flex items-center gap-4 px-8 py-4 bg-yellow-400 border-[6px] border-black shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all active:shadow-none active:translate-x-2 active:translate-y-2 cursor-pointer"
            >
                <div className="w-4 h-4 bg-black animate-pulse" />
                <span className="font-logo text-sm md:text-base font-black text-black uppercase tracking-widest">
                    {showAll ? "TUTUP SEBAGIAN" : "LIHAT SEMUA LAYANAN"}
                </span>
            </button>
        </div>

      </div>
    </section>
  );
}

function WindowCard({ item, index }) {
  const titleColor = winColors[index % winColors.length];
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="group relative h-full bg-white border-[6px] border-black shadow-[8px_8px_0_0_#000] hover:shadow-[16px_16px_0_0_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 transition-all duration-200 flex flex-col"
    >
        {/* Title Bar */}
        <div className={`${titleColor} border-b-[6px] border-black px-3 py-2.5 flex justify-between items-center`}>
            <span className="font-logo text-[8px] md:text-[10px] text-white uppercase tracking-widest drop-shadow-[2px_2px_0_#000]">
                {item.title.substring(0, 10).replace(/\s/g, '_')}.exe
            </span>
            <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-white border-[2px] border-black" />
                <div className="w-3 h-3 bg-white border-[2px] border-black" />
                <div className="w-3 h-3 bg-white border-[2px] border-black flex items-center justify-center">
                    <span className="text-[6px] font-black leading-none text-black">X</span>
                </div>
            </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex-grow flex flex-col relative overflow-hidden bg-[#f8fafc]">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-[#e5e7eb] border-[4px] border-black mb-6 flex items-center justify-center shadow-[4px_4px_0_0_#000] group-hover:scale-110 group-hover:bg-yellow-300 transition-all duration-200">
                    <item.icon size={32} className="text-black stroke-[2.5px]" />
                </div>
                
                <h3 className="font-logo text-sm md:text-base font-bold text-black mb-4 uppercase leading-snug drop-shadow-[1px_1px_0_#fff]">
                    {item.title}
                </h3>
                
                <p className="font-sans text-sm md:text-base font-bold text-gray-700 leading-relaxed border-t-[4px] border-dashed border-gray-400 pt-5 mt-auto">
                    {item.desc}
                </p>
            </div>
        </div>
    </motion.div>
  );
}