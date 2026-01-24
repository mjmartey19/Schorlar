import { getFeaturedProjects, getServices, getTestimonials, getAbout } from "@/lib/api"
import HomePage from "@/components/home-page"
import type { Metadata } from "next"
import { siteConfig, generateMetadata as getSeoMetadata } from "@/lib/seo-config"
import { WebsiteJsonLd, OrganizationJsonLd, PersonJsonLd } from "@/components/json-ld"

export const revalidate = 60 // Revalidate this page every 60 seconds

export async function generateMetadata(): Promise<Metadata> {
  return getSeoMetadata({
    title: `${siteConfig.name} | Creative Designer & Developer`,
    description:
      "Experienced web designer and developer specializing in Mobile & Web Application, Graphic Design, UI/UX and Creative Digital Solutions.",
    path: "/",
  })
}

export default async function Home() {
  const featuredProjects = await getFeaturedProjects()
  const services = await getServices()
  const testimonials = await getTestimonials()
  const about = await getAbout()

  // console.log("About", about)
  // console.log("featured projects", featuredProjects)
  // console.log("Services", services)
  // console.log("Testimonials", testimonials)
  return (
    <>
      <WebsiteJsonLd />
      <OrganizationJsonLd />
      <PersonJsonLd />
      <HomePage featuredProjects={featuredProjects} services={services} testimonials={testimonials} about={about} />
    </>
  )
}
