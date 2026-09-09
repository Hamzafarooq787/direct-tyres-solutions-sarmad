import Image from "next/image";
import Link from "next/link";
import { Mail, PhoneCall, Star, Clock } from "lucide-react";
import { siteConfigV2 } from "@/lib/site-data-v2";
import { locationAreas } from "@/lib/locations-data";

export default function LocationFooter() {
  const telHref = `tel:${siteConfigV2.phone.replace(/\s/g, "")}`;

  return (
    <footer className="w-full bg-[#0b1e3d] text-white/70 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image
              alt={`${siteConfigV2.name} Logo`}
              src={siteConfigV2.logo}
              width={siteConfigV2.logoWidth}
              height={siteConfigV2.logoHeight}
              className="h-8 w-auto object-contain"
            />
            <span className="text-lg font-semibold text-white tracking-tight">Direct Tyre Solutions</span>
          </div>
          <p className="text-sm leading-relaxed">
            Rapid 24/7 mobile tyre fitting, emergency roadside assistance, and tyre replacement across Greater
            Manchester and surrounding areas.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <Star className="h-5 w-5 text-[#ffd700]" fill="currentColor" strokeWidth={0} />
            <span className="text-sm font-semibold text-white">5.0 / 5.0</span>
            <span className="text-sm">(1,400+ Verified Roadside Rescues)</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-base font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/#services" className="hover:text-white transition-colors">Our Services</Link></li>
            <li><Link href="/#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-base font-semibold text-white mb-2">Areas We Cover</h4>
          <ul className="space-y-2 text-sm">
            {locationAreas.slice(0, 5).map((area) => (
              <li key={area.slug}>
                <Link href={area.href} className="hover:text-white transition-colors">
                  {area.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-base font-semibold text-white mb-2">Contact</h4>
          <div className="flex items-start gap-2">
            <PhoneCall className="h-5 w-5 text-[#1b61ff] mt-0.5" />
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#dce1ff]">Phone</div>
              <a href={telHref} className="text-lg font-semibold text-white hover:text-[#1b61ff] transition-colors">
                {siteConfigV2.phone}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Mail className="h-5 w-5 text-[#1b61ff] mt-0.5" />
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#dce1ff]">Email</div>
              <a
                href={`mailto:${siteConfigV2.email}`}
                className="text-sm text-white hover:text-[#1b61ff] transition-colors"
              >
                {siteConfigV2.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Clock className="h-5 w-5 text-[#1b61ff] mt-0.5" />
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#dce1ff]">Availability</div>
              <div className="text-sm text-white">24 Hours A Day / 7 Days A Week</div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 text-sm">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Direct Tyre Solutions Ltd. All rights reserved. 24/7 Mobile Tyre Fitting
          Across Greater Manchester.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-white transition-colors">
            View homepage
          </Link>
        </div>
      </div>
    </footer>
  );
}
