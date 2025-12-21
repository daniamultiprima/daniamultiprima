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
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
