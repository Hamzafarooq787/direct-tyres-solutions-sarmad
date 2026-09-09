import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Tyre Assist 24/7 - Mobile Tyre Fitting",
  description:
    "24/7 mobile tyre fitting that comes to you. Emergency call-outs, home & work fitting, puncture repair and battery jumpstarts across the UK.",
};

export default function Page() {
  return <HomePage />;
}
