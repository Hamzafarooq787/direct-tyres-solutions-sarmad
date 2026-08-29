import { Car, Crosshair, PhoneCall, Wrench } from "lucide-react";
import Reveal from "../Reveal";
import { howItWorksV2 } from "@/lib/site-data-v2";

const icons = {
  "phone-in-talk": PhoneCall,
  "my-location": Crosshair,
  build: Wrench,
  "directions-car": Car,
} as const;

export default function HowItWorks2() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#1a1a1a] text-white">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-gray-900 to-[#111]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-16">
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            How It Works.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A seamless process designed to get you back on the road as
            quickly and safely as possible.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-2 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />
          {howItWorksV2.map((step, i) => {
            const Icon = icons[step.icon as keyof typeof icons];
            return (
              <Reveal
                key={step.number}
                delayMs={i * 100}
                className="relative z-10 flex flex-col items-center text-center p-4"
              >
                <div
                  className={`w-20 h-20 bg-[#1a1a1a] border-2 rounded-full flex items-center justify-center mb-6 ${
                    step.highlighted
                      ? "border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.2)]"
                      : "border-white/20"
                  }`}
                >
                  <Icon className={`h-8 w-8 ${step.highlighted ? "text-[#ff6b00]" : "text-white"}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {step.number}. {step.title}
                </h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
