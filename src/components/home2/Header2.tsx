"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, PhoneCall, X } from "lucide-react";
import { navLinksV2, siteConfigV2 } from "@/lib/site-data-v2";

export default function Header2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const telHref = `tel:${siteConfigV2.phone.replace(/\s/g, "")}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1a1a1a] shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full px-4 md:px-16 py-3 max-w-7xl mx-auto">
        <Link href="/home-2" className="flex items-center h-14 shrink-0">
          <Image
            alt={`${siteConfigV2.name} Logo`}
            src={siteConfigV2.logo}
            width={siteConfigV2.logoWidth}
            height={siteConfigV2.logoHeight}
            className="h-full w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex gap-6">
          {navLinksV2.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-white/80 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex flex-col items-end mr-2">
            <span className="text-xs font-bold text-white/60 uppercase tracking-wider">
              24/7 Emergency
            </span>
            <a
              href={telHref}
              className="text-white font-black text-lg tracking-tight hover:text-[#ff6b00] transition-colors"
            >
              {siteConfigV2.phone}
            </a>
          </div>
          <a
            href="#contact"
            className="bg-[#ff6b00] text-white rounded-full px-4 py-2 font-semibold flex items-center justify-center transition-all duration-300 hover:bg-orange-700 hover:shadow-[0_4px_14px_0_rgba(255,107,0,0.39)] hover:-translate-y-0.5 min-h-[40px] text-sm"
          >
            Get Quote
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#1a1a1a]">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navLinksV2.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-white/80"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={telHref}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#ff6b00] text-white font-bold rounded-full"
            >
              <PhoneCall className="h-5 w-5" fill="currentColor" strokeWidth={0} />
              {siteConfigV2.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
