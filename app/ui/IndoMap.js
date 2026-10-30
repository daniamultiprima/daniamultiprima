import Link from "next/link";
import MapHover from "./MapHover";
import { cellsToPaths, A64 } from "./maps";

const SHADES = ["#2563EB", "#1D4ED8", "#3B82F6", "#1E40AF", "#60A5FA", "#1E3A8A"];

// Peta Indonesia pixel (dirender di server). Hover = sorot & tooltip, klik = halaman provinsi.
export default function IndoMap({ map, provinces, pins = [] }) {
  const paths = cellsToPaths(map.w, map.h, (x, y) => {
    const c = map.cells[y * map.w + x];
    return c === "." ? null : c;
  });
  return (
    <div className="rv relative" data-map>
      <svg viewBox={`0 0 ${map.w} ${map.h}`} className="h-auto w-full" shapeRendering="crispEdges" role="img" aria-label="Peta Indonesia: 38 provinsi yang kami layani">
        {Object.entries(paths).map(([c, d]) => {
          const i = A64.indexOf(c);
          const p = provinces[i];
          if (!p) return null;
          return (
            <Link key={c} href={`/wilayah/${p.slug}`} aria-label={`${p.nama}, ${p.n} kabupaten/kota`}>
              <path d={d} fill={SHADES[i % SHADES.length]} className="map-prov" style={{ "--i": i }} data-nama={p.nama} data-info={`${p.pulau} · ${p.n} kabupaten/kota`} />
            </Link>
          );
        })}
        {pins.map((p) => (
          <g key={p.kode} pointerEvents="none">
            <rect x={p.x - 0.8} y={p.y - 0.8} width="1.6" height="1.6" fill="#FBF9F4" className="anim-ping" />
            <rect x={p.x - 0.8} y={p.y - 0.8} width="1.6" height="1.6" fill="#FBF9F4" stroke="#0F1A33" strokeWidth=".4" />
          </g>
        ))}
      </svg>
      <MapHover />
    </div>
  );
}
