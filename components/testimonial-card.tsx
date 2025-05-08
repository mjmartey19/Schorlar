"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
}

interface TestimonialCardProps {
    testimonial: {
        _id: string
        name: string
        role: string
        quote: string
        rating: number
    }
    delay?: number
}

export default function TestimonialCard({ testimonial, delay = 0 }: TestimonialCardProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ delay }}
            className="bg-white rounded-xl shadow-sm p-8 border border-gray-100"
        >
            <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                        key={index}
                        className={`h-5 w-5 ${index < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                ))}
            </div>
            <p className="text-gray-600 mb-6">{testimonial.quote}</p>
            <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
        </motion.div>
    )
}
