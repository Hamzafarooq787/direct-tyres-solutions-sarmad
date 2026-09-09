import type { Metadata } from "next";
import HomePage3 from "@/components/home3/HomePage3";

export const metadata: Metadata = {
  title: "Direct Tyre Solutions | 24/7 Mobile Tyre Fitting",
  description:
    "Fast, professional mobile tyre assistance wherever you are. We come to you, day or night, across the UK.",
};

export default function Page() {
  return <HomePage3 />;
}
