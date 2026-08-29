"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-data";

export default function Navbar2() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-[#ffffff] shadow-[0px_8px_24px_rgba(11,37,69,0.08)] ${
        scrolled ? "backdrop-blur-md bg-[#ffffff]/90" : ""
      }`}
    >
      <div className="flex justify-between items-center w-full px-4 md:px-10 max-w-7xl mx-auto h-20">
        <Link
          href="/home-2"
          className="font-heading text-2xl font-bold text-[#001026] shrink-0 hover:scale-105 transition-transform duration-200"
        >
          TYRE ASSIST 24/7
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#001026] font-medium hover:text-[#fdc003] transition-colors duration-200 font-mono text-xs uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="hidden md:flex items-center justify-center px-6 py-3 bg-[#fdc003] text-[#6c5000] font-mono text-xs font-bold uppercase tracking-wider rounded hover:scale-105 transition-transform duration-200 shadow-[0px_8px_24px_rgba(11,37,69,0.08)]"
          >
            <Phone className="mr-2 h-5 w-5" fill="currentColor" strokeWidth={0} />
            Call Now
          </a>
          <button
            type="button"
            className="md:hidden text-[#001026] p-2"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#ffffff] shadow-lg">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#001026] font-medium font-mono text-xs uppercase tracking-wider"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center px-6 py-3 bg-[#fdc003] text-[#6c5000] font-bold rounded"
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
