"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, MapPin, PhoneCall, X } from "lucide-react";
import { areasV2, navLinksV2, siteConfigV2 } from "@/lib/site-data-v2";

export default function Header2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
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
          ? "bg-[#0b1e3d] shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full px-4 md:px-16 py-3 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center h-14 shrink-0">
          <Image
            alt={`${siteConfigV2.name} Logo`}
            src={siteConfigV2.logo}
            width={siteConfigV2.logoWidth}
            height={siteConfigV2.logoHeight}
            className="h-full w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinksV2.map((link) =>
            link.label === "Areas" ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm font-semibold text-white/80 hover:text-white transition-colors duration-200"
                  aria-expanded={areasOpen}
                  onClick={() => setAreasOpen((open) => !open)}
                >
                  {link.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${areasOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {areasOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[560px] z-50">
                    <div className="bg-[#0b1e3d] border border-white/10 rounded-2xl shadow-2xl p-5">
                      <div className="flex items-center justify-between mb-3 px-1">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#ffd700]">
                          Areas We Cover
                        </span>
                        <span className="text-[11px] font-semibold text-white/50">
                          24/7 Dispatch
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {areasV2.map((area) => (
                          <Link
                            key={area.href}
                            href={area.href}
                            className="group flex flex-col gap-0.5 rounded-xl px-3 py-2.5 hover:bg-white/5 transition-colors"
                            onClick={() => setAreasOpen(false)}
                          >
                            <span className="flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-[#0058f7] transition-colors">
                              <MapPin className="h-3.5 w-3.5 text-[#0058f7] shrink-0" />
                              {area.label}
                            </span>
                            <span className="text-xs text-white/50 pl-5">{area.blurb}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-white/80 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex flex-col items-end mr-2">
            <span className="text-xs font-bold text-white/60 uppercase tracking-wider">
              24/7 Emergency
            </span>
            <a
              href={telHref}
              className="text-white font-black text-lg tracking-tight hover:text-[#0058f7] transition-colors"
            >
              {siteConfigV2.phone}
            </a>
          </div>
          <a
            href="#contact"
            className="bg-[#0058f7] text-white rounded-full px-4 py-2 font-semibold flex items-center justify-center transition-all duration-300 hover:bg-[#0046c4] hover:shadow-[0_4px_14px_0_rgba(0,88,247,0.39)] hover:-translate-y-0.5 min-h-[40px] text-sm"
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
        <div className="md:hidden border-t border-white/10 bg-[#0b1e3d] max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col px-4 py-4 space-y-1">
            {navLinksV2.map((link) =>
              link.label === "Areas" ? (
                <div key={link.label}>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between py-2 text-sm font-semibold text-white/80"
                    aria-expanded={mobileAreasOpen}
                    onClick={() => setMobileAreasOpen((open) => !open)}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${mobileAreasOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileAreasOpen && (
                    <div className="pl-3 pb-2 space-y-1">
                      {areasV2.map((area) => (
                        <Link
                          key={area.href}
                          href={area.href}
                          className="flex items-center gap-2 py-2 text-sm font-medium text-white/70"
                          onClick={() => setMenuOpen(false)}
                        >
                          <MapPin className="h-3.5 w-3.5 text-[#0058f7] shrink-0" />
                          {area.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-2 text-sm font-semibold text-white/80"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href={telHref}
              className="flex items-center justify-center gap-2 px-6 py-3 mt-3 bg-[#0058f7] text-white font-bold rounded-full"
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
