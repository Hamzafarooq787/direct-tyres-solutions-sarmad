import Image from "next/image";
import { BadgeCheck, FileText, Siren, Star } from "lucide-react";
import Reveal from "../Reveal";
import { heroImageV2, siteConfig } from "@/lib/site-data";

export default function Hero2() {
  return (
    <section className="relative min-h-[800px] flex items-center bg-[#001026] overflow-hidden">
      <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-full bg-[#001026] relative z-10 p-8 md:p-16 flex items-center">
          <Reveal className="max-w-xl mx-auto md:ml-auto md:mr-12">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-[#fdc003]/10 border border-[#fdc003]/20 text-[#fdc003] font-mono text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-[#fdc003] mr-2 animate-pulse" />
              Technicians on Standby 24/7
            </div>
            <h1 className="font-heading text-[28px] leading-[34px] md:text-[48px] md:leading-[56px] md:tracking-[-0.02em] font-extrabold text-white mb-6 drop-shadow-sm">
              24/7 Mobile Tyre Fitting – We Come to You
            </h1>
            <p className="font-sans text-lg leading-7 text-white/80 mb-8 max-w-lg">
              Premium service at your doorstep or roadside. Expert
              technicians, rapid response. Don&apos;t let a flat tyre ruin
              your day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="animate-pulse-amber flex items-center justify-center px-8 py-4 bg-[#fdc003] text-[#6c5000] font-mono text-xs font-bold uppercase tracking-wider rounded shadow-[0px_8px_24px_rgba(11,37,69,0.08)]"
              >
                <Siren className="mr-2 h-5 w-5" fill="currentColor" strokeWidth={0} />
                Call Now - Emergency
              </a>
              <a
                href="#quote"
                className="flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider rounded hover:bg-white/5 transition-colors duration-200"
              >
                <FileText className="mr-2 h-5 w-5" />
                Get a Quote
              </a>
            </div>
            <div className="flex items-center space-x-6 text-white/60 font-mono text-xs">
              <div className="flex items-center">
                <Star className="mr-2 h-4 w-4 text-[#fdc003]" fill="currentColor" strokeWidth={0} />
                Rated 5 Stars
              </div>
              <div className="flex items-center">
                <BadgeCheck className="mr-2 h-4 w-4 text-[#fdc003]" fill="currentColor" stroke="#001026" />
                Local Experts
              </div>
            </div>
          </Reveal>
        </div>

        <div className="w-full md:w-1/2 h-full absolute md:relative inset-0 opacity-30 md:opacity-100">
          <Image
            alt="Mobile tyre fitting technician at work"
            src={heroImageV2}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001026] to-transparent hidden md:block" />
          <div className="absolute inset-0 bg-[#001026]/70 md:hidden" />
        </div>
      </div>
    </section>
  );
}
