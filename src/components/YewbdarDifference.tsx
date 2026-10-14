import React from "react";
import Image from "next/image";
import { ShieldCheck, Check, HeartHandshake, DollarSign, Award, Truck, Sparkles, Users } from "lucide-react";
import { CompanySettings } from "@/lib/cms";

interface YewbdarDifferenceProps {
  settings?: CompanySettings;
}

export function YewbdarDifference({ settings }: YewbdarDifferenceProps) {
  const crewPhoto = settings?.crewPhotoUrl || "/images/crew-in-action.jpg";
  const ecoPct = settings?.ecoDiversionPct || "65%";
  const insurance = settings?.insuranceAmount || "$1,000,000";
  const minRate = settings?.minPriceRange || "$75 – $125";
  const halfRate = settings?.halfTruckRange || "$295 – $350";
  const fullRate = settings?.fullTruckRange || "$550 – $650";

  return (
    <section id="why-us" className="py-20 sm:py-32 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-forest bg-forest-light/80 px-3.5 py-1 rounded-full border border-forest/20 inline-block mb-3">
            Local Independence vs Franchise Royalties
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
            The Yewbdar Difference
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-muted leading-relaxed">
            We are locally owned and family-operated in Metro Atlanta. No national call centers, no corporate franchise royalties tacked onto your bill, and no temporary day-labor uncertainty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Direct Savings */}
          <div className="bezel-shell">
            <div className="bezel-core p-8 sm:p-10 flex flex-col justify-between h-full bg-white rounded-3xl border border-stone-200/80 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-forest bg-forest-light/80 px-3 py-0.5 rounded-full border border-forest/20">
                    Locally Owned
                  </span>
                  <span className="text-xs font-semibold text-forest-dark bg-forest-light px-2.5 py-0.5 rounded-full border border-forest/15">
                    Direct Savings
                  </span>
                </div>

                <div className="flex items-baseline gap-3 my-4">
                  <span className="text-5xl sm:text-6xl font-black text-charcoal tracking-tighter">
                    20–30%
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-charcoal tracking-tight">
                    Lower Rates
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-charcoal tracking-tight mb-2">
                  Lower Prices Than The 1-800 Guys
                </h3>
                <p className="text-sm text-zinc-muted leading-relaxed mb-6">
                  As an independent Atlanta company, we pay zero corporate franchise royalties or national advertising fees. That discount goes straight to you.
                </p>
              </div>

              <div className="mt-2 pt-4 border-t border-black/[0.05] space-y-2.5 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-black/[0.04]">
                  <span className="font-medium text-charcoal">Single Item Pickup:</span>
                  <span className="font-bold text-forest">Yewbdar {minRate} <span className="text-zinc-400 font-normal line-through ml-1">(1-800: $150+)</span></span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-black/[0.04]">
                  <span className="font-medium text-charcoal">1/2 Box Truckload:</span>
                  <span className="font-bold text-forest">Yewbdar {halfRate} <span className="text-zinc-400 font-normal line-through ml-1">(1-800: $450+)</span></span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="font-medium text-charcoal">Full 16-Ft Cleanout:</span>
                  <span className="font-bold text-forest">Yewbdar {fullRate} <span className="text-zinc-400 font-normal line-through ml-1">(1-800: $850+)</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Eco Diversion */}
          <div className="bezel-shell">
            <div className="bezel-core p-8 sm:p-10 flex flex-col justify-between h-full bg-white rounded-3xl border border-stone-200/80 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-forest bg-forest-light/80 px-3 py-0.5 rounded-full border border-forest/20">
                    Eco-First Disposal
                  </span>
                  <span className="text-xs font-semibold text-forest-dark bg-forest-light px-2.5 py-0.5 rounded-full border border-forest/15">
                    Landfill Bypass
                  </span>
                </div>

                <div className="flex items-baseline gap-3 my-4">
                  <span className="text-5xl sm:text-6xl font-black text-forest tracking-tighter">
                    {ecoPct}
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-charcoal tracking-tight">
                    Recycled or Donated
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-charcoal tracking-tight mb-2">
                  Green Hauls & Community First
                </h3>
                <p className="text-sm text-zinc-muted leading-relaxed mb-6">
                  We sort every haul. Usable furniture and goods are delivered directly to local Atlanta non-profits and community thrift programs rather than dumped.
                </p>
              </div>

              <div className="mt-2 pt-4 border-t border-black/[0.05] space-y-2.5">
                <div className="w-full h-2.5 rounded-full bg-zinc-200 overflow-hidden flex">
                  <div className="bg-forest h-full w-[40%]" title="40% Donated" />
                  <div className="bg-emerald-500 h-full w-[25%]" title="25% Recycled" />
                  <div className="bg-zinc-400 h-full w-[35%]" title="35% Regulated" />
                </div>
                <div className="flex items-center justify-between text-[11px] text-zinc-muted font-medium pt-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-forest" /> 40% Donated
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> 25% Recycled
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-zinc-400" /> 35% Disposed
                  </span>
                </div>
                <p className="text-[11px] text-zinc-muted italic pt-1">
                  Partnered with local Atlanta community thrift & charity recycling centers.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Uniformed In-House Crew Photographic Card */}
          <div className="bezel-shell">
            <div className="bezel-core p-8 sm:p-10 flex flex-col justify-between h-full bg-white rounded-3xl border border-stone-200/80 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-forest bg-forest-light/80 px-3 py-0.5 rounded-full border border-forest/20">
                    Real People You Can Trust
                  </span>
                  <span className="text-xs font-semibold text-zinc-muted font-mono">
                    W2 In-House Staff
                  </span>
                </div>

                {/* Real Crew Photo */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden my-4 border border-stone-200 shadow-sm">
                  <Image
                    src={crewPhoto}
                    alt="Uniformed Yewbdar Crew Members on Atlanta Job Site"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-white text-xs font-bold flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Two-Person Crews on Every Job</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-charcoal tracking-tight mb-2">
                  Uniformed & Background-Checked
                </h3>
                <p className="text-sm text-zinc-muted leading-relaxed mb-4">
                  Our crew members are thoroughly vetted, polite, and trained in proper property protection. We treat your walls, floors, and lawn like our own.
                </p>
              </div>

              <div className="mt-2 pt-4 border-t border-black/[0.05] grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-surface-subtle border border-black/[0.05] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-forest shrink-0" />
                  <span className="font-semibold text-charcoal">{insurance} Insured</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-subtle border border-black/[0.05] flex items-center gap-2">
                  <Award className="w-4 h-4 text-forest shrink-0" />
                  <span className="font-semibold text-charcoal">Workers' Comp Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Guaranteed Upfront Pricing */}
          <div className="bezel-shell">
            <div className="bezel-core p-8 sm:p-10 flex flex-col justify-between h-full bg-white rounded-3xl border border-stone-200/80 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-forest bg-forest-light/80 px-3 py-0.5 rounded-full border border-forest/20">
                    No Surprises
                  </span>
                  <span className="text-xs font-semibold text-forest-dark bg-forest-light px-2.5 py-0.5 rounded-full border border-forest/15">
                    Firm Agreement
                  </span>
                </div>

                <div className="flex items-baseline gap-3 my-4">
                  <span className="text-5xl sm:text-6xl font-black text-forest tracking-tighter">
                    $0
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-charcoal tracking-tight">
                    Hidden Fees
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-charcoal tracking-tight mb-2">
                  Guaranteed Upfront Pricing
                </h3>
                <p className="text-sm text-zinc-muted leading-relaxed mb-6">
                  We give you a firm price in writing before our crew lifts anything. If you don't like the price for any reason, you owe nothing.
                </p>
              </div>

              <div className="mt-2 pt-4 border-t border-black/[0.05] flex items-center gap-3 text-xs text-charcoal font-medium">
                <div className="w-7 h-7 rounded-full bg-forest-light text-forest flex items-center justify-center shrink-0 border border-forest/20">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span>No travel surcharges, stair fees, or heavy-lifting add-ons. The quoted price is what you pay.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
