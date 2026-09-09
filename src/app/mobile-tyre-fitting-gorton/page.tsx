import type { Metadata } from "next";
import GortonPage from "@/components/locations/GortonPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Gorton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Gorton, East Manchester. Fast roadside and doorstep tyre replacement within 20–35 minutes.",
};

export default function Page() {
  return <GortonPage />;
}
