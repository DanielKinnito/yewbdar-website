"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CompanySettings } from "@/lib/cms";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Recent Work", href: "#recent-work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
];

interface NavbarProps {
  settings?: CompanySettings;
}

export function Navbar({ settings }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimer = React.useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = React.useRef(0);
  const isScrollingRef = React.useRef(false);

  const companyName = settings?.companyName || "Yewbdar Junk Removal";
  const displayPhone = settings?.displayPhone || "(770) 676-0810";
  const telUri = settings?.telUri || "tel:+17706760810";
  const bannerText = settings?.bannerAlertText || "Crews active across Metro Atlanta today · Same-day slots available";

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always restore immediately at the very top of the page
      if (currentScrollY <= 15) {
        if (scrollTimer.current) {
          clearTimeout(scrollTimer.current);
          scrollTimer.current = null;
        }
        if (isScrollingRef.current) {
          isScrollingRef.current = false;
          setIsScrolling(false);
        }
        lastScrollY.current = currentScrollY;
        return;
      }

      // Ignore micro jitters (less than 4px) to prevent flicker
      if (Math.abs(currentScrollY - lastScrollY.current) < 4) {
        return;
      }
      lastScrollY.current = currentScrollY;

      // Only dispatch state update once when scroll starts
      if (!isScrollingRef.current) {
        isScrollingRef.current = true;
        setIsScrolling(true);
      }

      // Clear existing timer and schedule restore once scrolling stops
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
      }
      scrollTimer.current = setTimeout(() => {
        isScrollingRef.current = false;
        setIsScrolling(false);
      }, 240);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
      }
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        {/* Floating Capsule Island */}
        <div
          className={`floating-nav rounded-2xl sm:rounded-3xl px-5 sm:px-7 ${
            isScrolling ? "py-3 shadow-md" : "py-3.5 sm:py-4 shadow-sm"
          }`}
        >
          {/* Top Row: Brand + Direct Contact & Estimate CTA */}
          <div className="flex items-center justify-between gap-4">
            {/* Brand Title */}
            <Link
              href="/"
              className="text-base sm:text-lg font-bold text-charcoal tracking-tight hover:opacity-90 transition-opacity"
            >
              {companyName}
            </Link>

            {/* Desktop Top Right: Phone + Primary CTA Pill */}
            <div className="hidden md:flex items-center gap-5">
              <a
                href={telUri}
                className="text-sm font-semibold text-charcoal hover:text-forest transition-colors tracking-tight"
                aria-label={`Call ${displayPhone}`}
              >
                {displayPhone}
              </a>

              <a
                href="#estimate-form"
                className="group inline-flex items-center justify-between gap-3 pl-4 pr-1.5 py-1.5 rounded-full bg-forest hover:bg-forest-dark text-white text-xs font-semibold transition-all duration-150 apple-press shadow-sm"
              >
                <span>Get Free Estimate</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center btn-icon-bubble shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </a>
            </div>

            {/* Mobile Right: Phone Call Button + Menu Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={telUri}
                className="p-2 rounded-full bg-surface text-forest apple-press"
                aria-label={`Call ${displayPhone}`}
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-full bg-surface text-charcoal apple-press"
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Bottom Row: Active Status Indicator + Secondary Nav Links */}
          <motion.div
            initial={false}
            animate={{
              opacity: isScrolling ? 0 : 1,
              maxHeight: isScrolling ? 0 : 60,
              marginTop: isScrolling ? 0 : 8,
              paddingTop: isScrolling ? 0 : 10,
              paddingBottom: isScrolling ? 0 : 4,
              y: isScrolling ? -4 : 0,
              borderTopColor: isScrolling ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.04)",
            }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 30,
              mass: 0.8,
            }}
            style={{ overflow: "hidden" }}
            className="hidden md:flex items-center justify-between border-t border-transparent"
          >
            {/* Live Indicator */}
            <div className="flex items-center gap-2 text-xs font-medium text-zinc-muted">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>{bannerText}</span>
            </div>

            {/* Clean Right-Aligned Navigation Links */}
            <nav className="flex items-center gap-6" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-zinc-muted hover:text-charcoal transition-colors tracking-tight"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="md:hidden mt-2 floating-nav rounded-2xl p-5 space-y-4"
            >
              <div className="flex items-center gap-2 text-xs font-medium text-zinc-muted pb-3 border-b border-black/[0.04]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                <span>{bannerText}</span>
              </div>

              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium text-charcoal py-1.5 hover:text-forest transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="pt-3 border-t border-black/[0.04] space-y-2.5">
                <a
                  href={telUri}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-surface text-charcoal text-sm font-semibold apple-press"
                >
                  <Phone className="w-4 h-4 text-forest" />
                  <span>Call {displayPhone}</span>
                </a>
                <a
                  href="#estimate-form"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-forest text-white text-sm font-semibold apple-press"
                >
                  <span>Book Free Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
