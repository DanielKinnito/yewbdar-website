"use client";

import React, { useState } from "react";
import { CheckCircle2, Truck, ArrowRight, ShieldCheck, Calendar, Sparkles } from "lucide-react";

export function ValueBentoCards() {
  const [zipInput, setZipInput] = useState("");
  const [zipStatus, setZipStatus] = useState<string | null>(null);

  const checkZip = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipInput.trim()) return;
    const cleanZip = zipInput.trim();
    if (cleanZip.startsWith("30") || cleanZip.startsWith("31")) {
      setZipStatus(`🟢 Active Crew in Zone (${cleanZip}) · Same-Day Dispatch Available`);
    } else {
      setZipStatus(`🟢 Metro Atlanta Service Area · Next-Day & Custom Routes Available`);
    }
  };

  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Local Experience with Double-Bezel Architecture */}
          <div className="bezel-shell">
            <div className="bezel-core p-8 sm:p-10 flex flex-col justify-between h-full relative overflow-hidden">
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-forest bg-forest-light/80 px-3 py-0.5 rounded-full border border-forest/20">
                    Local Experience
                  </span>
                  <span className="text-xs font-semibold text-zinc-muted font-mono">
                    Est. 2011 · Atlanta
                  </span>
                </div>

                {/* Bold Typographic Metric Anchor */}
                <div className="flex items-baseline gap-3 my-4">
                  <span className="text-6xl sm:text-7xl font-black text-charcoal tracking-tighter">
                    15+
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-charcoal tracking-tight">
                    Years in Atlanta
                  </span>
                </div>

                <p className="text-sm sm:text-base text-zinc-muted leading-relaxed mb-6">
                  Over a decade of residential and commercial cleanouts. We know every alley, gated community, and freight elevator regulation across all 29 Metro counties.
                </p>
              </div>

              {/* Interactive Physical Artifact: Instant Atlanta ZIP Coverage Checker */}
              <div className="mt-4 pt-6 border-t border-black/[0.05]">
                <span className="text-xs font-bold text-charcoal block mb-2.5">
                  Check Today's Same-Day Availability in Your Neighborhood:
                </span>
                <form onSubmit={checkZip} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={zipInput}
                    onChange={(e) => setZipInput(e.target.value)}
                    placeholder="Enter Atlanta ZIP (e.g. 30309, 30305)"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-surface-subtle border border-black/[0.06] text-xs sm:text-sm text-charcoal placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-forest hover:bg-forest-dark text-white text-xs font-bold apple-press shadow-sm transition-colors shrink-0"
                  >
                    Check Route
                  </button>
                </form>

                {zipStatus && (
                  <div className="mt-3 p-3 rounded-xl bg-forest-light/80 border border-forest/15 text-xs font-medium text-forest-dark flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                    <span>{zipStatus}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Card 2: More Room Per Haul with Metric Anchor & Visual Truck Meter */}
          <div className="bezel-shell">
            <div className="bezel-core p-8 sm:p-10 flex flex-col justify-between h-full relative overflow-hidden">
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-forest bg-forest-light/80 px-3 py-0.5 rounded-full border border-forest/20">
                    More Room Per Haul
                  </span>
                  <span className="text-xs font-semibold text-forest-dark bg-forest-light px-2.5 py-0.5 rounded-full border border-forest/15">
                    Save 20–30% Direct
                  </span>
                </div>

                {/* Bold Typographic Metric Anchor */}
                <div className="flex items-baseline gap-3 my-4">
                  <span className="text-6xl sm:text-7xl font-black text-forest tracking-tighter">
                    16 ft
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-charcoal tracking-tight">
                    Heavy Box Trucks
                  </span>
                </div>

                <p className="text-sm sm:text-base text-zinc-muted leading-relaxed mb-6">
                  Bigger trucks mean fewer trips and lower rates for Atlanta homeowners. Holds the equivalent of 6 to 8 standard pickup truck beds in a single sweep.
                </p>
              </div>

              {/* Visual Comparison Artifact: Standard Franchise vs Yewbdar Box Truck */}
              <div className="mt-4 pt-6 border-t border-black/[0.05] space-y-3">
                {/* Franchise pickup bar */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-zinc-muted font-medium">Standard 1-800 Franchise Truck</span>
                    <span className="text-zinc-muted font-mono font-medium">10–12 ft (~$850 full)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-zinc-200 overflow-hidden">
                    <div className="h-full bg-zinc-400 rounded-full w-7/12" />
                  </div>
                </div>

                {/* Yewbdar 16-ft box truck bar */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-charcoal font-bold flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-forest" />
                      <span>Yewbdar 16-Foot Box Truck</span>
                    </span>
                    <span className="text-forest font-bold font-mono">16 ft (~$550–$650 full)</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-surface-subtle border border-black/[0.04] overflow-hidden">
                    <div className="h-full bg-forest rounded-full w-full" />
                  </div>
                </div>

                <p className="text-[11px] text-zinc-muted font-medium pt-1">
                  More volume per trip = less overhead, lower prices, and faster cleanouts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
