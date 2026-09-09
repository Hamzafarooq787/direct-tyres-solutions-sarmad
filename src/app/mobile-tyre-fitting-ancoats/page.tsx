import type { Metadata } from "next";
import AncoatsPage from "@/components/locations/AncoatsPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Ancoats | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Ancoats. On-demand roadside and curbside tyre replacement for apartment residents and businesses in 20–35 minutes.",
};

export default function Page() {
  return <AncoatsPage />;
}
