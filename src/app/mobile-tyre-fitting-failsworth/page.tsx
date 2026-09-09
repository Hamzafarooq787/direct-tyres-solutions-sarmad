import type { Metadata } from "next";
import FailsworthPage from "@/components/locations/FailsworthPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Failsworth | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Failsworth. Professional mobile tyre replacement fitted on your drive or roadside within 20–30 minutes.",
};

export default function Page() {
  return <FailsworthPage />;
}
