import CaseStudyDetail from "@/components/case-study-detail"
import { getCaseStudyBySlug, getCaseStudies } from "@/lib/api"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { generateMetadata as baseGenerateMetadata } from "@/lib/seo-config"
import { ProjectJsonLd } from "@/components/json-ld"

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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug

  // Try to get from Sanity first
  let caseStudy = await getCaseStudyBySlug(slug)

  if (!caseStudy) {
    return baseGenerateMetadata({
      title: "Case Study Not Found",
      description: "The requested case study could not be found.",
      path: `/case-study/${slug}`,
    })
  }

  return baseGenerateMetadata({
    title: `${caseStudy.project.title} | Case Study`,
    description: `Case study for ${caseStudy.project.title} - ${caseStudy.project.category} project for ${caseStudy.project.client}`,
    path: `/case-study/${slug}`,
    ogImage: caseStudy.project.image,
  })
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const  slug  = (await params).slug
  const caseStudy = await getCaseStudyBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  // Get all case studies for related works
  const allCaseStudies = await getCaseStudies()

  

  return (
    <>
      <ProjectJsonLd
        name={caseStudy.project.title}
        description={`Case study for ${caseStudy.project.title}`}
        image={caseStudy.project.image}
        datePublished={caseStudy.year ? `${caseStudy.year}-01-01` : "2023-01-01"}
        author={caseStudy.project.client}
        url={`https://schorlar.com/case-study/${slug}`}
      />
      <CaseStudyDetail caseStudy={caseStudy} allCaseStudies={allCaseStudies} />
    </>
  )
}