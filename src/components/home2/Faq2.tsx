import { ChevronDown } from "lucide-react";
import Reveal from "../Reveal";
import { faqsV2 } from "@/lib/site-data-v2";

export default function Faq2() {
  return (
    <section className="py-24 bg-[#0b1e3d] border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 md:px-16">
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl font-black text-white tracking-tight mb-4">
            Frequently Asked Questions.
          </h2>
          <p className="text-gray-400 text-lg">
            Got a question? We&apos;ve got answers to help you understand our
            service better.
          </p>
        </Reveal>
        <Reveal className="space-y-2">
          {faqsV2.map((faq) => (
            <details
              key={faq.question}
              className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-2 p-6 text-white font-bold text-lg">
                {faq.question}
                <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-white group-open:-rotate-180 transition-transform duration-300">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400 leading-relaxed">{faq.answer}</div>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
