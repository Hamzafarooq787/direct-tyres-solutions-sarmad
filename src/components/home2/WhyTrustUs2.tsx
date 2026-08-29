import { Tag, Timer, Wrench } from "lucide-react";
import Reveal from "../Reveal";
import { trustPoints } from "@/lib/site-data";

const icons = { clock: Timer, wrench: Wrench, tag: Tag } as const;

export default function WhyTrustUs2() {
  return (
    <section className="py-24 bg-[#f2f4f6] px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="font-heading text-[28px] leading-[34px] md:text-[32px] md:leading-[40px] font-bold text-[#001026] mb-4">
            Why Trust Tyre Assist 24/7?
          </h2>
          <p className="font-sans text-base leading-6 text-[#44474e] max-w-2xl mx-auto">
            We understand the urgency of being stranded. Our infrastructure
            is built for speed and reliability.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustPoints.map((point, i) => {
            const Icon = icons[point.icon as keyof typeof icons];
            return (
              <Reveal key={point.title} delayMs={(i + 1) * 100}>
                <div className="group bg-white p-8 rounded-xl border border-[#0b2545]/10 shadow-[0px_8px_24px_rgba(11,37,69,0.08)] transition-all duration-300 hover:-translate-y-1.5 h-full">
                  <div className="w-12 h-12 bg-[#001026]/5 rounded flex items-center justify-center text-[#001026] mb-6">
                    <Icon className="h-7 w-7 transition-transform duration-500 group-hover:-translate-y-1" />
                  </div>
                  <h3 className="font-heading text-2xl leading-8 font-bold text-[#001026] mb-3">
                    {point.title}
                  </h3>
                  <p className="font-sans text-base leading-6 text-[#44474e]">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
