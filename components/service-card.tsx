"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
}

interface ServiceCardProps {
    service: {
        _id: string
        title: string
        slug: {
            current: string
        }
        icon: string
        description: string
    }
    delay?: number
}

export default function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
    // Dynamically import the icon from lucide-react
    const IconComponent = dynamic(() => import("lucide-react").then((mod) => mod[service.icon] || mod.Code), {
        ssr: false,
    })

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ delay }}
            className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow"
        >
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <IconComponent className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <Link href={`/portfolio`} className="text-primary font-medium flex items-center group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
        </motion.div>
    )
}
