import React from "react";
import { Star, Truck, Leaf, ShieldCheck, ExternalLink } from "lucide-react";
import { CompanySettings } from "@/lib/cms";

interface TrustStripProps {
  settings: CompanySettings;
}

export function TrustStrip({ settings }: TrustStripProps) {
  return (
    <section className="border-y border-sand-dark/60 bg-sand/40 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Pillar 1: Google Reviews Link */}
          <a
            href={settings.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-white/80 transition-all cursor-pointer"
            title="Read our Google Reviews"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 border border-amber-200 group-hover:scale-105 transition-transform">
              <Star className="w-5 h-5 text-amber-600 fill-amber-500" />
            </div>
            <div>
              <div className="flex items-center gap-1 font-bold text-charcoal text-sm group-hover:text-forest transition-colors">
                <span>{settings.googleRating} ★ Verified</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-forest" />
              </div>
              <p className="text-xs text-stone-600 leading-snug mt-0.5">
                {settings.googleReviewCount} Google reviews · Top-rated in Atlanta
              </p>
            </div>
          </a>

          {/* Pillar 2: 16-Ft Box Trucks */}
          <div className="flex items-start gap-3.5 p-2">
            <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center shrink-0 border border-forest/20">
              <Truck className="w-5 h-5 text-forest" />
            </div>
            <div>
              <div className="font-bold text-charcoal text-sm">
                {settings.truckSize} Fleet Trucks
              </div>
              <p className="text-xs text-stone-600 leading-snug mt-0.5">
                Holds 6–8 pickup beds · 30% larger than 1-800 franchise beds
              </p>
            </div>
          </div>

          {/* Pillar 3: Eco Landfill Diversion */}
          <div className="flex items-start gap-3.5 p-2">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 border border-emerald-200">
              <Leaf className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <div className="font-bold text-charcoal text-sm">
                {settings.ecoDiversionPct} Eco-Diverted
              </div>
              <p className="text-xs text-stone-600 leading-snug mt-0.5">
                Sorted for local Atlanta donation & safe recycling before dump
              </p>
            </div>
          </div>

          {/* Pillar 4: Insured & Honest Rates */}
          <div className="flex items-start gap-3.5 p-2">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200">
              <ShieldCheck className="w-5 h-5 text-blue-700" />
            </div>
            <div>
              <div className="font-bold text-charcoal text-sm">
                {settings.insuranceAmount} Insured
              </div>
              <p className="text-xs text-stone-600 leading-snug mt-0.5">
                Full commercial liability · Zero hidden disposal surcharges
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
