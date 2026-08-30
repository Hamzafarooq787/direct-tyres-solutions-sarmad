import { CheckCircle2, XCircle } from "lucide-react";
import Reveal from "./Reveal";
import { pricingPlans } from "@/lib/site-data";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-surface-light px-4 md:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Transparent Pricing
          </h2>
          <p className="font-sans text-lg text-text-muted max-w-2xl mx-auto">
            No hidden fees. Premium service at competitive rates.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delayMs={i * 100}>
              {plan.featured ? (
                <div className="bg-primary rounded-[14px] p-10 relative transform scale-100 md:scale-105 shadow-2xl border border-primary-light z-10">
                  {"badge" in plan && plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-primary font-bold text-xs py-1.5 px-4 rounded-full uppercase tracking-widest animate-glow-pulse whitespace-nowrap">
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-300 mb-8 text-sm">{plan.subtitle}</p>
                  <div className="mb-8 flex items-baseline">
                    <span className="font-heading text-5xl font-bold text-secondary">
                      {plan.price}
                    </span>
                    <span className="text-gray-300 ml-2">/from</span>
                  </div>
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature) => (
                      <li key={feature.label} className="flex items-center text-white">
                        <CheckCircle2 className="text-secondary mr-3 h-5 w-5" fill="currentColor" stroke="var(--color-primary)" />
                        {feature.label}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="w-full py-4 bg-secondary text-primary font-bold rounded-full hover:bg-secondary-hover transition-colors shadow-lg btn-scale"
                  >
                    {plan.cta}
                  </button>
                </div>
              ) : (
                <div className="bg-surface rounded-[14px] border border-border-color p-10 shadow-sm">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-text-muted mb-8 text-sm">{plan.subtitle}</p>
                  <div className="mb-8 flex items-baseline">
                    <span className="font-heading text-5xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-text-muted ml-2">/from</span>
                  </div>
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature) =>
                      feature.included ? (
                        <li key={feature.label} className="flex items-center text-text-main">
                          <CheckCircle2 className="text-secondary mr-3 h-5 w-5" fill="currentColor" stroke="var(--color-primary)" />
                          {feature.label}
                        </li>
                      ) : (
                        <li
                          key={feature.label}
                          className="flex items-center text-text-muted opacity-50"
                        >
                          <XCircle className="mr-3 h-5 w-5" />
                          {feature.label}
                        </li>
                      ),
                    )}
                  </ul>
                  <button
                    type="button"
                    className="w-full py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary/5 transition-colors btn-scale"
                  >
                    {plan.cta}
                  </button>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
