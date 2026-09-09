import { MessageCircle, PhoneCall } from "lucide-react";
import Reveal from "../Reveal";
import { siteConfig3 } from "@/lib/site-data3";

export default function CTA3() {
  const telHref = `tel:${siteConfig3.phone.replace(/\s/g, "")}`;

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-accent/80 to-accent p-8 md:p-10 shadow-xl">
            <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full border-[16px] border-white/10 pointer-events-none hidden md:block" />
            <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-secondary/10 blur-2xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="hidden sm:flex items-center justify-center w-16 h-16 rounded-full bg-white/15 shrink-0">
                  <PhoneCall className="h-7 w-7 text-white" fill="currentColor" strokeWidth={0} />
                </span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-white">Need Help Now?</h2>
                  <p className="text-secondary font-bold text-lg">We&apos;re Ready 24/7</p>
                  <p className="text-white/80 text-sm mt-1 max-w-md">
                    Fast response, expert service, wherever you are in the UK.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
                <a
                  href={telHref}
                  className="flex items-center justify-center gap-2 px-7 py-3.5 bg-secondary text-primary font-bold rounded-full shadow-lg hover:bg-secondary-hover transition-colors min-h-14 text-sm sm:text-base"
                >
                  <PhoneCall className="h-5 w-5 shrink-0" fill="currentColor" strokeWidth={0} />
                  CALL NOW: {siteConfig3.phone}
                </a>
                <a
                  href="https://wa.me/447955266077"
                  className="flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all min-h-14 text-sm sm:text-base"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
