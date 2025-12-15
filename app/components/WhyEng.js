"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
	FaGlobeAmericas,
	FaUserTie,
	FaHandshake,
	FaBookReader,
	FaLanguage,
} from "react-icons/fa";

const reasons = [
	{
		icon: FaGlobeAmericas,
		title: "Bahasa Global Nomor Satu 🌍",
		desc: "Lebih dari 1,5 miliar orang di dunia menggunakan bahasa Inggris sebagai alat komunikasi utama. Menguasainya membuka peluang tanpa batas — dari akademik, bisnis, hingga perjalanan lintas negara.",
	},
	{
		icon: FaUserTie,
		title: "Kunci Karier Internasional 💼",
		desc: "Perusahaan global mencari talenta yang mampu berkomunikasi lintas budaya. Bahasa Inggris bukan hanya nilai tambah, tapi juga syarat utama untuk posisi profesional berkelas dunia.",
	},
	{
		icon: FaHandshake,
		title: "Percaya Diri di Dunia Modern 🤝",
		desc: "Kemampuan berbahasa Inggris meningkatkan rasa percaya diri saat berbicara, presentasi, maupun berkolaborasi lintas negara.",
	},
	{
		icon: FaBookReader,
		title: "Akses Ilmu Pengetahuan Tak Terbatas 📚",
		desc: "Sebagian besar literatur akademik, jurnal penelitian, dan kursus top dunia tersedia dalam bahasa Inggris. Belajar berarti membuka pintu menuju ilmu global tanpa batas.",
	},
	{
		icon: FaLanguage,
		title: "Investasi Masa Depanmu 💰",
		desc: "Bahasa Inggris bukan sekadar pelajaran, tapi keterampilan hidup yang memberi nilai jangka panjang — dari pendidikan, pekerjaan, hingga gaya hidup modern.",
	},
];

export default function WhyEnglishSection() {
	return (
		<section className='relative overflow-hidden py-24 bg-gradient-to-b from-[#fff2e5] via-[#fff8e1] to-[#fffef9] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950'>
			{/* Background Glow Effects */}
			<motion.div
				animate={{ opacity: [0.25, 0.4, 0.25], scale: [1, 1.05, 1] }}
				transition={{ repeat: Infinity, duration: 8 }}
				className='absolute top-20 left-20 w-[350px] h-[350px] bg-[#f7b932]/25 blur-3xl rounded-full'
			/>
			<motion.div
				animate={{ opacity: [0.3, 0.45, 0.3], scale: [1, 1.1, 1] }}
				transition={{ repeat: Infinity, duration: 10 }}
				className='absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#f7b932]/20 blur-3xl rounded-full'
			/>

			{/* Container */}
			<div className='max-w-screen-2xl mx-auto flex flex-col-reverse xl:flex-row items-center justify-between gap-20 px-6 lg:px-12 relative z-10'>
				{/* LEFT SIDE - Text Content */}
				<motion.div
					initial={{ x: -60, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className='flex-1'>
					<h2 className='text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 text-center lg:text-left leading-tight'>
						Mengapa Harus{" "}
						<span className='text-[#f7b932]'>
							Belajar Bahasa Inggris?
						</span>
					</h2>
					<p className='text-gray-700 dark:text-gray-300 mb-10 text-lg leading-relaxed text-center lg:text-left'>
						Bahasa Inggris adalah kunci komunikasi global di era digital.
						Dengan menguasainya, kamu membuka pintu untuk pendidikan,
						karier, dan kesempatan di seluruh dunia. Berikut alasan
						mengapa belajar bahasa Inggris sangat penting di zaman modern:
					</p>

					<div className='flex flex-col gap-8'>
						{reasons.map((item, idx) => {
							const Icon = item.icon;
							return (
								<motion.div
									key={idx}
									initial={{ opacity: 0, x: -30 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{
										duration: 0.6,
										delay: idx * 0.15,
										ease: "easeOut",
									}}
									whileHover={{
										scale: 1.04,
										y: -3,
										boxShadow: "0 15px 35px rgba(247,185,50,0.25)",
									}}
									className='flex items-start gap-4 rounded-2xl p-5 backdrop-blur-md border border-[#f7b932]/20 shadow-[0_4px_20px_rgba(0,0,0,0.05)] bg-gradient-to-br from-[#fff7da]/90 to-[#fff2c8]/90 dark:from-gray-800/70 dark:to-gray-900/70 transition-all'>
									<motion.div
										animate={{
											rotate: [0, 5, -5, 0],
											scale: [1, 1.1, 1],
										}}
										transition={{
											repeat: Infinity,
											duration: 4 + idx,
											ease: "easeInOut",
										}}
										className='flex items-center justify-center w-12 h-12 rounded-xl bg-[#f7b932] text-white flex-shrink-0 shadow-md'>
										<Icon className='w-6 h-6' />
									</motion.div>
									<div>
										<h3 className='text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1'>
											{item.title}
										</h3>
										<p className='text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed'>
											{item.desc}
										</p>
									</div>
								</motion.div>
							);
						})}
					</div>
				</motion.div>

				{/* RIGHT SIDE - Image */}
				<motion.div
					initial={{ x: 60, opacity: 0, scale: 0.95 }}
					whileInView={{ x: 0, opacity: 1, scale: 1 }}
					transition={{ duration: 1, ease: "easeOut" }}
					whileHover={{ scale: 1.03, rotate: 1 }}
					className='flex-1 flex justify-center lg:justify-end relative'>
					<motion.div
						animate={{ y: [0, -10, 0] }}
						transition={{
							repeat: Infinity,
							duration: 5,
							ease: "easeInOut",
						}}
						className='relative'>
						<Image
							src='/images/talk_eng.svg'
							alt='Belajar Bahasa Inggris'
							width={800}
							height={800}
							className='object-cover'
						/>
						<motion.div
							animate={{ scale: [1, 1.05, 1] }}
							transition={{ repeat: Infinity, duration: 6 }}
							className='absolute inset-0 bg-[#f7b932]/10 blur-2xl rounded-3xl'
						/>
					</motion.div>
				</motion.div>
			</div>

			{/* Floating golden dots background */}
			{Array.from({ length: 12 }).map((_, i) => (
				<motion.div
					key={i}
					className='absolute bg-[#f7b932]/20 rounded-full'
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
