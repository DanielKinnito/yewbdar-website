import { defineType, defineField } from "sanity";

export const pricingTier = defineType({
  name: "pricingTier",
  title: "Pricing Tiers",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tier Name",
      type: "string",
      placeholder: "e.g. 1/2 Truckload (Most Popular)",
      validation: (Rule) => Rule.required(),
      description: "Full descriptive name of the load size",
    }),
    defineField({
      name: "fraction",
      title: "Short Volume Label",
      type: "string",
      placeholder: "e.g. 1/2 Truck, Min Haul, or 1/4 Truck",
      validation: (Rule) => Rule.required(),
      description: "Short label displayed on selector pills and card headers",
    }),
    defineField({
      name: "price",
      title: "Price or Estimated Range",
      type: "string",
      placeholder: "e.g. $295 – $350 or Starting at $85",
      validation: (Rule) => Rule.required(),
      description: "Formatted price shown to the customer",
    }),
    defineField({
      name: "fillPercentage",
      title: "Truck Fill Percentage (0 to 100%)",
      type: "number",
      initialValue: 50,
      validation: (Rule) => Rule.required().min(0).max(100),
      description: "Controls the visual 16-ft box truck capacity meter (e.g. 15 for Min, 25 for 1/4, 50 for 1/2, 100 for Full)",
    }),
    defineField({
      name: "pickupEquivalent",
      title: "Pickup Bed Equivalent",
      type: "string",
      placeholder: "e.g. Up to 8 Pickup Beds",
      description: "Relatable comparison for residential customers",
    }),
    defineField({
      name: "cubicYards",
      title: "Cubic Yards Volume",
      type: "string",
      placeholder: "e.g. 8–10 cu yds",
    }),
    defineField({
      name: "isPopular",
      title: "Mark as Most Popular / Recommended",
      type: "boolean",
      initialValue: false,
      description: "Highlights this card with a distinctive badge and sets it as the default calculator selection",
    }),
    defineField({
      name: "description",
      title: "Tier Description",
      type: "text",
      rows: 2,
      placeholder: "Our most popular residential cleanout size. Clears full garage bays, living rooms, and basements.",
    }),
    defineField({
      name: "features",
      title: "Included Features (Checklist)",
      type: "array",
      of: [{ type: "string" }],
      initialValue: [
        "All loading labor included",
        "EPA & local charity sorting",
        "Firm quote locked before haul",
      ],
      description: "Bullet points displayed with green checkmarks on the card",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
      description: "Order on the website (e.g. 1 for Min Haul, 2 for 1/4, 3 for 1/2, 4 for Full)",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
