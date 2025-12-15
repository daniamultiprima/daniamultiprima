"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
	name: "Hana, 16 tahun",
	photo: "/images/personality.png",
	text: "Sebelumnya saya gugup berbicara bahasa Inggris, terutama dengan native speaker. Setelah belajar di AJ ThinkLab, saya menjadi lebih percaya diri dan menikmati setiap sesi dengan guru yang sabar dan interaktif.",
  },
  {
	name: "Fathia",
	photo: "/images/personality.png",
	text: "Saya awalnya ragu dengan kemampuan berbicara saya. Setelah 3 bulan di AJ ThinkLab, kemampuan speaking meningkat pesat dan nilai IELTS saya naik ke 7.5. Pengalaman luar biasa!",
  },
  {
	name: "Rizky",
	photo: "/images/personality.png",
	text: "Kelasnya fleksibel dan dinamis. Tutor native-nya profesional dan komunikatif. Saya bisa berbicara dengan lancar di rapat kantor berkat pembelajaran yang menyenangkan di AJ ThinkLab.",
  },
  {
	name: "Aiko",
	photo: "/images/personality.png",
	text: "Pembelajarannya interaktif, santai tapi efektif. Saya jadi cepat beradaptasi berbicara dalam bahasa Inggris tanpa takut salah. Terima kasih AJ ThinkLab!",
  },
  {
	name: "Bagas",
	photo: "/images/personality.png",
	text: "Belajar di AJ ThinkLab bikin saya sadar, bahasa Inggris itu bukan teori tapi komunikasi. Sekarang saya lebih natural berbicara di kampus dan presentasi pakai Inggris!",
  },
  {
	name: "Rara",
	photo: "/images/personality.png",
	text: "Guru-gurunya sabar banget dan cara ngajarnya fun. Saya malah jadi suka latihan speaking setiap hari. Totally worth it!",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef(null);
  const controls = useAnimation();
  const isStackMode = testimonials.length < 5;

  // === MODE STACK CARD (kurang dari 5) ===
  useEffect(() => {
	if (isStackMode) {
	  const interval = setInterval(() => {
		setIndex((prev) => (prev + 1) % testimonials.length);
	  }, 5000);
	  return () => clearInterval(interval);
	}
  }, [isStackMode]);

  // === MODE INFINITE SCROLL (>=5) ===
  useEffect(() => {
	if (!isStackMode && scrollRef.current) {
	  let scrollAmount = 0;
	  const scrollWidth = scrollRef.current.scrollWidth;
	  const startScroll = () => {
		const step = () => {
		  if (!scrollRef.current) return;
		  scrollAmount += 0.5; // kecepatan scroll
		  if (scrollAmount >= scrollWidth / 2) scrollAmount = 0;
		  scrollRef.current.scrollLeft = scrollAmount;
		  requestAnimationFrame(step);
		};
		requestAnimationFrame(step);
	  };
	  startScroll();
	}
  }, [isStackMode]);

  return (
	<section className="relative overflow-hidden py-20 px-6 bg-gradient-to-b from-[#fff4d0] via-[#fff8e1] to-[#fffdf5] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
	  {/* Title */}
	  <motion.h2
		initial={{ opacity: 0, y: 30 }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.8 }}
		className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white text-center mb-4"
	  >
		Cerita Sukses Siswa Kami
	  </motion.h2>

	  <motion.p
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.8, delay: 0.1 }}
		className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-center text-base sm:text-lg leading-relaxed mb-12"
	  >
		Lebih dari seribu siswa dari berbagai negara telah belajar bersama{" "}
		<strong>AJ ThinkLab</strong>. Simak pengalaman mereka yang kini lebih
		percaya diri berbicara bahasa Inggris secara global.
	  </motion.p>

	  {/* ========== MODE STACK (KURANG DARI 5) ========== */}
	  {isStackMode && (
		<div className="relative flex justify-center items-center h-[460px]">
		  {testimonials.map((testi, i) => {
			const pos = (i - index + testimonials.length) % testimonials.length;
			const visible = pos < 3;
			if (!visible) return null;

			const scale = 1 - pos * 0.08;
			const opacity = pos === 0 ? 1 : 0.7 - pos * 0.2;
			const zIndex = testimonials.length - pos;
			const translateY = pos * 25;
			const translateX = pos * 30 - 15;
			const blur = pos > 0 ? `blur(${pos * 2}px)` : "none";
			const rotate = pos * 2;

			return (
			  <motion.div
				key={i}
				initial={{ opacity: 0, y: 40 }}
				animate={{
				  opacity,
				  scale,
				  y: translateY,
				  x: translateX,
				  zIndex,
				  rotate,
				  filter: blur,
				}}
				transition={{
				  type: "spring",
				  stiffness: 100,
				  damping: 20,
				}}
				className="absolute w-[90%] max-w-md bg-white/85 dark:bg-gray-800/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/40 dark:border-gray-700 p-6 sm:p-8 flex flex-col items-center text-center"
			  >
				<Image
				  src={testi.photo}
				  alt={testi.name}
				  width={100}
				  height={100}
				  className="rounded-full mb-4 border-4 border-[#f7b932]/50 shadow-md"
				/>
				<FaQuoteLeft className="text-[#f7b932] text-3xl mb-3 opacity-80" />
				<p className="text-gray-700 dark:text-gray-300 italic text-sm sm:text-base leading-relaxed mb-4">
				  “{testi.text}”
				</p>
				<h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
				  {testi.name}
				</h3>
			  </motion.div>
			);
		  })}
		</div>
	  )}

	  {/* ========== MODE INFINITE SCROLL (>=5) ========== */}
	  {!isStackMode && (
		<div
		  ref={scrollRef}
		  className="relative flex overflow-x-hidden gap-6 py-8"
		>
		  {[...testimonials, ...testimonials].map((testi, i) => (
			<motion.div
			  key={i}
			  whileHover={{ scale: 1.05 }}
			  className="flex-shrink-0 w-[300px] md:w-[450px] bg-white/90 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-gray-700 p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_10px_40px_rgba(247,185,50,0.3)]"
			>
			  <motion.div
				className="relative w-20 h-20 sm:w-24 sm:h-24 mb-5"
				animate={{ scale: [1, 1.05, 1] }}
				transition={{ repeat: Infinity, duration: 5, delay: i * 0.2 }}
			  >
				<Image
				  src={testi.photo}
				  alt={testi.name}
				  fill
				  className="rounded-full object-cover border-4 border-[#f7b932]/50 shadow-md"
				/>
			  </motion.div>
			  <FaQuoteLeft className="text-[#f7b932] text-2xl mb-3 opacity-80" />
			  <p className="text-gray-700 dark:text-gray-300 italic text-sm sm:text-base leading-relaxed mb-3">
				“{testi.text}”
			  </p>
			  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
				{testi.name}
			  </h3>
			</motion.div>
		  ))}
		</div>
	  )}
	</section>
  );
}
