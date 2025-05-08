import { getFeaturedProjects, getServices, getTestimonials, getAbout } from "@/lib/api"
import HomePage from "@/components/home-page"

export const revalidate = 60 // Revalidate this page every 60 seconds

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
    <HomePage featuredProjects={featuredProjects} services={services} testimonials={testimonials} about={about} />
  )
}
