'use client';

import React, { useState } from 'react';
import Navbar from '@/ui/Navbar';
import Footer from '@/ui/Footer';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// --- DATABASE LENGKAP (Updated with Logo Paths) ---
const allProjects = [
  // --- 1. HERO / SPECIAL PROJECTS ---
  {
    id: "jare-ai",
    title: "Jare-AI Public Service",
    client: "Kementerian Komunikasi & Digital",
    category: "Government",
    desc: "Sistem Chatbot WhatsApp cerdas berbasis Generative AI (Gemini) yang terintegrasi dengan Data Warehouse Kementerian untuk pelayanan publik otomatis.",
    tech: ["Gemini AI", "Next.js", "Big Data"],
    color: "blue",
    featured: true,
    logo: "/images/clients/komdigi.svg"
  },

  // --- 2. GOVERNMENT (PEMERINTAHAN) ---
  {
    id: "ajthink-lab",
    title: "AJ ThinkLab",
    client: "Amberjaini",
    category: "Education",
    desc: "Sistem website kursus belajar bahasa inggris dengan dashboard guru, murid dan admin. Full online dengan metoda pembayaran Manual dan Stripe.",
    tech: ["Next.js", "MongoDB", "Express.js"],
    color: "orange",
    featured: true,
    logo: "/images/clients/ajthinklab.png"
  }, 
  {
    id: "dashboard-sergai",
    title: "Sistem Laporan Keuangan Daerah",
    client: "Pemkab Serdang Bedagai",
    category: "Government",
    desc: "Dashboard laporan harian, mingguan, dan bulanan ke Bupati terkait pendapatan dan penggunaan keuangan daerah.",
    tech: ["Dashboard", "Analytics"],
    color: "blue",
    featured: true,
    logo: "/images/clients/sergai.png"
  },
  {
    id: "agam-realtime",
    title: "Laporan Kegiatan Realtime",
    client: "Kabupaten Agam",
    category: "Government",
    desc: "Sistem informasi laporan kegiatan Bupati secara live yang ditampilkan pada TV Informasi Command Center.",
    tech: ["Realtime", "TV Display"],
    color: "blue",
    featured: false,
    logo: "/images/clients/agam.png",
    isDim: true
  },
  {
    id: "pemko-tanjung-balai",
    title: "Sistem Penerimaan Murid Baru (SPMB)",
    client: "Pemko Tanjung Balai",
    category: "Government",
    desc: "Sistem penerimaan murid baru secara online di seluruh sekolah SD dan SMP di Kota Tanjung balai yang dilengkap hitung zonasi otomatis melalui Maps.",
    tech: ["Next.js", "Maps API"],
    color: "blue",
    featured: false,
    logo: "/images/clients/tanjung_balai.png"
  },
  {
    id: "emas-binjai",
    title: "E-Mas Smart City Apps",
    client: "Pemko Binjai",
    category: "Government",
    desc: "Aplikasi Android dan Website untuk memudahkan masyarakat membuat laporan masalah perkotaan secara langsung.",
    tech: ["Android", "GIS", "Web"],
    color: "blue",
    featured: false,
    logo: "/images/clients/binjai.png"
  },
  {
    id: "e-absensi-binjai",
    title: "E-Absensi ASN",
    client: "Pemko Binjai",
    category: "Government",
    desc: "Aplikasi Android untuk mencatat dan memantau kehadiran pegawai pemerintahan secara elektronik (GPS & Biometrik).",
    tech: ["Android", "GPS", "Biometric"],
    color: "blue",
    featured: false,
    logo: "/images/clients/binjai.png"
  },
  {
    id: "dprd-web",
    title: "Portal Informasi DPRD",
    client: "DPRD Deli Serdang",
    category: "Government",
    desc: "Website informasi jadwal rapat, risalah, berita, dan profil anggota dewan untuk transparansi publik.",
    tech: ["CMS", "Web Portal"],
    color: "blue",
    featured: false,
    logo: "/images/clients/deliserdang.png"
  },
  {
    id: "dprd-eoffice",
    title: "Si-Kakakade (E-Office)",
    client: "DPRD Deli Serdang",
    category: "Government",
    desc: "Digitalisasi surat masuk, surat keluar, dan disposisi digital untuk efisiensi birokrasi parlemen.",
    tech: ["Digital Archive", "PDF"],
    color: "blue",
    featured: false,
    logo: "/images/clients/deliserdang.png"
  },
  {
    id: "dat-daramenta",
    title: "Website PT. Dat Daramenta Sejahtera",
    client: "PT. Dat Daramenta Sejahtera",
    category: "Business",
    desc: "Pembuatan website company profile PT. Dat Daramenta Sejahtera yang bergerak dibidang minyak sawit.",
    tech: ["Linux", "Next.js"],
    color: "purple",
    featured: false,
    logo: "/images/clients/dds.png"
  },
  {
    id: "bapenda-ppj",
    title: "Sistem Laporan PPJ",
    client: "Bapenda Deli Serdang",
    category: "Government",
    desc: "Sistem pencocokan tagihan dan Pajak Penerangan Jalan (PPJ) kabupaten untuk rekonsiliasi.",
    tech: ["Data Matching", "Finance"],
    color: "blue",
    featured: false,
    logo: "/images/clients/deliserdang.png"
  },

  // --- 3. HEALTH (KESEHATAN & RUMAH SAKIT) ---
  {
    id: "simrs-amri",
    title: "SIMRS Terintegrasi",
    client: "RSUD Drs. H. Amri Tambunan",
    category: "Health",
    desc: "Sistem Manajemen RS hulu-hilir: Pendaftaran, Rawat Inap/Jalan, Farmasi, Laboratorium, hingga Kasir.",
    tech: ["PHP", "PostgreSQL", "Microservices"],
    color: "emerald",
    featured: true,
    logo: "/images/clients/tambunan.png"
  },
  {
    id: "bpjs-bridging",
    title: "Bridging BPJS V-Claim",
    client: "RSUD Drs. H. Amri Tambunan",
    category: "Health",
    desc: "Integrasi klaim BPJS otomatis langsung dari SIMRS tanpa input ulang manual.",
    tech: ["API Integration", "BPJS TrustMark"],
    color: "emerald",
    featured: false,
    logo: "/images/clients/tambunan.png"
  },
  {
    id: "rs-prima",
    title: "SIMRS Mata (Oftalmologi)",
    client: "RS Prima Vision",
    category: "Health",
    desc: "Sistem informasi manajemen khusus rumah sakit mata dengan modul pemeriksaan klinis spesifik.",
    tech: ["Custom ERP", "Medical Tech"],
    color: "emerald",
    featured: false,
    logo: "/images/clients/prima.png",
    isDark: true
  },
  {
    id: "rsgm-usu",
    title: "SIMRS Gigi & Mulut",
    client: "RSGM USU",
    category: "Health",
    desc: "Digitalisasi operasional Rumah Sakit Gigi dan Mulut USU (Pendaftaran & Rekam Medis).",
    tech: ["Web App", "Clinical Data"],
    color: "emerald",
    featured: false,
    logo: "/images/clients/usu.png"
  },
  {
    id: "nurse-call",
    title: "IoT Nurse Call System",
    client: "RS Sri Pamela",
    category: "Health",
    desc: "Sistem pemanggil perawat berbasis hardware IoT. Pasien menekan tombol, notifikasi real-time ke station.",
    tech: ["IoT Hardware", "Realtime Socket"],
    color: "emerald",
    featured: false,
    logo: "/images/clients/sripamela.png"
  },

  // --- 4. EDUCATION (PENDIDIKAN & KAMPUS) ---
  {
    id: "usu-pak",
    title: "Sistem PAK Dosen",
    client: "Universitas Sumatera Utara",
    category: "Education",
    desc: "Sistem penilaian angka kredit dosen otomatis untuk menentukan kenaikan pangkat akademik.",
    tech: ["Laravel", "Complex Logic"],
    color: "orange",
    featured: true,
    logo: "/images/clients/usu.png"
  },
  {
    id: "poltekbang-simlitabmas",
    title: "SIMLITABMAS",
    client: "Poltekbang Medan",
    category: "Education",
    desc: "Sistem Informasi Penelitian dan Pengabdian Masyarakat untuk dosen.",
    tech: ["Research Mgmt", "Reporting"],
    color: "orange",
    featured: false,
    logo: "/images/clients/poltekbang.png"
  },
  {
    id: "polmed-surat",
    title: "Sistem Surat & Disposisi",
    client: "Politeknik Negeri Medan",
    category: "Education",
    desc: "Aplikasi surat menyurat dan disposisi elektronik internal kampus.",
    tech: ["E-Office", "Tracking"],
    color: "orange",
    featured: false,
    logo: "/images/clients/polmed.png"
  },
  {
    id: "smk-cbt",
    title: "Ujian Online (CBT)",
    client: "SMKN 1 Kota Binjai",
    category: "Education",
    desc: "Platform ujian sekolah berbasis komputer yang aman.",
    tech: ["CBT Platform", "Security"],
    color: "orange",
    featured: false,
    logo: "/images/clients/smkn1.png"
  },
  {
    id: "smp-web",
    title: "School Website",
    client: "SMP Darussalam Medan",
    category: "Education",
    desc: "Website profil sekolah, informasi guru, dan pendaftaran murid baru.",
    tech: ["Web Design", "CMS"],
    color: "orange",
    featured: false,
    logo: "/images/clients/darussalam.png"
  },

  // --- 5. BUSINESS (ENTERPRISE & RETAIL) ---
  {
    id: "telkom-pro",
    title: "Project Management Dashboard",
    client: "Telkom Indonesia",
    category: "Business",
    desc: "Dashboard monitoring status pengerjaan proyek infrastruktur telekomunikasi secara real-time.",
    tech: ["Dashboard", "Analytics"],
    color: "purple",
    featured: true,
    isDark: true,
    logo: "/images/clients/telkom.png"
  },
  {
    id: "ecom-amber",
    title: "Global E-Commerce",
    client: "Amberjaini",
    category: "Business",
    desc: "Toko online baju anak dengan integrasi pembayaran PayPal dan Kartu Kredit.",
    tech: ["PayPal API", "Global Shipping"],
    color: "purple",
    featured: false,
    logo: "/images/clients/amberjaini.png"
  },
  {
    id: "ecom-autolinx",
    title: "Auto Parts Store",
    client: "Autolinx",
    category: "Business",
    desc: "Penjualan dashboard mobil online dengan pembayaran internasional.",
    tech: ["Stripe", "Catalog"],
    color: "purple",
    featured: false,
    logo: "/images/clients/autolinx.png",
    isDark: true
  },
  {
    id: "ecom-lagizha",
    title: "Muslimah Fashion Store",
    client: "Lagizha",
    category: "Business",
    desc: "Platform toko online busana muslim dengan manajemen stok.",
    tech: ["E-Commerce", "Payment"],
    color: "purple",
    featured: false,
    logo: "/images/clients/lagizha.png"
  },
  {
    id: "cafe-pos",
    title: "Cafe Management System",
    client: "Kian & Kei Cafe",
    category: "Business",
    desc: "Sistem Point of Sales (Kasir), stok dapur, dan laporan penjualan.",
    tech: ["POS", "Inventory"],
    color: "purple",
    featured: false,
    logo: "/images/clients/kian.jpg",
  },
  {
    id: "gudang-sayur",
    title: "Stok Gudang Sayur",
    client: "Kamtibmas",
    category: "Business",
    desc: "Sistem pendataan masuk/keluar sayur untuk stabilitas harga pasar.",
    tech: ["Inventory", "Logistics"],
    color: "purple",
    featured: false,
    logo: "/images/clients/kamtibmas.png"
  }, 
];

const categories = ["All Work", "Government", "Health", "Education", "Business"];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All Work");

  // Logic Sort: Featured first, then normal
  const filteredProjects = (filter === "All Work" 
    ? allProjects 
    : allProjects.filter(p => p.category === filter)
  ).sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));

  return (
    <main className="bg-[#020617] min-h-screen text-white selection:bg-white/20">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-48 pb-24 px-6 border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-blue-900/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-[1800px] mx-auto text-center relative z-10">
          <motion.div 
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-10"
          >
            <div className="flex -space-x-2">
               {[1,2,3,4].map(i => <div key={i} className="w-6 h-6 rounded-full bg-gray-600 border-2 border-[#020617]" />)}
            </div>
            <span className="text-sm font-bold tracking-widest uppercase text-gray-400">
              Trusted by 35+ Clients
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-8 leading-[0.9]"
          >
            Engineering <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
              Legacy.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-2xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed"
          >
            Kami membangun infrastruktur digital untuk Kementerian, Pemerintah Daerah, Rumah Sakit, Universitas dan Bisnis.
          </motion.p>
        </div>
      </section>

      {/* --- FILTER & GALLERY --- */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          
          {/* FILTER BUTTONS */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
             <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500">
               Project Gallery ({filteredProjects.length})
             </h2>
             
             <div className="flex flex-wrap justify-center gap-2 bg-white/5 p-2 rounded-full border border-white/5 backdrop-blur-sm">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`
                      px-8 py-3 rounded-full text-sm font-bold transition-all duration-300
                      ${filter === cat 
                        ? "bg-white text-black shadow-lg scale-105" 
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                      }
                    `}
                  >
                    {cat}
                  </button>
                ))}
             </div>
          </div>

          {/* --- WIDE GALLERY GRID --- */}
          <motion.div 
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project, index) => (
                <WideProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

// --- CARD COMPONENT: IMAGE VERSION ---
function WideProjectCard({ project, index }) {
  const isFeatured = project.featured;

  // Color Theming
  const theme = {
    blue: { text: "text-blue-400", bg: "bg-blue-500", glow: "group-hover:shadow-blue-900/20" },
    emerald: { text: "text-emerald-400", bg: "bg-emerald-500", glow: "group-hover:shadow-emerald-900/20" },
    orange: { text: "text-orange-400", bg: "bg-orange-500", glow: "group-hover:shadow-orange-900/20" },
    purple: { text: "text-purple-400", bg: "bg-purple-500", glow: "group-hover:shadow-purple-900/20" },
  }[project.color];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`
        group relative flex flex-col justify-between
        rounded-[3rem] border border-white/10 bg-[#080c14] overflow-hidden
        transition-all duration-700 hover:border-white/20 hover:shadow-2xl
        ${isFeatured ? 'lg:col-span-2 min-h-[500px] lg:flex-row' : 'lg:col-span-1 min-h-[550px]'}
        ${theme.glow}
      `}
    >
      {/* 1. VISUAL AREA (With Next/Image) */}
      <div className={`
          relative overflow-hidden p-12 flex items-center justify-center
          ${isFeatured ? 'lg:w-5/12 order-2 bg-gradient-to-bl from-white/[0.03] to-transparent' : 'h-1/2 order-1 bg-gradient-to-b from-white/[0.03] to-transparent'}
      `}>
          {/* Glowing Background */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-br ${theme.text.replace('text-', 'from-')}/20 to-transparent blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
          
          {/* Logo Container in Glass Circle */}
          <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-700 ease-out">
             <div className="relative p-8 w-32 h-32 md:w-40 md:h-40 rounded-md bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                <Image 
                  src={project.logo} 
                  alt={project.client}
                  fill
                  className={`object-contain p-4 transition-all duration-500
                    ${project.isDark ? 'brightness-0 invert opacity-90 group-hover:opacity-100' : ''}
                    ${project.isDim ? 'brightness-[1.5] contrast-[1.2] group-hover:brightness-100' : ''}
                    ${!project.isDark && !project.isDim ? 'brightness-100' : ''}
                  `}
                  sizes="(max-width: 768px) 128px, 160px"
                  quality={85}
                />
             </div>
          </div>
      </div>

      {/* 2. CONTENT AREA (Same as before) */}
      <div className={`
          relative z-10 p-10 md:p-14 flex flex-col justify-between
          ${isFeatured ? 'lg:w-7/12 order-1' : 'h-1/2 order-2'}
      `}>
          <div>
            {/* Category */}
            <div className="flex items-center gap-4 mb-8">
                <span className={`h-px w-10 ${theme.bg}`}></span>
                <span className={`text-xs font-bold tracking-[0.25em] uppercase ${theme.text}`}>
                    {project.category}
                </span>
            </div>

            {/* --- CLIENT NAME --- */}
            <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] mb-6 group-hover:text-gray-200 transition-colors">
               {project.client}
            </h2>
            
            {/* Project Title */}
            <div className="inline-block px-5 py-3 rounded-xl bg-white/5 border border-white/5 mb-8">
               <h3 className="text-base md:text-lg font-medium text-gray-300">
                  Project: <span className="text-white font-bold">{project.title}</span>
               </h3>
            </div>

            <p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl">
               {project.desc}
            </p>
          </div>

          {/* Footer */}
          <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-8">
             <div className="flex flex-wrap gap-x-6 gap-y-2">
                {project.tech.map((t, i) => (
                   <span key={i} className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                      {t}
                   </span>
                ))}
             </div>
             
             {/* Action Arrow */}
             <div className="shrink-0 w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-lg cursor-pointer">
                <ArrowUpRight size={24} />
             </div>
          </div>
      </div>
    </motion.div>
  );
}