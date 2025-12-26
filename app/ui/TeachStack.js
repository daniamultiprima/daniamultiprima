"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Atom,
  Server,
  FileCode,
  Code2,
  Layers,
  Zap,
  Braces,
  Terminal,
  Wifi,
  Feather,
  ArrowRightLeft,
  Database,
  Activity,
  Container,
  Command,
} from "lucide-react";

// --- DATA ---
const languages = [
  { name: "React.js", icon: Atom },
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Terminal },
  { name: "PHP Native", icon: Code2 },
  { name: "Laravel", icon: Layers },
  { name: "Next.js", icon: Zap },
  { name: "TypeScript", icon: Braces },
  { name: "GoLang", icon: FileCode },
];

const infrastructure = [
  { name: "Cisco Network", icon: Wifi },
  { name: "Apache", icon: Feather },
  { name: "Nginx", icon: ArrowRightLeft },
  { name: "MongoDB", icon: Database },
  { name: "MySQL", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Apache Kafka", icon: Activity },
  { name: "Docker", icon: Container },
  { name: "Ubuntu Server", icon: Command },
];

export default function TechStack() {
  return (
    <section className="relative w-full py-24 bg-[#020617] overflow-hidden border-y border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* --- HEADER SECTION (Updated to Match Hero Style) --- */}
      <div className="max-w-4xl mx-auto px-6 mb-16 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          Powering Your Business
        </div>

        {/* Title: Solid Blue + Neon Glow */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          World-Class <br className="hidden md:block" />
          <span className="text-blue-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]">
            Technology Stack.
          </span>
        </h2>

        {/* Description */}
        <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Kami tidak hanya mengikuti tren. Kami memilih teknologi yang teruji
          stabilitas, keamanan, dan kecepatannya untuk menjamin performa sistem
          Anda.
        </p>
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
          {[...infrastructure, ...infrastructure, ...infrastructure].map(
            (tech, i) => (
              <TechBadge
                key={i}
                text={tech.name}
                icon={tech.icon}
                color="purple"
              />
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}

// SUB-COMPONENT: TECH BADGE
function TechBadge({ text, icon: Icon, color }) {
  const colorStyles = {
    blue: "border-blue-500/20 bg-blue-500/5 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:border-blue-500/50 group-hover:text-white",
    purple:
      "border-purple-500/20 bg-purple-500/5 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:border-purple-500/50 group-hover:text-white",
  };

  return (
    <div
      className={`
      group flex items-center gap-3 px-8 py-6 rounded-xl border ${colorStyles[color]} 
      backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10 cursor-default
    `}
    >
      {/* Icon Wrapper */}
      <div className="opacity-70 group-hover:opacity-100 transition-opacity">
        <Icon size={20} strokeWidth={2} />
      </div>

      {/* Text */}
      <span className="font-mono text-md md:text-base font-bold tracking-wide uppercase">
        {text}
      </span>
    </div>
  );
}
