// Kirim seluruh URL sitemap ke IndexNow (Bing, Yandex, Seznam, Naver).
// Jalankan setelah deploy:  npm run indexnow
const HOST = "dmp.bio";
const KEY = "847ff53c1bc6c9a6c36070048d80a1ff";

const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${urlList.length} URL dikirim, status ${res.status}`);
