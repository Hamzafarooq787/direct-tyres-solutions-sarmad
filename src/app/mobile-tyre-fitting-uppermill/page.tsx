import type { Metadata } from "next";
import UppermillPage from "@/components/locations/UppermillPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Uppermill | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Uppermill, Saddleworth. Rapid roadside and driveway tyre replacement within 25–40 minutes.",
};

export default function Page() {
  return <UppermillPage />;
}
