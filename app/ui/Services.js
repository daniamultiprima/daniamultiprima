'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Smartphone, Globe, BrainCircuit, Wifi, Server, 
  ShieldCheck, MonitorPlay, ShoppingBag, LayoutTemplate, 
  Settings, PenTool, Wrench, BarChart3, HardDrive, 
  Network, Radio, Search, ChevronDown, ChevronUp 
} from 'lucide-react';

// --- DATA LAYANAN (UPDATED: COPYWRITING LEBIH MENARIK) ---
const services = [
  {
    title: "Artificial Intelligence",
    desc: "Bikin bisnis jadi otomatis. Dari Chatbot pintar hingga analisis data, biarkan AI mengerjakan tugas repetitif Anda.",
    icon: BrainCircuit,
    gradient: "from-blue-600/20 to-purple-600/20"
  },
  {
    title: "Software Development",
    desc: "Software yang menyesuaikan cara kerja Anda, bukan sebaliknya. Solusi custom untuk efisiensi maksimal.",
    icon: Code2,
    gradient: "from-emerald-600/20 to-teal-600/20"
  },
  {
    title: "Mobile App Development",
    desc: "Aplikasi genggam yang cepat dan elegan (Android & iOS). Jangkau pelanggan Anda di mana saja, kapan saja.",
    icon: Smartphone,
    gradient: "from-orange-600/20 to-red-600/20"
  },
  {
    title: "Web Development",
    desc: "Website berkelas yang tidak hanya cantik, tapi juga cepat ditemukan di Google dan jago menarik penjualan.",
    icon: Globe,
    gradient: "from-cyan-600/20 to-blue-600/20"
  },
  {
    title: "Internet of Things (IoT)",
    desc: "Kontrol aset dari jarak jauh. Ubah kantor dan kota menjadi 'pintar' dengan sensor yang terhubung real-time.",
    icon: Wifi,
    gradient: "from-violet-600/20 to-fuchsia-600/20"
  },
  {
    title: "Network Infrastructure",
    desc: "Koneksi internet anti-lemot. Instalasi jaringan kabel & WiFi yang stabil untuk kelancaran operasional kantor.",
    icon: Network,
    gradient: "from-indigo-600/20 to-blue-900/20"
  },
  {
    title: "Server & Cloud",
    desc: "Rumah digital yang aman untuk data Anda. Konfigurasi VPS & Cloud yang fleksibel menangani trafik tinggi.",
    icon: Server,
    gradient: "from-gray-600/20 to-slate-600/20"
  },
  {
    title: "Cybersecurity",
    desc: "Tidur tenang tanpa takut diretas. Kami bentengi data berharga perusahaan Anda dari serangan siber.",
    icon: ShieldCheck,
    gradient: "from-red-600/20 to-rose-900/20"
  },
  {
    title: "Penetration Testing",
    desc: "Cari celah sebelum dibobol hacker. Simulasi serangan untuk memastikan aplikasi Anda benar-benar kebal.",
    icon: Search, 
    gradient: "from-amber-600/20 to-yellow-600/20"
  },
  {
    title: "System Integration",
    desc: "Satukan semua aplikasi yang terpisah. Data mengalir lancar antar divisi, kerja tim jadi lebih efisien.",
    icon: Settings,
    gradient: "from-sky-600/20 to-blue-600/20"
  },
  {
    title: "ERP & CRM Systems",
    desc: "Satu sistem untuk segalanya. Kelola keuangan, stok barang, dan data pelanggan dalam satu dashboard rapi.",
    icon: BarChart3,
    gradient: "from-green-600/20 to-emerald-900/20"
  },
  {
    title: "UI/UX Design",
    desc: "Desain yang memanjakan mata dan mudah dipakai. Bikin pengguna betah berlama-lama di aplikasi Anda.",
    icon: LayoutTemplate,
    gradient: "from-pink-600/20 to-rose-600/20"
  },
  {
    title: "IT Maintenance",
    desc: "Punya tim IT tanpa perlu merekrut. Kami pastikan komputer, printer, dan sistem Anda selalu sehat tiap bulan.",
    icon: Wrench,
    gradient: "from-slate-600/20 to-gray-600/20"
  },
  {
    title: "Migration Services",
    desc: "Pindah dari sistem lama ke teknologi baru tanpa takut data hilang. Proses mulus, bisnis jalan terus.",
    icon: HardDrive,
    gradient: "from-blue-600/20 to-cyan-600/20"
  },
  {
    title: "IT Procurement",
    desc: "Beli laptop, server, dan videotron asli tanpa repot. Garansi resmi, spek tepat, harga bersahabat.",
    icon: ShoppingBag,
    gradient: "from-purple-600/20 to-indigo-600/20"
  },
  {
    title: "IT Training",
    desc: "Upgrade skill tim Anda. Pelatihan teknologi praktis agar karyawan makin produktif di era digital.",
    icon: MonitorPlay,
    gradient: "from-yellow-600/20 to-orange-600/20"
  },
  {
    title: "Smart CCTV",
    desc: "Mata canggih yang mengenali wajah. Pantau keamanan lokasi lewat HP dengan fitur analitik cerdas.",
    icon: Radio,
    gradient: "from-teal-600/20 to-green-600/20"
  },
  {
    title: "SEO Optimization",
    desc: "Dominasi halaman 1 Google. Datangkan lebih banyak pengunjung organik tanpa harus bayar iklan terus-terusan.",
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
            Comprehensive IT Solutions <br/>
            
            {/* SUBTITLE BARU: Lebih kecil, lebih manis, dan deskriptif */}
            <span className="block mt-4 text-base md:text-xl font-normal text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Mitra teknologi strategis untuk mengakselerasi pertumbuhan bisnis dan modernisasi instansi Anda di era digital.
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
          {/* Deskripsi diperjelas agar mudah dibaca */}
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
              {item.desc}
          </p>
      </div>

      <div className="absolute right-0 top-0 w-24 h-24 bg-white/5 rounded-bl-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -mr-4 -mt-4" />
    </motion.div>
  );
}