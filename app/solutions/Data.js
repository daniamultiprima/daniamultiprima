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
    
    desc: "Ekosistem digital pemerintahan yang transparan dan berbasis data real-time. Sesuai arsitektur SPBE Nasional untuk Smart City.",
    icon: Building2,
    color: "blue",
    features: [
      "Executive Dashboard (Big Data)",
      "Smart City Citizen Apps",
      "E-Office / Tata Naskah Dinas",
      "JDIH & Arsip Digital",
    ],
  },
  {
    id: "health",
    title: "Healthcare",
    subtitle: "Hospital Management System",
    
    desc: "Transformasi digital RSUD & Klinik menuju Smart Hospital. Integrasi penuh dari pendaftaran online, RME, hingga klaim BPJS.",
    icon: Stethoscope,
    color: "emerald",
    features: [
      "SIMRS Terintegrasi (Bridging BPJS)",
      "Rekam Medis Elektronik (RME)",
      "Integrasi SATU SEHAT Kemenkes",
      "IoT Nurse Call System",
    ],
  },
  {
    id: "edu",
    title: "Education",
    subtitle: "Campus & School System",
    
    desc: "Modernisasi tata kelola akademik kampus dan sekolah. Mendukung program Kampus Merdeka dan pelaporan PDDIKTI otomatis.",
    icon: GraduationCap,
    color: "orange",
    features: [
      "Sistem Informasi Akademik (SIAKAD)",
      "Aplikasi Ujian Online (CBT)",
      "Digital Library & E-Journal",
      "Sistem Remunerasi Dosen",
    ],
  },
  {
    id: "biz",
    title: "Enterprise",
    subtitle: "Business Automation",
    
    desc: "Acelerate profit bisnis retail & korporasi dengan sistem manajemen terpusat (ERP). Pantau stok, keuangan, dan SDM dari satu layar.",
    icon: Briefcase,
    color: "purple",
    features: [
      "Custom ERP & CRM",
      "Aplikasi Kasir (POS) Multi-Cabang",
      "E-Commerce Omnichannel",
      "HRIS & Payroll System",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-[#020617] min-h-screen text-white selection:bg-blue-500 selection:text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-40 pb-20 relative z-10">
        
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono mb-6"
          >
            <Sparkles size={12} className="text-yellow-400" />
            <h2 className="uppercase font-bold tracking-widest text-xs">
              SOLUSI IT TERINTEGRASI
            </h2>
          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1]"
          >
            Built for <br className="hidden md:block" />
            
            <span className="text-blue-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]">
              Critical Sectors.
            </span>
          </motion.h1>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Kami memahami DNA industri Anda. Dari <strong className="text-white">Smart City Pemerintahan</strong>, <strong className="text-white">SIMRS Rumah Sakit</strong>, hingga <strong className="text-white">Sistem Kampus Digital</strong>. Kami menghadirkan solusi teknologi yang siap pakai untuk instansi di <strong className="text-white">Medan & Indonesia</strong>.
          </motion.p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {industries.map((item, i) => (
            <SolutionCard key={item.id} data={item} index={i} />
          ))}
        </div>


        <div className="mt-28 text-center border-t border-white/10 pt-16">
          <h3 className="text-3xl font-black text-white mb-6">
            Punya Kebutuhan Sistem Khusus?
          </h3>
          <p className="text-gray-400 mb-10 text-lg max-w-xl mx-auto">
            Tim <strong className="text-white">System Analyst</strong> kami siap merancang arsitektur sistem yang presisi dan sesuai anggaran daerah/perusahaan Anda.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Konsultasi Gratis <ArrowRight size={20} />
          </Link>
        </div>
      </div>


      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-center" />
      </div>

      <Footer />
    </main>
  );
}


function SolutionCard({ data, index }) {
  const colors = {
    blue: "group-hover:border-blue-500/50 group-hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]",
    emerald: "group-hover:border-emerald-500/50 group-hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)]",
    orange: "group-hover:border-orange-500/50 group-hover:shadow-[0_0_50px_-12px_rgba(249,115,22,0.3)]",
    purple: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.3)]",
  };

  const iconColors = {
    blue: "text-blue-400 bg-blue-500/10",
    emerald: "text-emerald-400 bg-emerald-500/10",
    orange: "text-orange-400 bg-orange-500/10",
    purple: "text-purple-400 bg-purple-500/10",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative bg-[#0B1120] border border-white/5 rounded-[2.5rem] p-10 overflow-hidden transition-all duration-500 ${colors[data.color]}`}
    >
      
      <div
        className={`absolute -right-20 -top-20 w-64 h-64 bg-${data.color}-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
      />


      <div className="relative z-10 flex items-start justify-between mb-8">
        <div>
          
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
            {data.title} Solutions
          </h3>
          <div className="text-3xl font-bold text-white leading-tight">
            {data.subtitle}
          </div>
        </div>
        <div
          className={`p-4 rounded-2xl ${iconColors[data.color]} transition-colors group-hover:scale-110 duration-300`}
        >
          <data.icon size={32} />
        </div>
      </div>

      <p className="relative z-10 text-gray-400 text-base leading-relaxed mb-10 border-b border-white/5 pb-8">
        {data.desc}
      </p>


      <div className="relative z-10 grid grid-cols-1 gap-4">
        {data.features.map((feat, i) => (
          <div key={i} className="flex items-center gap-3 text-base text-gray-300 font-medium group/item hover:text-white transition-colors">
            <div className={`flex items-center justify-center w-6 h-6 rounded-full bg-${data.color}-500/10`}>
                <Check
                size={14}
                className={`shrink-0 ${
                    data.color === "blue" ? "text-blue-500" : 
                    data.color === "emerald" ? "text-emerald-500" : 
                    data.color === "orange" ? "text-orange-500" : 
                    "text-purple-500"
                }`}
                />
            </div>
            {feat}
          </div>
        ))}
      </div>
    </motion.div>
  );
}