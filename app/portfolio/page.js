'use client';

import React, { useState } from 'react';
import Navbar from '@/ui/Navbar';
import Footer from '@/ui/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Stethoscope, GraduationCap, Briefcase, 
  ArrowUpRight, Bot, Search, Filter
} from 'lucide-react';

// --- DATABASE PROYEK LENGKAP (37 ITEMS DARI PDF + JARE AI) ---
const allProjects = [
  // --- HERO PROJECT (CUSTOM) ---
  {
    id: "jare-ai",
    title: "Jare-AI Public Service",
    client: "Kementerian Komunikasi & Digital",
    category: "Government",
    desc: "Sistem Chatbot WhatsApp cerdas berbasis Generative AI (Gemini) yang terintegrasi dengan Data Warehouse Kementerian untuk pelayanan publik otomatis.",
    tech: ["Gemini AI", "Next.js", "Big Data", "WhatsApp API"],
    color: "blue",
    size: "hero" // Full Width
  },

  // --- HEALTH (RUMAH SAKIT) ---
  {
    id: "simrs-amri",
    title: "SIMRS Terintegrasi",
    client: "RSUD Drs. H. Amri Tambunan",
    category: "Health",
    desc: "Sistem Manajemen Rumah Sakit hulu-hilir: Pendaftaran, Rawat Inap/Jalan, Farmasi, hingga Kasir.",
    tech: ["PHP", "PostgreSQL", "Microservices"],
    color: "emerald",
    size: "large" // 2/3 Width
  },
  {
    id: "bpjs-bridging",
    title: "Bridging BPJS V-Claim",
    client: "RSUD Drs. H. Amri Tambunan",
    category: "Health",
    desc: "Integrasi sistem klaim BPJS otomatis langsung dari SIMRS tanpa input ulang manual.",
    tech: ["API Integration", "BPJS TrustMark"],
    color: "emerald",
    size: "normal"
  },
  {
    id: "rs-prima",
    title: "SIMRS Mata (Oftalmologi)",
    client: "RS Prima Vision",
    category: "Health",
    desc: "Sistem informasi manajemen khusus rumah sakit mata dengan modul pemeriksaan klinis spesifik.",
    tech: ["Custom ERP", "Medical Tech"],
    color: "emerald",
    size: "normal"
  },
  {
    id: "nurse-call",
    title: "IoT Nurse Call System",
    client: "RS Sri Pamela Tebing Tinggi",
    category: "Health",
    desc: "Sistem pemanggil perawat berbasis hardware IoT. Pasien menekan tombol, notifikasi real-time ke station.",
    tech: ["IoT Hardware", "Realtime Socket"],
    color: "emerald",
    size: "normal"
  },
  {
    id: "rsgm-usu",
    title: "SIMRS Gigi & Mulut",
    client: "RSGM Universitas Sumatera Utara",
    category: "Health",
    desc: "Digitalisasi operasional Rumah Sakit Gigi dan Mulut USU (Pendaftaran & Rekam Medis).",
    tech: ["Web App", "Clinical Data"],
    color: "emerald",
    size: "normal"
  },

  // --- GOVERNMENT (PEMERINTAHAN) ---
  {
    id: "dashboard-sergai",
    title: "Executive Dashboard Bupati",
    client: "Pemkab Serdang Bedagai",
    category: "Government",
    desc: "Monitoring real-time pendapatan daerah (PAD) dan laporan keuangan harian untuk pimpinan.",
    tech: ["React", "Data Viz", "Socket.io"],
    color: "blue",
    size: "large"
  },
  {
    id: "dashboard-agam",
    title: "Realtime Activity Report",
    client: "Kabupaten Agam",
    category: "Government",
    desc: "Sistem pelaporan kegiatan Bupati secara live yang ditampilkan pada Command Center TV.",
    tech: ["WebSocket", "Big Screen UI"],
    color: "blue",
    size: "normal"
  },
  {
    id: "smart-city-binjai",
    title: "E-Mas (Smart City Apps)",
    client: "Pemko Binjai",
    category: "Government",
    desc: "Aplikasi Android & Web untuk pelaporan masalah perkotaan oleh masyarakat secara real-time.",
    tech: ["Android", "GIS", "Cloud"],
    color: "blue",
    size: "normal"
  },
  {
    id: "absensi-binjai",
    title: "E-Absensi ASN",
    client: "Pemko Binjai",
    category: "Government",
    desc: "Aplikasi absensi pegawai berbasis lokasi (GPS) dan biometrik wajah.",
    tech: ["Android", "Face Rec", "GPS"],
    color: "blue",
    size: "normal"
  },
  {
    id: "dprd-web",
    title: "Website & Portal Berita",
    client: "DPRD Deli Serdang",
    category: "Government",
    desc: "Portal informasi publik, jadwal rapat, dan profil anggota dewan.",
    tech: ["CMS", "Laravel"],
    color: "blue",
    size: "normal"
  },
  {
    id: "dprd-surat",
    title: "Si-Kakakade (E-Office)",
    client: "DPRD Deli Serdang",
    category: "Government",
    desc: "Sistem Informasi Surat Masuk dan Keluar digital untuk efisiensi birokrasi.",
    tech: ["Digital Archive", "PDF Generator"],
    color: "blue",
    size: "normal"
  },
  {
    id: "dprd-jdih",
    title: "JDIH Digital",
    client: "DPRD Deli Serdang",
    category: "Government",
    desc: "Jaringan Dokumentasi dan Informasi Hukum untuk publikasi Perda secara online.",
    tech: ["Search Engine", "Document Mgmt"],
    color: "blue",
    size: "normal"
  },
  {
    id: "dprd-server",
    title: "Server Infrastructure",
    client: "DPRD Deli Serdang",
    category: "Government",
    desc: "Instalasi dan konfigurasi Web Server fisik untuk menampung seluruh sistem informasi DPRD.",
    tech: ["Linux", "Networking", "Security"],
    color: "blue",
    size: "normal"
  },
  {
    id: "disdik-medan",
    title: "Sistem Pendataan Pegawai",
    client: "Dinas Pendidikan Kota Medan",
    category: "Government",
    desc: "Database lengkap biodata, history jabatan, dan perjalanan dinas pegawai Disdik.",
    tech: ["HR System", "Database"],
    color: "blue",
    size: "normal"
  },
  {
    id: "bapenda-ppj",
    title: "Laporan PPJ",
    client: "Bapenda Deli Serdang",
    category: "Government",
    desc: "Sistem pelaporan Pajak Penerangan Jalan (PPJ) untuk rekonsiliasi tagihan.",
    tech: ["Reporting", "Finance"],
    color: "blue",
    size: "normal"
  },
  {
    id: "bapenda-pajak",
    title: "Pendataan Pajak Daerah",
    client: "Bapenda Deli Serdang",
    category: "Government",
    desc: "Sistem pencocokan pendapatan daerah dengan database wajib pajak.",
    tech: ["Data Matching", "Auditing"],
    color: "blue",
    size: "normal"
  },

  // --- EDUCATION (EDUTECH) ---
  {
    id: "usu-pak",
    title: "Sistem PAK Dosen",
    client: "Universitas Sumatera Utara",
    category: "Education",
    desc: "Penilaian Angka Kredit Dosen otomatis untuk kenaikan pangkat akademik.",
    tech: ["Laravel", "Complex Logic"],
    color: "orange",
    size: "large"
  },
  {
    id: "usu-remun",
    title: "Sistem Remunerasi",
    client: "Universitas Sumatera Utara",
    category: "Education",
    desc: "Perhitungan insentif dan tunjangan kinerja dosen serta tenaga kependidikan.",
    tech: ["Payroll", "Analytics"],
    color: "orange",
    size: "normal"
  },
  {
    id: "usu-sppd",
    title: "SIM SPPD Online",
    client: "Universitas Sumatera Utara",
    category: "Education",
    desc: "Manajemen pengajuan dan pelaporan Surat Perjalanan Dinas pegawai.",
    tech: ["Workflow", "Approval"],
    color: "orange",
    size: "normal"
  },
  {
    id: "usu-spj",
    title: "SIM SPJ Keuangan",
    client: "Universitas Sumatera Utara",
    category: "Education",
    desc: "Sistem pertanggungjawaban penggunaan anggaran universitas.",
    tech: ["Finance", "Auditing"],
    color: "orange",
    size: "normal"
  },
  {
    id: "usu-rka",
    title: "SI Rencana Kerja (RKA)",
    client: "Universitas Sumatera Utara",
    category: "Education",
    desc: "Penyusunan rencana kerja dan alokasi anggaran unit/fakultas.",
    tech: ["Budgeting", "Planning"],
    color: "orange",
    size: "normal"
  },
  {
    id: "usu-dpa",
    title: "SI Dokumen Anggaran (DPA)",
    client: "Universitas Sumatera Utara",
    category: "Education",
    desc: "Pengelolaan dokumen pelaksanaan anggaran universitas.",
    tech: ["Document Mgmt", "Secure"],
    color: "orange",
    size: "normal"
  },
  {
    id: "poltekbang-simlitabmas",
    title: "SIMLITABMAS",
    client: "Politeknik Penerbangan Medan",
    category: "Education",
    desc: "Sistem Informasi Penelitian dan Pengabdian Masyarakat untuk dosen.",
    tech: ["Research Mgmt", "Reporting"],
    color: "orange",
    size: "normal"
  },
  {
    id: "poltekbang-ojs",
    title: "Open Journal System (OJS)",
    client: "Politeknik Penerbangan Medan",
    category: "Education",
    desc: "Instalasi dan manajemen jurnal ilmiah kampus berbasis OJS.",
    tech: ["OJS Platform", "Academic"],
    color: "orange",
    size: "normal"
  },
  {
    id: "poltekbang-repo",
    title: "Repository Perpustakaan",
    client: "Politeknik Penerbangan Medan",
    category: "Education",
    desc: "Digitalisasi skripsi dan buku perpustakaan kampus.",
    tech: ["DSpace", "Archiving"],
    color: "orange",
    size: "normal"
  },
  {
    id: "polmed-surat",
    title: "Sistem Surat & Disposisi",
    client: "Politeknik Negeri Medan",
    category: "Education",
    desc: "Aplikasi surat menyurat elektronik internal kampus.",
    tech: ["E-Office", "Tracking"],
    color: "orange",
    size: "normal"
  },
  {
    id: "polmed-absen",
    title: "E-Absensi Mobile",
    client: "Politeknik Negeri Medan",
    category: "Education",
    desc: "Absensi dosen dan mahasiswa menggunakan smartphone.",
    tech: ["Mobile App", "GPS"],
    color: "orange",
    size: "normal"
  },
  {
    id: "smk-cbt",
    title: "Ujian Online (CBT)",
    client: "SMKN 1 Kota Binjai",
    category: "Education",
    desc: "Platform ujian sekolah berbasis komputer yang aman.",
    tech: ["CBT Platform", "Security"],
    color: "orange",
    size: "normal"
  },
  {
    id: "smp-web",
    title: "School Website",
    client: "SMP Darussalam Medan",
    category: "Education",
    desc: "Website profil sekolah dan informasi pendaftaran murid baru.",
    tech: ["Web Design", "CMS"],
    color: "orange",
    size: "normal"
  },

  // --- BUSINESS (ENTERPRISE) ---
  {
    id: "telkom-pro",
    title: "Project Management",
    client: "Telkom Medan",
    category: "Business",
    desc: "Dashboard monitoring status pengerjaan proyek infrastruktur telekomunikasi.",
    tech: ["Dashboard", "Analytics"],
    color: "purple",
    size: "large"
  },
  {
    id: "cafe-pos",
    title: "Cafe Management System",
    client: "Kian & Kei Cafe",
    category: "Business",
    desc: "Sistem Point of Sales (Kasir), stok dapur, dan laporan penjualan.",
    tech: ["POS", "Inventory"],
    color: "purple",
    size: "normal"
  },
  {
    id: "ecom-lagizha",
    title: "E-Commerce Muslimah",
    client: "Lagizha",
    category: "Business",
    desc: "Platform toko online busana muslim dengan manajemen stok.",
    tech: ["E-Commerce", "Payment"],
    color: "purple",
    size: "normal"
  },
  {
    id: "ecom-amber",
    title: "Global E-Commerce",
    client: "Amberjaini",
    category: "Business",
    desc: "Toko online baju anak dengan integrasi pembayaran PayPal/Kartu Kredit.",
    tech: ["PayPal API", "Global Shipping"],
    color: "purple",
    size: "normal"
  },
  {
    id: "ecom-autolinx",
    title: "Auto Parts E-Commerce",
    client: "Autolinx",
    category: "Business",
    desc: "Pen penjualan dashboard mobil online dengan pembayaran internasional.",
    tech: ["Stripe", "Catalog"],
    color: "purple",
    size: "normal"
  },
  {
    id: "gudang-sayur",
    title: "Stok Gudang Sayur",
    client: "Kamtibmas",
    category: "Business",
    desc: "Sistem pendataan masuk/keluar sayur untuk stabilitas harga pasar.",
    tech: ["Inventory", "Logistics"],
    color: "purple",
    size: "normal"
  },
  {
    id: "dds-web",
    title: "Company Profile",
    client: "PT. Dat Daramenta Sejahtera",
    category: "Business",
    desc: "Website korporat untuk branding dan katalog produk.",
    tech: ["Web Design", "SEO"],
    color: "purple",
    size: "normal"
  },
];

const categories = ["All Work", "Government", "Health", "Education", "Business"];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All Work");

  const filteredProjects = filter === "All Work" 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <main className="bg-[#020617] min-h-screen text-white selection:bg-blue-500 selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6 border-b border-white/5 overflow-hidden">
        {/* Abstract Background Art */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-900/20 to-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-300">35+ Projects Delivered</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6"
          >
            Our Digital <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Masterpieces.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Jejak digital transformasi yang kami bangun untuk instansi pemerintah, rumah sakit, universitas, dan korporasi di seluruh Indonesia.
          </motion.p>
        </div>
      </section>

      {/* --- FILTER TABS (STICKY) --- */}
      <section className="sticky top-20 z-40 bg-[#020617]/90 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex justify-start md:justify-center gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`
                  px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border flex items-center gap-2
                  ${filter === cat 
                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                    : "bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO GRID (BENTO STYLE) --- */}
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-[1600px] mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(350px,auto)]"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// --- COMPONENT: PROJECT CARD ---
function ProjectCard({ project }) {
  // Logic Layout: Hero=3 col, Large=2 col, Normal=1 col
  const colSpanClass = {
    hero: "md:col-span-2 lg:col-span-3 min-h-[500px]",
    large: "md:col-span-2 lg:col-span-2 min-h-[400px]",
    normal: "md:col-span-1 lg:col-span-1 min-h-[350px]"
  };

  // Color Styles
  const colorStyles = {
    blue: "border-blue-500/20 hover:border-blue-500/50 bg-gradient-to-br from-blue-950/30 to-[#0B1120]",
    emerald: "border-emerald-500/20 hover:border-emerald-500/50 bg-gradient-to-br from-emerald-950/30 to-[#0B1120]",
    orange: "border-orange-500/20 hover:border-orange-500/50 bg-gradient-to-br from-orange-950/30 to-[#0B1120]",
    purple: "border-purple-500/20 hover:border-purple-500/50 bg-gradient-to-br from-purple-950/30 to-[#0B1120]",
  };

  const isHero = project.size === 'hero';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className={`group relative rounded-[2rem] overflow-hidden border ${colSpanClass[project.size]} ${colorStyles[project.color]} flex flex-col`}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center" />
      <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity bg-${project.color}-500`} />

      {/* HEADER VISUAL (ICON) */}
      <div className={`p-8 md:p-10 flex-grow ${isHero ? 'flex flex-col md:flex-row gap-10 items-center' : ''}`}>
         
         {/* Visual Icon Container */}
         <div className={`
            relative z-10 flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-500
            ${isHero ? 'w-32 h-32 flex-shrink-0' : 'w-16 h-16 mb-6'}
         `}>
            {project.category === 'Government' && <Building2 size={isHero?48:28} className="text-white" />}
            {project.category === 'Health' && <Stethoscope size={isHero?48:28} className="text-white" />}
            {project.category === 'Education' && <GraduationCap size={isHero?48:28} className="text-white" />}
            {project.category === 'Business' && <Briefcase size={isHero?48:28} className="text-white" />}
         </div>

         {/* Content */}
         <div className="relative z-10 w-full">
            <div className="flex justify-between items-start mb-4">
               <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/20 text-${project.color}-400`}>
                  <span className="text-[10px] font-bold uppercase tracking-widest">{project.category}</span>
               </div>
               <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight size={16} />
               </div>
            </div>

            <h3 className={`font-black text-white mb-2 leading-tight group-hover:underline decoration-white/30 underline-offset-4 ${isHero ? 'text-4xl md:text-5xl' : 'text-2xl'}`}>
               {project.title}
            </h3>
            
            <p className={`text-gray-400 font-medium mb-4 flex items-center gap-2 ${isHero ? 'text-lg' : 'text-xs'}`}>
               <span className="w-1.5 h-1.5 rounded-full bg-white/50" /> {project.client}
            </p>

            <p className={`text-gray-400 leading-relaxed border-l-2 border-white/10 pl-4 ${isHero ? 'text-lg max-w-2xl' : 'text-sm'}`}>
               {project.desc}
            </p>
         </div>
      </div>

      {/* FOOTER TECH STACK */}
      <div className="p-8 md:p-10 border-t border-white/5 bg-black/20 mt-auto">
         <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
               <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-gray-300 font-bold uppercase hover:bg-white/10 transition-colors">
                  {t}
               </span>
            ))}
         </div>
      </div>

    </motion.div>
  );
}