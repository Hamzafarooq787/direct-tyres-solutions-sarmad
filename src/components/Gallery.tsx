import Image from "next/image";
import Reveal from "./Reveal";
import { galleryImages } from "@/lib/site-data";

export default function Gallery() {
  return (
    <section className="py-24 bg-surface px-4 md:px-8" id="gallery">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            On the Road, On Time
          </h2>
          <p className="font-sans text-lg text-text-muted max-w-2xl mx-auto">
            A look at our fleet and technicians out fitting tyres across the
            region, day and night.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {galleryImages.map((image, i) => (
            <Reveal
              key={image.src}
              delayMs={(i % 3) * 100}
              className={
                i % 3 === 1 ? "md:mt-10" : i % 3 === 2 ? "md:mt-5" : ""
              }
            >
              <div className="group relative rounded-2xl overflow-hidden shadow-sm border border-border-color hover:border-secondary transition-colors duration-300">
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    alt={image.alt}
                    src={image.src}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white font-heading font-bold text-sm tracking-wide">
                    {image.caption}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
