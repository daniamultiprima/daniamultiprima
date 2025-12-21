'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, Server, FileCode, Code2, Layers, Zap, Braces, Terminal, // Untuk Languages
  Wifi, Feather, ArrowRightLeft, Database, Activity, Container, Command // Untuk Infrastructure
} from 'lucide-react';

// --- DATA ---
// Diubah menjadi Array of Objects agar bisa menyimpan Icon
const languages = [
  { name: "React.js", icon: Atom },
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Terminal },
  { name: "PHP Native", icon: Code2 },
  { name: "Laravel", icon: Layers },
  { name: "Next.js", icon: Zap },
  { name: "TypeScript", icon: Braces },
  { name: "GoLang", icon: FileCode }
];

const infrastructure = [
  { name: "Cisco Network", icon: Wifi },
  { name: "Apache", icon: Feather }, // Logo Apache = Bulu
  { name: "Nginx", icon: ArrowRightLeft }, // Simbol Proxy/Routing
  { name: "MongoDB", icon: Database },
  { name: "MySQL", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Apache Kafka", icon: Activity }, // Simbol Stream/Data Flow
  { name: "Docker", icon: Container },
  { name: "Ubuntu Server", icon: Command }
];

export default function TechStack() {
  return (
    <section className="relative w-full py-20 bg-[#020617] overflow-hidden border-y border-white/5">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
        <p className="text-blue-500 font-bold tracking-[0.2em] text-xs uppercase mb-2">
          Powering Your Business
        </p>
        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
          World-Class <span className="text-gray-500">Technology Stack.</span>
        </h3>
      </div>

      {/* --- ROW 1: LANGUAGES (Gerak ke Kiri) --- */}
      <div className="relative flex w-full overflow-hidden mask-linear-gradient mb-6">
        <motion.div 
          className="flex gap-4 items-center whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          {/* Loop 3x */}
          {[...languages, ...languages, ...languages].map((tech, i) => (
            <TechBadge key={i} text={tech.name} icon={tech.icon} color="blue" />
          ))}
        </motion.div>
      </div>

      {/* --- ROW 2: INFRASTRUCTURE (Gerak ke Kanan) --- */}
      <div className="relative flex w-full overflow-hidden mask-linear-gradient">
        <motion.div 
          className="flex gap-4 items-center whitespace-nowrap"
          animate={{ x: [-1000, 0] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
        >
          {/* Loop 3x */}
          {[...infrastructure, ...infrastructure, ...infrastructure].map((tech, i) => (
            <TechBadge key={i} text={tech.name} icon={tech.icon} color="purple" />
          ))}
        </motion.div>
      </div>

    </section>
  );
}

// SUB-COMPONENT: TECH BADGE (Updated with Icon)
function TechBadge({ text, icon: Icon, color }) {
  const colorStyles = {
    blue: "border-blue-500/20 bg-blue-500/5 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:border-blue-500/50 group-hover:text-white",
    purple: "border-purple-500/20 bg-purple-500/5 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:border-purple-500/50 group-hover:text-white"
  };

  return (
    <div className={`
      group flex items-center gap-3 px-8 py-6 rounded-xl border ${colorStyles[color]} 
      backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10 cursor-default
    `}>
      {/* Icon Wrapper */}
      <div className="opacity-70 group-hover:opacity-100 transition-opacity">
        <Icon size={18} strokeWidth={2} />
      </div>
      
      {/* Text */}
      <span className="font-mono text-md md:text-base font-bold tracking-wide uppercase">
        {text}
      </span>
    </div>
  );
}