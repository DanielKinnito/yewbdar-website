import { defineType, defineField } from "sanity";

export const recentProject = defineType({
  name: "recentProject",
  title: "Recent Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      placeholder: "e.g. Walkout Basement & Gym Clearout",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "locationTag",
      title: "Location Tag",
      type: "string",
      validation: (Rule) => Rule.required(),
      placeholder: "e.g. Buckhead, Atlanta · ZIP 30305",
    }),
    defineField({
      name: "neighborhood",
      title: "Neighborhood Name",
      type: "string",
      placeholder: "e.g. Buckhead Estate",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Residential Cleanout", value: "residential" },
          { title: "Garage / Basement", value: "garage" },
          { title: "Commercial / Office", value: "commercial" },
          { title: "Estate Downsizing", value: "estate" },
        ],
      },
      initialValue: "residential",
    }),
    defineField({
      name: "beforeImage",
      title: "Before Cleanout Photograph",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
          initialValue: "Cluttered space before Yewbdar junk removal",
        },
      ],
      description: "Photo of the space before cleanout began",
    }),
    defineField({
      name: "afterImage",
      title: "After Cleanout Photograph",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
          initialValue: "Cleaned and swept space after Yewbdar junk removal",
        },
      ],
      description: "Photo of the cleared, swept-clean space",
    }),
    defineField({
      name: "beforeDescription",
      title: "Before Cleanout Description",
      type: "text",
      rows: 3,
      placeholder: "Packed basement filled with 15+ years of accumulated storage...",
    }),
    defineField({
      name: "afterDescription",
      title: "After Cleanout Description",
      type: "text",
      rows: 3,
      placeholder: "Completely emptied and swept clean down to the slab in 2.5 hours...",
    }),
    defineField({
      name: "volume",
      title: "Truck Volume Loaded",
      type: "string",
      placeholder: "e.g. Full 16-Ft Truckload",
    }),
    defineField({
      name: "timeTaken",
      title: "Crew Time Spent",
      type: "string",
      placeholder: "e.g. 2 Hours 30 Mins",
    }),
    defineField({
      name: "ecoDiversion",
      title: "Eco Diversion Result",
      type: "string",
      placeholder: "e.g. 70% Donated & Recycled",
    }),
    defineField({
      name: "completionDate",
      title: "Completion Date",
      type: "date",
    }),
  ],
});
