// Animasi masuk berbasis CSS (tanpa library). Elemen .rv muncul saat terlihat;
// kelas .in ditambahkan oleh <RevealObserver/>. Tanpa JavaScript, konten tetap tampil.

export function Reveal({ children, className = "", delay = 0, as: Tag = "div", style, kind = "up" }) {
  return (
    <Tag className={`rv rv-${kind} ${className}`} style={{ ...style, "--rv-d": `${delay}s` }}>
      {children}
    </Tag>
  );
}

export function RevealGroup({ children, className = "", as: Tag = "div" }) {
  return <Tag className={`rv-group ${className}`}>{children}</Tag>;
}

export function RevealItem({ children, className = "", as: Tag = "div", style }) {
  return (
    <Tag className={`rv rv-up ${className}`} style={style}>
      {children}
    </Tag>
  );
}

export { default as CountUp } from "./CountUp";
