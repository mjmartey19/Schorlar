"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronDown } from "lucide-react"
import BackToTop from "@/components/back-to-top"
import { PortableText } from '@portabletext/react'
import type { PortableTextComponents } from '@portabletext/react'
import { extractYear, formatFee } from "@/lib/utils"
import WorkCard from "./work-card"

interface CaseStudyDetailProps {
    caseStudy: any
    allCaseStudies: any[]
}

// Custom components for PortableText with proper typing
const portableTextComponents: PortableTextComponents = {
    types: {
        image: ({ value }: { value: any }) => (
            <div className="my-4">
                <Image
                    src={value.asset.url}
                    alt={value.alt || ' '}
                    width={1200}
                    height={800}
                    className="rounded-lg"
                />
                {value.caption && (
                    <p className="text-sm text-gray-500 mt-2">{value.caption}</p>
                )}
            </div>
        ),
    },
    marks: {
        link: ({ children, value }: { children?: React.ReactNode; value?: any }) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
            return (
                <a href={value.href} rel={rel} className="text-blue-600 hover:underline">
                    {children}
                </a>
            )
        },
    },
}

export default function CaseStudyDetail({ caseStudy, allCaseStudies }: CaseStudyDetailProps) {
    const [isLoaded, setIsLoaded] = useState(false)
    const imageRef = useRef<HTMLDivElement>(null)
    const [isScrolling, setIsScrolling] = useState(false)

    // console.log("Case Study", caseStudy)
    useEffect(() => {
        setIsLoaded(true)
    }, [])

    // Get related works based on the current case study category
    const relatedWorks = allCaseStudies
        .filter((item) =>
            item.project.category === caseStudy.project.category && item.project.slug !== caseStudy.project.slug
        )
        .slice(0, 4)

    // console.log("All Case Studies", allCaseStudies)
    // console.log("RelatedWorks", relatedWorks);
    return (
        <div className="pt-20">
            {/* Back to Top Button */}
            <BackToTop />

            {/* Case Study Title */}
            <section className="py-12">
                <div className="container">
                    <Link href="/portfolio" className="flex items-center text-sm font-medium text-gray-600 hover:text-black mb-8">
                        <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
                        Back to Portfolio
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold mb-8">{caseStudy.project.title}</h1>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <p className="text-sm text-gray-500 uppercase mb-1">COMPLETION TIME</p>
                            <p className="font-bold">{caseStudy.project.completionTime}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 uppercase mb-1">FEE CHARGED</p>
                            <p className="font-bold">{formatFee(caseStudy.project.feeCharged)}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 uppercase mb-1">BUILT WITH</p>
                            <p className="font-bold">
                                {caseStudy.tools?.join(', ')}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 uppercase mb-1">CLIENT</p>
                            <p className="font-bold">{caseStudy.project.client}</p>
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
                                src={caseStudy.project.image || "/placeholder.svg"}
                                alt={caseStudy.project.title}
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
                            <div className="prose max-w-none text-gray-600 mb-8 text-lg leading-relaxed">
                                <PortableText
                                    value={caseStudy.overview}
                                    components={portableTextComponents}
                                />
                            </div>

                            <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                            <div className="prose max-w-none text-gray-600 mb-8 text-lg leading-relaxed">
                                <PortableText
                                    value={caseStudy.challenge}
                                    components={portableTextComponents}
                                />
                            </div>

                            <h3 className="text-2xl font-bold mb-4">The Solution</h3>
                            <div className="prose max-w-none text-gray-600 mb-8 text-lg leading-relaxed">
                                <PortableText
                                    value={caseStudy.solution}
                                    components={portableTextComponents}
                                />
                            </div>

                            <h3 className="text-2xl font-bold mb-4">The Results</h3>
                            <div className="prose max-w-none text-gray-600 mb-8 text-lg leading-relaxed">
                                <PortableText
                                    value={caseStudy.results}
                                    components={portableTextComponents}
                                />
                            </div>

                            {caseStudy.testimonial && caseStudy.testimonial.authorRole && (
                                <div className="bg-gray-50 p-8 rounded-xl mb-8">
                                    <h3 className="text-xl font-bold mb-4">Client Testimonial</h3>
                                    <blockquote className="text-gray-600 italic mb-4">"{caseStudy.testimonial.quote}"</blockquote>
                                    <p className="font-medium">— {caseStudy.testimonial.author}, {caseStudy.testimonial.authorRole}</p>
                                </div>
                            )}
                        </div>

                        <div>
                            <div className="bg-gray-50 p-6 rounded-xl sticky top-24">
                                <h3 className="text-xl font-bold mb-6">Project Details</h3>

                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">CLIENT</p>
                                        <p className="font-medium">{caseStudy.project.client}</p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">YEAR</p>
                                        <p className="font-medium">{extractYear(caseStudy.year)}</p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">ROLE</p>
                                        <p className="font-medium">{caseStudy.role}</p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">COMPLETION TIME</p>
                                        <p className="font-medium">{caseStudy.project.completionTime}</p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">FEE CHARGED</p>
                                        <p className="font-medium">{formatFee(caseStudy.project.feeCharged)}</p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Button className="w-full bg-black text-white hover:bg-gray-800" asChild>
                                        <Link href="/contact">Contact Me</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Works Section */}
            {relatedWorks.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="container">
                        <h2 className="text-3xl font-bold mb-8 text-center">Related Works</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedWorks.map((item) => (
                                <WorkCard
                                    key={item.project._id + item.project.image}
                                title={item.project.title}
                                image={item.project.image}
                                completionTime={item.project.completionTime}
                                feeCharged={item.project.feeCharged}
                                slug={item.project.slug.current}
                                client={item.project.client}
                            />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}