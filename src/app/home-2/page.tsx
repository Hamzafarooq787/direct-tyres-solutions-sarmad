import type { Metadata } from "next";
import HomePage2 from "@/components/home2/HomePage2";

export const metadata: Metadata = {
  title: "Rapid Response Tyres | 24/7 Mobile Tyre Fitting",
  description:
    "Fast, professional mobile tyre assistance near you. We bring the garage to your location, day or night, across the North West.",
};

export default function Page() {
  return <HomePage2 />;
}
