/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Palet pixel art terbatas, berangkat dari warna logo DMP
        brand: {
          50: "#EEF4FF",
          100: "#DCE8FF",
          200: "#BCD3FE",
          300: "#93B8FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        ink: {
          DEFAULT: "#0F1A33",
          800: "#18264A",
          700: "#22335F",
          600: "#3A4766",
          500: "#56627C",
          400: "#7A8499",
          300: "#A9B0BF",
        },
        paper: "#F4F0E6",
        panel: "#FBF9F4",
        sand: "#E9E1CF",
        line: "#D8D0BD",
        slate: { DEFAULT: "#64748B", dark: "#1E293B" },
        leaf: "#3F9F6E",
        wa: "#1FA855",
      },
      fontFamily: {
        pixel: ["var(--font-pixel)", "ui-monospace", "monospace"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "1200px" },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        bob: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
        blink: { "0%,49%": { opacity: "1" }, "50%,100%": { opacity: "0" } },
        drift: { from: { transform: "translateX(-20%)" }, to: { transform: "translateX(120%)" } },
        twinkle: { "0%,100%": { opacity: "0.2" }, "50%": { opacity: "1" } },
        dot: { "0%,80%,100%": { opacity: "0.25" }, "40%": { opacity: "1" } },
        hop: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-3px)" } },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        bob: "bob 1.6s steps(4) infinite",
        blink: "blink 1s steps(1) infinite",
        drift: "drift 40s linear infinite",
        twinkle: "twinkle 2.4s steps(3) infinite",
        dot: "dot 1.2s steps(3) infinite",
        hop: "hop 0.5s steps(2) infinite",
      },
    },
  },
  plugins: [],
};
