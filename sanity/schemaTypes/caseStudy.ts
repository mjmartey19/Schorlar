import { defineType, defineField } from 'sanity'

export default defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({
      name: "project",
      title: "Related Project",
      type: "reference",
      to: [{ type: "project" }],
      validation: (Rule) => Rule.required(),
      description: "Link to the project this case study is about"
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "date",
      options: {
        dateFormat: "YYYY" // Only show year in the input
      },
      validation: (Rule) => Rule.required(),
      description: "Year the project was completed"
    }),
     defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "Your role in this project"
    }),
   defineField({
      name: "tools",
      title: "Tools/Technologies Used",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags" 
      },
      validation: (Rule) => Rule.required().min(1),
      description: "List all tools, frameworks, and technologies used in this project"
    }),
    
    defineField({
      name: "overview",
      title: "Project Overview",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "challenge",
      title: "The Challenge",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "solution",
      title: "The Solution",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "results",
      title: "The Results",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "testimonial",
      title: "Client Testimonial",
      type: "object",
      fields: [
        defineField({
          name: "quote",
          title: "Quote",
          type: "text",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "author",
          title: "Author",
          type: "string",
        }),
        defineField({
          name: "authorRole",
          title: "Author Role",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "gallery",
      title: "Project Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alternative Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "project.title",
      media: "project.image",
      category: "project.category"
    },
    prepare({ title, media, category }) {
      return {
        title,
        subtitle: category,
        media,
      }
    },
  },
})