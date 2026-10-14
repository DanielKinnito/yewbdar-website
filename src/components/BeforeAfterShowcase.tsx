"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, MapPin, Truck, Clock, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { type ProjectItem } from "@/lib/cms";

export interface BeforeAfterShowcaseProps {
  projects?: ProjectItem[];
}

export function BeforeAfterShowcase({ projects }: BeforeAfterShowcaseProps) {
  const studies = projects && projects.length > 0 ? projects : [];
  const [activeStudyId, setActiveStudyId] = useState<string>(studies[0]?.id || "study-0");
  const [viewState, setViewState] = useState<"before" | "after">("before");

  const activeStudy = studies.find((s) => s.id === activeStudyId) || studies[0];

  if (!activeStudy) return null;

  const currentImage =
    viewState === "before"
      ? activeStudy.beforeImageUrl || "/images/garage-before.jpg"
      : activeStudy.afterImageUrl || "/images/garage-after.jpg";

  return (
    <div className="mt-8 bezel-shell">
      <div className="bezel-core p-6 sm:p-8 bg-white rounded-3xl border border-stone-200/80 shadow-md">
        {/* Header & Toggle Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-forest block mb-1">
              Verified Job Site Proof
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
              {activeStudy.title}
            </h3>
            <span className="text-xs text-stone-500 flex items-center gap-1.5 mt-1 font-medium">
              <MapPin className="w-3.5 h-3.5 text-forest" />
              <span>{activeStudy.location}</span>
            </span>
          </div>

          {/* Interactive Before / After Toggle Buttons */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-stone-100 border border-stone-200/80 shrink-0 self-start sm:self-auto shadow-inner">
            <button
              type="button"
              onClick={() => setViewState("before")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 apple-press ${
                viewState === "before"
                  ? "bg-stone-800 text-white shadow-sm"
                  : "text-stone-600 hover:text-charcoal"
              }`}
            >
              Before Cleanout
            </button>
            <button
              type="button"
              onClick={() => setViewState("after")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 apple-press ${
                viewState === "after"
                  ? "bg-forest text-white shadow-sm"
                  : "text-stone-600 hover:text-charcoal"
              }`}
            >
              After (Swept Clean)
            </button>
          </div>
        </div>

        {/* Project Selector Tabs */}
        {studies.length > 1 && (
          <div className="flex items-center gap-2 pt-4 pb-4 overflow-x-auto border-b border-stone-100">
            {studies.map((study) => (
              <button
                key={study.id}
                type="button"
                onClick={() => {
                  setActiveStudyId(study.id);
                  setViewState("before");
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors apple-press ${
                  activeStudy.id === study.id
                    ? "bg-forest text-white shadow-sm"
                    : "bg-stone-100 text-stone-600 hover:text-charcoal border border-stone-200"
                }`}
              >
                {study.neighborhood || study.title}
              </button>
            ))}
          </div>
        )}

        {/* Photo + Narrative Split Showcase */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Visual Photographic Proof Box */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-900 border border-stone-300 shadow-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeStudy.id}-${viewState}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={currentImage}
                    alt={`${activeStudy.title} - ${viewState} Cleanout`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 650px"
                    className="object-cover"
                  />
                  {/* Photo status badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-md ${
                        viewState === "before"
                          ? "bg-amber-600/90 text-white"
                          : "bg-forest/90 text-white"
                      }`}
                    >
                      {viewState === "before" ? "Pre-Haul Condition" : "100% Cleared & Swept"}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Narrative & Metrics Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div
              className={`p-6 rounded-2xl border transition-all ${
                viewState === "before"
                  ? "bg-stone-50 border-stone-200"
                  : "bg-forest-light/50 border-forest/20"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal">
                  {viewState === "before" ? "Condition Encountered" : "Final Completed Result"}
                </span>
                <span className="text-xs text-stone-500 font-medium">Job Summary</span>
              </div>

              <p className="text-sm text-charcoal leading-relaxed font-normal">
                {viewState === "before"
                  ? activeStudy.beforeDescription ||
                    "Packed space filled with heavy clutter, old furniture, and accumulated storage items."
                  : activeStudy.afterDescription ||
                    "Completely emptied and swept spotless down to the slab. Reusable items donated locally."}
              </p>
            </div>

            {/* Structured Specifications Grid */}
            <div className="mt-4 p-5 rounded-2xl bg-stone-50 border border-stone-200 grid grid-cols-3 gap-3 text-xs">
              <div>
                <span className="text-stone-500 block font-medium flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-forest" />
                  <span>Truckload</span>
                </span>
                <span className="font-bold text-charcoal mt-1 block">{activeStudy.volume}</span>
              </div>
              <div>
                <span className="text-stone-500 block font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-forest" />
                  <span>Crew Time</span>
                </span>
                <span className="font-bold text-charcoal mt-1 block">{activeStudy.timeTaken}</span>
              </div>
              <div>
                <span className="text-stone-500 block font-medium flex items-center gap-1">
                  <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Diverted</span>
                </span>
                <span className="font-bold text-forest mt-1 block">{activeStudy.ecoDiversion}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
