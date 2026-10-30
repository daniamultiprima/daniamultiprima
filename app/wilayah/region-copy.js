import { fmtNum, profile } from "@/lib/regions";

// Teks halaman wilayah yang menyesuaikan karakter tiap daerah (data nyata:
// penduduk, luas, kepadatan, ketinggian, peringkat di provinsi, jarak ke ibu kota).

const pick = (k, arr) => arr[parseInt(k.kode.replace(".", ""), 10) % arr.length];
const ordinal = (n) => (n === 1 ? "pertama" : `ke-${n}`);

export function kabIntro(k) {
  const { density, size, urban, remote } = profile(k);
  const d = fmtNum(density);
  const pop = fmtNum(k.penduduk);
  const area = fmtNum(k.luas);
  let open;
  if (k.tipe === "Kota" && size === "besar") {
    open = pick(k, [
      `Dengan sekitar ${pop} penduduk, ${k.label} termasuk kota terbesar di Indonesia. Persaingan usaha di sini ketat, sehingga website yang cepat, muncul di Google, dan nyaman dibuka di HP sudah jadi kebutuhan dasar.`,
      `${k.label} adalah salah satu pusat ekonomi besar dengan sekitar ${pop} penduduk. Pelanggan di kota sebesar ini terbiasa mencari layanan lewat Google dan WhatsApp, jadi kehadiran digital yang rapi sangat menentukan.`,
    ]);
  } else if (k.tipe === "Kota") {
    open = pick(k, [
      `${k.label} dihuni sekitar ${pop} jiwa di wilayah seluas ${area} km². Kota dengan kepadatan sekitar ${d} jiwa/km² seperti ini cocok untuk layanan publik online dan usaha lokal yang menjangkau pelanggan lewat website dan WhatsApp.`,
      `Sebagai kota berpenduduk sekitar ${pop} jiwa, ${k.label} punya ruang besar untuk layanan digital: dari pendaftaran online di sekolah dan puskesmas sampai toko lokal yang berjualan lewat website.`,
      `${k.label} relatif ringkas, ${area} km² dengan sekitar ${pop} penduduk. Jarak yang dekat membuat layanan publik online cepat terasa manfaatnya, dan usaha lokal mudah tumbuh lewat pemasaran digital.`,
    ]);
  } else if (remote) {
    open = pick(k, [
      `${k.label} punya wilayah luas, sekitar ${area} km², dengan kepadatan hanya sekitar ${d} jiwa/km². Jarak antar kecamatan menjadi tantangan, sehingga layanan publik online dan aplikasi yang tetap jalan saat sinyal lemah sangat membantu.`,
      `Dengan luas ${area} km² dan penduduk yang tersebar, warga ${k.label} sering harus menempuh perjalanan jauh untuk urusan administrasi. Layanan online dan aplikasi dengan mode offline memangkas jarak itu.`,
    ]);
  } else if (urban) {
    open = pick(k, [
      `${k.label} adalah kabupaten yang padat, sekitar ${d} jiwa/km² dengan total ${pop} penduduk. Kebutuhan digitalnya mirip kota besar: layanan publik cepat, data yang terhubung antar dinas, dan usaha lokal yang aktif berjualan online.`,
      `Sekitar ${pop} orang tinggal di ${k.label}, dengan kepadatan ${d} jiwa/km². Di kabupaten seramai ini, antrean layanan dan data yang tersebar antar dinas biasanya jadi masalah pertama yang perlu diselesaikan.`,
    ]);
  } else {
    open = pick(k, [
      `${k.label} memiliki sekitar ${pop} penduduk di wilayah seluas ${area} km²${k.ibukota ? `, dengan pusat pemerintahan di ${k.ibukota}` : ""}. Di daerah seperti ini, sistem yang sederhana dan mudah dipelajari jauh lebih berguna daripada fitur yang rumit.`,
      `Dengan ${pop} penduduk dan luas ${area} km², ${k.label} butuh sistem yang praktis: mudah dipakai petugas, murah dirawat, dan bisa berkembang bertahap sesuai anggaran daerah.`,
      `${k.label}${k.ibukota ? ` (ibu kota ${k.ibukota})` : ""} dihuni sekitar ${pop} jiwa. Banyak instansi di daerah sebesar ini mulai dari langkah kecil, misalnya layanan pengaduan online atau absensi pegawai, lalu berkembang dari sana.`,
    ]);
  }
  const role =
    k.tipe === "Kota"
      ? `Untuk Pemerintah ${k.label}, kami membantu aplikasi layanan publik, dashboard pimpinan, dan e-office sesuai arsitektur SPBE. Untuk sekolah, klinik, dan pelaku usaha, kami membuat website, aplikasi kasir, sampai chatbot WhatsApp yang menjawab 24 jam.`
      : `Untuk Pemerintah ${k.label}, kami membantu aplikasi layanan publik, absensi ASN berbasis lokasi, dan dashboard anggaran untuk pimpinan daerah. Untuk RSUD dan puskesmas, kami menyediakan SIMRS yang terhubung ke BPJS dan SATUSEHAT.`;
  return [open, role];
}

// Paragraf fakta: unik per daerah
export function kabFacts(k) {
  const prov = k.province;
  const parts = [];
  parts.push(
    `Di ${prov.nama}, ${k.label} berada di urutan ${ordinal(k.rankPop)} dari ${prov.kabs.length} kabupaten/kota untuk jumlah penduduk, dan urutan ${ordinal(k.rankDensity)} untuk kepadatan.`
  );
  if (k.isCapital) parts.push(`${k.label} adalah ibu kota ${prov.nama}, tempat sebagian besar kantor dinas tingkat provinsi berada.`);
  else if (k.capital && k.kmToCapital) parts.push(`Jaraknya sekitar ${fmtNum(k.kmToCapital)} km (garis lurus) dari ${k.capital.label}, ibu kota provinsi.`);
  if (k.elv >= 500) parts.push(`Wilayahnya berada di dataran tinggi, sekitar ${fmtNum(k.elv)} m di atas permukaan laut.`);
  else if (k.elv != null && k.elv <= 15) parts.push(`Pusat wilayahnya berada di dataran rendah dekat pesisir, sekitar ${fmtNum(k.elv)} m di atas permukaan laut.`);
  if (k.rankArea === 1 && prov.kabs.length > 1) parts.push(`Ini adalah daerah terluas di ${prov.nama}.`);
  return parts.join(" ");
}

const SOL = {
  website: { icon: "web", t: "Website & toko online", d: "Agar usaha dan instansi mudah ditemukan di Google.", href: "/services/pembuatan-website" },
  ai: { icon: "bot", t: "Chatbot WhatsApp AI", d: "Menjawab pelanggan atau warga 24 jam.", href: "/services/konsultan-ai" },
  app: { icon: "mobile", t: "Aplikasi bisnis & kasir", d: "Stok, penjualan, dan laporan dalam satu aplikasi.", href: "/services/pembuatan-aplikasi" },
  spbe: { icon: "gov", t: "Layanan publik online", d: "Pengaduan, perizinan, dan e-office sesuai SPBE.", href: "/services/spbe-smart-city" },
  absen: { icon: "pin", t: "Absensi ASN berbasis lokasi", d: "GPS dan pengenalan wajah, bisa mode offline.", href: "/services/pembuatan-aplikasi" },
  simrs: { icon: "hospital", t: "SIMRS untuk RSUD", d: "Rekam medis, BPJS, dan SATUSEHAT terhubung.", href: "/services/simrs" },
  security: { icon: "shield", t: "Keamanan siber", d: "Uji keamanan dan kepatuhan UU PDP.", href: "/services/keamanan-siber" },
};

export function kabSolutions(k) {
  const { size, urban, remote } = profile(k);
  if (k.tipe === "Kota" && size === "besar") return [SOL.website, SOL.ai, SOL.security];
  if (k.tipe === "Kota") return [SOL.website, SOL.spbe, SOL.ai];
  if (remote) return [SOL.spbe, SOL.absen, SOL.simrs];
  if (urban) return [SOL.spbe, SOL.website, SOL.ai];
  return [SOL.spbe, SOL.simrs, SOL.app];
}

export const ISLAND_INTRO = {
  Sumatera: "Kami sering bekerja dengan pemerintah daerah, rumah sakit, dan kampus di Sumatera. Rapat bisa online, dan kunjungan ke lokasi biasanya bisa diatur dalam hitungan hari.",
  Jawa: "Banyak klien di Jawa bekerja dengan kami sepenuhnya online: rapat video, demo progres mingguan, dan dokumen bersama. Untuk implementasi dan pelatihan, tim kami datang ke lokasi.",
  Kalimantan: "Untuk klien di Kalimantan, kami menggabungkan kerja jarak jauh dengan kunjungan saat pemasangan dan pelatihan. Sistem bisa dipasang di server instansi atau di cloud.",
  Sulawesi: "Klien di Sulawesi kami layani dengan pola kerja jarak jauh yang terjadwal. Perbedaan zona waktu sudah kami perhitungkan dalam jadwal rapat dan dukungan teknis.",
  "Bali & Nusa Tenggara": "Untuk usaha pariwisata, sekolah, maupun pemerintah daerah di Bali dan Nusa Tenggara, kami bekerja jarak jauh dan datang ke lokasi saat implementasi bila dibutuhkan.",
  "Maluku & Papua": "Untuk Maluku dan Papua, kami merancang sistem yang tetap bisa dipakai saat koneksi internet tidak stabil, misalnya dengan mode offline dan sinkronisasi otomatis.",
};
