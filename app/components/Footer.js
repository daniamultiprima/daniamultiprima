"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaBookOpen,
  FaPhoneAlt,
  FaInfoCircle,
  FaRocket,
  FaHandshake,
  FaHome,
} from "react-icons/fa";
import { LogIn, UserPlus, GraduationCap, Banknote } from "lucide-react";

export default function Footer() {
  const whatsappMessage =
	"Hallo AJ ThinkLab! Saya tertarik ingin tahu lebih lanjut tetang free trial.";
  const whatsappURL = `https://wa.me/6282298981991?text=${encodeURIComponent(
	whatsappMessage
  )}`;

  const navItems = [
	{ name: "Beranda", icon: FaHome, href: "/" },
	{ name: "Pilih Kelas", icon: FaBookOpen, href: "/kelas" },
	{ name: "Hubungi Kami", icon: FaPhoneAlt, href: "/contact" },
	{ name: "Tentang Kami", icon: FaInfoCircle, href: "/about" },
	{ name: "Free Trial", icon: FaRocket, href: whatsappURL, external: true },
	{ name: "Affiliate", icon: FaHandshake, href: "/affiliate" },
  ];

  const authItems = [
	{ name: "Login", icon: LogIn, href: "https://dashboard.ajthinklab.com" }, 
	{ name: "Register Teacher", icon: GraduationCap, href: "/register-teacher" },
  ];

  return (
	<footer className="relative overflow-hidden bg-gradient-to-b from-[#fff2c8] via-[#fff8e1] to-[#fffdf5] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-200 pt-20 pb-10">
	  {/* Background Glow */}
	  <motion.div
		animate={{ opacity: [0.25, 0.4, 0.25], scale: [1, 1.1, 1] }}
		transition={{ repeat: Infinity, duration: 9 }}
		className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-[#f7b932]/30 blur-3xl rounded-full"
	  />
	  <motion.div
		animate={{ opacity: [0.3, 0.45, 0.3], scale: [1, 1.05, 1] }}
		transition={{ repeat: Infinity, duration: 8 }}
		className="absolute bottom-[-100px] right-[-80px] w-[350px] h-[350px] bg-[#f7b932]/25 blur-3xl rounded-full"
	  />

	  {/* Floating dots */}
	  {Array.from({ length: 10 }).map((_, i) => (
		<motion.div
		  key={i}
		  className="absolute bg-[#f7b932]/25 rounded-full"
		  style={{
			width: `${Math.random() * 16 + 8}px`,
			height: `${Math.random() * 16 + 8}px`,
			top: `${Math.random() * 100}%`,
			left: `${Math.random() * 100}%`,
		  }}
		  animate={{
			y: [0, -15, 0],
			opacity: [0.3, 0.7, 0.3],
		  }}
		  transition={{
			repeat: Infinity,
			duration: 5 + Math.random() * 4,
			delay: Math.random() * 2,
		  }}
		/>
	  ))}

	  {/* Main Container */}
	  <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 grid xl:grid-cols-3 gap-12">
		{/* Left Section */}
		<motion.div
		  initial={{ opacity: 0, x: -30 }}
		  whileInView={{ opacity: 1, x: 0 }}
		  transition={{ duration: 0.7 }}
		  className="flex flex-col items-center xl:items-start text-center xl:text-left"
		>
		  <Image
			src="/images/ajthinklab.png"
			alt="AJ ThinkLab Logo"
			width={80}
			height={80}
			className="mb-4"
		  />
		  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
			AJ ThinkLab
		  </h3>
		  <p className="text-gray-700 dark:text-gray-300 max-w-xs text-sm leading-relaxed">
			Platform belajar bahasa Inggris interaktif dengan pengajar native dan
			bilingual terbaik. Fleksibel, menyenangkan, dan fokus pada hasil nyata.
		  </p>

		  <div className="flex gap-4 mt-6">
			{[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, i) => (
			  <motion.a
				key={i}
				href="#"
				whileHover={{
				  scale: 1.12,
				  rotate: 6,
				}}
				transition={{
				  type: "spring",
				  stiffness: 200,
				  damping: 10,
				}}
				className="p-3 bg-white/40 dark:bg-gray-800/40 rounded-full shadow-sm hover:shadow-[#f7b932]/30 text-gray-700 dark:text-gray-300"
				aria-label={`social-${i}`}
			  >
				<Icon className="w-4 h-4" />
			  </motion.a>
			))}
		  </div>
		</motion.div>

		{/* Middle Section - Navigation + Auth */}
		<motion.div
		  initial={{ opacity: 0, y: 30 }}
		  whileInView={{ opacity: 1, y: 0 }}
		  transition={{ duration: 0.7, delay: 0.2 }}
		  className="flex flex-col items-center"
		>
		  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
			Navigasi Cepat
		  </h4>

		  <div className="grid grid-cols-2 gap-4 mb-6">
			{navItems.map((item, i) => {
			  const Icon = item.icon;
			  return (
				<motion.div
				  key={i}
				  whileHover={{
					y: -3,
					scale: 1.05,
					backgroundColor: "rgba(247,185,50,0.08)",
					boxShadow: "0 10px 20px rgba(247,185,50,0.12)",
				  }}
				  transition={{
					type: "spring",
					stiffness: 200,
					damping: 12,
				  }}
				  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/40 dark:bg-gray-800/40 text-gray-800 dark:text-gray-200 font-medium text-sm backdrop-blur-md border border-white/30 dark:border-gray-700 hover:text-[#f7b932] shadow-sm"
				>
				  <Link
					href={item.href}
					target={item.external ? "_blank" : undefined}
					className="flex items-center gap-2 w-full"
				  >
					<Icon className="w-4 h-4 text-[#f7b932]" />
					<span>{item.name}</span>
				  </Link>
				</motion.div>
			  );
			})}
		  </div>

		  {/* Auth Links group */}
		  <div className="w-full max-w-xs mt-2">
			<h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 text-center">
			  Akun
			</h5>
			<div className="flex flex-col gap-3">
			  {authItems.map((a, i) => {
				const Icon = a.icon;
				return (
				  <motion.div
					key={i}
					whileHover={{ x: 6 }}
					transition={{ type: "spring", stiffness: 200, damping: 14 }}
					className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/40 dark:bg-gray-800/40 border border-white/30 dark:border-gray-700 shadow-sm"
				  >
					<Icon className="w-5 h-5 text-[#f7b932]" />
					{a.name == "Login" ? (
						<a href={a.href} target="_blank" className="font-medium text-sm text-gray-800 dark:text-gray-200">
					  	{a.name}
						</a>
					) : (
						<Link href={a.href} className="font-medium text-sm text-gray-800 dark:text-gray-200">
						{a.name}
						</Link>
					)}
					
				  </motion.div>
				);
			  })}
			</div>
		  </div>
		</motion.div>

		{/* Right Section - CTA */}
		<motion.div
		  initial={{ opacity: 0, x: 30 }}
		  whileInView={{ opacity: 1, x: 0 }}
		  transition={{ duration: 0.8, delay: 0.4 }}
		  className="flex flex-col items-center xl:items-end text-center xl:text-right"
		>
		  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
			Siap Mulai Belajar?
		  </h4>
		  <p className="text-gray-700 dark:text-gray-300 text-sm mb-5 max-w-sm">
			Ambil langkah pertama menuju masa depan global! Coba kelas gratis dan
			rasakan pengalaman belajar interaktif bersama guru native kami.
		  </p>
		  <motion.a
			href={whatsappURL}
			target="_blank"
			whileHover={{
			  scale: 1.05,
			  boxShadow: "0 0 25px rgba(247,185,50,0.6)",
			}}
			whileTap={{ scale: 0.98 }}
			className="inline-block bg-[#f7b932] text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-[#f7b932]/50 transition-all"
		  >
			🚀 Free Trial
		  </motion.a>
		</motion.div>
	  </div>

	  {/* Divider */}
	  <div className="relative z-10 border-t border-gray-300/40 dark:border-gray-700/40 mt-16 pt-6 text-center">
		<motion.p
		  animate={{ opacity: [0.6, 1, 0.6] }}
		  transition={{ repeat: Infinity, duration: 5 }}
		  className="text-gray-600 dark:text-gray-400 text-sm"
		>
		  © {new Date().getFullYear()} <span className="font-semibold text-[#f7b932]">AJ ThinkLab</span>. All
		  rights reserved.
		</motion.p>
	  </div>
	</footer>
  );
}
