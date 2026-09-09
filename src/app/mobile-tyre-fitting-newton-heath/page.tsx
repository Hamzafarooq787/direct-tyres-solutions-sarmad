import type { Metadata } from "next";
import NewtonHeathPage from "@/components/locations/NewtonHeathPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Newton Heath | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Newton Heath, Manchester. On-demand mobile tyre fitting within 20–35 minutes.",
};

export default function Page() {
  return <NewtonHeathPage />;
}
