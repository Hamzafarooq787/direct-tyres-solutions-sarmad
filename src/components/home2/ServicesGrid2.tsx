import Image from "next/image";
import { ArrowRight, Bandage, Disc, SlidersHorizontal, Unlock } from "lucide-react";
import Reveal from "../Reveal";
import { servicesV2 } from "@/lib/site-data-v2";

const icons = {
  "tire-repair": Disc,
  tune: SlidersHorizontal,
  healing: Bandage,
  "lock-open": Unlock,
} as const;

export default function ServicesGrid2() {
  return (
    <section className="py-24 bg-white scroll-mt-24" id="services">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <Reveal className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight mb-4">
              Premium Services.
            </h2>
            <p className="text-[#5a4136] text-lg">
              Comprehensive mobile tyre fitting and repair solutions tailored
              to your needs, delivered with precision.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden md:flex bg-transparent border border-gray-300 text-[#1a1a1a] rounded-full px-6 py-2 font-semibold items-center justify-center transition-all duration-300 hover:border-gray-500 hover:bg-gray-50"
          >
            View All Services
          </a>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesV2.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <Reveal key={service.title} delayMs={i * 100}>
                <div className="group relative rounded-3xl overflow-hidden h-[450px] border border-[#f0edec] transition-transform duration-500 ease-out hover:-translate-y-2.5 hover:shadow-xl">
                  <Image
                    alt={service.title}
                    src={service.image}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                    <div className="w-12 h-12 bg-[#ff6b00] rounded-2xl flex items-center justify-center mb-4 shadow-lg transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-6 max-w-md line-clamp-2">
                      {service.description}
                    </p>
                    <a
                      href="#contact"
                      className="text-white font-bold flex items-center gap-1.5 hover:text-[#ff6b00] transition-colors w-fit"
                    >
                      Request Service{" "}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
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
