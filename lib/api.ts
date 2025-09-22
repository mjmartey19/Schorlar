import { client } from "@/sanity/lib/client"


// Fetch all projects
export async function projects() {
  const projects = await client.fetch(`
    *[_type == "project"] | order(order asc) {
      _id,
      title,
      slug,
      category,
      "image": image.asset->url,
      completionTime,
      feeCharged,
      client,
      websiteUrl,
      featured,
      order
    }
  `)
  return projects
}

// Fetch featured projects for home page
export async function getFeaturedProjects() {
  const projects = await client.fetch(`
    *[_type == "project" && featured == true] | order(order asc) {
      _id,
      title,
      slug,
      category,
      "image": image.asset->url,
      completionTime,
      feeCharged,
      client,
      featured,
      order
    }
  `)
  return projects
}

// Fetch featured case studies
export async function getFeaturedCaseStudies() {
  const caseStudies = await client.fetch(`
    *[_type == "caseStudy" && featured == true] | order(order asc) {
      _id,
      title,
      slug,
      category,
      "image": image.asset->url,
      completionTime,
      feeCharged,
      client
    }
  `)
  return caseStudies
}

export async function getCaseStudies() {
  const caseStudies = await client.fetch(`
    *[_type == "caseStudy"] {
      _id,
      "project": project-> {
        title,
        "slug": slug.current,
        category,
        "image": image.asset->url,
        completionTime,
        feeCharged,
        client
      },
      year,
      role,
      tools, 
      overview,
      challenge,
      solution,
      results,
      testimonial,
      gallery[] {
        "url": asset->url,
        alt,
        caption
      }
    }
  `)
  return caseStudies
}

export async function getCaseStudyBySlug(slug: string) {
  const caseStudy = await client.fetch(
    `
    *[_type == "caseStudy" && project->slug.current == $slug][0] {
      _id,
      "project": project-> {
        title,
        "slug": slug.current,
        category,
        "image": image.asset->url,
        completionTime,
        feeCharged,
        client
      },
      year,
      role,
      tools, 
      overview,
      challenge,
      solution,
      results,
      testimonial,
      gallery[] {
        "url": asset->url,
        alt,
        caption
      }
    }
    `,
    { slug }
  );
  return caseStudy;
}
// Fetch all testimonials
export async function getTestimonials() {
  const testimonials = await client.fetch(`
    *[_type == "testimonial"] | order(order asc) {
      _id,
      name,
      role,
      quote,
      rating
    }
  `)
  return testimonials
}

// Fetch all services
export async function getServices() {
  const services = await client.fetch(`
    *[_type == "service"] | order(order asc) {
      _id,
      title,
      slug,
      icon,
      description
    }
  `)
  return services
}

// Fetch about information
export async function getAbout() {
  const about = await client.fetch(`
    *[_type == "about"][0] {
      name,
      shotBio,
      "heroImage": heroImage.asset->url,
      role,
      company,
      bio,
      "aboutImage": aboutImage.asset->url,
      projectsCompleted,
      yearsExperience
    }
  `)
  return about
}

