"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
// import Image from "next/image"; // Tidak dipakai, bisa dihapus
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

const programs = [
    {
        emoji: "🌟",
        title: "Rising Star (4–5 Tahun)",
        desc: "Program pengenalan bahasa Inggris dengan pendekatan fun dan natural learning. Anak belajar phonics, warna, dan kata dasar melalui lagu, game, serta aktivitas interaktif.",
        benefit: "Meningkatkan keberanian berbicara dan rasa percaya diri sejak dini.",
    },
    {
        emoji: "🚀",
        title: "Fluent Junior (6–8 Tahun)",
        desc: "Belajar kosakata dan speaking sederhana lewat storytelling, drama, dan games yang interaktif. Guru native membimbing agar anak terbiasa mendengar dan meniru pelafalan yang benar.",
        benefit: "Membantu anak lancar berkomunikasi sehari-hari secara natural.",
    },
    {
        emoji: "📖",
        title: "Fluent Intermediate (9–11 Tahun)",
        desc: "Mengasah kemampuan grammar, reading comprehension, dan writing lewat aktivitas kreatif seperti mini project dan reading club.",
        benefit: "Mempersiapkan anak menghadapi sekolah bilingual atau internasional.",
    },
    {
        emoji: "🎤",
        title: "Fluent Senior (12–14 Tahun)",
        desc: "Fokus pada speaking, essay writing, dan public speaking melalui simulasi debat dan diskusi menarik. Guru memberikan umpan balik personal untuk tiap siswa.",
        benefit: "Meningkatkan kepercayaan diri dalam berpendapat dan berpresentasi.",
    },
    {
        emoji: "🎓",
        title: "Academic Career (15–18 Tahun)",
        desc: "Pelatihan intensif academic writing, critical thinking, dan IELTS introduction bersama tutor berpengalaman dari luar negeri.",
        benefit: "Persiapan matang untuk studi di universitas luar negeri.",
    },
    {
        emoji: "🏆",
        title: "IELTS & TOEFL Preparation",
        desc: "Program intensif dengan simulasi tes real dan coaching strategi dari guru native. Fokus pada listening, reading, writing, dan speaking.",
        benefit: "Membantu siswa mencapai skor 7.0+ dengan progres yang terukur.",
    },
    {
        emoji: "🎙️",
        title: "Public Speaking & Presentation",
        desc: "Pelatihan percaya diri dan komunikasi efektif untuk mahasiswa dan profesional. Diajarkan teknik berbicara, body language, serta storytelling profesional.",
        benefit: "Meningkatkan kemampuan presentasi di kampus maupun dunia kerja.",
    },
];

export default function ProgramKamiSection() {
    const containerRef = useRef(null);

    return (
        <section
            ref={containerRef}
            className='relative py-24 bg-gradient-to-b from-[#fff2c8] via-[#fff8e1] to-[#fffdf6] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden'>
            
            {/* Background glow - tetap sama */}
            <motion.div
                animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 9 }}
                className='absolute top-20 left-16 w-[350px] h-[350px] bg-[#f7b932]/25 blur-3xl rounded-full'
            />
            <motion.div
                animate={{ opacity: [0.25, 0.45, 0.25], scale: [1.1, 1, 1.1] }}
                transition={{ repeat: Infinity, duration: 11 }}
                className='absolute bottom-0 right-10 w-[400px] h-[400px] bg-[#f7b932]/20 blur-3xl rounded-full'
            />

            {/* Title & Description */}
            <div className='max-w-screen-xl mx-auto text-center relative z-10 mb-16 px-6'>
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className='text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6'>
                    Program <span className='text-[#f7b932]'>Kami</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className='text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed'>
                    AJ ThinkLab menawarkan berbagai program belajar bahasa Inggris
                    yang dirancang sesuai usia dan kebutuhan siswa. Setiap program
                    membantu siswa berkembang dari dasar hingga mahir, dengan
                    pendekatan yang menyenangkan dan berorientasi hasil.
                </motion.p>
            </div>

            {/* Program Cards */}
            {/* ✅ Update: alignItems stretch (default grid) agar tinggi kartu sama rata */}
            <div className='max-w-screen-xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 px-6'>
                {programs.map((program, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 60, rotate: 2 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        whileHover={{
                            scale: 1.05,
                            y: -10,
                            rotate: Math.random() * 2 - 1,
                            boxShadow: "0 20px 40px rgba(247,185,50,0.3)",
                        }}
                        // ✅ PERBAIKAN UTAMA DISINI:
                        // 1. Hapus fixed height (h-[250px])
                        // 2. Tambah `h-full` agar kartu mengisi tinggi grid cell
                        // 3. Tambah `min-h-[280px]` untuk estetika minimal tinggi
                        // 4. Hapus width manual (sm:w-[90%]), biarkan grid mengatur lebar
                        className='relative bg-white/85 dark:bg-gray-800/70 backdrop-blur-lg border border-[#f7b932]/20 rounded-3xl shadow-lg p-8 flex flex-col justify-between hover:shadow-[#f7b932]/40 transition-all duration-500 w-full h-full min-h-[280px]'
                    >
                        {/* Floating emoji */}
                        <motion.div
                            animate={{
                                y: [0, -8, 0],
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 5 + idx * 0.3,
                                ease: "easeInOut",
                            }}
                            className='absolute -top-6 left-6 text-4xl'>
                            {program.emoji}
                        </motion.div>

                        {/* Inner Glow */}
                        <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-[#f7b932]/10 to-transparent blur-xl opacity-60' />

                        {/* Card Content */}
                        {/* ✅ Flex grow agar content mengisi ruang kosong dan footer terdorong ke bawah */}
                        <div className='relative z-10 flex flex-col h-full'>
                            <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 mt-2'>
                                {program.title}
                            </h3>
                            <p className='text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base flex-grow'>
                                {program.desc}
                            </p>
                            <motion.p
                                animate={{ opacity: [0.7, 1, 0.7] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                                className='mt-6 text-[#d4a236] font-medium italic text-sm md:text-base'>
                                {program.benefit}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA Button */}
            <div className='mt-20 flex justify-center relative z-10'>
                <Link href="/kelas">
                    <motion.button
                        whileHover={{
                            scale: 1.08,
                            boxShadow: "0 0 25px rgba(247,185,50,0.6)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                            y: [0, -6, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2.5,
                            ease: "easeInOut",
                        }}
                        className='flex items-center gap-3 bg-[#f7b932] text-black font-semibold px-8 py-4 rounded-md text-lg shadow-lg hover:bg-[#f8c63f] transition-all duration-300'>
                        Pilih Kelas
                        <ArrowRightCircle className='w-6 h-6' />
                    </motion.button>
                </Link>
            </div>

            {/* Floating decorative shapes - tetap sama */}
            {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                    key={i}
                    className='absolute rounded-full bg-[#f7b932]/20'
                    style={{
                        width: `${Math.random() * 20 + 10}px`,
                        height: `${Math.random() * 20 + 10}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -15, 0],
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 6 + Math.random() * 4,
                        delay: Math.random() * 2,
                    }}
                />
            ))}
        </section>
    );
}