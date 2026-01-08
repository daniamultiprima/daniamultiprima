'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Smartphone, Globe, BrainCircuit, Wifi, Server, 
  ShieldCheck, MonitorPlay, ShoppingBag, LayoutTemplate, 
  Settings, Wrench, BarChart3, HardDrive, 
  Network, Radio, Search, ChevronDown, ChevronUp 
} from 'lucide-react';

const services = [
  {
    title: "Software Development",
    desc: "Jasa pembuatan software custom (Web & Desktop) yang fleksibel sesuai kebutuhan bisnis Anda di Medan.",
    icon: Code2,
    gradient: "from-emerald-600/20 to-teal-600/20"
  },
  {
    title: "Mobile App Development",
    desc: "Jasa pembuatan aplikasi Android & iOS profesional. Solusi mobile app modern untuk bisnis dan startup.",
    icon: Smartphone,
    gradient: "from-orange-600/20 to-red-600/20"
  },
  {
    title: "Web Development",
    desc: "Jasa pembuatan website company profile, e-commerce, dan portal berita yang SEO friendly dan cepat.",
    icon: Globe,
    gradient: "from-cyan-600/20 to-blue-600/20"
  },
  {
    title: "Artificial Intelligence",
    desc: "Integrasi AI & Chatbot Cerdas untuk otomatisasi layanan pelanggan dan efisiensi operasional.",
    icon: BrainCircuit,
    gradient: "from-blue-600/20 to-purple-600/20"
  },
  {
    title: "Sistem Informasi (SIMRS/SPBE)",
    desc: "Pengembangan sistem manajemen rumah sakit (SIMRS) dan aplikasi pemerintahan (SPBE/E-Gov).",
    icon: BarChart3,
    gradient: "from-green-600/20 to-emerald-900/20"
  },
  {
    title: "Internet of Things (IoT)",
    desc: "Solusi Smart City dan monitoring aset real-time dengan teknologi sensor IoT terkini.",
    icon: Wifi,
    gradient: "from-violet-600/20 to-fuchsia-600/20"
  },
  {
    title: "IT Procurement (Pengadaan)",
    desc: "Pengadaan perangkat keras (Server, Laptop, Videotron) resmi dan bergaransi untuk instansi.",
    icon: ShoppingBag,
    gradient: "from-purple-600/20 to-indigo-600/20"
  },
  {
    title: "Cybersecurity & Pentest",
    desc: "Layanan audit keamanan sistem dan penetration testing untuk mencegah kebocoran data.",
    icon: ShieldCheck,
    gradient: "from-red-600/20 to-rose-900/20"
  },
  {
    title: "Network Infrastructure",
    desc: "Instalasi jaringan LAN/WAN, Fiber Optic, dan manajemen server kantor yang stabil.",
    icon: Network,
    gradient: "from-indigo-600/20 to-blue-900/20"
  },
  {
    title: "IT Training",
    desc: "Pelatihan teknologi dan workshop digital untuk peningkatan SDM perusahaan/dinas.",
    icon: MonitorPlay,
    gradient: "from-yellow-600/20 to-orange-600/20"
  },
  {
    title: "System Integration",
    desc: "Menghubungkan berbagai aplikasi terpisah (API Integration) agar data terpusat.",
    icon: Settings,
    gradient: "from-sky-600/20 to-blue-600/20"
  },
  {
    title: "SEO Optimization",
    desc: "Jasa SEO untuk meningkatkan ranking website Anda di halaman pertama Google.",
    icon: Search,
    gradient: "from-blue-600/20 to-indigo-600/20"
  }
];

export default function ServicesBento() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="relative w-full py-24 bg-[#020617] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Layanan Kami
          </motion.div>
          
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight"
          >
            Layanan IT & Solusi <br className="hidden md:block"/>
            <span className="text-blue-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]">
              Transformasi Digital.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="block mt-6 text-base md:text-xl font-normal text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Sebagai IT Consultant terpercaya, kami menyediakan solusi teknologi end-to-end untuk kebutuhan bisnis dan pemerintahan Anda.
          </motion.p>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {visibleServices.map((service, index) => (
              <ServiceCard key={service.title} item={service} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 flex justify-center">
            <motion.button
                onClick={() => setShowAll(!showAll)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-2 px-8 py-3 bg-[#0B1120] border border-white/20 rounded-full text-white font-bold text-sm tracking-wide hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
                {showAll ? <>Tutup Sebagian <ChevronUp size={16} /></> : <>Lihat Semua Layanan <ChevronDown size={16} /></>}
            </motion.button>
        </div>
      </div>
    </section>
  );
}

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
      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative z-10 flex flex-col h-full">
          <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-lg">
             <item.icon size={28} className="text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
              {item.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
              {item.desc}
          </p>
      </div>
    </motion.div>
  );
}