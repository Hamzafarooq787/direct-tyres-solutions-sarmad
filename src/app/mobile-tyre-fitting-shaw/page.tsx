import type { Metadata } from "next";
import ShawPage from "@/components/locations/ShawPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Shaw | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Shaw. Local emergency tyre fitting dispatched to your doorstep or roadside within 20–35 minutes.",
};

export default function Page() {
  return <ShawPage />;
}
