'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Building2, 
  Stethoscope, 
  Landmark, 
  GraduationCap, 
  Bot, 
  Database,
  Cpu
} from 'lucide-react';

// DATA PROYEK
const projects = [
  {
    // PROYEK UTAMA (Jare-AI)
    id: "jare-ai",
    title: "Jare-AI Public Service",
    client: "Kementerian Komunikasi & Digital",
    category: "AI Government Solutions",
    desc: "Sistem Chatbot WhatsApp cerdas untuk pelayanan publik nasional. Mengintegrasikan Data Warehouse Kementerian dengan kemampuan Generative AI (Gemini) untuk memberikan respons akurat, kontekstual, dan real-time kepada masyarakat.",
    tech: ["Next.js", "Node.js", "Gemini API", "MongoDB", "PostgreSQL"],
    icon: Bot,
    color: "from-blue-500 to-cyan-400",
    featured: true // Penanda untuk layout besar
  },
  {
    id: "simrs",
    title: "Smart Hospital System",
    client: "RSUD Drs. H. Amri Tambunan",
    category: "HealthTech Ecosystem",
    desc: "Transformasi digital rumah sakit menyeluruh. Mulai dari pendaftaran pasien online, rekam medis elektronik (EMR), hingga integrasi klaim otomatis BPJS.",
    tech: ["PHP Native", "PostgreSQL", "Redis"],
    icon: Stethoscope,
    color: "from-emerald-500 to-teal-400",
    featured: false
  },
  {
    id: "dashboard",
    title: "Executive Dashboard",
    client: "Pemkab Serdang Bedagai",
    category: "Big Data Analytics",
    desc: "Dashboard monitoring real-time untuk Bupati. Visualisasi data Pendapatan Asli Daerah (PAD) dan serapan anggaran dinas dalam satu layar eksekutif.",
    tech: ["React.js", "Express", "Socket.io"],
    icon: Landmark,
    color: "from-violet-500 to-purple-400",
    featured: false
  },
  {
    id: "usu",
    title: "Academic Management",
    client: "Universitas Sumatera Utara",
    category: "EduTech Platform",
    desc: "Digitalisasi tata kelola kampus masif: Sistem Penilaian Angka Kredit (PAK) Dosen, Remunerasi, dan integrasi data akademik lintas fakultas.",
    tech: ["Laravel", "MySQL", "Rest API"],
    icon: GraduationCap,
    color: "from-orange-500 to-red-400",
    featured: false
  }
];

export default function ProjectShowcase() {
  return (
    <section className="relative w-full py-24 bg-[#020617] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
               <span className="w-8 h-[2px] bg-blue-500"></span>
               <span className="text-blue-500 font-bold tracking-[0.2em] text-sm uppercase">
                  Featured Case Studies
               </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Engineering Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Masterpieces.
              </span>
            </h2>
          </div>
          
          <button className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
              View All Projects <ArrowUpRight size={16} />
          </button>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Loop Projects */}
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}

        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 md:hidden text-center">
            <button className="text-sm font-bold text-gray-400 hover:text-white border-b border-gray-600 pb-1">
                View All Projects
            </button>
        </div>

      </div>
    </section>
  );
}

// SUB-COMPONENT: CARD
function ProjectCard({ project, index }) {
  // Tentukan apakah ini kartu "Featured" (Lebar penuh) atau standar
  const isFeatured = project.featured;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`
        group relative bg-[#0B1120] border border-white/10 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all duration-500
        ${isFeatured ? 'lg:col-span-3 md:col-span-2 min-h-[400px] flex flex-col md:flex-row' : 'col-span-1 flex flex-col'}
      `}
    >
        {/* 1. VISUAL AREA (Icon & Gradient) */}
        <div className={`
            relative overflow-hidden p-8 flex items-center justify-center
            ${isFeatured ? 'w-full md:w-2/5 bg-gradient-to-br from-[#0f172a] to-[#020617]' : 'h-48 bg-[#0f172a]'}
        `}>
            {/* Background Gradient Blob */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
            <div className={`absolute w-64 h-64 bg-gradient-to-br ${project.color} blur-[80px] opacity-20 rounded-full group-hover:scale-110 transition-transform duration-700`} />
            
            {/* Main Icon */}
            <div className="relative z-10 w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-md group-hover:scale-105 transition-transform duration-300">
                <project.icon size={40} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center" />
        </div>

        {/* 2. CONTENT AREA */}
        <div className={`
            p-8 flex flex-col justify-between relative
            ${isFeatured ? 'w-full md:w-3/5 border-t md:border-t-0 md:border-l border-white/10' : 'border-t border-white/10 flex-grow'}
        `}>
            <div>
                {/* Header: Category & Client */}
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className={`text-xs font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r ${project.color} mb-1 block`}>
                            {project.category}
                        </span>
                        <div className="flex items-center gap-2 text-gray-400 text-xs font-medium">
                            <Building2 size={12} />
                            {project.client}
                        </div>
                    </div>
                    {/* Arrow Action */}
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all cursor-pointer">
                        <ArrowUpRight size={18} />
                    </div>
                </div>

                {/* Title */}
                <h3 className={`font-black text-white mb-4 leading-tight group-hover:text-blue-200 transition-colors ${isFeatured ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                    {project.title}
                </h3>

                {/* Description (ALWAYS VISIBLE) */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 border-l-2 border-white/10 pl-4">
                    {project.desc}
                </p>
            </div>

            {/* Footer: Tech Stack */}
            <div className="mt-auto">
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300 font-semibold group-hover:border-white/20 transition-colors">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
  );
}