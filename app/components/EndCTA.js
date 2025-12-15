"use client";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

export default function FinalCTASection() {

	const whatsappMessage =
		"Hallo AJ ThinkLab! Saya tertarik ingin tahu lebih lanjut tetang free trial.";
	const whatsappURL = `https://wa.me/6282298981991?text=${encodeURIComponent(
		whatsappMessage
	)}`;


	return (
		<section className='relative overflow-hidden py-32 bg-gradient-to-b from-[#fff2c8] via-[#fff8e1] to-[#fffdf7] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950'>
			{/* Background glowing orbs */}
			<motion.div
				animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
				transition={{ repeat: Infinity, duration: 8 }}
				className='absolute top-20 left-20 w-[350px] h-[350px] bg-[#f7b932]/30 blur-3xl rounded-full'
			/>
			<motion.div
				animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.05, 1] }}
				transition={{ repeat: Infinity, duration: 10 }}
				className='absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#f7b932]/25 blur-3xl rounded-full'
			/>

			{/* Floating icons */}
			{Array.from({ length: 12 }).map((_, i) => (
				<motion.div
					key={i}
					className='absolute bg-[#f7b932]/25 rounded-full'
					style={{
						width: `${Math.random() * 20 + 10}px`,
						height: `${Math.random() * 20 + 10}px`,
						top: `${Math.random() * 100}%`,
						left: `${Math.random() * 100}%`,
					}}
					animate={{
						y: [0, -20, 0],
						opacity: [0.3, 0.7, 0.3],
					}}
					transition={{
						repeat: Infinity,
						duration: 6 + Math.random() * 5,
						delay: Math.random() * 2,
					}}
				/>
			))}

			{/* Content */}
			<div className='relative z-10 max-w-screen-xl mx-auto px-6 text-center'>
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className='text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6'>
					Mau belajar dengan{" "}
					<span className='text-[#f7b932]'>guru native ✨</span> atau{" "}
					<span className='text-[#f7b932]'>guru lokal berpengalaman?</span>
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className='max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-10'>
					Semua bisa kamu temukan di{" "}
					<span className='font-semibold text-[#f7b932]'>AJ ThinkLab</span>{" "}
					— tempat terbaik untuk meningkatkan kemampuan bahasa Inggris
					dengan cara yang menyenangkan, fleksibel, dan efektif. Dapatkan
					pengalaman belajar yang interaktif langsung bersama pengajar dari
					berbagai negara.
				</motion.p>

				{/* CTA Button */}
				<motion.a
					href={whatsappURL}
					target="_blank"
					initial={{ scale: 0.9, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					whileHover={{
						scale: 1.05,
						boxShadow: "0 0 25px rgba(247,185,50,0.6)",
					}}
					whileTap={{ scale: 0.95 }}
					transition={{ type: "spring", stiffness: 150, damping: 10 }}
					className='inline-flex items-center gap-3 bg-[#f7b932] text-white font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-[#f7b932]/50 transition-all'>
					<motion.div
						animate={{ y: [0, -5, 0] }}
						transition={{
							repeat: Infinity,
							duration: 1.5,
							ease: "easeInOut",
						}}>
						<FaRocket className='w-5 h-5' />
					</motion.div>
					Free Trial Sekarang
				</motion.a>

				{/* Animated subtle tagline */}
				<motion.p
					animate={{ opacity: [0.6, 1, 0.6] }}
					transition={{ repeat: Infinity, duration: 4 }}
					className='mt-8 text-gray-600 dark:text-gray-400 text-sm'>
					🚀 Daftar sekarang dan rasakan pengalaman belajar yang berbeda
					dari yang lain.
				</motion.p>
			</div>
		</section>
	);
}
