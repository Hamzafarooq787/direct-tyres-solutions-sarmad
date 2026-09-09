"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export default function ScrollDeck({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-deck-card]");
    const cardWidth = card instanceof HTMLElement ? card.offsetWidth + 24 : 340;
    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div className="hidden md:flex items-center gap-2 absolute -top-16 right-0">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Scroll left"
          className="w-10 h-10 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-[#0b1e3d] shadow-sm transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Scroll right"
          className="w-10 h-10 rounded-full bg-[#1b61ff] hover:bg-[#004ad2] flex items-center justify-center text-white shadow-sm transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
    </div>
  );
}
