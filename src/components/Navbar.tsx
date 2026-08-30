"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 h-20 flex items-center ${
        scrolled ? "bg-primary shadow-[0_8px_24px_rgba(0,0,0,0.25)]" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full px-4 md:px-8 max-w-7xl mx-auto h-full">
        <Link href="/" className="shrink-0 h-14 flex items-center">
          <Image
            alt={`${siteConfig.name} Logo`}
            src={siteConfig.logo}
            width={siteConfig.logoWidth}
            height={siteConfig.logoHeight}
            className="h-full w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-white/80 font-semibold text-sm tracking-wide uppercase hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="hidden md:flex items-center justify-center px-6 py-2.5 bg-secondary text-primary font-bold rounded-full btn-scale shadow-sm"
          >
            <Phone className="mr-2 h-5 w-5" fill="currentColor" strokeWidth={0} />
            Call Now
          </a>
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
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-primary shadow-lg">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 font-semibold text-sm tracking-wide uppercase"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center px-6 py-3 bg-secondary text-primary font-bold rounded-full"
            >
              <Phone className="mr-2 h-5 w-5" fill="currentColor" strokeWidth={0} />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
