import { createClient } from "@sanity/client";

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  neighborhood: string;
  beforeDescription: string;
  afterDescription: string;
  volume: string;
  timeTaken: string;
  ecoDiversion: string;
  beforeImageUrl?: string;
  afterImageUrl?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  quote: string;
  source: string;
}

export interface PricingTierItem {
  id: string;
  name: string;
  fraction: string;
  price: string;
  fillPct: number;
  pickupEquivalent: string;
  cubicYards: string;
  popular?: boolean;
  description: string;
  features: string[];
}

export interface CompanySettings {
  companyName: string;
  displayPhone: string;
  telUri: string;
  dispatchEmail: string;
  googleMapsUrl: string;
  physicalAddress: string;
  hoursOfOperation: string;
  bannerAlertText: string;
  yearsInBusiness: string;
  truckSize: string;
  heroBadgeText: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroTruckImageUrl: string;
  crewPhotoUrl: string;
  googleRating: string;
  googleReviewCount: string;
  ecoDiversionPct: string;
  insuranceAmount: string;
  minPriceRange: string;
  quarterTruckRange: string;
  halfTruckRange: string;
  fullTruckRange: string;
}

// Verified fallback mock data (derived from Phase 2 established content and generated assets)
export const mockProjects: ProjectItem[] = [
  {
    id: "sandy-springs-garage",
    title: "Full 2-Car Garage Restoration",
    location: "Sandy Springs, GA · ZIP 30328",
    neighborhood: "Huntcliff Community",
    beforeDescription:
      "Wall-to-wall accumulated clutter: old lawnmowers, broken tool benches, rotted timber, carpet rolls, and dozens of cardboard boxes blocking parking.",
    afterDescription:
      "Spotless 2-car garage floor swept clean down to the slab. Homeowners parked both family vehicles inside for the first time in 8 years.",
    volume: "Full 16-Ft Truckload",
    timeTaken: "3 Hours Flat",
    ecoDiversion: "65% Recycled locally",
    beforeImageUrl: "/images/garage-before.jpg",
    afterImageUrl: "/images/garage-after.jpg",
  },
  {
    id: "buckhead-basement",
    title: "Walkout Basement & Gym Clearout",
    location: "Buckhead, Atlanta · ZIP 30305",
    neighborhood: "Buckhead Estate",
    beforeDescription:
      "Packed basement filled with 15+ years of accumulated storage: 2 sectional sofas, heavy elliptical trainer, 40+ storage bins, and renovation wood scrap.",
    afterDescription:
      "Completely emptied and swept clean down to the concrete slab in 2.5 hours. Sofas and gym equipment delivered to local thrift partners.",
    volume: "3/4 Box Truckload",
    timeTaken: "2 Hours 30 Mins",
    ecoDiversion: "70% Donated & Recycled",
    beforeImageUrl: "/images/garage-before.jpg",
    afterImageUrl: "/images/garage-after.jpg",
  },
  {
    id: "midtown-office",
    title: "Office Renovation Cubicle Clearout",
    location: "Midtown Atlanta · ZIP 30309",
    neighborhood: "Peachtree Corridor",
    beforeDescription:
      "14 outdated modular cubicles, filing cabinets, computer towers, and 20+ desk chairs left behind after commercial tenant lease ended.",
    afterDescription:
      "Cleared discreetly via service elevator with zero disruption to neighboring commercial tenants. Space ready for new flooring.",
    volume: "1.5 Truckloads",
    timeTaken: "Single Afternoon",
    ecoDiversion: "E-Waste Recycled Safely",
    beforeImageUrl: "/images/garage-before.jpg",
    afterImageUrl: "/images/garage-after.jpg",
  },
];

export const mockReviews: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Eleanor Vance",
    location: "Buckhead Estate",
    rating: 5,
    quote:
      "They showed up on time, quoted me 30% less than 1-800-GOT-JUNK, and had our entire crawlspace cleared in under two hours. Cleaned up afterwards too.",
    source: "Google Verified Review",
  },
  {
    id: "rev-2",
    author: "David Miller",
    location: "Sandy Springs",
    rating: 5,
    quote:
      "Courteous crew and no surprises on the invoice. Everything from our old garage cleanout was sorted and delivered to local charity thrift partners.",
    source: "Google Verified Review",
  },
  {
    id: "rev-3",
    author: "Sarah Thornton",
    location: "Midtown Atlanta",
    rating: 5,
    quote:
      "Fantastic same-day service for an office remodel. They arrived within their 2-hour window and cleared two truckloads with zero elevator drama.",
    source: "Nextdoor Fave",
  },
];

export const mockPricingTiers: PricingTierItem[] = [
  {
    id: "single",
    name: "Single Item / Minimum",
    fraction: "Min Haul",
    price: "$75 – $125",
    fillPct: 15,
    pickupEquivalent: "1/2 Pickup Bed",
    cubicYards: "2–3 cu yds",
    description: "Ideal for a single mattress, broken washer, refrigerator, or curbside sofa pickup.",
    features: [
      "All loading labor included",
      "EPA certified recycling",
      "Broom-clean sweep afterwards",
    ],
  },
  {
    id: "quarter",
    name: "1/4 Truckload",
    fraction: "1/4 Truck",
    price: "$175 – $225",
    fillPct: 25,
    pickupEquivalent: "Up to 4 Pickup Beds",
    cubicYards: "4–6 cu yds",
    description: "Great for clearing a small bedroom set, love seat, small desk, and 6–8 storage bins.",
    features: [
      "Up to 4 pickup truck beds",
      "Local charity drop-off",
      "Firm price locked before haul",
    ],
  },
  {
    id: "half",
    name: "1/2 Truckload",
    fraction: "1/2 Truck",
    price: "$295 – $350",
    fillPct: 50,
    pickupEquivalent: "Up to 8 Pickup Beds",
    cubicYards: "8–10 cu yds",
    popular: true,
    description: "Our most popular residential cleanout size. Clears full garage bays, living rooms, and basements.",
    features: [
      "Up to 8 pickup truck beds",
      "65% donated/recycled",
      "Two uniformed crew members",
    ],
  },
  {
    id: "full",
    name: "Full 16-Ft Box Truck",
    fraction: "Full Truck",
    price: "$550 – $650",
    fillPct: 100,
    pickupEquivalent: "Up to 16 Pickup Beds",
    cubicYards: "16+ cu yds",
    description: "Heavy-duty commercial capacity for whole-home estate cleanouts, renovations, and office relocations.",
    features: [
      "Massive 16-ft box capacity",
      "Save $250+ vs 1-800 guys",
      "Same-day property sweep",
    ],
  },
];

export const mockCompanySettings: CompanySettings = {
  companyName: "Yewbdar Junk Removal",
  displayPhone: "(770) 676-0810",
  telUri: "tel:+17706760810",
  dispatchEmail: "dispatch@yewbdarjunk.com",
  googleMapsUrl: "https://maps.google.com/?q=Atlanta+GA",
  physicalAddress: "Metro Atlanta, GA",
  hoursOfOperation: "Mon – Sat: 7:00 AM – 7:00 PM · Sun: 8:00 AM – 5:00 PM",
  bannerAlertText: "Crews active across Metro Atlanta today · Same-day slots available",
  yearsInBusiness: "15+",
  truckSize: "16 ft",
  heroBadgeText: "Atlanta's Highest-Rated Hauling Fleet",
  heroHeadline: "Atlanta's Same-Day Junk Removal & Cleanouts",
  heroSubheadline:
    "Professional two-person crews with 16-ft box trucks. Eco-friendly donation sorting, honest volume rates, and rapid dispatch across Buckhead, Sandy Springs, and all Metro Atlanta.",
  heroTruckImageUrl: "/images/hero-truck.jpg",
  crewPhotoUrl: "/images/crew-in-action.jpg",
  googleRating: "5.0",
  googleReviewCount: "700+",
  ecoDiversionPct: "65%",
  insuranceAmount: "$1,000,000",
  minPriceRange: "$75 – $125",
  quarterTruckRange: "$175 – $225",
  halfTruckRange: "$295 – $350",
  fullTruckRange: "$550 – $650",
};

// Check if live Sanity credentials are provided
const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

const client = sanityProjectId
  ? createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: "2024-01-01",
      useCdn: false,
    })
  : null;

export async function getRecentProjects(): Promise<ProjectItem[]> {
  if (!client) {
    return mockProjects;
  }

  try {
    const data = await client.fetch<ProjectItem[]>(
      `*[_type == "recentProject"] | order(completionDate desc) {
        "id": _id,
        "title": coalesce(title, "Cleanout Project"),
        "location": coalesce(locationTag, neighborhood, "Metro Atlanta"),
        "neighborhood": coalesce(neighborhood, "Atlanta"),
        "beforeDescription": coalesce(beforeDescription, ""),
        "afterDescription": coalesce(afterDescription, ""),
        "volume": coalesce(volume, "1 Truckload"),
        "timeTaken": coalesce(timeTaken, "2 Hours"),
        "ecoDiversion": coalesce(ecoDiversion, "Donated & Recycled"),
        "beforeImageUrl": beforeImage.asset->url,
        "afterImageUrl": afterImage.asset->url
      }`
    );
    return data && data.length > 0 ? data : [];
  } catch (error) {
    console.warn("[Sanity CMS] Query failed, returning empty list:", error);
    return [];
  }
}

export async function getCustomerReviews(): Promise<ReviewItem[]> {
  if (!client) {
    return mockReviews;
  }

  try {
    const data = await client.fetch<ReviewItem[]>(
      `*[_type == "review"] | order(date desc) {
        "id": _id,
        "author": coalesce(author, "Customer"),
        "location": coalesce(location, "Metro Atlanta"),
        "rating": coalesce(rating, 5),
        "quote": coalesce(quote, ""),
        "source": coalesce(reviewSource, "Google Verified Review")
      }`
    );
    return data && data.length > 0 ? data : [];
  } catch (error) {
    console.warn("[Sanity CMS] Query failed, returning empty list:", error);
    return [];
  }
}

export async function getPricingTiers(): Promise<PricingTierItem[]> {
  if (!client) {
    return mockPricingTiers;
  }

  try {
    const data = await client.fetch<PricingTierItem[]>(
      `*[_type == "pricingTier"] | order(order asc, fillPercentage asc) {
        "id": _id,
        "name": coalesce(title, "Custom Load"),
        "fraction": coalesce(fraction, "Custom"),
        "price": coalesce(price, "Custom Rate"),
        "fillPct": coalesce(fillPercentage, 50),
        "pickupEquivalent": coalesce(pickupEquivalent, "Standard Volume"),
        "cubicYards": coalesce(cubicYards, "Approx. Volume"),
        "popular": coalesce(isPopular, false),
        "description": coalesce(description, ""),
        "features": coalesce(features, [])
      }`
    );
    return data && data.length > 0 ? data : mockPricingTiers;
  } catch (error) {
    console.warn("[Sanity CMS] Pricing tiers query failed, returning fallback:", error);
    return mockPricingTiers;
  }
}

export async function getCompanySettings(): Promise<CompanySettings> {
  if (!client) {
    return mockCompanySettings;
  }

  try {
    const data = await client.fetch<Partial<CompanySettings>>(
      `*[_type == "companySettings"][0] {
        companyName,
        displayPhone,
        telUri,
        dispatchEmail,
        googleMapsUrl,
        physicalAddress,
        hoursOfOperation,
        bannerAlertText,
        yearsInBusiness,
        truckSize,
        heroBadgeText,
        heroHeadline,
        heroSubheadline,
        "heroTruckImageUrl": heroTruckImage.asset->url,
        "crewPhotoUrl": crewPhoto.asset->url,
        googleRating,
        googleReviewCount,
        ecoDiversionPct,
        insuranceAmount,
        minPriceRange,
        quarterTruckRange,
        halfTruckRange,
        fullTruckRange
      }`
    );

    if (!data) {
      return mockCompanySettings;
    }

    return {
      companyName: data.companyName || mockCompanySettings.companyName,
      displayPhone: data.displayPhone || mockCompanySettings.displayPhone,
      telUri: data.telUri || mockCompanySettings.telUri,
      dispatchEmail: data.dispatchEmail || mockCompanySettings.dispatchEmail,
      googleMapsUrl: data.googleMapsUrl || mockCompanySettings.googleMapsUrl,
      physicalAddress: data.physicalAddress || mockCompanySettings.physicalAddress,
      hoursOfOperation: data.hoursOfOperation || mockCompanySettings.hoursOfOperation,
      bannerAlertText: data.bannerAlertText || mockCompanySettings.bannerAlertText,
      yearsInBusiness: data.yearsInBusiness || mockCompanySettings.yearsInBusiness,
      truckSize: data.truckSize || mockCompanySettings.truckSize,
      heroBadgeText: data.heroBadgeText || mockCompanySettings.heroBadgeText,
      heroHeadline: data.heroHeadline || mockCompanySettings.heroHeadline,
      heroSubheadline: data.heroSubheadline || mockCompanySettings.heroSubheadline,
      heroTruckImageUrl: data.heroTruckImageUrl || mockCompanySettings.heroTruckImageUrl,
      crewPhotoUrl: data.crewPhotoUrl || mockCompanySettings.crewPhotoUrl,
      googleRating: data.googleRating || mockCompanySettings.googleRating,
      googleReviewCount: data.googleReviewCount || mockCompanySettings.googleReviewCount,
      ecoDiversionPct: data.ecoDiversionPct || mockCompanySettings.ecoDiversionPct,
      insuranceAmount: data.insuranceAmount || mockCompanySettings.insuranceAmount,
      minPriceRange: data.minPriceRange || mockCompanySettings.minPriceRange,
      quarterTruckRange: data.quarterTruckRange || mockCompanySettings.quarterTruckRange,
      halfTruckRange: data.halfTruckRange || mockCompanySettings.halfTruckRange,
      fullTruckRange: data.fullTruckRange || mockCompanySettings.fullTruckRange,
    };
  } catch (error) {
    console.warn("[Sanity CMS] Settings query failed, falling back to mock settings:", error);
    return mockCompanySettings;
  }
}
