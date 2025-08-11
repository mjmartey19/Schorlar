"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { extractYear, formatFee } from "@/lib/utils"

interface WorkCardProps {
  title: string
  image: string
  completionTime: string
  feeCharged?: string
  slug: string
  client?: string
}

export default function WorkCard({
  title,
  image,
  completionTime,
  feeCharged,
  slug,
  client,
}: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link href={`/case-study/${slug}`} className="block">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
          <div className="relative h-[300px] overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                width={600}
                height={800}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-0">
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-br-full rounded-tr-full">
                Case Study
              </span>
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-xl font-bold mb-4">{title}</h3>

            <div className="grid grid-cols-2 border-t border-gray-200 pt-4">
              <div className="border-r border-gray-200 pr-4">
                <p className="text-xs text-gray-500 uppercase mb-1">COMPLETION TIME:</p>
                <p className="font-bold">{completionTime}</p>
              </div>

              {/* <div className="border-r border-gray-200 px-4">
                <p className="text-xs text-gray-500 uppercase mb-1">FEE CHARGED</p>
                <p className="font-bold">{formatFee(feeCharged)}</p>
              </div> */}

              <div className="pl-4">
                <p className="text-xs text-gray-500 uppercase mb-1">CLIENT</p>
                <p className="font-bold text-black">{client}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}