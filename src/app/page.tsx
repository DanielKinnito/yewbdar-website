import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustStrip } from "@/components/TrustStrip";
import { ValueBentoCards } from "@/components/ValueBentoCards";
import { HowItWorks } from "@/components/HowItWorks";
import { YewbdarDifference } from "@/components/YewbdarDifference";
import { ServicesCatalog } from "@/components/ServicesCatalog";
import { PricingSection } from "@/components/PricingSection";
import { RecentWorkShowcase } from "@/components/RecentWorkShowcase";
import { CustomerReviewsSection } from "@/components/CustomerReviewsSection";
import { EstimateBookingSection } from "@/components/EstimateBookingSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Footer } from "@/components/Footer";
import {
  getRecentProjects,
  getCustomerReviews,
  getPricingTiers,
  getCompanySettings,
} from "@/lib/cms";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [projects, reviews, pricingTiers, settings] = await Promise.all([
    getRecentProjects(),
    getCustomerReviews(),
    getPricingTiers(),
    getCompanySettings(),
  ]);

  return (
    <div className="min-h-screen bg-canvas text-charcoal flex flex-col font-sans selection:bg-forest-light selection:text-forest">
      {/* Dual-Tier Floating Pill Navbar */}
      <Navbar settings={settings} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Editorial Split Hero Section with Box Truck Feature */}
        <HeroSection settings={settings} />

        {/* 4-Pillar Horizontal Trust Strip Directly Under Hero */}
        <TrustStrip settings={settings} />

        {/* 15+ Years / Bigger Trucks Value Bento Cards */}
        <ValueBentoCards />

        {/* Junk Removal As Easy As 1-2-3 */}
        <HowItWorks />

        {/* The Yewbdar Difference with Uniformed Crew Feature Card */}
        <YewbdarDifference settings={settings} />

        {/* Full-Service Removal (Services Bento Catalog) */}
        <ServicesCatalog />

        {/* Clear Dynamic Pricing Breakdown (Fully customizable via Sanity Studio) */}
        <PricingSection tiers={pricingTiers} />

        {/* Recent Work Across Metro Atlanta with Before & After Photo Toggles */}
        <RecentWorkShowcase projects={projects} />

        {/* 5.0 Star Verified Customer Reviews & Google Maps Direct Link */}
        <CustomerReviewsSection reviews={reviews} settings={settings} />

        {/* Interactive Estimate Booking Form with 2-Hr Windows */}
        <EstimateBookingSection />

        {/* Real Questions, Honest Answers (FAQ Accordion) */}
        <FaqAccordion />
      </main>

      {/* Footer with Google Maps Location Link and Hours */}
      <Footer settings={settings} />
    </div>
  );
}
