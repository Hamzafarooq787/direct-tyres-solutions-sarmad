import { BatteryCharging, Home as HomeIcon, Siren, Wrench } from "lucide-react";
import Reveal from "../Reveal";
import { services } from "@/lib/site-data";

const icons = {
  siren: Siren,
  house: HomeIcon,
  wrench: Wrench,
  "battery-charging": BatteryCharging,
} as const;

export default function Services2() {
  return (
    <section id="services" className="py-24 bg-[#f8f9fb] px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="font-heading text-[28px] leading-[34px] md:text-[32px] md:leading-[40px] font-bold text-[#001026] mb-4">
            Our Services
          </h2>
          <p className="font-sans text-base leading-6 text-[#44474e] max-w-2xl mx-auto">
            Comprehensive mobile tyre solutions tailored to get you back on
            the road safely and swiftly.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <Reveal key={service.title} delayMs={i * 100}>
                <div className="group bg-white p-8 rounded-xl border border-[#0b2545]/10 shadow-sm transition-all duration-300 hover:-translate-y-1.5 h-full">
                  <div className="w-12 h-12 bg-[#fdc003]/10 rounded flex items-center justify-center text-[#6c5000] mb-6">
                    <Icon className="h-7 w-7 transition-transform duration-500 group-hover:-translate-y-1" />
                  </div>
                  <h3 className="font-heading text-xl leading-tight font-bold text-[#001026] mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-[#44474e]">
                    {service.description}
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
