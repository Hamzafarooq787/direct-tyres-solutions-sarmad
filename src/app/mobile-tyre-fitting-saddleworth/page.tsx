import type { Metadata } from "next";
import SaddleworthPage from "@/components/locations/SaddleworthPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Saddleworth | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting across Saddleworth's villages and moorland roads. All-terrain vans reaching you in 25–40 minutes.",
};

export default function Page() {
  return <SaddleworthPage />;
}
