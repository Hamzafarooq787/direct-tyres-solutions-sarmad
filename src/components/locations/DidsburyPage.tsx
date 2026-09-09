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
  Timer,
  HomeIcon,
  Bolt,
} from "lucide-react";
import LocationHeader from "./LocationHeader";
import LocationFooter from "./LocationFooter";

const stars = [0, 1, 2, 3, 4];

export default function DidsburyPage() {
  return (
    <>
      <LocationHeader currentSlug="didsbury" />
      <main className="w-full pt-20 bg-[#f7f9fb]">
        {/* 1. HERO — split layout with framed photo */}
        <section className="relative overflow-hidden bg-white pt-8 lg:pt-14 pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e6e8ea] text-[#191c1e] shadow-sm">
                    <div className="flex text-[#705d00]">
                      {stars.map((i) => (
                        <Star key={i} className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-[#0b1e3d]">4.9 / 5.0</span>
                    <span className="w-1 h-1 rounded-full bg-[#c5c6cf]" />
                    <span className="text-sm text-[#44474e]">500+ Verified Reviews</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#004ad2]/10 text-[#004ad2] text-[11px] font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#004ad2] animate-pulse" />
                    Didsbury Sector Unit Live
                  </div>
                </div>
                <h1 className="text-[36px] leading-[44px] lg:text-[56px] lg:leading-[64px] text-[#0b1e3d] font-extrabold tracking-tight">
                  24/7 Mobile Tyre Fitting in Didsbury
                </h1>
                <p className="text-lg text-[#44474e] max-w-2xl leading-relaxed">
                  Premium on-driveway &amp; roadside mobile tyre fitting across East &amp; West Didsbury — <span className="text-[#0b1e3d] font-semibold">20–35 min arrival</span>. Emergency roadside repair or quiet driveway replacements before your morning commute.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                  {[
                    [Bolt, "20–35 Min Response"],
                    [HomeIcon, "On-Driveway Service"],
                    [CheckCircle2, "OEM & Run-Flat Ready"],
                  ].map(([Icon, label], i) => {
                    const IconComp = Icon as typeof Bolt;
                    return (
                      <div key={i} className="flex items-center gap-2">
                        <IconComp className="h-5 w-5 text-[#004ad2]" />
                        <span className="text-sm font-semibold text-[#0b1e3d]">{label as string}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <a
                    className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-[#1b61ff] hover:bg-[#004ad2] text-white font-bold transition-all shadow-[0_4px_16px_rgba(27,97,255,0.35)] hover:scale-[1.02] active:scale-[0.98]"
                    href="tel:07955266077"
                  >
                    <PhoneCall className="h-6 w-6 text-[#ffe16d]" />
                    <span>Call Now: 07955 266 077</span>
                  </a>
                  <Link
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#eceef0] hover:bg-[#e0e3e5] text-[#0b1e3d] font-semibold transition-all"
                    href="/#contact"
                  >
                    Get a Quote
                  </Link>
                </div>
                <div className="flex items-center gap-2 pt-1 text-[#44474e] text-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Mobile Sprinter Unit patrolling M56 / Kingsway corridor right now</span>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#0b1e3d] aspect-[4/3] lg:aspect-[1.15/1]">
                  <Image
                    src="/hero-section-images-936x527.webp"
                    alt="Mobile tyre fitting van parked on a leafy suburban avenue in Didsbury"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3d]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#dce1ff] flex items-center justify-center text-[#004ad2]">
                        <ShieldCheck className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-[18px] leading-[24px] text-[#0b1e3d] font-bold leading-tight">East &amp; West Didsbury</div>
                        <div className="text-[11px] text-[#44474e] uppercase tracking-wider">M20 Postcode Coverage</div>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-[#004ad2]">24/7 Live</span>
                  </div>
                </div>
                <div className="hidden sm:flex absolute -top-4 -right-4 px-4 py-2.5 rounded-xl bg-[#0b1e3d] text-white shadow-xl items-center gap-3">
                  <Timer className="h-[22px] w-[22px] text-[#ffe16d]" />
                  <div className="flex flex-col">
                    <span className="text-[11px] text-[#dce1ff] uppercase">Avg Local ETA</span>
                    <span className="text-sm font-bold">24 Minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. LOCAL INTRO */}
        <section className="py-16 md:py-20 bg-[#f2f4f6]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#e0e3e5] aspect-[16/10]">
                  <Image
                    src="/gallery-onsite-wheel-fitting.webp"
                    alt="Mercedes Sprinter mobile tyre workshop fitted with precision equipment"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-[#0b1e3d]/90 text-white backdrop-blur text-[11px] uppercase tracking-wider">
                    Heavy-Duty Mobile Bay
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 flex flex-col gap-2 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 text-[#004ad2] text-[11px] font-bold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#004ad2]" />
                  Tailored For Didsbury Motorists
                </div>
                <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] text-[#0b1e3d] font-extrabold">
                  Seamless On-Driveway Care Along Tree-Lined Avenues
                </h2>
                <p className="text-base text-[#44474e] leading-relaxed pt-1">
                  From the tranquil, leafy residential avenues off Palatine Road and Lapwing Lane to the high-traffic thoroughfares of Wilmslow Road and Barlow Moor Road, Didsbury demands agile, zero-disruption tyre services. Whether you are parked outside East Didsbury Metrolink station facing an evening flat, or need a pre-work driveway tyre replacement on your luxury SUV or executive saloon before jumping onto the Kingsway (A34), our specialized Mercedes Sprinter mobile workshops eliminate garage queues entirely. We arrive fully equipped with digital wheel balancers and premium rubber to keep your day running smoothly.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["East Didsbury Metrolink", "Wilmslow Road (B5167)", "Barlow Moor Road", "Parrs Wood"].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-[#e0e3e5] text-[#0b1e3d] text-sm font-semibold">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES GRID */}
        <section className="py-16 md:py-20 bg-[#f7f9fb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-widest block mb-1">Commercial-Grade Solutions</span>
                <h2 className="text-[40px] leading-[48px] text-[#0b1e3d] font-bold tracking-tight">Specialist Services Across Didsbury</h2>
              </div>
              <p className="text-base text-[#44474e] max-w-md">Fully self-contained mobile workshops dispatched directly to your location with touchless mounting and calibrated balancing machinery.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Disc, tag: "Driveway & Roadside", title: "Premium Mobile Tyre Fitting in Didsbury", body: "Brand new tyres brought directly to your home, workplace, or roadside spot. Fitting, standard rubber valve replacement, and eco-disposal included.", note: 'From 13" to 23"' },
                { icon: Gauge, tag: "Vibration-Free Ride", title: "Computerized Wheel Balancing in Didsbury", body: "High-speed micro-balancing performed on inside-van digital hubs. Eliminates steering shudder and ensures even tyre wear on high-speed motorways.", note: "Laser Calibration" },
                { icon: Wrench, tag: "BS AU 159 Compliant", title: "Safe Puncture Repairs in Didsbury", body: "Picked up a screw or nail around Didsbury Village? We carry out thorough internal inspection and permanent vulcanized repairs roadside.", note: "Safety Certified" },
                { icon: Unlock, tag: "Alloy Safe Extraction", title: "Damage-Free Locking Nut Removal", body: "Lost key or rounded lug bolt? Our specialized reverse-thread extraction tools remove stubborn security nuts without damaging alloy wheel rims.", note: "100% Success Rate" },
              ].map((s) => (
                <div key={s.title} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-md transition-all hover:shadow-xl hover:-translate-y-1 p-6">
                  <div className="w-10 h-10 rounded-xl bg-[#dce1ff] flex items-center justify-center text-[#004ad2] mb-3">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="text-[11px] text-[#1b61ff] font-bold uppercase tracking-wider mb-1">{s.tag}</div>
                  <h3 className="text-[18px] leading-[24px] font-bold text-[#0b1e3d] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#44474e] leading-relaxed">{s.body}</p>
                  <div className="pt-3 mt-auto flex items-center justify-between">
                    <span className="text-[11px] text-[#44474e] uppercase font-bold">{s.note}</span>
                    <a className="p-2 rounded-lg bg-[#eceef0] text-[#004ad2] hover:bg-[#004ad2] hover:text-white transition-colors" href="tel:07955266077">
                      &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="py-16 md:py-20 bg-[#e6e8ea]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-widest">Frictionless Dispatch</span>
              <h2 className="text-[40px] leading-[48px] text-[#0b1e3d] font-bold mt-1">How Direct Tyre Solutions Works in Didsbury</h2>
              <p className="text-base text-[#44474e] mt-2">From first phone call to complete road-readiness in three simple, monitored phases.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { n: "01", title: "Call or Request Quote", body: "Provide your vehicle registration or tyre dimensions along with your Didsbury location (home driveway, business car park, or roadside)." },
                { n: "02", title: "Van Dispatched Rapidly", body: "A fully equipped Mercedes Sprinter mobilizes immediately. Expected arrival time is 20–35 minutes in Didsbury with real-time phone updates." },
                { n: "03", title: "Fitted & Balanced On-Site", body: "Our certified technician completes fitting, precision electronic balancing, and torque checks on your premises. Card payment accepted on completion." },
              ].map((s) => (
                <div key={s.n} className="p-6 rounded-2xl bg-white shadow-md flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[40px] leading-[48px] text-[#004ad2] font-extrabold">{s.n}</span>
                    <div className="w-10 h-10 rounded-full bg-[#dce1ff] flex items-center justify-center text-[#004ad2]">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-[18px] leading-[24px] font-bold text-[#0b1e3d]">{s.title}</h3>
                  <p className="text-sm text-[#44474e] leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 rounded-xl bg-[#f2f4f6] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <Timer className="h-7 w-7 text-[#004ad2]" />
                <div>
                  <span className="text-[18px] leading-[24px] font-bold text-[#0b1e3d] block">Standard Arrival Window: 20–35 Minutes in Didsbury</span>
                  <span className="text-sm text-[#44474e]">Continuous coverage across Kingsway, Princess Road, and surrounding M20 roads.</span>
                </div>
              </div>
              <a className="px-4 py-2 rounded-lg bg-[#0b1e3d] text-white hover:bg-[#1b61ff] transition-colors text-sm font-semibold shrink-0" href="tel:07955266077">
                Check Immediate Arrival
              </a>
            </div>
          </div>
        </section>

        {/* 5. COVERAGE / NEARBY AREAS */}
        <section className="py-12 bg-[#0b1e3d] text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-[#dce1ff] uppercase tracking-wider font-bold">South Manchester Operational Grid</span>
                <h2 className="text-[40px] leading-[48px] text-white font-bold">Surrounding Areas &amp; Commuter Corridors</h2>
              </div>
              <div className="flex items-center gap-2 text-[#dce1ff] text-sm">
                <span className="w-2 h-2 rounded-full bg-[#ffe16d]" />
                <span>Stationed within 3 miles of East Didsbury Station</span>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                ["Chorlton", "M21 • 15-20 Min", "Direct link via Barlow Moor Rd"],
                ["Withington", "M20 • 10-15 Min", "Along Wilmslow Road corridor"],
                ["Wythenshawe", "M22 • 15-25 Min", "Covering M56 junctions & hospital"],
                ["Stockport", "SK4 • 15-25 Min", "Connecting via Didsbury Rd / M60"],
              ].map(([name, meta, sub]) => (
                <div key={name} className="p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all flex flex-col gap-1">
                  <span className="text-[18px] leading-[24px] text-white font-bold">{name}</span>
                  <span className="text-[11px] text-[#dce1ff] uppercase">{meta}</span>
                  <span className="text-sm text-[#dce1ff] mt-1">{sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <section className="py-16 md:py-20 bg-[#f7f9fb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-widest">Local Trust &amp; Reputation</span>
              <h2 className="text-[40px] leading-[48px] text-[#0b1e3d] font-bold mt-1">Trusted By Didsbury Residents &amp; Commuters</h2>
              <p className="text-base text-[#44474e] mt-2">Read real feedback from drivers assisted along Wilmslow Road, Palatine Road, and West Didsbury driveways.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { quote: "Flat tyre on Wilmslow Road just before an evening appointment. Direct Tyre Solutions were at my car in 22 minutes. Fitted a matching Michelin and balanced it in the pouring rain. Cannot recommend highly enough!", name: "Marcus H.", place: "Wilmslow Road, Didsbury Village" },
                { quote: "Needed two run-flat tyres swapped on our Audi Q7 on our driveway on Palatine Road before a family holiday drive to Cornwall. The technician was courteous, ultra-clean, and left no marks on the gravel.", name: "Claire & David P.", place: "Palatine Road, West Didsbury" },
                { quote: "A rounded locking wheel nut had me totally stuck off Burton Road. The local garage wouldn't touch it without keeping the car overnight. Direct Tyre Solutions took it off cleanly in 15 minutes flat.", name: "Oliver S.", place: "West Didsbury Residential" },
              ].map((r) => (
                <div key={r.name} className="p-6 rounded-2xl bg-white shadow-md flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex text-[#705d00]">
                      {stars.map((i) => (
                        <Star key={i} className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="text-base text-[#191c1e] italic leading-relaxed">&ldquo;{r.quote}&rdquo;</p>
                  </div>
                  <div>
                    <div className="text-[18px] leading-[24px] font-bold text-[#0b1e3d]">{r.name}</div>
                    <div className="text-[11px] text-[#44474e] uppercase">{r.place}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PRICING / INSTANT QUOTE */}
        <section className="py-8 bg-[#f7f9fb]" id="quick-quote">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-2xl bg-[#0b1e3d] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#1b61ff]/20 blur-3xl pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
                <div className="lg:col-span-8 flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffe16d] w-fit text-[11px] font-bold uppercase tracking-wider">
                    Transparent Didsbury Pricing
                  </div>
                  <h2 className="text-[40px] leading-[48px] text-white font-bold tracking-tight">
                    Get an instant estimate for tyre fitting in Didsbury
                  </h2>
                  <p className="text-lg text-[#dce1ff] max-w-2xl leading-relaxed">
                    No hidden roadside callout fees. Mobile fitting, digital balancing, new valves, and environmental disposal of old tyres are all included in one upfront quote.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                  <a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1b61ff] hover:bg-[#004ad2] text-white font-bold shadow-lg transition-all hover:scale-105 active:scale-95 text-center" href="tel:07955266077">
                    <PhoneCall className="h-[22px] w-[22px]" />
                    Instant Quote: 07955 266 077
                  </a>
                  <div className="text-center text-[11px] text-[#dce1ff] uppercase">
                    Average response time: 20-35 mins across M20
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="py-16 md:py-20 bg-[#f2f4f6]">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Got Questions?</span>
              <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#0b1e3d] mt-1">Didsbury Mobile Tyre FAQs</h2>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { q: "Can you fit tyres on the leafy avenues off Palatine Road and Lapwing Lane?", a: "Yes. These quiet residential avenues are exactly the kind of low-disruption locations our whisper-quiet pneumatic tools were designed for. We fit tyres directly on your driveway without leaving marks on gravel or block paving." },
                { q: "Do you stock run-flat and premium tyres for luxury SUVs and executive saloons?", a: "Yes, our vans carry a wide range of run-flat and premium branded tyres (Michelin, Continental, Pirelli) suitable for luxury SUVs and executive saloons common across Didsbury Village and West Didsbury." },
                { q: "How fast can you reach me near East Didsbury Metrolink station?", a: "East Didsbury Metrolink sits well within our standard 20–35 minute Didsbury response window, with our nearest Sprinter unit routed via the Kingsway (A34) or Parrs Wood corridor." },
                { q: "What if I need my old tyre disposed of responsibly?", a: "Every fitting includes environmentally certified disposal of your old tyre casing at no extra charge, sent to registered UK recycling facilities." },
              ].map((faq) => (
                <details key={faq.q} className="group bg-white rounded-xl p-4 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                  <summary className="w-full flex items-center justify-between gap-4 cursor-pointer list-none">
                    <span className="text-lg font-semibold text-[#0b1e3d]">{faq.q}</span>
                    <ChevronDown className="h-6 w-6 text-[#004ad2] transition-transform group-open:rotate-180 shrink-0" />
                  </summary>
                  <p className="text-base text-[#44474e] mt-2 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 9. LOCAL MAP */}
        <section className="py-16 md:py-20 bg-[#f7f9fb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="p-8 rounded-2xl bg-white shadow-md flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-wider">Geographic Dispatch Zone</span>
                  <h3 className="text-[30px] leading-[38px] text-[#0b1e3d] font-bold">Didsbury Response Radius</h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#44474e]">
                  <MapPin className="h-5 w-5 text-[#004ad2]" />
                  <span>M20 Postcode &amp; Bordering Commuter Links</span>
                </div>
              </div>
              <div className="relative w-full h-80 rounded-xl overflow-hidden bg-[#0b1e3d] flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-64 h-64 rounded-full border-2 border-dashed border-[#1b61ff]/40 animate-spin" style={{ animationDuration: "40s" }} />
                  <div className="absolute flex flex-col items-center">
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffe16d] opacity-75" />
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-[#1b61ff]" />
                    </span>
                    <div className="mt-1 px-2 py-0.5 rounded bg-[#0b1e3d] text-white text-[11px] font-bold uppercase shadow-md border border-white/20">
                      Didsbury Village
                    </div>
                  </div>
                  <div className="absolute top-12 left-1/3 flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffe16d]" />
                    <div className="mt-1 px-2 py-0.5 rounded bg-[#0b1e3d] text-white text-[11px] font-bold uppercase opacity-80">Parrs Wood</div>
                  </div>
                  <div className="absolute bottom-12 right-1/3 flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#dce1ff]" />
                    <div className="mt-1 px-2 py-0.5 rounded bg-[#0b1e3d] text-white text-[11px] font-bold uppercase opacity-80">West Didsbury</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CLOSING CTA */}
        <section className="w-full bg-[#000516] text-white py-16 md:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
            <span className="text-[#ffe16d] text-[11px] font-bold uppercase tracking-[0.06em] flex items-center justify-center gap-2 mb-2">
              <Bolt className="h-4 w-4" /> Rapid Mobilisation Guaranteed
            </span>
            <h2 className="text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold tracking-tight text-white max-w-3xl mx-auto">
              Stuck with a tyre in Didsbury? <span className="text-[#ffe16d]">We&rsquo;re on our way.</span>
            </h2>
            <p className="text-lg text-[#dce1ff] max-w-2xl mx-auto mt-4 mb-8">
              Roadside blowout, puncture, or driveway replacement — call our 24/7 dispatch desk right now.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-12 py-4 rounded-lg bg-[#1b61ff] text-white hover:bg-[#004ad2] text-lg font-bold shadow-lg transition-all"
                href="tel:07955266077"
              >
                <PhoneCall className="h-6 w-6 text-[#ffe16d]" />
                <span>Call 07955 266 077 Now</span>
              </a>
              <Link
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
                href="/#contact"
              >
                Request Online Callback
              </Link>
            </div>
          </div>
        </section>
      </main>
      <LocationFooter />
    </>
  );
}
