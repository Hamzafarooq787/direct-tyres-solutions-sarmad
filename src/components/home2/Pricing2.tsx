import { CheckCircle2, XCircle } from "lucide-react";
import Reveal from "../Reveal";
import { pricingPlans } from "@/lib/site-data";

export default function Pricing2() {
  return (
    <section id="pricing" className="py-24 bg-[#f8f9fb] px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="font-heading text-[28px] leading-[34px] md:text-[32px] md:leading-[40px] font-bold text-[#001026] mb-4">
            Transparent Pricing
          </h2>
          <p className="font-sans text-base leading-6 text-[#44474e] max-w-2xl mx-auto">
            No hidden fees. Premium service at competitive rates.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delayMs={i * 100}>
              {plan.featured ? (
                <div className="bg-[#001026] rounded-xl p-8 relative transform md:-translate-y-4 shadow-xl">
                  {"badge" in plan && plan.badge && (
                    <div className="absolute top-0 right-0 bg-[#fdc003] text-[#001026] font-bold text-xs py-1 px-3 rounded-bl-lg rounded-tr-xl uppercase tracking-wider">
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="font-heading text-2xl text-white mb-2">{plan.name}</h3>
                  <p className="text-white/70 mb-6">{plan.subtitle}</p>
                  <div className="mb-6">
                    <span className="font-heading text-4xl text-[#fdc003]">{plan.price}</span>
                    <span className="text-white/70">/from</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature.label} className="flex items-center text-white">
                        <CheckCircle2 className="text-[#fdc003] mr-3 h-5 w-5" fill="currentColor" stroke="#001026" />
                        {feature.label}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="w-full py-3 bg-[#fdc003] text-[#001026] font-bold rounded hover:bg-[#fdc003]/90 transition-colors shadow-lg"
                  >
                    {plan.cta}
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-[#c4c6cf]/30 p-8">
                  <h3 className="font-heading text-2xl text-[#001026] mb-2">{plan.name}</h3>
                  <p className="text-[#44474e] mb-6">{plan.subtitle}</p>
                  <div className="mb-6">
                    <span className="font-heading text-4xl text-[#001026]">{plan.price}</span>
                    <span className="text-[#44474e]">/from</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) =>
                      feature.included ? (
                        <li key={feature.label} className="flex items-center text-[#191c1e]">
                          <CheckCircle2 className="text-[#fdc003] mr-3 h-5 w-5" fill="currentColor" stroke="#001026" />
                          {feature.label}
                        </li>
                      ) : (
                        <li key={feature.label} className="flex items-center text-[#44474e] opacity-50">
                          <XCircle className="mr-3 h-5 w-5" />
                          {feature.label}
                        </li>
                      ),
                    )}
                  </ul>
                  <button
                    type="button"
                    className="w-full py-3 border-2 border-[#001026] text-[#001026] font-bold rounded hover:bg-[#001026]/5 transition-colors"
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
