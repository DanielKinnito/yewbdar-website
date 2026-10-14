import React from "react";
import Link from "next/link";
import { Phone, ShieldCheck, HeartHandshake, MapPin, Clock, ExternalLink } from "lucide-react";
import { CompanySettings } from "@/lib/cms";

interface FooterProps {
  settings?: CompanySettings;
}

export function Footer({ settings }: FooterProps) {
  const companyName = settings?.companyName || "Yewbdar Junk Removal";
  const displayPhone = settings?.displayPhone || "(770) 676-0810";
  const telUri = settings?.telUri || "tel:+17706760810";
  const googleMapsUrl = settings?.googleMapsUrl || "https://maps.google.com/?q=Atlanta+GA";
  const address = settings?.physicalAddress || "Metro Atlanta, GA";
  const hours = settings?.hoursOfOperation || "Mon – Sat: 7:00 AM – 7:00 PM · Sun: 8:00 AM – 5:00 PM";
  const insurance = settings?.insuranceAmount || "$1,000,000";
  const ecoDiversion = settings?.ecoDiversionPct || "65%";

  return (
    <footer className="w-full border-t border-black/[0.06] bg-white py-14 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Bio */}
          <div className="md:col-span-2">
            <span className="text-xl font-bold text-charcoal tracking-tight block">
              {companyName}
            </span>
            <p className="mt-3 text-sm text-zinc-muted leading-relaxed max-w-sm">
              Atlanta's trusted independent junk removal company. Same-day pickups, firm upfront pricing, and {ecoDiversion} diverted from local landfills through donation and safe recycling.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={telUri}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest text-white text-xs font-bold apple-press shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{displayPhone}</span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-charcoal text-xs font-semibold transition-colors"
                title="View on Google Maps"
              >
                <MapPin className="w-3.5 h-3.5 text-forest" />
                <span>Google Maps Profile</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
            </div>

            <div className="mt-4 space-y-1 text-xs text-stone-500">
              <p className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-forest" />
                <span>{hours}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-forest" />
                <span>HQ Service Area: {address}</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-charcoal block mb-3">
              Navigation
            </span>
            <ul className="space-y-2 text-sm text-zinc-muted">
              <li>
                <Link href="#services" className="hover:text-charcoal transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-charcoal transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-charcoal transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#recent-work" className="hover:text-charcoal transition-colors">
                  Recent Work
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="hover:text-charcoal transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-charcoal transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Credentials */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-charcoal block mb-3">
              Trust & Guarantees
            </span>
            <ul className="space-y-2.5 text-xs text-zinc-muted">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-forest shrink-0" />
                <span>Licensed & {insurance} Fully Insured</span>
              </li>
              <li className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-forest shrink-0" />
                <span>{ecoDiversion} Recycled or Donated Locally</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-forest font-bold font-mono">0%</span>
                <span>Zero Corporate Franchise Markup</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-forest font-bold">2-Hr</span>
                <span>Guaranteed Arrival Windows</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-black/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-muted">
          <p>© {new Date().getFullYear()} {companyName} LLC. All rights reserved. {address}.</p>
          <p>Residential & Commercial Cleanouts across Metro Atlanta.</p>
        </div>
      </div>
    </footer>
  );
}
