import { defineType, defineField } from "sanity";

export const review = defineType({
  name: "review",
  title: "Customer Reviews",
  type: "document",
  fields: [
    defineField({
      name: "author",
      title: "Author Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Neighborhood / Location (e.g. Buckhead, Atlanta)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Star Rating (1 to 5)",
      type: "number",
      initialValue: 5,
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: "quote",
      title: "Review Quote",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "reviewSource",
      title: "Source",
      type: "string",
      options: {
        list: [
          { title: "Google Verified Review", value: "Google" },
          { title: "Nextdoor Recommendation", value: "Nextdoor" },
          { title: "Yelp Verified", value: "Yelp" },
        ],
      },
      initialValue: "Google",
    }),
    defineField({
      name: "date",
      title: "Review Date",
      type: "date",
    }),
  ],
});
