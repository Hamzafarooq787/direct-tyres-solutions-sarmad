import { ShieldCheck, Star, Timer, UserCheck } from "lucide-react";
import Reveal from "../Reveal";
import { trustBar3 } from "@/lib/site-data3";

const icons = {
  shield: ShieldCheck,
  "user-check": UserCheck,
  timer: Timer,
  star: Star,
} as const;

export default function TrustBar3() {
  return (
    <section id="trust" className="bg-primary-dark border-y border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 lg:divide-x lg:divide-white/10">
          {trustBar3.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Reveal
                key={item.title}
                delayMs={i * 80}
                className="flex items-center gap-3 lg:justify-center lg:px-4"
              >
                <Icon className="h-7 w-7 text-secondary shrink-0" />
                <div>
                  <h3 className="text-white font-bold text-sm leading-tight">{item.title}</h3>
                  <p className="text-gray-400 text-xs leading-tight">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
