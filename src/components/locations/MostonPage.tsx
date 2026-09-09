import Image from "next/image";
import Link from "next/link";
import {
  Star,
  PhoneCall,
  MapPin,
  CheckCircle2,
  ChevronDown,
  Disc,
  Gauge,
  Wrench,
  Unlock,
  Truck,
} from "lucide-react";
import LocationHeader from "./LocationHeader";
import LocationFooter from "./LocationFooter";

const stars = [0, 1, 2, 3, 4];

export default function MostonPage() {
  return (
    <>
      <LocationHeader currentSlug="moston" />
      <main className="w-full pt-20 bg-[#f7f9fb]">
        {/* Emergency status ticker */}
        <div className="w-full bg-[#0b1e3d] text-white py-2.5 px-4 md:px-6 shadow-inner">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px] uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffe16d] animate-ping" />
              <span className="text-[#ffe16d] font-bold">Moston Rapid Unit #04</span>
              <span className="text-[#dce1ff] hidden sm:inline">&bull; Operating Lightbowne Rd &bull; St Mary&rsquo;s Road &bull; Kenyon Lane</span>
            </div>
            <div className="flex items-center gap-4 text-[#dce1ff]">
              <span className="flex items-center gap-1.5">Live Dispatch SLA: 20–35 Mins</span>
              <span className="hidden md:flex items-center gap-1.5">BS AU 159 Certified</span>
            </div>
          </div>
        </div>

        {/* 1. HERO — split layout */}
        <section className="w-full py-12 md:py-20 bg-[#f7f9fb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col items-start gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm">
                  <div className="flex items-center text-[#705d00]">
                    {stars.map((i) => (
                      <Star key={i} className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="text-[18px] leading-[24px] font-bold text-[#000516]">4.9</span>
                  <span className="text-sm text-[#44474e]">500+ Verified Reviews</span>
                </div>
                <div className="space-y-3">
                  <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-widest">Direct Tyre Solutions &bull; Greater Manchester</span>
                  <h1 className="text-[36px] leading-[44px] md:text-[56px] md:leading-[64px] text-[#000516] tracking-tight font-extrabold">
                    24/7 Mobile Tyre Fitting in <span className="text-[#004ad2]">Moston</span>
                  </h1>
                  <p className="text-lg text-[#44474e] max-w-2xl leading-relaxed">
                    Rapid on-demand mobile tyre fitting to your driveway, workplace, or roadside in Moston within 20–35 minutes. Heavy-duty Mercedes Sprinter workshops loaded with all leading brand sizes.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
                  <a className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#1b61ff] hover:bg-[#004ad2] text-white font-bold shadow-lg transition-all hover:scale-105 active:scale-98" href="tel:07955266077">
                    <PhoneCall className="h-[22px] w-[22px] text-[#ffe16d]" />
                    Call Now: 07955 266 077
                  </a>
                  <Link className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-[#e6e8ea] text-[#000516] font-semibold shadow-sm transition-all" href="/#contact">
                    Get a Quote
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-4 w-full max-w-xl">
                  {[
                    ["20-35m", "Average Arrival"],
                    ["365 Days", "Day & Night Shifts"],
                    ["£0 Callout", "Fixed Price Quotes"],
                  ].map(([v, l]) => (
                    <div key={l} className="p-3 rounded-xl bg-[#f2f4f6] flex flex-col">
                      <span className="text-[18px] leading-[24px] font-bold text-[#000516]">{v}</span>
                      <span className="text-[11px] text-[#44474e] uppercase">{l}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#0b1e3d] p-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] md:aspect-[16/11]">
                    <Image
                      src="/hero-section-images-936x527.webp"
                      alt="Direct Tyre Solutions mobile van in residential Moston"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3d]/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#0b1e3d]/90 backdrop-blur-md shadow-lg text-white">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffe16d] animate-pulse" />
                      <span className="text-[11px] tracking-wide uppercase font-bold text-[#ffe16d]">Moston Patrol Active</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md shadow-lg flex items-center justify-between text-[#000516]">
                      <div className="flex items-center gap-2.5">
                        <Truck className="h-6 w-6 text-[#004ad2]" />
                        <div>
                          <span className="text-[11px] uppercase block text-[#44474e]">Live Dispatch Status</span>
                          <span className="text-[18px] leading-[24px] font-bold text-[#000516]">Van #04 in Moston</span>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-[#dce1ff] text-[#00164e] text-[11px] font-bold uppercase">Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. LOCAL INTRO */}
        <section className="w-full py-16 md:py-20 bg-[#f2f4f6]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white p-2">
                  <div className="relative w-full h-[340px] md:h-[420px] rounded-xl overflow-hidden">
                    <Image
                      src="/gallery-home-callout.webp"
                      alt="Fully loaded mobile workshop Mercedes Sprinter parked for callout in Moston"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0b1e3d]/90 text-white backdrop-blur-sm shadow-xl flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1b61ff] flex items-center justify-center shrink-0">
                      <Wrench className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-[18px] leading-[24px] font-bold">Full Mobile Bay On-Board</h4>
                      <p className="text-sm text-[#dce1ff]">Corghi tyre changers, high-speed balancers, and run-flat capable bead breakers.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 flex flex-col gap-3 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#004ad2]" />
                  <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-wider">Neighbourhood Specialists</span>
                </div>
                <h2 className="text-[28px] leading-[36px] md:text-[40px] md:leading-[48px] text-[#000516] font-bold tracking-tight">
                  Trusted Mobile Tyre Service on Every Moston Street
                </h2>
                <div className="text-base text-[#44474e] space-y-3 leading-relaxed">
                  <p>
                    Moston&rsquo;s residential charm&mdash;from the terraced avenues off Lightbowne Road and family estates framing Kenyon Lane to the scenic perimeter of Broadhurst Park&mdash;demands a swift, neighborhood-savvy mobile solution. Heavy daily commutes along St Mary&rsquo;s Road and Moston Lane frequently expose local motorists to sharp curb impacts, hidden roadworks debris, and deep tarmac potholes that leave tyres deflated with zero warning.
                  </p>
                  <p>
                    Whether you discover a flat before the morning school run or face an emergency evening blowout returning home via the M60 corridor, Moston homeowners trust our bespoke Mercedes mobile vans directly on their driveway. We remove the expense, wait times, and hassle of static garages by carrying the workshop straight to your front door.
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  {["Driveway Friendly Equipment", "Zero Scratched Alloys", "All Weather Fitting"].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#004ad2]" />
                      <span className="text-sm font-semibold text-[#191c1e]">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES GRID */}
        <section className="w-full py-16 md:py-20 bg-[#f7f9fb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-wider">Precision Fleet Capabilities</span>
                <h2 className="text-[28px] leading-[36px] md:text-[40px] md:leading-[48px] text-[#000516] font-bold tracking-tight mt-1">
                  Mobile Workshop Services in Moston
                </h2>
              </div>
              <p className="text-base text-[#44474e] max-w-xl">Browse our dedicated mobile services operating across Moston and North Manchester daily.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { image: "/mobile-tyre-fitting-3-1536x1024.webp", icon: Disc, tag: "Most Popular", title: "On-Driveway Mobile Tyre Fitting", body: "Same-day replacement for blown, worn, or slashed tyres directly on your residential drive or roadside. Full range of budget, mid-range, and premium brands.", points: ["Brand new rubber valve stem", "Digital wheel re-balancing", "Old casing disposal included"] },
                { image: "/wheel-balancing-2-1536x1024.webp", icon: Gauge, tag: "Vibration-Free", title: "Precision Wheel Balancing", body: "High-speed digital laser balancing calibrated on-van to eliminate steering shudder on the busy M60 approach roads.", points: ["Calibrated laser rigs", "Even tread wear protection", "Motorway stability checks"] },
                { image: "/service-puncture-repair.webp", icon: Wrench, tag: "BS AU 159", title: "Roadside Puncture Repairs", body: "Permanent internal vulcanized plug repairs when tread damage sits safely inside the legal repair zone, saving the cost of a new tyre.", points: ["Internal liner inspection", "Nail & screw extraction", "Cold vulcanized seal"] },
                { image: "/service-locking-wheel-nut.webp", icon: Unlock, tag: "Zero Rim Damage", title: "Locking Wheel Nut Removal", body: "Lost your key or stuck with a rounded overtightened bolt? Reverse-thread extraction tooling frees it without a mark on your alloys.", points: ["Non-destructive extraction", "All major lock brands", "Immediate replacement studs"] },
              ].map((s) => (
                <div key={s.title} className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col justify-between group hover:shadow-xl transition-all">
                  <div className="relative h-40 w-full bg-[#e6e8ea]">
                    <Image src={s.image} alt={s.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="w-12 h-12 rounded-xl bg-[#dce1ff] flex items-center justify-center text-[#004ad2] mb-3">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-[#004ad2] text-white text-[11px] uppercase font-bold">{s.tag}</span>
                    <h3 className="text-[18px] leading-[24px] font-bold text-[#000516] mt-2">{s.title}</h3>
                    <p className="text-sm text-[#44474e] mt-2 leading-relaxed">{s.body}</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-[#191c1e]">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#004ad2]" /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a className="inline-flex items-center gap-1.5 text-[#004ad2] font-bold hover:underline px-4 pb-4" href="tel:07955266077">
                    Book Now &rarr;
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="w-full py-16 md:py-20 bg-[#f2f4f6]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-widest">Fast-Track Process</span>
              <h2 className="text-[28px] leading-[36px] md:text-[40px] md:leading-[48px] text-[#000516] font-bold tracking-tight mt-1">
                Back on the Road in Moston in 3 Steps
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { n: "01", bg: "bg-[#dce1ff] text-[#00164e]", title: "Call or Send Reg", body: "Share your vehicle registration or tyre dimensions and your exact Moston location — driveway, roadside, or workplace." },
                { n: "02", bg: "bg-[#1b61ff] text-white", title: "Van Dispatched (20–35m)", body: "Our nearest mobile unit heads directly to you via Lightbowne Road or Moston Lane with your tyre specification loaded." },
                { n: "03", bg: "bg-[#0b1e3d] text-white", title: "Fitted & Balanced", body: "We mount, digitally balance, torque to spec, and dispose of the old casing responsibly. Pay by contactless card on completion." },
              ].map((s) => (
                <div key={s.n} className="bg-white p-6 rounded-2xl shadow-md flex flex-col">
                  <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center font-bold mb-3`}>{s.n}</div>
                  <h3 className="text-[18px] leading-[24px] font-bold text-[#000516] mb-1">{s.title}</h3>
                  <p className="text-sm text-[#44474e] leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. COVERAGE / NEARBY AREAS */}
        <section className="w-full bg-[#0b1e3d] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="max-w-xl">
                <span className="text-[#ffe16d] text-[11px] font-bold uppercase tracking-wider">North Manchester Operational Grid</span>
                <h2 className="text-[22px] leading-[28px] font-bold text-white mt-1">Serving Moston &amp; Neighbouring Wards</h2>
                <p className="text-sm text-[#dce1ff] mt-1">Vans continuously patrol the M60 outer ring to guarantee sub-35 minute callouts across bordering districts.</p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {["Blackley", "Newton Heath", "Failsworth", "Harpurhey"].map((a) => (
                  <span key={a} className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm flex items-center gap-1.5">
                    <MapPin className="h-[18px] w-[18px] text-[#ffe16d]" /> {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <section className="w-full py-16 md:py-20 bg-[#f7f9fb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-widest">Locally Endorsed</span>
              <h2 className="text-[28px] leading-[36px] md:text-[40px] md:leading-[48px] text-[#000516] font-bold tracking-tight mt-1">Trusted by Moston Motorists</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { quote: "Woke up to a flat off Lightbowne Road before the school run. Van was outside in 24 minutes and fitted a new tyre on the driveway without a fuss.", name: "Rebecca N.", place: "Lightbowne Road, Moston" },
                { quote: "Delivery van punctured near Kenyon Lane. They brought the exact commercial spec tyre and had the driver back on route within half an hour.", name: "James O.", place: "Kenyon Lane, Moston" },
                { quote: "Rounded locking nut from a previous garage visit. Removed cleanly in ten minutes with zero marks on my alloys. Excellent service.", name: "Priya K.", place: "St Mary's Road, Moston" },
              ].map((r) => (
                <div key={r.name} className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex text-[#705d00] mb-3">
                      {stars.map((i) => (
                        <Star key={i} className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="text-base text-[#191c1e] italic leading-relaxed">&ldquo;{r.quote}&rdquo;</p>
                  </div>
                  <div className="pt-3">
                    <p className="text-sm font-bold text-[#191c1e]">{r.name}</p>
                    <p className="text-[11px] text-[#44474e]">{r.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PRICING */}
        <section className="w-full py-8 bg-[#f2f4f6]" id="quote-section">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="rounded-2xl bg-[#0b1e3d] p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#1b61ff]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col gap-2 max-w-xl">
                  <span className="text-[#ffe16d] text-[11px] font-bold uppercase tracking-wider">Transparent Upfront Pricing</span>
                  <h2 className="text-[28px] leading-[36px] md:text-[30px] md:leading-[38px] font-bold text-white">Get an instant estimate for tyre fitting in Moston</h2>
                  <p className="text-base text-[#dce1ff]">No hidden fees. Every quote includes callout, fitting, digital balancing, new valve, and eco disposal of your old tyre.</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
                  <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#1b61ff] hover:bg-[#004ad2] text-white font-bold shadow-lg transition-all" href="tel:07955266077">
                    <PhoneCall className="h-5 w-5" /> Instant Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="w-full py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-widest">Frequently Asked</span>
              <h2 className="text-[28px] leading-[36px] md:text-[40px] md:leading-[48px] text-[#000516] font-bold tracking-tight mt-1">
                Moston Mobile Tyre FAQs
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { q: "How quickly can you reach me in Moston?", a: "Our typical response window across Moston is 20 to 35 minutes. With vans positioned near Lightbowne Road and Moston Lane, we prioritize urgent roadside and driveway callouts immediately." },
                { q: "Can you fit tyres on residential driveways off Kenyon Lane?", a: "Yes. Our compact Mercedes Sprinter workshops are built for tight residential driveways and terraced streets, and carry low-profile jacks to work safely without damaging your drive." },
                { q: "Do you stock tyres for both cars and light commercial vans?", a: "Yes. Alongside standard passenger tyres, our vans carry reinforced commercial-spec rubber suitable for delivery vans and light commercial vehicles common around Moston's industrial links." },
                { q: "What if I need my old tyre disposed of responsibly?", a: "Every fitting includes environmentally certified disposal of your old tyre casing at no extra charge, sent to registered UK recycling facilities." },
              ].map((faq) => (
                <details key={faq.q} className="group bg-[#f2f4f6] rounded-2xl p-4 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                  <summary className="w-full flex items-center justify-between gap-4 cursor-pointer list-none">
                    <span className="text-lg font-semibold text-[#000516]">{faq.q}</span>
                    <ChevronDown className="h-6 w-6 text-[#004ad2] transition-transform group-open:rotate-180 shrink-0" />
                  </summary>
                  <p className="text-base text-[#44474e] mt-2 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 9. LOCAL MAP */}
        <section className="w-full py-16 md:py-20 bg-[#f2f4f6]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
                <div>
                  <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-wider">Patrol Coverage Zone</span>
                  <h2 className="text-[28px] leading-[36px] font-bold text-[#000516]">Moston &amp; Broadhurst Park Corridor</h2>
                  <p className="text-base text-[#44474e]">Live mobile units monitoring Lightbowne Road, St Mary&rsquo;s Road, and the M60 outer ring roads.</p>
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
                      Moston Centre
                    </div>
                  </div>
                  <div className="absolute top-12 left-1/3 flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffe16d]" />
                    <div className="mt-1 px-2 py-0.5 rounded bg-[#0b1e3d] text-white text-[11px] font-bold uppercase opacity-80">Broadhurst Park</div>
                  </div>
                  <div className="absolute bottom-12 right-1/3 flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#dce1ff]" />
                    <div className="mt-1 px-2 py-0.5 rounded bg-[#0b1e3d] text-white text-[11px] font-bold uppercase opacity-80">Kenyon Lane</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CLOSING CTA */}
        <section className="w-full bg-[#0b1e3d] text-white py-16 md:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b61ff]/30 text-[#dce1ff] text-[11px] font-bold uppercase tracking-wider mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffe16d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffe16d]" />
              </span>
              On-Call Dispatchers Ready
            </span>
            <h2 className="text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] font-bold text-white max-w-3xl mx-auto">
              Stuck with a flat tyre in Moston? We&rsquo;re on our way.
            </h2>
            <p className="text-lg text-[#dce1ff] max-w-2xl mx-auto mt-2 mb-8 leading-relaxed">
              Don&rsquo;t wait for a recovery truck. Call our rapid roadside squad now for immediate dispatch to your home, driveway, or roadside.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-12 py-4 rounded-lg bg-[#1b61ff] text-white hover:bg-[#004ad2] text-lg font-semibold shadow-2xl transition-all"
                href="tel:07955266077"
              >
                <PhoneCall className="h-6 w-6" />
                <span>Call 07955 266 077</span>
              </a>
              <Link
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-white text-lg font-semibold transition-colors"
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
