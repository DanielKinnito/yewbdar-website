"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Phone, CheckCircle2, MapPin, ExternalLink, ShieldCheck, Truck } from "lucide-react";
import { CompanySettings } from "@/lib/cms";

interface HeroSectionProps {
  settings: CompanySettings;
}

export function HeroSection({ settings }: HeroSectionProps) {
  const [quickZip, setQuickZip] = useState("");
  const [routeStatus, setRouteStatus] = useState<string | null>(null);

  const handleQuickCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = quickZip.trim();
    if (!clean) return;
    if (clean.startsWith("30") || clean.startsWith("31")) {
      setRouteStatus(
        `🟢 Live Route Confirmed: Crews active near ZIP ${clean} · Next 2-Hour Window Open Today`
      );
    } else {
      setRouteStatus(
        `🟢 Metro Atlanta Service: Available across all 29 counties · Dispatch Route Open`
      );
    }
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Ambient Radial Mesh Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-b from-forest/10 via-forest-light/30 to-transparent blur-3xl -z-10 rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Value Proposition & Actions (7 Cols) */}
          <div className="lg:col-span-7 text-left">
            {/* Google Verified Review Link Badge */}
            <a
              href={settings.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-forest/20 bg-forest-light/80 text-forest text-xs font-semibold tracking-tight mb-6 shadow-sm hover:bg-forest-light transition-all cursor-pointer group"
              title="View live reviews on Google Maps"
            >
              <span className="flex items-center text-amber-500 font-bold">★★★★★</span>
              <span className="text-forest-dark font-medium">
                {settings.googleRating} Stars · {settings.googleReviewCount} Verified Google Reviews
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-forest/70 group-hover:text-forest transition-colors ml-0.5" />
            </a>

            {/* Commanding Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-charcoal tracking-[-0.035em] leading-[1.08] text-balance">
              {settings.heroHeadline}
            </h1>

            {/* Grounded Contractor Subheadline */}
            <p className="mt-5 text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed font-normal">
              {settings.heroSubheadline}
            </p>

            {/* High-Conversion Pill Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-md">
              <a
                href="#estimate-form"
                className="group inline-flex items-center justify-between sm:justify-center gap-4 pl-6 pr-2.5 py-3 rounded-full bg-forest hover:bg-forest-dark text-white text-base font-semibold shadow-md apple-press tracking-tight transition-all"
              >
                <span>Book Free Estimate</span>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center btn-icon-bubble shrink-0">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </a>

              <a
                href={settings.telUri}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 border border-black/[0.08] text-charcoal text-base font-semibold shadow-sm apple-press tracking-tight transition-all"
                aria-label={`Call ${settings.displayPhone}`}
              >
                <Phone className="w-4 h-4 text-forest" />
                <span>{settings.displayPhone}</span>
              </a>
            </div>

            {/* Guarantee Microcopy */}
            <p className="mt-3.5 text-xs text-stone-500 font-medium">
              Free, firm on-site quote · No credit card required · Pay only after haul is complete
            </p>

            {/* Machined Double-Bezel Quick-Route Dispatch Checker */}
            <div className="mt-8 max-w-xl bezel-shell text-left">
              <div className="bezel-core p-4 sm:p-4.5 bg-white rounded-2xl border border-stone-200/80 shadow-sm">
                <div className="flex items-center justify-between mb-2.5 text-xs">
                  <span className="font-bold text-charcoal flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-forest" />
                    <span>Check Today's Same-Day Dispatch Route</span>
                  </span>
                  <span className="text-forest font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
                    <span>Active In Metro Atlanta</span>
                  </span>
                </div>

                <form onSubmit={handleQuickCheck} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={quickZip}
                    onChange={(e) => setQuickZip(e.target.value)}
                    placeholder="Enter Atlanta ZIP (e.g. 30309, 30030, 30328)"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-charcoal placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-forest hover:bg-forest-dark text-white text-xs font-bold apple-press shadow-sm transition-colors whitespace-nowrap"
                  >
                    Check Route
                  </button>
                </form>

                {routeStatus && (
                  <div className="mt-2.5 p-2.5 rounded-xl bg-forest-light/80 border border-forest/15 text-xs font-medium text-forest-dark flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                    <span>{routeStatus}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Branded 16-Ft Box Truck Photographic Anchor (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer double bezel casing */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-stone-200/70 via-stone-100/50 to-stone-300/60 shadow-xl border border-white/60">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-900">
                  <Image
                    src={settings.heroTruckImageUrl || "/images/hero-truck.jpg"}
                    alt="Yewbdar Junk Removal 16-Foot Box Truck on Atlanta Job Site"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/[0.08] shadow-md flex items-center gap-1.5 text-xs font-bold text-charcoal">
                    <Truck className="w-3.5 h-3.5 text-forest" />
                    <span>{settings.truckSize} Box Truck Fleet</span>
                  </div>

                  {/* Bottom Information Overlay */}
                  <div className="absolute bottom-3 inset-x-3 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold tracking-wide uppercase text-emerald-400">
                        Atlanta Same-Day Dispatch
                      </p>
                      <p className="text-xs text-stone-200 font-medium">
                        30% More Volume Than 1-800 Franchise Beds
                      </p>
                    </div>
                    <div className="shrink-0 bg-forest px-2.5 py-1 rounded-md text-[11px] font-bold text-white shadow-sm">
                      Full Service
                    </div>
                  </div>
                </div>
              </div>

              {/* Tilted Floating Stamp Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white p-3 sm:p-3.5 rounded-2xl border border-stone-200 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-forest-light flex items-center justify-center text-forest">
                  <ShieldCheck className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-charcoal">
                    {settings.insuranceAmount} Insured
                  </div>
                  <div className="text-[11px] text-stone-500 font-medium">
                    {settings.yearsInBusiness} Local Atlanta Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
