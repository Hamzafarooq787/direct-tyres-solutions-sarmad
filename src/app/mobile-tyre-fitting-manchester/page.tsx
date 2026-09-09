import type { Metadata } from "next";
import ManchesterPage from "@/components/locations/ManchesterPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Manchester | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting across Greater Manchester. Emergency roadside and driveway tyre replacement in 20–35 minutes.",
};

export default function Page() {
  return <ManchesterPage />;
}
