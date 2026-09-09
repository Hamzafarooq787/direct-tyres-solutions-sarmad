import Image from "next/image";
import Link from "next/link";
import {
  Star,
  PhoneCall,
  CheckCircle2,
  Disc,
  Gauge,
  Wrench,
  Unlock,
  Headset,
  Navigation2,
  ShieldCheck,
  Car,
  Home as HomeIcon,
  Navigation,
  Zap,
  ChevronDown,
} from "lucide-react";
import LocationHeader from "./LocationHeader";
import LocationFooter from "./LocationFooter";

const stars = [0, 1, 2, 3, 4];

export default function OldhamPage() {
  return (
    <>
      <LocationHeader currentSlug="oldham" />
      <main className="w-full pt-20 bg-[#f7f9fb]">
        {/* 1. HERO */}
        <section className="relative w-full bg-[#0b1e3d] text-white overflow-hidden min-h-[640px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-section-images-936x527.webp"
              alt="Direct Tyre Solutions mobile tyre fitting van in Oldham"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-30 mix-blend-overlay"
            />
          </div>
          <div className="absolute inset-0 z-0 bg-[#0b1e3d]/85" />
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#1b61ff]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#004ad2]/15 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-18 flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md shadow-md text-white">
              <div className="flex items-center text-[#ffe16d]">
                {stars.map((i) => (
                  <Star key={i} className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="text-sm font-semibold">4.9 / 5.0</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="text-sm text-[#7686ab]">500+ Verified Oldham Drivers</span>
            </div>
            <h1 className="text-[36px] leading-[44px] md:text-[56px] md:leading-[64px] tracking-[-0.02em] md:tracking-[-0.03em] font-extrabold max-w-4xl text-white mb-4">
              24/7 Mobile Tyre Fitting in Oldham
            </h1>
            <p className="text-lg leading-relaxed text-[#7686ab] max-w-2xl mx-auto mb-8">
              Rapid response mobile workshops dispatched across Oldham within 20–35 minutes — we fit, balance, and repair tyres directly at your home, workplace, or roadside.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#1b61ff] text-white hover:bg-[#004ad2] transition-all shadow-lg hover:shadow-xl text-lg font-semibold"
                href="tel:07955266077"
              >
                <PhoneCall className="h-[22px] w-[22px] text-[#ffe16d]" />
                <span>Call Now: 07955 266 077</span>
              </a>
              <Link
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors text-lg font-semibold"
                href="/#contact"
              >
                Get a Quote
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-2 text-[#7686ab] text-[11px] font-bold uppercase tracking-[0.06em]">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
              <span>Dedicated Technicians Patrolling OL1 – OL9 Right Now</span>
            </div>
          </div>
        </section>

        {/* 2. LOCAL INTRO */}
        <section className="w-full py-18 bg-[#f7f9fb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eceef0] text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">
                  <Navigation2 className="h-4 w-4" />
                  Local Oldham Service Network
                </div>
                <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#191c1e]">
                  Engineered for Oldham&rsquo;s Demanding Hills &amp; Commuter Arteries
                </h2>
                <div className="text-lg leading-relaxed text-[#44474e] space-y-4">
                  <p>
                    Why do Oldham motorists rely on Direct Tyre Solutions? From navigating the steep gradients of Oldham&rsquo;s hillside lanes to heavy morning traffic snarls on the A627(M) and Oldham Way, your tyres endure intense daily friction and road wear. Whether facing a sharp puncture on a residential driveway in Moorside and Werneth before work, or an urgent emergency blowout along the Oldham bypass, waiting in freezing cold garage queues is never an option.
                  </p>
                  <p>
                    Our fleet of self-sufficient mobile units arrives directly at your doorstep or roadside breakdown spot. We carry high-precision mounting units, laser balancing machinery, and an extensive stock of premium and budget brands, restoring your journey within the hour without you lifting a finger.
                  </p>
                </div>
                <div className="pt-1 flex flex-wrap items-center gap-6 text-[#191c1e]">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-[#1b61ff]" />
                    <span className="text-sm font-semibold">20-35 Min Average Arrival</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-[#1b61ff]" />
                    <span className="text-sm font-semibold">Fully Mobile &amp; Self-Powered</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#eceef0]">
                  <div className="relative w-full h-80 lg:h-96">
                    <Image
                      src="/gallery-onsite-wheel-fitting.webp"
                      alt="Direct Tyre Solutions technician fitting a wheel on a residential road in Oldham"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#0b1e3d]/90 via-[#0b1e3d]/60 to-transparent text-white">
                    <div className="text-lg font-semibold">Oldham Mobile Response Van</div>
                    <div className="text-sm text-[#7686ab]">Self-contained power, hydraulic jacks, laser balancers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES GRID */}
        <section className="w-full py-18 bg-[#f2f4f6]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <div className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em] mb-1">
                Complete Mobile Tyre Solutions
              </div>
              <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#191c1e]">
                Comprehensive Tyre Services Across Oldham
              </h2>
              <p className="text-base text-[#44474e] mt-2">
                Professional technicians arriving equipped with industrial-grade tools to handle punctures, wheel balancing, and total replacements on-site.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Disc,
                  title: "Mobile Tyre Fitting",
                  body: "Driveway, work car park, or roadside fitting across all OL postcodes. We carry leading tyre brands and premium budget alternatives for cars, SUVs, and vans.",
                  cta: "Book Home Visit",
                },
                {
                  icon: Gauge,
                  title: "Laser Wheel Balancing",
                  body: "Precision computerized balancing completed directly inside our mobile workshop van to eliminate steering vibration and uneven tread erosion across Oldham.",
                  cta: "Explore Balancing",
                },
                {
                  icon: Wrench,
                  title: "Puncture Repairs",
                  body: "BS AU 159 compliant safe puncture repairs performed where you stand. Thorough tread and inner-liner safety checks guarantee roadworthiness before dispatch.",
                  cta: "Fix My Puncture",
                },
                {
                  icon: Unlock,
                  title: "Locking Nut Removal",
                  body: "Specialist non-destructive torque removal equipment for stripped, overtightened, or lost locking wheel nut keys. We preserve alloy wheels intact.",
                  cta: "Request Specialist",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-full bg-[#1b61ff]/10 flex items-center justify-center text-[#004ad2] mb-4">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#191c1e] mb-2">{service.title}</h3>
                    <p className="text-sm text-[#44474e]">{service.body}</p>
                  </div>
                  <div className="pt-4 mt-4 text-[#004ad2] text-sm font-semibold flex items-center gap-1">
                    <span>{service.cta}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="w-full py-18 bg-[#f7f9fb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em] mb-1">
                Frictionless Dispatch
              </div>
              <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#191c1e]">
                How Our Oldham Response Operates
              </h2>
              <p className="text-base text-[#44474e] mt-2">From sudden flat to smooth rolling in three seamless steps.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  n: 1,
                  bg: "bg-[#0b1e3d] text-white",
                  title: "Contact Us",
                  body: "Call our live 24/7 hotline or submit your vehicle registration and tyre specifications. We provide an exact upfront quote immediately.",
                  icon: Headset,
                  note: "Immediate Response",
                },
                {
                  n: 2,
                  bg: "bg-[#1b61ff] text-white",
                  title: "Local Van Dispatched",
                  body: "A fully-stocked mobile fitting van is assigned to your coordinates in Oldham, reaching your driveway or roadside within 20–35 minutes.",
                  icon: Navigation2,
                  note: "Live GPS ETA Updates",
                },
                {
                  n: 3,
                  bg: "bg-[#c9a900] text-white",
                  title: "Fitting & On Your Way",
                  body: "Our certified tyre tech fits, balances, torques to manufacturer specs, and responsibly recycles your old rubber. Quick, contactless payments accepted.",
                  icon: CheckCircle2,
                  note: "Safety Checked & Signed Off",
                },
              ].map((step) => (
                <div key={step.n} className="relative p-8 rounded-2xl bg-[#f2f4f6] shadow-sm flex flex-col items-start">
                  <div className={`w-12 h-12 rounded-full ${step.bg} text-lg font-bold flex items-center justify-center mb-4`}>
                    {step.n}
                  </div>
                  <h3 className="text-xl font-semibold text-[#191c1e] mb-2">{step.title}</h3>
                  <p className="text-base text-[#44474e]">{step.body}</p>
                  <div className="mt-4 flex items-center gap-1 text-[#004ad2] text-sm font-semibold">
                    <step.icon className="h-[18px] w-[18px]" />
                    <span>{step.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. COVERAGE / NEARBY AREAS */}
        <section className="w-full py-12 bg-[#0b1e3d] text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-md">
                <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#ffe16d]">Oldham Hub Coverage</div>
                <h2 className="text-[30px] leading-[38px] tracking-[-0.015em] font-bold text-white">
                  Surrounding Districts &amp; Towns
                </h2>
                <p className="text-sm text-[#7686ab]">Vans stationed throughout the borough ensuring instantaneous mobilization to your exact location.</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 max-w-2xl">
                <Link className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#1b61ff] text-white text-sm font-semibold transition-colors" href="/mobile-tyre-fitting-chadderton">
                  Chadderton
                </Link>
                <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold">Royton</span>
                <Link className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#1b61ff] text-white text-sm font-semibold transition-colors" href="/mobile-tyre-fitting-shaw">
                  Shaw
                </Link>
                <Link className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#1b61ff] text-white text-sm font-semibold transition-colors" href="/mobile-tyre-fitting-failsworth">
                  Failsworth
                </Link>
                <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold">Moorside</span>
                <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold">Lees</span>
                <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold">Hollinwood</span>
                <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold">Werneth</span>
                <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold">Waterhead</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <section className="w-full py-18 bg-[#f7f9fb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <div className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em] mb-1">Real Customer Stories</div>
                <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#191c1e]">
                  Trusted by Drivers in Oldham
                </h2>
              </div>
              <div className="flex items-center gap-2 text-[#44474e] text-sm">
                <ShieldCheck className="h-6 w-6 text-[#ffe16d]" />
                <span>Independent 5-star customer feedback</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote:
                    "Had a catastrophic tyre rupture coming off the Oldham Way round 7:30 PM. Direct Tyre Solutions had a tech with me in 25 minutes. Polite, speedy, and reasonable price with no hassle.",
                  name: "Sarah P.",
                  place: "Oldham Way (A627)",
                  icon: Car,
                },
                {
                  quote:
                    "Woke up to completely flat front tyre right on my driveway in Oldham Mews. Called their 24/7 number and by 8:40 AM the new tyre was fitted and balanced. Unbeatable morning convenience!",
                  name: "Dave K.",
                  place: "Oldham Mews",
                  icon: HomeIcon,
                },
                {
                  quote:
                    "Lost my locking wheel nut adaptor and other garages refused to touch it. Direct Tyre Solutions sent their specialist out to Werneth. Removed all four without scratching the alloys. Top tier service.",
                  name: "Amir R.",
                  place: "Werneth, Oldham",
                  icon: ShieldCheck,
                },
              ].map((review) => (
                <div key={review.name} className="p-6 rounded-2xl bg-white shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center text-[#ffe16d] mb-3">
                      {stars.map((i) => (
                        <Star key={i} className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="text-base text-[#191c1e] italic">&ldquo;{review.quote}&rdquo;</p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#e0e3e5] flex items-center justify-between">
                    <div>
                      <div className="text-lg font-semibold text-[#191c1e]">{review.name}</div>
                      <div className="text-sm text-[#44474e]">{review.place}</div>
                    </div>
                    <review.icon className="h-6 w-6 text-[#004ad2]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PRICING CALLOUT */}
        <section className="w-full py-12 bg-[#f7f9fb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="rounded-2xl bg-[#0b1e3d] p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-white">
              <div className="space-y-2 max-w-xl">
                <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#ffe16d]">Guaranteed Transparent Pricing</div>
                <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white">
                  No Hidden Call-Out Surprises in Oldham
                </h2>
                <p className="text-base text-[#7686ab]">
                  Get an instant transparent estimate for tyre fitting in Oldham. We provide upfront costs covering the tyre, on-site mobile fitting, new valves, wheel balancing, and old tyre disposal.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
                <Link
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#1b61ff] text-white hover:bg-[#004ad2] text-sm font-semibold transition-colors shadow-md"
                  href="/#contact"
                >
                  Get Online Quote
                </Link>
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
                  href="tel:07955266077"
                >
                  Ask for Price by Phone
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="w-full py-18 bg-[#f2f4f6]">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em] mb-1">Got Questions?</div>
              <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#191c1e]">
                Frequently Asked Questions in Oldham
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "What is your typical arrival time in Oldham?",
                  a: "Our average mobile response time across all Oldham postcodes (OL1 through OL9) is between 20 to 35 minutes. Because our vans are constantly stationed throughout Greater Manchester, we can immediately route the nearest technician directly to your exact GPS coordinates.",
                },
                {
                  q: "Can you replace tyres on my driveway in Oldham?",
                  a: "Yes, absolutely. Our custom Mercedes Sprinter vans are entirely self-powered, carrying quiet onboard generators, compressors, hydraulic low-profile jacks, and computerized laser balancers. We require zero external power or ramps from your home.",
                },
                {
                  q: "Do you cover the A627(M) and Oldham Way for roadside emergencies?",
                  a: "Yes. Highway and dual-carriageway breakdowns are treated as high priority. Our technicians are fully qualified in roadside safety protocols, equipped with high-visibility vehicle beacons and safety barriers to carry out rapid tyre replacements securely.",
                },
                {
                  q: "What payment methods are accepted at the van?",
                  a: "Every mobile van carries a portable card terminal accepting all major debit and credit cards, contactless, Apple Pay, and Google Pay. For business commercial accounts and fleet vehicles, direct invoicing options are available upon pre-authorization.",
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-white rounded-xl p-4 md:p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between gap-4 text-lg font-semibold text-[#191c1e] cursor-pointer list-none">
                    <span>{faq.q}</span>
                    <ChevronDown className="h-6 w-6 text-[#004ad2] transition-transform group-open:rotate-180 shrink-0" />
                  </summary>
                  <p className="text-base text-[#44474e] mt-3 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 9. LOCAL DISPATCH VISUALIZATION */}
        <section className="w-full py-18 bg-[#f7f9fb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Live Response Radius</div>
                <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#191c1e]">
                  Stationed Centrally in Oldham
                </h2>
                <p className="text-base text-[#44474e]">
                  Our strategic hub placement within Oldham guarantees quick access to major transit lines including the A62, A627(M), and M60 junction arteries. Our 10-mile rapid dispatch perimeter ensures no stranded motorist or home breakdown is left unattended.
                </p>
                <div className="p-4 rounded-xl bg-[#eceef0] space-y-2">
                  {[
                    ["Oldham Town Centre (OL1)", "15 - 20 mins"],
                    ["Chadderton & Werneth (OL9)", "15 - 25 mins"],
                    ["Royton & Shaw (OL2)", "20 - 30 mins"],
                    ["Moorside & Saddleworth Border", "25 - 35 mins"],
                  ].map(([area, time]) => (
                    <div key={area} className="flex items-center justify-between text-sm font-semibold">
                      <span className="text-[#44474e] font-normal">{area}</span>
                      <span className="text-[#1b61ff]">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden bg-[#0b1e3d] p-6 text-white min-h-[380px] flex flex-col justify-between shadow-xl">
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.06em]">Live Patrol GPS Active</span>
                    </div>
                    <span className="text-[11px] font-bold text-[#ffe16d] bg-white/10 px-2 py-1 rounded">Radius: 10 Miles</span>
                  </div>
                  <div className="relative z-10 my-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#1b61ff] text-white flex items-center justify-center shadow-lg mb-2">
                      <Navigation className="h-8 w-8" />
                    </div>
                    <div className="text-xl font-semibold">Oldham Central Dispatch Hub</div>
                    <div className="text-sm text-[#7686ab]">Covering OL1, OL2, OL3, OL4, OL8, OL9 &amp; A627(M) corridor</div>
                  </div>
                  <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-2 pt-4 border-t border-white/10 text-center">
                    <div>
                      <div className="text-lg font-semibold text-[#ffe16d]">24/7</div>
                      <div className="text-[11px] font-bold uppercase text-[#7686ab]">Availability</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-[#ffe16d]">20-35m</div>
                      <div className="text-[11px] font-bold uppercase text-[#7686ab]">Avg Arrival</div>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <div className="text-lg font-semibold text-white">Zero</div>
                      <div className="text-[11px] font-bold uppercase text-[#7686ab]">Towing Needed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CLOSING CTA */}
        <section className="w-full py-18 bg-[#0b1e3d] text-white relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#1b61ff]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-[#ffe16d] text-[11px] font-bold uppercase tracking-[0.06em] mb-4">
              <span className="h-2 w-2 rounded-full bg-[#ffe16d] animate-pulse" />
              Immediate 24/7 Mobile Assistance
            </div>
            <h2 className="text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] tracking-[-0.02em] md:tracking-[-0.03em] font-bold text-white max-w-3xl mb-4">
              Stuck with a Flat Tyre in Oldham? We&rsquo;re on Our Way.
            </h2>
            <p className="text-lg leading-relaxed text-[#7686ab] max-w-xl mb-8">
              Don&rsquo;t damage your alloy wheels driving on a flat or wait hours for a recovery lorry. Our Oldham mobile fitter will arrive fully prepared with the correct tyre size.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[#1b61ff] text-white hover:bg-[#004ad2] text-lg font-semibold transition-all shadow-xl"
                href="tel:07955266077"
              >
                <PhoneCall className="h-[26px] w-[26px] text-[#ffe16d]" />
                <span>Call 07955 266 077</span>
              </a>
              <Link
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-white text-lg font-semibold transition-colors"
                href="/#contact"
              >
                Book Online Appointment
              </Link>
            </div>
            <div className="mt-8 text-[#7686ab] text-sm">
              Serving Oldham, Chadderton, Royton, Shaw, Lees, and Moorside 24 hours a day, 365 days a year.
            </div>
            <div className="flex items-center gap-2 mt-2 text-[#7686ab] text-sm">
              <CheckCircle2 className="h-4 w-4 text-[#1b61ff]" />
              <span>No Hidden Callout Fees</span>
            </div>
          </div>
        </section>
      </main>
      <LocationFooter />
    </>
  );
}
