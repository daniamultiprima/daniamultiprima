'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ChevronRight, Slash } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
          scrolled
            ? 'bg-[#020617]/90 backdrop-blur-xl border-white/10 py-3 shadow-2xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-16">
            
            {/* --- TEXT LOGO (TYPOGRAPHIC MASTERPIECE) --- */}
            <Link href="/" className="group relative z-50 flex flex-col justify-center">
              <div className="flex items-baseline gap-1">
                {/* Kata Utama: DANIA */}
                <span className="text-white font-black text-3xl md:text-4xl tracking-tighter leading-none group-hover:text-gray-200 transition-colors">
                  DANIA
                </span>
                {/* Simbol Titik Biru (The Dot) */}
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-blue-600 rounded-full mb-1 group-hover:scale-125 group-hover:bg-blue-400 transition-all duration-300 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
              </div>
              
              {/* Kata Kedua: MULTI PRIMA (Wide Spacing) */}
              <div className="flex items-center gap-2 mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                 {/* Garis Dekorasi Kecil */}
                <span className="h-[1px] w-4 bg-blue-500 group-hover:w-8 group-hover:bg-blue-500 transition-all duration-500" />
                <span className="text-gray-400 text-[10px] md:text-[11px] font-bold tracking-[0.35em] uppercase group-hover:text-blue-400 transition-colors">
                  Multi Prima
                </span>
              </div>
            </Link>

            {/* --- DESKTOP MENU --- */}
            <div className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/5 rounded-full p-1.5 backdrop-blur-sm">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-6 py-2.5 text-sm font-bold text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* --- ACTION BUTTON --- */}
            <div className="hidden lg:block">
              <Link 
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-blue-50 text-[#020617] font-extrabold text-sm uppercase tracking-wider rounded-lg transition-all duration-300"
              >
                <span>CONTACTS</span>
                <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* --- MOBILE TOGGLE --- */}
            <div className="lg:hidden z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                {isOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* --- MOBILE MENU (Smooth Dropdown) --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 left-0 w-full bg-[#020617] border-b border-white/10 z-40 pt-24 pb-8 px-6 shadow-2xl lg:hidden"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-4 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group"
                    >
                      <span className="font-bold text-lg tracking-wide">{item.name}</span>
                      <ChevronRight size={18} className="text-gray-600 group-hover:text-blue-500 transition-colors" />
                    </Link>
                  </motion.div>
                ))}
                
                <div className="h-[1px] bg-white/10 my-4" />

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link 
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-95 uppercase tracking-widest text-sm"
                  >
                    Start Project <ArrowUpRight size={18} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}