import { defineType, defineField } from 'sanity'
import { Star, User } from 'lucide-react'

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: User,
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role/Position",
      type: "string",
      description: "e.g. 'CEO of Company', 'Marketing Director'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "quote",
      title: "Testimonial Quote",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      description: "Rating out of 5 stars",
      options: {
        list: [
          { title: "⭐️⭐️⭐️⭐️⭐️ (5)", value: 5 },
          { title: "⭐️⭐️⭐️⭐️ (4)", value: 4 },
          { title: "⭐️⭐️⭐️ (3)", value: 3 },
          { title: "⭐️⭐️ (2)", value: 2 },
          { title: "⭐️ (1)", value: 1 },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    
    defineField({
      name: "isFeatured",
      title: "Featured Testimonial",
      type: "boolean",
      description: "Should this testimonial be prominently displayed?",
      initialValue: false,
    }),
    
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 999,
      validation: (Rule) => Rule.integer(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      rating: "rating",
      isFeatured: "isFeatured",
    },
    prepare({ title, subtitle, rating, isFeatured }) {
      const stars = rating ? '⭐'.repeat(rating) : ''
      return {
        title: `${isFeatured ? '🌟 ' : ''}${title}`,
        subtitle: `${subtitle} ${stars}`,
      }
    },
  },
  orderings: [
    {
      title: 'Featured First',
      name: 'featuredDesc',
      by: [
        { field: 'isFeatured', direction: 'desc' },
        { field: 'order', direction: 'asc' },
      ],
    },
    {
      title: 'Highest Rating',
      name: 'ratingDesc',
      by: [
        { field: 'rating', direction: 'desc' },
        { field: 'order', direction: 'asc' },
      ],
    },
    {
      title: 'Most Recent',
      name: 'dateDesc',
      by: [
        { field: 'date', direction: 'desc' },
      ],
    },
  ],
})