import PortfolioPage from "@/components/portfolio-page"
import { projects } from "@/lib/api"
import type { Metadata } from "next"
import { generateMetadata as getSeoMetadata } from "@/lib/seo-config"

export const revalidate = 60 // Revalidate this page every 60 seconds

export async function generateMetadata(): Promise<Metadata> {
  return getSeoMetadata({
    title: "Portfolio | Web Design & Graphic Design Projects",
    description:
      "Explore my creative work across web design, graphic design, and UI/UX projects. View case studies and examples of my professional design and development work.",
    path: "/portfolio",
  })
}

export default async function Portfolio() {
  const allPortfolioItems = await projects()


  return <PortfolioPage allPortfolioItems={allPortfolioItems} />
}
