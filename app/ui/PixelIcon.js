import { PIXEL_ICONS } from "./pixel-icons";

const cache = new Map();

// Bitmap 24x24 -> satu path SVG (run-length per baris)
function toPath(name) {
  if (cache.has(name)) return cache.get(name);
  const hex = PIXEL_ICONS[name] || "";
  let d = "";
  for (let y = 0; y < 24 && hex; y++) {
    const row = parseInt(hex.slice(y * 6, y * 6 + 6), 16);
    let x = 0;
    while (x < 24) {
      if (row & (1 << (23 - x))) {
        const s = x;
        while (x < 24 && row & (1 << (23 - x))) x++;
        d += `M${s} ${y}h${x - s}v1h-${x - s}z`;
      } else x++;
    }
  }
  cache.set(name, d);
  return d;
}

// Ukuran kelipatan 24 (24, 48) agar pixel tetap tajam
export default function PixelIcon({ name, size = 24, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={className} aria-hidden focusable="false">
      <path d={toPath(name)} />
    </svg>
  );
}
