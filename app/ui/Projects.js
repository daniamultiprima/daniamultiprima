"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: "jare-ai",
        title: "Jare-AI Public Service",
        client: "Kemenkomdigi",
        category: "Government & AI",
        desc: "Sistem Chatbot WhatsApp cerdas berbasis Generative AI (Gemini) untuk pelayanan publik nasional Kementerian.",
        tech: ["Gemini AI", "Next.js"],
        logo: "/images/clients/komdigi.png",
        color: "from-blue-500 to-cyan-400",
        featured: true,
    },
    {
        id: "simrs",
        title: "SIMRS Terintegrasi",
        client: "RSUD Drs. H. Amri Tambunan",
        category: "HealthTech",
        desc: "Sistem Informasi Manajemen Rumah Sakit hulu-hilir: Pendaftaran Online, Rekam Medis Elektronik (RME), hingga Klaim BPJS.",
        tech: ["PostgreSQL", "BPJS"],
        logo: "/images/clients/tambunan.png",
        color: "from-emerald-500 to-teal-400",
        featured: false,
    },
    {
        id: "dashboard",
        title: "Executive Dashboard",
        client: "Pemkab Serdang Bedagai",
        category: "Smart City",
        desc: "Dashboard monitoring PAD dan serapan anggaran real-time untuk keputusan strategis Bupati.",
        tech: ["Analytics", "Socket.io"],
        logo: "/images/clients/sergai.png",
        color: "from-violet-500 to-purple-400",
        featured: false,
    },
    {
        id: "usu",
        title: "Manajemen Kampus",
        client: "Universitas Sumatera Utara",
        category: "Education",
        desc: "Digitalisasi sistem remunerasi dan penilaian angka kredit (PAK) dosen untuk universitas.",
        tech: ["Complex Logic", "MySQL"],
        logo: "/images/clients/usu.png",
        color: "from-orange-500 to-red-400",
        featured: false,
    },
];

export default function ProjectShowcase() {
    return (
        <section className="relative w-full py-24 md:py-32 bg-[#020617] border-b-[8px] border-[#1e293b] overflow-hidden">
            {/* RETRO ARCADE CARPET BACKGROUND */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `
            radial-gradient(circle at 50% 50%, #3b82f6 2px, transparent 2px),
            radial-gradient(circle at 0% 0%, #eab308 2px, transparent 2px)
          `,
                    backgroundSize: "30px 30px",
                }}
            />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center">
                {/* ARCADE TICKET HEADER */}
                <div className="mb-24 w-full flex flex-col items-center">
                    <div className="relative bg-blue-600 border-[6px] border-black p-6 md:p-10 shadow-[12px_12px_0_0_#eab308] transform -rotate-1 max-w-4xl text-center flex flex-col items-center">
                        {/* Ticket zig-zag tear effect on sides */}
                        <div className="absolute -left-[6px] top-0 h-full w-[12px] bg-[repeating-linear-gradient(0deg,transparent,transparent_8px,#020617_8px,#020617_16px)]" />
                        <div className="absolute -right-[6px] top-0 h-full w-[12px] bg-[repeating-linear-gradient(0deg,transparent,transparent_8px,#020617_8px,#020617_16px)]" />

                        <div className="bg-yellow-400 border-[4px] border-black px-4 py-1.5 mb-6 shadow-[4px_4px_0_0_#000] inline-block">
                            <span className="font-logo text-black text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                                Pekerjaan yang Telah Selesai
                            </span>
                        </div>

                        <h2 className="font-logo text-3xl md:text-5xl lg:text-[4rem] text-white tracking-widest leading-[1.3] uppercase drop-shadow-[4px_4px_0_#000] mb-8">
                            Portofolio Proyek &<br />
                            <span className="text-yellow-400">
                                Studi Kasus.
                            </span>
                        </h2>

                        <div className="bg-black border-[4px] border-white p-4 shadow-[6px_6px_0_0_#000]">
                            <p className="font-sans text-sm md:text-lg text-white font-bold leading-relaxed max-w-2xl">
                                Lihat bagaimana kami membantu instansi
                                pemerintah dan perusahaan swasta melakukan
                                transformasi digital melalui koleksi kaset
                                *game* andalan kami.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CARTRIDGE GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 w-full max-w-5xl mb-20">
                    {projects.map((project, index) => (
                        <CartridgeCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                <Link href="/portfolio">
                    <button className="group relative px-8 py-5 bg-white text-black font-logo font-bold uppercase tracking-widest text-xs md:text-sm border-[6px] border-black shadow-[8px_8px_0_0_#3b82f6] hover:shadow-[4px_4px_0_0_#3b82f6] hover:translate-x-1 hover:translate-y-1 hover:bg-yellow-400 transition-all active:shadow-none active:translate-x-2 active:translate-y-2 flex items-center justify-center gap-4">
                        <span>Lihat Seluruh Proyek</span>
                        <ArrowUpRight size={24} className="stroke-[3px]" />
                    </button>
                </Link>
            </div>
        </section>
    );
}

function CartridgeCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`relative w-full group cursor-pointer`}>
            {/* Container simulating the console slot interaction */}
            <div
                className="relative w-full bg-gray-600 border-[6px] border-black p-4 md:p-6 
                      shadow-[12px_12px_0_0_#000] transition-all duration-300
                      hover:translate-y-8 hover:shadow-[4px_4px_0_0_#000] 
                      flex flex-col h-full overflow-hidden">
                {/* Cartridge Ribs (Top Grip) */}
                <div className="flex gap-2 justify-center mb-6">
                    <div className="w-16 h-3 bg-gray-700 border-[2px] border-black shadow-inner" />
                    <div className="w-16 h-3 bg-gray-700 border-[2px] border-black shadow-inner" />
                    <div className="w-16 h-3 bg-gray-700 border-[2px] border-black shadow-inner" />
                </div>

                {/* Cartridge Sticker (Main Content) */}
                <div className="flex-grow bg-white border-[4px] border-black relative flex flex-col group-hover:border-yellow-400 transition-colors">
                    {/* Sticker Header / Logo Area */}
                    <div className="h-40 w-full bg-black border-b-[4px] border-black relative flex items-center justify-center overflow-hidden">
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`}
                        />

                        <div className="relative w-24 h-24 bg-white border-[4px] border-black shadow-[4px_4px_0_0_#000] flex items-center justify-center p-2 transform -rotate-3 group-hover:scale-110 transition-transform">
                            <div className="relative w-full h-full">
                                <Image
                                    src={project.logo}
                                    alt={project.client}
                                    fill
                                    sizes="(max-width: 768px) 96px, 96px"
                                    className="object-contain p-2"
                                />
                            </div>
                        </div>

                        {/* Hologram sticker detail */}
                        <div className="absolute top-2 right-2 w-10 h-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.2)_4px,rgba(255,255,255,0.2)_8px)] border-[2px] border-black rounded-full" />
                    </div>

                    {/* Sticker Details */}
                    <div className="p-5 flex flex-col flex-grow bg-[#f8fafc]">
                        <span className="font-logo text-[9px] text-gray-500 tracking-widest uppercase mb-2">
                            [ {project.category} ]
                        </span>
                        <h3 className="font-logo text-xl text-black font-black leading-tight uppercase mb-4 drop-shadow-[1px_1px_0_#fff]">
                            {project.title}
                        </h3>
                        <p className="font-sans text-sm font-bold text-gray-700 leading-relaxed mb-6 border-l-[4px] border-black pl-3">
                            {project.desc}
                        </p>

                        <div className="mt-auto border-t-[4px] border-dashed border-gray-400 pt-4 flex justify-between items-end">
                            <div className="flex flex-col gap-1">
                                <span className="font-logo text-[8px] uppercase font-bold text-gray-500">
                                    Tech_Spec:
                                </span>
                                <span className="font-mono text-xs font-black text-blue-600 bg-blue-100 px-2 py-1 border-[2px] border-black shadow-[2px_2px_0_0_#000]">
                                    {project.tech.join(" + ")}
                                </span>
                            </div>
                            <div className="text-black group-hover:text-blue-600 group-hover:scale-125 transition-transform">
                                <ArrowUpRight
                                    size={28}
                                    className="stroke-[3px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hover "PRESS START" Overlay */}
                {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
                    <div className="bg-yellow-400 border-[4px] border-black px-4 py-2 shadow-[4px_4px_0_0_#000] animate-pulse">
                        <span className="font-logo text-black text-xs font-bold tracking-widest uppercase">
                            Press Start
                        </span>
                    </div>
                </div> */}
            </div>
        </motion.div>
    );
}
