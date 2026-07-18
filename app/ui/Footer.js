"use client";

import React from "react";
import {
    ArrowUpRight,
    MapPin,
    Mail,
    Phone,
    Instagram,
    Linkedin,
    Facebook,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const companyLinks = [
        { name: "Home", href: "/" },
        { name: "Tentang Kami", href: "/about" },
        { name: "Layanan", href: "/services" },
        { name: "Solusi", href: "/solutions" },
        { name: "Portofolio", href: "/portfolio" },
        { name: "Kontak", href: "/contacts" },
    ];

    return (
        <footer className="relative bg-[#020617] pt-32 overflow-hidden border-t-[8px] border-[#333]">
            {/* GLITCHY BACKGROUND */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.3) 25%, rgba(59, 130, 246, 0.3) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.3) 75%, rgba(59, 130, 246, 0.3) 76%, transparent 77%, transparent)",
                    backgroundSize: "50px 50px",
                }}
            />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center">
                {/* SYSTEM WARNING CTA (Windows 95/DOS Dialog Box Style) */}
                <div className="flex flex-col items-center justify-center mb-24 w-full max-w-4xl">
                    <div className="bg-[#c0c0c0] border-t-[6px] border-l-[6px] border-white border-b-[6px] border-r-[6px] border-black w-full shadow-[16px_16px_0_0_#eab308]">
                        {/* Dialog Header */}
                        <div className="bg-blue-800 px-2 md:px-4 py-2 flex justify-between items-center border-b-[4px] border-black gap-2">
                            <span className="font-logo text-white text-[9px] sm:text-xs md:text-sm tracking-widest uppercase drop-shadow-[1px_1px_0_#000] truncate">
                                C:\SYSTEM\YUK_MULAI.EXE
                            </span>
                            <div className="flex gap-1 md:gap-2 flex-shrink-0">
                                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#c0c0c0] border-t-[2px] border-l-[2px] border-white border-b-[2px] border-r-[2px] border-black flex items-center justify-center cursor-pointer active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-black font-logo text-[8px] md:text-[10px]">
                                    _
                                </div>
                                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#c0c0c0] border-t-[2px] border-l-[2px] border-white border-b-[2px] border-r-[2px] border-black flex items-center justify-center cursor-pointer active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-black font-logo text-[8px] md:text-[10px]">
                                    #
                                </div>
                                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#c0c0c0] border-t-[2px] border-l-[2px] border-white border-b-[2px] border-r-[2px] border-black flex items-center justify-center cursor-pointer active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-black font-logo text-[8px] md:text-[10px]">
                                    X
                                </div>
                            </div>
                        </div>

                        {/* Dialog Body */}
                        <div className="p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                            <div className="w-20 h-20 md:w-28 md:h-28 bg-yellow-400 border-[6px] border-black rounded-full flex items-center justify-center shadow-[6px_6px_0_0_#000] flex-shrink-0 animate-pulse">
                                <span className="font-logo text-black text-5xl md:text-7xl font-black">
                                    !
                                </span>
                            </div>
                            <div className="flex flex-col flex-grow">
                                <h2 className="font-logo text-2xl md:text-3xl lg:text-[2rem] font-black text-black tracking-widest mb-6 uppercase leading-[1.4] drop-shadow-[1px_1px_0_#fff]">
                                    Siap untuk <br className="md:hidden" />{" "}
                                    Transformasi?
                                </h2>
                                <p className="font-sans font-bold text-gray-800 text-sm md:text-lg max-w-xl">
                                    Jangan biarkan teknologi membatasi visi
                                    Anda. Konsultasikan kebutuhan IT & Aplikasi
                                    perusahaan Anda sekarang. Sistem siap
                                    dieksekusi.
                                </p>
                            </div>
                        </div>

                        {/* Dialog Footer */}
                        <div className="p-6 bg-[#a0a0a0] border-t-[4px] border-white flex flex-col sm:flex-row justify-center md:justify-end gap-6">
                            <a
                                href="https://wa.me/628138050510"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto">
                                <button className="w-full bg-[#c0c0c0] px-8 py-4 border-t-[4px] border-l-[4px] border-white border-b-[4px] border-r-[4px] border-black shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-y-1 active:translate-x-1 active:border-t-black active:border-l-black active:border-b-white active:border-r-white transition-all text-black font-logo text-[10px] md:text-xs font-bold uppercase tracking-widest focus:outline-dashed focus:outline-2 focus:outline-black focus:outline-offset-4">
                                    [ HUBUNGI WHATSAPP KAMI ]
                                </button>
                            </a>
                            {/* <button className="w-full sm:w-auto bg-[#c0c0c0] px-8 py-4 border-t-[4px] border-l-[4px] border-white border-b-[4px] border-r-[4px] border-black shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-y-1 active:translate-x-1 active:border-t-black active:border-l-black active:border-b-white active:border-r-white transition-all text-black font-logo text-[10px] md:text-xs font-bold uppercase tracking-widest">
                   ABORT
               </button> */}
                        </div>
                    </div>
                </div>

                {/* NEO-BRUTALIST FOOTER COLUMNS */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-20 border-b-[8px] border-gray-800">
                    {/* BRAND COLUMN */}
                    <div className="lg:col-span-5 flex flex-col items-start bg-[#111827] border-[4px] border-[#333] p-8 shadow-[8px_8px_0_0_#000]">
                        <div className="flex flex-col mb-8">
                            <div className="flex items-baseline gap-2">
                                <span className="font-logo text-white font-black text-3xl md:text-4xl tracking-widest uppercase drop-shadow-[2px_2px_0_#3b82f6]">
                                    DANIA
                                </span>
                                <span className="w-3 h-3 md:w-4 md:h-4 bg-yellow-400 border-[2px] border-black shadow-[2px_2px_0_0_#000]" />
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <span className="h-[4px] w-12 bg-blue-600 border border-black" />
                                <span className="font-logo text-yellow-400 text-[10px] font-bold tracking-[0.3em] uppercase">
                                    Multi Prima
                                </span>
                            </div>
                        </div>
                        <p className="font-sans font-bold text-gray-400 text-sm md:text-base leading-relaxed mb-10 border-l-[4px] border-gray-700 pl-4">
                            Mitra transformasi digital terpercaya di Medan.
                            Spesialisasi kami meliputi pengembangan Software,
                            Mobile App, dan Solusi Smart City untuk masa depan
                            Indonesia.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    aria-label={"Social Link " + i}
                                    className="w-12 h-12 bg-gray-800 border-[4px] border-black flex items-center justify-center text-white shadow-[4px_4px_0_0_#000] hover:bg-blue-600 hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                                    <Icon
                                        size={20}
                                        className="stroke-[2.5px]"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* MENU COLUMN */}
                    <div className="lg:col-span-3 lg:col-start-6">
                        <div className="font-logo text-yellow-400 font-bold text-xs md:text-sm tracking-widest uppercase border-b-[4px] border-gray-800 pb-4 mb-6">
                            Menu_Directory
                        </div>
                        <ul className="space-y-4">
                            {companyLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="font-mono font-bold text-gray-300 text-sm md:text-base hover:text-blue-400 hover:bg-blue-900/30 px-2 py-1 transition-colors flex items-center gap-3">
                                        <span className="text-yellow-400">
                                            {">"}
                                        </span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTACT COLUMN */}
                    <div className="lg:col-span-4">
                        <h4 className="font-logo text-yellow-400 font-bold text-xs md:text-sm tracking-widest uppercase border-b-[4px] border-gray-800 pb-4 mb-6">
                            Hubungi_Kami
                        </h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 bg-gray-800 border-[3px] border-black flex items-center justify-center flex-shrink-0 shadow-[4px_4px_0_0_#000] text-blue-400">
                                    <MapPin
                                        size={20}
                                        className="stroke-[2.5px]"
                                    />
                                </div>
                                <span className="font-mono font-bold text-gray-300 text-sm leading-relaxed pt-1">
                                    Jln. Medan-Binjai, Diski, Km. 14.5, Sunggal,
                                    Deli Serdang, Sumatera Utara, 20351.
                                </span>
                            </div>
                            <a
                                href="mailto:daniamultiprima&#64;gmail.com"
                                className="flex items-center gap-4 group">
                                <div className="w-10 h-10 bg-gray-800 border-[3px] border-black flex items-center justify-center flex-shrink-0 shadow-[4px_4px_0_0_#000] text-yellow-400">
                                    <Mail
                                        size={20}
                                        className="stroke-[2.5px]"
                                    />
                                </div>
                                <span className="font-mono font-bold text-gray-300 text-sm group-hover:text-yellow-400 transition-colors">
                                    daniamultiprima&#64;gmail.com
                                </span>
                            </a>
                            <a
                                href="tel:+628138050510"
                                className="flex items-center gap-4 group">
                                <div className="w-10 h-10 bg-gray-800 border-[3px] border-black flex items-center justify-center flex-shrink-0 shadow-[4px_4px_0_0_#000] text-blue-400">
                                    <Phone
                                        size={20}
                                        className="stroke-[2.5px]"
                                    />
                                </div>
                                <span className="font-mono font-bold text-gray-300 text-sm group-hover:text-blue-400 transition-colors">
                                    +62 813-8050-510
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* BOTTOM COPYRIGHT */}
                <div className="w-full py-8 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs text-gray-500 font-bold uppercase tracking-widest">
                    <p>
                        &copy; {currentYear} PT. DANIA MULTI PRIMA. ALL RIGHTS
                        RESERVED.
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="#"
                            className="hover:text-yellow-400 transition-colors">
                            [ PRIVACY ]
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-blue-400 transition-colors">
                            [ TERMS ]
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
