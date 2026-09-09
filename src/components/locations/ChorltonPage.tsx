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
  Zap,
  Navigation,
  Calculator,
} from "lucide-react";
import LocationHeader from "./LocationHeader";
import LocationFooter from "./LocationFooter";

const stars = [0, 1, 2, 3, 4];

export default function ChorltonPage() {
  return (
    <>
      <LocationHeader currentSlug="chorlton" />
      <main className="w-full pt-20 bg-[#f7f9fb]">
        {/* Top status bar */}
        <div className="w-full bg-[#0b1e3d] text-white py-2 px-4 md:px-6">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffe16d] animate-ping" />
              <span className="text-[#ffe16d] font-bold tracking-wider uppercase">Chorlton Rapid Unit Online</span>
              <span className="text-[#dce1ff] hidden sm:inline">&bull; Patrolling M60 J7 / Barlow Moor Rd corridor</span>
            </div>
            <div className="flex items-center gap-4 text-[#dce1ff]">
              <span className="flex items-center gap-1.5">Avg dispatch: 24 mins</span>
              <span className="hidden md:inline text-[#dce1ff]">Zero Callout Surcharge During Daylight Hours</span>
            </div>
          </div>
        </div>

        {/* 1. HERO — artistic photo collage */}
        <section className="relative w-full bg-[#f2f4f6] py-16 md:py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 flex flex-col gap-4 z-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1b61ff] animate-pulse" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0b1e3d]">Chorlton-cum-Hardy Coverage</span>
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-sm">
                    <div className="flex text-[#705d00]">
                      {stars.map((i) => (
                        <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-[#191c1e]">4.9</span>
                    <span className="text-sm text-[#44474e]">(500+ Local Reviews)</span>
                  </div>
                </div>
                <h1 className="text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-[#0b1e3d] tracking-tight">
                  24/7 Mobile Tyre Fitting in <span className="text-[#1b61ff] underline decoration-[#c9a900] decoration-4 underline-offset-8">Chorlton</span>
                </h1>
                <p className="text-lg text-[#44474e] max-w-xl">
                  Emergency roadside &amp; driveway mobile tyre replacement across Chorlton-cum-Hardy — 20–35 min arrival. Equipped for luxury sedans, EV whisper-drive specifications, and commercial vans.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                  <a
                    className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-[#1b61ff] hover:bg-[#004ad2] text-white font-bold shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                    href="tel:07955266077"
                  >
                    <PhoneCall className="h-[22px] w-[22px] text-[#ffe16d]" />
                    <span>Call Now: 07955 266 077</span>
                  </a>
                  <Link
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#f2f4f6] text-[#0b1e3d] font-bold shadow-sm hover:shadow-md transition-all"
                    href="/#contact"
                  >
                    <Calculator className="h-5 w-5 text-[#1b61ff]" />
                    <span>Get a Quote</span>
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {[
                    ["20–35m", "Chorlton ETA", "text-[#0b1e3d]"],
                    ["100%", "Mobile Vans", "text-[#1b61ff]"],
                    ["365 Days", "Day & Night", "text-[#705d00]"],
                  ].map(([v, l, c]) => (
                    <div key={l as string} className="flex flex-col">
                      <span className={`text-[22px] leading-[28px] font-bold ${c}`}>{v}</span>
                      <span className="text-[11px] text-[#44474e] uppercase">{l}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-6 relative">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11]">
                  <div className="absolute top-0 left-0 w-3/4 h-[82%] rounded-2xl overflow-hidden shadow-xl bg-[#e6e8ea] z-10">
                    <Image
                      src="/hero-section-images-936x527.webp"
                      alt="Direct Tyre Solutions certified mobile tyre fitter working on alloy rim in Chorlton"
                      fill
                      priority
                      sizes="(max-width: 1024px) 75vw, 30vw"
                      className="object-cover"
                    />
                    <div className="absolute bottom-3 left-3 bg-[#0b1e3d]/85 backdrop-blur-md px-3 py-1.5 rounded-lg text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#ffe16d] animate-ping" />
                      <span className="text-[11px] font-bold uppercase">Rapid Response Van Unit 04</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-3/5 h-[72%] rounded-2xl overflow-hidden shadow-2xl bg-[#e6e8ea] z-20">
                    <Image
                      src="/gallery-precision-care.webp"
                      alt="Mobile tyre fitting workshop van parked in a suburban street"
                      fill
                      sizes="(max-width: 1024px) 60vw, 24vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-[#c9a900] text-[#221b00] px-4 py-3 rounded-2xl shadow-lg z-30 hidden sm:flex flex-col items-center rotate-3">
                    <span className="text-[22px] leading-[28px] font-black leading-none">24/7</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider">No Recovery Wait</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. LOCAL INTRO */}
        <section className="w-full py-12 bg-[#f7f9fb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md bg-[#eceef0] relative h-72 md:h-80">
                  <Image
                    src="/gallery-evening-callout.webp"
                    alt="Mobile tyre fitting van at dusk ready for roadside dispatch in Chorlton"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3d]/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-white text-sm font-semibold">Low-Noise Driveway Servicing Across M21</span>
                  </div>
                </div>
                <div className="lg:col-span-7 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-widest">Chorlton-cum-Hardy Community Support</span>
                  </div>
                  <h2 className="text-[30px] leading-[38px] font-bold text-[#0b1e3d]">
                    Quiet Driveways, Busy Streets &amp; Instant Roadside Rescue
                  </h2>
                  <p className="text-base text-[#44474e] leading-relaxed">
                    From the vibrant independent quarter around Beech Road and the busy commuting artery of Barlow Moor Road to peaceful visitor parking near Chorlton Water Park, Direct Tyre Solutions keeps Chorlton rolling smoothly. Chorlton-cum-Hardy drivers increasingly trust our specialized EV and hybrid mobile fitting capabilities, engineered to accommodate heavy battery curb weights and acoustic foam tyres. Whether you encounter a sudden puncture on a narrow residential side street or need scheduled replacement on your home driveway, our fully self-contained vans deploy whisper-quiet pneumatic tools to avoid disturbing local neighbors.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Beech Road & Chorlton Green", "Barlow Moor Road Corridor", "Chorlton Water Park & Mersey Bank", "M21 EV Low-Decibel Fitting"].map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-[#eceef0] text-[#0b1e3d] text-sm font-semibold">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES GRID */}
        <section className="w-full py-16 md:py-20 bg-[#f2f4f6]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Chorlton Mobile Capabilities</span>
                <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#0b1e3d] mt-1">Full Workshop Capabilities Brought Directly To You</h2>
              </div>
              <p className="text-sm text-[#44474e] max-w-md">Every mobile unit carries industrial hydraulic jacks, high-resolution laser balancers, and fresh run-flat inventory for all vehicles.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Disc, tag: "Fast Dispatch", title: "Mobile Tyre Fitting in Chorlton", body: "Brand-new premium, mid-range, and budget tyres fitted at your home, workplace, or roadside across Chorlton with zero garage hassle.", cta: "Book Mobile Fitter" },
                { icon: Gauge, tag: "Laser Calibrated", title: "Precision Digital Wheel Balancing", body: "Eliminate steering wheel wobble and premature suspension wear with electronic road-force balancing carried out on-site.", cta: "Check Balance" },
                { icon: Wrench, tag: "BS AU 159 Compliant", title: "Roadside Puncture Repairs", body: "Safe, certified puncture repairs using internal combi-plug units when the tyre tread meets safety criteria, saving you replacement cost.", cta: "Request Puncture Fix" },
                { icon: Unlock, tag: "Damage-Free", title: "Locking Wheel Nut Extraction", body: "Lost key or rounded lug nut? Our reverse-threaded impact extraction tools safely remove damaged locking nuts without alloy scarring.", cta: "Unlock Wheel Now" },
              ].map((s) => (
                <div key={s.title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col p-6 group">
                  <div className="w-10 h-10 rounded-xl bg-[#dce1ff] flex items-center justify-center text-[#004ad2] mb-4">
                    <s.icon className="h-[22px] w-[22px]" />
                  </div>
                  <span className="text-[11px] font-bold uppercase text-[#1b61ff] mb-1">{s.tag}</span>
                  <h3 className="text-[18px] leading-[24px] font-bold text-[#0b1e3d] group-hover:text-[#1b61ff] transition-colors">{s.title}</h3>
                  <p className="text-sm text-[#44474e] mt-2">{s.body}</p>
                  <a className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1b61ff] hover:underline mt-4" href="tel:07955266077">
                    {s.cta} &rarr;
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="w-full py-16 md:py-20 bg-[#f7f9fb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Effortless Roadside &amp; Driveway Protocol</span>
              <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#0b1e3d] mt-1">3 Simple Steps to Get You Back On The Road</h2>
              <p className="text-base text-[#44474e] mt-2">Estimated dispatch to Chorlton-cum-Hardy is currently <strong>20–35 minutes in Chorlton</strong>.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { n: "01", title: "Call Or Share Location", body: "Call our Chorlton dispatcher with your tyre size or car registration. Stuck without tyre knowledge? We match OEM specs immediately.", note: "Instant Quote & Tyre Lock", icon: CheckCircle2 },
                { n: "02", title: "20–35m Chorlton Dispatch", body: "A liveried Mercedes Sprinter mobile fitting unit heads to your location anywhere in M21 with live GPS technician coordination.", note: "Live Arrival Tracking", icon: Navigation },
                { n: "03", title: "Fitted, Balanced & Done", body: "Our certified technician completes tyre mounting, high-precision laser balancing, and eco-disposal of your old casing right on the spot.", note: "Contactless Card Pay After Work", icon: ShieldCheck },
              ].map((s) => (
                <div key={s.n} className="bg-white p-8 rounded-2xl shadow-sm relative flex flex-col items-start">
                  <div className="w-14 h-14 rounded-2xl bg-[#dce1ff] flex items-center justify-center text-[#1b61ff] mb-6">
                    <span className="text-[22px] leading-[28px] font-black">{s.n}</span>
                  </div>
                  <h3 className="text-[18px] leading-[24px] font-bold text-[#0b1e3d]">{s.title}</h3>
                  <p className="text-sm text-[#44474e] mt-2">{s.body}</p>
                  <div className="mt-4 pt-3 w-full bg-[#f2f4f6] px-3 py-2 rounded-lg flex items-center gap-2">
                    <s.icon className="h-[18px] w-[18px] text-[#004ad2]" />
                    <span className="text-[11px] font-semibold text-[#0b1e3d]">{s.note}</span>
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
              <div className="max-w-xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ffe16d]">South Manchester Rapid Ring</span>
                <h2 className="mt-1 text-[30px] leading-[38px] font-bold text-white">Continuous Roadside Patrol Surrounding Chorlton</h2>
                <p className="text-base text-[#dce1ff] mt-2">In addition to full coverage throughout Chorlton-cum-Hardy (M21), our fleet guarantees prompt 20–35 min emergency callout to adjoining South Manchester sectors.</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {["Didsbury (M20)", "Whalley Range (M16)", "Stretford (M32)", "Manchester City Centre"].map((a) => (
                  <span key={a} className="px-5 py-3 rounded-full bg-white/10 hover:bg-[#1b61ff] text-white text-sm transition-all shadow-sm flex items-center gap-2">
                    <MapPin className="h-[18px] w-[18px] text-[#ffe16d]" />
                    <span>{a}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <section className="w-full py-16 md:py-20 bg-[#f7f9fb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Chorlton Verified Drivers</span>
              <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#0b1e3d] mt-1">Recommended By Your Neighbours</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { quote: "Punctured a front tyre right on Beech Road on a busy Saturday lunchtime. The van arrived in exactly 22 minutes, navigated tight customer street parking smoothly, and fitted a matching Continental tyre with zero fuss.", name: "Claire T.", place: "Beech Rd, Chorlton" },
                { quote: "Needed two tyres replaced on my Tesla Model Y before an early motorway trip. The technician understood the dedicated EV jacking points and acoustic foam specs perfectly. Couldn't recommend them higher!", name: "Marcus H.", place: "Wilbraham Rd, Chorlton" },
                { quote: "Had a stripped locking wheel nut that another tyre shop refused to touch. Direct Tyre Solutions sent their specialist van out to Chorlton Green and extracted it in 15 minutes without a single scratch to my alloy rim.", name: "David P.", place: "Chorlton Green" },
              ].map((r) => (
                <div key={r.name} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-[#705d00] mb-3">
                      {stars.map((i) => (
                        <Star key={i} className="h-5 w-5" fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="text-base text-[#191c1e] italic">&ldquo;{r.quote}&rdquo;</p>
                  </div>
                  <div className="mt-6 pt-3 bg-[#f2f4f6] px-3 py-2 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="text-sm font-bold text-[#0b1e3d] block">{r.name}</span>
                      <span className="text-[11px] text-[#44474e]">{r.place}</span>
                    </div>
                    <ShieldCheck className="h-5 w-5 text-[#004ad2]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PRICING / INSTANT QUOTE */}
        <section className="w-full py-12 bg-[#f2f4f6]" id="quick-quote">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-[#0b1e3d] rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="absolute right-0 top-0 w-96 h-96 bg-[#1b61ff]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffe16d] text-[11px] font-bold uppercase tracking-wider w-fit">
                    Transparent Chorlton Pricing
                  </span>
                  <h2 className="text-[40px] leading-[48px] font-bold tracking-tight text-white">
                    Get an instant estimate for tyre fitting in Chorlton
                  </h2>
                  <p className="text-base text-[#dce1ff]">
                    No hidden mobile call-out surcharges for standard daytime bookings. All quotes include brand-new rubber valve, electronic balancing, mobile van dispatch to your location, and environmental casing recycling.
                  </p>
                  <div className="grid grid-cols-3 gap-3 pt-2 text-white">
                    {[
                      ["Budget Range", "From £65"],
                      ["Mid-Tier Brands", "From £85"],
                      ["Premium / EV Runflat", "From £115"],
                    ].map(([l, v]) => (
                      <div key={l} className="bg-white/10 p-3 rounded-xl">
                        <span className="text-[11px] text-[#dce1ff] block uppercase">{l}</span>
                        <span className="text-[18px] leading-[24px] font-bold text-[#ffe16d]">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-5 bg-white text-[#191c1e] p-6 rounded-2xl shadow-lg">
                  <h3 className="text-[18px] leading-[24px] font-bold text-[#0b1e3d]">Fast Reg Lookup</h3>
                  <p className="text-sm text-[#44474e] mt-1 mb-4">Enter your registration to check Chorlton inventory status.</p>
                  <a className="w-full py-3 rounded-xl bg-[#1b61ff] hover:bg-[#004ad2] text-white font-bold text-center transition-all shadow-md flex items-center justify-center gap-2" href="tel:07955266077">
                    <PhoneCall className="h-5 w-5" />
                    Instant Phone Quote: 07955 266 077
                  </a>
                  <span className="block text-center text-[11px] text-[#44474e] mt-3">Live operator available 24 hours / 7 days</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="w-full py-16 md:py-20 bg-[#f7f9fb]">
          <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Frequently Asked Questions</span>
              <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#0b1e3d] mt-1">Chorlton Mobile Tyre Queries</h2>
              <p className="text-base text-[#44474e] mt-2">Everything you need to know about mobile fitting in our South Manchester service territory.</p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { q: "Do you carry EV-rated tyres suitable for Tesla, Polestar, and electric vehicles in Chorlton?", a: "Yes. With Chorlton having one of Greater Manchester's highest EV adoption rates, our vans routinely stock noise-reduction acoustic foam tyres (such as Pirelli Elect and Michelin Acoustic) and reinforced XL load-index ratings specifically certified for heavier battery pack weights." },
                { q: "Can you fit tyres on narrow residential streets or permit parking areas around Beech Road?", a: "Yes. Our vans are equipped for tight urban parking and can safely deploy roadside cones and warning beacons on narrow residential streets and permit-parking zones around Beech Road and Chorlton Green without disrupting traffic." },
                { q: "How quickly will a van reach me near Chorlton Water Park?", a: "Chorlton Water Park sits well within our 20–35 minute standard response window from our South Manchester dispatch route, with live GPS coordination keeping you updated on the exact arrival time." },
                { q: "What payment methods do your technicians accept?", a: "Every van carries a secure contactless card terminal accepting Visa, Mastercard, Apple Pay, and Google Pay, so you can pay on the spot once your tyre is fitted, balanced, and safety-checked." },
              ].map((faq) => (
                <div key={faq.q} className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="w-full flex items-center justify-between text-left gap-4 text-[18px] leading-[24px] font-bold text-[#0b1e3d] cursor-pointer">
                      <span>{faq.q}</span>
                      <ChevronDown className="h-6 w-6 text-[#1b61ff] transition-transform duration-300 group-open:rotate-180 shrink-0" />
                    </summary>
                    <div className="mt-3 pt-3 text-base text-[#44474e] leading-relaxed">{faq.a}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. LOCAL MAP */}
        <section className="w-full bg-[#f2f4f6] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
                <div>
                  <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Geographic Dispatch Zone</span>
                  <h2 className="text-[30px] leading-[38px] font-bold text-[#0b1e3d]">Chorlton Response Radius</h2>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#44474e]">
                  <MapPin className="h-5 w-5 text-[#004ad2]" />
                  <span>M21 Postcode &amp; Bordering Commuter Links</span>
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
                      Chorlton Green
                    </div>
                  </div>
                  <div className="absolute top-12 left-1/3 flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffe16d]" />
                    <div className="mt-1 px-2 py-0.5 rounded bg-[#0b1e3d] text-white text-[11px] font-bold uppercase opacity-80">Beech Road</div>
                  </div>
                  <div className="absolute bottom-12 right-1/3 flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#dce1ff]" />
                    <div className="mt-1 px-2 py-0.5 rounded bg-[#0b1e3d] text-white text-[11px] font-bold uppercase opacity-80">Water Park</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CLOSING CTA */}
        <section className="w-full py-16 md:py-20 bg-[#0b1e3d] text-white relative overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffe16d] mb-4">
              <Zap className="h-4 w-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Rapid Mobilisation Guaranteed</span>
            </div>
            <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white max-w-3xl">
              Stuck with a tyre in Chorlton? We&rsquo;re on our way.
            </h2>
            <p className="mt-4 text-lg text-[#dce1ff] max-w-xl">
              Roadside blowout, puncture, or replacement on your driveway — call our 24/7 dispatch desk right now.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                className="flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-[#1b61ff] hover:bg-[#004ad2] text-white text-lg font-bold shadow-[0_10px_28px_rgba(27,97,255,0.45)] transition-all hover:scale-105 active:scale-95"
                href="tel:07955266077"
              >
                <PhoneCall className="h-[26px] w-[26px] text-[#ffe16d]" fill="currentColor" strokeWidth={0} />
                <span>Call Now: 07955 266 077</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <LocationFooter />
    </>
  );
}
