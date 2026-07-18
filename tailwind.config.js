/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sesuaikan dengan warna logo PT. Dania Multi Prima
        brand: {
          DEFAULT: "#3B82F6", // Biru Utama
          dark: "#1d4ed8",
          light: "#60a5fa",
        },
        dark: {
          900: "#020617", // Latar belakang sangat gelap
          800: "#0f172a",
          700: "#1e293b",
        },
      },
      fontFamily: {
        // Menggunakan variabel dari next/font
        logo: ["var(--font-press-start)", "cursive"],
        title: ["var(--font-press-start)", "cursive"],
        sans: ["var(--font-dm-sans)", "sans-serif"], 
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
