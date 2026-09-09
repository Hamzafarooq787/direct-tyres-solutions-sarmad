import Image from "next/image";
import { Clock, Mail, PhoneCall } from "lucide-react";
import { footerLinks3, siteConfig3 } from "@/lib/site-data3";

export default function Footer3() {
  const telHref = `tel:${siteConfig3.phone.replace(/\s/g, "")}`;

  return (
    <footer className="bg-primary-dark border-t border-white/10 text-gray-400 py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="mb-4 bg-white rounded-lg p-2 w-fit">
            <Image
              alt={`${siteConfig3.name} Logo`}
              src={siteConfig3.logo}
              width={siteConfig3.logoWidth}
              height={siteConfig3.logoHeight}
              className="h-9 w-auto object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed">
            Professional, fast, and reliable mobile tyre fitting service
            operating 24/7 across the UK.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 uppercase tracking-wider text-xs">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm font-medium">
            {footerLinks3.quickLinks.map((link) => (
              <li key={link.label}>
                <a className="hover:text-secondary transition-colors" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 uppercase tracking-wider text-xs">
            Our Services
          </h4>
          <ul className="space-y-3 text-sm font-medium">
            {footerLinks3.services.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 uppercase tracking-wider text-xs">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex items-center gap-3">
              <PhoneCall className="text-secondary h-5 w-5" />
              <a className="text-white font-bold hover:text-secondary transition-colors" href={telHref}>
                {siteConfig3.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-gray-500 h-5 w-5" />
              <a className="hover:text-white transition-colors" href="mailto:info@directtyresolutions.co.uk">
                info@directtyresolutions.co.uk
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="text-gray-500 h-5 w-5" />
              24 Hours A Day
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10 pt-8 border-t border-white/10 text-center flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm font-medium">
          © {new Date().getFullYear()} {siteConfig3.name}. All rights reserved.
        </p>
        <div className="flex gap-4 text-xs items-center">
          <a className="hover:text-white transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
