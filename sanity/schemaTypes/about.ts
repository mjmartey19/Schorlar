import { defineType, defineField } from 'sanity'

export default defineType({
    name: "about",
    title: "About",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
         defineField({
            name: "shotBio",
            title: "Shot Bio",
            type: "text",
            validation: (Rule) => Rule.required(),
         }),
            defineField({
            name: "heroImage",
            title: "Hero Image",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: "alt",
                    title: "Alternative Text",
                    type: "string",
                    description: "Important for SEO and accessibility",
                    validation: (Rule) => Rule.required(),
                })
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "role",
            title: "Role",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "company",
            title: "Company",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "bio",
            title: "Bio",
            type: "array",
            of: [{ type: "text" }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "aboutImage",
            title: "About Image",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: "alt",
                    title: "Alternative Text",
                    type: "string",
                    description: "Important for SEO and accessibility",
                    validation: (Rule) => Rule.required(),
                })
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "projectsCompleted",
            title: "Projects Completed",
            type: "number",
            validation: (Rule) => Rule.required().integer().positive(),
        }),
        defineField({
            name: "yearsExperience",
            title: "Years of Experience",
            type: "number",
            validation: (Rule) => Rule.required().integer().positive(),
        }),
    ],
})