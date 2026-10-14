import React from "react";
import { Star, Recycle, ShieldCheck, Users } from "lucide-react";

interface PillarItem {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  highlight?: string;
}

const pillars: PillarItem[] = [
  {
    icon: Star,
    title: "5.0 Stars",
    subtitle: "700+ Google Reviews across Metro Atlanta",
    highlight: "Highest Rated",
  },
  {
    icon: Recycle,
    title: "65% Diverted",
    subtitle: "Recycled or donated to local charities",
    highlight: "Eco-First",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    subtitle: "Full property & worker coverage on every job",
    highlight: "100% Protected",
  },
  {
    icon: Users,
    title: "Uniformed Crews",
    subtitle: "Background-checked, polite, and hardworking",
    highlight: "In-House Staff",
  },
];

export function TrustPillars({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className="group relative rounded-2xl bg-surface p-4 sm:p-5 border border-black/[0.06] transition-all duration-200 hover:bg-surface-subtle hover:shadow-subtle hover:border-black/[0.1] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-black/[0.06] flex items-center justify-center text-forest transition-transform duration-200 group-hover:scale-105 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                {pillar.highlight && (
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-forest px-2 py-0.5 rounded-full bg-forest-light/60 border border-forest/10">
                    {pillar.highlight}
                  </span>
                )}
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-charcoal tracking-tight">
                  {pillar.title}
                </h4>
                <p className="text-xs text-zinc-muted mt-0.5 leading-snug">
                  {pillar.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
