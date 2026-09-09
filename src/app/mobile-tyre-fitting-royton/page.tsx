import type { Metadata } from "next";
import RoytonPage from "@/components/locations/RoytonPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Royton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Royton. Workshop-grade mobile tyre changes direct to your location within 20–35 minutes.",
};

export default function Page() {
  return <RoytonPage />;
}
