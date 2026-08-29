import { trustBrandsV2 } from "@/lib/site-data-v2";

export default function TrustStrip2() {
  return (
    <section className="bg-[#fcf9f8] border-b border-[#f0edec] py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-16 flex flex-wrap justify-between items-center gap-6 opacity-50 grayscale">
        {trustBrandsV2.map((brand) => (
          <span key={brand} className="text-xl font-black tracking-widest text-[#1a1a1a]">
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
