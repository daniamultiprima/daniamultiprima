"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
	GraduationCap,
	Clock,
	Users,
	BookOpen,
	Award,
	Laptop,
} from "lucide-react";

const features = [
	{
		icon: GraduationCap,
		title: "Guru Profesional",
		desc: "Belajar langsung bersama pengajar native dan bilingual berpengalaman dari berbagai negara. Setiap sesi dirancang agar kamu aktif berbicara dan percaya diri menggunakan bahasa Inggris.",
		color: "bg-[#fff3de]/70 dark:bg-[#3a3000]/40",
	},
	{
		icon: Clock,
		title: "Fleksibel & Praktis",
		desc: "Atur jadwal belajarmu sesuai kebutuhan! Sistem online kami memungkinkan kamu belajar kapan saja, tanpa mengganggu rutinitas harian.",
		color: "bg-[#ffeac5]/70 dark:bg-[#3b2e00]/40",
	},
	{
		icon: Users,
		title: "Kelas Kecil & Fokus",
		desc: "Setiap kelas terdiri dari jumlah siswa terbatas agar kamu mendapatkan perhatian penuh dari pengajar dan lebih banyak waktu berbicara.",
		color: "bg-[#fff5da]/70 dark:bg-[#403100]/40",
	},
	{
		icon: BookOpen,
		title: "Kurikulum Terstruktur",
		desc: "Materi pembelajaran disusun berdasarkan kurikulum internasional (CEFR & Cambridge English), menyesuaikan level dan tujuan belajarmu.",
		color: "bg-[#fff1d4]/70 dark:bg-[#3a3100]/40",
	},
	{
		icon: Award,
		title: "Sertifikat Resmi",
		desc: "Dapatkan sertifikat resmi AJ ThinkLab sebagai bukti pencapaian dan peningkatan kemampuan bahasa Inggrismu secara profesional.",
		color: "bg-[#ffecc9]/70 dark:bg-[#3b3000]/40",
	},
	{
		icon: Laptop,
		title: "100% Online & Interaktif",
		desc: "Nikmati pembelajaran interaktif langsung dari rumah. Belajar jadi fleksibel tanpa stres, macet, atau keterbatasan lokasi.",
		color: "bg-[#fff6e0]/70 dark:bg-[#2f2700]/40",
	},
];

export default function WhyThinkLabSection() {
	return (
		<section className='relative py-24 overflow-hidden bg-gradient-to-b from-[#fff0d1] via-[#ffe9ba] to-[#fffaf0] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950'>
			{/* Background Glow */}
			<motion.div
				animate={{ opacity: [0.25, 0.4, 0.25], scale: [1, 1.05, 1] }}
				transition={{ repeat: Infinity, duration: 8 }}
				className='absolute top-20 left-20 w-[300px] h-[300px] bg-[#f8b83c]/25 blur-3xl rounded-full'
			/>
			<motion.div
				animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.1, 1] }}
				transition={{ repeat: Infinity, duration: 10 }}
				className='absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#f7b932]/25 blur-3xl rounded-full'
			/>

			{/* Container */}
			<div className='max-w-screen-2xl mx-auto px-6 lg:px-12 flex flex-col xl:flex-row items-center gap-10 xl:gap-16 relative z-10'>
				{/* Left Illustration */}
				<motion.div
					animate={{ y: [0, -10, 0], rotate: [0, 1, -1, 0] }}
					transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
					className='flex-1 flex justify-center'>
					<Image
						src='/images/why_aj.svg'
						alt='Mengapa AJ ThinkLab'
						width={700}
						height={700}
						className='drop-shadow-2xl'
					/>
				</motion.div>

				{/* Right Content */}
				<motion.div
					initial={{ x: 50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 1, ease: "easeOut" }}
					className='flex-1'>
					<h2 className='text-center xl:text-left text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8'>
						Kenapa Harus{" "}
						<span className='text-[#f8b83c]'>AJ ThinkLab?</span>
					</h2>

					<p className='text-center xl:text-left text-gray-700 dark:text-gray-300 mb-10 text-lg leading-relaxed xl:max-w-lg'>
						Kami percaya bahwa belajar bahasa Inggris harus seru,
						interaktif, dan berorientasi hasil. Di AJ ThinkLab, kamu tidak
						hanya belajar teori — kamu membangun kepercayaan diri untuk
						berbicara dan berpikir global.
					</p>

					{/* Cards */}
					<div className='grid sm:grid-cols-2 gap-6'>
						{features.map((feature, idx) => {
							const Icon = feature.icon;
							return (
								<motion.div
									key={idx}
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									whileHover={{
										scale: 1.07,
										y: -5,
										boxShadow: "0 15px 35px rgba(248,184,60,0.25)",
									}}
									transition={{ duration: 0.6, delay: idx * 0.1 }}
									className={`${feature.color} rounded-2xl p-6 backdrop-blur-md border border-white/40 dark:border-gray-700 shadow-lg hover:shadow-[#f8b83c]/40 transition-all`}>
									<div className='flex items-center gap-3 mb-3'>
										<motion.div
											animate={{
												y: [0, -4, 0],
												scale: [1, 1.1, 1],
												rotate: [0, 5, -5, 0],
											}}
											transition={{
												repeat: Infinity,
												duration: 5 + idx,
												ease: "easeInOut",
											}}
											className='p-3 bg-gradient-to-br from-[#f8b83c] to-[#facc15] rounded-xl shadow-inner'>
											<Icon className='w-6 h-6 text-white' />
										</motion.div>
										<h3 className='text-lg font-bold text-gray-900 dark:text-white'>
											{feature.title}
										</h3>
									</div>
									<p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300'>
										{feature.desc}
									</p>
								</motion.div>
							);
						})}
					</div>
				</motion.div>
			</div>

			{/* Floating Decorative Dots */}
			{Array.from({ length: 12 }).map((_, i) => (
				<motion.div
					key={i}
					className='absolute bg-[#f8b83c]/25 rounded-full'
					style={{
						width: `${Math.random() * 18 + 8}px`,
						height: `${Math.random() * 18 + 8}px`,
						top: `${Math.random() * 100}%`,
						left: `${Math.random() * 100}%`,
					}}
					animate={{
						y: [0, -15, 0],
						opacity: [0.3, 0.6, 0.3],
					}}
					transition={{
						repeat: Infinity,
						duration: 5 + Math.random() * 5,
						delay: Math.random() * 2,
					}}
				/>
			))}
		</section>
	);
}
