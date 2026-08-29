import Link from "next/link";
import { Mail, Phone, Share2, ThumbsUp } from "lucide-react";
import { footerLinks, siteConfig } from "@/lib/site-data";

export default function Footer2() {
  return (
    <footer className="w-full py-16 bg-[#001026] text-white border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-10 max-w-7xl mx-auto mb-12">
        <div>
          <div className="font-heading text-xl font-bold text-[#fdc003] mb-4">
            TYRE ASSIST 24/7
          </div>
          <p className="font-sans text-white/80 mb-6">
            {siteConfig.tagline}. Keeping you moving, 24 hours a day, 365
            days a year.
          </p>
          <div className="flex space-x-4">
            <a
              className="w-10 h-10 rounded-full bg-[#0b2545] flex items-center justify-center text-white hover:bg-[#fdc003] hover:text-[#001026] transition-colors"
              href="#"
              aria-label="Share"
            >
              <Share2 className="h-5 w-5" />
            </a>
            <a
              className="w-10 h-10 rounded-full bg-[#0b2545] flex items-center justify-center text-white hover:bg-[#fdc003] hover:text-[#001026] transition-colors"
              href="#"
              aria-label="Recommend us"
            >
              <ThumbsUp className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm text-white mb-4 tracking-wider uppercase">
            Services
          </h4>
          <ul className="space-y-3 font-sans">
            {footerLinks.services.map((link) => (
              <li key={link}>
                <a
                  className="text-white/80 hover:text-[#fdc003] hover:translate-x-1 transition-all duration-300 ease-in-out inline-block"
                  href="#services"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm text-white mb-4 tracking-wider uppercase">
            Legal
          </h4>
          <ul className="space-y-3 font-sans">
            {footerLinks.legal.map((link) => (
              <li key={link}>
                <a
                  className="text-white/80 hover:text-[#fdc003] hover:translate-x-1 transition-all duration-300 ease-in-out inline-block"
                  href="#"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm text-white mb-4 tracking-wider uppercase">
            Contact
          </h4>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="flex items-center space-x-2 text-white/80 mb-3 font-sans"
          >
            <Phone className="h-5 w-5" />
            <span>{siteConfig.phone}</span>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center space-x-2 text-white/80 mb-3 font-sans"
          >
            <Mail className="h-5 w-5" />
            <span>{siteConfig.email}</span>
          </a>
        </div>
      </div>

      <div className="px-4 md:px-10 max-w-7xl mx-auto pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="font-mono text-xs text-white/60">
          © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.tagline}.
        </p>
        <Link href="/" className="font-mono text-xs text-white/60 hover:text-[#fdc003] transition-colors">
          View alternate homepage layout
        </Link>
      </div>
    </footer>
  );
}
