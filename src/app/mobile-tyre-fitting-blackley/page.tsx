import type { Metadata } from "next";
import BlackleyPage from "@/components/locations/BlackleyPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Blackley | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Blackley, North Manchester. Emergency roadside and doorstep tyre replacement within 20–35 minutes.",
};

export default function Page() {
  return <BlackleyPage />;
}
