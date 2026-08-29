import Image from "next/image";
import { ArrowRight, BatteryCharging, Home as HomeIcon, Siren, Wrench } from "lucide-react";
import Reveal from "./Reveal";
import { services } from "@/lib/site-data";

const icons = {
  siren: Siren,
  house: HomeIcon,
  wrench: Wrench,
  "battery-charging": BatteryCharging,
} as const;

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="font-sans text-lg text-text-muted max-w-2xl mx-auto">
            Comprehensive mobile tyre solutions tailored to get you back on
            the road safely and swiftly.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <Reveal key={service.title} delayMs={i * 100}>
                <div className="bg-surface rounded-[14px] border border-border-color shadow-sm hover-lift overflow-hidden group h-full flex flex-col">
                  <div className="relative h-48 image-zoom-container overflow-hidden">
                    <Image
                      alt={service.title}
                      src={service.image}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute -bottom-6 left-6 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary border-4 border-surface z-10">
                      <Icon className="h-6 w-6" fill="currentColor" strokeWidth={0} />
                    </div>
                  </div>
                  <div className="p-6 pt-10 flex flex-col grow">
                    <h3 className="font-heading text-lg font-bold text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="font-sans text-sm text-text-muted mb-4 line-clamp-3 grow">
                      {service.description}
                    </p>
                    <a
                      href="#services"
                      className="inline-flex items-center font-bold text-sm text-secondary hover:text-secondary-hover transition-colors"
                    >
                      Learn More <ArrowRight className="ml-1 h-[18px] w-[18px]" />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
