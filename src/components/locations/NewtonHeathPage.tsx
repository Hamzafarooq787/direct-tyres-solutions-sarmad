import Image from "next/image";
import Link from "next/link";
import {
  Star,
  PhoneCall,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Truck,
} from "lucide-react";
import LocationHeader from "./LocationHeader";
import LocationFooter from "./LocationFooter";

const stars = [0, 1, 2, 3, 4];

export default function NewtonHeathPage() {
  return (
    <>
      <LocationHeader currentSlug="newton-heath" />
      <main className="w-full pt-20 bg-[#f7f9fb]">
        {/* 1. HERO — minimalist typographic with inset photo */}
        <section className="relative w-full bg-white overflow-hidden py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f2f4f6] shadow-sm">
                    <div className="flex text-[#705d00]">
                      {stars.map((i) => (
                        <Star key={i} className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-[#000516]">4.9</span>
                    <span className="text-sm text-[#44474e]">(500+ Verified Reviews)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#dce1ff]/60">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1b61ff] animate-pulse" />
                    <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-wider">Newton Heath Unit Active</span>
                  </div>
                </div>
                <h1 className="text-[36px] leading-[40px] md:text-[56px] md:leading-[62px] text-[#000516] mb-4 tracking-tight font-extrabold">
                  24/7 Mobile Tyre Fitting in Newton Heath
                </h1>
                <p className="text-lg text-[#44474e] mb-8 max-w-2xl leading-relaxed">
                  On-demand mobile tyre fitting directly to your driveway, workplace, or roadside in Newton Heath — 20–35 min arrival.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                  <a className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#1b61ff] hover:bg-[#004ad2] text-white font-bold shadow-md hover:scale-[1.02] transition-all" href="tel:07955266077">
                    <PhoneCall className="h-[22px] w-[22px] text-[#ffe16d]" />
                    Call Now: 07955 266 077
                  </a>
                  <Link className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-[#000516] font-bold shadow-sm hover:bg-[#f2f4f6] transition-all" href="/#contact">
                    Get a Quote
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-12 pt-6 w-full">
                  {[
                    ["20–35m", "Avg Newton Heath SLA"],
                    ["£0", "Call-Out Fee Guarantee"],
                    ["365 Days", "Roadside Dispatch"],
                  ].map(([v, l]) => (
                    <div key={l} className="flex flex-col">
                      <span className="text-[22px] leading-[28px] font-bold text-[#000516]">{v}</span>
                      <span className="text-[11px] text-[#44474e] uppercase tracking-wider">{l}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md bg-white rounded-2xl p-3 shadow-xl">
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-[#eceef0]">
                    <Image
                      src="/hero-section-images-936x527.webp"
                      alt="Direct Tyre Solutions certified technician fitting an alloy tyre in Newton Heath"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <div>
                      <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-wider block">Live Mobile Dispatch</span>
                      <span className="text-[18px] leading-[24px] text-[#000516] font-bold">Van #14 &bull; Dean Lane</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#e6e8ea]">
                      <span className="w-2 h-2 rounded-full bg-[#705d00] animate-ping" />
                      <span className="text-[11px] font-bold text-[#000516]">Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. LOCAL INTRO */}
        <section className="w-full bg-[#f2f4f6] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-lg bg-[#eceef0] relative aspect-[16/10]">
                  <Image
                    src="/gallery-roadside-fitting.webp"
                    alt="Mercedes Sprinter mobile tyre fitting van stationed in Newton Heath"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-3">
                <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-wider">Local Greater Manchester Dispatch</span>
                <h2 className="text-[30px] leading-[38px] font-bold text-[#000516]">
                  Rooted in Newton Heath: Urgent Tyres Without the Tow Truck
                </h2>
                <p className="text-lg text-[#44474e] leading-relaxed">
                  Newton Heath&rsquo;s rich industrial heritage and bustling logistics corridors demand immediate roadside reliability. Whether your commercial delivery van suffers a severe puncture along the high-traffic Oldham Road (A62), a distribution truck halts near Ten Acres Lane, or a family commuter catches a rim puncture by Brookdale Park, Direct Tyre Solutions eliminates the cost and delay of recovery flatbeds. Our mobile workshop vans carry commercial-grade bead breakers, nitrogen inflation, and hundreds of OEM tyre references directly to your exact spot within 20–35 minutes.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#004ad2]" />
                    <span className="font-semibold text-[#000516]">All Major Brands Stocked</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#004ad2]" />
                    <span className="font-semibold text-[#000516]">M40 Postcode Priority</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES GRID */}
        <section className="w-full bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-start md:items-center text-left md:text-center max-w-3xl mx-auto mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-wider mb-2">Dedicated Roadside &amp; Driveway Capabilities</span>
              <h2 className="text-[30px] leading-[38px] text-[#000516] font-bold tracking-tight">
                Precision Tyre Services Across Newton Heath
              </h2>
              <p className="text-base text-[#44474e] mt-2">
                From commercial logistics fleets along Dean Lane to residential drives off Culcheth Lane, our mobile tyre fitting units carry full workshop gear.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { image: "/mobile-tyre-fitting-3-1536x1024.webp", tag: "On-Site Replacement", title: "Mobile Tyre Fitting in Newton Heath", body: "Premium, mid-range, and economy tyres fitted at home, work, or roadside without waiting for garage appointments.", cta: "Book Fitting" },
                { image: "/wheel-balancing-2-1536x1024.webp", tag: "Vibration-Free Smoothness", title: "Precision Wheel Balancing in Newton Heath", body: "High-accuracy dynamic digital spin balancing inside each van to stop steering shudder and uneven tire wear.", cta: "Calibrate Now" },
                { image: "/service-puncture-repair.webp", tag: "BS AU 159 Compliant", title: "Vulcanized Puncture Repairs in Newton Heath", body: "Safe, permanent central-tread puncture plugs vulcanized on the spot to save serviceable tyres when replacements are not required.", cta: "Inspect Puncture" },
                { image: "/service-locking-wheel-nut.webp", tag: "Zero Rim Damage", title: "Safe Locking Nut Removal in Newton Heath", body: "Stripped or lost key? Our specialized inverse extraction equipment removes seized nuts smoothly without scratching precious alloy rims.", cta: "Extract Nut" },
              ].map((s) => (
                <div key={s.title} className="flex flex-col bg-[#f2f4f6] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <div className="relative h-48 overflow-hidden bg-[#e6e8ea]">
                    <Image src={s.image} alt={s.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-wider mb-1">{s.tag}</span>
                    <h3 className="text-[18px] leading-[24px] text-[#000516] font-bold mb-2">{s.title}</h3>
                    <p className="text-sm text-[#44474e] flex-grow leading-relaxed mb-4">{s.body}</p>
                    <a className="inline-flex items-center gap-2 font-bold text-[#004ad2] hover:text-[#000516] transition-colors" href="tel:07955266077">
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
        <section className="w-full bg-[#eceef0] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-wider">Fast Turnaround Protocol</span>
              <h2 className="text-[30px] leading-[38px] text-[#000516] font-bold">Three Simple Steps to Get Rolling Again</h2>
              <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-white shadow-sm">
                <span className="text-[#000516] text-[11px] font-bold uppercase">Arrival SLA: 20–35 minutes in Newton Heath</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { n: "1", icon: PhoneCall, title: "Call or Request Online", body: "Share your vehicle registration or tyre dimensions along with your location in Newton Heath (roadside, residential street, or warehouse bay)." },
                { n: "2", icon: Truck, title: "Rapid Dispatch (20–35m)", body: "Our nearest mobile service van navigates directly to you via Oldham Road or Ten Acres Lane with the right tyres and calibration tools onboard." },
                { n: "3", icon: CheckCircle2, title: "Fitted, Balanced & Cleared", body: "We mount, digitally balance, check valve stems, torque wheel bolts to factory specs, and responsibly dispose of old casings. You pay safely on card." },
              ].map((s) => (
                <div key={s.n} className="bg-white p-6 rounded-2xl shadow-sm flex flex-col relative">
                  <span className="text-[40px] leading-[48px] text-[#e0e3e5] font-black absolute top-4 right-6">{s.n}</span>
                  <div className="w-12 h-12 rounded-xl bg-[#dce1ff] flex items-center justify-center text-[#004ad2] mb-3">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-[18px] leading-[24px] text-[#000516] font-bold mb-2">{s.n}. {s.title}</h3>
                  <p className="text-sm text-[#44474e] leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. COVERAGE / NEARBY AREAS */}
        <section className="w-full bg-[#0b1e3d] text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 flex flex-col gap-3">
                <span className="text-[#dce1ff] text-[11px] font-bold uppercase tracking-wider">Manchester M40 Response Grid</span>
                <h2 className="text-[30px] leading-[38px] text-white font-bold">Fast Response Units Across Newton Heath &amp; Surrounding Wards</h2>
                <p className="text-base text-[#dce1ff] leading-relaxed">
                  Stationed continuously around East Manchester&rsquo;s primary arterial routes, our mobile workshops deliver rapid turnaround times across neighboring districts with zero delay.
                </p>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  <span className="px-4 py-2 rounded-full bg-white/15 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ffe16d]" /> Newton Heath (HQ Hub)
                  </span>
                  {["Moston", "Failsworth", "Cheetham Hill", "Miles Platting", "Clayton", "Harpurhey"].map((a) => (
                    <span key={a} className="px-4 py-2 rounded-full bg-white/10 text-[#dce1ff] font-semibold">{a}</span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="bg-white/10 p-4 rounded-2xl w-full max-w-sm flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full overflow-hidden shadow-sm relative shrink-0">
                      <Image src="/gallery-precision-care.webp" alt="Direct Tyre Solutions technician team" fill sizes="56px" className="object-cover" />
                    </div>
                    <div>
                      <span className="text-[#ffe16d] text-[11px] font-bold uppercase">Field Supervisor</span>
                      <p className="text-[18px] leading-[24px] text-white font-bold">Liam R. &bull; Unit M40</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#dce1ff]">
                    &ldquo;We cover the Oldham Road artery 24/7. When rain or road debris strikes, we arrive in minutes with everything loaded on board.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <section className="w-full bg-[#f2f4f6] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-wider">Locally Endorsed</span>
              <h2 className="text-[30px] leading-[38px] text-[#000516] font-bold">Trusted by Newton Heath Motorists</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { quote: "Had a total sidewall blowout just off Dean Lane during the morning rush. They arrived in exactly 22 minutes, fitted two brand new Michelin tyres, and got me into work before my 9 AM briefing.", name: "Marcus H.", place: "Dean Lane, Newton Heath" },
                { quote: "Delivery van was stuck with a puncture near the A62 Oldham Road junction. The engineer had the right commercial rated tyre on his van, balanced it immediately, and had our driver back on schedule.", name: "Sarah G.", place: "Oldham Rd, Newton Heath" },
                { quote: "Lost my locking wheel nut key when fitting winter tyres on Droylsden Road. The specialist removed all four cleanly without a single mark on my alloys. Flawless service and great pricing.", name: "Dave T.", place: "Droylsden Rd, Newton Heath" },
              ].map((r) => (
                <div key={r.name} className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex text-[#705d00] mb-3">
                      {stars.map((i) => (
                        <Star key={i} className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="text-base text-[#191c1e] italic mb-4">&ldquo;{r.quote}&rdquo;</p>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <span className="font-bold text-[#000516] block">{r.name}</span>
                      <span className="text-sm text-[#44474e]">{r.place}</span>
                    </div>
                    <ShieldCheck className="h-6 w-6 text-[#004ad2]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PRICING */}
        <section className="w-full bg-white py-8" id="quote-callout">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-[#0b1e3d] text-white rounded-2xl p-8 md:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex flex-col gap-2 max-w-2xl text-left">
                <span className="text-[#ffe16d] text-[11px] font-bold uppercase tracking-wider">Transparent Upfront Pricing</span>
                <h2 className="text-[30px] leading-[38px] text-white font-bold">Get an instant estimate for tyre fitting in Newton Heath</h2>
                <p className="text-base text-[#dce1ff]">
                  No unexpected emergency surcharges or hidden call-out fees. Select your tyre size or vehicle registration for an all-inclusive quote covering fitting, balancing, new valves, and casing disposal.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto shrink-0">
                <a className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#1b61ff] hover:bg-[#004ad2] text-white font-bold shadow-md hover:scale-105 transition-all" href="tel:07955266077">
                  <PhoneCall className="h-5 w-5" />
                  Instant Quote &amp; Booking
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="w-full bg-[#f2f4f6] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-wider">Frequent Inquiries</span>
              <h2 className="text-[30px] leading-[38px] text-[#000516] font-bold">Newton Heath Tyre Fitting FAQ</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: "⏰", q: "How quickly can you reach me in Newton Heath?", a: "Our typical arrival window across Newton Heath and the M40 corridor is 20 to 35 minutes. With vans positioned near Oldham Road and Ten Acres Lane, we prioritize roadside emergencies immediately." },
                { icon: "🔧", q: "Can you replace commercial van and delivery tyres on-site?", a: "Yes. Our heavy-duty mobile changers handle high-load commercial tyres for Ford Transits, Mercedes Sprinters, and Vauxhall Vivaros commonly serving Newton Heath industrial estates and distribution depots." },
                { icon: "🔑", q: "What if I do not have the locking wheel nut key?", a: "Don't worry. Every response vehicle carries non-destructive reverse-threading master removal kits. We safely extract rounded, over-torqued, or missing-key locking nuts without damaging your alloy rims." },
                { icon: "💳", q: "Do you take contactless card payments at the roadside?", a: "Yes. All technicians carry mobile chip-and-pin and contactless terminals supporting Visa, Mastercard, Apple Pay, and Google Pay. You only pay after the job is completely inspected and signed off." },
              ].map((faq) => (
                <div key={faq.q} className="bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#dce1ff] flex items-center justify-center text-lg shrink-0">{faq.icon}</span>
                    <h3 className="text-[18px] leading-[24px] text-[#000516] font-bold">{faq.q}</h3>
                  </div>
                  <p className="text-base text-[#44474e] leading-relaxed pl-11">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. LOCAL MAP */}
        <section className="w-full bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 flex flex-col gap-3">
                <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-wider">Geographic Dispatch Hub</span>
                <h2 className="text-[30px] leading-[38px] text-[#000516] font-bold">Covering Every Road in Newton Heath</h2>
                <p className="text-base text-[#44474e] leading-relaxed">
                  From the bustling railway corridors and industrial hubs around Ten Acres Lane to quiet residential streets bordering Brookdale Park, our live mapping continuously dispatches the closest mobile technician to minimize your wait time.
                </p>
                <div className="flex flex-col gap-2 mt-1">
                  {["Oldham Rd (A62) Express Corridor", "Ten Acres Lane Industrial Sector", "Brookdale Park & Dean Lane Residential"].map((t) => (
                    <div key={t} className="flex items-center gap-3 p-2 rounded-xl bg-[#f2f4f6]">
                      <MapPin className="h-5 w-5 text-[#004ad2]" />
                      <span className="text-sm text-[#000516] font-semibold">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-[#0b1e3d] flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-64 h-64 rounded-full border-2 border-dashed border-[#1b61ff]/40 animate-spin" style={{ animationDuration: "20s" }} />
                  </div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="relative flex items-center justify-center mb-3">
                      <span className="w-12 h-12 rounded-full bg-[#1b61ff]/40 animate-ping absolute" />
                      <div className="w-14 h-14 rounded-full bg-[#1b61ff] flex items-center justify-center shadow-lg text-white">
                        <Truck className="h-7 w-7" />
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-[#ffe16d] font-bold uppercase tracking-wider text-[11px] mb-1">
                      Newton Heath Zone (M40)
                    </span>
                    <p className="text-[22px] leading-[28px] text-white font-bold">Live 20–35 Min Radius</p>
                    <span className="text-sm text-[#dce1ff] max-w-xs mt-1">Technicians patrolling A62, Dean Lane, and Droylsden Road now.</span>
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-white/10 text-white text-[11px] uppercase">NW: Cheetham Hill</div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-white/10 text-white text-[11px] uppercase">NE: Moston &amp; Failsworth</div>
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-lg bg-white/10 text-white text-[11px] uppercase">SW: Miles Platting</div>
                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-white/10 text-white text-[11px] uppercase">SE: Droylsden</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CLOSING CTA */}
        <section className="w-full bg-[#000516] text-white py-16 md:py-20 text-center relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex flex-col items-center">
            <span className="w-3 h-3 rounded-full bg-[#ffe16d] animate-ping mb-3" />
            <span className="text-[#dce1ff] text-[11px] font-bold uppercase tracking-wider mb-2">Instant Roadside &amp; Driveway Rescue</span>
            <h2 className="text-[30px] leading-[38px] sm:text-[40px] sm:leading-[48px] text-white font-extrabold max-w-3xl leading-tight mb-2">
              Stuck with a tyre in Newton Heath? We&rsquo;re on our way.
            </h2>
            <p className="text-lg text-[#dce1ff] max-w-2xl mx-auto mb-8 leading-relaxed">
              Speak directly with a local dispatch controller. We locate your exact position and send the closest mobile fitting unit immediately.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a className="flex items-center justify-center gap-3 px-12 py-4 rounded-xl bg-[#1b61ff] hover:bg-[#004ad2] text-white font-bold shadow-xl hover:scale-105 transition-all" href="tel:07955266077">
                <PhoneCall className="h-6 w-6 text-[#ffe16d]" />
                <span>Call Now: 07955 266 077</span>
              </a>
              <Link className="flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors" href="/#contact">
                Request Online Callback
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-6 text-[#dce1ff] text-sm">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#ffe16d]" /> 20–35 Min Dispatch
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#1b61ff]" /> Card Paid on Site
              </span>
            </div>
          </div>
        </section>
      </main>
      <LocationFooter />
    </>
  );
}
