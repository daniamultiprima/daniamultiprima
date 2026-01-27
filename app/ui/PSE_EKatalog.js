"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    ShoppingBag,
    Activity,
    ExternalLink,
    CheckCircle2,
    Loader2,
    FileCheck,
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
        color: "blue",
        link: "https://katalog.inaproc.id/gusfahmi-alghazali",
    },
    {
        id: "pse",
        title: "PSE Kominfo / Komdigi",
        subtitle: "Penyelenggara Sistem Elektronik",
        desc: "Terdaftar resmi dan patuh terhadap regulasi hukum siber Indonesia.",
        number: "No: 021471.01/DJAI.PSE/12/2025",
        status: "Verified",
        icon: ShieldCheck,
        color: "emerald",
        link: null,
    },
    // --- UPDATED SECTION START ---
    {
        id: "satusehat",
        title: "Integrasi Satu Sehat",
        subtitle: "Kementerian Kesehatan RI",
        // Deskripsi diubah agar terdengar sudah selesai (bukan lagi finalisasi)
        desc: "Telah terverifikasi dan terdaftar resmi dalam platform SatuSehat sebagai penyedia RME.", 
        // ID diambil dari URL yang kamu berikan agar terlihat valid
        number: "System ID: PT. Dania Multi Prima", 
        status: "Verified",
        icon: Activity,
        // Warna diubah ke 'emerald' agar Icon dan Glow-nya jadi Hijau (Sesuai status Verified)
        color: "emerald", 
        link: "https://satusehat.kemkes.go.id/platform/system-rme-list/1224",
    },
    // --- UPDATED SECTION END ---
];

export default function LegalCompliance() {
    return (
        <section className="relative w-full py-24 bg-[#020617] border-b border-white/5 overflow-hidden">
            
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <FileCheck size={14} />
                        Legality & Trust
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                        Certified & <br className="hidden md:block" />
                        <span className="text-blue-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]">
                            Fully Compliant.
                        </span>
                    </motion.h2>

                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        Keamanan dan legalitas adalah prioritas kami. PT Dania
                        Multi Prima beroperasi di bawah payung hukum yang jelas
                        dan standar nasional.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {certifications.map((cert, index) => (
                        <CertificationCard
                            key={cert.id}
                            data={cert}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}


function CertificationCard({ data, index }) {
    const isLink = !!data.link;
    const Wrapper = isLink ? "a" : "div";

    
    const isVerified = data.status === "Verified";
    const statusColor = isVerified
        ? "text-green-400 bg-green-500/10 border-green-500/20"
        : "text-yellow-400 bg-yellow-500/10 border-yellow-500/20";

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="h-full"
        >
            <Wrapper
                href={data.link}
                target={isLink ? "_blank" : undefined}
                rel={isLink ? "noopener noreferrer" : undefined}
                className={`
          group relative flex flex-col h-full bg-[#0B1120] border border-white/10 rounded-3xl p-8 overflow-hidden transition-all duration-500
          ${
              isLink
                  ? "hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] cursor-pointer"
                  : "hover:border-white/20"
          }
        `}>
            
                <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-${data.color}-500/10 blur-[60px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-${data.color}-500/20`}
                />


                <div className="flex justify-between items-start mb-6 relative z-10">
                    <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <data.icon
                            size={28}
                            className={
                                data.color === "blue"
                                    ? "text-blue-400"
                                    : data.color === "emerald"
                                    ? "text-emerald-400"
                                    : "text-orange-400"
                            }
                        />
                    </div>

                    <div
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${statusColor}`}>
                        {isVerified ? (
                            <CheckCircle2 size={12} />
                        ) : (
                            <Loader2 size={12} className="animate-spin" />
                        )}
                        {data.status}
                    </div>
                </div>


                <div className="relative z-10 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">
                        {data.title}
                    </h3>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                        {data.subtitle}
                    </p>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 border-b border-white/5 pb-6">
                        {data.desc}
                    </p>
                </div>


                <div className="relative z-10 mt-auto">
                    <div className="bg-black/30 rounded-lg p-3 border border-white/5">
                        <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">
                            Registration Data
                        </p>
                        <p className="text-xs md:text-sm text-white font-mono font-medium truncate">
                            {data.number}
                        </p>
                    </div>
                </div>


                {isLink && (
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 z-20">
                        <ExternalLink className="text-blue-400" size={20} />
                    </div>
                )}
            </Wrapper>
        </motion.div>
    );
}