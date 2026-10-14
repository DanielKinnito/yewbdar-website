"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you offer same-day junk removal in Metro Atlanta?",
    answer:
      "Yes. We reserve crew slots every single day for same-day and next-day cleanouts across Fulton, DeKalb, Cobb, Gwinnett, and Clayton counties. Call before noon for the best afternoon 2-hour arrival windows.",
  },
  {
    question: "How does your pricing work?",
    answer:
      "Our pricing is based strictly on how much volume your items occupy in our heavy 16-foot box truck—from a single item up to a full truckload. We confirm a firm, written price before touching anything. Zero corporate franchise royalties, no travel fees, and no surprise labor add-ons.",
  },
  {
    question: "What items can you NOT take?",
    answer:
      "For safety and EPA regulations, we cannot haul hazardous chemicals, wet paint, motor oil, medical waste, or pressurized tanks. We take virtually everything else: furniture, mattresses, appliances, electronics, yard debris, and construction remodel waste.",
  },
  {
    question: "What happens to my junk after you haul it away?",
    answer:
      "We sort every load. Usable furniture and housewares are donated to local Atlanta non-profits and community thrift partners. Metal and electronics go to licensed recycling centers. Over 65% of everything we haul bypasses municipal landfills.",
  },
  {
    question: "Do I need to move the items outside before you arrive?",
    answer:
      "Not at all. Our uniformed, two-person crew handles all the heavy lifting. Just point to what needs to go—in the attic, basement, second-floor bedroom, or backyard—and we carry it out safely and sweep the floor clean.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-32 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-forest bg-forest-light/80 px-3.5 py-1 rounded-full border border-forest/20 inline-block mb-3">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
            Real Questions, Honest Answers
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-muted leading-relaxed">
            Everything you need to know about our Atlanta hauling process, pricing guarantees, and recycling policies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="bezel-shell">
                <div className="bezel-core overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full p-6 sm:p-8 flex items-center justify-between gap-4 text-left font-bold text-lg sm:text-xl text-charcoal tracking-tight apple-press"
                  >
                    <span>{faq.question}</span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "bg-forest text-white rotate-180" : "bg-surface-subtle text-charcoal"
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 34,
                        }}
                      >
                        <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-sm sm:text-base text-zinc-muted leading-relaxed border-t border-black/[0.04]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
