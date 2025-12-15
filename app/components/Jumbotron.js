"use client";
import { motion } from "framer-motion";
import {
	FaRocket,
	FaGlobeAmericas,
	FaComments,
	FaBookOpen,
	FaStar,
	FaUserGraduate,
	FaLaptopCode,
	FaChalkboardTeacher,
	FaSmileBeam,
	FaLanguage,
} from "react-icons/fa";
import { LuHandshake } from "react-icons/lu";
import { LiaUserEditSolid } from "react-icons/lia";
import Image from "next/image";
import Link from "next/link"
import { MdOutlineClass } from "react-icons/md";


const icons = [
	FaGlobeAmericas,
	FaComments,
	FaBookOpen,
	FaRocket,
	FaUserGraduate,
	FaLaptopCode,
	FaChalkboardTeacher,
	FaSmileBeam,
	FaLanguage,
];

export default function Jumbotron() {
	return (
		<section className='relative overflow-hidden bg-gradient-to-b from-white via-[#fff8e1] to-[#fff2c8] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-[140px] md:pt-[180px] pb-24'>
			{/* Floating icons background */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				{Array.from({ length: 24 }).map((_, i) => {
					const Icon = icons[i % icons.length];
					const size = Math.random() * 30 + 15;
					const x = Math.random() * 100;
					const y = Math.random() * 100;
					const delay = Math.random() * 4;
					const duration = 8 + Math.random() * 6;
					return (
						<motion.div
							key={i}
							className='absolute text-[#f7b932]/20'
							style={{
								top: `${y}%`,
								left: `${x}%`,
							}}
							initial={{ y: 0 }}
							animate={{ y: [0, -15, 0] }}
							transition={{
								repeat: Infinity,
								duration,
								delay,
								ease: "easeInOut",
							}}>
							<Icon style={{ width: size, height: size }} />
						</motion.div>
					);
				})}
			</div>

			{/* Glow overlays */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.25 }}
				transition={{ duration: 2 }}
				className='absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-[#f7b932]/40 blur-3xl rounded-full'
			/>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.2 }}
				transition={{ duration: 2.5 }}
				className='absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-[#f7b932]/30 blur-3xl rounded-full'
			/>

			{/* Main Content */}
			<div className='relative max-w-screen-2xl mx-auto px-6 lg:px-12 flex flex-col-reverse xl:flex-row items-center justify-between gap-16'>
				{/* LEFT TEXT SIDE */}
				<motion.div
					initial={{ x: -50, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ type: "spring", stiffness: 70, delay: 0.2 }}
					className='flex-1 text-center xl:text-left z-10'>
					<h1 className='text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight'>
						100%{" "}
						<span className='text-[#f7b932]'>Online & Interaktif</span>.
						<br />
						Fluent English.{" "}
						<span className='text-[#f7b932]'>Global Future.</span>
					</h1>

					<p className='mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed'>
						Belajar dari Guru Native Terbaik Dunia — dari{" "}
						<strong>Australia, UK, USA, Canada & New Zealand.</strong>{" "}
						Dipercaya oleh <strong>1.000+ siswa</strong> dari Indonesia,
						Jepang, Korea, dan negara lain.
						<br />
						Untuk anak usia 4 tahun hingga profesional dewasa.
					</p>

					{/* Buttons */}
					<div className='mt-10 flex flex-col xl:flex-row gap-4 justify-center xl:justify-start'>
						<Link href="/kelas">
							<motion.button
								whileHover={{ scale: 1.07, rotate: -1 }}
								whileTap={{ scale: 0.95 }}
								href='#daftar'
								className='text-lg inline-flex items-center gap-2 px-8 py-5 rounded-xl bg-[#f8a832] text-white font-semibold shadow-lg hover:shadow-[#f7b932]/40 transition-all'>
								<MdOutlineClass className='w-5 h-5' />
								Lihat Kelas
							</motion.button>
						</Link>

						<Link href="/affiliate">
							<motion.button
								whileHover={{ scale: 1.07, rotate: 1 }}
								whileTap={{ scale: 0.95 }}
								href='/affiliate'
								className='text-lg inline-flex items-center gap-2 px-8 py-5 rounded-xl border-2 border-[#f7b932] text-[#f7b932] font-semibold hover:bg-[#f7b932]/10 transition-all'>
								<LuHandshake className='w-5 h-5' />
								Affiliate Program
							</motion.button>
						</Link>
					</div>

					{/* Rating */}
					<div className='mt-10 flex flex-col xl:flex-row items-center gap-2 text-gray-700 dark:text-gray-300'>
						<div className='flex items-center gap-1 text-[#f7b932]'>
							{Array.from({ length: 5 }).map((_, i) => (
								<FaStar key={i} className='w-5 h-5' />
							))}
						</div>
						<p className='text-lg font-medium'>
							<span className='font-bold text-gray-900 dark:text-white'>
								4.9/5
							</span>{" "}
							oleh siswa & orang tua dari Asia & Eropa
						</p>
					</div>
				</motion.div>

				{/* RIGHT IMAGE SIDE */}
				<motion.div
					initial={{ x: 50, opacity: 0, scale: 0.95 }}
					animate={{ x: 0, opacity: 1, scale: 1 }}
					transition={{ type: "spring", stiffness: 80, delay: 0.4 }}
					className='flex-1 flex justify-center relative'>
					<motion.div
						initial={{ rotate: -2 }}
						animate={{ rotate: [0, -2, 2, 0] }}
						transition={{
							duration: 8,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className='relative'>
						<Image
							src='/images/english-hero-jumbotron.svg'
							alt='Belajar Bahasa Inggris Online'
							width={800}
							height={800}
						/>
						<motion.div
							animate={{ scale: [1, 1.05, 1] }}
							transition={{ duration: 5, repeat: Infinity }}
							className='absolute -z-10 top-5 left-5 w-full h-full rounded-3xl bg-[#f7b932]/20 blur-2xl'
						/>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
