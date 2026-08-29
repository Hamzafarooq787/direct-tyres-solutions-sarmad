import { brands } from "@/lib/site-data";

export default function BrandsMarquee2() {
  const items = [...brands, ...brands];

  return (
    <section className="py-12 bg-[#ffffff] border-y border-[#c4c6cf]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10 mb-6 text-center">
        <p className="font-mono text-xs text-[#44474e] uppercase tracking-widest">
          Premium Brands We Stock
        </p>
      </div>
      <div className="marquee-container opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="marquee-content flex items-center space-x-16 px-8 animate-marquee">
          {items.map((brand, i) => (
            <span key={`${brand}-${i}`} className="font-heading text-2xl text-[#001026]">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
