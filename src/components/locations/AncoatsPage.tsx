import Image from "next/image";
import Link from "next/link";
import {
  Star,
  PhoneCall,
  CheckCircle2,
  Disc,
  SlidersHorizontal,
  Wrench,
  Unlock,
  MapPin,
  ShieldCheck,
  ChevronDown,
  Quote,
  Truck,
  Navigation,
} from "lucide-react";
import LocationHeader from "./LocationHeader";
import LocationFooter from "./LocationFooter";

const stars = [0, 1, 2, 3, 4];

const services = [
  { icon: Disc, title: "On-Street Mobile Tyre Fitting in Ancoats", body: "Complete brand-new tyre replacement carried out directly at your resident bay, roadside meter, or business space without moving your car.", tag: "Book Mobile Van" },
  { icon: SlidersHorizontal, title: "Precision Dynamic Wheel Balancing in Ancoats", body: "Computerized laser balancing onboard our vans ensures silky smooth high-speed performance across the Mancunian Way and local motorways.", tag: "Laser Calibration" },
  { icon: Wrench, title: "Rapid Nail & Screw Puncture Repairs in Ancoats", body: "BS AU 159 compliant puncture sealing for tread-area punctures caused by construction debris across emerging Manchester developments.", tag: "Safe BSAU Repair" },
  { icon: Unlock, title: "Locking Wheel Nut Extraction in Ancoats", body: "Stripped, sheared, or missing locking nut key? Our precision inverse torque tools safely extract stubborn bolts without rim scratch.", tag: "Damage-Free Removal" },
];

export default function AncoatsPage() {
  return (
    <>
      <LocationHeader currentSlug="ancoats" />
      <main className="w-full pt-20 bg-[#f7f9fb]">
        {/* 1. ASYMMETRIC EDITORIAL HERO */}
        <section className="relative w-full overflow-hidden bg-[#f7f9fb] py-8 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6e8ea] mb-4 shadow-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1b61ff] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1b61ff]" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#004ad2]">Vans Mobile Near Cutting Room Square</span>
                  <span className="text-[11px] text-[#75777f]">|</span>
                  <span className="text-[11px] font-bold text-[#191c1e]">20–35 Min ETA</span>
                </div>
                <div className="flex items-center gap-2 mb-3 bg-white px-3 py-1 rounded-full shadow-sm">
                  <div className="flex text-[#c9a900]">
                    {stars.map((i) => (
                      <Star key={i} className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-[#191c1e]">4.9 / 5.0</span>
                  <span className="text-sm text-[#44474e]">(420+ Ancoats Callouts)</span>
                </div>
                <h1 className="text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] tracking-[-0.02em] md:tracking-[-0.03em] text-[#0b1e3d] mb-4">
                  24/7 Mobile Tyre Fitting in <span className="text-[#1b61ff] underline decoration-[#ffd700] decoration-4 underline-offset-8">Ancoats</span>.
                </h1>
                <p className="text-lg text-[#44474e] max-w-2xl mb-8">
                  On-demand roadside and curbside tyre replacement for Ancoats apartment residents and businesses — 20–35 minute arrival.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                  <a
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-[#1b61ff] text-white hover:bg-[#004ad2] transition-all shadow-md text-sm font-semibold"
                    href="tel:07955266077"
                  >
                    <PhoneCall className="h-5 w-5" />
                    <span>Call Now: 07955 266 077</span>
                  </a>
                  <Link
                    className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-[#0b1e3d] hover:bg-[#e6e8ea] transition-colors shadow-sm text-sm font-semibold"
                    href="/#contact"
                  >
                    Get Instant Quote
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8 w-full bg-[#f2f4f6] p-4 rounded-xl">
                  <div>
                    <div className="text-lg font-semibold text-[#0b1e3d]">Zero Driveway</div>
                    <div className="text-sm text-[#44474e]">Fitted at curbside &amp; bays</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-[#0b1e3d]">20–35m</div>
                    <div className="text-sm text-[#44474e]">Average urban dispatch</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-[#0b1e3d]">All Brands</div>
                    <div className="text-sm text-[#44474e]">Budget, Run-flat &amp; Premium</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 relative mt-6 lg:mt-0">
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#e6e8ea]">
                  <div className="relative w-full h-[440px]">
                    <Image
                      src="/gallery-roadside-fitting.webp"
                      alt="Direct Tyre Solutions technician fitting a tyre roadside in urban Manchester"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000516]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[11px] font-bold uppercase text-[#004ad2]">Live Fleet Status</div>
                        <div className="text-lg font-semibold text-[#191c1e]">Van #04 Active on Great Ancoats St</div>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-[#1b61ff] text-white flex items-center justify-center">
                        <Truck className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:flex absolute -top-4 -left-6 bg-[#0b1e3d] text-white p-4 rounded-xl shadow-xl items-center gap-3 max-w-xs">
                  <ShieldCheck className="h-7 w-7 text-[#ffd700]" />
                  <div>
                    <div className="text-sm font-semibold text-white">City Living Specialists</div>
                    <div className="text-sm text-[#dce1ff]">Underground &amp; resident bay access</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. LOCAL INTRO WITH INLINE TESTIMONIAL */}
        <section className="w-full bg-[#f2f4f6] py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 md:p-12 shadow-sm">
              <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-1 text-[#004ad2] mb-1">
                  <MapPin className="h-5 w-5" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.06em]">Neighbourhood Logistics: Ancoats M4</span>
                </div>
                <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#0b1e3d] mb-4">
                  Purpose-Built Mobile Tyre Solutions for Modern Apartment Living
                </h2>
                <div className="text-lg text-[#44474e] leading-relaxed space-y-4">
                  <p>
                    Ancoats has evolved from Manchester&rsquo;s historic industrial powerhouse into one of the UK&rsquo;s most vibrant urban enclaves. With beautifully repurposed red-brick landmarks like <strong>Royal Mills</strong> and <strong>Murrays&rsquo; Mills</strong> framing <strong>Cutting Room Square</strong>, city dwelling has never looked better. Yet the modern urban layout presents a real challenge for drivers: <em>virtually none of Ancoats&rsquo; apartment dwellers have a private garage or personal driveway</em>.
                  </p>
                  <div className="my-4 p-4 rounded-xl bg-[#f2f4f6] border-l-4 border-[#1b61ff] flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div className="flex items-start gap-3">
                      <Quote className="h-6 w-6 text-[#004ad2] mt-0.5 shrink-0" />
                      <p className="text-base text-[#191c1e] italic m-0">
                        &ldquo;Saved my morning when I had a flat outside Cutting Room Square before work. The van pulled right alongside my parked Golf, completed the swap in 25 minutes, and I wasn&rsquo;t even late.&rdquo;
                      </p>
                    </div>
                    <div className="whitespace-nowrap pl-9 sm:pl-0">
                      <span className="text-sm font-bold text-[#0b1e3d] block">Sophie M.</span>
                      <span className="text-sm text-[#75777f] block">Blossom Street Resident</span>
                    </div>
                  </div>
                  <p>
                    When a puncture strikes along the bustling thoroughfare of <strong>Great Ancoats Street</strong> or in your designated courtyard bay behind Henry Street, driving on a flat rim to a distant traditional depot is simply not an option. Direct Tyre Solutions eliminates the hassle completely. Our custom-engineered, ultra-compact mobile workshops navigate narrow one-way historic streets, residential access alleys, and surface resident car parks to fit, balance, and repair your tyres directly where your car rests.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 pt-4 bg-[#f2f4f6] rounded-xl p-4">
                  {["No Tow Truck Needed", "Permit & Street Side Protocols", "On-Board High-Speed Balancing"].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-[#1b61ff]">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="text-sm text-[#191c1e]">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES GRID */}
        <section className="w-full bg-[#f7f9fb] py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div className="max-w-2xl">
                <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Complete Mobile Workshop</span>
                <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#0b1e3d] mt-1">Specialist Mobile Tyre Services in Ancoats</h2>
              </div>
              <p className="text-base text-[#44474e] max-w-md mt-2 md:mt-0">
                Industrial equipment packed into high-spec response vans, delivering dealership-quality tyre fitting on any Ancoats street.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div key={service.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-[#dce1ff] flex items-center justify-center mb-4 group-hover:bg-[#1b61ff] transition-colors">
                      <service.icon className="h-6 w-6 text-[#004ad2] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#0b1e3d] mb-2">{service.title}</h3>
                    <p className="text-sm text-[#44474e] mb-4">{service.body}</p>
                  </div>
                  <div className="pt-2 flex items-center justify-between text-[#004ad2] text-sm font-semibold">
                    <span>{service.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="w-full bg-[#e6e8ea] py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Frictionless Process</span>
              <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#0b1e3d] mt-1">How It Works: Rapid 20–35 Min Ancoats Arrival</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { n: "01", title: "Call or Share Location", body: <>Dial <strong>07955 266 077</strong> or book online. Give us your vehicle registration, tyre size (e.g. 225/45 R18), and precise Ancoats location.</> },
                { n: "02", title: "Express Urban Dispatch", body: <>Our nearest mobile service van navigates straight to your car via Great Ancoats St or Redhill St with an average <strong>20–35 min arrival window</strong>.</> },
                { n: "03", title: "On-Site Fit & Drive Away", body: "The technician mounts, precision balances, tests tyre pressure, and safely disposes of your old casing. Pay by contactless card at your car." },
              ].map((step) => (
                <div key={step.n} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-[40px] leading-[48px] text-[#b5c4ff] mb-1 font-black">{step.n}</div>
                  <h3 className="text-[22px] leading-[28px] font-semibold text-[#0b1e3d] mb-1">{step.title}</h3>
                  <p className="text-sm text-[#44474e]">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. COVERAGE / NEARBY AREAS */}
        <section className="w-full bg-[#0b1e3d] text-white py-12 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-xl">
                <div className="flex items-center gap-1 text-[#ffd700] mb-1">
                  <Navigation className="h-4 w-4" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.06em]">Metropolitan Coverage</span>
                </div>
                <h3 className="text-[30px] leading-[38px] font-bold text-white">
                  Dedicated Urban Hubs Connected to Ancoats
                </h3>
                <p className="text-sm text-[#dce1ff] mt-1">
                  Our strategic positioning near Great Ancoats Street ensures lightning-fast technician transit across East Manchester and central residential rings.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 max-w-2xl">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1b61ff] text-white text-sm font-semibold shadow-sm">
                  <ShieldCheck className="h-4 w-4" />
                  Ancoats (Primary Hub)
                </span>
                {["New Islington Marina", "Northern Quarter", "Miles Platting"].map((a) => (
                  <span key={a} className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors">{a}</span>
                ))}
                <Link className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors" href="/mobile-tyre-fitting-manchester-city-centre">
                  Manchester City Centre
                </Link>
                <Link className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors" href="/mobile-tyre-fitting-failsworth">
                  Failsworth
                </Link>
                <Link className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors" href="/mobile-tyre-fitting-manchester">
                  Greater Manchester Core
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 6. REVIEWS */}
        <section className="w-full bg-[#f7f9fb] py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Verified Ancoats Driver Feedback</span>
                <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#0b1e3d] mt-1">Real Drivers Rescued in Ancoats</h2>
              </div>
              <div className="flex items-center gap-2 mt-2 md:mt-0">
                <Star className="h-6 w-6 text-[#c9a900]" fill="currentColor" strokeWidth={0} />
                <span className="text-lg font-semibold text-[#0b1e3d]">5.0 Star Rated Local Dispatch</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { tagline: "Great Ancoats St • 22 mins arrival", title: "“Hit severe road debris on Great Ancoats Street at 9:30 PM”", quote: "Slashed the sidewall on a piece of metal just past the retail park. With traffic flying past, I was genuinely stranded. Called Direct Tyre Solutions and the technician pulled up within 22 minutes. Fitted a brand new Michelin Pilot Sport right on the side road. Honest pricing with zero hidden recovery markups.", initials: "JR", name: "Jack R.", sub: "Audi A5 Driver • Great Ancoats St" },
                { tagline: "New Islington Marina • Gated Bay", title: "“Seamless courtyard service for apartment resident parking”", quote: "Living near Cotton Field Park by the Marina, getting a mobile mechanic in can be a nightmare with gate codes and tight turning spaces. The technician didn’t flinch, navigated into our apartment parking area, and replaced two front tyres while I had coffee in my flat. Total lifesaver.", initials: "MS", name: "Maya S.", sub: "BMW 1 Series • New Islington Marina" },
              ].map((r) => (
                <div key={r.name} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex text-[#c9a900]">
                        {stars.map((i) => (
                          <Star key={i} className="h-5 w-5" fill="currentColor" strokeWidth={0} />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold px-2 py-1 bg-[#eceef0] rounded text-[#44474e]">{r.tagline}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-[#0b1e3d] mb-2">{r.title}</h4>
                    <p className="text-base text-[#44474e] leading-relaxed mb-6">&ldquo;{r.quote}&rdquo;</p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#eceef0]">
                    <div className="w-10 h-10 rounded-full bg-[#dce1ff] flex items-center justify-center font-bold text-[#004ad2]">{r.initials}</div>
                    <div>
                      <div className="text-sm font-bold text-[#0b1e3d]">{r.name}</div>
                      <div className="text-sm text-[#75777f]">{r.sub}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PRICING CALLOUT */}
        <section className="w-full bg-[#f7f9fb] pb-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-[#0b1e3d] rounded-3xl p-6 md:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#dce1ff] text-[11px] font-bold uppercase tracking-[0.06em]">
                    Transparent Urban Rates
                  </div>
                  <h3 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white">
                    Straightforward Pricing for Ancoats Callouts
                  </h3>
                  <p className="text-lg text-[#e0e3e5] max-w-2xl">
                    No hidden fees, no mystery fuel surcharges. Every mobile fitting quote in Ancoats includes on-site mobile van dispatch, new rubber valves, electronic balancing, and environmentally compliant old tyre disposal.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                    {[
                      ["Standard Mobile Fitting", "From £45", "+ Tyre Cost"],
                      ["BSAU Puncture Repair", "From £35", "All-inclusive on-site"],
                      ["Emergency Night Callout", "Live Quote", "Instant fixed dispatch rate"],
                    ].map(([label, price, note]) => (
                      <div key={label} className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                        <div className="text-[11px] font-bold text-[#dce1ff] uppercase">{label}</div>
                        <div className="text-[22px] leading-[28px] text-white mt-1">{price}</div>
                        <div className="text-sm text-[#e0e3e5]">{note}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
                  <div className="bg-white p-6 rounded-2xl text-[#191c1e] w-full max-w-sm shadow-xl text-center">
                    <span className="text-[#004ad2] text-[11px] font-bold uppercase">Fast Ancoats Check</span>
                    <h4 className="text-[22px] leading-[28px] font-semibold text-[#0b1e3d] mt-1 mb-4">Get Exact Quote</h4>
                    <p className="text-sm text-[#44474e] mb-4">Speak directly with our Ancoats on-call fleet coordinator right now.</p>
                    <a
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#1b61ff] text-white hover:bg-[#004ad2] text-sm font-semibold transition-all shadow-md"
                      href="tel:07955266077"
                    >
                      <PhoneCall className="h-4 w-4" />
                      <span>07955 266 077</span>
                    </a>
                    <div className="mt-2 text-[11px] font-bold text-[#75777f]">Average pick-up under 3 rings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="w-full bg-[#f7f9fb] py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Ancoats Resident Inquiries</span>
              <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#0b1e3d] mt-1">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {[
                { q: "How do you handle on-street parking permits or restrictions in Ancoats?", a: "Our vans are registered commercial mobile workshops. When attending roadside emergency calls or pre-booked fittings on permitted streets like Blossom Street or Jersey Street, we utilize proper safety hazard beacons and work efficiently within commercial loading windows so you don't incur parking penalties." },
                { q: "Can your tyre fitting vans enter gated apartment courtyards and car parks?", a: "Yes. We operate custom medium-wheelbase service vehicles designed for tight urban access across apartment complexes such as Royal Mills, Murrays' Mills, and New Islington blocks. If your car is in an underground garage with strict height barriers, we can safely position equipment at the entrance bay or utilize trolley jacks to service your vehicle." },
                { q: "What tyre brands do you carry in your mobile vans?", a: "We stock an extensive range directly on our vehicles, covering premium tier brands (Michelin, Pirelli, Continental, Goodyear, Bridgestone), mid-range options (Hankook, Kumho), and high-quality cost-effective budget tyres. Run-flat and EV-specific sound-insulated tyres are also available on rapid dispatch." },
                { q: "Are you truly open for night and late-evening callouts in Ancoats?", a: "Yes, our response units are active 24 hours a day, 365 days a year. Whether you blow out a tyre on the Mancunian Way at 2:00 AM or discover a puncture outside your apartment before a dawn commute, our on-call technician will be dispatched straight to you with full lighting rigs and equipment." },
              ].map((faq) => (
                <details key={faq.q} className="group bg-white rounded-xl shadow-sm overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer list-none hover:text-[#004ad2] transition-colors">
                    <span className="text-lg font-semibold text-[#0b1e3d]">{faq.q}</span>
                    <ChevronDown className="h-6 w-6 text-[#004ad2] transition-transform group-open:rotate-180 shrink-0" />
                  </summary>
                  <p className="px-6 pb-6 text-[#44474e] text-base leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 9. LOCAL MAP */}
        <section className="w-full bg-[#eceef0] py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-3">
                  <div className="inline-flex items-center gap-1 text-[#004ad2] font-bold">
                    <Navigation className="h-4 w-4" />
                    <span className="text-[11px] uppercase">Rapid Response Radius</span>
                  </div>
                  <h3 className="text-[30px] leading-[38px] font-bold text-[#0b1e3d]">
                    20–35 Minute Service Perimeter Around Ancoats
                  </h3>
                  <p className="text-base text-[#44474e]">
                    Centred right on Cutting Room Square and Great Ancoats Street, our technicians patrol the immediate ring roads. We maintain constant line-of-sight dispatch to New Islington Marina, Northern Quarter corridors, and the Ashton Canal fringe.
                  </p>
                  <ul className="space-y-2">
                    {[
                      ["Blossom St / George Leigh St", "18 mins"],
                      ["New Islington Marina", "22 mins"],
                      ["Great Ancoats St / Oldham Rd", "15 mins"],
                    ].map(([place, time]) => (
                      <li key={place} className="flex items-center gap-2 text-sm text-[#191c1e]">
                        <CheckCircle2 className="h-[18px] w-[18px] text-[#004ad2]" />
                        <span>Average transit to {place}: <strong>{time}</strong></span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-7">
                  <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-inner bg-[#e6e8ea]">
                    <Image
                      src="/gallery-evening-callout.webp"
                      alt="Direct Tyre Solutions coverage across Ancoats, Manchester"
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0b1e3d]/20 pointer-events-none" />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-[#1b61ff] animate-ping" />
                      <span className="text-[11px] font-bold uppercase text-[#0b1e3d]">Ancoats Zone 1 • Rapid Dispatch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CLOSING CTA */}
        <section className="w-full bg-[#000516] py-16 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1b61ff]/20 text-[#dce1ff] mb-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.06em]">24/7 Mobile Service Active Right Now</span>
            </div>
            <h2 className="text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] tracking-[-0.02em] md:tracking-[-0.03em] text-white mb-4 max-w-3xl mx-auto">
              Stuck with a tyre in Ancoats? We&rsquo;re on our way.
            </h2>
            <p className="text-lg text-[#dce1ff] max-w-xl mx-auto mb-8">
              Don&rsquo;t damage your alloy wheels by limping down Great Ancoats Street. Call our emergency response desk now for guaranteed 20–35 minute curbside fitting.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#1b61ff] text-white hover:bg-[#004ad2] transition-all shadow-lg text-lg font-semibold"
                href="tel:07955266077"
              >
                <PhoneCall className="h-6 w-6 text-[#ffd700]" />
                <span>Call 07955 266 077</span>
              </a>
              <Link
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors text-sm font-semibold"
                href="/#contact"
              >
                Book Online Fit
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[#7686ab] text-sm">
              <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-[#ffd700]" /> Contactless Card Payment Accepted</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-[#ffd700]" /> Average response: 26 mins today</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-[#ffd700]" /> Fully Insured ATA Technicians</span>
            </div>
          </div>
        </section>
      </main>
      <LocationFooter />
    </>
  );
}
