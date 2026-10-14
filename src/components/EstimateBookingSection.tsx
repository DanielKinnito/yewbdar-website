"use client";

import React, { useState } from "react";
import { CheckCircle2, Phone, Clock, ShieldCheck, Loader2, AlertCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { submitEstimate } from "@/app/actions/submit-estimate";

export function EstimateBookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    zip: "",
    serviceType: "Single Item / Minimum",
    timeWindow: "10am–12pm (Late Morning)",
    details: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setGeneralError(null);
    setFieldErrors({});

    try {
      const res = await submitEstimate(formData);
      if (res.success) {
        setSubmitted(true);
      } else {
        if (res.errors) {
          setFieldErrors(res.errors);
        }
        setGeneralError(res.message || "Please fix the form errors and try again.");
      }
    } catch {
      setGeneralError("An unexpected error occurred. Please call (770) 676-0810 directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="estimate-form" className="py-16 sm:py-24 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
            Get Your Free, No-Obligation Estimate
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-muted leading-relaxed">
            Choose a 2-hour arrival window. Most morning inquiries are hauled the same afternoon.
          </p>
        </div>

        <div className="bezel-shell">
          <div className="bezel-core p-6 sm:p-12">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="confirmed"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className="py-12 text-center max-w-lg mx-auto"
              >
                <div className="w-14 h-14 rounded-full bg-forest-light text-forest mx-auto flex items-center justify-center mb-4 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal tracking-tight">
                  Estimate Request Confirmed!
                </h3>
                <p className="mt-2 text-sm text-zinc-muted leading-relaxed">
                  Thank you, <strong className="text-charcoal">{formData.name}</strong>. Our local dispatch crew will call you shortly at{" "}
                  <strong className="text-charcoal">{formData.phone}</strong> to confirm your {formData.timeWindow} arrival window.
                </p>
                <div className="mt-6 pt-6 border-t border-black/[0.04] text-xs text-zinc-muted">
                  Need immediate same-day service? Call us directly at{" "}
                  <a href="tel:+17706760810" className="text-forest font-bold underline">
                    (770) 676-0810
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {generalError && (
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{generalError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-black/[0.06] text-sm text-charcoal placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all"
                    />
                    {fieldErrors.name && (
                      <p className="mt-1.5 text-xs text-red-600 font-medium">{fieldErrors.name[0]}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(404) 555-0199"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-black/[0.06] text-sm text-charcoal placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all"
                    />
                    {fieldErrors.phone && (
                      <p className="mt-1.5 text-xs text-red-600 font-medium">{fieldErrors.phone[0]}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-black/[0.06] text-sm text-charcoal placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all"
                    />
                    {fieldErrors.email && (
                      <p className="mt-1.5 text-xs text-red-600 font-medium">{fieldErrors.email[0]}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-2">
                      Atlanta ZIP Code *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      placeholder="30309"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-black/[0.06] text-sm text-charcoal placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all"
                    />
                    {fieldErrors.zip && (
                      <p className="mt-1.5 text-xs text-red-600 font-medium">{fieldErrors.zip[0]}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-charcoal mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Street address or neighborhood"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-black/[0.06] text-sm text-charcoal placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all"
                    />
                    {fieldErrors.address && (
                      <p className="mt-1.5 text-xs text-red-600 font-medium">{fieldErrors.address[0]}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-2">
                      Service Type
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-black/[0.06] text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all"
                    >
                      <option>Single Item / Minimum</option>
                      <option>1/4 Truckload</option>
                      <option>1/2 Truckload</option>
                      <option>Full Truckload</option>
                      <option>Estate / Whole Home</option>
                      <option>Commercial / Office</option>
                      <option>Yard Waste / Demolition</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-2">
                      Preferred Time Window
                    </label>
                    <select
                      value={formData.timeWindow}
                      onChange={(e) => setFormData({ ...formData, timeWindow: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-black/[0.06] text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all"
                    >
                      <option>8am–10am (Morning First Slot)</option>
                      <option>10am–12pm (Late Morning)</option>
                      <option>12pm–2pm (Early Afternoon)</option>
                      <option>2pm–4pm (Mid Afternoon)</option>
                      <option>4pm–6pm (Evening Arrival)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-2">
                    What needs to go?
                  </label>
                  <textarea
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Tell us briefly what you want removed (e.g. sectional sofa, garage storage boxes, mattress, patio furniture)"
                    className="w-full px-4 py-3.5 rounded-2xl bg-white border border-black/[0.06] text-sm text-charcoal placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full py-3.5 pl-8 pr-3 rounded-full bg-forest hover:bg-forest-dark disabled:opacity-70 text-white text-base font-semibold transition-all duration-150 apple-press shadow-md tracking-tight flex items-center justify-between"
                  >
                    <span>{isSubmitting ? "Sending Request to Dispatch..." : "Schedule My Free Estimate"}</span>
                    <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center btn-icon-bubble shrink-0">
                      {isSubmitting ? (
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                      ) : (
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </button>
                </div>

                <div className="pt-3 border-t border-black/[0.04] flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-muted">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-forest" />
                    <span>No payment required now · Pay only after the job is completed</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-forest" />
                    <span>Firm in-person quote confirmed before loading</span>
                  </span>
                </div>
              </form>
            )}
          </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
