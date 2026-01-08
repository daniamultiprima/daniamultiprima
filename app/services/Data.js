"use client";

import React, { useState } from "react";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Smartphone, Globe, BrainCircuit, Wifi, Server,
  ShieldCheck, MonitorPlay, ShoppingBag, LayoutTemplate,
  Settings, Wrench, BarChart3, HardDrive,
  Network, Radio, Search, ArrowRight, Layers,
  ChevronDown, ChevronUp
} from "lucide-react";


const allServices = [
  
  {
    id: 1,
    category: "Development",
    title: "Software Development",
    
    desc: "Layanan Software House Medan untuk pembuatan aplikasi bisnis custom (Web/Desktop) yang presisi, aman, dan scalable sesuai kebutuhan Anda.",
    icon: Code2,
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: 2,
    category: "Development",
    title: "Mobile App Development",
    
    desc: "Jasa pembuatan aplikasi Android & iOS profesional dengan teknologi Native/Hybrid. Solusi mobile app terbaik untuk startup dan korporasi.",
    icon: Smartphone,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: 3,
    category: "Development",
    title: "Web Development",
    
    desc: "Jasa pembuatan website Company Profile, E-Commerce, dan Portal Berita yang modern, cepat, dan SEO Friendly agar mudah ditemukan di Google.",
    icon: Globe,
    gradient: "from-sky-500 to-blue-600",
  },
  {
    id: 4,
    category: "Creative",
    title: "UI/UX Design",
    desc: "Perancangan desain antarmuka aplikasi (User Interface) yang intuitif, modern, dan fokus pada pengalaman pengguna (User Experience).",
    icon: LayoutTemplate,
    gradient: "from-pink-500 to-rose-500",
  },

  
  {
    id: 5,
    category: "Intelligence",
    title: "Artificial Intelligence",
    
    desc: "Implementasi teknologi AI, Machine Learning, dan Chatbot Cerdas untuk otomatisasi layanan publik pemerintahan dan efisiensi bisnis.",
    icon: BrainCircuit,
    gradient: "from-violet-600 to-purple-500",
  },
  {
    id: 6,
    category: "Intelligence",
    title: "Internet of Things (IoT)",
    
    desc: "Solusi IoT Smart City dan Smart Office. Sistem monitoring aset dan lingkungan secara real-time untuk Medan dan sekitarnya.",
    icon: Wifi,
    gradient: "from-fuchsia-600 to-pink-600",
  },
  {
    id: 7,
    category: "Intelligence",
    title: "Smart CCTV Integration",
    desc: "Integrasi CCTV cerdas dengan fitur Face Recognition (Pengenal Wajah) dan analitik video untuk keamanan gedung dan kota.",
    icon: Radio,
    gradient: "from-purple-500 to-indigo-500",
  },

  
  {
    id: 8,
    category: "Infrastructure",
    title: "Network Infrastructure",
    
    desc: "Jasa instalasi jaringan LAN, Fiber Optic, dan manajemen Mikrotik/Cisco untuk konektivitas internet kantor yang stabil dan cepat.",
    icon: Network,
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    id: 9,
    category: "Infrastructure",
    title: "Server & Cloud",
    desc: "Konfigurasi Server Fisik (VPS), Dedicated Server, dan Cloud Computing (AWS/GCP/Azure) serta manajemen Data Center yang aman.",
    icon: Server,
    gradient: "from-slate-500 to-gray-500",
  },
  {
    id: 10,
    category: "Infrastructure",
    title: "IT Procurement",
    
    desc: "Layanan pengadaan perangkat keras (Hardware): Laptop, Server, Videotron, dan lisensi software resmi untuk instansi pemerintahan.",
    icon: ShoppingBag,
    gradient: "from-emerald-500 to-green-500",
  },
  {
    id: 11,
    category: "Infrastructure",
    title: "Migration Services",
    desc: "Jasa migrasi database dan pemindahan sistem lama (Legacy) ke teknologi terbaru dengan jaminan keamanan data 100%.",
    icon: HardDrive,
    gradient: "from-teal-500 to-cyan-600",
  },

  
  {
    id: 12,
    category: "Security",
    title: "Cybersecurity",
    desc: "Layanan keamanan siber menyeluruh: Audit sistem, pemasangan Firewall, dan proteksi data vital dari serangan ransomware.",
    icon: ShieldCheck,
    gradient: "from-red-600 to-orange-600",
  },
  {
    id: 13,
    category: "Security",
    title: "Penetration Testing",
    
    desc: "Uji coba peretasan (Ethical Hacking) untuk menemukan dan menutup celah keamanan pada aplikasi web/mobile Anda.",
    icon: Search,
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: 14,
    category: "Security",
    title: "IT Maintenance",
    
    desc: "Kontrak pemeliharaan rutin perangkat IT (Komputer/Jaringan) dan dukungan teknis 24/7 untuk kelancaran operasional kantor.",
    icon: Wrench,
    gradient: "from-gray-500 to-slate-600",
  },

  
  {
    id: 15,
    category: "Enterprise",
    title: "System Integration",
    desc: "Layanan integrasi sistem antar aplikasi (API Integration) agar data tersinkronisasi otomatis antar divisi perusahaan.",
    icon: Settings,
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    id: 16,
    category: "Enterprise",
    title: "ERP & CRM Systems",
    
    desc: "Implementasi software ERP dan CRM untuk manajemen keuangan, stok barang, dan data pelanggan dalam satu dashboard terpusat.",
    icon: BarChart3,
    gradient: "from-indigo-600 to-violet-600",
  },
  {
    id: 17,
    category: "Creative",
    title: "SEO Optimization",
    
    desc: "Jasa optimasi website (SEO) agar tampil di halaman 1 Google, mendatangkan trafik organik, dan meningkatkan penjualan.",
    icon: Layers,
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    id: 18,
    category: "Enterprise",
    title: "IT Training",
    desc: "Pelatihan (Training) teknologi dan workshop digital untuk peningkatan skill karyawan instansi dan perusahaan.",
    icon: MonitorPlay,
    gradient: "from-yellow-500 to-orange-500",
  },
];

const categories = [
  "All Services",
  "Development",
  "Intelligence",
  "Infrastructure",
  "Security",
  "Enterprise",
  "Creative",
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All Services");

  const filteredServices =
    activeCategory === "All Services"
      ? allServices
      : allServices.filter((item) => item.category === activeCategory);

  return (
    <main className="bg-[#020617] min-h-screen text-white selection:bg-blue-500 selection:text-white">
      <Navbar />


      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Layanan IT Lengkap
          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
          >
            Comprehensive IT <br />
            
            <span className="text-blue-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]">
              Solutions in Medan.
            </span>
          </motion.h1>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Sebagai <strong className="text-white">Software House & Konsultan IT Terpercaya</strong>, kami menyediakan <strong>18+ Layanan Teknologi</strong> mulai dari jasa pembuatan aplikasi, infrastruktur jaringan, hingga keamanan siber untuk mempercepat transformasi digital bisnis Anda di <strong className="text-white">Sumatera Utara</strong>.
          </motion.p>
        </div>
      </section>
      
      <section className="sticky top-20 z-40 bg-[#020617]/80 backdrop-blur-md border-y border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 md:justify-center min-w-max">
            {categories.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border
                  ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                      : "bg-[#0B1120] text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <ServiceCard key={service.title} item={service} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No services found in this category.
            </div>
          )}
        </div>
      </section>


      <section className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
            Butuh Solusi Custom?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Kami menyediakan layanan <strong>Konsultasi IT Gratis</strong> untuk menganalisa kebutuhan unik perusahaan Anda.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Hubungi Tim Ahli <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}


function ServiceCard({ item }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative h-full bg-[#0B1120] border border-white/5 hover:border-white/20 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
            <item.icon size={28} className="text-white" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
            {item.category}
          </span>
        </div>


        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
          {item.desc}
        </p>

        <div className="mt-auto pt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
          <ArrowRight className="text-white" size={20} />
        </div>
      </div>

      <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
    </motion.div>
  );
}