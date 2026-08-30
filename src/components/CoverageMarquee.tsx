import { coverageAreas } from "@/lib/site-data";

export default function CoverageMarquee() {
  const items = [...coverageAreas, ...coverageAreas];

  return (
    <section
      id="coverage"
      className="bg-primary-light text-white py-3 overflow-hidden border-t border-white/10 relative z-30 scroll-mt-20"
    >
      <div className="marquee-container flex items-center font-mono text-xs font-semibold tracking-[0.2em] opacity-80">
        <div className="marquee-content flex space-x-8 px-4 animate-marquee">
          {items.map((area, i) => (
            <span key={`${area}-${i}`} className="flex items-center gap-8">
              {area}
              <span>•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
