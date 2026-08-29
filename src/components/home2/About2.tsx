import Image from "next/image";
import { ShieldCheck, Users } from "lucide-react";
import Reveal from "../Reveal";
import { aboutStatsV2, heroImageV2, siteConfigV2 } from "@/lib/site-data-v2";

const icons = { "verified-user": ShieldCheck, group: Users } as const;

export default function About2() {
  return (
    <section className="py-24 bg-[#fcf9f8]" id="about">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal className="order-2 lg:order-1">
            <span className="text-[#ff6b00] font-bold tracking-wider uppercase text-sm mb-2 block">
              About {siteConfigV2.name}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight mb-6">
              Driven by Reliability &amp; Customer Satisfaction.
            </h2>
            <div className="space-y-4 text-[#5a4136] text-lg leading-relaxed mb-8">
              <p>
                At {siteConfigV2.name}, we understand that a tyre problem
                rarely happens at a convenient time. That&apos;s why we built
                our service around being there when you need us most.
              </p>
              <p>
                Our fleet of fully equipped mobile fitting vans operates 24/7
                across the {siteConfigV2.serviceArea}. Manned by certified,
                highly trained technicians, we bring dealership-level service
                directly to your driveway, workplace, or roadside location.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {aboutStatsV2.map((stat) => {
                const Icon = icons[stat.icon as keyof typeof icons];
                return (
                  <div
                    key={stat.title}
                    className="flex items-center gap-2 bg-[#f6f3f2] p-4 rounded-2xl flex-1"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                      <Icon className="h-5 w-5 text-[#ff6b00]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1a1a]">{stat.title}</h4>
                      <p className="text-sm text-[#5a4136]">{stat.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delayMs={200} className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-[#ff6b00] rounded-[2rem] transform translate-x-4 translate-y-4 opacity-20" />
            <div className="relative z-10 w-full h-[500px] rounded-[2rem] shadow-2xl overflow-hidden">
              <Image
                alt={`${siteConfigV2.name} team`}
                src={heroImageV2}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
