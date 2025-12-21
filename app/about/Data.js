'use client';

import React from 'react';
import Navbar from '@/ui/Navbar';
import Footer from '@/ui/Footer';
import { motion } from 'framer-motion';
import { 
  Target, Shield, Globe2, Rocket, 
  ArrowUpRight, Cpu, CheckCircle2 
} from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-[#020617] min-h-screen text-white selection:bg-blue-500 selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
           <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="mb-8"
           >
              {/* H1 SEO OPTIMIZED: Mengandung Lokasi & Tahun */}
              <h1 className="text-blue-500 font-bold tracking-[0.2em] text-sm uppercase block mb-4">
                Konsultan IT Terpercaya Sejak 2017
              </h1>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight">
                Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Digital Future.
                </span>
              </h2>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12"
           >
              {/* PARAGRAF SEO HERO: Keyword Utama */}
              <p className="text-xl text-gray-400 leading-relaxed">
                <strong className="text-white">PT. Dania Multi Prima</strong> adalah perusahaan <strong className="text-white">Konsultan IT</strong> dan <strong className="text-white">Software House</strong> profesional. Kami mengintegrasikan rekayasa perangkat lunak, <strong className="text-white">Keamanan Siber</strong>, dan <strong className="text-white">Solusi AI</strong> untuk membangun infrastruktur digital masa depan.
              </p>
              <div className="flex items-center gap-4 text-sm font-bold text-white/50">
                 <div className="h-px flex-1 bg-white/10" />
                 <span>ESTABLISHED IN INDONESIA</span>
              </div>
           </motion.div>
        </div>
      </section>

      {/* --- SPACIOUS BENTO GRID --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[minmax(300px,auto)]">
            
            {/* 1. VISION CARD */}
            <BentoCard className="md:col-span-2 bg-gradient-to-br from-[#0B1120] to-[#020617]">
               <div className="flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start mb-8">
                     <Badge text="OUR VISION" icon={Rocket} />
                     <ArrowUpRight className="text-white/20 w-8 h-8" />
                  </div>
                  <div>
                     <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-white">
                        Menjadi mitra teknologi terpercaya yang mendorong transformasi digital berkelanjutan melalui inovasi dan solusi cerdas bagi Pemerintah dan Swasta.
                     </h3>
                  </div>
               </div>
            </BentoCard>

            {/* 2. STATS CARD */}
            <BentoCard className="bg-blue-600 border-none relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />
               <div className="flex flex-col justify-center h-full items-center text-center relative z-10">
                  <span className="text-8xl font-black text-white tracking-tighter">08<span className="text-4xl align-top">+</span></span>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200 mt-2">Years Experience</p>
               </div>
            </BentoCard>

            {/* 3. MISSION CARD */}
            <BentoCard className="bg-[#0B1120] flex flex-col justify-between">
               <div className="flex flex-col h-full">
                  <Badge text="OUR MISSION" icon={Target} />
                  <div className="mt-6 space-y-6 flex-grow">
                     <MissionItem text="Jasa Pembuatan Aplikasi Custom (Web & Mobile)." cite="83" />
                     <MissionItem text="Pengembangan Sistem Smart City & SIMRS." cite="84" />
                     <MissionItem text="Implementasi Keamanan Siber & AI." cite="85" />
                     <MissionItem text="Layanan Maintenance & IT Support 24/7." cite="86" />
                  </div>
               </div>
            </BentoCard>

            {/* 4. WHO WE ARE (SEO CONTENT TERKUAT DISINI) */}
            <BentoCard className="md:col-span-2 bg-[#0B1120] relative overflow-hidden flex flex-col justify-between">
               <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center" />
               <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <Badge text="WHO WE ARE" icon={Globe2} />
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-400 text-lg leading-relaxed">
                        <p>
                            Sebagai <strong className="text-white">Vendor IT Terpercaya</strong>, kami telah menangani 50+ proyek strategis mulai dari <strong className="text-white">Sistem Pemerintahan (SPBE)</strong>, Rumah Sakit, hingga Perusahaan Multinasional.
                        </p>
                        <p>
                            Kami menyediakan layanan *End-to-End*: mulai dari konsultasi, perancangan sistem, <strong className="text-white">Pembuatan Aplikasi Android/iOS</strong>, hingga integrasi server dan cloud yang aman.
                        </p>
                    </div>
                  </div>
                  
                  <div className="mt-12 flex gap-12 border-t border-white/10 pt-8">
                     <div>
                        <div className="text-3xl font-black text-white">50+</div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Enterprise Projects</div>
                     </div>
                     <div>
                        <div className="text-3xl font-black text-white">18+</div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">IT Solutions</div>
                     </div>
                  </div>
               </div>
            </BentoCard>

            {/* 5. CORE VALUES */}
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
               <ValueCard 
                  title="Full Customization" 
                  desc="Kami tidak percaya 'satu solusi untuk semua'. Setiap sistem dirancang unik sesuai kebutuhan bisnis Anda."
                  icon={Cpu}
               />
               <ValueCard 
                  title="Cyber Security Ready" 
                  desc="Keamanan siber adalah prioritas utama. Sistem kami dirancang dengan standar keamanan tinggi."
                  icon={Shield}
               />
               <ValueCard 
                  title="Integrated Ecosystem" 
                  desc="Layanan satu pintu: Jasa Pembuatan Website, Mobile Apps, AI, hingga Infrastruktur Server."
                  icon={Globe2}
               />
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 border-t border-white/5 bg-[#050505]">
         <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
               Butuh Jasa Pembuatan Aplikasi?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
               Diskusikan visi digital Anda bersama tim ahli Dania Multi Prima sekarang juga.
            </p>
            <a 
               href="/contacts"
               className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
               Hubungi Kami <ArrowUpRight size={20} />
            </a>
         </div>
      </section>

      <Footer />
    </main>
  );
}

// --- SUB-COMPONENTS (SAMA SEPERTI SEBELUMNYA) ---

function BentoCard({ children, className }) {
   return (
      <motion.div 
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
         className={`p-10 md:p-12 rounded-[2.5rem] border border-white/10 hover:border-white/20 transition-colors duration-500 ${className}`}
      >
         {children}
      </motion.div>
   )
}

function Badge({ text, icon: Icon }) {
   return (
      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400">
         <Icon size={16} />
         <span className="text-xs font-bold uppercase tracking-[0.2em]">{text}</span>
      </div>
   )
}

function MissionItem({ text, cite }) {
   return (
      <div className="flex gap-4 group">
         <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
            <CheckCircle2 size={14} />
         </div>
         <p className="text-gray-400 leading-relaxed group-hover:text-white transition-colors">
            {text} <span className="text-[10px] text-gray-600 align-super"></span>
         </p>
      </div>
   )
}

function ValueCard({ title, desc, icon: Icon }) {
   return (
      <div className="bg-[#0B1120] p-10 rounded-[2rem] border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
         <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg">
            <Icon size={28} />
         </div>
         <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
         <p className="text-gray-400 leading-relaxed">{desc}</p>
      </div>
   )
}