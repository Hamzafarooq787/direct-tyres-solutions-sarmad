import Image from "next/image";
import Link from "next/link";
import {
  Star,
  PhoneCall,
  MapPin,
  ShieldCheck,
  ChevronDown,
  Radar,
} from "lucide-react";
import LocationHeader from "./LocationHeader";
import LocationFooter from "./LocationFooter";

const stars = [0, 1, 2, 3, 4];

export default function LongsightPage() {
  return (
    <>
      <LocationHeader currentSlug="longsight" />
      <main className="w-full pt-20 bg-[#f7f9fb]">
        {/* 1. HERO — compact centered w/ photo banner */}
        <section className="w-full bg-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6e8ea]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1b61ff] animate-ping" />
                <span className="text-[11px] uppercase tracking-wider text-[#004ad2]">Vans Active in M12 / M13 / Longsight</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b1e3d] text-white">
                <Star className="h-[18px] w-[18px] text-[#ffe16d]" fill="currentColor" strokeWidth={0} />
                <span className="text-sm font-bold">4.9</span>
                <span className="text-xs text-[#dce1ff]">500+ Local Reviews</span>
              </div>
            </div>
            <h1 className="text-[28px] leading-[36px] md:text-[56px] md:leading-[64px] font-extrabold text-[#000516] max-w-4xl tracking-tight mb-2">
              24/7 Mobile Tyre Fitting in Longsight
            </h1>
            <p className="text-lg text-[#44474e] max-w-2xl mb-6 leading-relaxed">
              Rapid on-demand mobile tyre fitting to your doorstep or roadside in Longsight within 20–35 minutes. No tow trucks, no garage queues.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-8">
              <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-[#1b61ff] text-white font-bold shadow-lg hover:bg-[#004ad2] active:scale-98 transition-all" href="tel:07955266077">
                <PhoneCall className="h-5 w-5 text-[#ffe16d]" />
                Call Now: 07955 266 077
              </a>
              <Link className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#eceef0] text-[#0b1e3d] font-semibold shadow-md hover:bg-[#e0e3e5] transition-all" href="/#contact">
                Get a Quote
              </Link>
            </div>
            <div className="w-full relative rounded-2xl overflow-hidden shadow-xl bg-[#0b1e3d] max-h-[340px] md:max-h-[420px] h-[340px] md:h-[420px]">
              <Image
                src="/hero-section-images-936x527.webp"
                alt="Direct Tyre Solutions mobile response workshop deployed in Longsight residential area"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3d]/85 via-transparent to-transparent flex items-end p-4 md:p-6">
                <div className="flex flex-wrap items-center justify-between w-full gap-4 text-left">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-7 w-7 text-[#ffe16d]" />
                    <div>
                      <p className="text-sm font-bold text-white">Longsight Dedicated Fast Van Unit</p>
                      <p className="text-xs text-[#dce1ff]">Serving Stockport Road, Kirkmanshulme, &amp; North Road corridors</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-xl text-white">
                    <span className="text-[11px] uppercase tracking-widest text-[#ffe16d]">Average Arrival:</span>
                    <span className="text-sm font-bold">24 Mins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. LOCAL INTRO */}
        <section className="w-full py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 text-[#004ad2] uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#004ad2]" />
                  <span className="text-[11px] font-bold">Local Ground Knowledge &bull; South Manchester</span>
                </div>
                <h2 className="text-[30px] leading-[38px] font-bold text-[#0b1e3d] tracking-tight">
                  Urgent Tyre Help Where Longsight Drivers Need It Most
                </h2>
                <p className="text-base text-[#44474e] leading-relaxed">
                  Longsight is anchored by the relentless energy of Stockport Road (A6), vibrant market crowds, and closely packed Victorian terraced streets where finding roadside parking or recovery clearance is a daily struggle. A blown puncture or sidewall gash on a congested Friday evening can paralyze your day. Instead of losing hours waiting for recovery trucks to tow you to an off-site garage, Direct Tyre Solutions dispatches high-spec Mercedes mobile service workshops straight to your exact location. Whether stranded near Longsight Market, parked off Dickenson Road, or halted near North Road, our vans bring precision mounting, high-speed digital balancers, and full new tyre inventories directly to your wheel arch.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                  {[
                    ["20-35m", "Rapid Local Dispatch"],
                    ["24/7/365", "Night & Day Readiness"],
                    ["100%", "Roadside Fitted & Balanced"],
                  ].map(([v, l]) => (
                    <div key={l} className="p-3 rounded-xl bg-[#f2f4f6] flex flex-col">
                      <span className="text-[18px] leading-[24px] font-bold text-[#004ad2]">{v}</span>
                      <span className="text-sm text-[#44474e]">{l}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden shadow-lg bg-[#eceef0] relative h-80 lg:h-96">
                  <Image
                    src="/gallery-evening-callout.webp"
                    alt="Commercial Mercedes mobile tyre workshop van operating on South Manchester road"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#0b1e3d] text-white p-3 rounded-xl shadow-xl flex items-center gap-3">
                  <MapPin className="h-8 w-8 text-[#ffe16d]" />
                  <div>
                    <p className="text-sm font-bold">Stockport Rd Fleet Base</p>
                    <p className="text-xs text-[#dce1ff]">Fully Equipped Van #04 On Standby</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES — vertical numbered list */}
        <section className="w-full py-16 md:py-20 bg-[#f7f9fb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-widest">Field Capabilities</span>
                <h2 className="text-[30px] leading-[38px] font-bold text-[#0b1e3d] tracking-tight mt-1">Mobile Tyre Services Across Longsight</h2>
              </div>
              <p className="text-base text-[#44474e] max-w-md">Commercial machinery installed inside each Mercedes mobile workshop allows all jobs to be completed right where you stand.</p>
            </div>
            <div className="flex flex-col gap-6">
              {[
                { image: "/mobile-tyre-fitting-3-1536x1024.webp", n: "01", tag: "Most Requested", title: "Mobile Tyre Fitting in Longsight", body: "We bring brand new premium, mid-range, or budget tyres directly to your home, office car park, or roadside breakdown location. Complete with rim prep, brand new valve replacement, and eco-certified old tyre disposal.", cta: "Book Fitting" },
                { image: "/wheel-balancing-2-1536x1024.webp", n: "02", tag: "Standard With Every Fit", title: "Precision Wheel Balancing in Longsight", body: "Eliminate steering wheel wobble and premature suspension degradation. Every single tyre mounted by our mobile engineers undergoes automated digital spin balancing using calibrated onboard optical balancer rigs.", cta: "Call Engineer" },
                { image: "/service-puncture-repair.webp", n: "03", tag: "BS AU 159 Compliant", title: "Roadside Puncture Repairs in Longsight", body: "Ran over a nail on Stockport Road or screw on Dickenson Road? If the puncture sits safely within the central 70% tread area and hasn't compromised the tyre casing, our technicians execute a permanent internal plug-patch vulcanisation on-site.", cta: "Request Repair" },
                { image: "/service-locking-wheel-nut.webp", n: "04", tag: "Zero Rim Damage", title: "Locking Wheel Nut Extraction in Longsight", body: "Lost your security key? Or has an over-torqued nut rounded off on an alloy? We deploy specialized reverse-threaded conical extraction tooling to safely release stubborn locking wheel nuts without scratching your wheel finish.", cta: "Remove Nut" },
              ].map((s) => (
                <div key={s.n} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-full md:w-64 h-48 md:h-44 rounded-xl overflow-hidden shrink-0 bg-[#eceef0]">
                    <Image src={s.image} alt={s.title} fill sizes="(max-width: 768px) 100vw, 256px" className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[22px] leading-[28px] font-extrabold text-[#1b61ff]/30">{s.n}</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#dce1ff] text-[#00164e] text-[11px] uppercase font-bold">{s.tag}</span>
                    </div>
                    <h3 className="text-[22px] leading-[28px] font-bold text-[#0b1e3d] mb-1">{s.title}</h3>
                    <p className="text-base text-[#44474e] leading-relaxed">{s.body}</p>
                  </div>
                  <div className="shrink-0 w-full md:w-auto">
                    <a className="w-full md:w-auto inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#1b61ff] text-white font-bold hover:bg-[#004ad2] transition-colors" href="tel:07955266077">
                      {s.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="w-full py-16 md:py-20 bg-[#f2f4f6]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-widest">Fast &amp; Frictionless</span>
              <h2 className="text-[30px] leading-[38px] font-bold text-[#0b1e3d] tracking-tight mt-1">How Direct Mobile Fitting Works</h2>
              <p className="text-base text-[#44474e] mt-2">From first phone call to complete road-readiness in Longsight.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { n: "1", bg: "bg-[#dce1ff] text-[#00164e]", title: "Share Size & Postcode", body: "Call our team or confirm your tyre dimensions (e.g. 205/55 R16) and pinpoint your Longsight roadside or home location.", note: "Live GPS Lookup" },
                { n: "2", bg: "bg-[#1b61ff] text-white", title: "Technician En Route", body: "Our nearest response van is routed immediately with your exact tyre match. Guaranteed arrival window: 20–35 minutes in Longsight.", note: "20–35 Min Target" },
                { n: "3", bg: "bg-[#0b1e3d] text-white", title: "Fitted & Driven Away", body: "We mount, digitally balance, check torque to manufacturer specs, and you inspect before paying by card or contactless at the vehicle.", note: "Mobile Card Terminal" },
              ].map((s) => (
                <div key={s.n} className="p-6 rounded-2xl bg-white shadow-md flex flex-col">
                  <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center font-bold mb-3`}>{s.n}</div>
                  <h3 className="text-[18px] leading-[24px] font-bold text-[#0b1e3d] mb-1">{s.title}</h3>
                  <p className="text-sm text-[#44474e] leading-relaxed mb-4">{s.body}</p>
                  <div className="mt-auto pt-2 flex items-center gap-2 text-[#004ad2] text-[11px] font-bold uppercase">
                    <MapPin className="h-[18px] w-[18px]" /> {s.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. COVERAGE / NEARBY AREAS */}
        <section className="w-full py-12 bg-[#0b1e3d] text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex flex-col max-w-xl text-center lg:text-left">
                <span className="text-[#ffe16d] text-[11px] font-bold uppercase tracking-wider">Fast-Response Perimeter</span>
                <h3 className="text-[30px] leading-[38px] font-bold text-white mt-1">Covering Longsight &amp; Adjacent Corridors</h3>
                <p className="text-sm text-[#dce1ff] mt-2">Technicians are constantly positioned along the A6, A34, and Hyde Road arteries for sub-30 minute intervention.</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {["Gorton", "Levenshulme", "Rusholme", "Manchester City Centre"].map((a) => (
                  <span key={a} className="px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 transition-colors font-semibold cursor-default">
                    {a}
                  </span>
                ))}
                <span className="px-4 py-2 rounded-full bg-[#1b61ff] text-white font-bold">Longsight Core (M12/M13)</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <section className="w-full py-16 md:py-20 bg-[#f7f9fb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-widest">Real Local Motorists</span>
              <h2 className="text-[30px] leading-[38px] font-bold text-[#0b1e3d] tracking-tight mt-1">Trusted Across Longsight</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { quote: "Tyre blew right on Stockport Road outside the market during rush hour. Traffic was crazy and recovery estimated 3 hours. Direct Tyre Solutions was beside my car in 22 minutes and had me moving with a new Michelin fitted. Absolutely brilliant service!", name: "Tariq M.", place: "Stockport Rd, Longsight", tag: "Verified Fitting" },
                { quote: "Woke up to a completely flat tyre on Dickenson Road with the kids needing the school run. Called at 7:10 AM, mobile van pulled up at 7:35 AM. He discovered a screw in the tread and vulcanised it on the spot instead of forcing a full replacement. Honest and fast.", name: "Sarah K.", place: "Dickenson Rd, Longsight", tag: "Puncture Repair" },
                { quote: "Lost my locking wheel nut key and had an urgent puncture near Kirkmanshulme Lane. Two standard garages refused to touch it without towing. The technician extracted the rounded nut in 10 minutes flat with zero alloy marks. Outstanding expertise.", name: "Dave P.", place: "Kirkmanshulme Ln, Longsight", tag: "Nut Extraction" },
              ].map((r) => (
                <div key={r.name} className="p-6 rounded-2xl bg-white shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-[#705d00] mb-3">
                      {stars.map((i) => (
                        <Star key={i} className="h-5 w-5" fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="text-base text-[#191c1e] italic leading-relaxed">&ldquo;{r.quote}&rdquo;</p>
                  </div>
                  <div className="pt-3 flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-[#0b1e3d]">{r.name}</p>
                      <p className="text-sm text-[#44474e]">{r.place}</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-[#eceef0] text-[11px] text-[#004ad2] font-bold">{r.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PRICING */}
        <section className="w-full py-8 bg-[#f2f4f6]" id="quick-quote">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="rounded-2xl bg-[#0b1e3d] p-8 md:p-12 shadow-xl text-white relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#1b61ff]/20 blur-3xl pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
                <div className="lg:col-span-8 flex flex-col gap-2">
                  <span className="text-[#ffe16d] text-[11px] font-bold uppercase tracking-widest">No Hidden Callout Shocks</span>
                  <h2 className="text-[30px] leading-[38px] font-bold text-white">Get an instant estimate for tyre fitting in Longsight</h2>
                  <p className="text-base text-[#dce1ff] leading-relaxed">
                    Transparent, all-inclusive pricing. Every roadside quote includes mobile dispatch, tyre mounting, computerized wheel balancing, brand new valve, and disposal of your old tyre.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                  <a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1b61ff] text-white font-bold shadow-lg hover:bg-[#004ad2] transition-all" href="tel:07955266077">
                    <PhoneCall className="h-5 w-5" /> Instant Price: 07955 266 077
                  </a>
                  <div className="text-center text-[11px] text-[#dce1ff] uppercase">Fast dispatch ETA: 20-35 mins</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="w-full py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-widest">Local Questions Answered</span>
              <h2 className="text-[30px] leading-[38px] font-bold text-[#0b1e3d] tracking-tight mt-1">Longsight Mobile Tyre FAQs</h2>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { q: "Can you attend breakdowns during peak Stockport Road traffic?", a: "Yes. Our service vans are stationed directly within South Manchester to bypass bottlenecks on the A6 and Hyde Road. Because our technicians know the residential side roads behind Longsight Market and Kirkmanshulme, we maintain an average arrival window of 20 to 35 minutes even during rush hour periods." },
                { q: "Is it safe to fit tyres on narrow Longsight Victorian terraced streets?", a: "Absolutely. Our Mercedes Sprinter vans carry high-visibility reflective LED safety lighting and compact commercial jacking systems designed specifically for tight British on-street parking. We set up an active safe exclusion perimeter so passing traffic is alerted while the work proceeds without blocking neighbour access." },
                { q: "Do you accept both card and cash payments roadside?", a: "Yes. Every mobile van is outfitted with an encrypted cellular card terminal accepting all major Visa, Mastercard, Apple Pay, and Google Pay transactions right at your car door. Verified cash payment upon completion is also accepted for driver convenience." },
                { q: "What tyre brands and sizes do you stock for immediate dispatch?", a: "Our local distribution hub stocks over 5,000 tyres spanning premium manufacturers (Michelin, Continental, Pirelli, Goodyear, Bridgestone), reliable mid-range options (Hankook, Kumho), and budget-friendly road-legal options." },
              ].map((faq) => (
                <div key={faq.q} className="rounded-2xl bg-[#f2f4f6] p-4 md:p-6">
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="w-full flex items-center justify-between text-left gap-4 text-lg font-bold text-[#0b1e3d] cursor-pointer">
                      <span>{faq.q}</span>
                      <ChevronDown className="h-6 w-6 text-[#004ad2] transition-transform duration-200 group-open:rotate-180 shrink-0" />
                    </summary>
                    <div className="mt-3 text-[#44474e] leading-relaxed">{faq.a}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. LOCAL MAP */}
        <section className="w-full py-16 md:py-20 bg-[#f2f4f6]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 text-[#004ad2] uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#004ad2]" />
                  <span className="text-[11px] font-bold">Geo-Fenced Rapid Fleet</span>
                </div>
                <h2 className="text-[30px] leading-[38px] font-bold text-[#0b1e3d] tracking-tight">Covering Every Road in Longsight</h2>
                <p className="text-base text-[#44474e] leading-relaxed">
                  From Stockport Road&rsquo;s bustling market corridor to the quieter Victorian terraces off Dickenson Road and North Road, our live mapping continuously dispatches the closest mobile technician to minimize your wait time.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-[#0b1e3d] flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-56 h-56 rounded-full border-2 border-dashed border-[#1b61ff]/40 animate-spin" style={{ animationDuration: "40s" }} />
                    <Radar className="absolute h-10 w-10 text-white/30" />
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-white/95 backdrop-blur text-[#0b1e3d] text-[11px] font-bold uppercase shadow-md">
                    Longsight (M12/M13)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CLOSING CTA */}
        <section className="w-full bg-[#0b1e3d] text-white py-16 md:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-[30px] leading-[38px] sm:text-[40px] sm:leading-[48px] font-bold tracking-tight max-w-3xl mx-auto mb-2">
              Stuck with a tyre in Longsight? We&rsquo;re on our way.
            </h2>
            <p className="text-lg text-[#dce1ff] max-w-2xl mx-auto mb-8">
              Speak directly with a local dispatch controller. We locate your exact position and send the closest mobile fitting unit immediately.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-12 py-4 rounded-xl bg-[#1b61ff] hover:bg-[#004ad2] text-white text-lg font-bold shadow-2xl transition-all"
                href="tel:07955266077"
              >
                <PhoneCall className="h-6 w-6 text-[#ffe16d]" />
                <span>Call Now: 07955 266 077</span>
              </a>
              <Link
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
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
