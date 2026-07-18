"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b-[4px] ${
          scrolled
            ? "bg-[#020617] border-b-[#1e293b] shadow-[0_4px_0_0_rgba(0,0,0,0.5)] py-3"
            : "bg-transparent border-b-transparent shadow-none py-5 md:py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            
            {/* --- CSS/TEXT LOGO START (Persis seperti Navbar 2 asli) --- */}
            <Link
              href="/"
              className="group relative z-50 flex flex-col items-center justify-center gap-2 py-1"
            >
              {/* Kotak DMP */}
              <div className="flex items-center gap-1.5 md:gap-2">
                {/* Huruf D */}
                <div className="flex items-center justify-center w-9 h-9 md:w-[42px] md:h-[42px] bg-gradient-to-br from-blue-600 to-blue-900 border border-blue-400/50 rounded-md shadow-[0_0_15px_rgba(37,99,235,0.3)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] group-hover:-translate-y-0.5 transition-all duration-300">
                  <span className="text-white font-serif font-bold text-xl md:text-2xl mt-0.5">D</span>
                </div>
                
                {/* Huruf M */}
                <div className="flex items-center justify-center w-9 h-9 md:w-[42px] md:h-[42px] bg-gradient-to-br from-slate-500 to-slate-800 border border-slate-400/50 rounded-md shadow-[0_0_15px_rgba(100,116,139,0.3)] group-hover:shadow-[0_0_25px_rgba(148,163,184,0.5)] group-hover:-translate-y-0.5 transition-all duration-300 delay-75">
                  <span className="text-white font-serif font-bold text-xl md:text-2xl mt-0.5">M</span>
                </div>

                {/* Huruf P */}
                <div className="flex items-center justify-center w-9 h-9 md:w-[42px] md:h-[42px] bg-gradient-to-br from-blue-600 to-blue-900 border border-blue-400/50 rounded-md shadow-[0_0_15px_rgba(37,99,235,0.3)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] group-hover:-translate-y-0.5 transition-all duration-300 delay-150">
                  <span className="text-white font-serif font-bold text-xl md:text-2xl mt-0.5">P</span>
                </div>
              </div>

              {/* Garis Pemisah Bawah (Glow Line) */}
              <div className="w-[110%] h-[2px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent group-hover:via-blue-300 transition-colors duration-500" />

              {/* Teks Bawah */}
              <span className="text-white text-[11px] md:text-[13px] font-bold uppercase tracking-[0.25em] md:tracking-[0.35em] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] group-hover:text-blue-100 transition-colors duration-300">
                Dania Multi Prima
              </span>
            </Link>
            {/* --- CSS/TEXT LOGO END --- */}


            {/* DESKTOP MENU (Pixel Art Style) */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`font-logo text-[10px] md:text-[11px] uppercase tracking-widest transition-transform hover:-translate-y-1 ${
                      isActive 
                        ? "text-brand-light drop-shadow-[2px_2px_0px_#000]" 
                        : "text-gray-300 hover:text-white drop-shadow-[2px_2px_0px_#000]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* CTA BUTTON DESKTOP (Pixel Art Style) */}
            <div className="hidden lg:block">
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center px-6 py-3 font-logo text-[10px] uppercase text-white bg-brand border-[4px] border-b-[#1e3a8a] border-r-[#1e3a8a] border-t-[#93c5fd] border-l-[#93c5fd] hover:bg-brand-light active:border-t-[#1e3a8a] active:border-l-[#1e3a8a] active:border-b-[#93c5fd] active:border-r-[#93c5fd] transition-all"
              >
                <span className="mt-1 flex items-center gap-2 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
                  CONTACTS <ArrowUpRight size={14} className="stroke-[3px]" />
                </span>
              </Link>
            </div>

            {/* MOBILE MENU BUTTON (Pixel Art Style) */}
            <div className="lg:hidden z-50 flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 bg-gray-800 border-[3px] border-b-black border-r-black border-t-gray-500 border-l-gray-500 active:border-t-black active:border-l-black active:border-b-gray-500 active:border-r-gray-500 transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU (Pixel Art Style) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed inset-0 w-full bg-[#020617] border-t-4 border-brand z-40 lg:hidden overflow-y-auto pt-32"
          >
            {/* Pixel Pattern Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

            <div className="relative z-10 px-6 py-10 font-logo text-[11px] tracking-widest space-y-6 pb-32">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between p-4 border-[3px] uppercase tracking-widest bg-gray-900 ${
                      isActive ? "text-brand-light border-brand-light" : "text-gray-300 border-gray-700 hover:border-gray-500 hover:text-white"
                    }`}
                  >
                    <span className="drop-shadow-[2px_2px_0px_#000]">&gt; {item.name}</span>
                    <ChevronRight size={16} className={isActive ? "text-brand-light" : "text-gray-500"} />
                  </Link>
                );
              })}

              <Link
                href="/contacts"
                onClick={() => setIsOpen(false)}
                className="block text-center mt-10 bg-brand text-white py-5 border-[4px] border-b-[#1e3a8a] border-r-[#1e3a8a] border-t-[#93c5fd] border-l-[#93c5fd] active:border-t-[#1e3a8a] active:border-l-[#1e3a8a] active:border-b-[#93c5fd] active:border-r-[#93c5fd] transition-all uppercase tracking-widest text-[11px]"
              >
                <span className="drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">Start Project</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}