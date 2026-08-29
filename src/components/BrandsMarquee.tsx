import { brands } from "@/lib/site-data";

export default function BrandsMarquee() {
  const items = [...brands, ...brands];

  return (
    <section className="py-10 bg-surface border-y border-border-color overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-4 text-center">
        <p className="font-mono text-xs font-semibold text-text-muted uppercase tracking-[0.15em]">
          Premium Brands We Stock
        </p>
      </div>
      <div className="marquee-container opacity-60 hover:opacity-100 transition-opacity duration-500">
        <div className="marquee-content flex items-center space-x-16 px-8 animate-marquee">
          {items.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="font-heading text-2xl font-bold text-text-main grayscale hover:grayscale-0 transition-all duration-300"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
