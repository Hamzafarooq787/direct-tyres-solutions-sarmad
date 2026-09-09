import Image from "next/image";
import Link from "next/link";
import {
  Star,
  PhoneCall,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  ChevronDown,
  Disc,
  Gauge,
  Wrench,
  Unlock,
  Zap,
  Radar,
  Navigation,
} from "lucide-react";
import LocationHeader from "./LocationHeader";
import LocationFooter from "./LocationFooter";

const stars = [0, 1, 2, 3, 4];

export default function CheethamHillPage() {
  return (
    <>
      <LocationHeader currentSlug="cheetham-hill" />
      <main className="w-full pt-20 bg-[#f7f9fb]">
        {/* 1. HERO — full-bleed dark photo hero */}
        <section className="relative w-full overflow-hidden bg-[#0b1e3d] text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-section-images-936x527.webp"
              alt="Direct Tyre Solutions mobile van in Cheetham Hill, Manchester"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-30"
            />
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0b1e3d]/95 via-[#0b1e3d]/85 to-[#0b1e3d]" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#1b61ff]/20 blur-[130px] pointer-events-none rounded-full" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-16 pb-20 md:pb-28 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffe16d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ffe16d]" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#ffe16d]">Cheetham Hill Response Hub Active</span>
              <span className="text-[#dce1ff]">&bull;</span>
              <span className="text-xs text-white">Est. 20–35 Min ETA</span>
            </div>
            <h1 className="text-[36px] leading-[44px] md:text-[56px] md:leading-[64px] tracking-[-0.02em] md:tracking-[-0.03em] font-extrabold max-w-4xl text-white">
              24/7 Mobile Tyre Fitting in <span className="text-[#dce1ff]">Cheetham Hill</span>
            </h1>
            <p className="mt-5 text-lg text-[#e6e8ea] max-w-2xl leading-relaxed">
              Emergency roadside &amp; residential driveway tyre fitting dispatched across Cheetham Hill — 20–35 min arrival.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
              <a
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#1b61ff] hover:bg-[#004ad2] text-white font-bold shadow-[0_8px_24px_rgba(27,97,255,0.4)] transition-all hover:scale-105 active:scale-95"
                href="tel:07955266077"
              >
                <PhoneCall className="h-[22px] w-[22px] text-[#ffe16d]" fill="currentColor" strokeWidth={0} />
                <span>Call Now: 07955 266 077</span>
              </a>
              <Link
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold backdrop-blur-md transition-all"
                href="/#contact"
              >
                Get a Quote
              </Link>
            </div>
            <div className="mt-12 inline-flex items-center gap-4 px-6 py-3.5 rounded-2xl bg-white text-[#191c1e] shadow-2xl">
              <div className="flex items-center gap-1 text-[#705d00]">
                {stars.map((i) => (
                  <Star key={i} className="h-5 w-5" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <div className="h-6 w-px bg-[#e0e3e5]" />
              <div className="flex items-baseline gap-1.5">
                <span className="text-[22px] leading-[28px] font-bold text-[#0b1e3d]">4.9</span>
                <span className="text-sm text-[#44474e]">/ 5.0</span>
              </div>
              <span className="text-sm font-bold text-[#004ad2]">500+ Reviews</span>
            </div>
          </div>
        </section>

        {/* 2. LOCAL INTRO */}
        <section className="w-full py-16 md:py-20 bg-[#f7f9fb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dce1ff] text-[#00164e] w-fit">
                  <MapPin className="h-4 w-4" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.06em]">Local Community Breakdown</span>
                </div>
                <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-[#0b1e3d]">
                  Why Cheetham Hill Drivers Trust Our Rapid Mobile Fleet
                </h2>
                <p className="text-base text-[#44474e] leading-relaxed">
                  Navigating Cheetham Hill requires hyper-local expertise. Whether you face an unexpected puncture along the bustling wholesale district of Cheetham Hill Road (A665), need rapid driveway puncture repairs without waiting in queues across dense terraced streets, or suffer a blowout in tight commercial loading bays, Direct Tyre Solutions is stationed nearby. Stranded with evening flat tyres near Manchester Fort Shopping Park? Our equipped mobile workshop reaches you within 20–35 minutes, mounting, precision-balancing, and fitting certified tyres straight to your vehicle so your day never stalls.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-1">
                  {[
                    ["20-35m", "Average Arrival", "text-[#004ad2]"],
                    ["A665", "Direct Arterial Route", "text-[#0b1e3d]"],
                    ["365 Days", "Zero Downtime", "text-[#705d00]"],
                  ].map(([v, l, c]) => (
                    <div key={l as string} className="p-4 rounded-2xl bg-white shadow-sm">
                      <span className={`text-[30px] leading-[38px] font-bold ${c}`}>{v}</span>
                      <span className="block text-xs text-[#44474e] mt-1">{l}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#e6e8ea] aspect-[4/3]">
                  <Image
                    src="/gallery-evening-callout.webp"
                    alt="Direct Tyre Solutions mobile van in Cheetham Hill residential district"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0b1e3d]/90 backdrop-blur-md text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-[#ffe16d]" />
                        <span className="text-[11px] font-bold uppercase tracking-wide">Fully Equipped Van</span>
                      </div>
                      <span className="text-[11px] text-[#dce1ff]">Cheetham Hill Unit 04</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES GRID */}
        <section className="w-full py-16 md:py-20 bg-[#f2f4f6]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">On-Site Tyre Services</span>
              <h2 className="mt-2 text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#0b1e3d]">Engineered For Roadside &amp; Driveway Precision</h2>
              <p className="mt-3 text-base text-[#44474e]">Complete mechanical tyre care brought straight to your parking spot in Cheetham Hill.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Disc, title: "Mobile Tyre Fitting", body: "Brand new budget to premium performance tyres fitted on your home driveway or commercial premises anywhere in Cheetham Hill.", cta: "Request Fitting" },
                { icon: Gauge, title: "Computerized Wheel Balancing", body: "Advanced mobile digital laser spin balancers on every van eliminate highway steering vibration and premature tread deterioration.", cta: "Book Balancing" },
                { icon: Wrench, title: "Fast Roadside Puncture Repairs", body: "Full BSAU159-compliant vulcanized puncture plug repairs whenever tread depth and puncture positioning safely permit.", cta: "Repair Puncture" },
                { icon: Unlock, title: "Locking Wheel Nut Removal", body: "Specialized reverse-thread extraction kits safely release stripped, rounded, or missing locking keys with zero damage to alloy wheels.", cta: "Nut Extraction" },
              ].map((s) => (
                <div key={s.title} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#dce1ff] flex items-center justify-center text-[#004ad2] mb-4">
                        <s.icon className="h-[22px] w-[22px]" />
                      </div>
                      <h3 className="text-[22px] leading-[28px] font-bold text-[#0b1e3d]">{s.title}</h3>
                      <p className="mt-2 text-sm text-[#44474e] leading-relaxed">{s.body}</p>
                    </div>
                    <a className="inline-flex items-center gap-1.5 text-sm font-bold text-[#004ad2] hover:text-[#0b1e3d] transition-colors" href="tel:07955266077">
                      {s.cta} <span aria-hidden>&rarr;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="w-full py-16 md:py-20 bg-[#f7f9fb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Streamlined Dispatch</span>
              <h2 className="mt-2 text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#0b1e3d]">Cheetham Hill In 3 Simple Steps</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white shadow-md flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[56px] leading-[64px] text-[#e6e8ea] leading-none font-black">01</span>
                  <span className="w-12 h-12 rounded-xl bg-[#dce1ff] flex items-center justify-center text-[#004ad2]"><MapPin className="h-6 w-6" /></span>
                </div>
                <h3 className="text-[22px] leading-[28px] font-bold text-[#0b1e3d]">Call or Send Reg</h3>
                <p className="mt-2 text-sm text-[#44474e] leading-relaxed">Provide your vehicle registration plate and your location along Cheetham Hill Road, Waterloo Road, or home postcode.</p>
              </div>
              <div className="p-8 rounded-2xl bg-[#0b1e3d] text-white shadow-xl flex flex-col transform md:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[56px] leading-[64px] text-[#ffe16d] leading-none font-black opacity-30">02</span>
                  <span className="w-12 h-12 rounded-xl bg-[#1b61ff] flex items-center justify-center text-white"><Zap className="h-6 w-6" /></span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 text-[#ffe16d] w-fit mb-3">
                  <span className="text-[11px] font-bold uppercase">20–35 Min Window</span>
                </div>
                <h3 className="text-[22px] leading-[28px] font-bold text-white">Local Van Dispatched</h3>
                <p className="mt-2 text-sm text-[#dce1ff] leading-relaxed">Our nearest mobile fitting van routes directly to your vehicle with the exact tyre dimensions and industrial tools on board.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white shadow-md flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[56px] leading-[64px] text-[#e6e8ea] leading-none font-black">03</span>
                  <span className="w-12 h-12 rounded-xl bg-[#dce1ff] flex items-center justify-center text-[#004ad2]"><CheckCircle2 className="h-6 w-6" /></span>
                </div>
                <h3 className="text-[22px] leading-[28px] font-bold text-[#0b1e3d]">Fitted &amp; Drive Away</h3>
                <p className="mt-2 text-sm text-[#44474e] leading-relaxed">Wheel mounted, balanced, torqued to manufacturer specification, and old casing eco-disposed. Seamless contactless payment on-site.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. COVERAGE / NEARBY AREAS */}
        <section className="w-full py-12 bg-[#0b1e3d] text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-lg">
                <span className="text-[#dce1ff] text-[11px] font-bold uppercase tracking-[0.06em]">Immediate Radial Coverage</span>
                <h2 className="mt-1 text-[30px] leading-[38px] font-bold text-white">Serving Cheetham Hill &amp; Neighbouring Postcodes</h2>
                <p className="mt-2 text-sm text-[#dce1ff]">Live vans circulating north Manchester arterial paths ensure guaranteed sub-40 min times across contiguous areas.</p>
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                {[
                  ["Moston", "15-25m"],
                  ["Blackley", "15-20m"],
                  ["Newton Heath", "20-30m"],
                  ["Manchester City Centre", "10-18m"],
                ].map(([a, t]) => (
                  <div key={a} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-[#ffe16d]" />
                    <span className="text-sm font-semibold text-white">{a}</span>
                    <span className="text-[11px] text-[#dce1ff]">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <section className="w-full py-16 md:py-20 bg-[#f7f9fb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Verified Local Experiences</span>
                <h2 className="mt-2 text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#0b1e3d]">What Cheetham Hill Drivers Say</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { quote: "Had a catastrophic tyre slice on Cheetham Hill Road right outside the trade units during midday traffic. The van pulled up in 22 minutes with the exact Pirelli spec. Unbelievably swift service!", name: "Tariq M.", place: "Cheetham Hill Road" },
                { quote: "Came out from shopping at Manchester Fort to a completely flat front tyre. Direct Tyre Solutions sorted it in the car park while I waited in the cafe. Lifesavers on a rainy evening.", name: "Sarah K.", place: "Manchester Fort" },
                { quote: "Stripped locking wheel nut nightmare on Waterloo Road. Two breakdown recovery trucks gave up. Their technician removed it in 15 minutes with specialized extraction tools.", name: "David L.", place: "Waterloo Road" },
              ].map((r) => (
                <div key={r.name} className="p-6 rounded-2xl bg-white shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex text-[#705d00] mb-3">
                      {stars.map((i) => (
                        <Star key={i} className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="text-base text-[#191c1e] leading-relaxed">&ldquo;{r.quote}&rdquo;</p>
                  </div>
                  <div className="mt-6 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-[#0b1e3d] block">{r.name}</span>
                      <span className="text-sm text-[#44474e]">{r.place}</span>
                    </div>
                    <ShieldCheck className="h-6 w-6 text-[#1b61ff]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PRICING / QUOTE CALLOUT */}
        <section className="w-full py-8 bg-[#f2f4f6]" id="quick-quote">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-2xl bg-[#0b1e3d] text-white shadow-xl relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#1b61ff]/20 rounded-full blur-[90px] pointer-events-none" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <span className="text-[#ffe16d] text-[11px] font-bold uppercase tracking-[0.06em]">Transparent Rates &bull; No Hidden Call-Out Surprises</span>
                  <h2 className="mt-2 text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white">
                    Get an instant estimate for tyre fitting in Cheetham Hill
                  </h2>
                  <p className="mt-2 text-base text-[#dce1ff] max-w-xl">
                    From emergency single-tyre swaps to complete fleet replacements. All quotes include mobile call-out, laser balancing, new rubber valves, and disposal.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                  <a className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#1b61ff] hover:bg-[#004ad2] text-white font-bold shadow-lg transition-all" href="tel:07955266077">
                    <PhoneCall className="h-5 w-5" />
                    <span>Get Exact Quote</span>
                  </a>
                  <span className="text-center text-sm text-[#dce1ff]">
                    Or call dispatcher direct: <strong className="text-white">07955 266 077</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="w-full py-16 md:py-20 bg-[#f7f9fb]">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Got Questions?</span>
              <h2 className="mt-2 text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#0b1e3d]">Cheetham Hill Service FAQs</h2>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { q: "How do your vans navigate heavy traffic along Cheetham Hill Road (A665)?", a: "Our local mobile tyre vans are strategically stationed around north Manchester junctions. Rather than dispatching from distant depots, our units use real-time GPS routing to bypass bottlenecks along the A665 wholesale corridor, ensuring we consistently meet our 20–35 minute target." },
                { q: "Can your mobile workshops access tight terraced streets in Cheetham Hill?", a: "Yes. Our Mercedes Sprinter mobile units are engineered specifically for urban versatility. We safely operate on narrow residential avenues, tight rear alleyways, and restricted parallel parking bays with full roadside safety beacons and cones deployed." },
                { q: "Do you operate late at night or during bank holidays in Cheetham Hill?", a: "Direct Tyre Solutions operates 24 hours a day, 365 days a year. Whether you need emergency assistance at 2:00 AM outside Manchester Fort or on a Sunday bank holiday, our active dispatch hotline is staffed continuously." },
                { q: "How do I make payment when the technician finishes fitting?", a: "Every technician carries an encrypted contactless card terminal accepting Apple Pay, Google Pay, Visa, Mastercard, and American Express. Commercial fleet invoicing can also be arranged upon pre-approval." },
              ].map((faq) => (
                <details key={faq.q} className="group p-6 rounded-2xl bg-white shadow-sm transition-all open:shadow-md [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between gap-4 text-[22px] leading-[28px] font-bold text-[#0b1e3d] list-none cursor-pointer">
                    <span>{faq.q}</span>
                    <ChevronDown className="h-6 w-6 text-[#004ad2] transition-transform group-open:rotate-180 shrink-0" />
                  </summary>
                  <p className="mt-4 text-base text-[#44474e] leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 9. LOCAL MAP / DISPATCH RADAR */}
        <section className="w-full py-16 md:py-20 bg-[#f2f4f6]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dce1ff] text-[#00164e] w-fit">
                  <Radar className="h-4 w-4" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.06em]">Live Sector Radar</span>
                </div>
                <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#0b1e3d]">
                  Real-Time Cheetham Hill Fleet Radar
                </h2>
                <p className="text-base text-[#44474e]">
                  Live telematics monitor our fleet across M8 and M9 postal zones. When you call, our automated dispatch algorithms pair your vehicle with the nearest mobile unit carrying your tyre specification.
                </p>
                <div className="mt-2 p-4 rounded-2xl bg-white shadow-sm flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#0b1e3d] flex items-center justify-center text-white">
                    <Navigation className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#0b1e3d]">Unit 04 — Tariq H.</span>
                      <span className="inline-block w-2 h-2 rounded-full bg-[#705d00]" />
                    </div>
                    <span className="block text-sm text-[#44474e]">Patrolling A665 / Manchester Fort</span>
                    <span className="block text-[11px] text-[#004ad2] font-bold mt-0.5">READY FOR IMMEDIATE CALL-OUT</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative w-full aspect-[16/10] rounded-2xl bg-[#0b1e3d] p-6 overflow-hidden shadow-2xl flex flex-col justify-between">
                  <div className="relative z-10 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1b61ff] animate-ping" />
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#dce1ff]">GPS Node: 53.5042&deg; N, 2.2389&deg; W</span>
                    </div>
                    <span className="text-sm text-[#e6e8ea]">Zone: Cheetham Hill (M8)</span>
                  </div>
                  <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                    <div className="relative flex items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-20 w-20 rounded-full bg-[#1b61ff] opacity-30" />
                      <div className="w-12 h-12 rounded-full bg-[#1b61ff] flex items-center justify-center text-white shadow-lg z-10">
                        <MapPin className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="mt-3 px-3 py-1 rounded-md bg-white/15 backdrop-blur-md">
                      <span className="text-[22px] leading-[28px] font-bold text-white">Cheetham Hill Hub</span>
                    </div>
                    <span className="text-[11px] text-[#ffe16d] mt-1">20-35 MIN SERVICE PERIMETER</span>
                  </div>
                  <div className="relative z-10 grid grid-cols-3 gap-2 pt-4 bg-[#000516]/40 backdrop-blur-sm -mx-6 -mb-6 p-4">
                    <div>
                      <span className="block text-[11px] text-[#dce1ff]">ACTIVE VANS</span>
                      <span className="text-sm font-bold text-white">3 Mobile Units</span>
                    </div>
                    <div>
                      <span className="block text-[11px] text-[#dce1ff]">CALL QUEUE</span>
                      <span className="text-sm font-bold text-[#ffe16d]">Zero Wait Time</span>
                    </div>
                    <div>
                      <span className="block text-[11px] text-[#dce1ff]">AVG TRANSIT</span>
                      <span className="text-sm font-bold text-white">24 Minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CLOSING CTA */}
        <section className="w-full py-16 md:py-20 bg-[#0b1e3d] text-white relative overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffe16d] mb-4">
              <Zap className="h-4 w-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Rapid Mobilisation Guaranteed</span>
            </div>
            <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white max-w-3xl">
              Stuck with a tyre in Cheetham Hill? We&rsquo;re on our way.
            </h2>
            <p className="mt-4 text-lg text-[#dce1ff] max-w-xl">
              Roadside blowout, puncture, or replacement on your driveway — call our 24/7 dispatch desk right now.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                className="flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-[#1b61ff] hover:bg-[#004ad2] text-white text-lg font-bold shadow-[0_10px_28px_rgba(27,97,255,0.45)] transition-all hover:scale-105 active:scale-95"
                href="tel:07955266077"
              >
                <PhoneCall className="h-[26px] w-[26px] text-[#ffe16d]" fill="currentColor" strokeWidth={0} />
                <span>Call Now: 07955 266 077</span>
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-[#dce1ff] text-sm">
              {["No Tow Truck Fees", "Fitted On Location", "24/7 Availability"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-[18px] w-[18px] text-[#ffe16d]" /> {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <LocationFooter />
    </>
  );
}
