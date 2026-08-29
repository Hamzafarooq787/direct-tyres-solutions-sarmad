import BrandsMarquee2 from "./BrandsMarquee2";
import CoverageMarquee2 from "./CoverageMarquee2";
import Footer2 from "./Footer2";
import Hero2 from "./Hero2";
import HowItWorks2 from "./HowItWorks2";
import Navbar2 from "./Navbar2";
import Pricing2 from "./Pricing2";
import QuoteContact2 from "./QuoteContact2";
import Services2 from "./Services2";
import WhyTrustUs2 from "./WhyTrustUs2";

export default function HomePage2() {
  return (
    <>
      <Navbar2 />
      <main className="pt-20">
        <Hero2 />
        <CoverageMarquee2 />
        <WhyTrustUs2 />
        <Services2 />
        <HowItWorks2 />
        <BrandsMarquee2 />
        <Pricing2 />
        <QuoteContact2 />
      </main>
      <Footer2 />
    </>
  );
}
