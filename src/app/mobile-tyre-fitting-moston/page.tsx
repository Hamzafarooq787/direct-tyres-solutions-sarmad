import type { Metadata } from "next";
import MostonPage from "@/components/locations/MostonPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Moston | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Moston, North Manchester. On-demand mobile tyre fitting within 20–35 minutes.",
};

export default function Page() {
  return <MostonPage />;
}
