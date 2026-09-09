import { MessageCircle, PhoneCall } from "lucide-react";
import Reveal from "../Reveal";
import { siteConfig3 } from "@/lib/site-data3";

export default function CTA3() {
  const telHref = `tel:${siteConfig3.phone.replace(/\s/g, "")}`;

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary-dark p-8 md:p-10 shadow-xl">
            {/* Gold diagonal panel */}
            <div
              className="absolute inset-y-0 right-0 w-[68%] sm:w-[58%] bg-secondary"
              style={{ clipPath: "polygon(32% 0%, 100% 0%, 100% 100%, 12% 100%)" }}
            />
            <div
              className="absolute inset-y-0 right-0 w-[68%] sm:w-[58%] opacity-60"
              style={{
                clipPath: "polygon(32% 0%, 100% 0%, 100% 100%, 12% 100%)",
                background:
                  "radial-gradient(circle at 25% 15%, rgba(255,255,255,0.5), transparent 35%), radial-gradient(circle at 80% 85%, rgba(0,0,0,0.2), transparent 45%)",
              }}
            />

            {/* Decorative tyre graphic bleeding off the corner */}
            <svg
              className="absolute -right-6 -bottom-10 md:-right-4 md:-bottom-12 w-32 h-32 md:w-40 md:h-40 rotate-[15deg] opacity-80 pointer-events-none z-0"
              viewBox="0 0 200 200"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="100" cy="100" r="92" fill="#0b1e3d" />
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i * 360) / 24;
                return (
                  <rect
                    key={i}
                    x="97"
                    y="4"
                    width="6"
                    height="16"
                    rx="2"
                    fill="#061226"
                    transform={`rotate(${angle} 100 100)`}
                  />
                );
              })}
              <circle cx="100" cy="100" r="70" fill="none" stroke="#0058f7" strokeWidth="6" />
              <circle cx="100" cy="100" r="58" fill="none" stroke="#ffd700" strokeWidth="4" />
              <circle cx="100" cy="100" r="46" fill="#061226" />
            </svg>

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
              <div className="relative z-20 flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
                <a
                  href={telHref}
                  className="flex items-center justify-center gap-2.5 pl-2 pr-6 py-2 bg-primary-dark text-secondary font-bold rounded-full shadow-lg hover:bg-primary transition-colors min-h-14 text-sm sm:text-base"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent shrink-0">
                    <PhoneCall className="h-4 w-4 text-white" fill="currentColor" strokeWidth={0} />
                  </span>
                  <span className="whitespace-nowrap">
                    CALL NOW: <span className="text-white">{siteConfig3.phone}</span>
                  </span>
                </a>
                <a
                  href="https://wa.me/447955266077"
                  className="flex items-center justify-center gap-2 px-7 py-3.5 bg-primary-dark border-2 border-primary-dark text-white font-bold rounded-full hover:bg-primary transition-all min-h-14 text-sm sm:text-base"
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
