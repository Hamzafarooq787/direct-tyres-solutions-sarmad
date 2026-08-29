import Image from "next/image";
import { Handshake, MessageCircle, PhoneCall, Star, Timer, BadgeCheck } from "lucide-react";
import Reveal from "../Reveal";
import { heroImageV2, siteConfigV2 } from "@/lib/site-data-v2";

export default function Hero2() {
  const telHref = `tel:${siteConfigV2.phone.replace(/\s/g, "")}`;

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Mobile tyre fitting van at night"
          src={heroImageV2}
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 via-[#1a1a1a]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-6 pt-24 pb-16">
        <Reveal className="md:col-span-8 lg:col-span-8 flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 w-fit">
            <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
              <span className="text-[#4285F4] font-bold text-sm leading-none">G</span>
            </div>
            <div className="flex text-[#FBBC05] text-sm">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-xs font-bold text-white tracking-wide">
              Rated 4.9/5 on Google
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tighter uppercase">
            24/7 Mobile <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-orange-400">
              Tyre Fitting
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            Fast, professional mobile tyre assistance near you. We bring the
            garage to your location, day or night. Fully equipped vans for
            all your tyre needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={telHref}
              className="bg-[#ff6b00] text-white rounded-full px-8 py-4 font-semibold flex items-center justify-center transition-all duration-300 hover:bg-orange-700 hover:shadow-[0_4px_14px_0_rgba(255,107,0,0.39)] hover:-translate-y-0.5 w-full sm:w-auto h-[60px] text-lg"
            >
              <PhoneCall className="mr-2 h-5 w-5" fill="currentColor" strokeWidth={0} />
              CALL NOW: {siteConfigV2.phone}
            </a>
            <a
              href="#"
              className="bg-transparent border border-white/50 text-white rounded-full px-8 py-4 font-semibold flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-[#1a1a1a] w-full sm:w-auto h-[60px] text-lg backdrop-blur-sm"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Support
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-6 mt-4 border-t border-white/10 max-w-2xl">
            <div className="flex items-center gap-1.5 text-white/80">
              <Handshake className="h-5 w-5 text-[#ff6b00]" />
              <span className="text-sm font-semibold tracking-wide">RAC/AA Partner</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/80">
              <BadgeCheck className="h-5 w-5 text-[#ff6b00]" />
              <span className="text-sm font-semibold tracking-wide">Certified Technicians</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/80">
              <Timer className="h-5 w-5 text-[#ff6b00]" />
              <span className="text-sm font-semibold tracking-wide">30-60 Min Response</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
