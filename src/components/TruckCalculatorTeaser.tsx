"use client";

import React, { useState } from "react";
import { CheckCircle2, Truck, ArrowRight, Sparkles, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface LoadOption {
  id: string;
  name: string;
  fraction: string;
  priceRange: string;
  typicalItems: string;
  franchiseComparison: string;
  percentage: number;
}

const loadOptions: LoadOption[] = [
  {
    id: "single",
    name: "Single Item / Minimum",
    fraction: "1-2 Items",
    priceRange: "$75 - $125",
    typicalItems: "Sofa, refrigerator, mattress, or appliance pickup",
    franchiseComparison: "1-800 guys charge $150+",
    percentage: 15,
  },
  {
    id: "quarter",
    name: "1/4 Truckload",
    fraction: "1/4 Truck",
    priceRange: "$175 - $225",
    typicalItems: "Bedroom set, loveseat, 4-6 contractor trash bags",
    franchiseComparison: "Franchises charge $280+",
    percentage: 25,
  },
  {
    id: "half",
    name: "1/2 Truckload",
    fraction: "1/2 Truck",
    priceRange: "$295 - $350",
    typicalItems: "Full living room, basement declutter, shed clearout",
    franchiseComparison: "Franchises charge $450+",
    percentage: 50,
  },
  {
    id: "full",
    name: "Full 16-Ft Box Truck",
    fraction: "Full Truck",
    priceRange: "$550 - $650",
    typicalItems: "Complete estate cleanout, renovation debris, full garage",
    franchiseComparison: "Franchises charge $800 - $950+",
    percentage: 100,
  },
];

export function TruckCalculatorTeaser() {
  const [selectedLoad, setSelectedLoad] = useState<LoadOption>(loadOptions[1]); // Default to 1/4 truck

  return (
    <div className="w-full rounded-3xl bg-[#F5F5F7] border border-black/[0.06] p-6 sm:p-7 shadow-card relative overflow-hidden">
      {/* Top Header Card */}
      <div className="flex items-start justify-between gap-4 pb-5 border-b border-black/[0.06]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-forest-light text-forest-dark text-[11px] font-semibold tracking-wide uppercase mb-1.5">
            <Sparkles className="w-3 h-3 text-forest" />
            <span>Transparent Atlanta Pricing</span>
          </div>
          <h3 className="text-xl font-bold text-charcoal tracking-tight">
            Instant Volume Estimator
          </h3>
          <p className="text-xs text-zinc-muted mt-0.5">
            Select an approximate load size for a fast upfront ballpark.
          </p>
        </div>

        <div className="hidden sm:flex flex-col items-end text-right">
          <span className="text-[11px] text-zinc-muted font-medium">Atlanta Metro Rate</span>
          <span className="text-xs font-semibold text-forest flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> No Franchise Markup
          </span>
        </div>
      </div>

      {/* Load Selection Segmented Control */}
      <div className="mt-5">
        <label className="block text-xs font-semibold text-charcoal mb-2">
          Estimated Load Size:
        </label>
        <div className="grid grid-cols-4 gap-1.5 p-1 rounded-2xl bg-white border border-black/[0.06] relative">
          {loadOptions.map((opt) => {
            const isSelected = selectedLoad.id === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedLoad(opt)}
                className={`relative py-2 px-1 text-center rounded-xl text-xs font-semibold transition-colors duration-150 apple-press z-10 ${
                  isSelected ? "text-white" : "text-charcoal hover:text-black"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="segmentedPill"
                    className="absolute inset-0 bg-forest rounded-xl -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="block truncate">{opt.fraction}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Load Details Box */}
      <div className="mt-5 rounded-2xl bg-white p-4 sm:p-5 border border-black/[0.06]">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-xs font-medium text-zinc-muted block">Estimated Price</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
              {selectedLoad.priceRange}
            </span>
          </div>

          <div className="text-right">
            <span className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 inline-block">
              Save ~30% vs 1-800 Guys
            </span>
            <span className="block text-[11px] text-zinc-muted mt-1">
              {selectedLoad.franchiseComparison}
            </span>
          </div>
        </div>

        {/* Visual Truck Meter */}
        <div className="mt-4 pt-4 border-t border-black/[0.04]">
          <div className="flex items-center justify-between text-xs font-medium text-charcoal mb-1.5">
            <span className="flex items-center gap-1.5 text-zinc-muted">
              <Truck className="w-3.5 h-3.5 text-forest" />
              <span>16-Foot Heavy Duty Box Truck</span>
            </span>
            <span className="font-semibold text-forest">{selectedLoad.percentage}% Capacity</span>
          </div>

          <div className="w-full h-2 rounded-full bg-surface-subtle border border-black/[0.04] overflow-hidden">
            <motion.div
              className="h-full bg-forest rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${selectedLoad.percentage}%` }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            />
          </div>

          <p className="text-xs text-charcoal mt-2.5 font-medium flex items-start gap-1.5">
            <span className="text-forest font-bold">Fits:</span>
            <span className="text-zinc-muted">{selectedLoad.typicalItems}</span>
          </p>
        </div>
      </div>

      {/* Guarantee & Call to Action */}
      <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-2 text-xs text-zinc-muted">
          <ShieldCheck className="w-4 h-4 text-forest shrink-0" />
          <span>Final price confirmed in-person before we load. Zero obligation.</span>
        </div>

        <a
          href="#estimate-booking"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-forest hover:bg-forest-dark text-white text-xs font-bold transition-all duration-200 active:scale-[0.98] shadow-sm shrink-0"
        >
          <span>Confirm This Estimate</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
