import Image from "next/image";
import { CheckCircle2, Globe, MessageCircle, PhoneCall } from "lucide-react";
import Reveal from "../Reveal";
import { heroChecklist3, siteConfig3 } from "@/lib/site-data3";
import { heroFleetImage } from "@/lib/site-data-v2";

export default function Hero3() {
  const telHref = `tel:${siteConfig3.phone.replace(/\s/g, "")}`;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Direct Tyre Solutions fleet of mobile tyre-fitting vans outside the depot at dusk"
          src={heroFleetImage}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/80 to-primary-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-primary-dark/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
        <Reveal className="max-w-2xl flex flex-col gap-5">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight uppercase">
            24/7 Mobile
            <br />
            <span className="text-secondary">Tyre Fitting</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
            Fast, professional mobile tyre assistance wherever you are. We
            come to you, day or night.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {heroChecklist3.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-white font-medium">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" fill="currentColor" stroke="var(--color-primary-dark)" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href={telHref}
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-secondary text-primary font-bold rounded-full shadow-lg hover:bg-secondary-hover transition-colors min-h-14 text-sm sm:text-base w-full sm:w-auto"
            >
              <PhoneCall className="h-5 w-5 shrink-0" fill="currentColor" strokeWidth={0} />
              CALL NOW: {siteConfig3.phone}
            </a>
            <a
              href="https://wa.me/447955266077"
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border-2 border-secondary text-secondary font-bold rounded-full hover:bg-secondary hover:text-primary transition-all min-h-14 text-sm sm:text-base w-full sm:w-auto"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              WhatsApp Us
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-3">
            <div className="flex items-center gap-2.5 text-gray-300 text-sm">
              <Globe className="h-5 w-5 text-secondary shrink-0" />
              Nationwide presence covering the UK
            </div>
            <div className="flex items-center gap-2.5 text-gray-300 text-sm">
              <span className="flex flex-col items-center justify-center w-9 h-9 rounded-full border-2 border-secondary text-secondary shrink-0 leading-none">
                <span className="text-[7px] font-bold tracking-wide">EST</span>
                <span className="text-[8px] font-black">1996</span>
              </span>
              30+ Year Family Business
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
