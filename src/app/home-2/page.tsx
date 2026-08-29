import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Tyre Assist 24/7 - Mobile Tyre Fitting (Layout 2)",
};

export default function Page() {
  return <HomePage variant="v2" />;
}
