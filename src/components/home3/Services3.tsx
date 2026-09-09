import { CreditCard, Disc, Lock, RefreshCw, Wrench } from "lucide-react";
import Reveal from "../Reveal";
import { services3 } from "@/lib/site-data3";

const icons = {
  disc: Disc,
  wrench: Wrench,
  refresh: RefreshCw,
  lock: Lock,
  card: CreditCard,
} as const;

export default function Services3() {
  return (
    <section id="services" className="py-24 bg-primary-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Reveal className="text-center mb-14">
          <span className="text-secondary font-bold tracking-[0.15em] uppercase text-sm mb-3 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Professional Tyre Solutions Wherever You Are
          </h2>
          <span className="block w-16 h-1 bg-secondary rounded-full mx-auto mt-4" />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services3.map((service, i) => {
            const is247 = service.icon === "24-7";
            const Icon = !is247 ? icons[service.icon as keyof typeof icons] : null;
            return (
              <Reveal key={service.title} delayMs={i * 80}>
                <div className="bg-primary/60 border border-white/10 rounded-2xl p-8 h-full flex flex-col items-center text-center hover:border-secondary/40 hover:-translate-y-1 transition-all duration-300">
                  <span className="flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-5 shrink-0">
                    {is247 ? (
                      <span className="text-white font-black text-sm leading-none">24/7</span>
                    ) : (
                      Icon && <Icon className="h-7 w-7 text-white" />
                    )}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  <span className="block w-10 h-1 bg-secondary rounded-full mt-5" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
