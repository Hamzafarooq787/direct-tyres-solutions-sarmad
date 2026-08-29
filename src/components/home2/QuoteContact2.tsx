"use client";

import { useState, type FormEvent } from "react";
import { Clock, MessageCircle, PhoneCall } from "lucide-react";
import Reveal from "../Reveal";
import { siteConfig } from "@/lib/site-data";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteContact2() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          tyreSize: data.get("tyreSize"),
          details: data.get("details"),
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="quote" className="py-24 bg-[#001026] text-white px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <Reveal>
          <h2 className="font-heading text-[28px] leading-[34px] md:text-[32px] md:leading-[40px] font-bold mb-4">
            Get a Free Quote
          </h2>
          <p className="font-sans text-white/80 mb-8">
            Fill out the form below or contact us directly. We aim to
            respond within 15 minutes.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                name="name"
                required
                className="w-full bg-[#0b2545] border-none rounded p-4 text-white placeholder:text-white/50 focus:ring-2 focus:ring-[#fdc003] outline-none"
                placeholder="Name"
                type="text"
              />
              <input
                name="phone"
                required
                className="w-full bg-[#0b2545] border-none rounded p-4 text-white placeholder:text-white/50 focus:ring-2 focus:ring-[#fdc003] outline-none"
                placeholder="Phone Number"
                type="tel"
              />
            </div>
            <input
              name="tyreSize"
              className="w-full bg-[#0b2545] border-none rounded p-4 text-white placeholder:text-white/50 focus:ring-2 focus:ring-[#fdc003] outline-none"
              placeholder="Vehicle Reg or Tyre Size (e.g. 205/55 R16)"
              type="text"
            />
            <textarea
              name="details"
              className="w-full bg-[#0b2545] border-none rounded p-4 text-white placeholder:text-white/50 focus:ring-2 focus:ring-[#fdc003] outline-none"
              placeholder="Location / Details"
              rows={3}
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-4 bg-[#fdc003] text-[#001026] font-bold rounded hover:bg-[#fdc003]/90 transition-colors disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Request Quote"}
            </button>
            {status === "success" && (
              <p className="text-[#fdc003] text-sm font-semibold">
                Thanks! We&apos;ve received your request and will be in
                touch shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm font-semibold">
                Something went wrong. Please call us directly instead.
              </p>
            )}
          </form>
        </Reveal>

        <Reveal delayMs={200}>
          <h2 className="font-heading text-[28px] leading-[34px] md:text-[32px] md:leading-[40px] font-bold mb-8">
            Direct Contact
          </h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#fdc003]/10 rounded flex items-center justify-center text-[#fdc003] mr-6 shrink-0">
                <PhoneCall className="h-5 w-5" fill="currentColor" strokeWidth={0} />
              </div>
              <div>
                <h4 className="font-heading text-lg mb-1">Emergency Hotline</h4>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-[#fdc003] font-heading text-2xl mb-1 block"
                >
                  {siteConfig.phone}
                </a>
                <p className="text-white/60 text-sm">Available 24/7/365</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#fdc003]/10 rounded flex items-center justify-center text-[#fdc003] mr-6 shrink-0">
                <MessageCircle className="h-5 w-5" fill="currentColor" strokeWidth={0} />
              </div>
              <div>
                <h4 className="font-heading text-lg mb-1">WhatsApp Us</h4>
                <p className="text-white/80 mb-2">
                  Send us a message with your tyre size for a quick quote.
                </p>
                <a
                  href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fdc003] font-bold hover:underline"
                >
                  Message Now →
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#fdc003]/10 rounded flex items-center justify-center text-[#fdc003] mr-6 shrink-0">
                <Clock className="h-5 w-5" fill="currentColor" strokeWidth={0} />
              </div>
              <div>
                <h4 className="font-heading text-lg mb-1">Business Hours</h4>
                <p className="text-white/80">
                  Emergency: 24/7
                  <br />
                  Office: Mon-Fri, 9am - 6pm
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
