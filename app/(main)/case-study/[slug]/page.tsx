import CaseStudyDetail from "@/components/case-study-detail"
import { getCaseStudyBySlug, getCaseStudies } from "@/lib/api"
import { notFound } from "next/navigation"

export const revalidate = 60 // Revalidate this page every 60 seconds

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies()

  // Filter out any case studies that don't have a valid slug
  return caseStudies
    .filter((caseStudy: any) =>
      caseStudy?.project?.slug?.current &&
      typeof caseStudy.project.slug.current === 'string'
    )
    .map((caseStudy: any) => ({
      slug: caseStudy.project.slug.current,
    }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const  slug  = (await params).slug
  const caseStudy = await getCaseStudyBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  // Get all case studies for related works
  const allCaseStudies = await getCaseStudies()

  return <CaseStudyDetail caseStudy={caseStudy} allCaseStudies={allCaseStudies} />
}