"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import FAQAccordion from "@/components/faq-accordion"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

// Pricing data
const pricingPlans = [
  {
    id: "starter",
    name: "Starter Website Package",
    price: "₵400",
    description: "Ideal for new startups & small businesses on a tight budget",
    features: [
      "Up to 5 Pages Custom Handcrafted Design",
      "100% Mobile & Tablet Friendly Responsive Website",
      "Basic Search Engine Optimisation (SEO)",
      "Google Search Console Submission",
      "Enquiry forms with Google reCAPTCHA Security",
    ],
    note: "Hosting and Domain not included in the cost",
  },
  {
    id: "professional",
    name: "Professional Website Package",
    price: "₵700",
    description: "Ideal for growing small and medium businesses",
    features: [
      "Up to 8 Pages Custom Handcrafted Design",
      "100% Mobile & Tablet Friendly Responsive Website",
      "Keyword research / On-page SEO optimisation",
      "Sliding Effects with Call to Action button",
      "User friendly advanced contact forms",
      "FAQ section",
      "Test and debug beta version before launch",
    ],
    note: "Hosting and Domain not included in the cost",
    popular: true,
  },
  {
    id: "premium",
    name: "Premium Website Package",
    price: "₵1,500",
    description: "Ideal for established business looking to expand to next level",
    features: [
      "Up to 15 Pages Custom High-Quality Advanced Design",
      "All the Features from Professional Web Package",
      "100% Mobile & Tablet Friendly Responsive Website",
      "Advanced Search Engine Optimisation (SEO)",
      "Google Search Console Submission",
      "Custom coded relevant Plugins and Modules",
    ],
    note: "Hosting and Domain not included in the cost",
  },
  {
    id: "graphic",
    name: "Graphic Design Package",
    price: "₵50",
    description: "Ideal for businesses to showcase and brand their businesses",
    features: [
      "High-quality professional designs",
      "Quick turnaround time",
      "Unlimited revisions until satisfaction",
      "Designs delivered in JPEG and PDF formats",
      "Collection of design template (50% extra fee)",
    ],
    note: "Other format types will attract additional fees",
  },
]

// FAQ data
const faqs = [
  {
    question: "What is custom website design?",
    answer:
      "Custom website design means creating a website that is unique to your organisation. Your website is the face of your organisation and encapsulates your brand identity. Having a custom-built website will make you stand out from the crowd and allow you to portray your brand image the way you want to; it allows you to have consistency of your brand through your digital platforms. Every aspect of the website will be designed and built to your specifications, allowing you to manage the user experience from start to finish. Your custom website will also fully integrate with your existing systems, allowing seamless operation.",
  },
  {
    question: "Do you have any suggested page layouts for small business website?",
    answer:
      "Yes, we do. We've found that the following format is the most effective for small business websites: Home Page (summary of services), About Us (background and uniqueness), Our Services (detailed service descriptions), Portfolio/Gallery (optional), Testimonials (optional), FAQs or Price List (optional), and Contact (map, contact info, and form).",
  },
  {
    question: "Who will write the content for my new website?",
    answer:
      "Only you know your industry and business inside out. So, whether you write your own content or you get us to do it for you, you will need to be heavily involved in this part of the process. You will need to provide vital information about the industry, your business, your customers, as well as any technical jargon that is industry specific. Whichever option you take, we will organise the content and structure it in a way that we see best fits the layout and design of the website.",
  },
  {
    question: "What is required from you (the client) to get the work done?",
    answer:
      "Knowing what you want at the start is key here. Having as much detail as possible about your requirements will assist us to provide you with a website design that meets all of your needs. Your availability (or lack of it) can have a large impact on the design process; we will need to be in regular contact with you. We also need content, images, logo, and other items from you at the start.",
  },
  {
    question: "Will your designed website be optimised for search engine rankings?",
    answer:
      "Yes. All of our designed websites are based on a Google SEO foundation. We strongly follow Google SEO guidelines to ensure that your website will be highly ranked by Google, and will therefore increase the traffic to your site.",
  },
]

export default function Pricing() {
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
              Pricing <span className="gradient-text">Plans</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Best practice digital design at fair prices tailored to your needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-sm p-8 border ${plan.popular ? "border-primary" : "border-gray-100"} relative`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    RECOMMENDED
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-gray-500 mb-6">
                  <strong>Note:</strong> {plan.note}
                </p>

                <Button className={`w-full ${plan.popular ? "btn-primary" : "btn-outline"}`} asChild>
                  <Link href="/contact">Request Information</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Find answers to common questions about our services and process.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
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
