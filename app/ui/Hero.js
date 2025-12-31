"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Cpu, ShieldCheck, Globe } from "lucide-react";
import Link from "next/link";

// Variabel animasi
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#020617]">
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                              linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-[-20%] left-[-20%] md:top-[-10%] md:left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-20%] md:bottom-[-10%] md:right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-900/20 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-500/5 rounded-full blur-[60px] md:blur-[100px]" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-36 pb-20 md:pt-0 md:pb-0 text-center flex flex-col items-center justify-center flex-grow"
      >
        {/* Badge: SEO Friendly Text */}
        <motion.div variants={fadeInUp} className="mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-900/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
             PT. DANIA MULTI PRIMA
          </div>
        </motion.div>

        {/* HEADLINE (H1) - UPDATED DESIGN */}
        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] mb-6 md:mb-8"
        >
          Transforming Data <br className="hidden md:block" />
          {/* PERBAIKAN: 
              1. Hapus 'text-transparent bg-clip-text ...'
              2. Ganti dengan 'text-blue-400' (Warna Solid)
              3. Tambahkan 'drop-shadow' (Efek Glow Neon)
          */}
          <span className="text-blue-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]">
            Into Intelligence.
          </span>
        </motion.h1>

        {/* SUBHEADLINE */}
        <motion.p
          variants={fadeInUp}
          className="text-sm sm:text-lg md:text-xl text-gray-400 w-[95%] md:max-w-3xl mx-auto mb-8 md:mb-12 leading-7 md:leading-relaxed px-4 md:px-2"
        >
          Sebagai{" "}
          <strong className="text-white font-semibold">Konsultan IT</strong> dan{" "}
          <strong className="text-white font-semibold">Software House</strong>{" "}
          terpercaya, kami menyediakan{" "}
          <strong className="text-white font-semibold">
            Jasa Pembuatan Aplikasi
          </strong>
          , Pengembangan Sistem Enterprise, dan Integrasi{" "}
          <strong className="text-white font-semibold">
            Artificial Intelligence (AI)
          </strong>{" "}
          untuk modernisasi bisnis dan pemerintahan Anda.
        </motion.p>

        {/* BUTTONS GROUP */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col w-full sm:w-auto sm:flex-row items-center justify-center gap-4 px-4 sm:px-0"
        >
          <Link href="/portfolio" className="w-full sm:w-auto">
            <button className="group relative w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-xl overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all active:scale-95">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                Lihat Portfolio Kami <ArrowRight size={20} />
              </span>
            </button>
          </Link>

          <Link href="/services" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-gray-200 font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all active:scale-95 flex items-center justify-center gap-2 backdrop-blur-sm">
              <Layers size={20} className="text-blue-400" />
              Layanan IT Lengkap
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* --- FOOTER STATS --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="w-full border-t border-white/5 bg-[#020617]/50 backdrop-blur-sm mt-auto md:mt-0 md:absolute md:bottom-0 relative z-20"
      >
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-8 opacity-80 md:opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col md:flex-row items-center md:justify-center gap-2 md:gap-3 text-center md:text-left">
              <Cpu className="text-blue-500 w-6 h-6 md:w-6 md:h-6" />
              <span className="text-white font-bold text-xs md:text-sm tracking-widest uppercase">
                AI Driven Systems
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center md:justify-center gap-2 md:gap-3 text-center md:text-left">
              <ShieldCheck className="text-blue-500 w-6 h-6 md:w-6 md:h-6" />
              <span className="text-white font-bold text-xs md:text-sm tracking-widest uppercase">
                Enterprise Security
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center md:justify-center gap-2 md:gap-3 text-center md:text-left">
              <Globe className="text-blue-500 w-6 h-6 md:w-6 md:h-6" />
              <span className="text-white font-bold text-xs md:text-sm tracking-widest uppercase">
                Global Standard
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center md:justify-center gap-2 md:gap-3 border-none md:border-l md:border-white/10 md:pl-8">
              <span className="text-white font-black text-xl md:text-2xl">
                98%
              </span>
              <span className="text-gray-400 text-[10px] md:text-xs leading-tight text-center md:text-left uppercase font-bold tracking-wider">
                Client <br className="hidden md:block" />
                Satisfaction
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
