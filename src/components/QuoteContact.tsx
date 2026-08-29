"use client";

import { useState, type FormEvent } from "react";
import { Clock, MessageCircle, PhoneCall } from "lucide-react";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/site-data";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteContact() {
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
    <section id="quote" className="py-24 bg-primary text-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <Reveal>
          <div className="bg-primary-light p-8 md:p-10 rounded-[14px]">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Get a Free Quote
            </h2>
            <p className="font-sans text-gray-300 mb-8 text-sm">
              Fill out the form below or contact us directly. We aim to
              respond within 15 minutes.
            </p>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  name="name"
                  required
                  className="w-full bg-primary-dark border border-transparent rounded-lg p-4 text-white placeholder:text-gray-500 focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                  placeholder="Name"
                  type="text"
                />
                <input
                  name="phone"
                  required
                  className="w-full bg-primary-dark border border-transparent rounded-lg p-4 text-white placeholder:text-gray-500 focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                  placeholder="Phone Number"
                  type="tel"
                />
              </div>
              <input
                name="tyreSize"
                className="w-full bg-primary-dark border border-transparent rounded-lg p-4 text-white placeholder:text-gray-500 focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                placeholder="Vehicle Reg or Tyre Size (e.g. 205/55 R16)"
                type="text"
              />
              <textarea
                name="details"
                className="w-full bg-primary-dark border border-transparent rounded-lg p-4 text-white placeholder:text-gray-500 focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors resize-none"
                placeholder="Location / Details"
                rows={4}
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 bg-secondary text-primary font-bold rounded-full hover:bg-secondary-hover transition-colors btn-scale mt-2 disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Request Quote"}
              </button>
              {status === "success" && (
                <p className="text-secondary text-sm font-semibold">
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
          </div>
        </Reveal>

        <Reveal delayMs={200} className="flex flex-col justify-center">
          <h2 className="font-heading text-3xl font-bold mb-10">
            Direct Contact
          </h2>
          <div className="space-y-10">
            <div className="flex items-start group">
              <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center text-secondary mr-6 shrink-0 group-hover:bg-secondary group-hover:text-primary transition-colors duration-300 shadow-md">
                <PhoneCall className="h-7 w-7" fill="currentColor" strokeWidth={0} />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold mb-1 text-gray-200">
                  Emergency Hotline
                </h4>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-secondary font-heading text-3xl font-bold mb-1 tracking-tight block"
                >
                  {siteConfig.phone}
                </a>
                <p className="text-gray-400 text-sm">Available 24/7/365</p>
              </div>
            </div>
            <div className="flex items-start group">
              <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center text-secondary mr-6 shrink-0 group-hover:bg-secondary group-hover:text-primary transition-colors duration-300 shadow-md">
                <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold mb-1 text-gray-200">
                  WhatsApp Us
                </h4>
                <p className="text-gray-300 mb-2 text-sm">
                  Send us a message with your tyre size for a quick quote.
                </p>
                <a
                  href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary font-bold hover:text-white transition-colors text-sm inline-flex items-center"
                >
                  Message Now →
                </a>
              </div>
            </div>
            <div className="flex items-start group">
              <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center text-secondary mr-6 shrink-0 group-hover:bg-secondary group-hover:text-primary transition-colors duration-300 shadow-md">
                <Clock className="h-7 w-7" fill="currentColor" strokeWidth={0} />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold mb-1 text-gray-200">
                  Business Hours
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
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
