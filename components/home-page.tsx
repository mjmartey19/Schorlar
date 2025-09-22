"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import WorkCard from "@/components/work-card"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
}

interface FeaturedProject {
    _id: string
    title: string
    image: string
    completionTime: string
    slug: { current: string }
    client: string
}

interface ServiceDoc { _id: string }
interface TestimonialDoc { _id: string }

interface AboutDoc {
    name?: string
    shortBio?: string
    heroImage?: string
    aboutImage?: string
    role?: string
    company?: string
    bio?: string[]
    projectsCompleted?: string
    yearsExperience?: string
}

interface HomePageProps {
    featuredProjects: FeaturedProject[]
    services: ServiceDoc[]
    testimonials: TestimonialDoc[]
    about: AboutDoc
}

export default function HomePage({ featuredProjects, services, testimonials, about }: HomePageProps) {
    // console.log(featuredProjects)
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
                                {about?.name || "Scholar"}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg"
                            >
                                {about?.shortBio || " Experienced web designer and developer specializing in Mobile & Web Application, Graphic Design, UI/UX and Creative Digital Solutions."}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                            >
                                <Button className="bg-black text-white hover:bg-gray-800 font-sora group" asChild>
                            <Link href="/contact" className="flex items-center">
                                        Let&apos;s Talk
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
                                <div className="aspect-[5/5] relative overflow-hidden rounded-md">
                                   
                                    <Image
                                        src={
                                            about?.heroImage ||
                                            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RETOUCH_IMG_3731.jpg-jqqzOXUVXHnAI49axTLuCCR7O5gAvc.jpeg"
                                        }
                                        alt={`${about?.name || "Scholar"} - Designer`}
                                        fill
                                        className="object-cover rounded-md bg-center"
                                        priority
                                    />
                                </div>
                              
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
                                    src={
                                        about?.aboutImage ||
                                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RETOUCHED_IMG_3729.jpg-wvxMtggnPKHNKW1uV1UKXZOXK47moK.jpeg"
                                    }
                                    alt={about?.name || "Martey Jamel"}
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
                            <h2 className="about-heading font-sora font-extrabold mb-6 text-black">{about?.name || "Scholar"}</h2>
                            <p className="text-lg font-medium mb-2">
                                {about?.role || "Director of Design"}{" "}
                                <span className="text-primary">@{about?.company || "ScholarStudio"}</span>
                            </p>

                            {about?.bio?.map((paragraph: string, index: number) => (
                                <p key={index} className="text-gray-600 mb-6">
                                    {paragraph}
                                </p>
                            )) || (
                                    <>
                                        <p className="text-gray-600 mb-6">
                                            I appreciate your time in exploring my portfolio and design endeavors. As a proficient graphic
                                            designer based in Accra, Ghana, I bring a wealth of experience in website, UI, and web development
                                            to the table.
                                        </p>
                                        <p className="text-gray-600 mb-6">
                                            I am passionate about making sure that systems, interfaces, language and graphics are
                                            human-friendly, emotive, aesthetically pleasing, clear, on-brand and usable — with a touch of mellow
                                            smoothness.
                                        </p>
                                    </>
                                )}


                            <div className="grid grid-cols-2 gap-8 mt-12">
                                <div>
                                    <p className="stat-number font-sora">{about?.projectsCompleted || "70"}+</p>
                                    <p className="text-gray-600 uppercase tracking-wider text-sm">SUCCESSFULLY COMPLETED PROJECTS</p>
                                </div>
                                <div>
                                    <p className="stat-number font-sora">{about?.yearsExperience || "3"}+</p>
                                    <p className="text-gray-600 uppercase tracking-wider text-sm">YEARS OF EXPERIENCE</p>
                                </div>
                            </div>

                            <div className="mt-12">
                                <Button className="bg-black text-white hover:bg-gray-800 font-sora group" asChild>
                                    <Link href="/contact" className="flex items-center">
                                        Let&apos;s Talk
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
                        {services.map((service: ServiceDoc, index: number) => (
                            <ServiceCard key={service._id} service={service} delay={index * 0.2} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Preview Section */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Latest Work</h2>
                        <p className="section-subtitle">
                            Check out some of my recent projects that showcase my skills and creativity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project: FeaturedProject) => (
                            <WorkCard
                                key={project._id}
                                title={project.title}
                                image={project.image}
                                completionTime={project.completionTime}
                                // feeCharged={project.feeCharged}
                                slug={project.slug.current}
                                client={project.client}
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
                        <p className="section-subtitle">Here&apos;s what my clients have to say about working with me.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial: TestimonialDoc, index: number) => (
                            <TestimonialCard key={testimonial._id} testimonial={testimonial} delay={index * 0.2} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Get In Touch</h2>
                        <p className="section-subtitle">
                            Have a project in mind? Let&apos;s discuss how I can help bring your vision to life.
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
