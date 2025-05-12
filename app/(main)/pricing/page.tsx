"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, X } from "lucide-react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FAQAccordion from "@/components/faq-accordion"
import { pricingData } from "../content/pricing"
import { faqs } from "../content/faqs"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}


export default function Pricing() {
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards")

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Pricing <span className="gradient-text">Plans</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Flexible options tailored to your needs and budget
            </motion.p>

            <div className="flex justify-center space-x-4">
              <Button
                variant={viewMode === "cards" ? "default" : "outline"}
                onClick={() => setViewMode("cards")}
                className="rounded-full"
              >
                Card View
              </Button>
              <Button
                variant={viewMode === "table" ? "default" : "outline"}
                onClick={() => setViewMode("table")}
                className="rounded-full"
              >
                Comparison View
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="fullstack" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-2xl">
                <TabsTrigger value="fullstack">Web Development</TabsTrigger>
                <TabsTrigger value="uiux">UI/UX Design</TabsTrigger>
                <TabsTrigger value="graphic">Graphic Design</TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(pricingData).map(([key, category]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">{category.description}</p>
                </div>

                {viewMode === "cards" ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {category.plans.map((plan, index) => (
                      <motion.div
                        key={plan.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        transition={{ delay: index * 0.1 }}
                        className={`bg-white rounded-xl shadow-sm p-6 border ${plan.popular ? "border-primary" : "border-gray-100"
                          } relative h-full flex flex-col`}
                      >
                        {plan.popular && (
                          <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                            POPULAR
                          </div>
                        )}
                        <div className="text-center mb-6">
                          <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                          <p className="text-gray-600 text-sm mb-3">{plan.description}</p>
                          <div className="flex items-center justify-center">
                            <span className="text-3xl font-bold">{plan.price}</span>
                          </div>
                        </div>

                        <ul className="space-y-2 mb-6 flex-grow">
                          {plan.features.map(
                            (feature, i) =>
                              plan.included[i] && (
                                <li key={i} className="flex items-start">
                                  <Check className="h-4 w-4 text-primary shrink-0 mt-1 mr-2" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ),
                          )}
                        </ul>

                        <div className="mt-auto">
                          <p className="text-xs text-gray-500 mb-4">
                            <strong>Note:</strong> {plan.note}
                          </p>

                          <Button className={`w-full ${plan.popular ? "btn-primary" : "btn-outline"}`} asChild>
                            <Link href="/contact">Get Started</Link>
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="text-left p-4 bg-gray-50"></th>
                          {category.plans.map((plan) => (
                            <th key={plan.id} className="p-4 text-center bg-gray-50 relative">
                              <div className={`${plan.popular ? "text-primary font-bold" : ""}`}>
                                {plan.name}
                                {plan.popular && (
                                  <span className="absolute top-0 right-0 bg-primary text-white text-xs px-2 py-0.5 rounded-bl-lg">
                                    POPULAR
                                  </span>
                                )}
                              </div>
                              <div className="text-2xl font-bold my-2">{plan.price}</div>
                              <div className="text-sm text-gray-600 mb-2">{plan.description}</div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {category.plans[0].features.map((feature, i) => (
                          <tr key={i} className="border-t border-gray-200">
                            <td className="p-4 text-sm font-medium">{feature}</td>
                            {category.plans.map((plan) => (
                              <td key={`${plan.id}-${i}`} className="p-4 text-center">
                                {plan.included[i] ? (
                                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                                ) : (
                                  <X className="h-5 w-5 text-red-500 mx-auto" />
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                        <tr className="border-t border-gray-200">
                          <td className="p-4 text-sm font-medium">Note</td>
                          {category.plans.map((plan) => (
                            <td key={`${plan.id}-note`} className="p-4 text-center text-xs text-gray-500">
                              {plan.note}
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className="p-4"></td>
                          {category.plans.map((plan) => (
                            <td key={`${plan.id}-button`} className="p-4 text-center">
                              <Button className={`${plan.popular ? "btn-primary" : "btn-outline"} w-full`} asChild>
                                <Link href="/contact">Get Started</Link>
                              </Button>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Custom Project Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
              <p className="text-gray-600">
                Have a project that doesn't fit neatly into these packages? I offer custom solutions tailored to your
                specific requirements and budget.
              </p>
            </div>
            <div className="flex justify-center">
              <Button className="btn-primary" asChild>
                <Link href="/contact">
                  Request Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Find answers to common questions about our services and process.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact me today to discuss your project requirements and find the perfect solution for your needs.
            </p>
            <Button className="btn-primary" asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
