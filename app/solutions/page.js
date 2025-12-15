'use client';

import React from 'react';
import Navbar from '@/ui/Navbar';
import Footer from '@/ui/Footer';
import { motion } from 'framer-motion';
import { 
  Building2, Stethoscope, GraduationCap, Briefcase, 
  ArrowRight, CheckCircle2, LineChart, Activity, 
  BookOpen, ShoppingCart 
} from 'lucide-react';

// --- DATA SOLUSI (DARI PDF) ---
const industries = [
  {
    id: "gov",
    title: "Government & Smart City",
    subtitle: "Digitalisasi Birokrasi & Pelayanan Publik",
    desc: "Membangun ekosistem pemerintahan yang transparan, berbasis data, dan melayani warga secara real-time.",
    icon: Building2,
    color: "blue",
    gradient: "from-blue-600 to-cyan-500",
    stats: "Telah diterapkan di Pemkab Serdang Bedagai, Agam, & Binjai [cite: 312, 315, 251]",
    features: [
      { title: "Executive Dashboard", desc: "Pantau PAD (Pendapatan Asli Daerah) & serapan anggaran real-time." }, // [cite: 315]
      { title: "Smart City Apps", desc: "Aplikasi pelaporan warga (E-Mas) & layanan publik terpadu." }, // [cite: 251]
      { title: "E-Office / Tata Naskah", desc: "Disposisi surat & tanda tangan elektronik digital." }, // [cite: 258]
      { title: "JDIH & Arsip Digital", desc: "Manajemen produk hukum dan dokumentasi daerah." } // [cite: 202]
    ]
  },
  {
    id: "health",
    title: "Healthcare System",
    subtitle: "Transformasi Digital Rumah Sakit (RSUD/Swasta)",
    desc: "Solusi end-to-end untuk efisiensi operasional medis, keselamatan pasien, dan integrasi asuransi.",
    icon: Stethoscope,
    color: "emerald",
    gradient: "from-emerald-600 to-teal-500",
    stats: "Dipercaya oleh RSUD Amri Tambunan & RS Prima Vision [cite: 163, 268]",
    features: [
      { title: "SIMRS Terintegrasi", desc: "Rekam medis elektronik (EMR) hulu ke hilir." }, // [cite: 166]
      { title: "BPJS Bridging V-Claim", desc: "Klaim BPJS otomatis tanpa input ulang manual." }, // [cite: 169]
      { title: "IoT Nurse Call", desc: "Sistem pemanggil perawat berbasis hardware IoT." }, // [cite: 329]
      { title: "E-Prescription", desc: "Resep obat digital terhubung langsung ke Farmasi." } // [cite: 166]
    ]
  },
  {
    id: "edu",
    title: "Education Technology",
    subtitle: "Sistem Manajemen Kampus & Sekolah",
    desc: "Modernisasi tata kelola akademik untuk Universitas dan Politeknik menuju World Class University.",
    icon: GraduationCap,
    color: "orange",
    gradient: "from-orange-500 to-red-500",
    stats: "Implementasi di USU, Poltekbang Medan & SMKN 1 Binjai [cite: 171, 191, 303]",
    features: [
      { title: "Sistem PAK Dosen", desc: "Penilaian Angka Kredit dosen otomatis & transparan." }, // [cite: 191]
      { title: "Academic Portal", desc: "KRS, KHS, dan pembayaran UKT mahasiswa online." }, // [cite: 245]
      { title: "E-Library & Repository", desc: "Digitalisasi perpustakaan dan jurnal ilmiah (OJS)." }, // [cite: 182, 186]
      { title: "Remunerasi Sistem", desc: "Perhitungan tunjangan kinerja pegawai berbasis data." } // [cite: 236]
    ]
  },
  {
    id: "biz",
    title: "Enterprise Business",
    subtitle: "Automasi Bisnis Retail & Korporasi",
    desc: "Acelerate pertumbuhan bisnis dengan sistem manajemen yang mengurangi human-error dan meningkatkan profit.",
    icon: Briefcase,
    color: "purple",
    gradient: "from-violet-600 to-purple-500",
    stats: "Solusi untuk Retail, Cafe, dan E-Commerce [cite: 211, 266, 332]",
    features: [
      { title: "Custom ERP & CRM", desc: "Manajemen stok, keuangan, dan pelanggan terpusat." }, // [cite: 136]
      { title: "POS (Point of Sales)", desc: "Sistem kasir modern untuk Cafe & Resto." }, // [cite: 266]
      { title: "E-Commerce Web", desc: "Toko online dengan integrasi Payment Gateway." }, // [cite: 333]
      { title: "Procurement System", desc: "Digitalisasi pengadaan barang dan inventaris." } // [cite: 124]
    ]
  }
];

export default function SolutionsPage() {
  return (
    <main className="bg-[#020617] min-h-screen text-white selection:bg-blue-500 selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6 border-b border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Sector Expertise
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8"
          >
            Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Critical Sectors.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Kami memahami DNA setiap industri. Dari birokrasi pemerintahan hingga kompleksitas medis, sistem kami dirancang untuk memecahkan masalah spesifik Anda.
          </motion.p>
        </div>
      </section>

      {/* --- INDUSTRY SECTIONS (STICKY LAYOUT) --- */}
      <div className="relative">
        {industries.map((industry, index) => (
          <IndustrySection key={industry.id} data={industry} index={index} />
        ))}
      </div>

      {/* --- CTA SECTION --- */}
      <section className="py-32 px-6 bg-[#020617]">
         <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#0B1120] to-[#0f172a] border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            {/* Glow BG */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/5 blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
               <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Industri Anda Tidak Ada di List?
               </h2>
               <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                  Jangan khawatir. Keahlian inti kami adalah <strong>Custom Development</strong>. Kami bisa membangun solusi untuk logistik, manufaktur, pertambangan, dan lainnya.
               </p>
               <a 
                 href="/contact"
                 className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
               >
                 Diskusikan Kebutuhan Anda <ArrowRight size={20} />
               </a>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}

// --- COMPONENT: INDUSTRY SECTION ---
function IndustrySection({ data, index }) {
  // Menentukan warna aksen berdasarkan data
  const accentColors = {
    blue: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    emerald: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    orange: "text-orange-400 border-orange-500/30 bg-orange-500/10",
    purple: "text-purple-400 border-purple-500/30 bg-purple-500/10",
  };

  const currentAccent = accentColors[data.color];

  return (
    <section className="sticky top-0 min-h-screen flex items-center bg-[#020617] border-t border-white/5 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: TEXT CONTENT */}
        <div className="relative z-10 order-2 lg:order-1">
           {/* Badge Category */}
           <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 ${currentAccent}`}>
              <data.icon size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">{data.title}</span>
           </div>

           <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
             {data.subtitle}
           </h2>
           <p className="text-gray-400 text-lg mb-8 leading-relaxed border-l-2 border-white/10 pl-6">
             {data.desc}
           </p>

           {/* Features Grid */}
           <div className="grid grid-cols-1 gap-6">
              {data.features.map((feat, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  key={i} 
                  className="flex gap-4 group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#0B1120] border border-white/10 group-hover:border-white/30 transition-colors`}>
                     <CheckCircle2 size={20} className={data.color === 'blue' ? 'text-blue-400' : data.color === 'emerald' ? 'text-emerald-400' : data.color === 'orange' ? 'text-orange-400' : 'text-purple-400'} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-white transition-colors">
                      {feat.title}
                    </h4>
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
           </div>
           
           {/* Citation / Stats Small */}
           <div className="mt-10 text-xs font-mono text-gray-600 uppercase tracking-widest">
              Success Story: {data.stats}
           </div>
        </div>

        {/* RIGHT: VISUAL REPRESENTATION (Abstract Dashboard) */}
        <div className="relative z-10 order-1 lg:order-2 h-[500px] w-full">
           <div className={`absolute inset-0 bg-gradient-to-br ${data.gradient} opacity-20 blur-[100px] rounded-full`} />
           
           <motion.div 
             initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
             whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="relative h-full w-full bg-[#0B1120]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
           >
              {/* Header Visual */}
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                 </div>
                 <div className="px-3 py-1 rounded-full bg-white/5 text-[10px] text-gray-400 font-mono">
                    SYSTEM_STATUS: ONLINE
                 </div>
              </div>

              {/* Dynamic Abstract Content based on Industry */}
              <div className="grid grid-cols-2 gap-4 h-[300px]">
                 {/* Card 1 */}
                 <div className="bg-white/5 rounded-2xl p-4 flex flex-col justify-between border border-white/5">
                    <data.icon size={32} className={`text-${data.color}-400 opacity-50`} />
                    <div>
                       <div className="text-2xl font-bold text-white">99.9%</div>
                       <div className="text-[10px] text-gray-500 uppercase">Uptime</div>
                    </div>
                 </div>
                 {/* Card 2 (Graph) */}
                 <div className="bg-white/5 rounded-2xl p-4 relative overflow-hidden border border-white/5">
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent" />
                    <div className="flex items-end justify-between h-full gap-1 pb-2">
                       {[40, 70, 50, 90, 60, 80].map((h, k) => (
                          <motion.div 
                            key={k} 
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            transition={{ delay: 0.5 + (k * 0.1), duration: 1 }}
                            className={`w-full rounded-t-sm bg-gradient-to-t ${data.gradient}`} 
                          />
                       ))}
                    </div>
                 </div>
                 {/* Card 3 (Long) */}
                 <div className="col-span-2 bg-white/5 rounded-2xl p-4 flex items-center justify-between border border-white/5">
                    <div className="flex items-center gap-3">
                       <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${data.gradient}`}>
                          <CheckCircle2 size={20} className="text-white" />
                       </div>
                       <div>
                          <div className="text-sm font-bold text-white">System Integrated</div>
                          <div className="text-[10px] text-gray-500">All modules connected</div>
                       </div>
                    </div>
                    <div className="text-xs font-mono text-gray-400">Ver 2.0</div>
                 </div>
              </div>

           </motion.div>
        </div>

      </div>
    </section>
  );
}