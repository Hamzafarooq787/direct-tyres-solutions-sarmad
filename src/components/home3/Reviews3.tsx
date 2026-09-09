"use client";

import { useRef } from "react";
import { ChevronRight, CheckCircle2, Star } from "lucide-react";
import Reveal from "../Reveal";
import GoogleIcon from "../home2/GoogleIcon";
import { testimonials3 } from "@/lib/site-data3";

export default function Reviews3() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollNext() {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-review-card]");
    const cardWidth = card instanceof HTMLElement ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: cardWidth, behavior: "smooth" });
  }

  return (
    <section id="reviews" className="py-24 bg-primary-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Reveal className="mb-4">
          <span className="text-secondary font-bold tracking-[0.15em] uppercase text-sm mb-3 block">
            What Our Customers Say
          </span>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <Reveal className="lg:col-span-3 flex flex-col gap-2">
            <GoogleIcon className="h-9 w-9" />
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-white">4.9</span>
            </div>
            <div className="flex text-secondary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5" fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-gray-400 text-sm font-semibold">500+ Reviews</span>
          </Reveal>

          <div className="lg:col-span-9 relative">
            <div
              ref={trackRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {testimonials3.map((review, i) => (
                <Reveal
                  key={review.name}
                  delayMs={i * 80}
                  className="shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
                >
                  <div data-review-card className="bg-primary/60 border border-white/10 rounded-2xl p-6 h-full flex flex-col gap-4">
                    <div className="flex text-secondary">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed flex-1">{review.quote}</p>
                    <span className="text-secondary font-bold text-sm">&ndash; {review.name}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next review"
              className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-primary border border-white/20 items-center justify-center text-white hover:bg-accent hover:border-accent transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <Reveal className="flex flex-wrap items-center justify-center gap-3 mt-16 pt-8 border-t border-white/10 text-center">
          <span className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wide">
            <CheckCircle2 className="h-5 w-5 text-green-500" fill="currentColor" stroke="var(--color-primary-dark)" />
            100% Satisfaction Guarantee
          </span>
          <span className="hidden sm:inline text-gray-600">|</span>
          <span className="text-gray-400 text-sm">If you&apos;re not happy, we&apos;ll make it right.</span>
        </Reveal>
      </div>
    </section>
  );
}
