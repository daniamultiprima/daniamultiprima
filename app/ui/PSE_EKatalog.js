"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    ShoppingBag,
    Activity,
    ExternalLink,
    Lock,
    QrCode
} from "lucide-react";

const certifications = [
    {
        id: "ekatalog",
        title: "E-Katalog LKPP V6",
        subtitle: "Pengadaan Pemerintah",
        desc: "Resmi terdaftar sebagai penyedia barang/jasa pemerintah di katalog elektronik nasional (Inaproc).",
        number: "Toko: PT. Dania Multi Prima",
        status: "Verified",
        icon: ShoppingBag,
        color: "bg-blue-500",
        link: "https://katalog.inaproc.id/gusfahmi-alghazali",
        rotation: "-rotate-2"
    },
    {
        id: "pse",
        title: "PSE Kominfo",
        subtitle: "Penyelenggara Sistem Elektronik",
        desc: "Terdaftar resmi dan patuh terhadap regulasi hukum siber Indonesia.",
        number: "No: 021471.01/DJAI.PSE/12/2025",
        status: "Verified",
        icon: ShieldCheck,
        color: "bg-orange-500", 
        link: null,
        rotation: "rotate-1"
    },
    {
        id: "satusehat",
        title: "Integrasi Satu Sehat",
        subtitle: "Kementerian Kesehatan RI",
        desc: "Telah terverifikasi dan terdaftar resmi dalam platform SatuSehat sebagai penyedia RME.",
        number: "System ID: PT. Dania Multi Prima",
        status: "Verified",
        icon: Activity,
        color: "bg-emerald-500",
        link: "https://satusehat.kemkes.go.id/platform/system-rme-list/1224",
        rotation: "-rotate-1"
    },
];

export default function LegalCompliance() {
    return (
        <section className="relative w-full py-24 md:py-32 bg-[#020617] overflow-hidden border-b-[8px] border-[#1e293b]">
            
            {/* RETRO BLUEPRINT BACKGROUND */}
            <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `
                      linear-gradient(to right, #1e3a8a 2px, transparent 2px),
                      linear-gradient(to bottom, #1e3a8a 2px, transparent 2px)
                    `,
                    backgroundSize: '40px 40px',
                    backgroundPosition: '0 0'
                }}
            />

            <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
                
                {/* HEADINGS: ACHIEVEMENT UNLOCKED STYLE */}
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 bg-yellow-400 border-[4px] border-black shadow-[6px_6px_0_0_#000] mb-8 transform -rotate-2"
                    >
                        <Lock size={18} className="text-black stroke-[3px]" />
                        <span className="font-logo text-black text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase drop-shadow-[1px_1px_0_#fff]">
                            ACHIEVEMENT UNLOCKED
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative"
                    >
                        <h2 className="font-logo text-3xl md:text-5xl lg:text-[4rem] text-white tracking-widest leading-[1.3] uppercase drop-shadow-[4px_4px_0_#000]">
                            Certified &<br/>
                            <span className="inline-block bg-white text-black px-4 py-2 mt-4 border-[6px] border-black shadow-[8px_8px_0_0_#eab308] transform rotate-1">
                                Compliant.
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        transition={{ delay: 0.3 }}
                        className="mt-12 bg-[#1e293b] border-[4px] border-black p-5 shadow-[6px_6px_0_0_#000] max-w-2xl transform rotate-1 relative"
                    >
                        {/* Tape decorative */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-yellow-400 border-[2px] border-black shadow-[2px_2px_0_0_#000] transform -rotate-3" />
                        
                        <p className="font-sans text-sm md:text-base font-bold text-gray-200">
                            Keamanan dan legalitas adalah prioritas kami. PT Dania Multi Prima beroperasi di bawah payung hukum yang jelas dan standar nasional.
                        </p>
                    </motion.div>
                </div>

                {/* STAGGERED ID CARDS LAYOUT */}
                <div className="flex flex-col gap-16 md:gap-24 items-center">
                    {certifications.map((cert, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <CertificationTicket
                                key={cert.id}
                                data={cert}
                                index={index}
                                alignLeft={isEven}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function CertificationTicket({ data, index, alignLeft }) {
    const isLink = !!data.link;
    const Wrapper = isLink ? "a" : "div";

    return (
        <motion.div
            initial={{ opacity: 0, x: alignLeft ? -50 : 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
            className={`w-full max-w-[850px] flex ${alignLeft ? 'md:justify-start' : 'md:justify-end'}`}
        >
            <Wrapper
                href={data.link}
                target={isLink ? "_blank" : undefined}
                rel={isLink ? "noopener noreferrer" : undefined}
                className={`
                    group relative flex flex-col md:flex-row w-full bg-white border-[6px] border-black
                    shadow-[16px_16px_0_0_rgba(0,0,0,1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-3 hover:translate-y-3
                    transition-all duration-200 cursor-${isLink ? "pointer" : "default"}
                    ${data.rotation} hover:rotate-0
                `}
            >
                {/* Lanyard Hole Decor */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-[#1e293b] border-[6px] border-black rounded-full border-b-0 rounded-b-none z-10" />
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-3 bg-black rounded-full z-20" />

                {/* LEFT SIDE: COLOR BLOCK & ICON */}
                <div className={`md:w-1/3 p-8 border-b-[6px] md:border-b-0 md:border-r-[6px] border-black flex flex-col items-center justify-center relative overflow-hidden ${data.color}`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)] pointer-events-none" />
                    
                    <div className="w-24 h-24 bg-white border-[6px] border-black shadow-[6px_6px_0_0_#000] flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform">
                        <data.icon size={48} className="text-black stroke-[2.5px]" />
                    </div>
                    <span className="font-logo text-black font-bold text-[10px] tracking-widest uppercase bg-white px-3 py-2 border-[4px] border-black shadow-[4px_4px_0_0_#000] relative z-10 text-center">
                        ID: {data.id.toUpperCase()}
                    </span>
                </div>

                {/* RIGHT SIDE: TICKET DETAILS */}
                <div className="md:w-2/3 p-6 md:p-8 flex flex-col relative bg-[#f8fafc]">
                    
                    {/* Giant Verified Stamp */}
                    <div className="absolute top-4 right-4 z-0 opacity-20 pointer-events-none transform rotate-12">
                        <div className="border-[6px] border-green-600 text-green-600 px-4 py-2 text-3xl font-logo font-black uppercase tracking-widest shadow-[4px_4px_0_0_rgba(22,163,74,0.3)]">
                            VERIFIED
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                        <h3 className="font-logo text-xl md:text-2xl font-bold text-black mb-3 uppercase leading-snug drop-shadow-[1px_1px_0_#fff]">
                            {data.title}
                        </h3>
                        <div className="inline-block bg-black text-white font-bold text-xs px-3 py-1.5 mb-6 self-start tracking-widest uppercase shadow-[2px_2px_0_0_#3b82f6]">
                            {data.subtitle}
                        </div>

                        <p className="font-sans font-bold text-gray-700 text-sm md:text-base mb-8 leading-relaxed border-l-[4px] border-gray-400 pl-4">
                            {data.desc}
                        </p>

                        <div className="mt-auto flex flex-wrap gap-4 items-end justify-between border-t-[4px] border-dashed border-gray-400 pt-6">
                            
                            <div className="flex flex-col">
                                <span className="font-logo text-[8px] text-gray-500 uppercase tracking-widest mb-1.5">Registration Data</span>
                                <span className="font-mono text-xs md:text-sm font-black text-black bg-yellow-200 px-3 py-1.5 border-[3px] border-black shadow-[3px_3px_0_0_#000]">
                                    {data.number}
                                </span>
                            </div>

                            {/* Fake Barcode */}
                            <div className="flex flex-col items-center opacity-70 group-hover:opacity-100 transition-opacity">
                                <QrCode size={32} className="text-black mb-1" />
                                <span className="font-logo text-[6px] tracking-widest text-black">SCAN_ME</span>
                            </div>

                        </div>
                    </div>

                    {/* External Link Hint */}
                    {isLink && (
                        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity z-20 hidden md:block">
                            <div className="bg-brand text-white p-2 border-[4px] border-black shadow-[4px_4px_0_0_#000]">
                                <ExternalLink size={20} className="stroke-[3px]" />
                            </div>
                        </div>
                    )}

                </div>
            </Wrapper>
        </motion.div>
    );
}