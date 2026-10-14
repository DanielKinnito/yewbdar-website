import React from "react";
import { Star, CheckCircle, ExternalLink } from "lucide-react";
import { type ReviewItem, type CompanySettings } from "@/lib/cms";

export interface CustomerReviewsSectionProps {
  reviews?: ReviewItem[];
  settings?: CompanySettings;
}

export function CustomerReviewsSection({ reviews, settings }: CustomerReviewsSectionProps) {
  const hasReviews = reviews && reviews.length > 0;
  const googleMapsUrl = settings?.googleMapsUrl || "https://maps.google.com/?q=Atlanta+GA";
  const rating = settings?.googleRating || "5.0";
  const reviewCount = settings?.googleReviewCount || "700+";

  return (
    <section id="reviews" className="py-20 sm:py-28 scroll-mt-28 bg-sand/30 border-y border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-forest bg-forest-light/80 px-3.5 py-1 rounded-full border border-forest/20 inline-block mb-3">
              Verified Reputation
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
              Loved By Atlanta Homeowners & Businesses
            </h2>
            <p className="mt-3 text-base text-stone-600 leading-relaxed">
              Real feedback from local junk removal, cleanout, and hauling jobs across Buckhead, Sandy Springs, Alpharetta, and all Metro Atlanta.
            </p>
          </div>

          {/* Direct Google Reviews Action Button */}
          <div className="shrink-0">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 shadow-sm text-charcoal font-semibold text-sm transition-all group"
            >
              <div className="flex items-center text-amber-500">
                <Star className="w-4 h-4 fill-amber-500" />
              </div>
              <span>
                <span className="font-bold">{rating} ★</span> on Google ({reviewCount} reviews)
              </span>
              <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-forest transition-colors" />
            </a>
          </div>
        </div>

        {hasReviews ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <div key={rev.id || rev.author} className="bezel-shell">
                <div className="bezel-core p-7 flex flex-col justify-between h-full bg-white rounded-2xl border border-stone-200/80 shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(rev.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-500" />
                        ))}
                      </div>
                      <span className="text-[11px] font-semibold text-forest flex items-center gap-1 bg-forest-light/60 px-2.5 py-0.5 rounded-full border border-forest/15">
                        <CheckCircle className="w-3 h-3" />
                        <span>{rev.source || "Google Verified"}</span>
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-charcoal/90 leading-relaxed italic mb-6">
                      "{rev.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-charcoal block text-sm">{rev.author}</span>
                      <span className="text-stone-500">{rev.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-2xl border border-stone-200 text-center max-w-lg mx-auto shadow-sm">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 fill-amber-500" />
            </div>
            <h3 className="font-bold text-charcoal text-lg">
              {rating} Star Rated on Google Maps
            </h3>
            <p className="text-sm text-stone-600 mt-1 mb-5">
              Read all verified reviews from our recent cleanouts directly on our Google Business Profile.
            </p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-forest hover:bg-forest-dark text-white text-sm font-bold shadow-sm transition-colors"
            >
              <span>View Reviews On Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
