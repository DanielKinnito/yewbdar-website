import React from "react";
import { BeforeAfterShowcase } from "./BeforeAfterShowcase";
import { type ProjectItem } from "@/lib/cms";
import { MapPin, Sparkles } from "lucide-react";

export interface RecentWorkShowcaseProps {
  projects?: ProjectItem[];
}

export function RecentWorkShowcase({ projects }: RecentWorkShowcaseProps) {
  const hasLiveProjects = projects && projects.length > 0;

  return (
    <section id="recent-work" className="py-20 sm:py-32 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-forest bg-forest-light/80 px-3.5 py-1 rounded-full border border-forest/20 inline-block mb-3">
            Real Proof of Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
            Recent Cleanouts Across Metro Atlanta
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-muted leading-relaxed">
            Every cleanout swept down to the slab. Before-and-after results directly from our Atlanta dispatch logs.
          </p>
        </div>

        {/* Real Case Studies Before & After Toggle */}
        <BeforeAfterShowcase projects={projects} />

        {/* Dynamic Project Cards Grid (Exclusively Live CMS Data When Connected) */}
        {hasLiveProjects && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((job) => (
              <div key={job.id || job.title} className="bezel-shell">
                <div className="bezel-core p-8 sm:p-9 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs font-semibold text-forest flex items-center gap-1.5 mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{job.location}</span>
                    </span>
                    <h3 className="text-2xl font-bold text-charcoal tracking-tight mt-1 mb-3">
                      {job.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-muted leading-relaxed mb-6">
                      {job.afterDescription || job.beforeDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/[0.05] grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-zinc-muted block font-medium">Volume:</span>
                      <span className="font-bold text-charcoal">{job.volume}</span>
                    </div>
                    <div>
                      <span className="text-zinc-muted block font-medium">Time:</span>
                      <span className="font-bold text-charcoal">{job.timeTaken}</span>
                    </div>
                    <div>
                      <span className="text-zinc-muted block font-medium">Diversion:</span>
                      <span className="font-bold text-forest">{job.ecoDiversion}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
