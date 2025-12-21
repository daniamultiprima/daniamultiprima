'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, SearchX, WifiOff } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full bg-[#020617] flex items-center justify-center overflow-hidden selection:bg-blue-500/30">
      
      {/* --- 1. BACKGROUND AMBIENCE --- */}
      {/* Glow Biru di kiri atas */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      {/* Glow Ungu di kanan bawah */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

      {/* --- 2. MAIN CONTENT --- */}
      <div className="relative z-10 px-6 text-center max-w-2xl mx-auto">
        
        {/* Animated Icon Container */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="relative w-32 h-32 mx-auto mb-8 flex items-center justify-center"
        >
          {/* Lingkaran Luar Berputar */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-blue-500/30"
          />
          {/* Lingkaran Dalam Berputar Lawan Arah */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border border-dotted border-white/10"
          />
          
          {/* Main Icon */}
          <div className="relative z-10 p-6 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md shadow-[0_0_30px_rgba(37,99,235,0.2)]">
            <SearchX size={48} className="text-blue-400" />
          </div>
        </motion.div>

        {/* Text 404 Besar */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 tracking-tighter mb-4"
        >
          404
        </motion.h1>

        {/* Pesan Error */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Oops! Halaman yang Anda cari sepertinya telah dipindahkan, dihapus, atau mungkin tidak pernah ada di dimensi digital ini.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Button Home */}
          <Link href="/">
            <button className="group flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] active:scale-95">
              <Home size={18} />
              <span>Back to Home</span>
            </button>
          </Link>

          {/* Button Back */}
          <button 
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-bold rounded-xl transition-all duration-300 backdrop-blur-sm active:scale-95"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Go Back</span>
          </button>
        </motion.div>

      </div>

      {/* --- 3. DECORATION FOOTER --- */}
      <div className="absolute bottom-10 w-full text-center">
        <p className="text-xs text-gray-600 font-mono tracking-widest uppercase">
          Not Found • Dania Multi Prima
        </p>
      </div>

    </main>
  );
}