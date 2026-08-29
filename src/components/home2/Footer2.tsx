import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, Phone, Share2 } from "lucide-react";
import { footerLinksV2, siteConfigV2 } from "@/lib/site-data-v2";

export default function Footer2() {
  const telHref = `tel:${siteConfigV2.phone.replace(/\s/g, "")}`;

  return (
    <footer className="bg-[#111111] text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Image
              alt={`${siteConfigV2.name} Logo`}
              src={siteConfigV2.logo}
              width={32}
              height={32}
              className="h-8 w-8 object-contain brightness-0 invert"
            />
            <span className="text-2xl font-black text-white tracking-tight">
              {siteConfigV2.brand}
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Professional, fast, and reliable mobile tyre fitting service
            operating 24/7 across the {siteConfigV2.serviceArea}.
          </p>
          <div className="flex gap-2">
            <a
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff6b00] hover:text-white transition-colors"
              href="#"
              aria-label="Share"
            >
              <Share2 className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm font-medium">
            {footerLinksV2.quickLinks.map((link) => (
              <li key={link.label}>
                <a className="hover:text-[#ff6b00] transition-colors" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">
            Our Services
          </h4>
          <ul className="space-y-4 text-sm font-medium">
            {footerLinksV2.services.map((link) => (
              <li key={link.label}>
                <a className="hover:text-[#ff6b00] transition-colors" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex items-center gap-4">
              <Phone className="text-[#ff6b00] h-5 w-5" />
              <a className="text-white font-bold hover:text-[#ff6b00] transition-colors" href={telHref}>
                {siteConfigV2.phone}
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="text-gray-500 h-5 w-5" />
              <a className="hover:text-white transition-colors" href={`mailto:${siteConfigV2.email}`}>
                {siteConfigV2.email}
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Clock className="text-gray-500 h-5 w-5" />
              24 Hours A Day
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-16 mt-12 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm font-medium">
          © {new Date().getFullYear()} {siteConfigV2.name}. All rights reserved.
        </p>
        <div className="flex gap-4 text-xs items-center">
          <a className="hover:text-white transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Terms of Service
          </a>
          <Link href="/" className="hover:text-white transition-colors">
            View alternate homepage layout
          </Link>
        </div>
      </div>
    </footer>
  );
}
