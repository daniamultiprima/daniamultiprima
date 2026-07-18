"use client";

import React, { useState } from "react";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
    Code2,
    Smartphone,
    Globe,
    BrainCircuit,
    Wifi,
    Server,
    ShieldCheck,
    MonitorPlay,
    ShoppingBag,
    LayoutTemplate,
    Settings,
    Wrench,
    BarChart3,
    HardDrive,
    Network,
    Radio,
    Search,
    ArrowRight,
    Layers,
    Lock,
} from "lucide-react";
import Link from "next/link";

const allServices = [
    {
        id: 1,
        category: "Development",
        title: "Software Development",
        desc: "Pembuatan aplikasi bisnis custom (Web/Desktop) yang presisi, aman, dan scalable sesuai kebutuhan Anda.",
        icon: Code2,
        color: "bg-blue-500",
    },
    {
        id: 2,
        category: "Development",
        title: "Mobile App Development",
        desc: "Jasa pembuatan aplikasi Android & iOS profesional. Solusi mobile app terbaik untuk startup dan korporasi.",
        icon: Smartphone,
        color: "bg-indigo-500",
    },
    {
        id: 3,
        category: "Development",
        title: "Web Development",
        desc: "Pembuatan website Profile, E-Commerce, dan Portal Berita yang modern, cepat, dan SEO Friendly.",
        icon: Globe,
        color: "bg-sky-500",
    },
    {
        id: 4,
        category: "Creative",
        title: "UI/UX Design",
        desc: "Perancangan desain antarmuka aplikasi (User Interface) yang lincah dan fokus pada pengalaman pengguna (User Experience).",
        icon: LayoutTemplate,
        color: "bg-pink-500",
    },
    {
        id: 5,
        category: "Intelligence",
        title: "Artificial Intelligence",
        desc: "Implementasi teknologi AI, Machine Learning, dan Chatbot Cerdas untuk otomatisasi layanan publik dan bisnis.",
        icon: BrainCircuit,
        color: "bg-purple-600",
    },
    {
        id: 6,
        category: "Intelligence",
        title: "Internet of Things",
        desc: "Solusi IoT Smart City dan Smart Office. Sistem monitoring aset dan lingkungan secara real-time.",
        icon: Wifi,
        color: "bg-fuchsia-500",
    },
    {
        id: 7,
        category: "Intelligence",
        title: "Smart CCTV Integration",
        desc: "Integrasi CCTV cerdas dengan fitur Face Recognition dan analitik video untuk keamanan tingkat tinggi.",
        icon: Radio,
        color: "bg-violet-500",
    },
    {
        id: 8,
        category: "Infrastructure",
        title: "Network Infrastructure",
        desc: "Jasa instalasi jaringan LAN, Fiber Optic, dan manajemen Mikrotik/Cisco untuk konektivitas internet stabil.",
        icon: Network,
        color: "bg-teal-500",
    },
    {
        id: 9,
        category: "Infrastructure",
        title: "Server & Cloud",
        desc: "Konfigurasi Server Fisik, Dedicated Server, dan Cloud Computing (AWS/GCP) serta manajemen Data Center.",
        icon: Server,
        color: "bg-slate-500",
    },
    {
        id: 10,
        category: "Infrastructure",
        title: "IT Procurement",
        desc: "Layanan pengadaan perangkat keras: Laptop, Server, Videotron, dan lisensi software resmi untuk instansi.",
        icon: ShoppingBag,
        color: "bg-emerald-500",
    },
    {
        id: 11,
        category: "Infrastructure",
        title: "Migration Services",
        desc: "Jasa migrasi database dan pemindahan sistem lama ke teknologi terbaru dengan jaminan keamanan data 100%.",
        icon: HardDrive,
        color: "bg-cyan-600",
    },
    {
        id: 12,
        category: "Security",
        title: "Cybersecurity",
        desc: "Layanan keamanan siber menyeluruh: Audit sistem, Firewall, dan proteksi dari serangan ransomware.",
        icon: ShieldCheck,
        color: "bg-red-600",
    },
    {
        id: 13,
        category: "Security",
        title: "Penetration Testing",
        desc: "Uji coba peretasan (Ethical Hacking) untuk menemukan dan menutup celah keamanan pada aplikasi web/mobile Anda.",
        icon: Search,
        color: "bg-orange-500",
    },
    {
        id: 14,
        category: "Security",
        title: "IT Maintenance",
        desc: "Kontrak pemeliharaan rutin perangkat IT (Komputer/Jaringan) dan dukungan teknis 24/7 untuk operasional.",
        icon: Wrench,
        color: "bg-amber-600",
    },
    {
        id: 15,
        category: "Enterprise",
        title: "System Integration",
        desc: "Layanan integrasi sistem antar aplikasi (API Integration) agar data tersinkronisasi otomatis antar divisi.",
        icon: Settings,
        color: "bg-indigo-600",
    },
    {
        id: 16,
        category: "Enterprise",
        title: "ERP & CRM Systems",
        desc: "Implementasi software ERP dan CRM untuk manajemen keuangan dan stok barang dalam satu dashboard terpusat.",
        icon: BarChart3,
        color: "bg-blue-600",
    },
    {
        id: 17,
        category: "Creative",
        title: "SEO Optimization",
        desc: "Jasa optimasi website (SEO) agar tampil di halaman 1 Google, mendatangkan trafik organik, dan konversi.",
        icon: Layers,
        color: "bg-cyan-500",
    },
    {
        id: 18,
        category: "Enterprise",
        title: "IT Training",
        desc: "Pelatihan (Training) teknologi dan workshop digital untuk peningkatan skill karyawan instansi dan perusahaan.",
        icon: MonitorPlay,
        color: "bg-yellow-500",
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
        <main className="bg-[#020617] min-h-screen text-white selection:bg-yellow-400 selection:text-black font-sans">
            <Navbar />

            {/* HEADER: NEO-BRUTALIST LIKE PSE_EKATALOG */}
            <section className="relative w-full py-24 md:py-32 bg-[#020617] overflow-hidden border-b-[8px] border-[#1e293b] mt-16 md:mt-0">
                {/* RETRO BLUEPRINT BACKGROUND */}
                <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, #1e3a8a 2px, transparent 2px),
              linear-gradient(to bottom, #1e3a8a 2px, transparent 2px)
            `,
                        backgroundSize: "40px 40px",
                        backgroundPosition: "0 0",
                    }}
                />

                <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center md:pt-20">
                    {/* <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-5 py-2.5 bg-yellow-400 border-[4px] border-black shadow-[6px_6px_0_0_#000] mb-8 transform -rotate-2"
            >
                <Lock size={18} className="text-black stroke-[3px]" />
                <span className="font-logo text-black text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase drop-shadow-[1px_1px_0_#fff]">
                    SYSTEM MODULES UNLOCKED
                </span>
            </motion.div> */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative">
                        <h1 className="font-logo text-2xl sm:text-3xl md:text-5xl lg:text-[4rem] text-white tracking-widest leading-[1.3] uppercase drop-shadow-[4px_4px_0_#000] break-words">
                            Comprehensive IT
                            <br />
                            <span className="inline-block bg-white text-black px-2 py-1 sm:px-4 sm:py-2 mt-4 border-[4px] sm:border-[6px] border-black shadow-[4px_4px_0_0_#eab308] sm:shadow-[8px_8px_0_0_#eab308] transform rotate-1">
                                Solutions.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-12 bg-[#1e293b] border-[4px] border-black p-5 shadow-[6px_6px_0_0_#000] max-w-2xl transform rotate-1 relative">
                        {/* Tape decorative */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-yellow-400 border-[2px] border-black shadow-[2px_2px_0_0_#000] transform -rotate-3" />

                        <p className="font-sans text-sm md:text-base font-bold text-gray-200">
                            Sebagai Software House & Konsultan IT Terpercaya,
                            kami menyediakan 18+ Layanan Teknologi untuk
                            mempercepat transformasi digital bisnis Anda di
                            Sumatera Utara.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FILTER TABS WITH CUSTOM PIXEL SCROLLBAR */}
            <section className="sticky top-[88px] md:top-[104px] z-30 bg-[#020617] border-b-[6px] border-[#1e293b] shadow-[0_10px_20px_rgba(0,0,0,0.5)] py-4">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="flex gap-4 overflow-x-auto pb-4 pt-2 custom-pixel-scroll items-center snap-x">
                        {/* 
                We use inline style for scrollbar inside this div specifically if global is overridden.
                But Tailwind classes combined with a custom style block works better.
             */}
                        <style
                            dangerouslySetInnerHTML={{
                                __html: `
               .custom-pixel-scroll::-webkit-scrollbar {
                 height: 10px;
               }
               .custom-pixel-scroll::-webkit-scrollbar-track {
                 background: #1e293b;
                 border: 2px solid #000;
               }
               .custom-pixel-scroll::-webkit-scrollbar-thumb {
                 background: #eab308;
                 border: 2px solid #000;
                 box-shadow: inset 2px 2px 0px 0px rgba(255,255,255,0.5);
               }
               .custom-pixel-scroll::-webkit-scrollbar-thumb:hover {
                 background: #facc15;
               }
             `,
                            }}
                        />

                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`
                  snap-start flex-shrink-0 px-6 py-3 font-logo text-xs font-bold uppercase tracking-widest border-[4px] border-black transition-all duration-200
                  ${
                      activeCategory === cat
                          ? "bg-yellow-400 text-black shadow-[inset_4px_4px_0_0_rgba(255,255,255,0.5)] translate-y-1"
                          : "bg-white text-black shadow-[4px_4px_0_0_#000] hover:bg-gray-200 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000]"
                  }
                `}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* STAGGERED TICKETS CARDS LAYOUT (LIKE PSE_EKATALOG) */}
            <section className="py-24 px-6 relative z-10 bg-[#020617]">
                <div className="max-w-[1400px] mx-auto">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
                        <AnimatePresence mode="popLayout">
                            {filteredServices.map((service, index) => {
                                const isEven = index % 2 === 0;
                                return (
                                    <ServiceTicket
                                        key={service.title}
                                        data={service}
                                        index={index}
                                        alignLeft={isEven}
                                    />
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>

                    {filteredServices.length === 0 && (
                        <div className="bg-red-500 border-[6px] border-black p-8 shadow-[8px_8px_0_0_#000] text-center transform -rotate-2">
                            <span className="font-logo text-black font-black text-2xl uppercase tracking-widest drop-shadow-[2px_2px_0_#fff]">
                                [ NO SERVICES FOUND ]
                            </span>
                        </div>
                    )}
                </div>
            </section>

            {/* BOTTOM CTA: NEO-BRUTALIST */}
            <section className="py-24 px-6 relative bg-yellow-400 border-y-[8px] border-black overflow-hidden">
                {/* Repeating Tape background */}
                <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,#000,#000_20px,transparent_20px,transparent_40px)] pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center relative z-10 bg-white border-[6px] border-black p-8 md:p-14 shadow-[12px_12px_0_0_#000] transform rotate-1 hover:rotate-0 transition-transform">
                    <h2 className="font-logo text-3xl md:text-5xl font-black text-black tracking-widest uppercase mb-6 drop-shadow-[2px_2px_0_#eab308]">
                        Butuh Solusi Custom?
                    </h2>
                    <p className="font-sans font-bold text-gray-800 text-sm md:text-lg mb-10 max-w-2xl mx-auto border-b-[4px] border-black pb-6">
                        Dapatkan{" "}
                        <strong className="bg-blue-200 px-2">
                            Konsultasi IT Gratis
                        </strong>{" "}
                        untuk menganalisa kebutuhan unik perusahaan Anda.
                    </p>

                    <Link href="/contact">
                        <button className="group inline-flex items-center gap-3 bg-blue-600 text-white px-8 md:px-12 py-4 md:py-5 font-logo font-black text-sm md:text-base uppercase tracking-widest border-[6px] border-black shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all">
                            INITIATE CONTACT{" "}
                            <ArrowRight
                                size={24}
                                className="stroke-[4px] group-hover:translate-x-2 transition-transform"
                            />
                        </button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function ServiceTicket({ data, index, alignLeft }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.1,
            }}
            className={`w-full flex h-full`}>
            <div
                className={`
                    group relative flex flex-col w-full h-full bg-white border-[6px] border-black
                    shadow-[12px_12px_0_0_rgba(0,0,0,1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2
                    transition-all duration-200
                    ${alignLeft ? "-rotate-1" : "rotate-1"} hover:rotate-0
                `}>
                {/* Tape Decor */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-yellow-400 border-[6px] border-black shadow-[4px_4px_0_0_#000] z-20" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-2 bg-black z-30" />

                {/* TOP SIDE: COLOR BLOCK & ICON */}
                <div
                    className={`p-8 border-b-[6px] border-black flex flex-col items-center justify-center relative overflow-hidden ${data.color} min-h-[160px]`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)] pointer-events-none" />

                    <div className="w-20 h-20 bg-white border-[6px] border-black shadow-[6px_6px_0_0_#000] flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform">
                        <data.icon
                            size={40}
                            className="text-black stroke-[2.5px]"
                        />
                    </div>
                    <span className="font-logo text-black font-bold text-[10px] tracking-widest uppercase bg-white px-3 py-2 border-[4px] border-black shadow-[4px_4px_0_0_#000] relative z-10 text-center">
                        {data.category}
                    </span>
                </div>

                {/* BOTTOM SIDE: TICKET DETAILS */}
                <div className="flex-1 p-6 md:p-8 flex flex-col relative bg-[#f8fafc]">
                    {/* Giant Watermark */}
                    <div className="absolute top-4 right-4 z-0 opacity-10 pointer-events-none transform rotate-12">
                        <div className="border-[4px] border-black text-black px-3 py-1 text-xl font-logo font-black uppercase tracking-widest shadow-[4px_4px_0_0_#000]">
                            MOD
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                        <h3 className="font-logo text-xl md:text-2xl font-black text-black mb-4 uppercase leading-snug drop-shadow-[2px_2px_0_#eab308]">
                            {data.title}
                        </h3>

                        <p className="font-sans font-bold text-gray-700 text-sm md:text-base mb-8 leading-relaxed border-l-[6px] border-black pl-4">
                            {data.desc}
                        </p>

                        <div className="mt-auto flex flex-col border-t-[6px] border-dashed border-black pt-6">
                            <span className="font-logo text-[10px] text-gray-500 uppercase tracking-widest mb-1.5">
                                Module ID
                            </span>
                            <span className="self-start font-mono text-xs md:text-sm font-black text-white bg-black px-3 py-1.5 border-[4px] border-black shadow-[4px_4px_0_0_#eab308]">
                                DMP-SRV-{data.id.toString().padStart(3, "0")}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
