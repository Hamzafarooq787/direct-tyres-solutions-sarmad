import BrandsMarquee from "./BrandsMarquee";
import CoverageMarquee from "./CoverageMarquee";
import Footer from "./Footer";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Navbar from "./Navbar";
import Pricing from "./Pricing";
import QuoteContact from "./QuoteContact";
import Services from "./Services";
import WhyTrustUs from "./WhyTrustUs";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CoverageMarquee />
        <WhyTrustUs />
        <Services />
        <HowItWorks />
        <BrandsMarquee />
        <Pricing />
        <QuoteContact />
      </main>
      <Footer />
    </>
  );
}
