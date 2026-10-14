"use client";

import React, { useState } from "react";
import { Check, ShieldCheck, Truck, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PricingTierItem, mockPricingTiers } from "@/lib/cms";

interface PricingSectionProps {
  tiers?: PricingTierItem[];
}

export function PricingSection({ tiers }: PricingSectionProps) {
  const activeTiers = tiers && tiers.length > 0 ? tiers : mockPricingTiers;

  // Default to the first popular tier, or the middle/first tier
  const defaultTier =
    activeTiers.find((t) => t.popular) ||
    activeTiers[Math.floor(activeTiers.length / 2)] ||
    activeTiers[0];

  const [selectedTier, setSelectedTier] = useState<PricingTierItem>(defaultTier);

  // Dynamic grid columns based on number of tiers
  const getGridCols = (count: number) => {
    if (count <= 2) return "grid-cols-1 md:grid-cols-2";
    if (count === 3) return "grid-cols-1 md:grid-cols-3";
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
  };

  return (
    <section id="pricing" className="py-20 sm:py-32 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-forest bg-forest-light/80 px-3.5 py-1 rounded-full border border-forest/20 inline-block mb-3">
            Transparent Atlanta Rates
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
            Clear Volume Pricing. No Franchise Surcharges.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-muted leading-relaxed">
            You only pay for the exact volume your items occupy in our heavy 16-ft box truck. Every quote includes two uniformed crew members, full loading labor, and disposal fees.
          </p>
        </div>

        {/* Interactive Volume Estimator & Box Truck Configurator */}
        <div className="bezel-shell mb-12 sm:mb-16">
          <div className="bezel-core p-6 sm:p-10 bg-white rounded-3xl border border-stone-200/80 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-black/[0.05]">
              <div>
                <span className="text-xs font-bold text-forest uppercase tracking-wider block mb-1">
                  Interactive Volume Estimator
                </span>
                <h3 className="text-2xl font-bold text-charcoal tracking-tight">
                  {selectedTier.name} ({selectedTier.fraction})
                </h3>
                <span className="text-xs text-zinc-muted">
                  Capacity: <strong className="text-charcoal font-semibold">{selectedTier.pickupEquivalent}</strong> ({selectedTier.cubicYards})
                </span>
              </div>

              {/* Price & Selection CTA */}
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-xs text-zinc-muted block font-medium">Estimated Rate</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight font-mono">
                    {selectedTier.price}
                  </span>
                </div>
                <a
                  href="#estimate-form"
                  className="px-6 py-3 rounded-full bg-forest hover:bg-forest-dark text-white text-xs sm:text-sm font-bold apple-press shadow-sm whitespace-nowrap transition-colors"
                >
                  Reserve This Size
                </a>
              </div>
            </div>

            {/* Interactive Selector Pill Tabs */}
            <div className={`grid gap-2 pt-6 pb-6 ${getGridCols(activeTiers.length)}`}>
              {activeTiers.map((tier) => (
                <button
                  key={tier.id || tier.name}
                  type="button"
                  onClick={() => setSelectedTier(tier)}
                  className={`p-3 rounded-2xl border text-left transition-all apple-press ${
                    selectedTier.id === tier.id
                      ? "bg-forest-light/60 border-forest/30 shadow-sm"
                      : "bg-surface-subtle hover:bg-white border-black/[0.04] text-zinc-600"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-charcoal">{tier.fraction}</span>
                    {tier.popular && (
                      <span className="text-[9px] font-bold uppercase tracking-wider text-forest bg-forest-light px-1.5 py-0.5 rounded-full border border-forest/15">
                        Popular
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-bold font-mono text-forest block">
                    {tier.price}
                  </span>
                </button>
              ))}
            </div>

            {/* Visual Box Truck Fill Simulation Meter */}
            <div className="mt-2 p-5 rounded-2xl bg-surface-subtle border border-black/[0.05]">
              <div className="flex items-center justify-between text-xs font-semibold text-charcoal mb-2">
                <span className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-forest" />
                  <span>16-Foot Heavy Box Truck Capacity Meter</span>
                </span>
                <span className="font-mono text-forest font-bold">{selectedTier.fillPct}% Volume</span>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full h-4 rounded-full bg-zinc-200 overflow-hidden relative border border-black/[0.04]">
                <motion.div
                  initial={false}
                  animate={{ width: `${selectedTier.fillPct}%` }}
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  className="h-full bg-gradient-to-r from-forest to-emerald-600 rounded-full"
                />
              </div>

              <div className="flex justify-between text-[10px] text-zinc-400 font-mono mt-1 px-1">
                <span>0% Empty</span>
                <span>25% (1/4)</span>
                <span>50% (1/2)</span>
                <span>75% (3/4)</span>
                <span>100% Full Truckload</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Cards with Double-Bezel Design */}
        <div className={`grid gap-6 ${getGridCols(activeTiers.length)}`}>
          {activeTiers.map((tier) => (
            <div
              key={tier.id || tier.name}
              className={`bezel-shell flex flex-col justify-between ${
                tier.popular ? "ring-2 ring-forest/30" : ""
              }`}
            >
              <div className="bezel-core p-6 sm:p-7 flex flex-col justify-between h-full bg-white rounded-3xl border border-stone-200/80 shadow-sm">
                <div>
                  {tier.popular && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-forest bg-forest-light px-2.5 py-0.5 rounded-full mb-3 border border-forest/15">
                      Most Common Cleanout
                    </span>
                  )}
                  <span className="text-xs font-semibold text-zinc-muted block font-mono">
                    {tier.fraction}
                  </span>
                  <h4 className="text-lg font-bold text-charcoal tracking-tight mt-1 mb-2">
                    {tier.name}
                  </h4>
                  <div className="text-2xl font-extrabold text-charcoal tracking-tight mb-3 font-mono">
                    {tier.price}
                  </div>
                  <p className="text-xs text-zinc-muted leading-relaxed mb-5">
                    {tier.description}
                  </p>

                  {tier.features && tier.features.length > 0 && (
                    <div className="space-y-2 pt-4 border-t border-black/[0.04]">
                      {tier.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-charcoal/80">
                          <Check className="w-3.5 h-3.5 text-forest shrink-0 stroke-[2.5]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4">
                  <a
                    href="#estimate-form"
                    className="w-full inline-flex items-center justify-center py-2.5 rounded-full bg-surface-subtle hover:bg-forest hover:text-white border border-black/[0.06] text-xs font-bold text-charcoal transition-all duration-150 apple-press shadow-sm"
                  >
                    Select Load Size
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-xs text-zinc-muted flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-forest shrink-0" />
          <span>Free, firm in-person quote before anything is loaded. If you decline, you owe $0.</span>
        </div>
      </div>
    </section>
  );
}
