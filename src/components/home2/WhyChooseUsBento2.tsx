import Image from "next/image";
import { Clock, CreditCard, Timer, Wrench, Banknote } from "lucide-react";
import Reveal from "../Reveal";
import { bentoItemsV2, servicesV2 } from "@/lib/site-data-v2";

const icons = {
  timer: Timer,
  schedule: Clock,
  payments: Banknote,
  build: Wrench,
  "credit-card": CreditCard,
} as const;

export default function WhyChooseUsBento2() {
  const [large, medium, ...small] = bentoItemsV2;
  const LargeIcon = icons[large.icon as keyof typeof icons];
  const MediumIcon = icons[medium.icon as keyof typeof icons];

  return (
    <section className="py-24 bg-[#f6f3f2]">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <Reveal className="mb-12 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight mb-4">
            Why Choose Us.
          </h2>
          <p className="text-[#5a4136] text-lg leading-relaxed">
            We provide fast, reliable, and professional mobile tyre fitting
            services directly to your location. Whether you are stuck at
            home, work, or on the roadside.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Reveal className="md:col-span-2">
            <div className="bg-white p-8 rounded-3xl relative overflow-hidden flex flex-col justify-end min-h-[300px] border border-[#f0edec] shadow-sm hover:shadow-md transition-shadow h-full">
              <Image
                alt=""
                src={servicesV2[0].image}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover opacity-10"
              />
              <div className="relative z-10 md:w-2/3">
                <span className="w-12 h-12 bg-[#fcf9f8] rounded-full flex items-center justify-center mb-4 shadow-sm border border-[#f0edec]">
                  <LargeIcon className="h-5 w-5 text-[#1a1a1a]" />
                </span>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{large.title}</h3>
                <p className="text-[#5a4136]">{large.description}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="bg-[#1a1a1a] text-white p-8 rounded-3xl flex flex-col justify-between min-h-[300px] shadow-lg h-full">
              <span className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 border border-white/10">
                <MediumIcon className="h-5 w-5 text-[#ff6b00]" />
              </span>
              <div>
                <h3 className="text-2xl font-bold mb-2">{medium.title}</h3>
                <p className="text-gray-400">{medium.description}</p>
              </div>
            </div>
          </Reveal>

          {small.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Reveal key={item.title} delayMs={i * 100}>
                <div className="bg-white p-8 rounded-3xl border border-[#f0edec] flex flex-col justify-between min-h-[250px] shadow-sm hover:shadow-md transition-shadow h-full">
                  <span className="w-12 h-12 bg-[#f6f3f2] rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-[#1a1a1a]" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#5a4136]">{item.description}</p>
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
