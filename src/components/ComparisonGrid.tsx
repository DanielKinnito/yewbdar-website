import React from "react";
import { Check, X, ShieldCheck, DollarSign, Clock, Recycle, Users, Sparkles } from "lucide-react";

interface ComparisonItem {
  feature: string;
  category: string;
  icon: React.ElementType;
  yewbdar: {
    highlight: string;
    description: string;
  };
  competitors: {
    highlight: string;
    description: string;
  };
}

const comparisons: ComparisonItem[] = [
  {
    feature: "Pricing & Franchise Fees",
    category: "Cost Advantage",
    icon: DollarSign,
    yewbdar: {
      highlight: "Save ~20% to 35%",
      description: "Direct local contractor pricing. Zero franchise royalties or national ad fees tacked onto your bill.",
    },
    competitors: {
      highlight: "Heavy Franchise Markup",
      description: "1-800 guys charge high fees to cover corporate royalties, national call centers, and franchise licenses.",
    },
  },
  {
    feature: "Arrival Windows",
    category: "Respect For Your Time",
    icon: Clock,
    yewbdar: {
      highlight: "Guaranteed 2-Hour Window",
      description: "Convenient 2-hour arrival window with a direct text/call 30 minutes before the crew pulls up.",
    },
    competitors: {
      highlight: "Vague 4-Hour Windows",
      description: "Large 4-hour time blocks that leave homeowners waiting by the door all morning or afternoon.",
    },
  },
  {
    feature: "Recycling & Donation",
    category: "Environmental Commitment",
    icon: Recycle,
    yewbdar: {
      highlight: "65% Recycled or Donated",
      description: "Usable items sorted and donated to Metro Atlanta non-profits and thrift partners, minimizing landfill waste.",
    },
    competitors: {
      highlight: "Landfill Dumping",
      description: "Most franchise operators haul everything straight to local transfer stations to rush to the next job.",
    },
  },
  {
    feature: "Crew & Insurance",
    category: "Safety & Trust",
    icon: Users,
    yewbdar: {
      highlight: "Uniformed In-House Staff",
      description: "Background-checked, trained, and polite employees. Fully licensed with $1M+ property damage insurance.",
    },
    competitors: {
      highlight: "High-Turnover Temps",
      description: "Frequent turnover and rotating day-labor staff with variable training and property care standards.",
    },
  },
];

export function ComparisonGrid() {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-surface-subtle border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-light text-forest-dark text-xs font-semibold apple-eyebrow mb-3">
            <Sparkles className="w-3.5 h-3.5 text-forest" />
            <span>Honest Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal apple-display">
            Why Metro Atlanta Calls Yewbdar First
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-muted max-w-2xl mx-auto leading-relaxed">
            Local accountability beats national franchise markup every single time. Here is how our hauling service stacks up against the 1-800 guys.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {comparisons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.feature}
                className="rounded-3xl bg-white border border-black/[0.06] p-6 sm:p-8 shadow-card flex flex-col justify-between"
              >
                <div>
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-zinc-muted uppercase tracking-wider">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-surface flex items-center justify-center text-forest border border-black/[0.04]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-charcoal tracking-tight mb-5">
                    {item.feature}
                  </h3>

                  {/* Dual comparison columns */}
                  <div className="space-y-4">
                    {/* Yewbdar Advantage */}
                    <div className="p-4 rounded-2xl bg-forest-light/40 border border-forest/15">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-5 h-5 rounded-full bg-forest text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs font-bold text-forest uppercase tracking-wide">
                          Yewbdar Junk Removal:
                        </span>
                        <span className="ml-auto text-xs font-bold text-forest-dark bg-white px-2 py-0.5 rounded-full border border-forest/10">
                          {item.yewbdar.highlight}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed pl-7">
                        {item.yewbdar.description}
                      </p>
                    </div>

                    {/* Competitor Reality */}
                    <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.04]">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-5 h-5 rounded-full bg-zinc-300 text-zinc-600 flex items-center justify-center shrink-0">
                          <X className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs font-semibold text-zinc-600 uppercase tracking-wide">
                          National 1-800 Franchises:
                        </span>
                        <span className="ml-auto text-xs font-medium text-zinc-500">
                          {item.competitors.highlight}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed pl-7">
                        {item.competitors.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-black/[0.04] text-[11px] text-zinc-muted flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-forest" />
                  <span>Backed by our firm upfront price guarantee</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
