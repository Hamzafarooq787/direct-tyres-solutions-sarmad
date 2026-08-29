"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, PhoneCall, X } from "lucide-react";
import { navLinksV2, siteConfigV2 } from "@/lib/site-data-v2";

export default function Header2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const telHref = `tel:${siteConfigV2.phone.replace(/\s/g, "")}`;

  return (
    <header className="bg-white/90 backdrop-blur-md text-[#1c1b1b] top-0 sticky z-50 border-b border-[#f0edec]">
      <div className="flex justify-between items-center w-full px-4 md:px-16 py-4 max-w-7xl mx-auto">
        <Link href="/home-2" className="flex items-center gap-2">
          <Image
            alt={`${siteConfigV2.name} Logo`}
            src={siteConfigV2.logo}
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-extrabold text-[#1a1a1a] tracking-tight hidden sm:block">
            {siteConfigV2.brand}
          </span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {navLinksV2.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-[#5a4136] hover:text-[#1a1a1a] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex flex-col items-end mr-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              24/7 Emergency
            </span>
            <a
              href={telHref}
              className="text-[#1a1a1a] font-black text-lg tracking-tight hover:text-[#ff6b00] transition-colors"
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
          className="md:hidden text-[#1a1a1a] p-2"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[#f0edec] bg-white">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navLinksV2.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-[#5a4136]"
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
