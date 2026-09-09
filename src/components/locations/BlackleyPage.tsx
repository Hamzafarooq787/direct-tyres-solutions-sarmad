import Image from "next/image";
import Link from "next/link";
import {
  Star,
  PhoneCall,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  ChevronDown,
  Gauge,
  Wrench,
  Unlock,
  Truck,
  Search,
} from "lucide-react";
import LocationHeader from "./LocationHeader";
import LocationFooter from "./LocationFooter";

const stars = [0, 1, 2, 3, 4];

export default function BlackleyPage() {
  return (
    <>
      <LocationHeader currentSlug="blackley" />
      <main className="w-full pt-20 bg-[#f7f9fb]">
        {/* 1. HERO — diagonal navy/white split */}
        <section className="relative w-full overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[#0b1e3d] [clip-path:polygon(0_0,100%_0,100%_72%,0_92%)] md:[clip-path:polygon(0_0,62%_0,45%_100%,0_100%)]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-10 pb-16 lg:pt-14 lg:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center">
              <div className="lg:col-span-7 flex flex-col gap-6 text-white z-10">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffe16d] animate-pulse" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#dce1ff]">Blackley Fast Hub &middot; Live Fleet On-Call</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-md">
                    <div className="flex items-center text-[#705d00]">
                      {stars.map((i) => (
                        <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-[#191c1e]">4.9</span>
                    <span className="text-[11px] text-[#44474e] uppercase">500+ Reviews</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#ffe16d]">North Manchester Fast Response</span>
                  <h1 className="text-[36px] leading-[44px] lg:text-[54px] lg:leading-[62px] font-extrabold tracking-tight text-white">
                    24/7 Mobile Tyre Fitting in Blackley
                  </h1>
                  <p className="text-lg text-[#dce1ff] max-w-xl leading-relaxed">
                    Emergency roadside &amp; doorstep mobile tyre replacement across Blackley within 20–35 minutes. Rapid roadside vans equipped for all passenger and fleet tyres.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#1b61ff] hover:bg-[#004ad2] text-white font-bold shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                    href="tel:07955266077"
                  >
                    <PhoneCall className="h-[22px] w-[22px] text-[#ffe16d]" fill="currentColor" strokeWidth={0} />
                    <span>Call Now: 07955 266 077</span>
                  </a>
                  <Link
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-[#0b1e3d] hover:bg-[#f2f4f6] font-bold shadow-md transition-all"
                    href="/#contact"
                  >
                    <span>Get a Quote</span>
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-4 max-w-lg">
                  {[
                    ["20–35m", "Avg. Blackley Arrival"],
                    ["365 Days", "Round-The-Clock"],
                    ["No Depot", "Fitted At Your Kerb"],
                  ].map(([v, l]) => (
                    <div key={l} className="p-3 rounded-xl bg-white/10 backdrop-blur-sm flex flex-col">
                      <span className="text-[22px] leading-[28px] font-bold text-[#ffe16d]">{v}</span>
                      <span className="text-[11px] text-[#dce1ff] uppercase">{l}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="relative w-full h-80 sm:h-96 lg:h-[460px]">
                    <Image
                      src="/hero-section-images-936x527.webp"
                      alt="Direct Tyre Solutions mobile service van with open doors in Blackley"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3d]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0b1e3d]/90 backdrop-blur-md flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#1b61ff] flex items-center justify-center text-white">
                        <Truck className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Unit 4 Active in M9</p>
                        <p className="text-[11px] text-[#dce1ff]">Patrolling Victoria Ave Corridor</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-[#c9a900] text-[#221b00] text-[11px] font-bold uppercase tracking-wider">Dispatched</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. LOCAL INTRO */}
        <section className="w-full bg-[#f7f9fb] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white">
                  <div className="relative w-full h-72 sm:h-96">
                    <Image
                      src="/gallery-home-callout.webp"
                      alt="Direct Tyre Solutions mobile van parked on residential avenue in Blackley"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-[#0b1e3d]/85 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-[#ffe16d]" />
                    Residential Kerbside Fitting &middot; Blackley M9
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 flex flex-col gap-5 lg:pl-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6e8ea] w-fit">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#004ad2]">Local Blackley Geography</span>
                </div>
                <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-[#191c1e]">
                  Navigating Blackley&rsquo;s Steep Avenues &amp; Commuter Corridors
                </h2>
                <p className="text-lg text-[#44474e] leading-relaxed">
                  From the bustling Rochdale Road (A664) commuter artery down through Victoria Avenue and the hilly gradients bordering Boggart Hole Clough, Blackley motorists face unique road challenges. Uneven residential camber, steep kerbs along Plant Hill Road, and heavy daily transit into Manchester lead to sudden pinch flats and sidewall impact blowouts. Instead of risking wheel rim damage or waiting hours for a tow to distant industrial estate tyre depots, Blackley drivers rely on Direct Tyre Solutions. Our heavy-duty mobile fitting rigs bring commercial-calibre pneumatic tooling and digital balancing directly to your home drive, roadside bay, or office car park in 20–35 minutes.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {["Steep Driveway Safe Leveling", "Rochdale Rd Rapid Layby Dispatch", "All Major Car & Van Brands", "On-the-Spot Card Processing"].map((t) => (
                    <div key={t} className="flex items-center gap-3">
                      <CheckCircle2 className="h-[22px] w-[22px] text-[#004ad2] shrink-0" />
                      <span className="text-base font-semibold text-[#191c1e]">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES BENTO GRID */}
        <section className="w-full bg-[#f2f4f6] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className="flex flex-col gap-2 max-w-2xl">
                <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Comprehensive Rapid Capabilities</span>
                <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-[#191c1e]">
                  Specialized Mobile Tyre Services in Blackley
                </h2>
                <p className="text-base text-[#44474e]">Each van is outfitted with precision demounting jaws, computer balancers, and emergency puncture vulcanising rigs.</p>
              </div>
              <a className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0b1e3d] text-white hover:bg-[#1b61ff] transition-all w-fit shadow-md" href="tel:07955266077">
                <span>Book Instant Attendance</span>
                <PhoneCall className="h-[18px] w-[18px]" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col p-8">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#004ad2]">Flagship Doorstep Replacement</span>
                    <span className="text-xs text-[#44474e] font-semibold">Standard &amp; Run-Flat</span>
                  </div>
                  <h3 className="text-[30px] leading-[38px] font-bold text-[#191c1e]">Mobile Tyre Fitting in Blackley</h3>
                  <p className="text-base text-[#44474e] leading-relaxed">
                    Complete wheel-off, mount, laser-balanced replacement delivered directly to your driveway, workplace car park, or stranded roadside location across Blackley. We stock all major profile dimensions from budget touring options to premium Michelin, Pirelli, and Goodyear rubbers ready for rapid deployment.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 mt-6 bg-[#f2f4f6] p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-[#191c1e]">
                    <ShieldCheck className="h-5 w-5 text-[#004ad2]" />
                    <span className="text-sm font-semibold">New Valves &amp; Casing Disposal Included</span>
                  </div>
                  <a className="text-sm font-bold text-[#004ad2] hover:text-[#0b1e3d] transition-colors flex items-center gap-1" href="tel:07955266077">
                    Dispatch Fitting Unit &rarr;
                  </a>
                </div>
              </div>
              <div className="lg:col-span-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col p-6">
                <div className="w-10 h-10 rounded-xl bg-[#dce1ff] flex items-center justify-center text-[#004ad2] mb-4">
                  <Gauge className="h-6 w-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#004ad2]">Vibration Elimination</span>
                <h3 className="text-[22px] leading-[28px] font-bold text-[#191c1e] mt-1">Wheel Balancing in Blackley</h3>
                <p className="text-sm text-[#44474e] leading-relaxed mt-1">
                  Experiencing steering shake over 50mph along the A664? Our computerized mobile spin balancers calibrate wheel resonance at your residence, protecting your suspension components and preserving even tread wear.
                </p>
                <a className="inline-flex items-center gap-1 text-sm font-bold text-[#004ad2] hover:underline mt-4" href="tel:07955266077">
                  Book Balance Check &rarr;
                </a>
              </div>
              <div className="lg:col-span-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col p-7">
                <div className="w-10 h-10 rounded-xl bg-[#dce1ff] flex items-center justify-center text-[#004ad2] mb-4">
                  <Wrench className="h-6 w-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#004ad2]">Tread Salvage &amp; Safety</span>
                <h3 className="text-[22px] leading-[28px] font-bold text-[#191c1e] mt-1">Roadside Puncture Repairs in Blackley</h3>
                <p className="text-sm text-[#44474e] leading-relaxed mt-1">
                  Picked up a screw near Boggart Hole Clough or Victoria Avenue retail park? If damage falls within the central 70% tread line, our technicians perform permanent, airtight vulcanised combi-plug repairs on site, saving you the price of a brand new tyre.
                </p>
                <a className="inline-flex items-center gap-1 text-sm font-bold text-[#004ad2] hover:underline mt-4" href="tel:07955266077">
                  Request Repair Assessment &rarr;
                </a>
              </div>
              <div className="lg:col-span-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col p-7">
                <div className="w-10 h-10 rounded-xl bg-[#dce1ff] flex items-center justify-center text-[#004ad2] mb-4">
                  <Unlock className="h-6 w-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#004ad2]">Precision Tooling</span>
                <h3 className="text-[22px] leading-[28px] font-bold text-[#191c1e] mt-1">Locking Nut Removal in Blackley</h3>
                <p className="text-sm text-[#44474e] leading-relaxed mt-1">
                  Lost your wheel nut key or facing overtightened, sheared locking lugs from a previous workshop? We carry specialized inverted-flute extractors capable of releasing stubborn or stripped locks without damaging delicate alloy wheel finishes.
                </p>
                <a className="inline-flex items-center gap-1 text-sm font-bold text-[#004ad2] hover:underline mt-4" href="tel:07955266077">
                  Unlock Lug Bolts &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="w-full bg-[#f7f9fb] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 flex flex-col items-center gap-3">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Frictionless 3-Step Process</span>
              <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-[#191c1e]">
                Back on the Road in Blackley in 3 Steps
              </h2>
              <p className="text-base text-[#44474e]">No recovery flatbeds. No waiting days for depot slots. We come straight to where your car sits.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { n: "01", icon: PhoneCall, title: "Call or Send Reg & Location", body: "Ring our dispatch hotline with your vehicle registration plate and your location anywhere around Blackley or North Manchester. We match exact tyre specifications instantly.", note: "Instant Price Quote Given" },
                { n: "02", icon: Truck, title: "Rapid 20–35 Min Arrival", body: "Our closest mobile unit turns on live tracking and routes down the A664 corridor straight to your roadside curb or driveway with your new tyre inflated on board.", note: "Real-time ETA WhatsApp Option" },
                { n: "03", icon: CheckCircle2, title: "Fitted, Balanced & On Your Way", body: "In 20 minutes our technician completes unmounting, valve replacement, high-speed digital wheel balancing, and torque torquing. Tap to pay via card.", note: "Contactless Payment Terminals" },
              ].map((s) => (
                <div key={s.n} className="bg-white p-8 rounded-2xl shadow-md flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-xl bg-[#0b1e3d] text-white flex items-center justify-center font-bold">{s.n}</span>
                    <s.icon className="h-7 w-7 text-[#004ad2]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[18px] leading-[24px] font-bold text-[#191c1e]">{s.title}</h3>
                    <p className="text-sm text-[#44474e] leading-relaxed">{s.body}</p>
                  </div>
                  <div className="pt-2 mt-auto">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#004ad2]">{s.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. COVERAGE / NEARBY AREAS */}
        <section className="w-full bg-[#0b1e3d] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="flex flex-col gap-2 max-w-xl">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#ffe16d]">Live Sector Coverage</span>
                <h2 className="text-[30px] leading-[38px] font-bold text-white">Active Mobile Fleet Covering Blackley &amp; Surrounds</h2>
                <p className="text-sm text-[#dce1ff] leading-relaxed">Our multi-van fleet continuously patrols the North Manchester orbital network, enabling unmatched under-35 minute dispatch response times.</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {["Cheetham Hill", "Moston", "Middleton"].map((a) => (
                  <span key={a} className="px-4 py-2.5 rounded-full bg-white/10 text-white text-sm font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1b61ff]" />
                    {a}
                  </span>
                ))}
                <span className="px-4 py-2.5 rounded-full bg-[#1b61ff] text-white text-sm font-bold flex items-center gap-2 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#ffe16d] animate-pulse" />
                  Higher Blackley (Base Hub)
                </span>
                <span className="px-4 py-2.5 rounded-full bg-white/10 text-white text-sm font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1b61ff]" />
                  Crumpsall &amp; M8
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <section className="w-full bg-[#f7f9fb] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Verified Local Motorist Feedback</span>
                <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-[#191c1e]">Trusted Across Blackley&rsquo;s Roads</h2>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f2f4f6]">
                <Star className="h-5 w-5 text-[#c9a900]" fill="currentColor" strokeWidth={0} />
                <span className="text-sm font-bold text-[#191c1e]">4.9 / 5.0 Rating on Google Reviews</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { quote: "Blew a front tyre on Victoria Avenue right before evening school pickup. Direct Tyre Solutions had a van out in 22 minutes flat, fitted a matching Michelin tyre, and balanced it in the driving rain without any hassle.", name: "David H.", place: "Victoria Ave, Blackley · Audi A4" },
                { quote: "Our delivery transit van caught a nasty jagged pothole along Rochdale Road during morning commuter gridlock. The technician brought the exact reinforced commercial tyre and had us rolling within half an hour.", name: "Mark K.", place: "Rochdale Rd (A664) · Ford Transit Fleet" },
                { quote: "Woke up on Plant Hill Road with a flat and a badly rounded locking nut from a previous garage. They safely extracted the stubborn bolt without scratching the gloss alloys, then fitted the spare. Exceptional service.", name: "Sarah R.", place: "Plant Hill Rd, Higher Blackley · BMW 1 Series" },
              ].map((r) => (
                <div key={r.name} className="bg-white p-7 rounded-2xl shadow-md flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex text-[#705d00]">
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

        {/* 7. PRICING / INSTANT QUOTE */}
        <section className="w-full bg-[#f2f4f6] py-12" id="quick-quote">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="w-full bg-[#0b1e3d] rounded-2xl shadow-2xl p-8 sm:p-12 text-white relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#1b61ff]/20 blur-3xl pointer-events-none" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 w-fit">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#dce1ff]">No Hidden Callout Gimmicks</span>
                  </div>
                  <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white">
                    Get an instant estimate for tyre fitting in Blackley
                  </h2>
                  <p className="text-base text-[#dce1ff] max-w-lg leading-relaxed">
                    Transparent roadside pricing. Call our dispatcher with your vehicle registration or tyre size below to receive guaranteed upfront pricing before technician dispatch.
                  </p>
                </div>
                <div className="lg:col-span-5 bg-white text-[#191c1e] p-6 rounded-xl shadow-xl flex flex-col gap-4">
                  <span className="text-sm font-bold text-[#191c1e] uppercase tracking-wider">Fast Reg Lookup</span>
                  <div className="flex items-center gap-2 rounded-lg border-2 border-[#c5c6cf] px-3 py-2">
                    <Search className="h-5 w-5 text-[#75777f]" />
                    <span className="text-sm text-[#75777f]">e.g. MV69 ABC</span>
                  </div>
                  <a className="w-full py-3.5 px-4 rounded-lg bg-[#1b61ff] hover:bg-[#004ad2] text-white font-bold flex items-center justify-center gap-2 transition-all shadow-md" href="tel:07955266077">
                    <span>Find Tyres &amp; Blackley Arrival</span>
                  </a>
                  <p className="text-[11px] text-center text-[#44474e] uppercase tracking-wider">
                    Or call dispatcher directly: <a className="text-[#004ad2] font-bold hover:underline" href="tel:07955266077">07955 266 077</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="w-full bg-[#f7f9fb] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 flex flex-col items-center gap-2">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Frequently Asked Questions</span>
              <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-[#191c1e]">Blackley Mobile Tyre Support FAQ</h2>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { q: "How quickly can you reach me if I break down on Rochdale Road?", a: "Blackley sits directly on our North Manchester dispatch route. Vans patrolling the A664 corridor can typically reach a breakdown on Rochdale Road, Victoria Avenue, or Plant Hill Road within 20–35 minutes, even at peak commuter times." },
                { q: "Can you fit tyres on steep driveways around Higher Blackley?", a: "Yes. Our technicians carry low-profile hydraulic jacks and wheel chocks specifically for the steep camber and kerbs common around Higher Blackley and Plant Hill Road, so your vehicle is safely secured on a gradient before any work begins." },
                { q: "Do you carry tyres suitable for commercial vans and fleet vehicles?", a: "Absolutely. Alongside passenger car tyres, our mobile units stock reinforced commercial-spec rubber for transit vans and light commercial fleets operating along the Rochdale Road wholesale and industrial corridors." },
                { q: "What if my locking wheel nut key is missing or the bolt is rounded?", a: "Our vans carry specialized inverted-flute extraction tooling that safely removes stripped, overtightened, or keyless locking nuts without damaging your alloy wheel finish, right there on your driveway or roadside." },
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
        <section className="w-full bg-[#f2f4f6] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
                <div>
                  <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Patrol Coverage Zone</span>
                  <h2 className="text-[30px] leading-[38px] tracking-[-0.015em] font-bold text-[#191c1e] mt-1">
                    Blackley &amp; Victoria Avenue Service Corridor
                  </h2>
                  <p className="text-base text-[#44474e]">Live mobile units monitoring Rochdale Road (A664), Victoria Avenue, and connecting M8/M9 roadways.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-[#1b61ff] inline-block" />
                    <span className="text-sm text-[#191c1e]">Average Reach: 20–35 Mins</span>
                  </div>
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
                      Blackley Centre
                    </div>
                  </div>
                  <div className="absolute top-12 left-1/3 flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffe16d]" />
                    <div className="mt-1 px-2 py-0.5 rounded bg-[#0b1e3d] text-white text-[11px] font-bold uppercase opacity-80">Boggart Hole Clough</div>
                  </div>
                  <div className="absolute bottom-12 right-1/3 flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#dce1ff]" />
                    <div className="mt-1 px-2 py-0.5 rounded bg-[#0b1e3d] text-white text-[11px] font-bold uppercase opacity-80">Plant Hill</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CLOSING CTA */}
        <section className="w-full bg-[#0b1e3d] text-white py-16 md:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b61ff]/30 text-[#dce1ff] text-[11px] font-bold uppercase tracking-[0.06em] mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffe16d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffe16d]" />
              </span>
              On-Call Dispatchers Ready
            </span>
            <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white max-w-3xl mx-auto">
              Stuck with a flat tyre in Blackley? We&rsquo;re on our way.
            </h2>
            <p className="text-lg text-[#dce1ff] max-w-2xl mx-auto mt-2 leading-relaxed">
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
          </div>
        </section>
      </main>
      <LocationFooter />
    </>
  );
}
