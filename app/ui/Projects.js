'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Building2 } from 'lucide-react';
import Link from "next/link";

const projects = [
  {
    id: "jare-ai",
    title: "Jare-AI Public Service",
    client: "Kementerian Komunikasi & Digital",
    category: "Government & AI",
    desc: "Sistem Chatbot WhatsApp cerdas berbasis Generative AI (Gemini) untuk pelayanan publik nasional Kementerian.",
    tech: ["Gemini AI", "Next.js", "Big Data"],
    logo: "/images/clients/komdigi.png",
    color: "from-blue-500 to-cyan-400",
    featured: true
  },
  {
    id: "simrs",
    title: "SIMRS Terintegrasi",
    client: "RSUD Drs. H. Amri Tambunan",
    category: "HealthTech / Rumah Sakit",
    desc: "Sistem Informasi Manajemen Rumah Sakit hulu-hilir: Pendaftaran Online, Rekam Medis Elektronik (RME), hingga Klaim BPJS.",
    tech: ["Web App", "PostgreSQL", "Bridging BPJS"],
    logo: "/images/clients/tambunan.png",
    color: "from-emerald-500 to-teal-400",
    featured: false
  },
  {
    id: "dashboard",
    title: "Executive Dashboard",
    client: "Pemkab Serdang Bedagai",
    category: "Smart City / E-Gov",
    desc: "Dashboard monitoring PAD dan serapan anggaran real-time untuk keputusan strategis Bupati.",
    tech: ["Dashboard", "Analytics", "Socket.io"],
    logo: "/images/clients/sergai.png",
    color: "from-violet-500 to-purple-400",
    featured: false
  },
  {
    id: "usu",
    title: "Sistem Manajemen Kampus",
    client: "Universitas Sumatera Utara",
    category: "Education / Kampus",
    desc: "Digitalisasi sistem remunerasi dan penilaian angka kredit (PAK) dosen untuk universitas.",
    tech: ["Web System", "Complex Logic", "MySQL"],
    logo: "/images/clients/usu.png",
    color: "from-orange-500 to-red-400",
    featured: false
  },
];

export default function ProjectShowcase() {
  return (
    <section className="relative w-full py-32 bg-[#020617] overflow-hidden">
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/5 pb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-blue-500"></span>
              <span className="text-blue-500 font-bold tracking-[0.25em] text-sm uppercase">
                Featured Case Studies
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1]">
              Portfolio Proyek & <br />
              <span className="text-blue-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]">
                Studi Kasus Unggulan.
              </span>
            </h2>
          </div>

          <div className="lg:pb-4">
            <p className="text-gray-400 text-lg max-w-md mb-6 leading-relaxed">
              Lihat bagaimana kami membantu instansi pemerintah dan perusahaan swasta melakukan transformasi digital.
            </p>
            <Link href="/portfolio">
              <button className="group flex items-center gap-3 text-base font-bold text-white transition-all">
                <span className="border-b border-blue-500 pb-1 group-hover:border-white transition-colors">
                  Lihat Semua Proyek
                </span>
                <ArrowUpRight size={20} className="text-blue-500 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const isFeatured = project.featured;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`group relative bg-[#0B1120] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-white/20 transition-all duration-500 shadow-2xl ${isFeatured ? "lg:col-span-3 md:col-span-2 min-h-[500px] flex flex-col lg:flex-row" : "col-span-1 flex flex-col min-h-[450px]"}`}
    >
      <div className={`relative overflow-hidden p-8 flex items-center justify-center ${isFeatured ? "w-full lg:w-5/12 bg-gradient-to-br from-[#0f172a] to-[#020617]" : "h-64 bg-[#0f172a]"}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-[0.08] group-hover:opacity-20 transition-opacity duration-700`} />
        <div className="relative z-10 w-36 h-36 bg-white/10 border border-white/10 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur-md group-hover:-translate-y-3 transition-transform duration-500 overflow-hidden">
          <div className="relative w-24 h-24">
            <Image src={project.logo} alt={`Logo ${project.client} - Portfolio Dania`} fill className="object-contain transition-transform duration-500 group-hover:scale-110" />
          </div>
        </div>
      </div>

      <div className={`p-5 flex flex-col relative ${isFeatured ? "w-full lg:w-7/12 border-t lg:border-t-0 lg:border-l border-white/5" : "border-t border-white/5 flex-grow"}`}>
        <div className="mb-8">
          <div className="inline-flex items-center gap-4 bg-white/[0.03] border border-white/10 p-2 pr-6 rounded-full group-hover:bg-white/[0.08] group-hover:border-white/20 transition-all duration-300">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
              <Building2 size={18} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-0.5">Klien</span>
              <span className="text-white font-bold text-sm md:text-base leading-none">{project.client}</span>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <span className={`text-xs font-bold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r ${project.color} mb-3 block`}>
            {project.category}
          </span>
          <h3 className={`font-black text-white leading-[1.1] group-hover:text-blue-100 transition-colors ${isFeatured ? "text-4xl lg:text-5xl" : "text-3xl"}`}>
            {project.title}
          </h3>
        </div>
        <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-xl">{project.desc}</p>
        <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span key={i} className="px-4 py-2 rounded-lg bg-[#1e293b]/50 border border-white/10 text-xs font-mono text-gray-300 font-semibold group-hover:border-white/30 transition-colors">{t}</span>
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