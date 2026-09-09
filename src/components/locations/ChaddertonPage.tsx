import Image from "next/image";
import Link from "next/link";
import {
  Star,
  PhoneCall,
  Disc,
  Gauge,
  Wrench,
  Unlock,
  Phone,
  Navigation2,
  ShieldCheck,
  ChevronDown,
  MapPin,
} from "lucide-react";
import Header2 from "@/components/home2/Header2";
import Footer2 from "@/components/home2/Footer2";
import ScrollDeck from "./ScrollDeck";

const stars = [0, 1, 2, 3, 4];

const services = [
  {
    icon: Disc,
    title: "Mobile Tyre Fitting in Chadderton",
    body: "Complete brand-new tyre replacement right on your private driveway, commercial yard, or motorway shoulder with computerized balancing included.",
    label: "Response Window:",
    value: "20–35 Mins",
    cta: "Book Chadderton Fitting",
  },
  {
    icon: Gauge,
    title: "Wheel Balancing in Chadderton",
    body: "High-accuracy digital spin balancing conducted inside our specialized mobile workshop van to cure steering wheel wobble and premature tyre wear.",
    label: "Van Equipment:",
    value: "Digital Calibration",
    cta: "Request Balancing",
  },
  {
    icon: Wrench,
    title: "Puncture Repairs near you in Chadderton",
    body: "BS AU 159 compliant internal mushroom plug-patch repairs for tread nail and screw punctures. If it can be safely saved, we repair it instantly.",
    label: "Standard:",
    value: "BS AU 159 Compliant",
    cta: "Inspect Puncture",
  },
  {
    icon: Unlock,
    title: "Emergency Locking Nut Removal in Chadderton",
    body: "Lost, stripped, or over-torqued security wheel key? Our specialist inverse extraction tooling extracts damaged nuts without scratching alloy wheels.",
    label: "Success Rate:",
    value: "100% Alloy Safe",
    cta: "Emergency Unlocking",
  },
];

export default function ChaddertonPage() {
  return (
    <>
      <Header2 />
      <main className="w-full pt-20 bg-[#f7f9fb]">
        {/* 1. SPLIT HERO */}
        <section className="relative bg-[#f2f4f6] overflow-hidden py-12 md:py-18">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col items-start space-y-4">
                <div className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full shadow-sm">
                  <span className="flex items-center gap-0.5 text-[#e9c400]">
                    {stars.map((i) => (
                      <Star key={i} className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                    ))}
                  </span>
                  <span className="text-sm font-bold text-[#191c1e]">4.9 / 5.0</span>
                  <span className="text-sm text-[#44474e]">Google Verified • Chadderton</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#1b61ff] animate-pulse" />
                    On-Call Mobile Tyre Unit
                  </div>
                  <h1 className="font-['Plus_Jakarta_Sans'] text-[36px] leading-[44px] md:text-[56px] md:leading-[64px] tracking-[-0.02em] md:tracking-[-0.03em] font-extrabold text-[#191c1e]">
                    24/7 Mobile Tyre Fitting in Chadderton
                  </h1>
                </div>
                <p className="text-lg text-[#44474e] max-w-2xl">
                  Rapid mobile tyre replacement direct to your driveway, workplace, or roadside across Chadderton within 20–35 minutes.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-1">
                  <a
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-[#1b61ff] text-white hover:bg-[#004ad2] transition-all shadow-md text-sm font-semibold"
                    href="tel:07955266077"
                  >
                    <PhoneCall className="h-5 w-5" />
                    <span>Call Now: 07955 266 077</span>
                  </a>
                  <Link
                    className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-[#191c1e] hover:bg-[#eceef0] transition-all shadow-sm text-sm font-semibold"
                    href="/#contact"
                  >
                    <span>Get a Quote</span>
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 w-full max-w-lg">
                  <div className="flex flex-col">
                    <span className="text-[22px] leading-[28px] font-semibold text-[#1b61ff]">20–35m</span>
                    <span className="text-sm text-[#44474e]">Avg. Chadderton Arrival</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[22px] leading-[28px] font-semibold text-[#191c1e]">OL9 &amp; M60</span>
                    <span className="text-sm text-[#44474e]">Full Postcode Reach</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[22px] leading-[28px] font-semibold text-[#191c1e]">365 Days</span>
                    <span className="text-sm text-[#44474e]">Day &amp; Night Dispatch</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#0b1e3d] aspect-[4/3] lg:aspect-[5/4] group">
                  <Image
                    src="/gallery-evening-callout.webp"
                    alt="Direct Tyre Solutions mobile fitting van on a roadside in Chadderton"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-[#0b1e3d]/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffe16d] animate-ping" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-white">Van Operating in OL9</span>
                  </div>
                  <div className="absolute bottom-3 right-3 left-3 bg-[#0b1e3d]/90 backdrop-blur-md p-3 rounded-xl flex items-center justify-between text-white shadow-lg">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-6 w-6 text-[#ffe16d]" />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold">Direct Tyre Fleet Unit #04</span>
                        <span className="text-sm text-[#7686ab]">Laser Balancers • Run-Flat Rated</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded bg-[#1b61ff] text-white">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. LOCAL INTRO */}
        <section className="bg-[#f7f9fb] py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-4 space-y-2">
                  <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Local Coverage Engine</span>
                  <h2 className="font-['Plus_Jakarta_Sans'] text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#191c1e]">
                    Chadderton&rsquo;s Trusted Roadside Fleet
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-lg text-[#44474e] leading-relaxed">
                    When a flat or blowout brings you to a halt in Chadderton, waiting hours for a tow recovery isn&rsquo;t an option. Our mobile units patrol directly along the Broadway (A663) corridor, M60 Junction 21 industrial estates, Chadderton Hall Park neighbourhoods, and the residential drives of Foxdenton. Whether you are stranded before your morning warehouse shift or dealing with unexpected pothole damage on high-density commuter arteries, our fully kitted mobile fitting rigs carry premium, mid-range, and budget tyres straight to your exact GPS pin with rapid Chadderton dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES SCROLL DECK */}
        <section className="bg-[#f2f4f6] py-12 md:py-18 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Comprehensive Field Solutions</span>
                <h2 className="font-['Plus_Jakarta_Sans'] text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#191c1e]">
                  Dedicated Chadderton Tyre Services
                </h2>
                <p className="text-base text-[#44474e]">Precision vehicle support performed on-site while you wait at home or work.</p>
              </div>
            </div>
            <ScrollDeck>
              {services.map((service) => (
                <div
                  key={service.title}
                  data-deck-card
                  className="w-[85vw] sm:w-[360px] lg:w-[380px] shrink-0 snap-start bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-[#dce1ff] flex items-center justify-center text-[#004ad2]">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#191c1e]">{service.title}</h3>
                    <p className="text-sm text-[#44474e] leading-relaxed">{service.body}</p>
                  </div>
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between text-[#191c1e] text-xs font-semibold">
                      <span className="text-[#44474e]">{service.label}</span>
                      <span className="font-bold text-[#1b61ff]">{service.value}</span>
                    </div>
                    <a
                      className="w-full py-2 rounded-lg bg-[#eceef0] hover:bg-[#1b61ff] hover:text-white transition-colors text-center text-sm font-semibold text-[#191c1e] block"
                      href="tel:07955266077"
                    >
                      {service.cta}
                    </a>
                  </div>
                </div>
              ))}
            </ScrollDeck>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="bg-[#f7f9fb] py-12 md:py-18">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Fast 3-Step Protocol</span>
              <h2 className="font-['Plus_Jakarta_Sans'] text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#191c1e]">
                How Our Chadderton Response Operates
              </h2>
              <p className="text-base text-[#44474e]">Zero workshop waiting rooms. We come completely ready to get you moving again.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  n: 1,
                  icon: Phone,
                  title: "Call or Book Online",
                  body: "Give us your tyre specification (e.g. 225/45 R17) or vehicle registration along with your exact location in Chadderton.",
                  note: "Instant Price Quoted",
                },
                {
                  n: 2,
                  icon: Navigation2,
                  title: "Chadderton Van En Route",
                  body: "Our nearest response technician departs for your location within our guaranteed 20–35 minute response window with real-time ETA updates.",
                  note: "20–35 Min Window",
                },
                {
                  n: 3,
                  icon: ShieldCheck,
                  title: "Fitted & Safely Driving",
                  body: "New rubber fitted, balanced, valve checked, and torqued to manufacturer specifications. Contactless or card payment handled directly at the van.",
                  note: "Roadside Sign-Off",
                },
              ].map((step) => (
                <div key={step.n} className="bg-white rounded-xl p-8 shadow-sm flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-full bg-[#ffe16d] text-[#221b00] text-lg font-bold flex items-center justify-center">
                      {step.n}
                    </span>
                    <step.icon className="h-6 w-6 text-[#75777f]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#191c1e]">{step.title}</h3>
                  <p className="text-sm text-[#44474e] leading-relaxed">{step.body}</p>
                  <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#004ad2] mt-auto pt-1">{step.note}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. COVERAGE / NEARBY AREAS */}
        <section className="bg-[#0b1e3d] text-white py-12 md:py-18">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-1 text-[#ffe16d] text-[11px] font-bold uppercase tracking-[0.06em]">
                  <MapPin className="h-4 w-4" />
                  Local Geographic Perimeter
                </div>
                <h2 className="font-['Plus_Jakarta_Sans'] text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white">
                  Chadderton &amp; Surrounding Sectors
                </h2>
              </div>
              <p className="text-sm text-[#7686ab] max-w-md">
                Stationed in OL9 with instant arterial access to the A663, A62, and M60 ring road for uninterrupted 24-hour service.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-full bg-[#1b61ff] text-white text-sm font-semibold flex items-center gap-1 shadow-sm">
                <MapPin className="h-4 w-4" />
                Chadderton (Hub)
              </div>
              <Link className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors" href="/mobile-tyre-fitting-oldham">
                Oldham Central
              </Link>
              <Link className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors" href="/mobile-tyre-fitting-failsworth">
                Failsworth
              </Link>
              <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold">Royton</span>
              <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold">Manchester</span>
              <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold">Middleton</span>
              <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold">Moston</span>
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <section className="bg-[#f7f9fb] py-12 md:py-18">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Local Customer Feedback</span>
                <h2 className="font-['Plus_Jakarta_Sans'] text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#191c1e]">
                  Verified Chadderton Rescues
                </h2>
              </div>
              <div className="flex items-center gap-2 text-[#44474e] text-sm">
                <ShieldCheck className="h-5 w-5 text-[#1b61ff]" />
                100% Genuine Roadside Reviews
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote:
                    "Had a dangerous puncture heading down Broadway towards the M60 at 6:45 AM. The technician arrived in just under 25 minutes with the exact Pirelli tyre size I needed. Truly saved my working day.",
                  name: "Mark H.",
                  place: "Broadway (A663), Chadderton",
                },
                {
                  quote:
                    "Woke up to completely flat front tyre on my drive in Foxdenton. Booked through their dispatch number, van was here in half an hour. Fitted on the driveway while I made coffee. Fantastic service!",
                  name: "Claire B.",
                  place: "Foxdenton Estate, Chadderton",
                },
                {
                  quote:
                    "Rounded locking nut that another garage couldn't remove. Called Direct Tyre Solutions; their van rocked up on Chadderton Park Road and extracted it cleanly in ten minutes with zero rim damage.",
                  name: "Tariq M.",
                  place: "Chadderton Park Road",
                },
              ].map((review) => (
                <div key={review.name} className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex text-[#e9c400]">
                      {stars.map((i) => (
                        <Star key={i} className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="text-base text-[#191c1e] leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
                  </div>
                  <div className="pt-1">
                    <div className="text-lg font-semibold text-[#191c1e]">{review.name}</div>
                    <div className="text-sm text-[#44474e]">{review.place}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PRICING CALLOUT */}
        <section className="bg-[#f2f4f6] py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-[#0b1e3d] text-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#1b61ff]/20 blur-3xl pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                    <ShieldCheck className="h-[18px] w-[18px] text-[#ffe16d]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-white">OL9 Transparent Guarantee</span>
                  </div>
                  <h2 className="font-['Plus_Jakarta_Sans'] text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white">
                    Clear Price Estimates for All Chadderton Postcodes
                  </h2>
                  <p className="text-lg text-[#7686ab] max-w-2xl leading-relaxed">
                    No hidden travel surcharges or unexpected add-ons at the kerbside. When you call our dispatcher, we confirm your tyre size, verify the stock on our local van, and give you an all-inclusive quote covering fitting, digital balancing, new rubber valve, and environmental disposal.
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-white text-sm pt-1">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="h-[18px] w-[18px] text-[#1b61ff]" /> New Valve Included
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="h-[18px] w-[18px] text-[#1b61ff]" /> Electronic Balancing
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="h-[18px] w-[18px] text-[#1b61ff]" /> Old Tyre Eco Disposal
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-4 bg-white/10 rounded-xl p-6 flex flex-col items-center text-center space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase text-[#ffe16d]">Speak directly to technicians</span>
                    <div className="text-2xl font-bold text-white">Free Instant Quote</div>
                    <p className="text-sm text-[#7686ab]">Call our on-duty coordinator now</p>
                  </div>
                  <a
                    className="w-full py-3 rounded-lg bg-[#1b61ff] hover:bg-[#004ad2] text-white text-sm font-semibold transition-all text-center shadow-md"
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
        <section className="bg-[#f7f9fb] py-12 md:py-18">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Common Questions</span>
              <h2 className="font-['Plus_Jakarta_Sans'] text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#191c1e]">
                Chadderton Tyre Callout FAQs
              </h2>
              <p className="text-base text-[#44474e]">Key answers regarding our on-location services across Greater Manchester and Oldham borough.</p>
            </div>
            <div className="space-y-3 max-w-4xl">
              {[
                {
                  q: "Can you respond to vehicles stranded at M60 Junction 21 or Broadway?",
                  a: "Yes. Our vans are fully road-safety compliant with high-visibility Chapter 8 lighting and certified roadside protocols. Whether you are on the Broadway dual carriageway (A663), roundabout approaches, or safe hard shoulders/lay-bys near Junction 21, we can dispatch safely and rapidly.",
                },
                {
                  q: "How much clearance do your mobile vans require on my driveway?",
                  a: "Our Mercedes Sprinter support vehicles require standard domestic van clearance (roughly one car width) to park alongside or in front of your vehicle. If your driveway is tight, our technicians can work safely parked at the kerbside outside your property anywhere in Foxdenton or Chadderton Hall Park.",
                },
                {
                  q: "Can you remove locking wheel nuts if I've lost the security key?",
                  a: "Absolutely. We carry professional inverse-thread impact extractors and non-destructive shroud removal equipment. We do not weld or damage your alloy rims. This works for stripped, rounded, or completely missing security keys on virtually all vehicle makes.",
                },
                {
                  q: "What tyre brands and sizes are carried in the mobile van?",
                  a: "Our roving vans carry extensive stock of common 15\" to 22\" passenger car, SUV, run-flat, and commercial van tyres. We stock premium options (Michelin, Continental, Pirelli, Goodyear), durable mid-range brands (Kumho, Hankook, Avon), and budget alternatives suited for quick emergency roadside relief.",
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-white rounded-xl shadow-sm overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer list-none">
                    <span className="text-lg font-semibold text-[#191c1e]">{faq.q}</span>
                    <ChevronDown className="h-6 w-6 text-[#004ad2] transition-transform duration-200 group-open:rotate-180 shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-[#44474e] text-base leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 9. LOCAL MAP / RADIAL COVERAGE */}
        <section className="bg-[#f2f4f6] py-12 md:py-18">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="space-y-2">
                  <span className="text-[#004ad2] text-[11px] font-bold uppercase tracking-[0.06em]">Real-Time Dispatch Grid</span>
                  <h2 className="font-['Plus_Jakarta_Sans'] text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#191c1e]">
                    Chadderton Radial Coverage
                  </h2>
                </div>
                <p className="text-base text-[#44474e] leading-relaxed">
                  Positioned right off Broadway and the M60 ring, our vans maintain rapid access across the entire OL9 district and neighbouring sectors.
                </p>
                <div className="space-y-2 pt-1">
                  {[
                    ["Broadway (A663) Corridor", "Under 20 minutes typical dispatch"],
                    ["M60 Junction 21 & Commercial Parks", "Immediate roadside response readiness"],
                    ["Foxdenton & Chadderton Hall Park", "Direct driveway & street-side assistance"],
                  ].map(([title, sub]) => (
                    <div key={title} className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm">
                      <span className="w-3 h-3 rounded-full bg-[#1b61ff] shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-[#191c1e]">{title}</span>
                        <span className="text-sm text-[#44474e]">{sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden shadow-md bg-[#eceef0] h-80 md:h-96">
                  <Image
                    src="/gallery-home-callout.webp"
                    alt="Direct Tyre Solutions coverage across Chadderton, Oldham"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-80 bg-[#0b1e3d]/95 backdrop-blur-md p-4 rounded-xl text-white shadow-xl">
                    <div className="flex items-center justify-between pb-1">
                      <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#ffe16d]">GPS Radar Zone</span>
                      <span className="text-xs font-bold text-[#e9c400]">24/7 ACTIVE</span>
                    </div>
                    <div className="text-lg font-semibold">Chadderton Central</div>
                    <p className="text-sm text-[#7686ab] mt-1">Mobile units deployed across OL9 postcodes right now.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CLOSING CTA */}
        <section className="bg-[#0b1e3d] text-white py-12 md:py-18 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="bg-gradient-to-r from-[#000516] via-[#0b1e3d] to-[#0b1e3d] rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2 text-center md:text-left max-w-xl">
                <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#ffe16d]">Immediate Field Dispatch</span>
                <h2 className="font-['Plus_Jakarta_Sans'] text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] tracking-[-0.02em] md:tracking-[-0.03em] font-bold text-white">
                  Stuck with a tyre in Chadderton? We&rsquo;re on our way.
                </h2>
                <p className="text-base text-[#7686ab]">Don&rsquo;t pay for recovery tow trucks. Get fitted right where you stand within 20 to 35 minutes.</p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center gap-3 w-full md:w-auto shrink-0">
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#1b61ff] text-white hover:bg-[#004ad2] text-lg font-semibold transition-all shadow-lg text-center"
                  href="tel:07955266077"
                >
                  <PhoneCall className="h-6 w-6" />
                  <span>07955 266 077</span>
                </a>
                <Link
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all text-center"
                  href="/#contact"
                >
                  Request Callback
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer2 />
    </>
  );
}
