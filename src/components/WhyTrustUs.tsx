import { Clock, Tag, Wrench } from "lucide-react";
import Reveal from "./Reveal";
import { trustPoints } from "@/lib/site-data";

const icons = { clock: Clock, wrench: Wrench, tag: Tag } as const;

export default function WhyTrustUs() {
  return (
    <section className="py-24 bg-surface-light px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Trust Tyre Assist 24/7?
          </h2>
          <p className="font-sans text-lg text-text-muted max-w-2xl mx-auto">
            We understand the urgency of being stranded. Our infrastructure
            is built for speed and reliability.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustPoints.map((point, i) => {
            const Icon = icons[point.icon as keyof typeof icons];
            return (
              <Reveal key={point.title} delayMs={(i + 1) * 100}>
                <div className="bg-surface p-8 rounded-[14px] shadow-sm hover-lift border-t-4 border-transparent hover:border-secondary transition-all duration-300 relative mt-6 h-full">
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shadow-md">
                    <Icon className="h-6 w-6" fill="currentColor" strokeWidth={0} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-3 mt-4">
                    {point.title}
                  </h3>
                  <p className="font-sans text-text-muted leading-relaxed">
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
