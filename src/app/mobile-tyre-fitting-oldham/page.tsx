import type { Metadata } from "next";
import OldhamPage from "@/components/locations/OldhamPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Oldham | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Oldham. Rapid response mobile workshops dispatched within 20–35 minutes to your home, workplace, or roadside.",
};

export default function Page() {
  return <OldhamPage />;
}
