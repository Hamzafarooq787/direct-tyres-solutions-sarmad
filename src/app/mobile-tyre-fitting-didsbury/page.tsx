import type { Metadata } from "next";
import DidsburyPage from "@/components/locations/DidsburyPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Didsbury | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Didsbury, Manchester. Premium on-driveway and roadside tyre replacement within 20–35 minutes.",
};

export default function Page() {
  return <DidsburyPage />;
}
