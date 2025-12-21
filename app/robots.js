export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'], // Halaman yang tidak boleh di-scan Google
    },
    sitemap: 'https://dmp.bio/sitemap.xml', // Next.js otomatis generate XML dari sitemap.js tadi
  }
}