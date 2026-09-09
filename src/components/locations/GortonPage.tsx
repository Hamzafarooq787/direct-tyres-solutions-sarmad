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
  Navigation,
  Radar,
} from "lucide-react";
import LocationHeader from "./LocationHeader";
import LocationFooter from "./LocationFooter";

const stars = [0, 1, 2, 3, 4];

export default function GortonPage() {
  return (
    <>
      <LocationHeader currentSlug="gorton" />
      <main className="w-full pt-20 bg-[#f7f9fb]">
        {/* 1. HERO — layered/offset */}
        <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-4 lg:pt-8 pb-16">
          <div className="relative w-full">
            <div className="w-full h-72 sm:h-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-lg relative">
              <Image
                src="/hero-section-images-936x527.webp"
                alt="24/7 Mobile Tyre Fitting van on duty across Gorton Manchester"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0b1e3d]/80 via-[#0b1e3d]/40 to-transparent" />
              <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 bg-[#0b1e3d]/90 backdrop-blur-md px-3 py-1.5 rounded-full text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffe16d] animate-ping" />
                <span className="text-[11px] uppercase tracking-wider">Unit 4 Active Near Hyde Rd (A57)</span>
              </div>
            </div>
            <div className="relative lg:absolute lg:-bottom-10 lg:left-8 w-full lg:max-w-2xl bg-[#0b1e3d] text-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl -mt-14 lg:mt-0 z-10">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-[#ffe16d]">
                  <Star className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                  <span className="text-[11px] font-bold tracking-wider text-white">4.9 / 5.0</span>
                  <span className="text-[#dce1ff] text-xs">| 500+ Local Reviews</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[#ffe16d] text-[11px] uppercase tracking-widest bg-[#705d00]/20 px-2.5 py-1 rounded-md">
                  Rapid Response
                </span>
              </div>
              <h1 className="text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] font-bold tracking-tight mb-2">
                24/7 Mobile Tyre Fitting in Gorton
              </h1>
              <p className="text-base text-[#dce1ff] mb-6 max-w-xl">
                Fast roadside &amp; doorstep mobile tyre replacement across Gorton — average arrival in <strong className="text-[#ffe16d] font-semibold">20–35 minutes</strong>.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1b61ff] hover:bg-[#004ad2] text-white font-bold transition-all shadow-md active:scale-98"
                  href="tel:07955266077"
                >
                  <PhoneCall className="h-5 w-5 text-[#ffe16d]" />
                  <span>Call Now: 07955 266 077</span>
                </a>
                <Link
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#0b1e3d] hover:bg-[#f2f4f6] font-semibold transition-all"
                  href="/#contact"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. LOCAL INTRO */}
        <section className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 w-fit">
                <span className="w-3 h-0.5 bg-[#1b61ff]" />
                <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-widest">Local Gorton Rapid Coverage</span>
              </div>
              <h2 className="text-[30px] leading-[38px] tracking-[-0.015em] font-bold text-[#191c1e]">
                Keeping East Manchester Moving Through Every Squeezed Terrace &amp; Dual Carriageway
              </h2>
              <p className="text-base text-[#44474e] leading-relaxed">
                From heavy commuter congestion along <strong>Hyde Road (A57)</strong> to tight turnarounds framing the historic <strong>Gorton Monastery</strong>, our dedicated East Manchester fleet stays positioned to resolve tyre emergencies on the spot. Whether you&rsquo;re stranded near <strong>Debdale Park</strong>, shopping at Gorton Market, or boxed into compact terraced street parking along Mount Road, our fully equipped mobile rigs provide complete wheel balancing, puncture remediation, and rim replacement directly at your vehicle. There&rsquo;s zero need for costly recovery to a garage&mdash;we execute the full fitting cycle where you stand, safely and swiftly.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                {[
                  ["Primary Route", "Hyde Rd (A57)"],
                  ["Response Time", "20–35 Mins"],
                  ["Dispatch Mode", "24/7/365 Van"],
                ].map(([l, v]) => (
                  <div key={l} className="p-3 bg-[#f2f4f6] rounded-xl">
                    <span className="text-[#004ad2] text-[11px] uppercase block">{l}</span>
                    <span className="text-[18px] leading-[24px] font-bold text-[#191c1e]">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-md bg-[#eceef0] relative h-80 lg:h-96">
                <Image
                  src="/gallery-home-callout.webp"
                  alt="Direct Tyre Solutions mobile van parked outside residential terraced homes in Gorton"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#0b1e3d] text-white p-3 rounded-xl shadow-lg hidden sm:flex items-center gap-3">
                <ShieldCheck className="h-7 w-7 text-[#ffe16d]" />
                <div className="flex flex-col">
                  <span className="text-[11px] text-[#dce1ff] uppercase">Kerbside &amp; Driveway</span>
                  <span className="text-sm font-bold">Residential Fitting Ready</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES GRID */}
        <section className="w-full bg-[#f2f4f6] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
              <div>
                <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-widest block mb-1">Fleet Capabilities</span>
                <h2 className="text-[30px] leading-[38px] font-bold text-[#191c1e]">Gorton Mobile Tyre Solutions</h2>
              </div>
              <p className="text-base text-[#44474e] max-w-md">Commercial grade mounting and digital balancing brought right to your driveway, workplace, or roadside incident.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { image: "/mobile-tyre-fitting-3-1536x1024.webp", icon: Disc, tag: "Primary", title: "Mobile Tyre Fitting in Gorton", body: "Premium, mid-range, and economy replacements fitted on-site. We carry high-spec run-flats, 4x4, and commercial van tyres with instant laser calibration.", cta: "Book Fitting" },
                { image: "/wheel-balancing-2-1536x1024.webp", icon: Gauge, tag: "Precision", title: "Wheel Balancing in Gorton", body: "Eliminate steering vibrations and uneven tread degradation. On-board computerized laser balancers calibrated for smooth highway cruising.", cta: "Balance Wheels" },
                { image: "/service-puncture-repair.webp", icon: Wrench, tag: "BS AU 159", title: "Puncture Repairs in Gorton", body: "Safe, certified internal patch plugs for nail or screw penetrations within legal tread limits, saving you the expense of a full replacement.", cta: "Inspect Puncture" },
                { image: "/service-locking-wheel-nut.webp", icon: Unlock, tag: "Damage-Free", title: "Locking Nut Removal in Gorton", body: "Lost the key or dealing with stripped splines? Our specialized torque-induction reverse-thread extractors take them off safely without scratching your rims.", cta: "Unlock Wheels" },
              ].map((s) => (
                <div key={s.title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="relative h-40 w-full bg-[#e6e8ea]">
                    <Image src={s.image} alt={s.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#1b61ff] text-white text-[11px] uppercase font-bold">{s.tag}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="w-10 h-10 rounded-xl bg-[#dce1ff] flex items-center justify-center text-[#004ad2] mb-3">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-[18px] leading-[24px] font-bold text-[#191c1e] mb-2">{s.title}</h3>
                    <p className="text-sm text-[#44474e] flex-1">{s.body}</p>
                    <a className="inline-flex items-center gap-1.5 text-[#004ad2] font-bold hover:gap-2.5 transition-all mt-4" href="tel:07955266077">
                      {s.cta} &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-widest">Frictionless 3-Step Protocol</span>
            <h2 className="text-[30px] leading-[38px] font-bold text-[#191c1e] mt-1">How Mobile Fitting Works in Gorton</h2>
            <p className="text-base text-[#44474e] mt-2">
              From first phone call to complete road-readiness with our guaranteed <span className="text-[#004ad2] font-bold">20–35 minutes</span> dispatch window.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: "1", bg: "bg-[#0b1e3d]", title: "Call & Share Size", body: "Provide your vehicle registration or sidewall measurement (e.g. 205/55 R16) and precise Gorton location. We confirm available stock immediately.", note: "Direct Line Dispatch" },
              { n: "2", bg: "bg-[#1b61ff]", title: "Van Dispatched to Gorton", body: "Our mobile workshop unit is deployed directly toward your location. Expect live arrival updates typically in 20–35 minutes.", note: "Real-Time Tracking" },
              { n: "3", bg: "bg-[#705d00]", title: "Fitted, Balanced & Done", body: "The technician mounts, balances, replaces valve stems, torques to spec, and safely disposes of the old tyre. Pay contactless once satisfied.", note: "Contactless Payment" },
            ].map((s) => (
              <div key={s.n} className="bg-white p-8 rounded-2xl shadow-sm flex flex-col gap-2">
                <div className={`w-12 h-12 rounded-xl ${s.bg} text-white flex items-center justify-center font-bold`}>{s.n}</div>
                <h3 className="text-[18px] leading-[24px] font-bold text-[#191c1e]">{s.title}</h3>
                <p className="text-sm text-[#44474e] leading-relaxed">{s.body}</p>
                <span className="text-[#004ad2] text-[11px] font-semibold uppercase mt-2">{s.note}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. COVERAGE / NEARBY AREAS */}
        <section className="w-full bg-[#0b1e3d] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-xl">
                <span className="text-[#ffe16d] text-[11px] font-bold uppercase tracking-wider">East Manchester Operational Hub</span>
                <h2 className="text-[22px] leading-[28px] font-bold text-white mt-1">Serving Gorton &amp; Adjacent Districts Daily</h2>
                <p className="text-sm text-[#dce1ff] mt-1">Vans circulate through arterial intersections ready to divert to your emergency roadside pin within moments.</p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {["Longsight", "Belle Vue", "Openshaw", "Denton"].map((a) => (
                  <span key={a} className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white text-sm flex items-center gap-1.5">
                    <MapPin className="h-[18px] w-[18px] text-[#ffe16d]" /> {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <section className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-widest block mb-1">Authentic Driver Feedback</span>
              <h2 className="text-[30px] leading-[38px] font-bold text-[#191c1e]">Verified Gorton Customer Reviews</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Blew a tyre hitting debris on Hyde Road (A57) during rush hour. Direct Tyre Solutions had a van out to my layby in barely 25 minutes. Flawless repair, super polite technician!", name: "Kieran M.", place: "Hyde Road Incident" },
              { quote: "Parked outside our terrace on Chapman Street and woke up to a totally flat tyre. The technician handled the tight parking space without any bother and fitted a new Pirelli at our door.", name: "Amina S.", place: "Chapman St Resident" },
              { quote: "Stripped wheel nut on Mount Road after another garage overtorqued it. These lads had the reverse extraction gear and sorted it in 15 mins without a scratch on the alloys. 10/10.", name: "Liam O'Connor", place: "Mount Rd Driver" },
            ].map((r) => (
              <div key={r.name} className="bg-white p-8 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[#705d00] mb-3">
                    {stars.map((i) => (
                      <Star key={i} className="h-5 w-5" fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-base text-[#191c1e] italic">&ldquo;{r.quote}&rdquo;</p>
                </div>
                <div className="pt-4 mt-4 bg-[#f2f4f6] p-3 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-[#191c1e] block">{r.name}</span>
                    <span className="text-[11px] text-[#44474e] uppercase">{r.place}</span>
                  </div>
                  <ShieldCheck className="h-6 w-6 text-[#004ad2]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. PRICING */}
        <section className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 pb-16">
          <div className="w-full bg-[#0b1e3d] text-white rounded-2xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-xl text-center md:text-left">
              <span className="text-[#ffe16d] text-[11px] font-bold uppercase tracking-wider">Transparent Upfront Pricing</span>
              <h2 className="text-[30px] leading-[38px] font-bold text-white">Get an instant estimate for tyre fitting in Gorton</h2>
              <p className="text-base text-[#dce1ff]">Zero hidden mobile callout fees. Our quote covers the tyre, valve, balancing, roadside fitting, and environmental tyre disposal.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#1b61ff] hover:bg-[#004ad2] text-white font-bold transition-all shadow-md" href="tel:07955266077">
                Calculate Instant Price
              </a>
              <a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all" href="tel:07955266077">
                07955 266 077
              </a>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-widest">Common Questions</span>
            <h2 className="text-[30px] leading-[38px] font-bold text-[#191c1e] mt-1">Frequently Asked Questions in Gorton</h2>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {[
              { q: "Can you safely change a tyre on the A57 (Hyde Road) roadside?", a: "Yes. Our custom vans are equipped with high-intensity LED chevron lightbars, Chapter 8 highway safety markings, and heavy-duty stabilizing jacks. When stranded on busy arterial corridors like the A57, we establish a protected workspace to execute safe roadside swaps." },
              { q: "My car is parked on a narrow Gorton terraced street. Can you reach it?", a: "Absolutely. Our technicians operate compact, maneuverable Mercedes Sprinter workshop vans designed specifically for urban UK residential streets. We carry extended airlines and low-profile jacks that enable full tyre replacement even when vehicles are tightly parked against high kerbs." },
              { q: "Do you operate late at night or early morning in Gorton?", a: "Yes, we are a true 24/7 service operating 365 days a year. Whether your tyre goes flat at 2:00 AM after a shift or on a Sunday morning before work, our dispatch hotline connects straight to active technicians on duty." },
              { q: "Do you carry commercial van and delivery vehicle tyres?", a: "Yes. We stock reinforced 8-ply and heavy-load commercial tyres for Sprinters, Transits, and delivery vans common along the Gorton industrial corridors, ensuring minimum downtime for logistics contractors." },
            ].map((faq) => (
              <details key={faq.q} className="group bg-white rounded-2xl shadow-sm overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="w-full p-6 flex items-center justify-between gap-4 cursor-pointer list-none">
                  <span className="text-lg font-bold text-[#191c1e]">{faq.q}</span>
                  <ChevronDown className="h-6 w-6 text-[#004ad2] transition-transform group-open:rotate-180 shrink-0" />
                </summary>
                <p className="px-6 pb-6 text-[#44474e] leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 9. LOCAL MAP */}
        <section className="w-full bg-[#f2f4f6] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col gap-3">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffe16d] animate-pulse" />
                  <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-wider">Live East Manchester GPS Matrix</span>
                </div>
                <h2 className="text-[30px] leading-[38px] font-bold text-[#191c1e]">Rapid Dispatch Radius: Gorton &amp; Beyond</h2>
                <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-sm bg-[#0b1e3d] flex items-center justify-center mt-2">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-56 h-56 rounded-full border-2 border-dashed border-[#1b61ff]/40 animate-spin" style={{ animationDuration: "40s" }} />
                    <Radar className="absolute h-10 w-10 text-white/30" />
                  </div>
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-2 rounded-xl shadow-md flex items-center gap-3">
                    <Navigation className="h-6 w-6 text-[#004ad2]" />
                    <div>
                      <span className="block text-[11px] text-[#44474e] uppercase">Coverage Corridor</span>
                      <span className="text-sm font-bold text-[#191c1e]">5-Mile Primary Urgent Zone</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-[#0b1e3d] border border-white/20 text-white text-[11px] font-bold uppercase shadow-md">
                    Gorton Centre (M18)
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm shrink-0 relative">
                      <Image src="/gallery-precision-care.webp" alt="Direct Tyre Solutions lead technician on site" fill sizes="64px" className="object-cover" />
                    </div>
                    <div>
                      <span className="text-[#004ad2] text-[11px] font-bold uppercase">Assigned Mobile Crew</span>
                      <h3 className="text-[18px] leading-[24px] font-bold text-[#191c1e]">Dave &amp; Manchester Crew</h3>
                      <span className="text-sm text-[#44474e]">Senior IMI-Certified Mobile Tech</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#44474e]">Estimated Gorton Arrival:</span>
                      <span className="font-bold text-[#004ad2]">20–35 Mins</span>
                    </div>
                    <div className="w-full bg-[#eceef0] rounded-full h-2 overflow-hidden">
                      <div className="bg-[#1b61ff] h-full rounded-full w-4/5 animate-pulse" />
                    </div>
                  </div>
                  <a className="w-full py-3 rounded-xl bg-[#1b61ff] hover:bg-[#004ad2] text-white font-bold text-center transition-all" href="tel:07955266077">
                    Connect to Technician Now
                  </a>
                </div>
                <div className="bg-[#0b1e3d] text-white p-4 rounded-2xl shadow-sm flex items-center gap-3">
                  <ShieldCheck className="h-7 w-7 text-[#ffe16d]" />
                  <div>
                    <span className="font-bold block">100% Guaranteed Workmanship</span>
                    <span className="text-sm text-[#dce1ff]">Every tyre fitted comes with free valve &amp; wheel balance.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CLOSING CTA */}
        <section className="w-full bg-[#0b1e3d] text-white py-16 md:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-[#ffe16d] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ffe16d] animate-ping" />
              <span className="text-[11px] font-bold uppercase tracking-wider">24/7 Mobile Dispatch Active</span>
            </div>
            <h2 className="text-[30px] leading-[38px] sm:text-[40px] sm:leading-[48px] font-bold tracking-tight max-w-3xl mb-2">
              Stuck with a tyre in Gorton? We&rsquo;re on our way.
            </h2>
            <p className="text-lg text-[#dce1ff] max-w-xl mb-8">
              Don&rsquo;t wait hours for a tow truck. Call our direct dispatch phone now for guaranteed rapid mobile tyre repair or replacement.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-4 rounded-xl bg-[#1b61ff] hover:bg-[#004ad2] text-white font-bold shadow-xl hover:scale-105 active:scale-98 transition-all"
                href="tel:07955266077"
              >
                <PhoneCall className="h-6 w-6 text-[#ffe16d]" />
                <span>Call Now: 07955 266 077</span>
              </a>
              <Link
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all"
                href="/#contact"
              >
                Request Online Callback
              </Link>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-[#dce1ff] text-sm">
              {["No Garage Tow Needed", "20–35 Min Arrival", "All Major Brands Stocked"].map((t) => (
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
