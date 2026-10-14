import { defineType, defineField } from "sanity";

export const companySettings = defineType({
  name: "companySettings",
  title: "Company Settings",
  type: "document",
  groups: [
    { name: "hero", title: "1. Hero Section & Images" },
    { name: "contact", title: "2. Contact & Google Reviews Link" },
    { name: "trust", title: "3. Trust Stats & Crew" },
    { name: "pricing", title: "4. Pricing Rates" },
  ],
  fields: [
    // --- Group: Hero Section & Images ---
    defineField({
      name: "heroBadgeText",
      title: "Hero Badge Tagline",
      type: "string",
      group: "hero",
      initialValue: "Atlanta's Highest-Rated Hauling Fleet",
      description: "Small pill badge displayed above the main hero headline",
    }),
    defineField({
      name: "heroHeadline",
      title: "Main Hero Headline",
      type: "string",
      group: "hero",
      initialValue: "Atlanta's Same-Day Junk Removal & Cleanouts",
      description: "Primary H1 headline on the home page",
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero Subheadline Description",
      type: "text",
      rows: 3,
      group: "hero",
      initialValue:
        "Professional two-person crews with 16-ft box trucks. Eco-friendly donation sorting, honest volume rates, and rapid dispatch across Buckhead, Sandy Springs, and all Metro Atlanta.",
      description: "Descriptive paragraph under the hero headline",
    }),
    defineField({
      name: "heroTruckImage",
      title: "Hero Truck Feature Photo",
      type: "image",
      group: "hero",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          initialValue: "16-ft Yewbdar Junk Removal box truck parked in Atlanta driveway",
        },
      ],
      description:
        "Primary photograph of your branded box truck displayed in the hero showcase. (Defaults to Yewbdar 16-ft truck if empty).",
    }),

    // --- Group: Contact & Google Reviews Link ---
    defineField({
      name: "companyName",
      title: "Company Legal / Trade Name",
      type: "string",
      group: "contact",
      initialValue: "Yewbdar Junk Removal",
    }),
    defineField({
      name: "displayPhone",
      title: "Display Phone Number",
      type: "string",
      group: "contact",
      initialValue: "(770) 676-0810",
      description: "Formatted phone number shown on the website (e.g. (770) 676-0810)",
    }),
    defineField({
      name: "telUri",
      title: "Click-to-Call Phone URI",
      type: "string",
      group: "contact",
      initialValue: "tel:+17706760810",
      description: "Dialer string for mobile taps (e.g. tel:+17706760810)",
    }),
    defineField({
      name: "dispatchEmail",
      title: "Dispatch Notification Email",
      type: "string",
      group: "contact",
      initialValue: "dispatch@yewbdarjunk.com",
      description: "Where customer estimate bookings and inquiries are delivered",
    }),
    defineField({
      name: "googleMapsUrl",
      title: "Google Business Profile / Maps Location URL",
      type: "url",
      group: "contact",
      initialValue: "https://maps.google.com/?q=Atlanta+GA",
      description:
        "Direct link to your Google Maps listing (e.g. https://maps.app.goo.gl/... or Google Place link). Customers who click the 5.0 Google Reviews badges and footer link will be directed straight to your live Google reviews.",
    }),
    defineField({
      name: "physicalAddress",
      title: "Service Base Address / Locality",
      type: "string",
      group: "contact",
      initialValue: "Metro Atlanta, GA",
      description: "Address or service hub shown in the footer and local business schema",
    }),
    defineField({
      name: "hoursOfOperation",
      title: "Hours of Operation",
      type: "string",
      group: "contact",
      initialValue: "Mon – Sat: 7:00 AM – 7:00 PM · Sun: 8:00 AM – 5:00 PM",
      description: "Operating schedule displayed in footer and schema",
    }),
    defineField({
      name: "bannerAlertText",
      title: "Top Notification Bar Text",
      type: "string",
      group: "contact",
      initialValue: "Crews active across Metro Atlanta today · Same-day slots available",
    }),

    // --- Group: Trust Stats & Crew ---
    defineField({
      name: "googleRating",
      title: "Google Star Rating",
      type: "string",
      group: "trust",
      initialValue: "5.0",
    }),
    defineField({
      name: "googleReviewCount",
      title: "Google Review Count",
      type: "string",
      group: "trust",
      initialValue: "700+",
      description: "Total verified reviews (e.g. 700+, 250+, etc.)",
    }),
    defineField({
      name: "yearsInBusiness",
      title: "Years in Business",
      type: "string",
      group: "trust",
      initialValue: "15+",
      description: "e.g. 15+ Years (Est. 2011)",
    }),
    defineField({
      name: "ecoDiversionPct",
      title: "Eco Donation / Diversion %",
      type: "string",
      group: "trust",
      initialValue: "65%",
      description: "Percentage of haul diverted from Atlanta landfills",
    }),
    defineField({
      name: "insuranceAmount",
      title: "Insurance Coverage Amount",
      type: "string",
      group: "trust",
      initialValue: "$1,000,000",
      description: "e.g. $1,000,000 Fully Insured",
    }),
    defineField({
      name: "truckSize",
      title: "Standard Fleet Truck Size",
      type: "string",
      group: "trust",
      initialValue: "16 ft",
      description: "e.g. 16 ft (holds 6-8 pickup beds)",
    }),
    defineField({
      name: "crewPhoto",
      title: "Crew in Action Photo",
      type: "image",
      group: "trust",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          initialValue: "Uniformed Yewbdar crew carrying furniture on job site",
        },
      ],
      description: "Authentic photo of your uniformed crew on a job site",
    }),

    // --- Group: Pricing Rates ---
    defineField({
      name: "minPriceRange",
      title: "Single Item / Min Haul Rate",
      type: "string",
      group: "pricing",
      initialValue: "$75 – $125",
    }),
    defineField({
      name: "quarterTruckRange",
      title: "1/4 Truckload Rate",
      type: "string",
      group: "pricing",
      initialValue: "$175 – $225",
    }),
    defineField({
      name: "halfTruckRange",
      title: "1/2 Truckload Rate (Most Popular)",
      type: "string",
      group: "pricing",
      initialValue: "$295 – $350",
    }),
    defineField({
      name: "fullTruckRange",
      title: "Full 16-Ft Truckload Rate",
      type: "string",
      group: "pricing",
      initialValue: "$550 – $650",
    }),
  ],
});
