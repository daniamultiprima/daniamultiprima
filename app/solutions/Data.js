"use client";

import React from "react";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";
import { motion } from "framer-motion";
import {
  Building2,
  Stethoscope,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const industries = [
  {
    id: "gov",
    title: "Government",
    subtitle: "Smart City & Public Service",
    desc: "Ekosistem pemerintahan transparan berbasis data real-time (SPBE Ready).",
    icon: Building2,
    color: "blue",
    features: [
      "Executive Dashboard",
      "Smart City Apps",
      "E-Office / Tata Naskah",
      "JDIH & Arsip Digital",
    ],
  },
  {
    id: "health",
    title: "Healthcare",
    subtitle: "Hospital Management System",
    desc: "Transformasi digital RSUD & Klinik dari pendaftaran online hingga klaim BPJS.",
    icon: Stethoscope,
    color: "emerald",
    features: [
      "SIMRS Terintegrasi",
      "Bridging BPJS V-Claim",
      "IoT Nurse Call",
      "E-Prescription",
    ],
  },
  {
    id: "edu",
    title: "Education",
    subtitle: "Campus & School System",
    desc: "Modernisasi tata kelola akademik dan administrasi menuju World Class University.",
    icon: GraduationCap,
    color: "orange",
    features: [
      "Sistem PAK Dosen",
      "Academic Portal",
      "Digital Library",
      "Remunerasi Sistem",
    ],
  },
  {
    id: "biz",
    title: "Enterprise",
    subtitle: "Business Automation",
    desc: "Acelerate profit bisnis retail & korporasi dengan sistem manajemen terpusat (ERP).",
    icon: Briefcase,
    color: "purple",
    features: [
      "Custom ERP & CRM",
      "POS (Point of Sales)",
      "E-Commerce",
      "Procurement",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-[#020617] min-h-screen text-white selection:bg-white/20">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        {/* --- HERO SECTION --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono mb-6"
          >
            <Sparkles size={12} className="text-yellow-400" />
            {/* SEO TAG */}
            <h2 className="uppercase font-bold tracking-widest text-xs">
              SOLUSI IT BERBASIS INDUSTRI
            </h2>
          </motion.div>

          {/* TITLE: UPDATED TO HERO STYLE (SOLID BLUE + GLOW) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight"
          >
            Built for <br className="hidden md:block" />
            {/* Ganti Gradient dengan Solid Blue + Neon Shadow */}
            <span className="text-blue-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]">
              Critical Sectors.
            </span>
          </motion.h1>

          {/* SEO PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed"
          >
            Kami memahami DNA industri Anda. Dari{" "}
            <strong className="text-white">Smart City Pemerintahan</strong>,{" "}
            <strong className="text-white">SIMRS Rumah Sakit</strong>, hingga{" "}
            <strong className="text-white">Sistem Kampus Digital</strong>, kami
            menciptakan solusi yang menyelesaikan masalah nyata.
          </motion.p>
        </div>

        {/* --- GRID CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((item, i) => (
            <SolutionCard key={item.id} data={item} index={i} />
          ))}
        </div>

        {/* --- CTA SIMPLE --- */}
        <div className="mt-24 text-center border-t border-white/10 pt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Butuh Solusi Custom?
          </h3>
          <p className="text-gray-400 mb-8">
            Tim <strong className="text-white">System Analyst</strong> kami siap
            merancang arsitektur sistem yang presisi untuk kebutuhan unik bisnis
            Anda.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors font-bold"
          >
            Hubungi Tim Engineer Kami <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full" />
      </div>

      <Footer />
    </main>
  );
}

// --- CARD COMPONENT ---
function SolutionCard({ data, index }) {
  const colors = {
    blue: "group-hover:border-blue-500/50 group-hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]",
    emerald:
      "group-hover:border-emerald-500/50 group-hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)]",
    orange:
      "group-hover:border-orange-500/50 group-hover:shadow-[0_0_50px_-12px_rgba(249,115,22,0.3)]",
    purple:
      "group-hover:border-purple-500/50 group-hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.3)]",
  };

  const iconColors = {
    blue: "text-blue-400 bg-blue-500/10",
    emerald: "text-emerald-400 bg-emerald-500/10",
    orange: "text-orange-400 bg-orange-500/10",
    purple: "text-purple-400 bg-purple-500/10",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative bg-[#0B1120] border border-white/5 rounded-3xl p-8 overflow-hidden transition-all duration-500 ${
        colors[data.color]
      }`}
    >
      <div
        className={`absolute -right-20 -top-20 w-64 h-64 bg-${data.color}-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
      />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between mb-8">
        <div>
          {/* H3 Title for SEO per Card */}
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
            {data.title} Solutions
          </h3>
          <div className="text-2xl md:text-3xl font-bold text-white leading-tight">
            {data.subtitle}
          </div>
        </div>
        <div
          className={`p-3 rounded-2xl ${
            iconColors[data.color]
          } transition-colors`}
        >
          <data.icon size={28} />
        </div>
      </div>

      <p className="relative z-10 text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
        {data.desc}
      </p>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {data.features.map((feat, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-sm text-gray-300 font-medium"
          >
            <Check
              size={14}
              className={`shrink-0 ${
                data.color === "blue"
                  ? "text-blue-500"
                  : data.color === "emerald"
                  ? "text-emerald-500"
                  : data.color === "orange"
                  ? "text-orange-500"
                  : "text-purple-500"
              }`}
            />
            {feat}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
