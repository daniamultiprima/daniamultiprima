import Link from "next/link";

export const A64 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";

// Ubah grid sel menjadi path SVG per nilai sel (run-length per baris)
export function cellsToPaths(w, h, getKey) {
  const paths = {};
  for (let y = 0; y < h; y++) {
    let x = 0;
    while (x < w) {
      const k = getKey(x, y);
      if (k == null) {
        x++;
        continue;
      }
      const s = x;
      while (x < w && getKey(x, y) === k) x++;
      paths[k] = (paths[k] || "") + `M${s} ${y}h${x - s}v1h-${x - s}z`;
    }
  }
  return paths;
}

const SHADES = ["#2563EB", "#1D4ED8", "#3B82F6", "#1E40AF", "#60A5FA", "#1E3A8A"];

// Peta provinsi: tiap kab/kota bisa diklik (tanpa JavaScript)
export function ProvinceMap({ prov, highlight }) {
  const { w, h, cells } = prov.map;
  const paths = cellsToPaths(w, h, (x, y) => {
    const c = cells[y * w + x];
    return c === "." ? null : A64.indexOf(c);
  });
  return (
    <svg viewBox={`-1 -1 ${w + 2} ${h + 2}`} className="h-auto w-full" shapeRendering="crispEdges" role="img" aria-label={`Peta pixel ${prov.nama} dengan ${prov.kabs.length} kabupaten/kota`}>
      {Object.entries(paths).map(([i, d]) => {
        const k = prov.kabs[i];
        if (!k) return null;
        const on = highlight ? highlight === k.kode : false;
        const fill = highlight ? (on ? "#2563EB" : "#C9D6F2") : SHADES[i % SHADES.length];
        return (
          <Link key={i} href={k.href} className="group/kab">
            <title>{k.label}</title>
            <path d={d} fill={fill} className="transition-[fill] duration-150 group-hover/kab:fill-[#0F1A33]" />
          </Link>
        );
      })}
      {highlight &&
        prov.kabs
          .filter((k) => k.kode === highlight)
          .map((k) => (
            <g key="pin">
              <rect x={k.pos.x - 0.5} y={k.pos.y - 0.5} width="1.4" height="1.4" fill="#0F1A33" className="anim-ping" />
              <rect x={k.pos.x - 0.5} y={k.pos.y - 0.5} width="1.4" height="1.4" fill="#FBF9F4" stroke="#0F1A33" strokeWidth=".35" />
            </g>
          ))}
    </svg>
  );
}

// Siluet kab/kota dari bitmask
export function KabShape({ kab }) {
  const { w, h, bits } = kab.map;
  if (bits.length < 2) return null;
  const at = (x, y) => {
    const i = y * w + x;
    const n = parseInt(bits[i >> 2], 16);
    return (n >> (3 - (i & 3))) & 1 ? 1 : null;
  };
  const paths = cellsToPaths(w, h, at);
  return (
    <svg viewBox={`-2 -2 ${w + 4} ${h + 4}`} className="h-auto max-h-[320px] w-full" shapeRendering="crispEdges" role="img" aria-label={`Bentuk wilayah ${kab.label}`}>
      <path d={paths[1]} fill="#0F1A33" transform="translate(.6 .6)" />
      <path d={paths[1]} fill="#2563EB" />
    </svg>
  );
}
