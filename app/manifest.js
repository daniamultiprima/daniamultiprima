export default function manifest() {
  return {
    name: "PT Dania Multi Prima",
    short_name: "DMP",
    description: "Konsultan IT & AI, software house di Medan untuk seluruh Indonesia.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF9F6",
    theme_color: "#FAF9F6",
    lang: "id",
    icons: [
      { src: "/brand/logo-512.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
