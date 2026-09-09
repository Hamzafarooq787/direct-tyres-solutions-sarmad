import Image from "next/image";
import Link from "next/link";
import {
  Star,
  PhoneCall,
  Mountain,
  Disc,
  SlidersHorizontal,
  Wrench,
  Unlock,
  ChevronRight,
  ChevronDown,
  Phone,
  Navigation,
  ShieldCheck,
  MapPin,
  Compass,
  CheckCircle2,
} from "lucide-react";
import LocationHeader from "./LocationHeader";
import LocationFooter from "./LocationFooter";

const stars = [0, 1, 2, 3, 4];

export default function SaddleworthPage() {
  return (
    <>
      <LocationHeader currentSlug="saddleworth" />
      <main className="w-full pt-20 bg-[#f7f9fb]">
        {/* 1. PANORAMIC RURAL HERO */}
        <section className="relative w-full overflow-hidden bg-[#0b1e3d]">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/hero-section-images-936x527.webp"
              alt="Saddleworth moors with a Direct Tyre Solutions mobile van at dusk"
              fill
              priority
              sizes="100vw"
              className="object-cover mix-blend-overlay opacity-35"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1e3d] via-[#0b1e3d]/90 to-[#0b1e3d]/40" />
          <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-24 flex flex-col justify-center min-h-[520px]">
            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b61ff]/20 text-[#dce1ff] backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#dce1ff] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1b61ff]" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.06em]">Pennine &amp; Moorland Fleet Online</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-md">
                  <div className="flex text-[#ffd700]">
                    {stars.map((i) => (
                      <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="text-sm font-bold">4.9 / 5.0</span>
                  <span className="text-sm text-[#dce1ff]">(Saddleworth Rescue Verified)</span>
                </div>
              </div>
              <h1 className="text-[40px] leading-tight md:text-[56px] tracking-tight font-extrabold text-white">
                24/7 Mobile Tyre Fitting in <span className="text-[#dce1ff]">Saddleworth</span>
              </h1>
              <p className="text-lg text-[#dce1ff] max-w-2xl leading-relaxed">
                Specialist mobile tyre support reaching remote moorland roads, high-altitude passes, secluded villages, and residential driveways across Saddleworth in <strong className="text-white font-semibold">25–40 minutes</strong>.
              </p>
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#1b61ff] text-white hover:bg-[#004ad2] transition-all text-lg font-semibold shadow-lg"
                  href="tel:07955266077"
                >
                  <PhoneCall className="h-5 w-5 text-[#ffd700]" />
                  <span>Emergency Call: 07955 266 077</span>
                </a>
                <Link
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-[#0b1e3d] text-sm font-semibold shadow-md hover:bg-[#e6e8ea] transition-all"
                  href="/#contact"
                >
                  <span>Get Instant Quote</span>
                  <ChevronRight className="h-[18px] w-[18px]" />
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
                {[
                  ["25-40 min", "Avg. Village Arrival"],
                  ["All-Terrain & 4x4", "In-Van Inventory"],
                  ["100% Self-Powered", "No Mains Needed"],
                ].map(([n, l], i) => (
                  <div key={l} className={i === 2 ? "col-span-2 sm:col-span-1" : ""}>
                    <div className="text-lg font-semibold text-white">{n}</div>
                    <div className="text-sm text-[#dce1ff]">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. LOCAL INTRO */}
        <section className="w-full bg-[#f7f9fb] py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <div className="inline-flex items-center gap-1 text-[#004ad2] font-bold">
                  <Mountain className="h-4 w-4" />
                  <span className="text-[11px] uppercase tracking-[0.06em]">Pennine Emergency Fleet Specialists</span>
                </div>
                <h2 className="text-[30px] leading-[38px] md:text-[40px] md:leading-[48px] font-bold text-[#191c1e]">
                  Engineered for Saddleworth&rsquo;s Challenging Rural Topography
                </h2>
                <div className="space-y-3 text-base text-[#44474e] leading-relaxed">
                  <p>
                    Operating across Saddleworth demands vastly different capabilities than standard urban tyre repair. From the wind-buffeted apex of the <strong className="text-[#191c1e]">A62 Standedge cutting</strong> to the steep, narrow country lanes winding between <strong className="text-[#191c1e]">Delph, Dobcross, Greenfield, and Diggle</strong>, local motorists regularly contend with unpredictable moorland rainfall, frost patches, and rough road margins.
                  </p>
                  <p>
                    Traditional garages and fitment depots are sparse along these dramatic valleys. When a sidewall fails on an isolated pass or a puncture strikes your driveway before dawn, recovery trailers take hours. Direct Tyre Solutions deploys custom-built, high-torque mobile tyre fitting workshops directly to your roadside, farm entrance, or lane. Powered by high-output on-board pneumatic generators, we replace, balance, and repair your tyres wherever you are stranded across the hills.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#f2f4f6] flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-[#004ad2] mt-0.5" />
                  <div className="text-sm text-[#191c1e]">
                    <strong className="font-semibold block mb-0.5">Dedicated Pennine Coverage Zone</strong>
                    Rapid coverage across OL3, OL4 postcodes including the Isle of Skye Road (A635), Holmfirth Road, and Chew Valley corridor.
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-xl bg-[#e6e8ea]">
                  <div className="relative w-full h-80">
                    <Image
                      src="/gallery-onsite-wheel-fitting.webp"
                      alt="Direct Tyre Solutions technician fitting an all-terrain tyre in Saddleworth"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 bg-white space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[#004ad2] text-[11px] font-bold uppercase">Rapid Response Unit</span>
                      <span className="px-2 py-0.5 rounded bg-[#f2f4f6] text-[#44474e] text-xs">Van 04 - Saddleworth North</span>
                    </div>
                    <p className="text-lg font-semibold text-[#191c1e]">Equipped for High Incline &amp; Remote Access</p>
                    <p className="text-sm text-[#44474e]">Heavy-duty commercial jacks, 24V wheel rotators, bead breakers, and precision dynamic balancing on board.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES GRID */}
        <section className="w-full bg-[#f2f4f6] py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-8">
            <div className="max-w-2xl space-y-1">
              <div className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Tailored Mobile Capabilities</div>
              <h2 className="text-[30px] leading-[38px] md:text-[40px] md:leading-[48px] font-bold text-[#191c1e]">
                Comprehensive Mobile Tyre Care in Saddleworth
              </h2>
              <p className="text-base text-[#44474e]">
                Complete workshop facilities packed into custom rapid-dispatch vans ready for any village or moorland pass.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Disc, title: "All-Terrain & Mobile Tyre Fitting", body: "New tyres fitted at your home, farm track, or roadside. Stocking ultra-durable 4x4, SUV all-season, run-flat, and high-performance tyres from Michelin, Goodyear, Pirelli, and trusted economy brands.", note: "Home or Roadside Dispatch" },
                { icon: SlidersHorizontal, title: "Computerized Mobile Wheel Balancing", body: "Steep hill descents demand exact wheel calibration. Every tyre installation includes digital high-precision laser balancing inside the van, eliminating steering flutter and preserving uneven tread wear.", note: "Laser Calibrated Output" },
                { icon: Wrench, title: "Roadside & Moorland Puncture Repairs", body: "Caught out by harsh road debris or stone cuts on rural lanes? Our technicians assess and carry out full BSAU159-compliant permanent puncture repairs roadside whenever safely repairable, saving you the cost of a replacement.", note: "BSAU159 Safety Verified" },
                { icon: Unlock, title: "Non-Destructive Nut Removal", body: "Lost wheel lock key or rounded overtightened lug nuts? We utilize specialized reverse-thread extraction tools that remove locking wheel nuts safely without damaging your alloy rims or wheel bearings.", note: "Alloy Friendly Tooling" },
              ].map((service) => (
                <div key={service.title} className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-lg bg-[#0b1e3d] flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-[#ffd700]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#191c1e]">{service.title}</h3>
                    <p className="text-sm text-[#44474e] leading-relaxed">{service.body}</p>
                  </div>
                  <div className="text-[#004ad2] text-sm font-semibold flex items-center gap-1">
                    <span>{service.note}</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="w-full bg-[#f7f9fb] py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <div className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Rapid 3-Step Procedure</div>
              <h2 className="text-[30px] leading-[38px] md:text-[40px] md:leading-[48px] font-bold text-[#191c1e]">
                From Breakdown to Rolling in Minutes
              </h2>
              <p className="text-base text-[#44474e]">
                Emergency response window: <strong className="text-[#004ad2]">25–40 mins</strong> in Saddleworth villages and mountain passes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { n: "01", icon: Phone, title: "Call or Send Reg & Location", body: "Dial our direct 24/7 hotline with your vehicle registration and approximate location, What3Words code, or landmark along the A62, A670, or local village road.", note: "Step 1: Immediate Verification" },
                { n: "02", icon: Navigation, title: "Rapid Van Dispatch", body: "Our nearest fully loaded mobile fitting van sets off immediately. We navigate directly to your coordinates with live phone contact to update our exact ETA.", note: "Step 2: 25-40 Minute Response" },
                { n: "03", icon: ShieldCheck, title: "Fitted, Balanced & Safe", body: "Your technician performs precision mounting, new valve replacement, wheel balancing, and torque check. Pay via mobile card terminal and proceed safely.", note: "Step 3: Complete Road-Readiness" },
              ].map((step) => (
                <div key={step.n} className="rounded-xl bg-[#f2f4f6] p-6 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[30px] leading-[38px] font-bold text-[#1b61ff]">{step.n}</span>
                      <step.icon className="h-6 w-6 text-[#004ad2]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#191c1e]">{step.title}</h3>
                    <p className="text-sm text-[#44474e] leading-relaxed">{step.body}</p>
                  </div>
                  <div className="pt-4 text-[#004ad2] text-[11px] font-bold uppercase tracking-wider">{step.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TOPOGRAPHIC COVERAGE */}
        <section className="w-full bg-[#0b1e3d] py-16 relative overflow-hidden text-white">
          <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
            <svg className="w-full h-full" fill="none" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
              <path d="M-100,300 C150,150 350,450 600,280 C850,110 950,400 1100,260" stroke="#7686ab" strokeDasharray="4 6" strokeWidth="1.5" />
              <path d="M-100,260 C180,110 380,410 630,240 C880,70 980,360 1100,220" stroke="#7686ab" strokeWidth="1.5" />
              <path d="M-100,220 C210,70 410,370 660,200 C910,30 1010,320 1100,180" stroke="#7686ab" strokeDasharray="2 4" strokeWidth="1.5" />
              <circle cx="500" cy="270" r="140" stroke="#1b61ff" strokeDasharray="6 6" strokeWidth="1.5" />
              <circle cx="500" cy="270" r="90" stroke="#1b61ff" strokeWidth="1" />
              <circle cx="500" cy="270" r="40" stroke="#1b61ff" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#dce1ff]">
                <Compass className="h-4 w-4" />
                <span className="text-[11px] font-bold uppercase tracking-[0.06em]">Topographic Rescue Network</span>
              </div>
              <h2 className="text-[30px] leading-[38px] md:text-[40px] md:leading-[48px] font-bold text-white">
                Complete Moorland &amp; Village Coverage
              </h2>
              <p className="text-base text-[#dce1ff] leading-relaxed">
                From valley basins to exposed Pennine heights, our mobile tyre vans are stationed for immediate deployment across every corner of Saddleworth and bordering Oldham links.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                ["Uppermill", "OL3 Village Core & High St", "20-30 Mins"],
                ["Greenfield", "Chew Valley & Station Rd", "20-35 Mins"],
                ["Delph", "Denshaw Rd & Castleshaw", "25-35 Mins"],
                ["Dobcross", "The Square & Hill Lanes", "20-30 Mins"],
                ["Diggle", "Standedge Tunnel Base", "25-40 Mins"],
                ["Oldham Link", "A669 Lees & Grotton", "15-25 Mins"],
              ].map(([name, sub, time]) => (
                <div key={name} className="p-4 rounded-xl bg-white/5 backdrop-blur-sm flex flex-col justify-between space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-white">{name}</span>
                    <MapPin className="h-[18px] w-[18px] text-[#ffd700]" />
                  </div>
                  <span className="text-sm text-[#dce1ff]">{sub}</span>
                  <span className="text-[11px] font-bold text-[#ffd700] uppercase">{time}</span>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1b61ff] flex items-center justify-center shrink-0">
                  <Compass className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">Mountain Passes &amp; Scenic Arterials Covered</div>
                  <div className="text-sm text-[#dce1ff]">A62 Standedge Pass, A635 Isle of Skye Moorland Road, and A670 Oldham Road.</div>
                </div>
              </div>
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1b61ff] hover:bg-[#004ad2] text-white text-sm font-semibold transition-colors whitespace-nowrap" href="tel:07955266077">
                <PhoneCall className="h-[18px] w-[18px]" />
                <span>Pennine Emergency Line</span>
              </a>
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <section className="w-full bg-[#f7f9fb] py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <div className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Real Roadside Rescues</div>
              <h2 className="text-[30px] leading-[38px] md:text-[40px] md:leading-[48px] font-bold text-[#191c1e]">
                Trusted by Saddleworth Drivers
              </h2>
              <p className="text-base text-[#44474e]">
                See what local residents and commuters say about our 24/7 mountain and roadside tyre interventions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { quote: "Had a catastrophic sidewall blowout at 9:30 PM coming over the Standedge cutting in dense fog. The recovery van arrived in 35 minutes with the exact tyre spec for my Audi Q5. Unbelievable service in harsh weather.", name: "Alastair M.", place: "Standedge Cutting (A62)" },
                { quote: "Woke up to a completely flat tyre on my driveway before an urgent hospital shift in Oldham. Called Direct Tyre Solutions; they arrived at our cottage within 28 minutes, replaced the tyre, and had me on the road safely.", name: "Fiona R.", place: "Greenfield (Chew Valley Rd)" },
                { quote: "Lost my locking wheel nut key on an old Defender up a farm lane outside Delph. Another service gave up, but Direct Tyre Solutions got all 4 off cleanly in 20 minutes without a single scratch to the wheels. Outstanding.", name: "Robert B.", place: "Delph (Castleshaw)" },
              ].map((r) => (
                <div key={r.name} className="p-6 rounded-xl bg-white flex flex-col justify-between space-y-4 shadow-sm">
                  <div className="space-y-2">
                    <div className="flex text-[#c9a900]">
                      {stars.map((i) => (
                        <Star key={i} className="h-5 w-5" fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="text-base text-[#191c1e] italic leading-relaxed">&ldquo;{r.quote}&rdquo;</p>
                  </div>
                  <div className="pt-2 border-t border-[#e0e3e5] flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-[#191c1e]">{r.name}</div>
                      <div className="text-sm text-[#44474e]">{r.place}</div>
                    </div>
                    <CheckCircle2 className="h-6 w-6 text-[#004ad2]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PRICING CALLOUT */}
        <section className="w-full bg-[#f2f4f6] py-8">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="rounded-xl bg-[#0b1e3d] text-white p-8 lg:p-12 shadow-xl relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-2">
                  <div className="inline-flex items-center gap-1 text-[#dce1ff]">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">100% Transparent Saddleworth Pricing</span>
                  </div>
                  <h3 className="text-[22px] leading-[28px] md:text-[30px] md:leading-[38px] font-bold text-white">
                    Guaranteed Upfront Quotes. No Hidden Rural Callout Surprises.
                  </h3>
                  <p className="text-base text-[#dce1ff] max-w-2xl leading-relaxed">
                    Whether you are stranded on the high moors or parked on a quiet village lane in Dobcross, we quote a comprehensive, fixed price before dispatch. Every quote covers fitting, mobile valve replacement, digital electronic balancing, environmental casing disposal, and VAT.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-1 text-sm text-white">
                    {["Includes Full Disposal", "Contactless Card Terminals", "Zero Hidden Mileage Surcharges"].map((f) => (
                      <div key={f} className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-[18px] w-[18px] text-[#1b61ff]" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col items-stretch justify-center gap-2 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-center">
                    <span className="text-[#dce1ff] text-[11px] font-bold uppercase">Fast Quotation Line</span>
                    <div className="text-[30px] leading-[38px] font-bold text-white">07955 266 077</div>
                    <span className="text-sm text-[#ffd700]">Answered 24/7 by a Master Technician</span>
                  </div>
                  <a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1b61ff] text-white hover:bg-[#004ad2] transition-colors shadow font-semibold" href="tel:07955266077">
                    <PhoneCall className="h-[18px] w-[18px]" />
                    <span>Call For Exact Price</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="w-full bg-[#f7f9fb] py-16">
          <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-8">
            <div className="text-center space-y-1">
              <div className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Help &amp; Advice</div>
              <h2 className="text-[30px] leading-[38px] md:text-[40px] md:leading-[48px] font-bold text-[#191c1e]">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-[#44474e]">
                Common queries regarding our mobile tyre rescue across Saddleworth and the Pennine Moors.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { q: "Do you attend tyre emergencies on remote moorland roads?", a: "Yes, absolutely. Our fleet vehicles are heavy-duty, high-payload Mercedes Sprinters equipped with high-intensity 360-degree LED scene-lighting, on-board compressors, and heavy pneumatic lifting equipment capable of operating on uneven verges, steep inclines, and unlit passes such as the A62 Standedge cutting and A635 Isle of Skye Road." },
                { q: "How do I share my exact location if I'm on an unmarked moorland lane?", a: "We use What3Words alongside your nearest landmark or postcode to pinpoint your position accurately, even on unnamed farm tracks or unmarked moorland passes." },
                { q: "Can you carry all-terrain and 4x4 specific tyres for rural vehicles?", a: "Yes, our vans stock a wide range of all-terrain, mud-plugger, and SUV all-season tyres suited to Land Rovers, pickups, and 4x4s commonly used across the Pennine farms and villages." },
                { q: "Do you charge extra for remote or hard-to-reach locations?", a: "No hidden mileage surcharges. Our fixed quote covers dispatch anywhere within our Saddleworth and Pennine coverage zone, confirmed upfront before we set off." },
              ].map((faq) => (
                <details key={faq.q} className="group rounded-xl bg-white p-4 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                  <summary className="w-full flex items-center justify-between text-left cursor-pointer list-none">
                    <span className="text-lg font-semibold text-[#191c1e]">{faq.q}</span>
                    <ChevronDown className="h-5 w-5 text-[#004ad2] transition-transform group-open:rotate-180 shrink-0" />
                  </summary>
                  <p className="pt-2 text-base text-[#44474e] leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 9. LOCAL MAP */}
        <section className="w-full bg-[#f2f4f6] py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center gap-1 text-[#004ad2] font-bold">
                  <Navigation className="h-4 w-4" />
                  <span className="text-[11px] uppercase">Live Response Radius</span>
                </div>
                <h3 className="text-[30px] leading-[38px] font-bold text-[#191c1e]">
                  25–40 Minute Service Perimeter Across the Moors
                </h3>
                <p className="text-base text-[#44474e]">
                  Stationed to reach every village along the A62, A670, and A635 corridors, with heavy-duty vans built for steep gradients and exposed terrain.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-inner bg-[#0b1e3d]">
                  <Image
                    src="/gallery-precision-care.webp"
                    alt="Direct Tyre Solutions coverage across Saddleworth and the Pennines"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover opacity-70"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#1b61ff] animate-ping" />
                    <span className="text-[11px] font-bold uppercase text-[#0b1e3d]">Pennine Zone • Rapid Dispatch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CLOSING CTA */}
        <section className="w-full bg-[#0b1e3d] text-white py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1b61ff]/20 text-[#dce1ff] text-[11px] font-bold uppercase tracking-[0.06em] mb-4">
              <span className="h-2 w-2 rounded-full bg-[#ffd700] animate-pulse" />
              Pennine Dispatchers On Standby
            </span>
            <h2 className="text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] tracking-[-0.02em] md:tracking-[-0.03em] font-bold text-white max-w-3xl mx-auto">
              Stuck with a tyre on the moors in Saddleworth? We&rsquo;re on our way.
            </h2>
            <p className="text-lg text-[#dce1ff] max-w-2xl mx-auto mt-2 leading-relaxed">
              Isolated lane, farm track, or high pass — our all-terrain vans reach where standard recovery can&rsquo;t.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
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
