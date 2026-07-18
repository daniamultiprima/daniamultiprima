"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Cpu, ShieldCheck, Globe } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#020617]">
            {/* CYBERSPACE MATRIX BACKGROUND */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                {/* Dynamic Diagonal Grid */}
                <div
                    className="absolute inset-[-50%] opacity-20 origin-center rotate-12"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, #1e3a8a 4px, transparent 4px),
              linear-gradient(to bottom, #1e3a8a 4px, transparent 4px)
            `,
                        backgroundSize: "120px 120px",
                        backgroundPosition: "0 0",
                    }}
                />
                {/* Animated Overlay gradient to darken the center/bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
            </div>

            <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 lg:px-12 pt-40 pb-20 md:pt-48 md:pb-24 flex-grow flex items-center">
                {/* NEO-BRUTALIST ASYMMETRICAL GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 w-full items-start">
                    {/* LEFT PANEL: QUEST DIALOG & TYPOGRAPHY */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-8 flex flex-col items-start w-full relative">
                        {/* SPEECH BUBBLE BADGE */}
                        <div className="relative mb-12 mt-8 md:mt-0">
                            <div className="px-5 py-3 border-[4px] border-black bg-yellow-400 shadow-[8px_8px_0_0_#000] inline-block z-10 relative">
                                <span className="font-logo text-[10px] md:text-[11px] text-black font-bold uppercase tracking-widest drop-shadow-[1px_1px_0_#fff]">
                                    Jasa Konsultan IT & Software House Medan
                                </span>
                            </div>
                            {/* Bubble Arrow */}
                            <div className="absolute -bottom-4 left-6 w-8 h-6 bg-blue-500 border-l-[4px] border-b-[4px] border-black shadow-[-4px_4px_0_0_#000] transform skew-x-[-30deg] z-0" />
                        </div>

                        {/* GIANT OVERLAPPING NEO-BRUTALIST HEADLINE */}
                        <h1 className="flex flex-wrap items-center gap-2 sm:gap-4 mb-14 w-full">
                            {/* Word 1 */}
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                className="bg-[#020617] border-[4px] sm:border-[6px] border-blue-400 p-2 sm:p-4 md:p-5 shadow-[6px_6px_0_0_#3b82f6] sm:shadow-[12px_12px_0_0_#3b82f6] transform -rotate-2">
                                <span className="font-logo text-2xl sm:text-3xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem] text-white tracking-widest drop-shadow-[2px_2px_0_#1e3a8a] sm:drop-shadow-[4px_4px_0_#1e3a8a] leading-none">
                                    SOFTWARE
                                </span>
                            </motion.div>

                            {/* Word 2 */}
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                className="bg-brand border-[4px] sm:border-[6px] border-black p-2 sm:p-4 md:p-5 shadow-[6px_6px_0_0_#000] sm:shadow-[12px_12px_0_0_#000] transform rotate-1 z-10">
                                <span className="font-logo text-2xl sm:text-3xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem] text-white tracking-widest drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)] sm:drop-shadow-[4px_4px_0_rgba(0,0,0,0.8)] leading-none">
                                    HOUSE MEDAN
                                </span>
                            </motion.div>

                            {/* Symbol */}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="bg-white border-[4px] sm:border-[6px] border-black p-2 sm:p-4 md:p-5 shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] mt-2 sm:mt-4 xl:mt-0">
                                <span className="font-logo text-2xl sm:text-3xl md:text-5xl lg:text-[4rem] text-black leading-none">
                                    &
                                </span>
                            </motion.div>

                            {/* Word 3 & 4 */}
                            <div className="w-full flex mt-2 sm:mt-4 md:mt-6">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-gray-800 border-[4px] sm:border-[6px] border-blue-300 p-3 sm:p-4 md:p-6 shadow-[8px_8px_0_0_rgba(59,130,246,0.6)] sm:shadow-[16px_16px_0_0_rgba(59,130,246,0.6)] w-full relative overflow-hidden">
                                    {/* Decorative tape */}
                                    <div className="absolute top-0 right-0 w-16 h-4 bg-blue-500 transform rotate-45 translate-x-4 -translate-y-2" />

                                    <span className="font-logo text-lg sm:text-2xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] text-blue-300 tracking-wider drop-shadow-[2px_2px_0_#000] sm:drop-shadow-[4px_4px_0_#000] leading-[1.3] md:leading-[1.2] break-words">
                                        JASA PEMBUATAN APLIKASI.
                                    </span>
                                </motion.div>
                            </div>
                        </h1>

                        {/* QUEST LOG PARAGRAPH */}
                        <div className="relative mb-14 max-w-3xl w-full">
                            {/* Retro Title Bar */}
                            <div className="w-full bg-blue-900 border-[4px] border-b-0 border-black px-4 py-2 flex items-center justify-between">
                                <span className="font-logo text-[10px] text-white tracking-widest">
                                    TENTANG KAMI
                                </span>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 bg-gray-400 border-[2px] border-black" />
                                    <div className="w-3 h-3 bg-gray-400 border-[2px] border-black" />
                                    <div className="w-3 h-3 bg-brand border-[2px] border-black" />
                                </div>
                            </div>
                            {/* Content */}
                            <div className="p-6 md:p-8 border-[4px] border-black bg-gray-900 shadow-[12px_12px_0_0_#000] relative group">
                                <div className="absolute bottom-4 right-4 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-white border-r-[10px] border-r-transparent transform -rotate-45 animate-bounce" />

                                <p className="font-sans text-sm sm:text-base md:text-xl text-gray-300 leading-relaxed font-medium">
                                    <span className="font-logo text-brand font-bold mr-2 drop-shadow-[1px_1px_0_#000]">
                                        &gt;
                                    </span>
                                    PT. Dania Multi Prima adalah{" "}
                                    <strong className="text-white font-bold bg-blue-900/50 px-1 border-b-[2px] border-brand">
                                        Software House di Medan
                                    </strong>{" "}
                                    yang melayani jasa pembuatan Website,
                                    Aplikasi Android/iOS, dan Sistem Informasi
                                    Pemerintahan (SPBE). Kami membantu
                                    transformasi digital bisnis dan instansi di{" "}
                                    <strong className="text-white font-bold bg-blue-900/50 px-1 border-b-[2px] border-brand">
                                        Sumatera Utara
                                    </strong>{" "}
                                    dan seluruh Indonesia.
                                    <span className="inline-block w-3 h-5 bg-white ml-2 animate-pulse align-middle" />
                                </p>
                            </div>
                        </div>

                        {/* NEO-BRUTALIST PIXEL BUTTONS */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 w-full sm:w-auto">
                            <Link
                                href="/portfolio"
                                className="w-full sm:w-auto">
                                <button className="group relative w-full sm:w-auto px-8 py-5 bg-yellow-400 text-black font-logo uppercase tracking-widest text-[11px] md:text-[13px] border-[4px] border-black shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all active:shadow-none active:translate-x-2 active:translate-y-2 flex items-center justify-center gap-4">
                                    <span className="drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">
                                        Lihat Portfolio
                                    </span>
                                    <ArrowRight
                                        size={20}
                                        className="stroke-[3px]"
                                    />
                                </button>
                            </Link>

                            <Link href="/services" className="w-full sm:w-auto">
                                <button className="group relative w-full sm:w-auto px-8 py-5 bg-brand text-white font-logo font-bold uppercase tracking-widest text-[11px] md:text-[13px] border-[4px] border-black shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:bg-white transition-all active:shadow-none active:translate-x-2 active:translate-y-2 flex items-center justify-center gap-4 hover:text-black">
                                    <Layers
                                        size={20}
                                        className="text-black stroke-[3px]"
                                    />
                                    <span>Layanan Kami</span>
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* RIGHT PANEL: VERTICAL INVENTORY HUD (STATS) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: "easeOut",
                        }}
                        className="lg:col-span-4 w-full mt-8 lg:mt-0">
                        {/* Inventory Container */}
                        <div className="bg-[#0f172a] border-[4px] border-blue-500 shadow-[12px_12px_0_0_rgba(59,130,246,0.3)] p-4 relative">
                            {/* Decorative Header */}
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 border-[4px] border-black px-6 py-2 shadow-[4px_4px_0_0_#000] z-10 w-[80%] text-center">
                                <span className="font-logo text-[10px] md:text-[11px] text-black font-bold uppercase tracking-widest drop-shadow-[1px_1px_0_#fff]">
                                    KEUNGGULAN KAMI
                                </span>
                            </div>

                            <div className="flex flex-col gap-5 mt-8">
                                {/* Stat 1 */}
                                <div className="group flex items-center p-4 bg-[#1e293b] border-[4px] border-black shadow-[6px_6px_0_0_#000] hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#3b82f6] transition-all cursor-crosshair">
                                    <div className="w-14 h-14 flex items-center justify-center bg-blue-900 border-[3px] border-blue-400 shadow-inner mr-4 md:mr-5 flex-shrink-0 group-hover:bg-brand transition-colors">
                                        <Cpu className="text-white w-7 h-7 stroke-[2px]" />
                                    </div>
                                    <div>
                                        <h3 className="font-logo text-brand-light text-[9px] uppercase mb-1">
                                            Module 01
                                        </h3>
                                        <p className="font-logo text-white text-[11px] md:text-[12px] uppercase leading-relaxed tracking-wider drop-shadow-[1px_1px_0_#000]">
                                            AI & IoT
                                            <br />
                                            Ready
                                        </p>
                                    </div>
                                </div>

                                {/* Stat 2 */}
                                <div className="group flex items-center p-4 bg-[#1e293b] border-[4px] border-black shadow-[6px_6px_0_0_#000] hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#3b82f6] transition-all cursor-crosshair">
                                    <div className="w-14 h-14 flex items-center justify-center bg-blue-900 border-[3px] border-blue-400 shadow-inner mr-4 md:mr-5 flex-shrink-0 group-hover:bg-brand transition-colors">
                                        <ShieldCheck className="text-white w-7 h-7 stroke-[2px]" />
                                    </div>
                                    <div>
                                        <h3 className="font-logo text-brand-light text-[9px] uppercase mb-1">
                                            Module 02
                                        </h3>
                                        <p className="font-logo text-white text-[11px] md:text-[12px] uppercase leading-relaxed tracking-wider drop-shadow-[1px_1px_0_#000]">
                                            Cyber
                                            <br />
                                            Security
                                        </p>
                                    </div>
                                </div>

                                {/* Stat 3 */}
                                <div className="group flex items-center p-4 bg-[#1e293b] border-[4px] border-black shadow-[6px_6px_0_0_#000] hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#3b82f6] transition-all cursor-crosshair">
                                    <div className="w-14 h-14 flex items-center justify-center bg-blue-900 border-[3px] border-blue-400 shadow-inner mr-4 md:mr-5 flex-shrink-0 group-hover:bg-brand transition-colors">
                                        <Globe className="text-white w-7 h-7 stroke-[2px]" />
                                    </div>
                                    <div>
                                        <h3 className="font-logo text-brand-light text-[9px] uppercase mb-1">
                                            Module 03
                                        </h3>
                                        <p className="font-logo text-white text-[11px] md:text-[12px] uppercase leading-relaxed tracking-wider drop-shadow-[1px_1px_0_#000]">
                                            Layanan
                                            <br />
                                            Nasional
                                        </p>
                                    </div>
                                </div>

                                {/* Stat 4 (Big Stat) */}
                                <div className="group flex items-center p-4 md:p-5 bg-brand border-[4px] border-black shadow-[6px_6px_0_0_#000] hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#fff] transition-all cursor-crosshair relative overflow-hidden mt-4">
                                    {/* Glitch lines inside the big block */}
                                    <div className="absolute top-0 right-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)] pointer-events-none" />

                                    <div className="flex flex-col justify-center mr-4 md:mr-5 z-10">
                                        <span className="font-logo text-white text-[2rem] md:text-[2.5rem] font-bold drop-shadow-[4px_4px_0_#000] leading-none">
                                            35+
                                        </span>
                                    </div>
                                    <div className="z-10 border-l-[4px] border-black pl-4">
                                        <h3 className="font-logo text-black text-[9px] font-bold uppercase mb-1">
                                            Achievement
                                        </h3>
                                        <p className="font-logo text-white text-[11px] md:text-[12px] uppercase leading-relaxed tracking-wider drop-shadow-[1px_1px_0_#000]">
                                            Proyek
                                            <br />
                                            Sukses
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating decoration under inventory */}
                        <div className="flex justify-end gap-2 mt-4 opacity-50">
                            <div className="w-4 h-4 bg-blue-500 border-[2px] border-black shadow-[2px_2px_0_0_#000]" />
                            <div className="w-4 h-4 bg-white border-[2px] border-black shadow-[2px_2px_0_0_#000]" />
                            <div className="w-12 h-4 bg-blue-400 border-[2px] border-black shadow-[2px_2px_0_0_#000]" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
