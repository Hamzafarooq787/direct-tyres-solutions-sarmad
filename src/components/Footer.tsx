import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Share2, ThumbsUp } from "lucide-react";
import { footerLinks, siteConfig } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-dark text-white pt-20 pb-8 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-4 md:px-8 max-w-7xl mx-auto mb-16">
        <div className="lg:col-span-1">
          <div className="font-heading text-xl font-bold text-secondary mb-6 flex items-center">
            <Image
              alt="Logo"
              src={siteConfig.logo}
              width={32}
              height={32}
              className="h-8 w-auto mr-3 mix-blend-screen filter brightness-200"
            />
          </div>
          <p className="font-sans text-sm text-gray-400 mb-8 leading-relaxed">
            {siteConfig.tagline}. Keeping you moving, 24 hours a day, 365
            days a year.
          </p>
          <div className="flex space-x-4">
            <a
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-gray-300 hover:bg-secondary hover:text-primary transition-all duration-300"
              href="#"
              aria-label="Share"
            >
              <Share2 className="h-5 w-5" />
            </a>
            <a
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-gray-300 hover:bg-secondary hover:text-primary transition-all duration-300"
              href="#"
              aria-label="Recommend us"
            >
              <ThumbsUp className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold text-white mb-6 uppercase tracking-wider">
            Services
          </h4>
          <ul className="space-y-4 font-sans text-sm">
            {footerLinks.services.map((link) => (
              <li key={link}>
                <a
                  className="text-gray-400 hover:text-secondary hover:translate-x-2 transition-all duration-300 inline-block"
                  href="#services"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold text-white mb-6 uppercase tracking-wider">
            Legal
          </h4>
          <ul className="space-y-4 font-sans text-sm">
            {footerLinks.legal.map((link) => (
              <li key={link}>
                <a
                  className="text-gray-400 hover:text-secondary hover:translate-x-2 transition-all duration-300 inline-block"
                  href="#"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold text-white mb-6 uppercase tracking-wider">
            Contact
          </h4>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="flex items-center space-x-3 text-gray-400 mb-4 font-sans text-sm group cursor-pointer hover:text-secondary transition-colors"
          >
            <Phone className="text-secondary h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>{siteConfig.phone}</span>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center space-x-3 text-gray-400 mb-4 font-sans text-sm group cursor-pointer hover:text-secondary transition-colors"
          >
            <Mail className="text-secondary h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>{siteConfig.email}</span>
          </a>
        </div>
      </div>

      <div className="px-4 md:px-8 max-w-7xl mx-auto pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-sans gap-2">
        <p className="mb-0">
          © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.tagline}.
        </p>
        <Link
          href="/home-2"
          className="text-gray-500 hover:text-secondary transition-colors"
        >
          View alternate homepage layout
        </Link>
      </div>
    </footer>
  );
}
