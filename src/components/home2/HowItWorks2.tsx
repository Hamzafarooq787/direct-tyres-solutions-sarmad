import DrawLine from "../DrawLine";
import Reveal from "../Reveal";
import { howItWorksSteps } from "@/lib/site-data";

export default function HowItWorks2() {
  return (
    <section className="py-24 bg-[#f2f4f6] px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-20">
          <h2 className="font-heading text-[28px] leading-[34px] md:text-[32px] md:leading-[40px] font-bold text-[#001026] mb-4">
            How It Works
          </h2>
          <p className="font-sans text-base leading-6 text-[#44474e] max-w-2xl mx-auto">
            Three simple steps to get you moving again.
          </p>
        </Reveal>
        <div className="relative max-w-4xl mx-auto">
          <DrawLine
            containerClassName="absolute top-8 left-[10%] right-[10%] h-0.5 bg-[#001026]/10 hidden md:block"
            stroke="#0B2545"
            strokeWidth={2}
            linecap="butt"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {howItWorksSteps.map((step, i) => (
              <Reveal key={step.number} delayMs={i * 200} className="text-center">
                <div
                  className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center font-heading text-2xl mb-6 shadow-lg ${
                    step.number === 2
                      ? "bg-[#fdc003] text-[#001026]"
                      : "bg-[#001026] text-white"
                  }`}
                >
                  {step.number}
                </div>
                <h3 className="font-heading text-xl text-[#001026] mb-3">{step.title}</h3>
                <p className="font-sans text-[#44474e]">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
