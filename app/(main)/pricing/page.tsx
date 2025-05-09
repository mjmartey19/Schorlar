"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, X } from "lucide-react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
const pricingData = {
  fullstack: {
    title: "Full-Stack Digital Solutions",
    description: "Comprehensive digital experiences spanning mobile, web, and responsive design.",
    plans: [
      {
        id: "fullstack-basic",
        name: "Basic",
        price: "₵1,200",
        description: "Essential web presence for small businesses",
        features: [
          "Responsive website (up to 5 pages)",
          "Mobile-friendly design",
          "Contact form integration",
          "Social media integration",
          "Basic SEO setup",
          "1 month support",
          "Content Management System",
          "E-commerce functionality",
          "Performance optimization",
          "API development & integrations",
          "User authentication system",
          "Extended support period",
        ],
        included: [true, true, true, true, true, true, false, false, false, false, false, false],
        note: "Hosting and domain not included",
      },
      {
        id: "fullstack-standard",
        name: "Standard",
        price: "₵2,500",
        description: "Comprehensive solution for growing businesses",
        features: [
          "Responsive website (up to 10 pages)",
          "Mobile-friendly design",
          "Contact form integration",
          "Social media integration",
          "Advanced SEO optimization",
          "3 months support",
          "Content Management System",
          "E-commerce functionality (up to 20 products)",
          "Performance optimization",
          "API development & integrations",
          "User authentication system",
          "Extended support period",
        ],
        included: [true, true, true, true, true, true, true, true, true, false, false, false],
        note: "Hosting and domain not included",
        popular: true,
      },
      {
        id: "fullstack-premium",
        name: "Premium",
        price: "₵4,000+",
        description: "Advanced solutions for established businesses",
        features: [
          "Custom web application",
          "Mobile-friendly design",
          "Contact form integration",
          "Social media integration",
          "Advanced SEO optimization",
          "6 months support",
          "Content Management System",
          "Full e-commerce functionality",
          "Performance optimization",
          "API development & integrations",
          "User authentication system",
          "Extended support period",
        ],
        included: [true, true, true, true, true, true, true, true, true, true, true, true],
        note: "Custom quote based on requirements",
      },
    ],
  },
  uiux: {
    title: "UI/UX Design",
    description: "Purposeful interfaces that marry aesthetic sophistication with behavioral psychology.",
    plans: [
      {
        id: "uiux-basic",
        name: "Basic",
        price: "₵800",
        description: "Essential design for new products",
        features: [
          "UI audit & recommendations",
          "Design for 5 key screens",
          "Basic style guide",
          "Responsive considerations",
          "Source files included",
          "1 revision round",
          "User research & personas",
          "Information architecture",
          "Wireframing & prototyping",
          "Interactive prototype",
          "Component library",
          "Animation specifications",
        ],
        included: [true, true, true, true, true, true, false, false, false, false, false, false],
        note: "Implementation available separately",
      },
      {
        id: "uiux-standard",
        name: "Standard",
        price: "₵1,500",
        description: "Comprehensive design with user experience focus",
        features: [
          "UI audit & recommendations",
          "Design for 10 screens",
          "Extended style guide",
          "Responsive considerations",
          "Source files included",
          "2 revision rounds",
          "User research & personas",
          "Information architecture",
          "Wireframing & prototyping",
          "Interactive prototype",
          "Component library",
          "Animation specifications",
        ],
        included: [true, true, true, true, true, true, true, true, true, true, false, false],
        note: "Implementation available separately",
        popular: true,
      },
      {
        id: "uiux-premium",
        name: "Premium",
        price: "₵2,800+",
        description: "Enterprise-grade design system",
        features: [
          "UI audit & recommendations",
          "Design for unlimited screens",
          "Comprehensive style guide",
          "Responsive considerations",
          "Source files included",
          "3 revision rounds",
          "Comprehensive user research",
          "Information architecture",
          "Wireframing & prototyping",
          "Interactive prototype",
          "Complete component library",
          "Animation specifications",
        ],
        included: [true, true, true, true, true, true, true, true, true, true, true, true],
        note: "Custom quote based on complexity",
      },
    ],
  },
  graphic: {
    title: "Graphic Design",
    description: "Distinctive brand ecosystems with unified design language across all touchpoints.",
    plans: [
      {
        id: "graphic-basic",
        name: "Basic",
        price: "₵600",
        description: "Essential branding for new businesses",
        features: [
          "Logo design (2 concepts)",
          "Basic color palette",
          "Typography selection",
          "Business card design",
          "Social media profiles",
          "1 revision round",
          "Extended color system",
          "Brand guidelines",
          "Marketing collateral",
          "Custom iconography",
          "Pattern development",
          "Photography style guide",
        ],
        included: [true, true, true, true, true, true, false, false, false, false, false, false],
        note: "Additional materials available separately",
      },
      {
        id: "graphic-standard",
        name: "Standard",
        price: "₵1,200",
        description: "Comprehensive branding for growing businesses",
        features: [
          "Logo with variations",
          "Extended color system",
          "Typography hierarchy",
          "Business stationery set",
          "Social media kit",
          "2 revision rounds",
          "Basic brand guidelines",
          "Marketing collateral (3 items)",
          "Email signature design",
          "Custom iconography",
          "Pattern development",
          "Photography style guide",
        ],
        included: [true, true, true, true, true, true, true, true, true, false, false, false],
        note: "Additional materials available separately",
        popular: true,
      },
      {
        id: "graphic-premium",
        name: "Premium",
        price: "₵2,000+",
        description: "Complete brand system for established businesses",
        features: [
          "Full logo system",
          "Comprehensive color system",
          "Complete typography hierarchy",
          "Business stationery set",
          "Social media kit",
          "3 revision rounds",
          "Comprehensive brand guidelines",
          "Marketing collateral (5+ items)",
          "Email signature design",
          "Custom iconography",
          "Pattern & texture development",
          "Photography style guide",
        ],
        included: [true, true, true, true, true, true, true, true, true, true, true, true],
        note: "Custom quote based on requirements",
      },
    ],
  },
}

// FAQ data
const faqs = [
  {
    question: "What's the difference between your Basic, Standard, and Premium packages?",
    answer:
      "The key differences lie in scope, complexity, and deliverables. Basic packages provide essential solutions for small businesses or startups with straightforward needs. Standard packages offer more comprehensive solutions with additional features and functionality for growing businesses. Premium packages provide enterprise-level solutions with advanced features, extensive customization, and longer support periods. I recommend reviewing the comparison table to see exactly which features are included in each tier for your specific needs.",
  },
  {
    question: "Can I upgrade my package later if my needs change?",
    answer:
      "Absolutely. Many clients start with a Basic or Standard package and upgrade as their business grows. I design all solutions with scalability in mind, making future upgrades seamless. If you start with a Basic website, for example, we can later enhance it with e-commerce functionality or more advanced features. I'll provide a clear upgrade path that builds upon your existing investment rather than requiring a complete rebuild.",
  },
  {
    question: "Do you offer customizations beyond what's listed in the packages?",
    answer:
      "Yes, all packages can be customized to meet your specific requirements. The packages represent common configurations, but I understand every project has unique needs. For Web Development, we can add specific integrations or features. For UI/UX Design, we can include additional screens or user flows. For Graphic Design, we can create additional brand assets. Custom requirements will be quoted separately and added to the base package price.",
  },
  {
    question: "What deliverables will I receive with each package?",
    answer:
      "For Web Development: You'll receive a fully functional website or application, all source code, documentation, and training on content management. For UI/UX Design: You'll receive design files, prototypes, style guides, and all assets in multiple formats. For Graphic Design: You'll receive logo files in various formats, brand guidelines, and all designed assets in both print and digital formats. All packages include the deliverables specified in the package description, with Premium packages offering the most comprehensive set of deliverables.",
  },
  {
    question: "What's your typical timeline for completing projects?",
    answer:
      "Timelines vary based on project complexity and package tier. Basic packages typically take 2-4 weeks, Standard packages 4-8 weeks, and Premium packages 8-12 weeks or more. Web Development projects generally take longer than UI/UX or Graphic Design projects of similar scope. During our initial consultation, I'll provide a detailed timeline specific to your project after understanding all requirements. I pride myself on meeting agreed deadlines while maintaining quality standards.",
  },
  {
    question: "How do payments work for your packages?",
    answer:
      "I typically require a 50% deposit to begin work, with the remaining 50% due upon project completion. For larger Premium projects, I offer milestone-based payment schedules (e.g., 30% upfront, 30% at midpoint, 40% upon completion). All payment terms are clearly outlined in the project proposal and contract. I accept bank transfers, mobile money, and major credit cards for your convenience.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, all packages include a support period (1 month for Basic, 3 months for Standard, 6 months for Premium). During this period, I'll address any issues, make minor adjustments, and answer questions at no additional cost. After this period, I offer monthly maintenance packages or hourly support rates for ongoing needs. For websites, I also offer hosting management and regular updates to ensure security and performance.",
  },
  {
    question: "How do we get started with a project?",
    answer:
      "The process begins with a consultation to discuss your needs and determine the most appropriate package. I'll then provide a detailed proposal outlining scope, deliverables, timeline, and cost. Once approved, I'll send a contract and invoice for the initial payment. After receiving the deposit, I'll begin with a discovery phase to gather detailed requirements before moving into design and development. Throughout the project, you'll receive regular updates and opportunities for feedback.",
  },
]

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
