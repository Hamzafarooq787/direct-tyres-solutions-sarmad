import DrawLine from "./DrawLine";
import Reveal from "./Reveal";
import { howItWorksSteps } from "@/lib/site-data";

export default function HowItWorks() {
  return (
    <section className="py-24 bg-surface-light px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="font-sans text-lg text-text-muted max-w-2xl mx-auto">
            Three simple steps to get you moving again.
          </p>
        </Reveal>
        <div className="relative max-w-5xl mx-auto">
          <DrawLine />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {howItWorksSteps.map((step, i) => (
              <Reveal key={step.number} delayMs={i * 200} className="text-center">
                <div
                  className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center font-heading text-3xl font-bold mb-6 border-4 border-surface-light ${
                    step.number === 2
                      ? "bg-secondary text-primary shadow-lg transform scale-110"
                      : "bg-primary text-white shadow-md"
                  }`}
                >
                  {step.number}
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-text-muted">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
