"use client";
import { motion } from "framer-motion";
import {
	FaWpforms,
	FaClock,
	FaChalkboardTeacher,
	FaChartLine,
} from "react-icons/fa";

const steps = [
	{
		icon: FaWpforms,
		title: "Isi Formulir Free Trial",
		desc: "Lengkapi formulir singkat untuk mendapatkan sesi uji coba gratis. Tim kami akan segera menghubungimu dan menyesuaikan level bahasa Inggris sesuai kemampuanmu.",
	},
	{
		icon: FaClock,
		title: "Pilih Jadwal Belajar",
		desc: "Atur waktu belajarmu sesuai kesibukan. Semua kelas dilakukan secara online, fleksibel, dan mudah diakses kapan saja.",
	},
	{
		icon: FaChalkboardTeacher,
		title: "Ikuti Kelas Online Interaktif",
		desc: "Bergabung dalam kelas live bersama guru native dan bilingual berpengalaman. Latih kemampuan berbicara melalui aktivitas seru dan realistis.",
	},
	{
		icon: FaChartLine,
		title: "Pantau Progres Belajarmu",
		desc: "Nikmati laporan perkembangan secara berkala dan raih sertifikat setelah menyelesaikan kursus. Lihat sendiri peningkatan kemampuanmu!",
	},
];

export default function StepDaftarSection() {
	return (
		<section className='relative py-24 bg-gradient-to-b from-[#fff9e5] via-[#fff3cc] to-[#fff2c8] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden'>
			{/* Subtle glowing orbs */}
			<motion.div
				animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
				transition={{ repeat: Infinity, duration: 8 }}
				className='absolute top-20 left-10 w-[280px] h-[280px] bg-[#f7b932]/25 blur-3xl rounded-full'
			/>
			<motion.div
				animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.15, 1] }}
				transition={{ repeat: Infinity, duration: 10 }}
				className='absolute bottom-10 right-10 w-[320px] h-[320px] bg-[#f7b932]/25 blur-3xl rounded-full'
			/>

			{/* Heading */}
			<div className='max-w-screen-lg mx-auto text-center relative z-10 mb-20 px-6'>
				<motion.h2
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className='text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6'>
					Langkah Mudah{" "}
					<span className='text-[#f7b932]'>Bergabung di AJ ThinkLab</span>
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.9 }}
					className='text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed'>
					Cukup empat langkah sederhana untuk memulai perjalananmu bersama
					AJ ThinkLab. Semua proses dibuat cepat, menyenangkan, dan
					pastinya berkesan.
				</motion.p>
			</div>

			{/* Timeline container */}
			<div className='relative max-w-3xl mx-auto px-6 md:px-10'>
				{/* Glowing line in the center */}
				<motion.div
					animate={{
						backgroundPosition: ["0% 50%", "100% 50%"],
					}}
					transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
					className='absolute left-[calc(50%-1.5px)] top-0 w-[3px] h-full bg-gradient-to-b from-[#f7b932] via-[#facc15] to-transparent bg-[length:200%_200%] rounded-full shadow-sm opacity-70'
				/>

				<div className='flex flex-col gap-16 relative z-10'>
					{steps.map((step, idx) => {
						const Icon = step.icon;
						const isLeft = idx % 2 === 0;
						return (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 60, rotate: 2 }}
								whileInView={{ opacity: 1, y: 0, rotate: 0 }}
								transition={{ duration: 0.8, delay: idx * 0.2 }}
								className={`relative flex flex-col md:flex-row ${
									isLeft ? "md:justify-start" : "md:justify-end"
								} items-center gap-6`}>
								{/* Pulse dot on the line */}
								<motion.div
									animate={{
										scale: [1, 1.3, 1],
										opacity: [1, 0.6, 1],
									}}
									transition={{
										repeat: Infinity,
										duration: 2.5,
										delay: idx * 0.3,
									}}
									className='absolute left-[calc(50%-12px)] w-6 h-6 bg-[#f7b932] rounded-full shadow-lg border-4 border-white dark:border-gray-800 z-20'
								/>

								{/* Step card */}
								<motion.div
									whileHover={{
										scale: 1.05,
										rotate: isLeft ? -1.5 : 1.5,
										boxShadow: "0 15px 40px rgba(247,185,50,0.35)",
									}}
									whileTap={{ scale: 0.98 }}
									className={`relative w-full md:w-[400px] bg-gradient-to-br from-white/90 to-[#fff8dc]/90 dark:from-gray-800/70 dark:to-gray-700/70 backdrop-blur-xl border border-[#f7b932]/20 shadow-lg rounded-2xl p-8 ${
										isLeft
											? "md:ml-[calc(50%+30px)]"
											: "md:mr-[calc(50%+30px)]"
									}`}>
									{/* Inner glow */}
									<div className='absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-[#f7b932]/10 to-transparent opacity-60 blur-md' />

									{/* Content */}
									<div className='relative z-10 flex flex-col items-start'>
										<motion.div
											animate={{
												rotate: [0, 6, -6, 0],
												scale: [1, 1.05, 1],
											}}
											transition={{
												repeat: Infinity,
												duration: 5 + idx,
												ease: "easeInOut",
											}}
											className='flex items-center justify-center w-14 h-14 rounded-2xl bg-[#f7b932] text-white shadow-xl mb-4'>
											<Icon className='w-7 h-7' />
										</motion.div>
										<h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
											{step.title}
										</h3>
										<p className='text-gray-700 dark:text-gray-300 leading-relaxed text-base'>
											{step.desc}
										</p>
									</div>

									{/* Step number floating in background */}
									<motion.span
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 0.08 }}
										className='absolute text-[90px] font-extrabold text-gray-900/10 dark:text-white/5 right-6 bottom-2 select-none'>
										{idx + 1}
									</motion.span>
								</motion.div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
