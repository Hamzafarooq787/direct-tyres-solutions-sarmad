import Image from "next/image";
import Link from "next/link";
import {
  Star,
  PhoneCall,
  ArrowRight,
  Disc,
  Sparkles,
  Wrench,
  Unlock,
  CheckCircle2,
  MapPin,
  ChevronDown,
  Phone,
  Car,
} from "lucide-react";
import LocationHeader from "./LocationHeader";
import LocationFooter from "./LocationFooter";

const stars = [0, 1, 2, 3, 4];

export default function ManchesterCityCentrePage() {
  return (
    <>
      <LocationHeader currentSlug="manchester-city-centre" />
      <main className="w-full pt-20 bg-[#f7f9fb]">
        {/* 1. HERO — dark premium glow */}
        <section className="relative bg-[#0b1e3d] text-white overflow-hidden py-16 lg:py-24">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#1b61ff]/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-24 right-0 w-[420px] h-[420px] bg-[#004ad2]/10 rounded-full blur-[110px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffd700] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1b61ff]" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#dce1ff]">M1–M4 Active Response Unit</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md">
                    <Star className="h-[18px] w-[18px] text-[#ffd700]" fill="currentColor" strokeWidth={0} />
                    <span className="text-sm font-bold text-white">4.9 / 5.0</span>
                    <span className="text-sm text-[#dce1ff] hidden sm:inline">(840+ City Centre Drivers Rescued)</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h1 className="text-[40px] leading-[1.08] md:text-[56px] tracking-tight">
                    24/7 Mobile Tyre Fitting in{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dce1ff] via-white to-[#1b61ff]">
                      Manchester City Centre
                    </span>
                  </h1>
                  <p className="text-lg text-[#dce1ff] max-w-2xl leading-relaxed">
                    Specialist mobile tyre technicians equipped for city centre multi-storeys, underground car parks, and curbside emergencies in 15–30 minutes.
                  </p>
                </div>
                <div className="h-1 w-28 bg-gradient-to-r from-[#1b61ff] via-[#dce1ff] to-transparent rounded-full shadow-[0_0_12px_rgba(27,97,255,0.7)]" />
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#1b61ff] text-white hover:bg-[#004ad2] transition-all shadow-[0_0_24px_rgba(27,97,255,0.45)] hover:shadow-[0_0_32px_rgba(27,97,255,0.6)] text-lg font-semibold"
                    href="tel:07955266077"
                  >
                    <PhoneCall className="h-[22px] w-[22px] text-[#ffd700]" />
                    <span>Call 07955 266 077</span>
                  </a>
                  <Link
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-md text-white text-sm font-semibold transition-colors"
                    href="/#contact"
                  >
                    <span>Get Immediate Quote</span>
                    <ArrowRight className="h-[18px] w-[18px]" />
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-4 max-w-xl">
                  {[
                    ["15-30m", "Avg City Centre ETA"],
                    ["1.95m", "Low-Clearance Capable"],
                    ["24/7/365", "Night & Weekend Shift"],
                  ].map(([n, l]) => (
                    <div key={l} className="p-3 rounded-lg bg-white/[0.04] backdrop-blur-sm">
                      <div className="text-[22px] leading-[28px] font-semibold text-[#dce1ff]">{n}</div>
                      <div className="text-sm text-[#dce1ff]/80">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-md p-2">
                  <div className="relative h-[420px] rounded-xl overflow-hidden bg-[#000516]">
                    <Image
                      src="/gallery-precision-care.webp"
                      alt="Direct Tyre Solutions technician fitting a wheel in central Manchester at dusk"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3d] via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0b1e3d]/85 backdrop-blur-md shadow-lg space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#dce1ff]">Downtown Sector Dispatch</span>
                        <span className="flex items-center gap-1 text-xs font-bold text-[#ffd700]">Van #04 Active</span>
                      </div>
                      <div className="text-lg font-semibold text-white">Spinningfields / Deansgate Loop</div>
                      <p className="text-sm text-[#dce1ff]">Low-clearance Mercedes Sprinter equipped with onboard air compressor, digital dynamic balancer &amp; run-flat demount arms.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. LOCAL INTRO */}
        <section className="bg-[#000516] text-white py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 space-y-2">
                <span className="text-[#1b61ff] text-[11px] font-bold uppercase tracking-[0.06em]">Tactical Urban Mobility</span>
                <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white leading-tight">Navigating Manchester&rsquo;s Tightest Spaces</h2>
                <p className="text-base text-[#7686ab]">Where standard breakdown recovery trucks get turned away by height barriers and bus gates.</p>
              </div>
              <div className="lg:col-span-8 p-8 rounded-2xl bg-white/[0.03] backdrop-blur-md shadow-sm">
                <p className="text-lg text-white leading-relaxed">
                  Manchester City Centre presents brutal hurdles for stranded drivers: rigid bollards along Deansgate, ultra-tight NCP multi-storeys on Oxford Street, tight subterranean basements beneath Spinningfields corporate towers, and congested cobblestones through the Northern Quarter and Piccadilly corridors. Standard flatbed recovery trucks simply cannot enter sub-2.0m car park heights or weave through bus-gate cameras. Direct Tyre Solutions operates specialized ultra-low-profile Mercedes service vans outfitted with compact hydraulic jacks and whisper-quiet pneumatic tyre changers. We drive straight into your basement bay, multi-storey deck, or curbside bay, fitting brand-new tyres on-site within minutes.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  {["Multi-Storey NCP Clearance", "Spinningfields Under-Tower Access", "Pedestrian Zone Exemption Protocols"].map((f) => (
                    <span key={f} className="inline-flex items-center gap-1 text-[#dce1ff] text-sm">
                      <CheckCircle2 className="h-4 w-4" /> {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. GLASSMORPHIC SERVICES GRID */}
        <section className="bg-[#0b1e3d] py-16 relative overflow-hidden">
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#1b61ff]/10 rounded-full blur-[160px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 space-y-8">
            <div className="max-w-2xl space-y-1">
              <span className="text-[#dce1ff] text-[11px] font-bold uppercase tracking-[0.06em]">Precision Engineering On Location</span>
              <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white">Specialist Mobile Services in M1–M4</h2>
              <p className="text-base text-[#dce1ff]">Every van carries computerized diagnostic balancing machinery, bead breakers, and high-tensile extraction kits for zero-damage wheel servicing.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Disc, tag: "NCP & Basement Ready", title: "City Centre Mobile Tyre Fitting", body: "Full tyre replacements performed directly inside multi-storey car parks, underground hotel facilities, or street-side bays across Central Manchester. From budget touring radials to run-flat performance compounds.", points: ["All major tyre diameters (14\" to 23\" SUV/EV)", "Run-flat certified leverless demount tools"] },
                { icon: Sparkles, tag: "High-Speed Calibration", title: "Micro-Precision Wheel Balancing", body: "Eliminate high-speed vibration and irregular tread wear. Our vans feature integrated computerized micro-weight balancers ensuring motorway stability before you merge onto the Mancunian Way or M602.", points: ["Digital dynamic imbalance detection", "Concealed adhesive weights for diamond-cut rims"] },
                { icon: Wrench, tag: "BS AU 159 Compliant", title: "Rapid Puncture Vulcanization", body: "Don't buy a new tyre if yours can be saved. We carry out British Standard combi-plug permanent puncture repairs on tread punctures caused by debris, construction screws, and tram rail metal fragments.", points: ["Full internal tyre casing inspection", "New tubeless valve & bead reseal included"] },
                { icon: Unlock, tag: "Zero Rim Damage", title: "Specialist Locking Wheel Nut Removal", body: "Lost the key, stripped the spline, or dealing with an overtightened pneumatic bolt? We deploy inverse-thread shrouded extractor rigs to remove stubborn security nuts safely without marking alloy wheels.", points: ["McGard, spinning collar & OEM bolt mastery", "Guaranteed extraction rate over 99.4%"] },
              ].map((service) => (
                <div key={service.title} className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-xl bg-[#1b61ff]/20 flex items-center justify-center text-[#1b61ff]">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase px-3 py-1 rounded-full bg-white/5 text-[#dce1ff]">{service.tag}</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[22px] leading-[28px] font-semibold text-white">{service.title}</h3>
                    <p className="text-base text-[#dce1ff] leading-relaxed">{service.body}</p>
                  </div>
                  <ul className="space-y-1 pt-1">
                    {service.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-white">
                        <CheckCircle2 className="h-[18px] w-[18px] text-[#1b61ff]" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="bg-[#000516] text-white py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <span className="text-[#dce1ff] text-[11px] font-bold uppercase tracking-[0.06em]">Rapid Turnaround Protocol</span>
              <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white">How Our City Response Operates</h2>
              <p className="text-base text-[#7686ab]">Designed specifically to get you mobile within lunch breaks or before evening rush hours.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { n: "01", icon: Phone, title: "Contact & Tyre Check", body: "Ring 07955 266 077 with your vehicle registration plate or tyre sizing specs. We pinpoint your location whether in a car park or curbside bay.", note: "Elapsed: 2 Minutes", highlight: false },
                { n: "02", icon: Car, title: "Direct Sector Dispatch", body: "The nearest low-height city van rolls immediately to your coordinate. Live GPS telemetry keeps you notified of technician arrival time.", note: "Response Window: 15–30 Mins", highlight: true },
                { n: "03", icon: CheckCircle2, title: "Precision Fitting & Departure", body: "We mount, electronically balance, calibrate torque settings to vehicle OEM specs, safely dispose of old rubber, and have you moving.", note: "Fitting Time: 20 Mins", highlight: false },
              ].map((step) => (
                <div key={step.n} className={`p-8 rounded-2xl backdrop-blur-sm space-y-4 ${step.highlight ? "bg-[#1b61ff]/10 shadow-lg" : "bg-white/[0.03]"}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[40px] leading-[48px] font-extrabold text-white/20">{step.n}</span>
                    <span className={`w-10 h-10 rounded-full flex items-center justify-center ${step.highlight ? "bg-[#1b61ff] text-white" : "bg-[#1b61ff]/20 text-[#dce1ff]"}`}>
                      <step.icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[22px] leading-[28px] font-semibold text-white">{step.title}</h3>
                    <p className="text-sm text-[#dce1ff] leading-relaxed">{step.body}</p>
                  </div>
                  <span className="text-[11px] font-bold text-[#dce1ff] uppercase tracking-wider block">{step.note}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. COVERAGE */}
        <section className="bg-[#0b1e3d] py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[#dce1ff] text-[11px] font-bold uppercase tracking-[0.06em]">Inner City Patrol Zones</span>
                <h2 className="text-[30px] leading-[38px] font-bold text-white">Continuous Mobile Coverage Around Manchester Core</h2>
              </div>
              <p className="text-sm text-[#dce1ff] max-w-md">Our vans loop continuously through primary downtown arteries to bypass gridlocked arterial ring roads.</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1b61ff] text-white text-sm font-semibold shadow-md">
                <MapPin className="h-4 w-4" />
                Manchester City Centre (M1, M2, M3, M4)
              </span>
              <Link className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-colors" href="/mobile-tyre-fitting-ancoats">
                <MapPin className="h-4 w-4 text-[#ffd700]" /> Ancoats &amp; New Islington
              </Link>
              <Link className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-colors" href="/mobile-tyre-fitting-manchester">
                <MapPin className="h-4 w-4 text-[#ffd700]" /> Greater Manchester
              </Link>
              {["Salford & Greengate", "Castlefield & Deansgate Quay", "Northern Quarter", "Oxford Road Corridor"].map((a) => (
                <span key={a} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white text-sm font-semibold">
                  <MapPin className="h-4 w-4 text-[#ffd700]" /> {a}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <section className="bg-[#000516] text-white py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <span className="text-[#dce1ff] text-[11px] font-bold uppercase tracking-[0.06em]">Verified Roadside Rescues</span>
              <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white">Trusted by Downtown Residents &amp; Executives</h2>
              <p className="text-base text-[#7686ab]">Read how our rapid response vans keep Manchester&rsquo;s workforce on schedule.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { quote: "Picked up an enormous puncture on Quay Street right before an executive board presentation in Spinningfields. Their technician got through underground building security in 22 minutes and fitted two Michelin Pilot Sports right inside our corporate basement bay.", initials: "JT", name: "Julian T.", sub: "Corporate Director, Spinningfields" },
                { quote: "Living in an apartment on Deansgate means zero garage space. Had a flat run-flat on my Audi on a Sunday night at 11:30 PM. The mobile tyre van arrived before midnight and sorted everything curbside in torrential Manchester rain with zero hassle.", initials: "CV", name: "Chloe V.", sub: "Deansgate Resident" },
                { quote: "Was parked on level 4 of the Piccadilly NCP and snapped my wheel lock key. Two recovery companies refused to attend due to the low ceiling height. Direct Tyre Solutions brought their low-clearance van, extracted the rounded nut in minutes, and fitted a new Pirelli.", initials: "AL", name: "Adam L.", sub: "Piccadilly NCP Commuter" },
              ].map((r) => (
                <div key={r.name} className="p-8 rounded-2xl bg-white/[0.04] backdrop-blur-md shadow-lg space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-[#ffd700]">
                      {stars.map((i) => (
                        <Star key={i} className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="text-base text-white leading-relaxed italic">&ldquo;{r.quote}&rdquo;</p>
                  </div>
                  <div className="pt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1b61ff] flex items-center justify-center font-bold text-white">{r.initials}</div>
                    <div>
                      <div className="text-sm font-semibold text-white">{r.name}</div>
                      <div className="text-sm text-[#dce1ff]">{r.sub}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PRICING CALLOUT */}
        <section className="bg-[#0b1e3d] py-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#000516] to-[#0b1e3d] shadow-2xl relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#1b61ff]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b61ff]/20 text-[#dce1ff] text-[11px] font-bold uppercase tracking-[0.06em]">
                    Direct Postcode Guarantee
                  </div>
                  <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white">Transparent Pricing Across M1, M2, M3 &amp; M4</h2>
                  <p className="text-lg text-[#dce1ff] max-w-2xl leading-relaxed">
                    No hidden congestion charges, clean air surcharge surprises, or mystery fees. We quote your exact all-inclusive tyre price upfront before the technician deploys to your location.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {["Mobile Fitting & Wheel Balance Included", "Environmental Old Tyre Disposal Included", "New Rubber Valves & Bead Polish", "Contactless Card Terminal On-Site"].map((f) => (
                      <div key={f} className="flex items-center gap-2 text-white text-sm">
                        <CheckCircle2 className="h-5 w-5 text-[#1b61ff]" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.04] backdrop-blur-md text-center space-y-2">
                  <span className="text-[11px] font-bold text-[#dce1ff] uppercase tracking-wider">Fastest City Dispatch</span>
                  <div className="text-[40px] leading-[48px] font-extrabold text-white">Instant Quote</div>
                  <p className="text-sm text-[#dce1ff]">Speak to our 24-hour Manchester logistics controller right now.</p>
                  <a
                    className="w-full py-3 px-4 rounded-lg bg-[#1b61ff] text-white font-semibold hover:bg-[#004ad2] transition-all shadow-md"
                    href="tel:07955266077"
                  >
                    07955 266 077
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="bg-[#000516] text-white py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <span className="text-[#dce1ff] text-[11px] font-bold uppercase tracking-[0.06em]">Local Logistics Queries</span>
              <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white">Manchester City Centre FAQs</h2>
              <p className="text-base text-[#7686ab]">Everything you need to know about underground access, response times, and premium vehicle support.</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {[
                { q: "Can your vans enter low-clearance NCP or underground car parks?", a: "Yes. Unlike bulky commercial tow trucks or standard high-roof recovery vans, our Manchester city rapid fleet includes specialized low-profile vans configured under 1.95m. We carry low-entry trolley jacks and mobile demounting units, allowing us to descend into any underground hotel bay, NCP deck, or private residential basement without obstruction." },
                { q: "How fast can you arrive in the city centre during peak traffic?", a: "Our average arrival response time in the downtown core (M1, M2, M3, M4) is 15 to 30 minutes. We position our emergency response vans on active rotation within inner ring-road zones rather than dispatching from distant outer-motorway depots, significantly bypassing heavy commuter congestion." },
                { q: "Do you operate late nights on weekends around Deansgate/Northern Quarter?", a: "Absolutely. We operate 24 hours a day, 7 days a week, 365 days a year. Our weekend night teams handle late-night punctures for shift workers, weekenders, hotel guests, and private hire drivers across all entertainment corridors including Deansgate, Peter Street, Printworks, and Stevenson Square." },
                { q: "Can you fit run-flat tyres for BMW, Mercedes, and Audi vehicles?", a: "Yes, every mobile unit stocks a wide range of run-flat and reinforced tyres compatible with premium German marques, along with the specialist demount tools required to fit them safely without damaging the reinforced sidewall." },
              ].map((faq) => (
                <details key={faq.q} className="group rounded-xl bg-white/[0.03] backdrop-blur-md overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="w-full p-6 flex items-center justify-between gap-4 text-left cursor-pointer list-none hover:bg-white/[0.02]">
                    <span className="text-lg font-semibold text-white">{faq.q}</span>
                    <ChevronDown className="h-6 w-6 text-[#dce1ff] transition-transform duration-300 group-open:rotate-180 shrink-0" />
                  </summary>
                  <p className="px-6 pb-6 text-[#dce1ff] text-base leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 9. LOCAL MAP */}
        <section className="bg-[#0b1e3d] py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[#dce1ff] text-[11px] font-bold uppercase tracking-[0.06em]">Live Response Radius</span>
                <h2 className="text-[30px] leading-[38px] font-bold text-white">Stationed Centrally in the M1–M4 Core</h2>
                <p className="text-base text-[#dce1ff]">
                  Our strategic hub placement guarantees quick access to major transit lines including Deansgate, the Mancunian Way, and the M60 ring. A rapid dispatch perimeter ensures no stranded motorist or basement breakdown is left unattended.
                </p>
                <div className="p-4 rounded-xl bg-white/5 space-y-2">
                  {[
                    ["Deansgate & Spinningfields", "10 - 15 mins"],
                    ["Northern Quarter", "15 - 20 mins"],
                    ["Piccadilly & Ancoats border", "15 - 25 mins"],
                  ].map(([area, time]) => (
                    <div key={area} className="flex items-center justify-between text-sm">
                      <span className="text-[#dce1ff]">{area}</span>
                      <span className="text-white font-semibold">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-[#000516] flex items-center justify-center">
                  <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full border-2 border-dashed border-[#1b61ff]/50" />
                    <div className="w-40 h-40 rounded-full border border-white/20 absolute" />
                  </div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <span className="relative flex h-4 w-4 mb-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffd700] opacity-75" />
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-[#1b61ff]" />
                    </span>
                    <div className="text-xl font-semibold text-white">Manchester City Centre Hub</div>
                    <div className="text-sm text-[#dce1ff]">Covering M1, M2, M3, M4 postcodes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CLOSING CTA */}
        <section className="bg-[#000516] text-white py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1b61ff]/20 text-[#dce1ff] mb-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.06em]">Immediate 24/7 Mobile Assistance</span>
            </div>
            <h2 className="text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] tracking-[-0.02em] md:tracking-[-0.03em] text-white mb-4 max-w-3xl mx-auto">
              Stuck with a tyre in Manchester City Centre? We&rsquo;re on our way.
            </h2>
            <p className="text-lg text-[#dce1ff] max-w-xl mx-auto mb-8">
              Whether you&rsquo;re on Deansgate, in a Spinningfields basement, or on level 4 of an NCP, our low-clearance vans get to you fast.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
