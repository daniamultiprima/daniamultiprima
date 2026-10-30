import { finderItems } from "@/lib/regions";

// Data pencari kota, dibuat statis saat build dan diambil hanya ketika pengguna mulai mencari
export const dynamic = "force-static";

export function GET() {
  return Response.json(finderItems(), { headers: { "Cache-Control": "public, max-age=86400" } });
}
