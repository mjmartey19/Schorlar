"use client"

import { use, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronDown } from "lucide-react"
import WorkCard from "@/components/work-card"
import { caseStudies } from "@/app/content/caseStudies"
import { allPortfolioItems } from "@/app/content/allPortfolioItems"



export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const { slug } = params
  const caseStudy = caseStudies[slug as keyof typeof caseStudies]
  const [isLoaded, setIsLoaded] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Get related works based on the current case study category
  const relatedWorks = allPortfolioItems
    .filter((item) => item.category === caseStudy?.category && item.slug !== slug)
    .slice(0, 4)

  if (!caseStudy) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
        <p className="mb-8">The case study you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link href="/portfolio">Back to Portfolio</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="pt-20">

      {/* Case Study Title */}
      <section className="py-12">
        <div className="container">
          <Link href="/portfolio" className="flex items-center text-sm font-medium text-gray-600 hover:text-black mb-8">
            <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
            Back to Portfolio
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-8">{caseStudy.title}</h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <p className="text-sm text-gray-500 uppercase mb-1">COMPLETION TIME</p>
              <p className="font-bold">{caseStudy.completionTime}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase mb-1">FEE CHARGED</p>
              <p className="font-bold">{caseStudy.feeCharged}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase mb-1">BUILT WITH</p>
              <p className="font-bold">{caseStudy.tools}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase mb-1">CLIENT</p>
              <p className="font-bold">{caseStudy.client}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image with Manual Scroll and Indicator */}
      <section className="py-8">
        <div className="container">
          <div className="relative">
            <div
              className="h-[600px] overflow-auto border-2 border-gray-200 rounded-lg p-1 scrollbar-hide"
              ref={imageRef}
              onScroll={() => setIsScrolling(true)}
            >
              <Image
                src={caseStudy.image || "/placeholder.svg"}
                alt={caseStudy.title}
                width={1200}
                height={3000}
                className="w-full object-contain"
              />
            </div>
            {/* Scroll indicator */}
            {!isScrolling && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full flex items-center text-sm animate-bounce">
                <ChevronDown className="mr-2 h-4 w-4" />
                Scroll to see more
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">{caseStudy.overview}</p>

              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">{caseStudy.challenge}</p>

              <h3 className="text-2xl font-bold mb-4">The Solution</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">{caseStudy.solution}</p>

              <h3 className="text-2xl font-bold mb-4">The Results</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">{caseStudy.results}</p>

              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4">Client Testimonial</h3>
                <blockquote className="text-gray-600 italic mb-4">"{caseStudy.testimonial.quote}"</blockquote>
                <p className="font-medium">— {caseStudy.testimonial.author}</p>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-6 rounded-xl sticky top-24">
                <h3 className="text-xl font-bold mb-6">Project Details</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">CLIENT</p>
                    <p className="font-medium">{caseStudy.client}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">YEAR</p>
                    <p className="font-medium">{caseStudy.year}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">ROLE</p>
                    <p className="font-medium">{caseStudy.role}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">COMPLETION TIME</p>
                    <p className="font-medium">{caseStudy.completionTime}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">FEE CHARGED</p>
                    <p className="font-medium">{caseStudy.feeCharged}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-black text-white hover:bg-gray-800" asChild>
                    <Link href="/#contact">Contact Me</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get Started With Scholar</h2>
            <p className="text-lg mb-8">
              Please contact me to discuss your next project and explore the details. I look forward to working with
              you!
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/#contact">Contact Scholar</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Work Section - Filtered by Category */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Related {caseStudy.category} Projects</h2>
          <p className="text-gray-600 mb-12">
            Explore more of my {caseStudy.category.toLowerCase()} projects similar to {caseStudy.title}.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {relatedWorks.map((item) => (
              <WorkCard
                key={item.id}
                title={item.title}
                image={item.image}
                completionTime={item.completionTime}
                feeCharged={item.feeCharged}
                slug={item.slug}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="group" asChild>
              <Link href="/portfolio">
                View All Projects
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">You only have one chance to make a first impression.</h2>
            <p className="text-xl mb-8">Let's make it an amazing one.</p>
            <Button className="bg-white text-gray-900 hover:bg-gray-100" asChild>
              <Link href="/#contact">Let's Work Together</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <Button variant="outline" className="mb-4 sm:mb-0" asChild>
              <Link href={`/case-study/${caseStudy.prevProject}`}>
                <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
                Previous Case Study
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={`/case-study/${caseStudy.nextProject}`}>
                Next Case Study
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
