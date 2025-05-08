

import PortfolioPage from "@/components/portfolio-page"
import { projects } from "@/lib/api"

export const revalidate = 60 // Revalidate this page every 60 seconds

export default async function Portfolio() {
  const allPortfolioItems = await projects()


  return <PortfolioPage allPortfolioItems={allPortfolioItems} />
}
