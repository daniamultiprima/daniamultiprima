"use client";

import React from "react";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";
import { motion } from "framer-motion";
import {
    Swords,
    Shield,
    Zap,
    Target,
    Scroll,
    ArrowRight,
    Cpu,
    Trophy,
    Heart,
    Star,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="bg-[#020617] min-h-screen text-white selection:bg-yellow-400 selection:text-black font-sans">
            <Navbar />

            {/* HEADER: NEO-BRUTALIST INFO PANEL */}
            <section className="relative w-full pt-32 md:pt-40 pb-20 px-6 overflow-hidden bg-[#020617] border-b-[8px] border-black">
                {/* Retro Dot Matrix Background */}
                <div className="absolute inset-0 bg-[radial-gradient(#334155_2px,transparent_2px)] bg-[size:24px_24px] pointer-events-none opacity-40" />

                <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col gap-16 items-center text-center">
                    {/* Top: Huge Typography */}
                    <div className="w-full flex flex-col items-center">
                        <div className="inline-block bg-blue-600 text-white border-[4px] border-black shadow-[6px_6px_0_0_#000] px-4 py-2 mb-8">
                            <h1 className="font-mono text-xs md:text-sm font-black tracking-widest uppercase">
                                Software House & Konsultan IT Medan Sejak 2017
                            </h1>
                        </div>

                        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-black text-white leading-[1.1] tracking-tighter font-logo uppercase drop-shadow-[4px_4px_0_#000] md:drop-shadow-[6px_6px_0_#000] break-words">
                            Engineering <br />
                            <span className="text-blue-400 drop-shadow-[6px_6px_0_#000]">
                                Digital Future.
                            </span>
                        </h2>
                    </div>

                    {/* Bottom: Retro Document Panel */}
                    <div className="w-full max-w-[800px] text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#e2e8f0] border-[6px] border-black p-8 md:p-10 shadow-[16px_16px_0_0_#000] relative">
                            {/* Paperclips / Screws at corners */}
                            <div className="absolute top-2 left-2 w-3 h-3 bg-gray-400 border-[2px] border-black rounded-full shadow-[inset_1px_1px_0_0_#fff]" />
                            <div className="absolute top-2 right-2 w-3 h-3 bg-gray-400 border-[2px] border-black rounded-full shadow-[inset_1px_1px_0_0_#fff]" />
                            <div className="absolute bottom-2 left-2 w-3 h-3 bg-gray-400 border-[2px] border-black rounded-full shadow-[inset_1px_1px_0_0_#fff]" />
                            <div className="absolute bottom-2 right-2 w-3 h-3 bg-gray-400 border-[2px] border-black rounded-full shadow-[inset_1px_1px_0_0_#fff]" />

                            <p className="font-sans text-base md:text-lg text-gray-800 font-bold leading-relaxed mt-2 text-justify">
                                <span className="bg-black text-white px-2 py-1 mx-1 font-black shadow-[2px_2px_0_0_#3b82f6]">
                                    PT. Dania Multi Prima
                                </span>
                                adalah perusahaan{" "}
                                <strong className="text-black underline decoration-[3px] decoration-blue-500">
                                    Software House
                                </strong>{" "}
                                dan{" "}
                                <strong className="text-black underline decoration-[3px] decoration-blue-500">
                                    Konsultan IT
                                </strong>{" "}
                                profesional yang berbasis di Medan & Deli
                                Serdang.
                                <br />
                                <br />
                                Kami mengintegrasikan rekayasa perangkat lunak,{" "}
                                <strong className="text-black bg-yellow-300 px-1 border-[2px] border-black">
                                    Keamanan Siber
                                </strong>
                                , dan{" "}
                                <strong className="text-black bg-cyan-300 px-1 border-[2px] border-black">
                                    Solusi AI
                                </strong>{" "}
                                untuk membangun infrastruktur digital bagi
                                instansi Pemerintah dan Swasta di seluruh
                                Indonesia.
                            </p>

                            <div className="mt-8 pt-6 border-t-[4px] border-black border-dashed flex items-center justify-between">
                                <div className="flex gap-2">
                                    <div className="w-2 h-8 bg-black" />
                                    <div className="w-1 h-8 bg-black" />
                                    <div className="w-3 h-8 bg-black" />
                                    <div className="w-1 h-8 bg-black" />
                                    <div className="w-4 h-8 bg-black" />
                                    <div className="w-1 h-8 bg-black" />
                                    <div className="w-2 h-8 bg-black" />
                                </div>
                                <span className="font-mono text-xs font-black text-black tracking-widest uppercase">
                                    ESTABLISHED IN NORTH SUMATRA
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CONTENT: QUEST LOG (VISION & MISSION) */}
            <section className="py-20 px-6 relative z-20 bg-[#0f172a]">
                <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Main Quest: Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#e2e8f0] border-[6px] border-black p-6 md:p-8 shadow-[12px_12px_0_0_#000] relative">
                        {/* Pin / Nail */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-400 border-[2px] border-black rounded-full shadow-[2px_2px_0_0_#000]" />

                        <div className="flex items-center gap-3 border-b-[4px] border-black pb-4 mb-6">
                            <Star
                                size={28}
                                className="text-yellow-500 fill-yellow-500 drop-shadow-[2px_2px_0_#000]"
                            />
                            <h3 className="font-logo text-2xl font-black text-black uppercase tracking-widest">
                                MAIN QUEST (VISION)
                            </h3>
                        </div>

                        <p className="font-sans font-black text-lg md:text-xl text-gray-800 leading-relaxed text-center">
                            Menjadi{" "}
                            <span className="text-blue-700 bg-blue-100 px-2 py-1 border-[2px] border-black shadow-[2px_2px_0_0_#000]">
                                Mitra Teknologi No.1
                            </span>{" "}
                            yang mendorong transformasi digital pemerintahan dan
                            bisnis melalui inovasi Software & AI.
                        </p>
                    </motion.div>

                    {/* Objectives: Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-black border-[6px] border-gray-400 p-6 md:p-8 shadow-[12px_12px_0_0_#000] relative">
                        {/* Neon accent line */}
                        <div className="absolute top-0 left-0 w-full h-[4px] bg-red-500 shadow-[0_0_10px_#ef4444]" />

                        <div className="flex items-center gap-3 border-b-[4px] border-gray-600 pb-4 mb-6">
                            <Scroll
                                size={28}
                                className="text-red-500 drop-shadow-[2px_2px_0_#000]"
                            />
                            <h3 className="font-logo text-2xl font-black text-white uppercase tracking-widest">
                                OBJECTIVES (MISSION)
                            </h3>
                        </div>

                        <div className="space-y-4">
                            <MissionTask text="Menyediakan Jasa Pembuatan Aplikasi (Web & Android) Berkualitas Tinggi." />
                            <MissionTask text="Mengembangkan Solusi Smart City & SIMRS Terintegrasi." />
                            <MissionTask text="Implementasi Keamanan Siber & Kecerdasan Buatan (AI)." />
                            <MissionTask text="Memberikan Layanan IT Support & Maintenance Jangka Panjang." />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SKILL TREE: VALUES */}
            <section className="py-24 px-6 bg-[#020617] border-y-[8px] border-black relative overflow-hidden">
                {/* Hexagon / Grid background */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#334155_2px,transparent_2px)] bg-[size:30px_30px] pointer-events-none" />

                <div className="max-w-[1200px] mx-auto relative z-10 text-center">
                    <h2 className="font-logo text-4xl md:text-5xl font-black text-white uppercase tracking-widest mb-16 drop-shadow-[4px_4px_0_#000]">
                        <span className="text-cyan-400">#</span> PASSIVE SKILLS
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                        <SkillCard
                            title="Full Customization"
                            desc="Software yang kami bangun 100% disesuaikan dengan alur kerja (business logic) perusahaan Anda, bukan sekadar template."
                            icon={Cpu}
                            color="cyan"
                        />
                        <SkillCard
                            title="Cyber Security"
                            desc="Aplikasi dirancang dengan arsitektur tahan retas dan standar keamanan data privasi tingkat tinggi."
                            icon={Shield}
                            color="red"
                        />
                        <SkillCard
                            title="Ecosystem Sync"
                            desc="Solusi End-to-End: Website, Mobile, API Gateway, dan Server terhubung secara mulus dalam satu ekosistem."
                            icon={Zap}
                            color="yellow"
                        />
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA: JOIN PARTY */}
            <section className="py-32 px-6 bg-[#1e293b] text-center relative">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1)_10px,transparent_10px,transparent_20px)] pointer-events-none" />

                <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                    <Trophy
                        size={80}
                        className="text-yellow-400 drop-shadow-[4px_4px_0_#000] mb-8"
                    />
                    <h2 className="font-logo text-3xl md:text-5xl font-black text-white uppercase tracking-widest mb-6 drop-shadow-[4px_4px_0_#000]">
                        READY TO START THE JOURNEY?
                    </h2>
                    <p className="font-sans text-gray-300 font-bold text-lg mb-10">
                        Konsultasikan kebutuhan sistem Anda dengan tim ahli kami
                        dan bangun masa depan digital bersama.
                    </p>

                    <Link href="/contact">
                        <button className="group relative bg-yellow-400 text-black px-10 py-5 font-logo text-xl font-black uppercase tracking-widest border-[6px] border-black shadow-[8px_8px_0_0_#000] hover:translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0_0_#000] hover:bg-white transition-all overflow-hidden flex items-center gap-4">
                            <span className="relative z-10 group-hover:animate-pulse">
                                PRESS START (JOIN PARTY)
                            </span>
                            <ArrowRight size={24} className="stroke-[4px]" />
                            {/* Glitch block on hover */}
                            <div className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-200 z-0 opacity-10" />
                        </button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function MissionTask({ text }) {
    return (
        <div className="flex gap-4 items-start group border-[2px] border-transparent hover:border-gray-600 hover:bg-gray-900 p-2 transition-all">
            <div className="mt-1 flex-shrink-0 w-5 h-5 bg-black border-[2px] border-red-500 flex items-center justify-center shadow-[2px_2px_0_0_#ef4444] group-hover:bg-red-500 transition-colors">
                {/* Checkmark square logic: normally empty, check when hover */}
                <div className="w-2 h-2 bg-transparent group-hover:bg-black" />
            </div>
            <p className="font-sans text-sm font-bold text-gray-300 leading-relaxed group-hover:text-white">
                {text}
            </p>
        </div>
    );
}

function SkillCard({ title, desc, icon: Icon, color }) {
    const colorMap = {
        cyan: "bg-cyan-500 shadow-[8px_8px_0_0_#0891b2] border-cyan-300",
        red: "bg-red-500 shadow-[8px_8px_0_0_#dc2626] border-red-300",
        yellow: "bg-yellow-400 shadow-[8px_8px_0_0_#ca8a04] border-yellow-200",
    };

    const textHover = {
        cyan: "group-hover:text-cyan-400",
        red: "group-hover:text-red-400",
        yellow: "group-hover:text-yellow-400",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0f1c] border-[6px] border-black p-8 flex flex-col items-center text-center shadow-[12px_12px_0_0_#000] hover:-translate-y-2 transition-transform duration-300 group">
            {/* Skill Icon Frame */}
            <div
                className={`w-20 h-20 border-[4px] border-black flex items-center justify-center mb-8 ${colorMap[color]} group-hover:scale-110 transition-transform`}>
                <Icon size={40} className="text-black stroke-[2.5px]" />
            </div>

            <h3
                className={`font-logo text-2xl font-black text-white uppercase tracking-widest mb-4 ${textHover[color]} transition-colors`}>
                {title}
            </h3>

            <div className="w-8 h-[4px] bg-gray-700 mb-6 group-hover:w-16 transition-all duration-300" />

            <p className="font-sans text-sm font-bold text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                {desc}
            </p>
        </motion.div>
    );
}
