import Image from "next/image";
import Link from "next/link";
import {
  Star,
  PhoneCall,
  Siren,
  SlidersHorizontal,
  Wrench,
  Unlock,
  Smartphone,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  ChevronDown,
  BadgeCheck,
} from "lucide-react";
import LocationHeader from "./LocationHeader";
import LocationFooter from "./LocationFooter";

const stars = [0, 1, 2, 3, 4];

export default function RoytonPage() {
  return (
    <>
      <LocationHeader currentSlug="royton" />
      <main className="w-full pt-20 bg-[#f7f9fb]">
        {/* 1. HERO — diagonal navy split */}
        <section className="relative overflow-hidden bg-[#0b1e3d] text-white">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#1b61ff] blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-[#ffe16d] blur-2xl opacity-10" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col items-start z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffe16d] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffe16d]" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#dce1ff]">Royton Rapid Response Unit</span>
                <span className="text-white/40">/</span>
                <span className="text-xs font-bold text-[#ffe16d]">20-35 Min ETA</span>
              </div>
              <h1 className="text-[36px] leading-[44px] md:text-[56px] md:leading-[64px] tracking-[-0.02em] md:tracking-[-0.03em] font-extrabold mb-4">
                24/7 Mobile Tyre Fitting in <span className="text-[#dce1ff]">Royton</span>
              </h1>
              <p className="text-lg text-[#e0e3e5] max-w-2xl mb-6 leading-relaxed">
                Workshop-grade mobile tyre changes direct to your location in Royton in 20–35 minutes. Professional roadside recovery, doorstep fitting, and puncture solutions on-demand.
              </p>
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 mb-8">
                <div className="flex items-center text-[#ffe16d]">
                  {stars.map((i) => (
                    <Star key={i} className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-sm font-bold text-white">4.9 / 5.0</span>
                <span className="text-sm text-[#e0e3e5] hidden sm:inline">• 180+ Local Royton Callouts</span>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <a
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-[#1b61ff] text-white hover:bg-[#004ad2] text-lg font-semibold shadow-xl transition-all"
                  href="tel:07955266077"
                >
                  <PhoneCall className="h-[22px] w-[22px]" />
                  <span>Call Now: 07955 266 077</span>
                </a>
                <Link
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
                  href="/#contact"
                >
                  Get an Instant Quote
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
                <div className="relative w-full h-[400px]">
                  <Image
                    src="/hero-section-images-936x527.webp"
                    alt="Direct Tyre Solutions mobile tyre fitting van on a street in Royton"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#0b1e3d]/95 backdrop-blur-md rounded-xl text-white shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Siren className="h-6 w-6 text-[#ffe16d]" />
                    <div>
                      <p className="text-[11px] font-bold uppercase text-[#dce1ff]">Active Patrol Area</p>
                      <p className="text-lg font-semibold">A671 &amp; Royton Bypass</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-bold uppercase text-[#ffe16d]">Van Status</span>
                    <p className="text-xs font-bold text-white">Dispatched • Live</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. LOCAL INTRO */}
        <section className="w-full bg-[#f7f9fb] py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm flex flex-col lg:flex-row gap-8 items-start justify-between">
              <div className="lg:w-1/3">
                <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Local Community Roots</span>
                <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#191c1e] mt-1">
                  Royton Commuters &amp; Residents Depend On Us
                </h2>
              </div>
              <div className="lg:w-2/3 space-y-3 text-lg text-[#44474e] leading-relaxed">
                <p>
                  Whether you hit a jagged pothole leaving the bustling Royton precinct, discover a critical puncture along Rochdale Road (A671), or lose air pressure right outside Tandle Hill Country Park on a frosty morning, our mobile technicians deploy immediately. We eliminate the frustration of limping across suburban avenues around High Barn or waiting hours for a tow. Direct Tyre Solutions drives fully automated fitting workshops directly to your home driveway or roadside breakdown spot, swapping high-performance tyres while you continue your day without losing half your Saturday at a cold garage workshop.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES BENTO GRID */}
        <section className="w-full bg-[#f7f9fb] py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="mb-8">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Full Fleet Capability</span>
              <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#191c1e] mt-1">
                Specialist Tyre Solutions Across Royton
              </h2>
              <p className="text-base text-[#44474e] mt-1 max-w-xl">
                Complete workshop-grade mobile equipment mounted inside high-clearance service vans.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 bg-[#0b1e3d] text-white rounded-2xl p-8 relative overflow-hidden shadow-md flex flex-col justify-between">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#1b61ff] flex items-center justify-center mb-4">
                    <Siren className="h-7 w-7" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#ffe16d]">Primary Deployment</span>
                  <h3 className="text-[30px] leading-[38px] font-bold mt-1">
                    24/7 Emergency Mobile Tyre Fitting in Royton
                  </h3>
                  <p className="text-base text-[#e0e3e5] mt-2 max-w-xl">
                    Rapid roadside and doorstep dispatch carrying premium brands (Michelin, Continental, Pirelli, Goodyear) and reliable budget options. Instant bead-breaking, digital rim alignment, and pneumatic inflation anywhere from Broadway (A663) to back-residential driveways.
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between z-10 pt-4">
                  <span className="text-sm font-bold text-[#ffe16d]">Guaranteed 20–35 min rapid dispatch window</span>
                  <a className="inline-flex items-center gap-1 text-[#dce1ff] hover:text-white text-sm font-semibold transition-colors" href="tel:07955266077">
                    Request Urgent Van →
                  </a>
                </div>
                <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#1b61ff]/20 rounded-full blur-2xl pointer-events-none" />
              </div>
              <div className="bg-white text-[#191c1e] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#e6e8ea] flex items-center justify-center mb-4">
                    <SlidersHorizontal className="h-6 w-6 text-[#004ad2]" />
                  </div>
                  <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Mobile Calibration</span>
                  <h3 className="text-[22px] leading-[28px] font-semibold text-[#191c1e] mt-1">
                    Precision Wheel Balancing in Royton
                  </h3>
                  <p className="text-sm text-[#44474e] mt-1">
                    Eliminate dangerous steering shudder and prevent uneven tread wear. Every mobile fitting includes computerized dynamic laser balancing on our van-mounted rigs.
                  </p>
                </div>
                <div className="mt-4 pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#44474e]">DIGITAL SENSORS • 0g ZEROED</span>
                  <CheckCircle2 className="h-5 w-5 text-[#004ad2]" />
                </div>
              </div>
              <div className="bg-white text-[#191c1e] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#e6e8ea] flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-[#004ad2]" />
                  </div>
                  <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">BS AU 159 Standard</span>
                  <h3 className="text-[22px] leading-[28px] font-semibold text-[#191c1e] mt-1">
                    Roadside Puncture Repairs in Royton
                  </h3>
                  <p className="text-sm text-[#44474e] mt-1">
                    Save money with an honest repair when safe. We inspect tread depth and sidewall integrity, applying permanent internal vulcanized plug patches roadside.
                  </p>
                </div>
                <div className="mt-4 pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#44474e]">SAFETY CERTIFIED</span>
                  <Wrench className="h-5 w-5 text-[#004ad2]" />
                </div>
              </div>
              <div className="lg:col-span-2 bg-[#e6e8ea] text-[#191c1e] rounded-2xl p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#004ad2] flex items-center justify-center mb-4">
                    <Unlock className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Damage-Free Extraction</span>
                  <h3 className="text-[30px] leading-[38px] font-bold text-[#191c1e] mt-1">
                    Specialist Locking Wheel Nut Removal Near You
                  </h3>
                  <p className="text-base text-[#44474e] mt-2 max-w-xl">
                    Lost the security key or facing a sheared, overtightened lug bolt? Our master tools cleanly extract all types of deformed locking nuts (including spinning collars and flower patterns) with zero scratch damage to your alloy wheels.
                  </p>
                </div>
                <div className="mt-4 pt-2 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-[#004ad2]" />
                    <span className="text-sm text-[#191c1e] font-semibold">100% Alloy-Safe Reverse Thread Extraction</span>
                  </div>
                  <a className="inline-flex items-center gap-1 text-sm font-semibold text-[#004ad2] hover:underline" href="tel:07955266077">
                    Book Nut Removal →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="w-full bg-[#f2f4f6] py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Fast-Track Process</span>
              <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#191c1e] mt-1">
                Back on the Road in 3 Frictionless Steps
              </h2>
              <p className="text-base text-[#44474e] mt-1">Clear, upfront pricing with no hidden roadside surplus charges.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { n: "01", icon: Smartphone, title: "Call or Request Online", body: "Share your location in Royton and tyre specifications (or registration plate). We confirm transparent fixed quotes instantly on the line.", note: "INSTANT TELEPHONE DISPATCH" },
                { n: "02", icon: MapPin, title: "Rapid Royton Arrival", body: "Our mobile fitting unit arrives at your roadside breakdown or private driveway within 20–35 minutes with tyres pre-loaded.", note: "LIVE GPS ARRIVAL UPDATES" },
                { n: "03", icon: CheckCircle2, title: "Fitted, Balanced & Driven", body: "We mount, electronically balance, replace rubber valves, and torque check your bolts. Contactless card payment accepted on the spot.", note: "100% ROADSIDE RECOVERY" },
              ].map((step) => (
                <div key={step.n} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[40px] leading-[48px] font-extrabold text-[#b5c4ff]">{step.n}</span>
                      <step.icon className="h-7 w-7 text-[#004ad2]" />
                    </div>
                    <h3 className="text-[22px] leading-[28px] font-semibold text-[#191c1e]">{step.title}</h3>
                    <p className="text-sm text-[#44474e] mt-1">{step.body}</p>
                  </div>
                  <div className="mt-4 pt-1">
                    <span className="text-[11px] font-bold text-[#004ad2]">{step.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. COVERAGE / NEARBY AREAS */}
        <section className="w-full bg-[#0b1e3d] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <span className="text-[#ffe16d] text-[11px] font-bold uppercase tracking-[0.06em]">Local Boundary Network</span>
                <h2 className="text-[30px] leading-[38px] tracking-[-0.015em] font-bold text-white mt-1">
                  Fast Response Across Royton &amp; Surrounding Environs
                </h2>
                <p className="text-sm text-[#e0e3e5] mt-1">
                  Our vans remain continuously on rotation around North Oldham and South Rochdale junctions.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 max-w-xl">
                <div className="px-4 py-2 rounded-full bg-[#1b61ff] text-white text-sm font-semibold flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Royton (Town Centre)
                </div>
                {["Heyside", "Thornham"].map((a) => (
                  <span key={a} className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold">{a}</span>
                ))}
                <Link className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors" href="/mobile-tyre-fitting-oldham">
                  Oldham
                </Link>
                <Link className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors" href="/mobile-tyre-fitting-shaw">
                  Shaw
                </Link>
                <Link className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors" href="/mobile-tyre-fitting-chadderton">
                  Chadderton
                </Link>
                <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold">Rochdale</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <section className="w-full bg-[#f7f9fb] py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
              <div>
                <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Customer Feedback</span>
                <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#191c1e] mt-1">
                  Verified Experiences in Royton
                </h2>
              </div>
              <p className="text-sm text-[#44474e] mt-1 md:mt-0">Over 1,400+ motorists helped across Greater Manchester</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { quote: "Blew a tyre on a deep pothole right down Rochdale Road on my commute into Manchester. Direct Tyre Solutions arrived in 25 minutes flat, swapped the tyre on the roadside, and saved my workday. Truly top-tier service.", name: "Liam T.", place: "Rochdale Road (A671) • Emergency Callout" },
                { quote: "Came home from a walk around Tandle Hill with the kids to find a totally flat rear tyre. They fitted a brand-new Michelin on my driveway in Royton that same afternoon without any hassle. Super professional technician.", name: "Hannah W.", place: "Near Tandle Hill • Driveway Replacement" },
                { quote: "Stripped a wheel lock nut trying to change a flat in the precinct car park. Called Direct Tyre Solutions; their specialist extracted the mangled nut in under ten minutes with completely zero marks to my alloy.", name: "George S.", place: "Royton Centre • Lock Nut Removal" },
              ].map((r) => (
                <div key={r.name} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center text-[#ffe16d] mb-3">
                      {stars.map((i) => (
                        <Star key={i} className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="text-base text-[#191c1e] italic">&ldquo;{r.quote}&rdquo;</p>
                  </div>
                  <div className="mt-4 pt-1">
                    <h4 className="text-lg font-semibold text-[#191c1e]">{r.name}</h4>
                    <span className="text-sm text-[#004ad2]">{r.place}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PRICING CALLOUT */}
        <section className="w-full bg-[#f7f9fb] py-8">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-[#0b1e3d] text-white rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="relative z-10 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b61ff]/30 text-[#dce1ff] mb-3">
                  <BadgeCheck className="h-4 w-4" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.06em]">Upfront Pricing Promise</span>
                </div>
                <h3 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white">
                  Clear, All-Inclusive Quotes for Royton Drivers
                </h3>
                <p className="text-base text-[#e0e3e5] mt-2">
                  Our pricing includes mobile callout, on-site fitting, precision balancing, new rubber valves, and eco-friendly casing disposal. No surprise roadside fee escalations.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 text-white">
                  <div>
                    <p className="text-[11px] font-bold uppercase text-[#ffe16d]">Response Time</p>
                    <p className="text-lg font-semibold text-[#ffe16d]">20–35 Mins</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase text-[#ffe16d]">Callout Windows</p>
                    <p className="text-lg font-semibold">24/7 Mon–Sun</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase text-[#ffe16d]">Alloy Guarantee</p>
                    <p className="text-lg font-semibold">Zero-Scratch</p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex flex-col items-center sm:items-end w-full lg:w-auto">
                <div className="bg-white text-[#191c1e] p-6 rounded-2xl shadow-xl w-full sm:w-80 flex flex-col gap-2">
                  <span className="text-[#004ad2] text-[11px] font-bold uppercase">Fast Callback Dispatch</span>
                  <span className="text-[22px] leading-[28px] font-semibold text-[#191c1e]">Need a quick price check?</span>
                  <a
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#1b61ff] hover:bg-[#004ad2] text-white text-lg font-semibold shadow-md transition-colors"
                    href="tel:07955266077"
                  >
                    <PhoneCall className="h-5 w-5" />
                    <span>07955 266 077</span>
                  </a>
                  <p className="text-xs text-center text-[#44474e]">Instant quotation • Free tyre sizing help</p>
                </div>
              </div>
              <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#1b61ff]/20 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="w-full bg-[#f7f9fb] py-12">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Got Questions?</span>
              <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#191c1e] mt-1">
                Frequently Asked Questions in Royton
              </h2>
            </div>
            <div className="space-y-3">
              {[
                { q: "How quickly can your tyre van reach me in Royton?", a: "Our typical arrival window across Royton is 20 to 35 minutes. We strategically position mobile vans near major arterial links including the A671 Rochdale Road and A663 Broadway, ensuring rapid dispatch directly to your home, roadside stop, or work premises." },
                { q: "Can you repair my puncture roadside, or will I need a new tyre?", a: "We adhere strictly to British Standard BS AU 159. If the puncture occurs in the central three-quarters of the tread and the tyre structure or sidewall is undamaged, we can perform a permanent vulcanized patch repair roadside. We also carry a replacement tyre in your vehicle's specific size in case the tyre cannot safely be repaired." },
                { q: "Can your mobile workshop service steep residential driveways or hills?", a: "Yes. Many properties around Tandle Hill and High Barn feature steep incline driveways. Our technicians carry specialized low-profile commercial hydraulic jacks, wheel chocks, and leveling safety equipment to safely lift and secure your vehicle on gradients or roadside curbs." },
                { q: "Do you responsibly dispose of my damaged or old tyres?", a: "Absolutely. Old tyre casing disposal is handled in an environmentally certified manner. We remove your scrap casing and ensure it is sent to registered UK tyre recycling facilities to be repurposed into playground surfaces, safety crumb rubber, or retreads." },
              ].map((faq) => (
                <details key={faq.q} className="group bg-white rounded-xl p-4 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                  <summary className="w-full flex items-center justify-between gap-4 cursor-pointer list-none">
                    <span className="text-lg font-semibold text-[#191c1e]">{faq.q}</span>
                    <ChevronDown className="h-6 w-6 text-[#004ad2] transition-transform group-open:rotate-180 shrink-0" />
                  </summary>
                  <p className="text-base text-[#44474e] mt-2 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 9. LOCAL MAP */}
        <section className="w-full bg-[#f2f4f6] py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
                <div>
                  <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Patrol Coverage Zone</span>
                  <h2 className="text-[30px] leading-[38px] tracking-[-0.015em] font-bold text-[#191c1e] mt-1">
                    Royton &amp; Tandle Hill Service Corridor
                  </h2>
                  <p className="text-base text-[#44474e]">
                    Live mobile units monitoring the A671, A663, and connecting Oldham/Rochdale roadways.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-[#1b61ff] inline-block" />
                    <span className="text-sm text-[#191c1e]">Average Reach: 20–35 Mins</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-[#ffe16d] inline-block" />
                    <span className="text-sm text-[#191c1e]">Instant Dispatch Ready</span>
                  </div>
                </div>
              </div>
              <div className="relative w-full h-80 rounded-xl overflow-hidden bg-[#0b1e3d] flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-64 h-64 rounded-full border-2 border-dashed border-[#1b61ff]/40 animate-spin" style={{ animationDuration: "40s" }} />
                  <div className="w-40 h-40 rounded-full border border-white/20 absolute" />
                  <div className="absolute flex flex-col items-center">
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffe16d] opacity-75" />
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-[#1b61ff]" />
                    </span>
                    <div className="mt-1 px-2 py-0.5 rounded bg-[#0b1e3d] text-white text-[11px] font-bold uppercase shadow-md border border-white/20">
                      Royton Centre
                    </div>
                  </div>
                  <div className="absolute top-12 left-1/3 flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffe16d]" />
                    <div className="mt-1 px-2 py-0.5 rounded bg-[#0b1e3d] text-white text-[11px] font-bold uppercase opacity-80">
                      Tandle Hill
                    </div>
                  </div>
                  <div className="absolute bottom-12 right-1/3 flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#dce1ff]" />
                    <div className="mt-1 px-2 py-0.5 rounded bg-[#0b1e3d] text-white text-[11px] font-bold uppercase opacity-80">
                      High Barn
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CLOSING CTA */}
        <section className="w-full bg-[#0b1e3d] text-white py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b61ff]/30 text-[#dce1ff] text-[11px] font-bold uppercase tracking-[0.06em] mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffe16d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffe16d]" />
              </span>
              On-Call Dispatchers Ready
            </span>
            <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white max-w-3xl mx-auto">
              Stuck with a flat tyre in Royton? We&rsquo;re on our way.
            </h2>
            <p className="text-lg text-[#e0e3e5] max-w-2xl mx-auto mt-2 leading-relaxed">
              Don&rsquo;t let a flat tyre strand you on Rochdale Road or trap your car on your driveway. Call our rapid roadside squad now for immediate dispatch.
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
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[#e0e3e5] text-sm">
              <span>• No membership required</span>
              <span>• Fixed pricing upfront</span>
              <span>• All major credit cards taken</span>
            </div>
          </div>
        </section>
      </main>
      <LocationFooter />
    </>
  );
}
