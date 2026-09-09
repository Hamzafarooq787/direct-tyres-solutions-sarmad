import type { Metadata } from "next";
import LongsightPage from "@/components/locations/LongsightPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Longsight | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Longsight, South Manchester. Rapid on-demand mobile tyre fitting within 20–35 minutes.",
};

export default function Page() {
  return <LongsightPage />;
}
