"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";
import { motion } from "framer-motion";
import {
    Building2,
    Stethoscope,
    GraduationCap,
    Briefcase,
    ArrowRight,
    Database,
    Cpu,
} from "lucide-react";
import Link from "next/link";

const industries = [
    {
        id: "gov",
        title: "Government",
        subtitle: "Smart City System",
        desc: "Ekosistem digital pemerintahan yang transparan dan berbasis data real-time. Sesuai arsitektur SPBE Nasional untuk Smart City.",
        icon: Building2,
        color: "bg-blue-600",
        labelColor: "bg-blue-100",
        features: [
            "Executive Dashboard (Big Data)",
            "Smart City Citizen Apps",
            "E-Office / Tata Naskah Dinas",
            "JDIH & Arsip Digital",
        ],
    },
    {
        id: "health",
        title: "Healthcare",
        subtitle: "Hospital System",
        desc: "Transformasi digital RSUD & Klinik menuju Smart Hospital. Integrasi penuh dari pendaftaran online, RME, hingga klaim BPJS.",
        icon: Stethoscope,
        color: "bg-red-600",
        labelColor: "bg-red-100",
        features: [
            "SIMRS Terintegrasi (Bridging BPJS)",
            "Rekam Medis Elektronik (RME)",
            "Integrasi SATU SEHAT Kemenkes",
            "IoT Nurse Call System",
        ],
    },
    {
        id: "edu",
        title: "Education",
        subtitle: "Campus System",
        desc: "Modernisasi tata kelola akademik kampus dan sekolah. Mendukung program Kampus Merdeka dan pelaporan PDDIKTI otomatis.",
        icon: GraduationCap,
        color: "bg-orange-500",
        labelColor: "bg-orange-100",
        features: [
            "Sistem Informasi Akademik (SIAKAD)",
            "Aplikasi Ujian Online (CBT)",
            "Digital Library & E-Journal",
            "Sistem Remunerasi Dosen",
        ],
    },
    {
        id: "biz",
        title: "Enterprise",
        subtitle: "Biz Automation",
        desc: "Acelerate profit bisnis retail & korporasi dengan sistem manajemen terpusat (ERP). Pantau stok, keuangan, dan SDM dari satu layar.",
        icon: Briefcase,
        color: "bg-purple-600",
        labelColor: "bg-purple-100",
        features: [
            "Custom ERP & CRM",
            "Aplikasi Kasir (POS) Multi-Cabang",
            "E-Commerce Omnichannel",
            "HRIS & Payroll System",
        ],
    },
];

export default function SolutionsPage() {
    const [glitchText, setGlitchText] = useState("SEKTOR PEMERINTAH");

    useEffect(() => {
        const interval = setInterval(() => {
            const texts = [
                "SEKTOR PEMERINTAH",
                "KECERDASAN BUATAN",
                "SISTEM ENTERPRISE",
                "RUMAH SAKIT",
                "PENDIDIKAN",
            ];
            const randomText = texts[Math.floor(Math.random() * texts.length)];
            setGlitchText(randomText);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="bg-[#020617] min-h-screen text-white selection:bg-yellow-400 selection:text-black font-sans">
            <Navbar />

            {/* HEADER: SUPER COOL CYBER DECK / ARCADE MARQUEE */}
            <section className="relative w-full pt-32 md:pt-48 pb-20 px-6 overflow-hidden bg-[#020617] border-b-[12px] border-black">
                {/* Radar/Grid Decor */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(234,179,8,0.2)_2px,transparent_2px),linear-gradient(90deg,rgba(234,179,8,0.2)_2px,transparent_2px)] bg-[size:50px_50px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
                    {/* Top Info Bar */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full max-w-4xl bg-black border-[4px] border-gray-700 flex justify-between items-center px-4 py-2 mb-10 shadow-[6px_6px_0_0_#eab308]">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-1">
                                <div className="w-3 h-6 bg-red-500 animate-pulse" />
                                <div className="w-3 h-6 bg-yellow-400" />
                                <div className="w-3 h-6 bg-green-500" />
                            </div>
                            <span className="font-mono text-xs md:text-sm text-yellow-400 font-bold uppercase tracking-widest">
                                SYS.STATUS: ONLINE
                            </span>
                        </div>

                        <div className="hidden md:flex items-center gap-4 font-mono text-xs text-gray-400">
                            <span>MEM: 1024TB</span>
                            <span>NET: SECURE</span>
                            <Cpu size={16} className="text-cyan-400" />
                        </div>
                    </motion.div> */}

                    {/* Giant Title Board */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="relative bg-white border-[8px] border-black p-6 md:p-12 mb-12 shadow-[16px_16px_0_0_#000] text-center w-full max-w-5xl transform -rotate-1 hover:rotate-0 transition-transform">
                        {/* Hazard Tape Accents */}
                        <div className="absolute top-0 left-0 w-full h-4 bg-[repeating-linear-gradient(45deg,#000,#000_10px,#eab308_10px,#eab308_20px)]" />
                        <div className="absolute bottom-0 left-0 w-full h-4 bg-[repeating-linear-gradient(-45deg,#000,#000_10px,#eab308_10px,#eab308_20px)]" />

                        <h2 className="font-logo text-sm md:text-2xl text-black font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-2 mt-4">
                            Layanan Terbaik Kami Untuk
                        </h2>

                        <h1 className="font-logo text-3xl sm:text-4xl md:text-6xl lg:text-[5.5rem] font-black text-black tracking-tighter leading-[1.1] md:leading-none uppercase drop-shadow-[2px_2px_0_#eab308] md:drop-shadow-[4px_4px_0_#eab308] break-words">
                            {glitchText}
                        </h1>
                    </motion.div>

                    {/* Desc Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col md:flex-row items-center gap-6 bg-black border-[4px] border-gray-600 p-6 md:p-8 max-w-4xl shadow-[8px_8px_0_0_#1e293b]">
                        <div className="p-4 bg-gray-800 border-[2px] border-gray-600 shadow-[inset_2px_2px_0_#000]">
                            <Database
                                size={40}
                                className="text-cyan-400 animate-pulse"
                            />
                        </div>
                        <p className="font-sans text-gray-300 text-sm md:text-lg font-bold leading-relaxed text-center md:text-left flex-1">
                            Kami merancang{" "}
                            <strong className="text-yellow-400 bg-gray-800 px-2 py-1">
                                Arsitektur IT Spesifik
                            </strong>{" "}
                            untuk instansi Anda. Dari Smart City Pemerintahan,
                            SIMRS Rumah Sakit, hingga Sistem Kampus Digital.
                            Solusi kokoh, aman, dan siap pakai.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FLOPPY DISKS GRID (LARGE 2x2) */}
            <section className="py-20 px-6 relative z-20 bg-[#0f172a]">
                <div className="max-w-[1100px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12 lg:gap-16 justify-items-center">
                        {industries.map((item, i) => (
                            <FloppyDiskCard
                                key={item.id}
                                data={item}
                                index={i}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA: FLOPPY DRIVE EJECT */}
            <section className="py-24 px-6 relative bg-[#1e293b] border-t-[8px] border-black overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,#000_20px,#000_40px)] pointer-events-none" />

                <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
                    <div className="w-full max-w-[600px] bg-gray-300 border-[6px] border-black p-8 shadow-[12px_12px_0_0_#000] relative">
                        {/* Drive Slot Line */}
                        <div className="w-full h-8 bg-black border-[4px] border-gray-600 shadow-[inset_0_4px_4px_#000] mb-8" />

                        <h3 className="font-logo text-2xl md:text-4xl font-black text-black uppercase tracking-widest mb-4">
                            Punya Kebutuhan Sistem Khusus?
                        </h3>
                        <p className="font-sans font-bold text-gray-700 text-sm md:text-base mb-10 border-b-[4px] border-gray-400 pb-6">
                            Tim{" "}
                            <strong className="text-blue-700">
                                System Analyst
                            </strong>{" "}
                            kami siap merancang arsitektur sistem yang presisi
                            dan sesuai anggaran daerah/perusahaan Anda.
                        </p>

                        <Link href="/contact">
                            <button className="group inline-flex items-center gap-4 bg-black text-yellow-400 px-8 py-4 font-logo font-black text-sm md:text-base uppercase tracking-widest border-[4px] border-yellow-400 shadow-[6px_6px_0_0_#eab308] hover:bg-yellow-400 hover:text-black hover:border-black hover:shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all">
                                HUBUNGI KAMI{" "}
                                <ArrowRight
                                    size={20}
                                    className="stroke-[4px]"
                                />
                            </button>
                        </Link>

                        {/* Drive Eject Button (Decorative) */}
                        <div className="absolute bottom-6 right-6 w-8 h-4 bg-gray-400 border-[2px] border-black shadow-[2px_2px_0_0_#000]" />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function FloppyDiskCard({ data, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            className={`group relative w-full max-w-[500px] aspect-[20/23] ${data.color} border-[6px] border-black shadow-[16px_16px_0_0_#000] rounded-b-md flex flex-col p-4 transition-transform duration-300 hover:translate-y-2`}>
            {/* Bevel cut at top right (Fake it with a triangle) */}
            <div className="absolute -top-[6px] -right-[6px] w-12 h-12 bg-[#0f172a] border-l-[6px] border-b-[6px] border-black z-20 transform translate-x-1/2 -translate-y-1/2 rotate-45" />

            {/* TOP METAL SHUTTER (Slides to reveal icon) */}
            <div className="w-[80%] h-24 mx-auto relative z-10 flex items-center justify-center border-[4px] border-black bg-[#0a0f1c] shadow-[inset_0_0_10px_#000] overflow-hidden">
                {/* Hidden Glowing Icon */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center">
                    <data.icon
                        size={48}
                        className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse"
                        strokeWidth={2}
                    />
                </div>

                {/* The Sliding Metal Cover */}
                <div className="absolute inset-0 bg-gray-300 border-[4px] border-gray-400 shadow-[inset_-4px_-4px_0_rgba(0,0,0,0.2)] flex items-center justify-end px-4 group-hover:-translate-x-[110%] transition-transform duration-500 ease-out z-20">
                    {/* Metal Grip Ridges */}
                    <div className="flex gap-1.5 h-12">
                        <div className="w-1.5 bg-gray-500 shadow-[1px_0_0_#fff]" />
                        <div className="w-1.5 bg-gray-500 shadow-[1px_0_0_#fff]" />
                        <div className="w-1.5 bg-gray-500 shadow-[1px_0_0_#fff]" />
                    </div>
                </div>
            </div>

            {/* PAPER LABEL AREA */}
            <div
                className={`mt-6 flex-1 ${data.labelColor} border-[4px] border-black p-4 md:p-5 shadow-[inset_4px_4px_0_rgba(255,255,255,0.8)] relative flex flex-col`}>
                {/* Title Bar */}
                <div className="border-b-[4px] border-black pb-3 mb-4 flex justify-between items-center gap-2">
                    <h3 className="font-logo text-lg xl:text-xl font-black text-black uppercase tracking-widest leading-none break-words">
                        {data.title}
                    </h3>
                </div>

                {/* Subtitle & Desc */}
                <div className="mb-6">
                    <h4 className="font-sans font-black text-black text-xs xl:text-sm uppercase tracking-wider mb-2">
                        [ {data.subtitle} ]
                    </h4>
                    <p className="font-sans text-xs font-bold text-gray-800 leading-relaxed">
                        {data.desc}
                    </p>
                </div>

                {/* Features List */}
                <div className="mt-auto grid grid-cols-1 gap-2 border-t-[4px] border-black border-dashed pt-4">
                    {data.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2">
                            <div className="mt-1 w-2.5 h-2.5 bg-black border-[1px] border-black shrink-0 shadow-[1px_1px_0_0_#fff]" />
                            <span className="font-sans font-bold text-[10px] xl:text-xs text-black leading-tight">
                                {feat}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Notch (Write Protect) */}
            <div className="absolute bottom-4 right-4 w-4 h-4 bg-black shadow-[inset_1px_1px_0_#333]" />
            <div className="absolute bottom-4 left-4 w-4 h-4 bg-[#0a0f1c] border-t-[2px] border-r-[2px] border-black" />
        </motion.div>
    );
}
