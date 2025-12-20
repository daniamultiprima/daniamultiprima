'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Building2, 
  Bot, 
  Stethoscope, 
  Landmark, 
  GraduationCap
} from 'lucide-react';

import Link from "next/link"

const projects = [
  {
    id: "jare-ai",
    title: "Jare-AI Public Service",
    client: "Kementerian Komunikasi & Digital", 
    category: "AI Government Solutions",
    desc: "Sistem Chatbot WhatsApp cerdas untuk pelayanan publik nasional. Mengintegrasikan Data Warehouse Kementerian dengan Generative AI (Gemini).",
    tech: ["Next.js", "Gemini API", "PostgreSQL"],
    icon: Bot,
    color: "from-blue-500 to-cyan-400",
    featured: true 
  },
  {
    id: "simrs",
    title: "Smart Hospital System",
    client: "RSUD Drs. H. Amri Tambunan",
    category: "HealthTech Ecosystem",
    desc: "Transformasi digital rumah sakit menyeluruh. Pendaftaran pasien online, rekam medis elektronik (EMR), hingga integrasi klaim BPJS.",
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
    desc: "Dashboard monitoring real-time untuk Bupati. Visualisasi data PAD dan serapan anggaran dinas dalam satu layar eksekutif.",
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
    desc: "Digitalisasi tata kelola kampus masif: Sistem Penilaian Angka Kredit (PAK) Dosen dan Remunerasi.",
    tech: ["Laravel", "MySQL", "Rest API"],
    icon: GraduationCap,
    color: "from-orange-500 to-red-400",
    featured: false
  }
];

export default function ProjectShowcase() {
  return (
    <section className="relative w-full py-32 bg-[#020617] overflow-hidden">
      
      {/* Background Glow - Diperbesar agar ambience lebih terasa */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />

      {/* CONTAINER UTAMA - Dibuat jauh lebih lebar (1600px) */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/5 pb-10">
          <div className="max-w-3xl">
             <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-blue-500"></span>
                <span className="text-blue-500 font-bold tracking-[0.25em] text-sm uppercase">
                  Featured Case Studies
                </span>
             </div>
             <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1]">
               Engineering Digital <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
                 Masterpieces.
               </span>
             </h2>
          </div>
          
          <div className="lg:pb-4">
             <p className="text-gray-400 text-lg max-w-md mb-6 leading-relaxed">
                Kami membangun solusi skala enterprise yang digunakan oleh industri, private sector, instansi pemerintah dan universitas top di Indonesia.
             </p>
             <Link href="/portfolio">
                <button className="group flex items-center gap-3 text-base font-bold text-white transition-all">
                    <span className="border-b border-blue-500 pb-1 group-hover:border-white transition-colors">View All Projects</span>
                    <ArrowUpRight size={20} className="text-blue-500 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
            </Link>
          </div>
        </div>

        {/* GRID LAYOUT - Gap diperbesar jadi gap-10 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

// SUB-COMPONENT: CARD
function ProjectCard({ project, index }) {
  const isFeatured = project.featured;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`
        group relative bg-[#0B1120] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-white/20 transition-all duration-500 shadow-2xl
        ${isFeatured ? 'lg:col-span-3 md:col-span-2 min-h-[500px] flex flex-col lg:flex-row' : 'col-span-1 flex flex-col min-h-[450px]'}
      `}
    >
        {/* 1. VISUAL AREA */}
        <div className={`
            relative overflow-hidden p-10 flex items-center justify-center
            ${isFeatured ? 'w-full lg:w-5/12 bg-gradient-to-br from-[#0f172a] to-[#020617]' : 'h-64 bg-[#0f172a]'}
        `}>
            {/* Background Effects */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-[0.08] group-hover:opacity-20 transition-opacity duration-700`} />
            <div className={`absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br ${project.color} blur-[100px] opacity-20 rounded-full group-hover:scale-125 transition-transform duration-1000`} />
            
            {/* Main Icon (Floating) */}
            <div className="relative z-10 w-28 h-28 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur-md group-hover:-translate-y-3 transition-transform duration-500">
                <project.icon strokeWidth={1.5} size={56} className="text-white/90 drop-shadow-lg" />
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 bg-center" />
        </div>

        {/* 2. CONTENT AREA */}
        <div className={`
            p-10 flex flex-col relative
            ${isFeatured ? 'w-full lg:w-7/12 border-t lg:border-t-0 lg:border-l border-white/5' : 'border-t border-white/5 flex-grow'}
        `}>
            
            {/* CLIENT BADGE - LEBIH PROMINENT */}
            <div className="mb-8">
                <div className="inline-flex items-center gap-4 bg-white/[0.03] border border-white/10 p-2 pr-6 rounded-full group-hover:bg-white/[0.08] group-hover:border-white/20 transition-all duration-300">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                        <Building2 size={18} className="text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-0.5">
                            Official Partner
                        </span>
                        <span className="text-white font-bold text-sm md:text-base leading-none">
                            {project.client}
                        </span>
                    </div>
                </div>
            </div>

            {/* Title Block */}
            <div className="mb-6">
                 <span className={`text-xs font-bold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r ${project.color} mb-3 block`}>
                    {project.category}
                </span>
                <h3 className={`font-black text-white leading-[1.1] group-hover:text-blue-100 transition-colors ${isFeatured ? 'text-4xl lg:text-5xl' : 'text-3xl'}`}>
                    {project.title}
                </h3>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-xl">
                {project.desc}
            </p>

            {/* Footer */}
            <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                        <span key={i} className="px-4 py-2 rounded-lg bg-[#1e293b]/50 border border-white/10 text-xs font-mono text-gray-300 font-semibold group-hover:border-white/30 transition-colors">
                            {t}
                        </span>
                    ))}
                </div>
                
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 cursor-pointer shadow-lg">
                    <ArrowUpRight size={22} />
                </div>
            </div>
        </div>
    </motion.div>
  );
}