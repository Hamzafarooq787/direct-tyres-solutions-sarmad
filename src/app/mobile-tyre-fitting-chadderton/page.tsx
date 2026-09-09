import type { Metadata } from "next";
import ChaddertonPage from "@/components/locations/ChaddertonPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Chadderton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Chadderton. Rapid mobile tyre replacement direct to your driveway, workplace, or roadside within 20–35 minutes.",
};

export default function Page() {
  return <ChaddertonPage />;
}
