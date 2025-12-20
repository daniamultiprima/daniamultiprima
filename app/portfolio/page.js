'use client';

import React, { useState } from 'react';
import Navbar from '@/ui/Navbar';
import Footer from '@/ui/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Stethoscope, GraduationCap, Briefcase, 
  ArrowUpRight, Bot, Database, Server, Globe, 
  Smartphone, ShieldCheck, ShoppingCart, Activity, FileText,
  CreditCard, MonitorPlay, Wifi, Truck
} from 'lucide-react';

// --- DATABASE LENGKAP (35+ Proyek dari Company Profile & User Context) ---
const allProjects = [
  // --- 1. HERO / SPECIAL PROJECTS ---
  {
    id: "jare-ai",
    title: "Jare-AI Public Service",
    client: "Kementerian Komunikasi & Digital", // [User Context]
    category: "Government",
    desc: "Sistem Chatbot WhatsApp cerdas berbasis Generative AI (Gemini) yang terintegrasi dengan Data Warehouse Kementerian untuk pelayanan publik otomatis.",
    tech: ["Gemini AI", "Next.js", "Big Data"],
    color: "blue",
    featured: true, // Tampil Lebar
    icon: Bot
  },

  // --- 2. GOVERNMENT (PEMERINTAHAN) ---
  {
    id: "dashboard-sergai",
    title: "Sistem Laporan Keuangan Daerah",
    client: "Pemkab Serdang Bedagai", // [cite: 312]
    category: "Government",
    desc: "Dashboard laporan harian, mingguan, dan bulanan ke Bupati terkait pendapatan dan penggunaan keuangan daerah.",
    tech: ["Dashboard", "Analytics"],
    color: "blue",
    featured: true,
    icon: Activity
  },
  {
    id: "agam-realtime",
    title: "Laporan Kegiatan Realtime",
    client: "Kabupaten Agam", // [cite: 315]
    category: "Government",
    desc: "Sistem informasi laporan kegiatan Bupati secara live yang ditampilkan pada TV Informasi Command Center.",
    tech: ["Realtime", "TV Display"],
    color: "blue",
    featured: false,
    icon: MonitorPlay
  },
  {
    id: "emas-binjai",
    title: "E-Mas Smart City Apps",
    client: "Pemko Binjai", // [cite: 251]
    category: "Government",
    desc: "Aplikasi Android dan Website untuk memudahkan masyarakat membuat laporan masalah perkotaan secara langsung.",
    tech: ["Android", "GIS", "Web"],
    color: "blue",
    featured: false,
    icon: Smartphone
  },
  {
    id: "e-absensi-binjai",
    title: "E-Absensi ASN",
    client: "Pemko Binjai", // [cite: 254]
    category: "Government",
    desc: "Aplikasi Android untuk mencatat dan memantau kehadiran pegawai pemerintahan secara elektronik (GPS & Biometrik).",
    tech: ["Android", "GPS", "Biometric"],
    color: "blue",
    featured: false,
    icon: ShieldCheck
  },
  {
    id: "dprd-web",
    title: "Portal Informasi DPRD",
    client: "DPRD Deli Serdang", // [cite: 197]
    category: "Government",
    desc: "Website informasi jadwal rapat, risalah, berita, dan profil anggota dewan untuk transparansi publik.",
    tech: ["CMS", "Web Portal"],
    color: "blue",
    featured: false,
    icon: Globe
  },
  {
    id: "dprd-eoffice",
    title: "Si-Kakakade (E-Office)",
    client: "DPRD Deli Serdang", // [cite: 200]
    category: "Government",
    desc: "Digitalisasi surat masuk, surat keluar, dan disposisi digital untuk efisiensi birokrasi parlemen.",
    tech: ["Digital Archive", "PDF"],
    color: "blue",
    featured: false,
    icon: FileText
  },
  {
    id: "dprd-jdih",
    title: "JDIH Digital",
    client: "DPRD Deli Serdang", // [cite: 202]
    category: "Government",
    desc: "Sistem Jaringan Dokumentasi dan Informasi Hukum untuk publikasi Peraturan Daerah (Perda).",
    tech: ["Search Engine", "Doc Mgmt"],
    color: "blue",
    featured: false,
    icon: Database
  },
  {
    id: "dprd-server",
    title: "Server Infrastructure",
    client: "DPRD Deli Serdang", // [cite: 208]
    category: "Government",
    desc: "Instalasi dan konfigurasi web-server fisik untuk menampung seluruh sistem informasi DPRD.",
    tech: ["Linux", "Networking", "Security"],
    color: "blue",
    featured: false,
    icon: Server
  },
  {
    id: "bapenda-ppj",
    title: "Sistem Laporan PPJ",
    client: "Bapenda Deli Serdang", // [cite: 281]
    category: "Government",
    desc: "Sistem pencocokan tagihan dan Pajak Penerangan Jalan (PPJ) kabupaten untuk rekonsiliasi.",
    tech: ["Data Matching", "Finance"],
    color: "blue",
    featured: false,
    icon: FileText
  },
  {
    id: "bapenda-pajak",
    title: "Pendataan Pajak Daerah",
    client: "Bapenda Deli Serdang", // [cite: 300]
    category: "Government",
    desc: "Sistem sinkronisasi pendapatan daerah dengan database wajib pajak Bapenda.",
    tech: ["Big Data", "Reporting"],
    color: "blue",
    featured: false,
    icon: Database
  },
  {
    id: "disdik-medan",
    title: "Sistem Pendataan Pegawai",
    client: "Dinas Pendidikan Medan", // [cite: 278]
    category: "Government",
    desc: "Database lengkap biodata, histori jabatan, dan perjalanan dinas pegawai Disdik Kota Medan.",
    tech: ["HRIS", "Database"],
    color: "blue",
    featured: false,
    icon: Database
  },

  // --- 3. HEALTH (KESEHATAN & RUMAH SAKIT) ---
  {
    id: "simrs-amri",
    title: "SIMRS Terintegrasi",
    client: "RSUD Drs. H. Amri Tambunan", // [cite: 165]
    category: "Health",
    desc: "Sistem Manajemen RS hulu-hilir: Pendaftaran, Rawat Inap/Jalan, Farmasi, Laboratorium, hingga Kasir.",
    tech: ["PHP", "PostgreSQL", "Microservices"],
    color: "emerald",
    featured: true,
    icon: Stethoscope
  },
  {
    id: "bpjs-bridging",
    title: "Bridging BPJS V-Claim",
    client: "RSUD Drs. H. Amri Tambunan", // [cite: 169]
    category: "Health",
    desc: "Integrasi klaim BPJS otomatis langsung dari SIMRS tanpa input ulang manual.",
    tech: ["API Integration", "BPJS TrustMark"],
    color: "emerald",
    featured: false,
    icon: ShieldCheck
  },
  {
    id: "rs-prima",
    title: "SIMRS Mata (Oftalmologi)",
    client: "RS Prima Vision", // [cite: 269]
    category: "Health",
    desc: "Sistem informasi manajemen khusus rumah sakit mata dengan modul pemeriksaan klinis spesifik.",
    tech: ["Custom ERP", "Medical Tech"],
    color: "emerald",
    featured: false,
    icon: Activity
  },
  {
    id: "rsgm-usu",
    title: "SIMRS Gigi & Mulut",
    client: "RSGM USU", // [cite: 221]
    category: "Health",
    desc: "Digitalisasi operasional Rumah Sakit Gigi dan Mulut USU (Pendaftaran & Rekam Medis).",
    tech: ["Web App", "Clinical Data"],
    color: "emerald",
    featured: false,
    icon: Stethoscope
  },
  {
    id: "nurse-call",
    title: "IoT Nurse Call System",
    client: "RS Sri Pamela", // [cite: 329]
    category: "Health",
    desc: "Sistem pemanggil perawat berbasis hardware IoT. Pasien menekan tombol, notifikasi real-time ke station.",
    tech: ["IoT Hardware", "Realtime Socket"],
    color: "emerald",
    featured: false,
    icon: Wifi
  },

  // --- 4. EDUCATION (PENDIDIKAN & KAMPUS) ---
  {
    id: "usu-pak",
    title: "Sistem PAK Dosen",
    client: "Universitas Sumatera Utara", // [cite: 191]
    category: "Education",
    desc: "Sistem penilaian angka kredit dosen otomatis untuk menentukan kenaikan pangkat akademik.",
    tech: ["Laravel", "Complex Logic"],
    color: "orange",
    featured: true,
    icon: GraduationCap
  },
  {
    id: "usu-remun",
    title: "Sistem Remunerasi",
    client: "Universitas Sumatera Utara", // [cite: 236]
    category: "Education",
    desc: "Perhitungan insentif dan tunjangan kinerja dosen serta tenaga kependidikan.",
    tech: ["Payroll", "Analytics"],
    color: "orange",
    featured: false,
    icon: Activity
  },
  {
    id: "usu-rka",
    title: "SI Rencana Kerja (RKA)",
    client: "Universitas Sumatera Utara", // [cite: 245]
    category: "Education",
    desc: "Penyusunan rencana kerja dan alokasi anggaran unit/fakultas secara terintegrasi.",
    tech: ["Budgeting", "Planning"],
    color: "orange",
    featured: false,
    icon: FileText
  },
  {
    id: "usu-dpa",
    title: "SI Dokumen Anggaran (DPA)",
    client: "Universitas Sumatera Utara", // [cite: 225]
    category: "Education",
    desc: "Pengelolaan, penyimpanan, dan pemantauan dokumen pelaksanaan anggaran.",
    tech: ["Doc Mgmt", "Secure"],
    color: "orange",
    featured: false,
    icon: Database
  },
  {
    id: "usu-spj",
    title: "SIM SPJ Keuangan",
    client: "Universitas Sumatera Utara", // [cite: 230]
    category: "Education",
    desc: "Sistem manajemen surat pertanggungjawaban penggunaan anggaran universitas.",
    tech: ["Finance", "Auditing"],
    color: "orange",
    featured: false,
    icon: FileText
  },
  {
    id: "usu-sppd",
    title: "SIM SPPD Online",
    client: "Universitas Sumatera Utara", // [cite: 240]
    category: "Education",
    desc: "Manajemen pengajuan dan pelaporan Surat Perjalanan Dinas pegawai.",
    tech: ["Workflow", "Approval"],
    color: "orange",
    featured: false,
    icon: Globe
  },
  {
    id: "poltekbang-simlitabmas",
    title: "SIMLITABMAS",
    client: "Poltekbang Medan", // [cite: 174]
    category: "Education",
    desc: "Sistem Informasi Penelitian dan Pengabdian Masyarakat untuk dosen.",
    tech: ["Research Mgmt", "Reporting"],
    color: "orange",
    featured: false,
    icon: Globe
  },
  {
    id: "poltekbang-ojs",
    title: "Open Journal System",
    client: "Poltekbang Medan", // [cite: 182]
    category: "Education",
    desc: "Instalasi dan manajemen jurnal ilmiah kampus berbasis OJS.",
    tech: ["OJS Platform", "Academic"],
    color: "orange",
    featured: false,
    icon: FileText
  },
  {
    id: "poltekbang-repo",
    title: "Repository Perpustakaan",
    client: "Poltekbang Medan", // [cite: 186]
    category: "Education",
    desc: "Digitalisasi skripsi dan buku perpustakaan kampus.",
    tech: ["DSpace", "Archiving"],
    color: "orange",
    featured: false,
    icon: Database
  },
  {
    id: "polmed-surat",
    title: "Sistem Surat & Disposisi",
    client: "Politeknik Negeri Medan", // [cite: 258]
    category: "Education",
    desc: "Aplikasi surat menyurat dan disposisi elektronik internal kampus.",
    tech: ["E-Office", "Tracking"],
    color: "orange",
    featured: false,
    icon: FileText
  },
  {
    id: "polmed-absen",
    title: "E-Absensi Mobile",
    client: "Politeknik Negeri Medan", // [cite: 264]
    category: "Education",
    desc: "Absensi dosen dan mahasiswa menggunakan smartphone.",
    tech: ["Mobile App", "GPS"],
    color: "orange",
    featured: false,
    icon: Smartphone
  },
  {
    id: "smk-cbt",
    title: "Ujian Online (CBT)",
    client: "SMKN 1 Kota Binjai", // [cite: 303]
    category: "Education",
    desc: "Platform ujian sekolah berbasis komputer yang aman.",
    tech: ["CBT Platform", "Security"],
    color: "orange",
    featured: false,
    icon: Globe
  },
  {
    id: "smp-web",
    title: "School Website",
    client: "SMP Darussalam Medan", // [cite: 306]
    category: "Education",
    desc: "Website profil sekolah, informasi guru, dan pendaftaran murid baru.",
    tech: ["Web Design", "CMS"],
    color: "orange",
    featured: false,
    icon: Globe
  },

  // --- 5. BUSINESS (ENTERPRISE & RETAIL) ---
  {
    id: "telkom-pro",
    title: "Project Management Dashboard",
    client: "Telkom Indonesia", // [cite: 319]
    category: "Business",
    desc: "Dashboard monitoring status pengerjaan proyek infrastruktur telekomunikasi secara real-time.",
    tech: ["Dashboard", "Analytics"],
    color: "purple",
    featured: true,
    icon: Briefcase
  },
  {
    id: "ecom-amber",
    title: "Global E-Commerce",
    client: "Amberjaini", // [cite: 332]
    category: "Business",
    desc: "Toko online baju anak dengan integrasi pembayaran PayPal dan Kartu Kredit.",
    tech: ["PayPal API", "Global Shipping"],
    color: "purple",
    featured: false,
    icon: ShoppingCart
  },
  {
    id: "ecom-autolinx",
    title: "Auto Parts Store",
    client: "Autolinx", // [cite: 336]
    category: "Business",
    desc: "Penjualan dashboard mobil online dengan pembayaran internasional.",
    tech: ["Stripe", "Catalog"],
    color: "purple",
    featured: false,
    icon: ShoppingCart
  },
  {
    id: "ecom-lagizha",
    title: "Muslimah Fashion Store",
    client: "Lagizha", // [cite: 211]
    category: "Business",
    desc: "Platform toko online busana muslim dengan manajemen stok.",
    tech: ["E-Commerce", "Payment"],
    color: "purple",
    featured: false,
    icon: ShoppingCart
  },
  {
    id: "cafe-pos",
    title: "Cafe Management System",
    client: "Kian & Kei Cafe", // [cite: 266]
    category: "Business",
    desc: "Sistem Point of Sales (Kasir), stok dapur, dan laporan penjualan.",
    tech: ["POS", "Inventory"],
    color: "purple",
    featured: false,
    icon: Activity
  },
  {
    id: "gudang-sayur",
    title: "Stok Gudang Sayur",
    client: "Kamtibmas", // [cite: 214]
    category: "Business",
    desc: "Sistem pendataan masuk/keluar sayur untuk stabilitas harga pasar.",
    tech: ["Inventory", "Logistics"],
    color: "purple",
    featured: false,
    icon: Truck
  },
  {
    id: "dds-web",
    title: "Corporate Profile",
    client: "PT. Dat Daramenta", // [cite: 275]
    category: "Business",
    desc: "Website korporat untuk branding dan katalog produk.",
    tech: ["Web Design", "SEO"],
    color: "purple",
    featured: false,
    icon: Globe
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
              Trusted by 35+ Organizations
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
            Kami membangun infrastruktur digital untuk Kementerian, Pemerintah Daerah, Rumah Sakit, dan Universitas.
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
          {/* Maksimal 2 kolom agar 'Plong' */}
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

// --- CARD COMPONENT: LEBAR, PLONG, CLIENT MENCOLOK ---
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
      {/* 1. VISUAL AREA (Abstract Art) */}
      <div className={`
         relative overflow-hidden p-12 flex items-center justify-center
         ${isFeatured ? 'lg:w-5/12 order-2 bg-gradient-to-bl from-white/[0.03] to-transparent' : 'h-1/2 order-1 bg-gradient-to-b from-white/[0.03] to-transparent'}
      `}>
          {/* Glowing Background */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-br ${theme.text.replace('text-', 'from-')}/20 to-transparent blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
          
          {/* Icon Container */}
          <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-700 ease-out">
             <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl">
                <project.icon size={isFeatured ? 72 : 56} strokeWidth={1} className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" />
             </div>
          </div>
      </div>

      {/* 2. CONTENT AREA */}
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

            {/* --- CLIENT NAME (THE HERO) --- */}
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