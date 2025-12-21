'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Smartphone, Globe, BrainCircuit, Wifi, Server, 
  ShieldCheck, MonitorPlay, ShoppingBag, LayoutTemplate, 
  Settings, PenTool, Wrench, BarChart3, HardDrive, 
  Network, Radio, Search, ChevronDown, ChevronUp 
} from 'lucide-react';

// --- DATA LAYANAN (OPTIMIZED FOR SEO) ---
// Deskripsi diperkaya dengan keyword tindakan: "Pembuatan", "Jasa", "Solusi"
const services = [
  {
    title: "Artificial Intelligence",
    desc: "Jasa integrasi AI, Machine Learning, dan Chatbot Cerdas untuk otomatisasi bisnis.",
    icon: BrainCircuit,
    gradient: "from-blue-600/20 to-purple-600/20"
  },
  {
    title: "Software Development",
    desc: "Jasa pembuatan software custom (Web & Desktop) sesuai kebutuhan proses bisnis Anda.",
    icon: Code2,
    gradient: "from-emerald-600/20 to-teal-600/20"
  },
  {
    title: "Mobile App Development",
    desc: "Pengembang aplikasi Android & iOS Native dengan performa tinggi dan UI/UX modern.",
    icon: Smartphone,
    gradient: "from-orange-600/20 to-red-600/20"
  },
  {
    title: "Web Development",
    desc: "Jasa pembuatan website company profile, e-commerce, dan portal berita yang SEO friendly.",
    icon: Globe,
    gradient: "from-cyan-600/20 to-blue-600/20"
  },
  {
    title: "Internet of Things (IoT)",
    desc: "Solusi IoT Smart City dan Smart Office untuk monitoring perangkat secara real-time.",
    icon: Wifi,
    gradient: "from-violet-600/20 to-fuchsia-600/20"
  },
  {
    title: "Network Infrastructure",
    desc: "Jasa instalasi jaringan LAN/WAN, Fiber Optic, dan manajemen bandwidth yang stabil.",
    icon: Network,
    gradient: "from-indigo-600/20 to-blue-900/20"
  },
  {
    title: "Server & Cloud",
    desc: "Konfigurasi VPS, Dedicated Server, dan Cloud Computing (AWS/GCP) yang aman.",
    icon: Server,
    gradient: "from-gray-600/20 to-slate-600/20"
  },
  {
    title: "Cybersecurity",
    desc: "Layanan keamanan siber, audit sistem, dan proteksi data dari serangan ransomware.",
    icon: ShieldCheck,
    gradient: "from-red-600/20 to-rose-900/20"
  },
  {
    title: "Penetration Testing",
    desc: "Jasa Penetration Testing (Pentest) untuk menemukan celah keamanan aplikasi.",
    icon: Search, 
    gradient: "from-amber-600/20 to-yellow-600/20"
  },
  {
    title: "System Integration",
    desc: "Integrasi sistem antar aplikasi (API) untuk sinkronisasi data perusahaan.",
    icon: Settings,
    gradient: "from-sky-600/20 to-blue-600/20"
  },
  {
    title: "ERP & CRM Systems",
    desc: "Implementasi software ERP dan CRM untuk manajemen operasional dan pelanggan.",
    icon: BarChart3,
    gradient: "from-green-600/20 to-emerald-900/20"
  },
  {
    title: "UI/UX Design",
    desc: "Jasa desain antarmuka aplikasi (UI/UX) yang intuitif dan berorientasi pengguna.",
    icon: LayoutTemplate,
    gradient: "from-pink-600/20 to-rose-600/20"
  },
  {
    title: "IT Maintenance",
    desc: "Kontrak pemeliharaan perangkat IT dan support teknis rutin untuk perusahaan.",
    icon: Wrench,
    gradient: "from-slate-600/20 to-gray-600/20"
  },
  {
    title: "Migration Services",
    desc: "Layanan migrasi database dan sistem legacy ke teknologi terbaru tanpa downtime.",
    icon: HardDrive,
    gradient: "from-blue-600/20 to-cyan-600/20"
  },
  {
    title: "IT Procurement",
    desc: "Pengadaan perangkat keras (Hardware): Laptop, Server, dan Videotron resmi.",
    icon: ShoppingBag,
    gradient: "from-purple-600/20 to-indigo-600/20"
  },
  {
    title: "IT Training",
    desc: "Pelatihan (Training) teknologi dan workshop digital untuk karyawan instansi.",
    icon: MonitorPlay,
    gradient: "from-yellow-600/20 to-orange-600/20"
  },
  {
    title: "Smart CCTV",
    desc: "Instalasi CCTV cerdas dengan fitur Face Recognition dan pemantauan online.",
    icon: Radio,
    gradient: "from-teal-600/20 to-green-600/20"
  },
  {
    title: "SEO Optimization",
    desc: "Jasa SEO website agar tampil di halaman 1 Google dan meningkatkan traffic.",
    icon: Search,
    gradient: "from-blue-600/20 to-indigo-600/20"
  }
];

export default function ServicesBento() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="relative w-full py-24 bg-[#020617] overflow-hidden">
      
      {/* Background FX */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER (SEO OPTIMIZED: Mixed Language) */}
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
            {/* TITLE INGGRIS: Kesan Profesional */}
            Comprehensive IT Solutions <br/>
            {/* SUBTITLE INDONESIA: Keyword Target Lokal */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Layanan IT & Transformasi Digital Lengkap.
            </span>
          </motion.h2>
        </div>

        {/* GRID LAYOUT */}
        <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {visibleServices.map((service, index) => (
              <ServiceCard key={service.title} item={service} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BUTTON */}
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
                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
        </div>

      </div>
    </section>
  );
}

// --- CARD COMPONENT ---
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
      {/* Gradient Hover */}
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

      <div className="absolute right-0 top-0 w-24 h-24 bg-white/5 rounded-bl-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -mr-4 -mt-4" />
    </motion.div>
  );
}