"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "../Reveal";
import { galleryImages } from "@/lib/site-data-v2";

export default function Gallery2() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const cardWidth = card instanceof HTMLElement ? card.offsetWidth + 20 : 300;
    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  }

  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <Reveal className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#ff6b00] font-bold tracking-wider uppercase text-sm mb-2 block">
              On the Job
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Out on the Road.
            </h2>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Scroll gallery left"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#ff6b00] hover:border-[#ff6b00] transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Scroll gallery right"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#ff6b00] hover:border-[#ff6b00] transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory px-4 md:px-16 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {galleryImages.map((image, i) => (
          <div
            key={image.src}
            data-card
            className="group relative shrink-0 w-[220px] sm:w-[260px] md:w-[280px] aspect-[3/4] rounded-2xl overflow-hidden snap-start"
          >
            <Image
              alt={image.alt}
              src={image.src}
              fill
              sizes="280px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/10 to-transparent" />
            <span className="absolute top-4 left-4 text-white/70 font-mono text-xs">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="absolute bottom-4 left-4 right-4 text-white font-bold text-sm">
              {image.caption}
            </span>
          </div>
        ))}
        <div className="shrink-0 w-px" aria-hidden="true" />
      </div>
    </section>
  );
}
