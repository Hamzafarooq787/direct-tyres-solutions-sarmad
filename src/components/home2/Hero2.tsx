import Image from "next/image";
import { Handshake, MessageCircle, PhoneCall, Star, Timer, BadgeCheck } from "lucide-react";
import Reveal from "../Reveal";
import GoogleIcon from "./GoogleIcon";
import { heroImageV2, siteConfigV2 } from "@/lib/site-data-v2";

const trustSignals = [
  { icon: Handshake, label: "RAC/AA Partner" },
  { icon: BadgeCheck, label: "Certified Technicians" },
  { icon: Timer, label: "30-60 Min Response" },
] as const;

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
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 via-[#1a1a1a]/75 to-[#1a1a1a]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-6 pt-28 pb-16">
        <Reveal className="md:col-span-9 lg:col-span-8 flex flex-col justify-center space-y-7">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] pl-3 pr-5 py-2.5 w-fit">
            <GoogleIcon className="h-8 w-8 shrink-0" />
            <div className="h-8 w-px bg-gray-200" />
            <div>
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-lg font-black text-[#1a1a1a]">4.9</span>
                <div className="flex text-[#FBBC05]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>
              <p className="text-xs font-semibold text-gray-500 mt-0.5">500+ Google Reviews</p>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 text-[#ff6b00] font-bold text-sm tracking-[0.15em] uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse" />
              North West&apos;s Trusted Mobile Tyre Specialist
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tighter uppercase text-shadow">
              24/7 Mobile <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-orange-400">
                Tyre Fitting
              </span>
            </h1>
          </div>

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
              className="bg-white/5 border border-white/30 text-white rounded-full px-8 py-4 font-semibold flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-[#1a1a1a] w-full sm:w-auto h-[60px] text-lg backdrop-blur-sm"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Support
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-6 mt-2 border-t border-white/10 max-w-2xl">
            {trustSignals.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-2 pr-4 py-1.5"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#ff6b00]/15 shrink-0">
                  <Icon className="h-3.5 w-3.5 text-[#ff6b00]" />
                </span>
                <span className="text-sm font-semibold text-white/90 tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
