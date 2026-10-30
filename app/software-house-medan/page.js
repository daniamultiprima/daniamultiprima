import LocalLanding, { localMeta } from "@/ui/LocalLanding";
import { getMedanPage } from "@/lib/medan-pages";

const page = getMedanPage("software-house-medan");

export const metadata = localMeta(page);

export default function Page() {
  return <LocalLanding page={page} />;
}
