"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Code, Paintbrush, Layout, ChevronRight, Star } from "lucide-react"
import { motion } from "framer-motion"
import WorkCard from "@/components/work-card"
import { latestWorkItems } from "./content/latestWorkItems"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}



export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-sm uppercase tracking-widest mb-4 font-sora"
              >
                HELLO THERE, I AM:
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="hero-heading font-sora font-extrabold mb-6"
              >
                Scholar
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg"
              >
                Experienced web designer and developer specializing in Mobile & Web Application, Graphic Design, UI/UX and
                Creative Digital Solutions.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <Button className="bg-black text-white hover:bg-gray-800 font-sora group" asChild>
                  <Link href="/contact" className="flex items-center">
                    Let's Talk
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <div className="relative group">
                <div className="aspect-[6/5] relative overflow-hidden rounded-md">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/60 z-10"></div>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RETOUCH_IMG_3731.jpg-jqqzOXUVXHnAI49axTLuCCR7O5gAvc.jpeg"
                    alt="Scholar Studio - Designer"
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    priority
                  />
                </div>
                <div className="absolute inset-0 rounded-md shadow-[inset_0_0_30px_rgba(0,0,0,0.3)] pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="relative"
            >
              <div className="aspect-[5/5] relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RETOUCHED_IMG_3729.jpg-wvxMtggnPKHNKW1uV1UKXZOXK47moK.jpeg"
                  alt="Martey Jamel"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <p className="text-sm uppercase tracking-widest mb-4 font-sora">ABOUT ME</p>
              <h2 className="about-heading font-sora font-extrabold mb-6 text-black">Scholar</h2>
              <p className="text-lg font-medium mb-2">
                CEO & Founder <span className="text-primary">@ScholarStudio</span>
              </p>

              <p className="text-gray-600 mb-6">
                I solve business problems through intentional design. With roots in Africa's vibrant creative scene and a global perspective,
                I bridge cultural aesthetics with universal usability principles to create digital experiences that resonate across borders.
              </p>
              <p className="text-gray-600 mb-6">
                My approach combines technical precision with artistic intuition - whether crafting pixel-perfect interfaces,
                developing responsive websites, or building cohesive brand systems. I believe great design should be equally
                functional and memorable, solving user needs while creating emotional connections.
              </p>
              

              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <p className="stat-number font-sora">120+</p>
                  <p className="text-gray-600 uppercase tracking-wider text-sm">SUCCESSFULLY COMPLETED PROJECTS</p>
                </div>
                <div>
                  <p className="stat-number font-sora">5+</p>
                  <p className="text-gray-600 uppercase tracking-wider text-sm">YEARS OF EXPERIENCE</p>
                </div>
              </div>

              <div className="mt-12">
                <Button className="bg-black text-white hover:bg-gray-800 font-sora group" asChild>
                  <Link href="/contact" className="flex items-center">
                    Let's Talk
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest mb-4 font-sora">WHAT I DO</p>
            <h2 className="section-title">My Services</h2>
            <p className="section-subtitle">
              I offer a comprehensive range of creative services to help your business stand out in the digital
              landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Full-Stack Digital Solutions</h3>
              <p className="text-gray-600 mb-6">
                I architect comprehensive digital experiences that span mobile, web, and responsive design.
                From initial concept to final deployment, I create unified ecosystems where native mobile
                applications, web apps, and marketing websites work in harmony—all built with
                performance-optimized code and brand-consistent interfaces.
              </p>
              <Link href="/portfolio" className="text-primary font-medium flex items-center group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Paintbrush className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Graphic Design</h3>
              <p className="text-gray-600 mb-6">
                I craft distinctive brand ecosystems where every visual component—from logomarks to motion graphics—operates
                within a unified design language. My process balances aesthetic boldness with semantic clarity, ensuring
                your brand communicates authority and intention across all touchpoints.
              </p>
              <Link href="/" className="text-primary font-medium flex items-center group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Layout className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
              <p className="text-gray-600 mb-6">
                I architect purposeful interfaces that marry aesthetic sophistication with behavioral psychology.
                Each interaction is meticulously crafted to guide users effortlessly toward their goals while
                reinforcing brand identity through thoughtful micro-interactions and systematic design language.
              </p>
              <Link href="/portfolio" className="text-primary font-medium flex items-center group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section - Updated with WorkCard component */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Latest Work</h2>
            <p className="section-subtitle">
              Check out some of my recent projects that showcase my skills and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestWorkItems.slice(0, 6).map((item) => (
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
            <Button variant="outline" className="group" asChild>
              <Link href="/portfolio">
                View All Projects
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Client Testimonials</h2>
            <p className="section-subtitle">Here's what my clients have to say about working with me.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="bg-white rounded-xl shadow-sm p-8 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <Star className="h-5 w-5 text-gray-300" />
              </div>
              <p className="text-gray-600 mb-6">
                "I'm 100% satisfied with the work that Jamel has done for me over the years. The latest version of my
                website has all the functionality that I needed, and it looks stellar. Thanks for doing such great
                work!"
              </p>
              <div>
                <p className="font-bold">Eugenia</p>
                <p className="text-gray-500 text-sm">Client</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm p-8 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <Star className="h-5 w-5 text-gray-300" />
              </div>
              <p className="text-gray-600 mb-6">
                "Jamel really helped me bring my dreams to reality. Starting up a business is never easy and he really
                knows what it takes to hit the ground running."
              </p>
              <div>
                <p className="font-bold">Ezekiel</p>
                <p className="text-gray-500 text-sm">Client</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-sm p-8 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <Star className="h-5 w-5 text-gray-300" />
              </div>
              <p className="text-gray-600 mb-6">
                "Jamel created something truly unique that captured the look and feel I was asking for. Great job!"
              </p>
              <div>
                <p className="font-bold">Shirley</p>
                <p className="text-gray-500 text-sm">Client</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Have a project in mind? Let's discuss how I can help bring your vision to life.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <form className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Tell me about your project"
                  required
                ></textarea>
              </div>

              <Button type="submit" className="w-full btn-primary">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}