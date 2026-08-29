import Image from "next/image";
import { CheckCircle2, FileText, PhoneCall, Star } from "lucide-react";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="relative min-h-[700px] flex items-center bg-primary overflow-hidden">
      <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-full bg-primary relative z-20 p-6 md:p-12 lg:p-20 flex items-center">
          <Reveal className="max-w-xl mx-auto md:ml-auto md:mr-0">
            <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-secondary/10 border border-secondary/30 text-secondary font-bold text-xs tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse" />
              Technicians on Standby 24/7
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              24/7 Mobile Tyre Fitting — We Come to You
            </h1>
            <p className="font-sans text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
              Premium service at your doorstep or roadside. Expert
              technicians, rapid response. Don&apos;t let a flat tyre ruin
              your day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="animate-pulse-amber btn-scale flex items-center justify-center px-8 py-4 bg-secondary text-primary font-bold rounded-full shadow-lg"
              >
                <PhoneCall className="mr-2 h-5 w-5" fill="currentColor" strokeWidth={0} />
                Call Now — Emergency
              </a>
              <a
                href="#quote"
                className="btn-scale flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all"
              >
                <FileText className="mr-2 h-5 w-5" />
                Get a Quote
              </a>
            </div>
            <div className="flex items-center space-x-6 text-white/80 font-medium text-sm">
              <div className="flex items-center">
                <div className="flex text-secondary mr-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                Rated 5 Stars
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-secondary" fill="currentColor" stroke="var(--color-primary)" />
                Local Experts
              </div>
            </div>
          </Reveal>
        </div>

        <div className="w-full md:w-1/2 h-full absolute md:relative inset-0 z-10">
          <div className="absolute inset-0 bg-primary/80 md:hidden z-10" />
          <div className="hidden md:block absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary to-transparent z-10" />
          <Image
            alt="Mobile tyre fitting at night"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYoUX5vVinHd9KXFUTSVapc_vPnNxMwjs8kUk3dF7yUZX1DD9UrJ0z_v1OhY6KnJyR4JzAy2XVNZia-_-YZV-s2kC2SRdX0uwJEuUwNliaF3Z7j0p9Ps2II50N-SPeMEOz5UHM4nDJM_4Wu2nPlnkWM75otwO1eIbRYPriZw6SOPhQbhLs8hbOsezwHk7ld9Zl2YOC7w8jX9F9Py4mW1nvoEJg6SRyWs92NZqLq-tme5VNUzu3JhPP"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
