"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Terminal,
    Crosshair,
    Cpu,
    ShieldAlert,
    X,
    Minimize2,
    Maximize2,
} from "lucide-react";

const allProjects = [
    {
        id: "jare-ai",
        title: "Jare-AI Public Service",
        client: "Kementerian Komunikasi & Digital",
        category: "Government",
        desc: "Sistem Chatbot WhatsApp cerdas berbasis Generative AI (Gemini) yang terintegrasi dengan Data Warehouse Kementerian untuk pelayanan publik otomatis 24 jam.",
        tech: ["Gemini AI", "Next.js", "Big Data", "Python"],
        color: "blue",
        featured: true,
        logo: "/images/clients/komdigi.png",
    },
    {
        id: "ajthink-lab",
        title: "AJ ThinkLab",
        client: "Amberjaini",
        category: "Education",
        desc: "Platform Learning Management System (LMS) kursus bahasa inggris dengan dashboard interaktif guru, murid dan admin serta Payment Gateway Stripe.",
        tech: ["Next.js", "MongoDB", "Express.js"],
        color: "orange",
        featured: true,
        logo: "/images/clients/ajthinklab.png",
    },
    {
        id: "dashboard-sergai",
        title: "Sistem Laporan Keuangan Daerah",
        client: "Pemkab Serdang Bedagai",
        category: "Government",
        desc: "Executive Dashboard laporan harian/bulanan Bupati terkait PAD dan serapan anggaran daerah secara real-time.",
        tech: ["Dashboard", "Analytics", "Socket.io"],
        color: "blue",
        featured: true,
        logo: "/images/clients/sergai.png",
    },
    {
        id: "agam-realtime",
        title: "Laporan Kegiatan Realtime",
        client: "Kabupaten Agam",
        category: "Government",
        desc: "Sistem informasi Command Center yang menampilkan laporan kegiatan pimpinan daerah secara live di Videotron/TV Display.",
        tech: ["Realtime", "TV Display"],
        color: "blue",
        featured: false,
        logo: "/images/clients/agam.png",
        isDim: true,
    },
    {
        id: "pemko-tanjung-balai",
        title: "Sistem Penerimaan Murid Baru",
        client: "Pemko Tanjung Balai",
        category: "Government",
        desc: "Aplikasi PPDB Online untuk SD dan SMP se-Kota Tanjung Balai dengan fitur hitung radius zonasi otomatis via Google Maps API.",
        tech: ["Next.js", "Maps API", "GIS"],
        color: "blue",
        featured: false,
        logo: "/images/clients/tanjung_balai.png",
    },
    {
        id: "emas-binjai",
        title: "E-Mas Smart City Apps",
        client: "Pemko Binjai",
        category: "Government",
        desc: "Super-App Smart City (Android/Web) untuk pelaporan keluhan masyarakat (Citizen Reporting) secara langsung ke dinas terkait.",
        tech: ["Android", "GIS", "Web"],
        color: "blue",
        featured: false,
        logo: "/images/clients/binjai.png",
    },
    {
        id: "e-absensi-binjai",
        title: "E-Absensi ASN",
        client: "Pemko Binjai",
        category: "Government",
        desc: "Aplikasi Mobile Absensi Pegawai Negeri (ASN) berbasis Geolocation (GPS) dan Biometrik Wajah untuk kedisiplinan.",
        tech: ["Android", "GPS", "Biometric"],
        color: "blue",
        featured: false,
        logo: "/images/clients/binjai.png",
    },
    {
        id: "dprd-web",
        title: "Portal Informasi DPRD",
        client: "DPRD Deli Serdang",
        category: "Government",
        desc: "Website resmi profil, jadwal rapat, risalah, dan berita kegiatan anggota dewan untuk transparansi publik.",
        tech: ["CMS", "Web Portal", "SEO"],
        color: "blue",
        featured: false,
        logo: "/images/clients/deliserdang.png",
    },
    {
        id: "dprd-eoffice",
        title: "Si-Kakakade (E-Office)",
        client: "DPRD Deli Serdang",
        category: "Government",
        desc: "Sistem Tata Naskah Dinas Elektronik (TNDE) untuk disposisi surat masuk & keluar secara digital (Paperless).",
        tech: ["Digital Archive", "PDF Generator"],
        color: "blue",
        featured: false,
        logo: "/images/clients/deliserdang.png",
    },
    {
        id: "dat-daramenta",
        title: "Website PT. Dat Daramenta",
        client: "PT. Dat Daramenta Sejahtera",
        category: "Business",
        desc: "Website Company Profile korporat industri kelapa sawit dengan desain modern dan SEO Optimized.",
        tech: ["Next.js", "SEO", "Responsive"],
        color: "purple",
        featured: false,
        logo: "/images/clients/dds.png",
    },
    {
        id: "bapenda-ppj",
        title: "Sistem Laporan PPJ",
        client: "Bapenda Deli Serdang",
        category: "Government",
        desc: "Sistem rekonsiliasi dan pencocokan data tagihan Pajak Penerangan Jalan (PPJ) Kabupaten.",
        tech: ["Data Matching", "Finance Logic"],
        color: "blue",
        featured: false,
        logo: "/images/clients/deliserdang.png",
    },
    {
        id: "simrs-amri",
        title: "SIMRS Terintegrasi",
        client: "RSUD Drs. H. Amri Tambunan",
        category: "Health",
        desc: "Sistem Manajemen RS Enterprise: Pendaftaran Online, Rekam Medis (EMR), Farmasi, Lab, Radiologi hingga Kasir.",
        tech: ["PHP", "PostgreSQL", "Microservices"],
        color: "emerald",
        featured: true,
        logo: "/images/clients/tambunan.png",
    },
    {
        id: "bpjs-bridging",
        title: "Bridging BPJS V-Claim",
        client: "RSUD Drs. H. Amri Tambunan",
        category: "Health",
        desc: "Modul integrasi (Bridging) sistem RS dengan BPJS V-Claim untuk klaim otomatis dan cek rujukan.",
        tech: ["API Integration", "BPJS TrustMark"],
        color: "emerald",
        featured: false,
        logo: "/images/clients/tambunan.png",
    },
    {
        id: "rs-prima",
        title: "SIMRS Mata (Oftalmologi)",
        client: "RS Prima Vision",
        category: "Health",
        desc: "Sistem informasi manajemen khusus rumah sakit mata dengan modul pemeriksaan klinis (Visus/Refraksi) spesifik.",
        tech: ["Custom ERP", "Medical Tech"],
        color: "emerald",
        featured: false,
        logo: "/images/clients/prima.png",
        isDark: true,
    },
    {
        id: "rsgm-usu",
        title: "SIMRS Gigi & Mulut",
        client: "RSGM USU",
        category: "Health",
        desc: "Digitalisasi operasional Rumah Sakit Gigi dan Mulut USU (Pendaftaran, Odontogram & Rekam Medis).",
        tech: ["Web App", "Clinical Data"],
        color: "emerald",
        featured: false,
        logo: "/images/clients/usu.png",
    },
    {
        id: "nurse-call",
        title: "IoT Nurse Call System",
        client: "RS Sri Pamela",
        category: "Health",
        desc: "Sistem pemanggil perawat berbasis hardware IoT. Tombol pasien terhubung real-time ke Nurse Station.",
        tech: ["IoT Hardware", "Realtime Socket"],
        color: "emerald",
        featured: false,
        logo: "/images/clients/sripamela.png",
    },
    {
        id: "usu-pak",
        title: "Sistem PAK Dosen",
        client: "Universitas Sumatera Utara",
        category: "Education",
        desc: "Sistem penilaian angka kredit dosen otomatis untuk pengajuan kenaikan pangkat akademik dan remunerasi.",
        tech: ["Laravel", "Complex Logic"],
        color: "orange",
        featured: true,
        logo: "/images/clients/usu.png",
    },
    {
        id: "poltekbang-simlitabmas",
        title: "SIMLITABMAS",
        client: "Poltekbang Medan",
        category: "Education",
        desc: "Sistem Informasi Penelitian dan Pengabdian Masyarakat untuk monitoring kinerja dosen.",
        tech: ["Research Mgmt", "Reporting"],
        color: "orange",
        featured: false,
        logo: "/images/clients/poltekbang.png",
    },
    {
        id: "polmed-surat",
        title: "Sistem Surat & Disposisi",
        client: "Politeknik Negeri Medan",
        category: "Education",
        desc: "Aplikasi surat menyurat elektronik dan disposisi digital internal kampus.",
        tech: ["E-Office", "Tracking"],
        color: "orange",
        featured: false,
        logo: "/images/clients/polmed.png",
    },
    {
        id: "smk-cbt",
        title: "Ujian Online (CBT)",
        client: "SMKN 1 Kota Binjai",
        category: "Education",
        desc: "Platform ujian sekolah berbasis komputer (CBT) yang aman, acak soal, dan penilaian otomatis.",
        tech: ["CBT Platform", "Security"],
        color: "orange",
        featured: false,
        logo: "/images/clients/smkn1.png",
    },
    {
        id: "smp-web",
        title: "School Website",
        client: "SMP Darussalam Medan",
        category: "Education",
        desc: "Website profil sekolah, informasi guru, dan portal pendaftaran murid baru.",
        tech: ["Web Design", "CMS"],
        color: "orange",
        featured: false,
        logo: "/images/clients/darussalam.png",
    },
    {
        id: "telkom-pro",
        title: "Project Management Dashboard",
        client: "Telkom Indonesia",
        category: "Business",
        desc: "Dashboard monitoring status pengerjaan proyek infrastruktur telekomunikasi nasional secara real-time.",
        tech: ["Dashboard", "Analytics"],
        color: "purple",
        featured: true,
        isDark: true,
        logo: "/images/clients/telkom.png",
    },
    {
        id: "ecom-amber",
        title: "Global E-Commerce",
        client: "Amberjaini",
        category: "Business",
        desc: "Toko online fashion anak dengan integrasi pembayaran PayPal dan Kartu Kredit untuk pasar global.",
        tech: ["PayPal API", "Global Shipping"],
        color: "purple",
        featured: false,
        logo: "/images/clients/amberjaini.png",
    },
    {
        id: "ecom-autolinx",
        title: "Auto Parts Store",
        client: "Autolinx",
        category: "Business",
        desc: "Marketplace penjualan sparepart dashboard mobil online dengan pembayaran internasional.",
        tech: ["Stripe", "Catalog"],
        color: "purple",
        featured: false,
        logo: "/images/clients/autolinx.png",
        isDark: true,
    },
    {
        id: "ecom-lagizha",
        title: "Muslimah Fashion Store",
        client: "Lagizha",
        category: "Business",
        desc: "Platform toko online busana muslim modern dengan manajemen stok otomatis.",
        tech: ["E-Commerce", "Payment"],
        color: "purple",
        featured: false,
        logo: "/images/clients/lagizha.png",
    },
    {
        id: "cafe-pos",
        title: "Cafe Management System",
        client: "Kian & Kei Cafe",
        category: "Business",
        desc: "Sistem Point of Sales (Kasir) layar sentuh, manajemen stok dapur, dan laporan penjualan harian.",
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
        desc: "Sistem pendataan masuk/keluar logistik sayur untuk menjaga stabilitas harga pasar.",
        tech: ["Inventory", "Logistics"],
        color: "purple",
        featured: false,
        logo: "/images/clients/kamtibmas.png",
    },
];

const categories = [
    "All Work",
    "Government",
    "Health",
    "Education",
    "Business",
];

export default function PortfolioPage() {
    const [filter, setFilter] = useState("Seluruh Portfolio");
    const [glitchTitle, setGlitchTitle] = useState("SELURUH KLIEN KAMI");

    useEffect(() => {
        const texts = [
            "SELURUH KLIEN KAMI",
        ];
        let i = 0;
        const interval = setInterval(() => {
            i = (i + 1) % texts.length;
            setGlitchTitle(texts[i]);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const filteredProjects = (
        filter === "All Work"
            ? allProjects
            : allProjects.filter((p) => p.category === filter)
    ).sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));

    return (
        <main className="bg-[#020617] min-h-screen text-white selection:bg-cyan-500 selection:text-black font-sans">
            <style
                dangerouslySetInnerHTML={{
                    __html: `
        @keyframes scanline {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scanline 1.5s ease-in-out infinite;
        }
      `,
                }}
            />
            <Navbar />

            {/* HEADER: HACKER CRT SCREEN */}
            <section className="relative w-full pt-32 md:pt-48 pb-20 px-6 overflow-hidden bg-[#020617] border-b-[8px] border-black">
                {/* CRT Scanline Effect */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.5)_2px,rgba(0,0,0,0.5)_4px)] pointer-events-none z-10" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

                <div className="max-w-[1200px] mx-auto relative z-20 flex flex-col items-center">
                    {/* <motion.div 
             initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-3 px-4 py-2 bg-black border-[4px] border-cyan-400 shadow-[6px_6px_0_0_#0891b2] mb-8"
           >
             <ShieldAlert size={18} className="text-cyan-400 animate-pulse" />
             <h2 className="font-mono text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-cyan-400">
               AUTHORIZED PERSONNEL ONLY
             </h2>
           </motion.div> */}

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-[6rem] font-black text-center tracking-tighter mb-8 leading-[1.1] md:leading-none font-logo text-white uppercase drop-shadow-[2px_2px_0_#22d3ee] md:drop-shadow-[4px_4px_0_#22d3ee] break-words">
                        {glitchTitle}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-black border-[4px] border-gray-600 p-6 shadow-[8px_8px_0_0_#0f172a] max-w-3xl text-center relative">
                        <div className="absolute top-2 left-2 w-2 h-2 bg-cyan-400 animate-ping" />
                        <p className="font-sans text-gray-300 text-sm md:text-lg font-bold leading-relaxed mt-2">
                            Akses arsip{" "}
                            <strong className="text-cyan-400">
                                Studi Kasus & Proyek Nyata
                            </strong>{" "}
                            kami dalam membangun infrastruktur digital untuk
                            Kementerian, Pemerintah Daerah, Rumah Sakit, dan
                            Universitas di seluruh Indonesia.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-6 md:px-12 relative z-20 bg-[#060b14]">
                <div className="max-w-[1600px] mx-auto">
                    {/* FILTER: COMMAND LINE TABS */}
                    <div className="flex flex-col xl:flex-row justify-between items-center mb-16 gap-8">
                        <div className="flex items-center gap-3 bg-black border-[4px] border-gray-700 px-4 py-2 shadow-[4px_4px_0_0_#000]">
                            <Terminal size={18} className="text-gray-400" />
                            <h3 className="text-xs md:text-sm font-mono font-bold uppercase tracking-widest text-gray-300">
                                Total_Records: [{filteredProjects.length}]
                            </h3>
                        </div>

                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`
                      px-6 py-2 border-[4px] border-black font-logo text-xs md:text-sm font-black uppercase tracking-widest transition-all duration-200
                      ${
                          filter === cat
                              ? "bg-cyan-400 text-black shadow-[inset_4px_4px_0_0_rgba(255,255,255,0.5)] translate-y-1"
                              : "bg-gray-300 text-black shadow-[4px_4px_0_0_#000] hover:bg-white hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000]"
                      }
                    `}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* GRID: OS WINDOW DOSSIERS */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <OSWindowCard
                                    key={project.id}
                                    project={project}
                                    index={index}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function OSWindowCard({ project, index }) {
    const isFeatured = project.featured;

    const themeColors = {
        blue: "border-cyan-500",
        emerald: "border-emerald-500",
        orange: "border-orange-500",
        purple: "border-purple-500",
    };

    const badgeColors = {
        blue: "bg-cyan-900 text-cyan-300",
        emerald: "bg-emerald-900 text-emerald-300",
        orange: "bg-orange-900 text-orange-300",
        purple: "bg-purple-900 text-purple-300",
    };

    const accentBorder = themeColors[project.color];
    const accentBadge = badgeColors[project.color];

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.5,
                delay: 0.1,
                type: "spring",
                stiffness: 80,
            }}
            className={`
        group relative flex flex-col bg-black border-[6px] border-black shadow-[12px_12px_0_0_#000]
        transition-all duration-300 hover:shadow-[4px_4px_0_0_#000] hover:translate-x-2 hover:translate-y-2
        ${isFeatured ? "lg:col-span-2" : "lg:col-span-1"}
      `}>
            {/* TITLE BAR (Windows 95 Style) */}
            <div className="bg-gray-300 border-b-[4px] border-black flex justify-between items-center p-2">
                <div className="flex items-center gap-2 pl-2">
                    <Cpu size={14} className="text-black" />
                    <span className="font-mono text-[10px] font-bold text-black uppercase tracking-widest truncate max-w-[150px] md:max-w-[250px]">
                        {project.id}.EXE
                    </span>
                </div>
                <div className="flex gap-1">
                    <div className="w-6 h-5 bg-gray-400 border-[2px] border-black flex items-center justify-center cursor-pointer hover:bg-white">
                        <Minimize2 size={10} />
                    </div>
                    <div className="w-6 h-5 bg-gray-400 border-[2px] border-black flex items-center justify-center cursor-pointer hover:bg-white">
                        <Maximize2 size={10} />
                    </div>
                    <div className="w-6 h-5 bg-gray-400 border-[2px] border-black flex items-center justify-center cursor-pointer hover:bg-red-500 hover:text-white">
                        <X size={12} />
                    </div>
                </div>
            </div>

            <div
                className={`flex flex-col ${isFeatured ? "lg:flex-row" : ""} h-full`}>
                {/* LOGO & SCANNER AREA (Slightly Darker Light Theme) */}
                <div
                    className={`
             relative p-8 flex items-center justify-center overflow-hidden bg-gray-300
             ${isFeatured ? "lg:w-2/5 border-r-[4px] border-black" : "border-b-[4px] border-black min-h-[250px]"}
         `}>
                    {/* Blueprint Grid on the light background */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:20px_20px]" />

                    {/* Target Frame Corners */}
                    <div className="absolute inset-4 border-[2px] border-transparent pointer-events-none flex flex-col justify-between p-1 z-10">
                        <div className="flex justify-between w-full">
                            <div className="w-6 h-6 border-t-[4px] border-l-[4px] border-black" />
                            <div className="w-6 h-6 border-t-[4px] border-r-[4px] border-black" />
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="w-6 h-6 border-b-[4px] border-l-[4px] border-black" />
                            <div className="w-6 h-6 border-b-[4px] border-r-[4px] border-black" />
                        </div>
                    </div>

                    {/* The Laser Scanner Animation */}
                    <div className="absolute top-0 left-0 w-full h-[6px] bg-red-500 shadow-[0_0_20px_#ef4444] z-20 opacity-0 group-hover:opacity-100 group-hover:animate-scan pointer-events-none" />

                    {/* The Logo (Larger, Transparent Background) */}
                    <div className="relative z-10 w-40 h-40 md:w-56 md:h-56 flex items-center justify-center drop-shadow-[4px_4px_0_rgba(0,0,0,0.15)] group-hover:scale-110 transition-transform duration-500">
                        <Image
                            src={project.logo}
                            alt={`Logo ${project.client}`}
                            fill
                            className={`object-contain p-2 ${project.isDim ? "contrast-[1.2]" : ""}`}
                            sizes="(max-width: 768px) 160px, 224px"
                            quality={90}
                        />
                    </div>
                </div>

                {/* CONTENT DATA AREA */}
                <div
                    className={`p-6 md:p-8 flex flex-col justify-between flex-1 bg-[#0a0f1c]`}>
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <span
                                className={`font-mono text-[9px] px-2 py-1 uppercase tracking-widest font-black border-[2px] border-black shadow-[2px_2px_0_0_#000] ${accentBadge}`}>
                                [{project.category}]
                            </span>
                            {isFeatured && (
                                <span className="font-logo text-[8px] bg-yellow-400 text-black px-2 py-1 uppercase tracking-widest font-bold border-[2px] border-black shadow-[2px_2px_0_0_#000] animate-pulse">
                                    ⭐ TOP_SECRET
                                </span>
                            )}
                        </div>

                        <h2 className="font-logo text-xl md:text-3xl font-black text-white uppercase tracking-wider mb-2 leading-tight">
                            {project.client}
                        </h2>

                        <h3 className="font-sans text-sm md:text-base font-bold text-gray-400 mb-6 border-l-[4px] pl-3 border-gray-600">
                            {project.title}
                        </h3>

                        <p className="font-sans text-xs md:text-sm font-bold text-gray-500 leading-relaxed max-w-xl">
                            {project.desc}
                        </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                            <span
                                key={i}
                                className={`font-mono text-[10px] text-white border-[2px] border-gray-700 bg-gray-900 px-2 py-1 uppercase shadow-[2px_2px_0_0_#333] group-hover:${accentBorder} transition-colors`}>
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
