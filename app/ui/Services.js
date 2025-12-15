'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Smartphone, Globe, BrainCircuit, Wifi, Server, 
  ShieldCheck, MonitorPlay, ShoppingBag, LayoutTemplate, 
  Settings, PenTool, Wrench, BarChart3, HardDrive, 
  Network, Radio, Search, ChevronDown, ChevronUp 
} from 'lucide-react';

// --- DATA LAYANAN (18 ITEM SESUAI DOKUMEN PDF) ---
// Sumber: Halaman 7-9 Dokumen Company Profile 
const services = [
  {
    title: "Artificial Intelligence",
    desc: "Solusi AI, automasi bot, dan machine learning untuk efisiensi cerdas.",
    icon: BrainCircuit,
    gradient: "from-blue-600/20 to-purple-600/20"
  },
  {
    title: "Software Development",
    desc: "Pembuatan software custom yang fleksibel dan sesuai kebutuhan bisnis.",
    icon: Code2,
    gradient: "from-emerald-600/20 to-teal-600/20"
  },
  {
    title: "Mobile App Development",
    desc: "Aplikasi Android & iOS dengan performa tinggi dan user friendly.",
    icon: Smartphone,
    gradient: "from-orange-600/20 to-red-600/20"
  },
  {
    title: "Web Development",
    desc: "Website profesional, responsif, dan cepat untuk citra bisnis Anda.",
    icon: Globe,
    gradient: "from-cyan-600/20 to-blue-600/20"
  },
  {
    title: "Internet of Things (IoT)",
    desc: "Hubungkan perangkat fisik ke sistem digital untuk monitoring realtime.",
    icon: Wifi,
    gradient: "from-violet-600/20 to-fuchsia-600/20"
  },
  {
    title: "Network Infrastructure",
    desc: "Pembangunan infrastruktur jaringan yang kuat, stabil, dan aman.",
    icon: Network,
    gradient: "from-indigo-600/20 to-blue-900/20"
  },
  {
    title: "Server & Cloud",
    desc: "Manajemen server dan cloud computing yang andal dan terpusat.",
    icon: Server,
    gradient: "from-gray-600/20 to-slate-600/20"
  },
  {
    title: "Cybersecurity",
    desc: "Proteksi sistem digital berlapis dari ancaman dan serangan siber.",
    icon: ShieldCheck,
    gradient: "from-red-600/20 to-rose-900/20"
  },
  {
    title: "Penetration Testing",
    desc: "Pengujian celah keamanan sistem sebelum diserang pihak luar.",
    icon: Search, // Menggunakan Search/Audit icon
    gradient: "from-amber-600/20 to-yellow-600/20"
  },
  {
    title: "System Integration",
    desc: "Menghubungkan berbagai aplikasi dan perangkat agar bekerja bersamaan.",
    icon: Settings,
    gradient: "from-sky-600/20 to-blue-600/20"
  },
  {
    title: "ERP & CRM Systems",
    desc: "Sistem manajemen operasional, keuangan, dan hubungan pelanggan.",
    icon: BarChart3,
    gradient: "from-green-600/20 to-emerald-900/20"
  },
  {
    title: "UI/UX Design",
    desc: "Desain antarmuka modern yang menarik dan mudah digunakan.",
    icon: LayoutTemplate,
    gradient: "from-pink-600/20 to-rose-600/20"
  },
  {
    title: "IT Maintenance",
    desc: "Pemeliharaan rutin sistem dan support teknis agar tetap optimal.",
    icon: Wrench,
    gradient: "from-slate-600/20 to-gray-600/20"
  },
  {
    title: "Migration Services",
    desc: "Migrasi data dan sistem lama ke platform baru dengan aman.",
    icon: HardDrive,
    gradient: "from-blue-600/20 to-cyan-600/20"
  },
  {
    title: "IT Procurement",
    desc: "Pengadaan komputer, laptop, dan perlengkapan IT berkualitas.",
    icon: ShoppingBag,
    gradient: "from-purple-600/20 to-indigo-600/20"
  },
  {
    title: "IT Training",
    desc: "Pelatihan teknologi untuk tim dan instansi agar menguasai sistem.",
    icon: MonitorPlay,
    gradient: "from-yellow-600/20 to-orange-600/20"
  },
  {
    title: "Smart CCTV",
    desc: "Pemasangan CCTV online/offline yang bisa dipantau dari mana saja.",
    icon: Radio,
    gradient: "from-teal-600/20 to-green-600/20"
  },
  {
    title: "SEO Optimization",
    desc: "Peningkatan ranking website di pencarian Google secara organik.",
    icon: Search,
    gradient: "from-blue-600/20 to-indigo-600/20"
  }
];

export default function ServicesManager() {
  const [showAll, setShowAll] = useState(false);

  // Logika: Jika showAll true, tampilkan semua. Jika false, ambil 6 pertama.
  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="relative w-full py-24 bg-[#020617] overflow-hidden">
      
      {/* Background FX biar mahal */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Our Expertise
          </motion.div>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Comprehensive Solutions <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              For Every Business Need.
            </span>
          </motion.h2>
        </div>

        {/* GRID LAYOUT */}
        <motion.div 
            layout // Framer Motion Magic: Animasi layout otomatis saat list berubah
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {visibleServices.map((service, index) => (
              <ServiceCard key={service.title} item={service} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* TOMBOL SHOW MORE / LESS */}
        <div className="mt-12 flex justify-center">
            <motion.button
                onClick={() => setShowAll(!showAll)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-2 px-8 py-3 bg-[#0B1120] border border-white/20 rounded-full text-white font-bold text-sm tracking-wide hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
                {showAll ? (
                    <>Show Less Solutions <ChevronUp size={16} /></>
                ) : (
                    <>View All 18 Services <ChevronDown size={16} /></>
                )}
                {/* Glow Effect di belakang tombol */}
                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
        </div>

      </div>
    </section>
  );
}

// --- SUB KOMPONEN KARTU (GAYA BENTO/PREMIUM) ---
function ServiceCard({ item, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative h-full bg-[#0B1120] border border-white/5 hover:border-white/20 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
    >
      {/* 1. Background Gradient Hover (Efek Mahal) */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* 2. Content Container */}
      <div className="relative z-10 flex flex-col h-full">
          {/* Icon Box */}
          <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-lg">
             <item.icon size={28} className="text-white" />
          </div>

          {/* Text */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
              {item.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
              {item.desc}
          </p>
      </div>

      {/* 3. Decorative Elements (Optional: Grid Pattern tipis di dalam kartu) */}
      <div className="absolute right-0 top-0 w-24 h-24 bg-white/5 rounded-bl-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -mr-4 -mt-4" />
    </motion.div>
  );
}