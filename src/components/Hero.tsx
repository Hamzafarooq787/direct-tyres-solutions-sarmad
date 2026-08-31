import Image from "next/image";
import { CheckCircle2, FileText, PhoneCall, Star } from "lucide-react";
import Reveal from "./Reveal";
import { heroFleetImage, siteConfig } from "@/lib/site-data";

const trustSignals = [
  { icon: Star, label: "Rated 5 Stars" },
  { icon: CheckCircle2, label: "Local Experts" },
] as const;

export default function Hero() {
  const telHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Direct Tyre Solutions fleet of mobile tyre-fitting vans outside the depot"
          src={heroFleetImage}
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-6 pt-28 sm:pt-32 md:pt-40 pb-16">
        <Reveal className="md:col-span-9 lg:col-span-8 flex flex-col justify-center space-y-5">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary font-bold text-xs tracking-wide uppercase w-fit">
            <span className="w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse" />
            Technicians on Standby 24/7
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight">
            24/7 Mobile Tyre Fitting
            <br />
            <span className="text-secondary">— We Come to You</span>
          </h1>

          <p className="font-sans text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Premium service at your doorstep or roadside. Expert
            technicians, rapid response. Don&apos;t let a flat tyre ruin
            your day.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href={telHref}
              className="animate-pulse-amber btn-scale flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 bg-secondary text-primary font-bold rounded-full shadow-lg min-h-14 text-sm sm:text-base w-full sm:w-auto"
            >
              <PhoneCall className="h-5 w-5 shrink-0" fill="currentColor" strokeWidth={0} />
              Call Now — Emergency
            </a>
            <a
              href="#quote"
              className="btn-scale flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 bg-white/5 border border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all min-h-14 text-sm sm:text-base w-full sm:w-auto backdrop-blur-sm"
            >
              <FileText className="h-5 w-5 shrink-0" />
              Get a Quote
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10 max-w-3xl">
            {trustSignals.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-2 pr-4 py-1.5"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary/15 shrink-0">
                  <Icon className="h-3.5 w-3.5 text-secondary" fill="currentColor" stroke="var(--color-primary)" />
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
