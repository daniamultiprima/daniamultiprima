'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCcw, 
  Home, 
  ServerCrash, 
  ShieldAlert 
} from 'lucide-react';

export default function GlobalError({ error, reset }) {
  
  // Opsional: Log error ke console atau service monitoring
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative min-h-screen w-full bg-[#020617] flex items-center justify-center overflow-hidden selection:bg-red-500/30">
      
      {/* --- 1. BACKGROUND AMBIENCE (Red Alarm Theme) --- */}
      {/* Glow Merah Berdenyut di Tengah */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

      {/* --- 2. MAIN CONTENT CARD --- */}
      <div className="relative z-10 px-6 max-w-2xl w-full">
        
        {/* Glass Container */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white/[0.02] border border-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 text-center shadow-2xl overflow-hidden"
        >
          {/* Garis Merah di Atas (Indikator Error) */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80" />

          {/* Animated Icon */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-8 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(239,68,68,0.2)]"
          >
             {/* Icon bergetar sedikit */}
             <motion.div
               animate={{ rotate: [0, -5, 5, -5, 0] }}
               transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
             >
                <ServerCrash size={40} className="text-red-500" />
             </motion.div>
          </motion.div>

          {/* Typography */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
          >
            System Malfunction
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg mb-8 leading-relaxed"
          >
            Terjadi kesalahan teknis pada server kami. Sistem pertahanan digital sedang melakukan restart otomatis. Silakan coba muat ulang.
          </motion.p>

          {/* Error Code Snippet (Opsional, biar kelihatan techy) */}
          {error && (
             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-8 p-4 bg-black/50 rounded-lg border border-red-500/20 text-left overflow-x-auto"
             >
                <code className="text-xs font-mono text-red-400">
                   Error: {error.message || "Unknown Critical Error"}
                </code>
             </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Button Retry (Primary) */}
            <button 
              onClick={() => reset()}
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] active:scale-95"
            >
              <RefreshCcw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
              <span>Try Again</span>
            </button>

            {/* Button Home (Secondary) */}
            <Link href="/" className="w-full sm:w-auto">
              <button className="group w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-bold rounded-xl transition-all duration-300 backdrop-blur-sm active:scale-95">
                <Home size={18} />
                <span>Back to Safety</span>
              </button>
            </Link>
          </motion.div>

        </motion.div>

        {/* Footer Decoration */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 text-xs text-red-500/60 font-mono uppercase tracking-widest border border-red-900/30 px-3 py-1 rounded-full bg-red-900/10">
            <ShieldAlert size={12} />
            Critical Error 500
          </div>
        </motion.div>

      </div>
    </main>
  );
}