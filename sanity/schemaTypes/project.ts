import { defineType, defineField } from 'sanity'

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9-]/g, '')
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
       name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Graphic Design", value: "graphic" },
          { title: "Web Design", value: "web", },
          { title: "UI/UX Design", value: "ui" },
          { title: "Mobile Design", value: "mobile"},
        ],
        layout: "dropdown"
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        })
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "completionTime",
      title: "Completion Time",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
       defineField({
     name: "feeCharged",
      title: "Fee Charged",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
     defineField({
      name: "client",
      title: "Client",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    {
      name: "websiteUrl",
      title: "Website URL",
      type: "url",
      description: "Live website URL",
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    },
    defineField({
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      initialValue: false,
     description: "Should this project be featured on the home page?",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
      description: "Lower numbers appear first",
    }),
  ],
  preview: {
    select: {
       title: "title",
      media: "image",
      category: "category",
    },
    prepare({ title, media, category }: any) {
      return {
        title,
        subtitle: category,
        media,
      }
    },
  },
  orderings: [
    {
      title: "Featured First",
      name: "featuredDesc",
      by: [
        { field: "featured", direction: "desc" },
        { field: "order", direction: "asc" },
      ],
    },
   
    {
      title: "Completion Date",
      name: "dateDesc",
      by: [
        { field: "completionTime", direction: "desc" },
      ],
    },
  ],
})