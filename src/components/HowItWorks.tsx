import React from "react";
import { PhoneCall, Truck, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: PhoneCall,
    title: "1. Call or Book Online",
    timeframe: "Instant or 2 Minutes",
    description:
      "Get a quick quote by phone, text photos of your items, or choose your guaranteed 2-hour arrival window online. Firm upfront price locked before we roll.",
  },
  {
    step: "02",
    icon: Truck,
    title: "2. We Load, Lift & Sweep",
    timeframe: "Same-Day Dispatch",
    description:
      "Two uniformed, background-checked pros arrive on time in our heavy 16-ft box truck. Just point to what goes—basements, attics, or yards. We do all the heavy lifting and sweep up after.",
  },
  {
    step: "03",
    icon: Sparkles,
    title: "3. Enjoy Your Clean Space",
    timeframe: "100% Guaranteed",
    description:
      "65% of all items are recycled or donated to local Atlanta non-profits and charities. You pay only after the job is completely done and your space is cleared.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-forest bg-forest-light/80 px-3.5 py-1 rounded-full border border-forest/20 inline-block mb-3">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
            Junk Removal As Easy As 1-2-3
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-muted leading-relaxed">
            No complicated estimate games or surprise landfill fees. Just transparent scheduling, professional loading, and clean results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="bezel-shell">
                <div className="bezel-core p-8 sm:p-9 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-forest-light text-forest flex items-center justify-center border border-forest/20 shadow-sm">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="text-xs font-bold font-mono text-zinc-400">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-charcoal tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-muted leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/[0.05] flex items-center justify-between text-xs">
                    <span className="text-zinc-muted font-medium">Timeline:</span>
                    <span className="font-bold text-forest">{item.timeframe}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
