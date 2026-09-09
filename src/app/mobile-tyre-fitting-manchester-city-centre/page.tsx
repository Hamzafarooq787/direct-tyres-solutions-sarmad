import type { Metadata } from "next";
import ManchesterCityCentrePage from "@/components/locations/ManchesterCityCentrePage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Manchester City Centre | Direct Tyre Solutions",
  description:
    "Specialist mobile tyre technicians equipped for city centre multi-storeys, underground car parks, and curbside emergencies in 15–30 minutes.",
};

export default function Page() {
  return <ManchesterCityCentrePage />;
}
