"use client"
import type { Metadata } from "next"
import { generateMetadata } from "@/lib/seo-config"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = generateMetadata({
    title: "Page Not Found | 404",
    description:
        "The page you're looking for doesn't exist or has been moved. Explore our graphic design portfolio while you're here.",
    path: "/404",
})
  
// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
}

export default function NotFound() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <div className="flex flex-col items-center">
                        {/* Search Illustration */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            className="mx-auto mb-8 max-w-xs"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="200"
                                height="200"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-black"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.3-4.3" />
                                <path d="M11 8v6" />
                                <path d="M8 11h6" />
                            </svg>
                        </motion.div>

                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        >
                            404 - Page <span className="gradient-text">Not Found</span>
                        </motion.h1>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
                        >
                            The page you're looking for doesn't exist or has been moved.
                        </motion.p>
                        <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.4 }}>
                            <Button className="bg-black text-white hover:bg-gray-800" asChild>
                                <Link href="/" className="flex items-center">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Back to Home
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}