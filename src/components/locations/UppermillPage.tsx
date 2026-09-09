import Image from "next/image";
import Link from "next/link";
import {
  Star,
  PhoneCall,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  ChevronDown,
  BadgeCheck,
  Disc,
  Gauge,
  Wrench,
  Unlock,
  Compass,
  Mountain,
} from "lucide-react";
import LocationHeader from "./LocationHeader";
import LocationFooter from "./LocationFooter";

const stars = [0, 1, 2, 3, 4];

export default function UppermillPage() {
  return (
    <>
      <LocationHeader currentSlug="uppermill" />
      <main className="w-full pt-20 bg-[#f7f9fb]">
        {/* 1. HERO — compact centered typographic hero */}
        <section className="relative bg-[#f7f9fb] py-16 md:py-20 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#1b61ff]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e6e8ea] text-[#191c1e] shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#004ad2] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1b61ff]" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#004ad2]">On Standby &bull; Saddleworth Valley</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white shadow-sm">
                <div className="flex text-[#e9c400]">
                  {stars.map((i) => (
                    <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-sm font-bold text-[#191c1e]">4.9 / 5.0</span>
                <span className="text-sm text-[#44474e] hidden sm:inline">(380+ Saddleworth Motorists)</span>
              </div>
            </div>
            <h1 className="text-[36px] leading-[44px] md:text-[56px] md:leading-[64px] tracking-[-0.02em] md:tracking-[-0.03em] font-extrabold text-[#000516] max-w-4xl mb-4">
              24/7 Mobile Tyre Fitting <span className="text-[#1b61ff]">in Uppermill</span>
            </h1>
            <p className="text-lg text-[#44474e] max-w-2xl mb-8 leading-relaxed">
              Your dedicated village roadside &amp; home tyre replacement service — rapid dispatch across Uppermill in 25–40 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#1b61ff] text-white hover:bg-[#004ad2] shadow-md transition-all active:scale-95"
                href="tel:07955266077"
              >
                <PhoneCall className="h-[22px] w-[22px] text-[#e9c400]" />
                <span className="text-lg font-bold">Call Now: 07955 266 077</span>
              </a>
              <Link
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-[#000516] hover:bg-[#f2f4f6] shadow-sm font-semibold transition-all"
                href="/#contact"
              >
                Get Instant Quote
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 max-w-3xl w-full">
              {[
                ["25-40 min", "Average Arrival"],
                ["OL3 Base", "Local Dispatch"],
                ["Zero Towing", "Mobile Workshop"],
                ["All Brands", "Budget to Premium"],
              ].map(([v, l]) => (
                <div key={l} className="flex flex-col items-center">
                  <span className="text-[22px] leading-[28px] font-bold text-[#000516]">{v}</span>
                  <span className="text-xs text-[#44474e] uppercase tracking-wide">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. LOCAL INTRO */}
        <section className="bg-[#f2f4f6] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6e8ea] text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em] mb-3">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Locally Based in Saddleworth</span>
                </div>
                <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#000516] mb-4">
                  Built for Uppermill&rsquo;s Cobbles, Lanes &amp; Canal Roads
                </h2>
                <p className="text-lg text-[#191c1e] leading-relaxed mb-4">
                  Navigating a flat tyre on Uppermill High Street during busy market hours, or facing a bead rupture halfway up Church Road or Court Street&rsquo;s steep gradients, leaves drivers completely stranded. Our purpose-built compact Mercedes mobile fitting vans operate natively across Saddleworth, designed precisely to manoeuvre tight Victorian mill lanes and packed weekend parking zones near the Saddleworth Museum and canal basin. We bring full commercial-grade tyre fitting and computerized digital balancing straight to your car, cottage driveway, or roadside curb without calling an expensive recovery truck.
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  {["Tight Mill Lane Clearance", "Driveway & Roadside Operable", "Emergency Day & Night Team"].map((t) => (
                    <span key={t} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white text-[#191c1e] text-sm shadow-sm">
                      <ShieldCheck className="h-[18px] w-[18px] text-[#1b61ff]" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="rounded-xl overflow-hidden shadow-xl bg-white relative aspect-[4/3]">
                  <Image
                    src="/gallery-onsite-wheel-fitting.webp"
                    alt="Mobile tyre fitting technician working beside a car in Uppermill village"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-[#0b1e3d]/95 p-3 rounded-lg backdrop-blur text-white flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold">OL3 Village Unit Active</p>
                      <p className="text-xs text-[#dce1ff]">High Street • Church Rd • Museum Basin</p>
                    </div>
                    <MapPin className="h-6 w-6 text-[#ffe16d]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES VERTICAL NUMBERED LIST */}
        <section className="bg-[#f7f9fb] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Engineered Field Solutions</span>
              <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#000516] mt-1">
                Specialist Tyre Services Across Uppermill
              </h2>
              <p className="text-base text-[#44474e] mt-1">
                Equipped to service high-end prestige saloons, 4x4s tackling the moors, light commercial delivery vans, and compact village family cars on-site.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { n: "01", icon: Disc, title: "Mobile Tyre Fitting in Uppermill", body: "Full roadside, home driveway, or workplace tyre replacements without leaving your spot.", cta: "Book Fitting", points: ['All rim sizes from 14" to 22"', "Run-flat and EV compound options", "Eco-compliant old tyre disposal included"] },
                { n: "02", icon: Gauge, title: "Precision Wheel Balancing in Uppermill", body: "Eliminate steering wobble, motorway judder, and uneven tread decay with high-speed digital balancers.", cta: "Book Balance", points: ["Calibrated computerized field rigs", "New snap-in valves on each change", "High-speed A62 / Moorland stability"] },
                { n: "03", icon: Wrench, title: "Safe Puncture Repairs Near You in Uppermill", body: "Rigorous BSAU159 compliant internal patch-plug vulcanization saves you the cost of a brand-new tyre.", cta: "Request Repair", points: ["Internal inspection of tyre liner", "Nail, flint & stone puncture extraction", "Permanent cold vulcanized seal"] },
                { n: "04", icon: Unlock, title: "Locking Wheel Nut Extraction in Uppermill", body: "Lost key or sheared security bolt? Damage-free reverse-thread extraction on your driveway.", cta: "Unlock Wheel", points: ["Non-destructive alloy rim guarantee", "McGard, spinning & overtightened bolts", "Immediate standard replacement studs"] },
              ].map((s) => (
                <div key={s.n} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className="text-[30px] leading-[38px] font-bold text-[#1b61ff] shrink-0">{s.n}</span>
                      <div className="w-12 h-12 rounded-full bg-[#eceef0] flex items-center justify-center text-[#000516] shrink-0 group-hover:bg-[#1b61ff] group-hover:text-white transition-colors">
                        <s.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-[22px] leading-[28px] font-bold text-[#000516]">{s.title}</h3>
                        <p className="text-base text-[#44474e] mt-1">{s.body}</p>
                      </div>
                    </div>
                    <a className="self-start md:self-center inline-flex items-center gap-1 text-sm font-semibold text-[#1b61ff] hover:text-[#004ad2]" href="tel:07955266077">
                      <span>{s.cta}</span>
                      <span aria-hidden>&rarr;</span>
                    </a>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4 pt-4 border-t border-[#e6e8ea]/50">
                    {s.points.map((p) => (
                      <div key={p} className="flex items-center gap-2 text-[#191c1e] text-sm">
                        <CheckCircle2 className="h-[18px] w-[18px] text-[#004ad2]" />
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="bg-[#f2f4f6] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Fast Uppermill Dispatch</span>
              <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#000516] mt-1">
                From Call to Roadside in 3 Steps
              </h2>
              <p className="text-base text-[#44474e] mt-1">No waiting around a garage waiting room. We come directly to your current location.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { n: "1", title: "Call or Send Reg", body: "Dial 07955 266 077 with your vehicle registration or tyre specs (e.g. 225/45 R17) and your pinpoint location in Uppermill.", bg: "bg-[#0b1e3d] text-white" },
                { n: "2", title: "Van Dispatched (25-40m)", body: "Our fully fitted mobile unit heads along High Street or the surrounding lanes, equipped with exact OEM or budget tyre options.", bg: "bg-[#1b61ff] text-white" },
                { n: "3", title: "Fitted & Safe Journey", body: "We mount, digital-balance, and torque-test your wheel to manufacturer spec. Pay seamlessly via contactless card reader on completion.", bg: "bg-[#000516] text-white" },
              ].map((s) => (
                <div key={s.n} className="bg-white rounded-xl p-8 shadow-sm flex flex-col items-start">
                  <div className={`w-10 h-10 rounded-full ${s.bg} flex items-center justify-center font-bold mb-4`}>{s.n}</div>
                  <h3 className="text-[22px] leading-[28px] font-bold text-[#000516] mb-1">{s.title}</h3>
                  <p className="text-base text-[#44474e] leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. COVERAGE / NEARBY AREAS */}
        <section className="bg-[#0b1e3d] text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-md">
                <span className="text-[#ffe16d] text-[11px] font-bold uppercase tracking-[0.06em]">Local Coverage Network</span>
                <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white mt-1">
                  Direct Service Across OL3 &amp; Beyond
                </h2>
                <p className="text-base text-[#dce1ff] mt-1">
                  Based right in the heart of Saddleworth, our mobile fitting fleet covers Uppermill and all neighbouring Pennine townships daily.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 max-w-xl">
                <span className="px-4 py-2 rounded-full bg-[#1b61ff] text-white text-sm font-bold shadow-md">&bull; Uppermill (Primary Hub)</span>
                {["Saddleworth", "Greenfield", "Dobcross", "Grasscroft", "Diggle", "Delph"].map((a) => (
                  <span key={a} className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-colors">{a}</span>
                ))}
                <Link href="/mobile-tyre-fitting-oldham" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-colors">
                  Oldham
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <section className="bg-[#f7f9fb] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Local Community Trust</span>
              <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#000516] mt-1">Words from Uppermill Drivers</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { quote: "Punctured my tyre right outside the butcher on High Street on a busy Saturday. Other recovery firms quoted 3 hours. Direct Tyre Solutions arrived in 25 minutes, fitted a replacement Michelin on the spot, and got me moving. Lifesavers!", name: "Eleanor W.", place: "High Street, Uppermill" },
                { quote: "Live near the top of Church Road where parking is tight and steep. The fitter backed his compact van up without an issue, removed a stripped locking wheel nut, and fitted two fresh front tyres right outside my house. Super professional.", name: "Tom S.", place: "Church Road, Uppermill" },
                { quote: "Picked up a massive screw near the Saddleworth Museum car park on Sunday evening. The technician tested the tread and managed to do a full safe vulcanized plug repair, saving me £140 on a new tyre. Honest, transparent service.", name: "Keith D.", place: "Saddleworth Canal Basin" },
              ].map((r) => (
                <div key={r.name} className="bg-white p-8 rounded-xl shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex text-[#e9c400] mb-3">
                      {stars.map((i) => (
                        <Star key={i} className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="text-base text-[#191c1e] leading-relaxed italic">&ldquo;{r.quote}&rdquo;</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#eceef0]">
                    <h4 className="text-lg font-bold text-[#000516]">{r.name}</h4>
                    <p className="text-sm text-[#44474e]">{r.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PRICING CALLOUT */}
        <section className="bg-[#f7f9fb] py-8">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-[#0b1e3d] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
              <div className="absolute right-0 top-0 w-96 h-96 bg-[#1b61ff]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffe16d] text-[11px] font-bold uppercase tracking-[0.06em] mb-3">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Transparent Village Pricing
                  </div>
                  <h3 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold mb-2">
                    No Hidden Surcharges for OL3 Roadside Callouts
                  </h3>
                  <p className="text-lg text-[#dce1ff] max-w-2xl leading-relaxed">
                    Every quote includes mobile callout, complete fitting, electronic digital wheel balancing, a new standard valve, and responsible disposal of your worn casing. We give you the exact price over the phone before dispatching.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-4 text-white text-sm">
                    {["Fixed Quotes Upfront", "Pay on Completion", "All Major Cards Accepted"].map((t) => (
                      <div key={t} className="flex items-center gap-2">
                        <ShieldCheck className="h-[18px] w-[18px] text-[#1b61ff]" />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl text-center">
                  <span className="text-xs uppercase tracking-wider text-[#ffe16d]">Emergency Call Desk</span>
                  <a className="text-[30px] leading-[38px] font-bold text-white hover:text-[#1b61ff] transition-colors my-1" href="tel:07955266077">
                    07955 266 077
                  </a>
                  <span className="text-sm text-[#dce1ff] mb-4">Live technician available now</span>
                  <a className="w-full py-3 rounded-lg bg-[#1b61ff] text-white font-bold text-center hover:bg-[#004ad2] transition-colors" href="tel:07955266077">
                    Call for Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="bg-[#f2f4f6] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Frequently Asked</span>
              <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#000516] mt-1">
                Uppermill Mobile Tyre FAQs
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { q: "Can your vans safely work on narrow, steep Uppermill streets?", a: "Yes. Our mobile workshop units are built on compact-wheelbase chassis tailored specifically for historic Pennine villages like Uppermill. Whether you are parked along Church Road, narrow residential alleys off Court Street, or in a tight village car park, our equipment operates completely self-contained from the vehicle without blocking pedestrian lanes." },
                { q: "Are you available on Sundays, bank holidays, and late evenings?", a: "Absolutely. We provide genuine 24-hour, 7-day-a-week mobile coverage across Uppermill and Greater Saddleworth. If you return to your parked car on a Sunday afternoon after exploring the canal only to find a flat, our on-call fitter can be with you in 25–40 minutes." },
                { q: "Can you repair my puncture instead of replacing the entire tyre?", a: "We always inspect for repairability first. If the foreign object (screw or nail) is located within the central 60-70% tread band and the tyre hasn't sustained internal sidewall degradation from being driven flat, we will perform a permanent British Standard BS AU 159 vulcanized repair on-site to save you money." },
                { q: "What payment options do you accept on the roadside?", a: "All our vans carry secure cellular card terminals. You can pay with Visa, Mastercard, Maestro, American Express, Apple Pay, or Google Pay once your tyre has been fully installed, balanced, and safety checked." },
              ].map((faq) => (
                <details key={faq.q} className="group bg-white rounded-xl shadow-sm overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="w-full px-6 py-4 flex items-center justify-between gap-4 cursor-pointer list-none">
                    <span className="text-lg font-bold text-[#000516]">{faq.q}</span>
                    <ChevronDown className="h-6 w-6 text-[#1b61ff] transition-transform group-open:rotate-180 shrink-0" />
                  </summary>
                  <p className="px-6 pb-4 text-[#44474e] leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 9. LOCAL MAP */}
        <section className="bg-[#f7f9fb] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Local Response Zone</span>
                <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#000516] mt-1 mb-4">
                  Centered on Uppermill &amp; the Tame Valley
                </h2>
                <p className="text-base text-[#44474e] leading-relaxed mb-4">
                  Our priority rapid dispatch route covers the full length of the A670, High Street, Dobcross New Road, and the scenic Huddersfield Narrow Canal corridor. We guarantee an agile, responsive technician across the OL3 district around the clock.
                </p>
                <div className="space-y-2">
                  {[
                    ["Uppermill Village Centre:", "20–30 mins response"],
                    ["Church Road & Moorgate:", "25–35 mins response"],
                    ["Saddleworth Canal Basin:", "20–30 mins response"],
                  ].map(([label, val]) => (
                    <div key={label} className="flex items-center gap-2 text-sm text-[#191c1e]">
                      <MapPin className="h-5 w-5 text-[#004ad2]" />
                      <strong>{label}</strong> {val}
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="w-full h-80 md:h-96 rounded-xl shadow-md overflow-hidden relative bg-[#0b1e3d] flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-64 h-64 rounded-full border-2 border-dashed border-[#1b61ff]/40 animate-spin" style={{ animationDuration: "40s" }} />
                    <Compass className="absolute h-10 w-10 text-white/30" />
                  </div>
                  <div className="absolute top-4 left-4 bg-[#0b1e3d] text-white px-4 py-2 rounded-lg shadow font-semibold text-sm flex items-center gap-2 border border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffe16d] animate-ping" />
                    <span>Live Uppermill Van: Standby OL3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CLOSING CTA */}
        <section className="bg-[#000516] text-white py-16 md:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
            <span className="text-[#ffe16d] text-[11px] font-bold uppercase tracking-[0.06em] flex items-center justify-center gap-2 mb-2">
              <Mountain className="h-4 w-4" /> Immediate Village Assistance
            </span>
            <h2 className="text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold tracking-tight text-white max-w-3xl mx-auto">
              Stuck with a tyre in Uppermill? <span className="text-[#ffe16d]">We&rsquo;re on our way.</span>
            </h2>
            <p className="text-lg text-[#dce1ff] max-w-2xl mx-auto mt-4 mb-8">
              Speak directly with our local technician. Quick dispatch, upfront prices, and zero recovery fees.
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
