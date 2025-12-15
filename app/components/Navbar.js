"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { initFlowbite } from "flowbite";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// icons (lucide-react)
import {
  ShoppingCart,
  Globe,
  BookOpen,
  MessageCircle,
  Info,
  Handshake,
  LogIn,
  UserPlus,
  GraduationCap,
  Banknote,
  Menu,
  X,
} from "lucide-react";
import { GiNotebook } from "react-icons/gi";

export default function Navbar({totalCart}) {

 

  const whatsappMessage =
	"Halo AJ ThinkLab! Saya tertarik ingin tahu lebih lanjut tentang free trial.";
  const whatsappURL = `https://wa.me/6282298981991?text=${encodeURIComponent(
	whatsappMessage
  )}`;


  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
	  if(totalCart == null || totalCart == 0 || totalCart == "" || totalCart == undefined){
		  const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]")
		  setCartCount(cartItems.length)
	  }else{
		  setCartCount(totalCart)
	  }
  }, [totalCart])

  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthMenu, setShowAuthMenu] = useState(false);

  useEffect(() => {
	initFlowbite();
  }, []); // <== biar Navbar ikut re-render setiap id baru dikirim dari detail page
  

  const navItems = [
	{ name: "Beranda", href: "/", icon: Globe },
	{ name: "Pilih Kelas", href: "/kelas", icon: BookOpen },
	{ name: "Hubungi Kami", href: "/contact", icon: MessageCircle },
	{ name: "Tentang Kami", href: "/about", icon: Info },
	{ name: "Affiliate", href: "/affiliate", icon: Handshake },
  ];

 

  return (
	<>
	  {/* NAVBAR */}
	  <motion.nav
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 0.45 }}
		className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#fff6db]/90 via-[#fff3c9]/85 to-[#fff8e3]/85 dark:from-gray-950/90 dark:via-gray-900/85 dark:to-gray-950/85 backdrop-blur-md border-b border-white/20 shadow-sm"
	  >
		<div className="max-w-screen-2xl mx-auto flex items-center justify-between p-4">
		  {/* Logo */}
		  <Link href="/" className="flex items-center gap-3">
			<Image
			  src="/images/ajthinklab.png"
			  alt="AJ ThinkLab Logo"
			  width={60}
			  height={60}
			/>
			<span className="hidden md:block text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
			  AJ ThinkLab
			</span>
		  </Link>

		  {/* Desktop Menu */}
		  <div className="hidden xl:flex items-center">
			<ul className="flex gap-6 font-medium items-center">
			  {navItems.map((item) => (
				<li key={item.href}>
				  <Link
					href={item.href}
					className={`transition-all duration-300 ${
					  pathname === item.href
						? "text-[#f7b932] font-semibold"
						: "text-gray-900 dark:text-white hover:text-[#f7b932]"
					}`}
				  >
					{item.name}
				  </Link>
				</li>
			  ))}

			  {/* LOGIN / REGISTER moved into the ul so spacing matches */}
			  <li
				className="relative"
				onMouseEnter={() => setShowAuthMenu(true)}
				onMouseLeave={() => setShowAuthMenu(false)}
			  >
				<button className="font-medium text-gray-800 dark:text-white hover:text-[#f7b932] transition">
				  Lainnya
				</button>

				<AnimatePresence>
				  {showAuthMenu && (
					<motion.div
					  initial={{ opacity: 0, y: 10 }}
					  animate={{ opacity: 1, y: 0 }}
					  exit={{ opacity: 0, y: 10 }}
					  transition={{ duration: 0.22 }}
					  className="absolute right-0 mt-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden w-56"
					>
					  <a
						href="https://dashboard.ajthinklab.com"
						target="_blank"
						className="font-medium flex items-center gap-3 px-4 py-3 hover:bg-[#f7b932]/10 transition text-gray-700 dark:text-gray-200"
					  >
						<LogIn className="w-4 h-4 text-[#f7b932]" />
						<span>Login</span>
					  </a>

					  {/* <Link
						href="/payment-confirmation"
						className="font-medium flex items-center gap-3 px-4 py-3 hover:bg-[#f7b932]/10 transition text-gray-700 dark:text-gray-200"
					  >
						<Banknote className="w-4 h-4 text-[#f7b932]" />
						<span>Konfirmasi Pembayaran</span>
					  </Link> */}

					  <Link
						href="/register-teacher"
						className="font-medium flex items-center gap-3 px-4 py-3 hover:bg-[#f7b932]/10 transition text-gray-700 dark:text-gray-200"
					  >
						<GraduationCap className="w-4 h-4 text-[#f7b932]" />
						<span>Register as Teacher</span>
					  </Link>
					</motion.div>
				  )}
				</AnimatePresence>
			  </li>
			</ul>
		  </div>

		  {/* Right Buttons */}
		  <div className="flex items-center gap-4">
			{/* Cart */}
			<motion.div whileHover={{ scale: 1.06 }} className="relative">
			  <Link href="/checkout" className="relative">
				<ShoppingCart className="w-7 h-7 text-gray-800 dark:text-white hover:text-[#f7b932] transition" />
				{cartCount > 0 && (
				  <motion.span
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{
					  type: "spring",
					  stiffness: 220,
					  damping: 12,
					}}
					className="absolute -top-2 -right-2 bg-[#f7b932] text-black text-xs font-bold px-1.5 py-0.5 rounded-full"
				  >
					{cartCount}
				  </motion.span>
				)}
			  </Link>
			</motion.div>

			{/* CTA Free Trial */}
			<motion.a
			  href={whatsappURL}
			  target="_blank"
			  whileHover={{ scale: 1.04 }}
			  whileTap={{ scale: 0.96 }}
			  className="font-bold inline-flex items-center justify-center px-4 md:px-5 py-2.5 text-sm text-black bg-[#f7b932] rounded-lg hover:bg-[#e0a92a] hover:shadow-[#f7b932]/40 transition-all"
			>
			  <GiNotebook className="w-4 h-4 me-2" />
			  FREE TRIAL
			</motion.a>

			{/* Mobile Toggle */}
			<button
			  onClick={() => setIsMenuOpen(true)}
			  className="xl:hidden p-2 rounded-lg hover:bg-[#f7b932]/20"
			  aria-label="Open menu"
			>
			  <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
			</button>
		  </div>
		</div>
	  </motion.nav>

	  {/* MOBILE MENU */}
	  <AnimatePresence>
		{isMenuOpen && (
		  <motion.div
			initial={{ opacity: 0, scale: 0.98 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.98 }}
			transition={{ duration: 0.28 }}
			className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#fff9e6]/95 via-[#fff2c8]/95 to-[#ffe6a0]/95 backdrop-blur-md p-6 overflow-auto"
		  >
			{/* Top bar with close + logo */}
			<div className="w-full max-w-3xl flex items-center justify-between mb-6">
			  <Link
				href="/"
				onClick={() => setIsMenuOpen(false)}
				className="flex items-center gap-3"
			  >
				<Image src="/images/ajthinklab.png" alt="logo" width={48} height={48} />
				<span className="font-semibold text-lg text-gray-900 dark:text-white">AJ ThinkLab</span>
			  </Link>

			  <button
				onClick={() => setIsMenuOpen(false)}
				className="p-2 rounded-lg bg-white/80 dark:bg-gray-800/70"
				aria-label="Close menu"
			  >
				<X className="w-6 h-6 text-gray-800 dark:text-white" />
			  </button>
			</div>

			{/* Grid menu (with icons) */}
			<motion.ul
			  initial={{ y: 30, opacity: 0 }}
			  animate={{ y: 0, opacity: 1 }}
			  transition={{ duration: 0.36 }}
			  className="grid grid-cols-2 sm:grid-cols-3 gap-5 w-full max-w-3xl text-center"
			>
			  {/* main nav items */}
			  {navItems.map((item) => {
				const Icon = item.icon;
				return (
				  <motion.li
					key={item.href}
					whileHover={{ scale: 1.03, y: -6 }}
					className={`flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/70 dark:bg-gray-800/60 border border-white/30 dark:border-gray-700 shadow-md cursor-pointer ${
					  pathname === item.href ? "ring-2 ring-[#f7b932]/30" : ""
					}`}
					onClick={() => setIsMenuOpen(false)}
				  >
					<Icon className="w-7 h-7 text-[#f7b932]" />
					<Link href={item.href} className="font-semibold text-sm text-gray-900 dark:text-white">
					  {item.name}
					</Link>
				  </motion.li>
				);
			  })}

			  {/* Login / Register (mobile) - same style, each has icon */}
			  <motion.li
				whileHover={{ scale: 1.03, y: -6 }}
				className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/70 dark:bg-gray-800/60 border border-white/30 dark:border-gray-700 shadow-md cursor-pointer"
			  >
				<LogIn className="w-7 h-7 text-[#f7b932]" />
				<Link href="/login" onClick={() => setIsMenuOpen(false)} className="font-semibold text-sm text-gray-900 dark:text-white">
				  Login
				</Link>
			  </motion.li>
 

			  <motion.li
				whileHover={{ scale: 1.03, y: -6 }}
				className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/70 dark:bg-gray-800/60 border border-white/30 dark:border-gray-700 shadow-md cursor-pointer"
			  >
				<GraduationCap className="w-7 h-7 text-[#f7b932]" />
				<Link href="/register-teacher" onClick={() => setIsMenuOpen(false)} className="font-semibold text-sm text-gray-900 dark:text-white">
				  Register Teacher
				</Link>
			  </motion.li>

			  {/* Cart shortcut */}
			  <motion.li
				whileHover={{ scale: 1.03, y: -6 }}
				className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#fff7dc] border border-[#f7b932]/40 shadow-md cursor-pointer"
			  >
				<ShoppingCart className="w-7 h-7 text-[#b36f00]" />
				<Link href="/checkout" onClick={() => setIsMenuOpen(false)} className="font-semibold text-sm text-gray-900">
				  Keranjang ({cartCount})
				</Link>
			  </motion.li>
			</motion.ul>

			{/* bottom CTA */}
			<div className="mt-8 w-full max-w-3xl flex justify-center">
			  <motion.a
				href={whatsappURL}
				target="_blank"
				whileHover={{ scale: 1.04 }}
				className="inline-flex items-center gap-3 bg-[#f7b932] text-black font-semibold px-6 py-3 rounded-full shadow-lg"
			  >
				<GiNotebook className="w-5 h-5" />
				FREE TRIAL
			  </motion.a>
			</div>
		  </motion.div>
		)}
	  </AnimatePresence>
	</>
  );
}
