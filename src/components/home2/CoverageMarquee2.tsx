import { coverageAreas } from "@/lib/site-data";

export default function CoverageMarquee2() {
  const items = [...coverageAreas, ...coverageAreas];

  return (
    <section
      id="coverage"
      className="bg-[#0b2545] text-white py-4 overflow-hidden border-y border-white/10"
    >
      <div className="marquee-container flex items-center font-mono text-xs font-medium tracking-wider opacity-80">
        <div className="marquee-content flex space-x-12 px-6 animate-marquee">
          {items.map((area, i) => (
            <span key={`${area}-${i}`} className="flex items-center gap-12">
              {area}
              <span>•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
