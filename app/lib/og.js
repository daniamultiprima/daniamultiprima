import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

// Gambar Open Graph bergaya pixel untuk setiap halaman (dibuat saat build)
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_TYPE = "image/png";

let fontCache;
const font = () => (fontCache ??= readFile(path.join(process.cwd(), "app/fonts/DepartureMono-Regular.otf")));
let logoCache;
const logo = () => (logoCache ??= readFile(path.join(process.cwd(), "public/brand/logo-mark.svg")).then((b) => `data:image/svg+xml;base64,${b.toString("base64")}`));

const INK = "#0F1A33";
const BLUE = "#2563EB";

export async function ogImage({ kicker, title, footer = "dmp.bio · software house & konsultan IT sejak 2017" }) {
  const [data, logoSrc] = await Promise.all([font(), logo()]);
  const size = title.length > 60 ? 54 : title.length > 40 ? 62 : 72;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#F4F0E6", padding: 36, fontFamily: "Departure" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#FFFFFF", border: `6px solid ${INK}`, boxShadow: `14px 14px 0 ${BLUE}`, padding: 56 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img src={logoSrc} width={180} height={53} />
            <div style={{ display: "flex", gap: 10 }}>
              {[BLUE, "#64748B", BLUE].map((c, i) => (
                <div key={i} style={{ width: 22, height: 22, background: c }} />
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {kicker && <div style={{ display: "flex", fontSize: 26, color: BLUE, textTransform: "uppercase", letterSpacing: 2 }}>■ {kicker}</div>}
            <div style={{ display: "flex", marginTop: 18, fontSize: size, lineHeight: 1.12, color: INK, letterSpacing: -1 }}>{title}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 24, color: "#56627C" }}>
            <span>{footer}</span>
            <div style={{ display: "flex", gap: 4 }}>
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i} style={{ width: 18, height: 14, background: i < 7 ? BLUE : "#DCE8FF" }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: [{ name: "Departure", data: await data, style: "normal", weight: 400 }] }
  );
}
