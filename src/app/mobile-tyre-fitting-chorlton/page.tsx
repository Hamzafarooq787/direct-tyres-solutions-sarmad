import type { Metadata } from "next";
import ChorltonPage from "@/components/locations/ChorltonPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Chorlton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Chorlton-cum-Hardy, Manchester. Emergency roadside and driveway tyre replacement within 20–35 minutes.",
};

export default function Page() {
  return <ChorltonPage />;
}
