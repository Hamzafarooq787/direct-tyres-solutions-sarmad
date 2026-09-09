"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, PhoneCall, X } from "lucide-react";
import { navLinks3, siteConfig3 } from "@/lib/site-data3";

export default function Header3() {
  const [menuOpen, setMenuOpen] = useState(false);
  const telHref = `tel:${siteConfig3.phone.replace(/\s/g, "")}`;

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between w-full px-4 md:px-8 py-3 max-w-7xl mx-auto gap-4">
        <Link href="/home-3" className="flex items-center h-12 shrink-0">
          <Image
            alt={`${siteConfig3.name} Logo`}
            src={siteConfig3.logo}
            width={siteConfig3.logoWidth}
            height={siteConfig3.logoHeight}
            className="h-full w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks3.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link text-sm font-semibold transition-colors ${
                i === 0 ? "nav-link-active text-primary" : "text-gray-700 hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5 shrink-0">
          <a href={telHref} className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-secondary/15 text-secondary-hover">
              <PhoneCall className="h-4 w-4" fill="currentColor" strokeWidth={0} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                Call 24/7
              </span>
              <span className="text-sm font-bold text-primary">{siteConfig3.phone}</span>
            </span>
          </a>
          <a
            href={telHref}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-secondary text-primary font-bold text-sm shadow-md hover:bg-secondary-hover transition-colors"
          >
            Call Now
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden text-primary p-2"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="flex flex-col px-4 py-4 space-y-1">
            {navLinks3.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-2 text-sm font-semibold text-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={telHref}
              className="flex items-center justify-center gap-2 px-6 py-3 mt-3 bg-secondary text-primary font-bold rounded-full"
            >
              <PhoneCall className="h-5 w-5" fill="currentColor" strokeWidth={0} />
              {siteConfig3.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
