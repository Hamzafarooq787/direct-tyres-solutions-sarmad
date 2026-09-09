import type { Metadata } from "next";
import CheethamHillPage from "@/components/locations/CheethamHillPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Cheetham Hill | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Cheetham Hill, Manchester. Emergency roadside and driveway tyre fitting within 20–35 minutes.",
};

export default function Page() {
  return <CheethamHillPage />;
}
