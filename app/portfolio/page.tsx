"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import WorkCard from "@/components/work-card"
import { allPortfolioItems } from "../content/allPortfolioItems"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}



// Categories for filtering
const categories = ["All", "Web Design", "UI Design", "Graphic Design"]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All" ? allPortfolioItems : allPortfolioItems.filter((item) => item.category === activeCategory)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              My <span className="gradient-text">Portfolio</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Explore my creative work across web design, graphic design, and UI/UX projects.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "outline" : "ghost"}
                className="rounded-full"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredItems.map((item) => (
              <WorkCard
                key={item.id}
                title={item.title}
                image={item.image}
                completionTime={item.completionTime}
                feeCharged={item.feeCharged}
                client={item.client}
                slug={item.slug}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="group">
              Load More
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's collaborate to create something amazing together. Get in touch to discuss your project needs.
            </p>
            <Button className="btn-primary" asChild>
              <Link href="/contact">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
