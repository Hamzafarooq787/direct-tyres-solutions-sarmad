import type { Metadata } from "next";
import RochdalePage from "@/components/locations/RochdalePage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Rochdale | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Rochdale & M62 corridor. Emergency roadside and home driveway tyre fitting within 20–35 minutes.",
};

export default function Page() {
  return <RochdalePage />;
}
