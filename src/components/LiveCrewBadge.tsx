"use client";

import React from "react";

interface LiveCrewBadgeProps {
  className?: string;
  variant?: "pill" | "banner";
}

export function LiveCrewBadge({ className = "", variant = "pill" }: LiveCrewBadgeProps) {
  if (variant === "banner") {
    return (
      <div
        className={`w-full bg-[#F5F5F7] border-b border-black/[0.06] py-1.5 px-4 text-xs font-medium text-charcoal flex items-center justify-center gap-2 ${className}`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
        </span>
        <span>
          <strong className="font-semibold text-forest">Live Status:</strong> Uniformed crews active in Metro Atlanta today · Same-day slots open
        </span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-light/60 border border-forest/20 text-xs font-medium text-forest-dark transition-all duration-200 ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
      </span>
      <span>Crews active in Metro Atlanta today</span>
    </div>
  );
}
