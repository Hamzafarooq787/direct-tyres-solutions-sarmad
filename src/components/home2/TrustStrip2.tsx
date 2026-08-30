import { trustBrandsV2 } from "@/lib/site-data-v2";

export default function TrustStrip2() {
  const items = [...trustBrandsV2, ...trustBrandsV2];

  return (
    <section className="bg-[#fcf9f8] border-b border-[#f0edec] py-6 overflow-hidden">
      <div className="marquee-container opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
        <div className="marquee-content flex items-center space-x-16 px-8 animate-marquee">
          {items.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="text-xl font-black tracking-widest text-[#1a1a1a] shrink-0"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
