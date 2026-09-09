import Image from "next/image";
import Link from "next/link";
import {
  Star,
  PhoneCall,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  ChevronDown,
  Search,
  Radar,
} from "lucide-react";
import LocationHeader from "./LocationHeader";
import LocationFooter from "./LocationFooter";

const stars = [0, 1, 2, 3, 4];

export default function RochdalePage() {
  return (
    <>
      <LocationHeader currentSlug="rochdale" />
      <main className="w-full pt-20 bg-[#f7f9fb]">
        {/* Live dispatch bar */}
        <section className="w-full bg-[#000516] text-white py-2.5 px-4 md:px-6 lg:px-8 shadow-sm">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffe16d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ffe16d]" />
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#dce1ff]">Live Fleet Status: 3 Rapid Vans Patrolling Rochdale, Milnrow &amp; M62 J20-21</span>
            </div>
            <div className="hidden md:flex items-center gap-4 text-xs text-[#e0e3e5]">
              <span>Average Arrival Today: <strong className="text-white">22 Mins</strong></span>
              <span>&bull; No Tow Truck Needed</span>
            </div>
          </div>
        </section>

        {/* 1. HERO — editorial asymmetric split */}
        <section className="w-full bg-white py-8 lg:py-16 px-4 md:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col items-start gap-3 z-10">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b1e3d] text-white shadow-sm">
                  <MapPin className="h-4 w-4 text-[#ffe16d]" />
                  <span className="text-[11px] uppercase tracking-wider text-[#dce1ff]">Greater Manchester &bull; OL11, OL12, OL16</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white shadow-sm">
                  <div className="flex text-[#705d00]">
                    {stars.map((i) => (
                      <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-[#191c1e]">4.9</span>
                  <span className="text-sm text-[#44474e]">(500+ Reviews)</span>
                </div>
              </div>
              <h1 className="text-[36px] leading-[44px] md:text-[56px] md:leading-[64px] text-[#000516] tracking-tight font-extrabold">
                24/7 Mobile Tyre Fitting in <span className="text-[#1b61ff]">Rochdale</span>
              </h1>
              <p className="text-lg text-[#44474e] max-w-2xl leading-relaxed">
                Emergency roadside &amp; home driveway mobile tyre fitting across Rochdale &amp; M62 — 20–35 min arrival. Brand-new premium &amp; budget tyres mounted on-site with zero garage queues.
              </p>
              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#1b61ff] hover:bg-[#004ad2] text-white font-bold shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]" href="tel:07955266077">
                  <PhoneCall className="h-5 w-5 text-[#ffe16d]" />
                  Call Now: 07955 266 077
                </a>
                <Link className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#f2f4f6] hover:bg-[#e6e8ea] text-[#000516] font-bold shadow-sm transition-all hover:scale-[1.02]" href="#quick-quote">
                  Get a Quote
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 w-full text-[#44474e]">
                {[
                  ["20-35 Min ETA"],
                  ["All Wheel Specs"],
                  ["No Hidden Callouts"],
                ].map(([label]) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-[#1b61ff]" />
                    <span className="text-sm font-semibold text-[#000516]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl bg-[#0b1e3d] aspect-[4/5] max-h-[520px] w-full">
                <Image
                  src="/hero-section-images-936x527.webp"
                  alt="Direct Tyre Solutions certified mobile tyre fitter completing an alloy wheel tyre replacement in Rochdale"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000516]/90 via-[#000516]/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0b1e3d]/95 backdrop-blur-md text-white shadow-xl">
                  <div className="flex items-center justify-between pb-2">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#ffe16d]" />
                      <span className="text-[11px] uppercase tracking-wider text-[#dce1ff]">Mobile Unit #4 Active</span>
                    </div>
                    <span className="text-[11px] bg-[#1b61ff] text-white px-2 py-0.5 rounded-full">GPS LOCKED</span>
                  </div>
                  <div className="flex items-center justify-between text-left">
                    <div>
                      <p className="text-[18px] leading-[24px] text-white font-bold leading-tight">Milnrow / A58 Cut</p>
                      <p className="text-sm text-[#dce1ff]">En route to sudden flat repair</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[22px] leading-[28px] text-[#ffe16d] font-bold">24m</span>
                      <span className="text-[11px] block text-[#dce1ff] uppercase">Avg Response</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. LOCAL INTRO with inline testimonials */}
        <section className="w-full bg-white py-16 md:py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-[#eceef0] relative h-80">
                <Image
                  src="/gallery-roadside-fitting.webp"
                  alt="Commercial Mercedes Sprinter mobile tyre fitting unit parked ready on Rochdale arterial route"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative sm:-mt-12 sm:mx-6 p-4 rounded-2xl bg-white shadow-xl">
                <div className="flex items-center gap-1 mb-2 text-[#705d00]">
                  {stars.map((i) => (
                    <Star key={i} className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-sm italic text-[#191c1e] leading-snug">
                  &ldquo;Blew a sidewall on Yorkshire Street right at morning rush hour. Fitter arrived in 24 minutes, fitted a replacement Michelin, and balanced it right in the bays. Total lifesaver.&rdquo;
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-[#44474e]">
                  <span className="font-bold text-[#000516]">&mdash; Darren T., Rochdale Town Centre</span>
                  <span className="text-[#004ad2] font-semibold">Verified Driver</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-3 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-[#1b61ff]">
                <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-widest">Local Rochdale Ground Knowledge</span>
              </div>
              <h2 className="text-[30px] leading-[38px] text-[#000516] tracking-tight font-bold">
                Navigating Rochdale&rsquo;s Corridors, Incline Driveways &amp; M62 Commutes
              </h2>
              <p className="text-base text-[#44474e] leading-relaxed">
                From the bustling Rochdale town centre one-way system and congested Yorkshire Street to the demanding A58 corridor, our dispatch crew knows every local artery. Stranded on the steep foothill climbs toward Milnrow and Littleborough, or facing a sudden motorway blowout in M62 commuter traffic? We bypass central gridlocks using real-time dispatch telematics, reaching residential cul-de-sacs and highway hard shoulders safely within 20 to 35 minutes.
              </p>
              <div className="p-4 rounded-2xl bg-[#f2f4f6] shadow-sm mt-2">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-[#1b61ff] text-white flex items-center justify-center shrink-0 font-bold">&ldquo;</div>
                  <div className="flex flex-col">
                    <p className="text-sm italic text-[#191c1e] leading-relaxed">
                      &ldquo;Our delivery van hit a pothole on the steep climb up near Milnrow. Direct Tyre Solutions brought out a heavy commercial tyre and swapped it on a 15-degree driveway safely. Exceptional equipment.&rdquo;
                    </p>
                    <div className="mt-2 text-xs text-[#44474e]">
                      <span className="font-bold text-[#000516]">Mark S., Milnrow Logistics</span> &bull; <span className="text-[#004ad2] font-semibold">Mercedes Sprinter Fleet</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES GRID */}
        <section className="w-full bg-[#f7f9fb] py-16 md:py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-2">
              <span className="text-[#1b61ff] text-[11px] font-bold uppercase tracking-widest">Comprehensive Mobile Solutions</span>
              <h2 className="text-[30px] leading-[38px] text-[#000516] font-bold">Rochdale On-Site Tyre Services</h2>
              <p className="text-base text-[#44474e]">Complete workshop-grade tyre services delivered straight to your home, workplace, or roadside spot with certified equipment.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { image: "/mobile-tyre-fitting-3-1536x1024.webp", tag: "Priority Service", title: "Mobile Tyre Fitting in Rochdale", body: "Brand new tyres installed at your home or workplace. Premium brands including Continental, Michelin, and Pirelli, plus dependable budget options.", cta: "Book Fitting Dispatch" },
                { image: "/wheel-balancing-2-1536x1024.webp", tag: "Digital Precision", title: "Wheel Balancing in Rochdale", body: "State-of-the-art van-mounted digital balancing balances steering vibration and uneven tread wear across high-speed M62 travel.", cta: "Request Balancing" },
                { image: "/service-puncture-repair.webp", tag: "BS AU 159 Compliant", title: "Puncture Repairs in Rochdale", body: "Safe, British Standard tread puncture repairs when possible, saving you the cost of a full replacement. Fast roadside seal and inflation.", cta: "Check Puncture Suitability" },
                { image: "/service-locking-wheel-nut.webp", tag: "Zero Alloy Damage", title: "Locking Wheel Nut Removal", body: "Lost your key or dealing with rounded overtightened lug nuts? Specialist reverse-thread tooling extracts nuts safely without touching your rims.", cta: "Emergency Nut Removal" },
              ].map((s) => (
                <div key={s.title} className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
                  <div className="h-48 w-full overflow-hidden relative">
                    <Image src={s.image} alt={s.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0b1e3d]/90 text-white text-[11px] uppercase">{s.tag}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                    <div>
                      <h3 className="text-[18px] leading-[24px] text-[#000516] font-bold mb-2">{s.title}</h3>
                      <p className="text-sm text-[#44474e] leading-relaxed">{s.body}</p>
                    </div>
                    <a className="inline-flex items-center gap-2 font-bold text-[#004ad2] hover:text-[#1b61ff] transition-colors" href="tel:07955266077">
                      <span>{s.cta}</span>
                      <span aria-hidden>&rarr;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="w-full bg-white py-16 md:py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-xl">
                <span className="text-[#1b61ff] text-[11px] font-bold uppercase tracking-widest">Fast-Track Process</span>
                <h2 className="text-[30px] leading-[38px] text-[#000516] font-bold mt-1">How Direct Tyre Solutions Operates</h2>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#e6e8ea] text-[#000516] w-fit">
                <span className="text-sm font-bold">Standard Rochdale ETA: 20–35 Minutes</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { n: "01", bg: "bg-[#0b1e3d] text-[#ffe16d]", title: "Call Or Enter Reg", body: "Dial our 24/7 dispatch desk on 07955 266 077 or submit your vehicle registration plate and your current Rochdale postcode or landmark.", note: "Instant Quote Confirmed" },
                { n: "02", bg: "bg-[#1b61ff] text-white", title: "Mobile Van Dispatched", body: "Our nearest fully stocked Mercedes Sprinter workshop heads directly to your roadside location, office car park, or home driveway within 20–35 minutes.", note: "Live GPS Link Provided" },
                { n: "03", bg: "bg-[#0b1e3d] text-[#ffe16d]", title: "Fitted & Driven Away", body: "Your tyre is unmounted, replaced, laser-balanced, and torqued to manufacturer specs on-site. Pay by card, contactless, or fleet account only once complete.", note: "No Garage Queue" },
              ].map((s) => (
                <div key={s.n} className="flex flex-col gap-2 p-6 rounded-2xl bg-[#f2f4f6] shadow-sm">
                  <div className={`h-12 w-12 rounded-xl ${s.bg} font-bold flex items-center justify-center`}>{s.n}</div>
                  <h3 className="text-[18px] leading-[24px] text-[#000516] font-bold">{s.title}</h3>
                  <p className="text-sm text-[#44474e] leading-relaxed">{s.body}</p>
                  <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-wider mt-auto">{s.note}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. COVERAGE / NEARBY AREAS */}
        <section className="w-full bg-[#0b1e3d] text-white py-16 md:py-20 px-4 md:px-6 lg:px-8 shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-[#dce1ff] text-[11px] font-bold uppercase tracking-widest">Rapid Coverage Zone</span>
                <h2 className="text-[30px] leading-[38px] text-white font-bold mt-1">Rochdale Borough &amp; Surrounding Hubs</h2>
                <p className="text-base text-[#e0e3e5] mt-2 leading-relaxed">
                  Our regional depot network stations multiple emergency vans around key junctions to maintain sub-35-minute arrival across the wider metropolitan district.
                </p>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/15 backdrop-blur-md shadow-inner w-fit">
                <div className="h-14 w-14 rounded-full overflow-hidden shadow-md shrink-0 relative">
                  <Image src="/gallery-precision-care.webp" alt="Direct Tyre Solutions technician on call" fill sizes="56px" className="object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#ffe16d]" />
                    <span className="text-[11px] uppercase text-[#dce1ff]">Fleet Lead On Shift</span>
                  </div>
                  <p className="text-[18px] leading-[24px] text-white font-bold">Sector OL11-OL16</p>
                  <p className="text-sm text-[#e0e3e5]">Immediate dispatch standby</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Royton (OL2)", "Shaw (OL2)", "Heywood (OL10)", "Littleborough (OL15)", "Milnrow (OL16)", "M62 Corridor (Junctions 19–22)", "Castleton (OL11)", "Norden & Bamford (OL11)"].map((a) => (
                <span key={a} className="px-5 py-2.5 rounded-full bg-white/15 hover:bg-[#1b61ff] text-white font-semibold transition-all shadow-sm">
                  {a}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 6. PRICING */}
        <section className="w-full bg-[#f7f9fb] py-16 md:py-20 px-4 md:px-6 lg:px-8" id="quick-quote">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-2xl bg-[#0b1e3d] p-6 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-96 h-96 bg-[#1b61ff]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-7 flex flex-col gap-3">
                  <span className="text-[#ffe16d] text-[11px] font-bold uppercase tracking-widest">Clear Upfront Pricing</span>
                  <h2 className="text-[30px] leading-[38px] text-white font-bold">Get an instant estimate for tyre fitting in Rochdale</h2>
                  <p className="text-base text-[#e0e3e5] max-w-xl">
                    No hidden fees. Every quote includes roadside/driveway callout, new valve replacement, computerized balancing, and eco-friendly tyre disposal.
                  </p>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md flex flex-col gap-3">
                    <label className="text-sm text-white font-semibold flex items-center justify-between" htmlFor="reg-plate-input">
                      <span>Enter Your Vehicle Registration:</span>
                      <span className="text-[#ffe16d] text-[11px] uppercase">Instant Tyre Lookup</span>
                    </label>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-[#ffe16d] text-[#221b00] font-bold px-3 py-3 rounded-lg shadow-sm">
                        <span className="text-xs mr-1">GB</span>
                      </div>
                      <input
                        id="reg-plate-input"
                        type="text"
                        placeholder="e.g. RO21 TYR"
                        className="w-full px-4 py-3 rounded-lg bg-white text-[#000516] font-bold uppercase tracking-widest text-center placeholder:text-[#75777f] focus:outline-none focus:ring-2 focus:ring-[#1b61ff]"
                      />
                    </div>
                    <a className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-[#1b61ff] hover:bg-[#004ad2] text-white font-bold shadow-lg transition-all hover:scale-[1.01]" href="tel:07955266077">
                      <Search className="h-5 w-5" />
                      <span>Lookup Tyre Size &amp; Quote</span>
                    </a>
                  </div>
                  <p className="text-center text-xs text-[#e0e3e5]">
                    Or call <a className="text-[#ffe16d] font-bold underline" href="tel:07955266077">07955 266 077</a> for 60-second dispatch assistance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="w-full bg-white py-16 md:py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            <div className="text-center flex flex-col gap-2">
              <span className="text-[#1b61ff] text-[11px] font-bold uppercase tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-[30px] leading-[38px] text-[#000516] font-bold">Rochdale Tyre Assistance FAQ</h2>
              <p className="text-base text-[#44474e]">Answers to specific common questions regarding local terrain, highway stops, and payment.</p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { q: "Can you rescue my vehicle on the M62 at Junction 20 or 21?", a: "Yes. We routinely assist motorists pulled over onto the hard shoulders, service laybys, and slip roads around M62 Junction 20 (Rochdale/A627M) and Junction 21 (Milnrow/Shaw). Our vans are equipped with high-visibility Chapter 8 motorway warning systems and full hazard beacons to ensure an authorized, high-safety tyre replacement." },
                { q: "Can you change a tyre on a steep driveway near Littleborough or Milnrow?", a: "Absolutely. Our mobile workshops carry heavy-duty pneumatic chocks, specialized low-profile jacks, and stabilizing pads specifically designed for inclined driveways in the Pennine foothills. Technicians assess gradient stability prior to any lift to safeguard your vehicle chassis and property." },
                { q: "Do you stock all-season, winter, and 4x4 tyres for Rochdale weather?", a: "Given Rochdale's exposure to moorland freeze and heavy precipitation, our local hubs hold comprehensive inventory for SUV, 4x4, commercial van, and car fitments — including leading All-Season and dedicated winter rubber ready for urgent same-day deployment." },
                { q: "What payment methods are accepted at the roadside or home?", a: "Each van is equipped with a secure chip-and-pin card terminal supporting all major credit and debit cards (Visa, Mastercard, Amex), Apple Pay, and Google Pay. Commercial fleet operators can also settle via approved business accounts or pre-authorized BACS invoicing." },
              ].map((faq) => (
                <details key={faq.q} className="group rounded-2xl bg-[#f2f4f6] shadow-sm overflow-hidden p-6 transition-all cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between text-[18px] leading-[24px] text-[#000516] font-bold list-none">
                    <span>{faq.q}</span>
                    <ChevronDown className="h-6 w-6 text-[#004ad2] transition-transform duration-300 group-open:rotate-180 shrink-0" />
                  </summary>
                  <div className="mt-4 text-base text-[#44474e] leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 8. LOCAL MAP */}
        <section className="w-full bg-[#f7f9fb] py-16 md:py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 flex flex-col gap-3">
                <span className="text-[#1b61ff] text-[11px] font-bold uppercase tracking-widest">Visual Telemetry</span>
                <h2 className="text-[30px] leading-[38px] text-[#000516] font-bold">Rochdale Mobile Radius</h2>
                <p className="text-base text-[#44474e] leading-relaxed">
                  Direct Tyre Solutions maintains continuous geofenced presence encompassing OL11, OL12, OL15, OL16 and immediate orbital arterial bypasses.
                </p>
                <div className="p-4 rounded-2xl bg-white shadow-sm flex flex-col gap-3 mt-2">
                  <div className="flex items-center gap-3">
                    <Radar className="h-5 w-5 text-[#1b61ff]" />
                    <span className="font-bold text-[#000516]">High-Speed Response Zones:</span>
                  </div>
                  <ul className="text-sm text-[#44474e] flex flex-col gap-1.5 pl-2">
                    {["A58 Halifax Road & Manchester Road", "A627(M) & M62 Junction 20 / 21", "Kingsway Business Park Logistics Core", "Littleborough & Hollingworth Lake Incline Paths"].map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#1b61ff]" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl relative bg-[#eceef0] flex items-center justify-center">
                  <Image src="/gallery-onsite-wheel-fitting.webp" alt="Rochdale, Greater Manchester, UK service area" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
                  <div className="absolute inset-0 bg-[#0b1e3d]/30" />
                  <div className="relative flex items-center justify-center pointer-events-none">
                    <div className="absolute w-64 h-64 rounded-full bg-[#1b61ff]/10 border-2 border-dashed border-[#1b61ff] animate-pulse" />
                    <div className="relative z-10 px-4 py-2 rounded-xl bg-[#0b1e3d] text-white shadow-2xl flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-[#ffe16d]" />
                      <div className="text-left">
                        <span className="text-[11px] uppercase text-[#dce1ff] block">Active Hub</span>
                        <span className="text-sm font-bold">Rochdale (OL11/OL16)</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-[#000516]/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs flex items-center gap-2 shadow-lg">
                    <span className="h-2 w-2 rounded-full bg-[#ffe16d] animate-ping" />
                    <span>12 Mobile Units Across Greater Manchester Today</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. CLOSING CTA */}
        <section className="w-full bg-[#0b1e3d] text-white py-16 md:py-20 px-4 md:px-6 lg:px-8 shadow-2xl relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-[#ffe16d] text-[11px] font-bold uppercase tracking-widest">
              <MapPin className="h-4 w-4" />
              <span>Immediate Roadside &amp; Driveway Attendance</span>
            </div>
            <h2 className="text-[30px] leading-[38px] sm:text-[40px] sm:leading-[48px] text-white tracking-tight max-w-4xl font-extrabold">
              Stuck with a tyre in Rochdale? We&rsquo;re on our way.
            </h2>
            <p className="text-lg text-[#e0e3e5] max-w-2xl">
              Do not wait hours for a recovery lorry or crawl on a dangerous rim. Direct Tyre Solutions dispatches right to your coordinates with the correct replacement.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a className="flex items-center gap-3 px-8 py-4 rounded-xl bg-[#1b61ff] hover:bg-[#004ad2] text-white font-bold shadow-2xl transition-all hover:scale-105 active:scale-95" href="tel:07955266077">
                <PhoneCall className="h-6 w-6 text-[#ffe16d]" />
                <span>Call Now: 07955 266 077</span>
              </a>
              <a className="px-8 py-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold transition-all" href="#quick-quote">
                Request Price Estimate
              </a>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 pt-4 text-sm text-[#dce1ff]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-[18px] w-[18px] text-[#ffe16d]" /> 24/7 All-Weather Callouts
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-[18px] w-[18px] text-[#ffe16d]" /> Pay After Fitting
              </span>
            </div>
          </div>
        </section>
      </main>
      <LocationFooter />
    </>
  );
}
