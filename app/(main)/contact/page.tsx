"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Instagram, Linkedin, Github } from "lucide-react"
import ContactForm from "@/components/contact-form"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Contact() {
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
              Get In <span className="gradient-text">Touch</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Have a project in mind? Let&apos;s discuss how I can help bring your vision to life.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Send Me a Message</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Info</h2>

              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mt-1 mr-4" />
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+233551201245" className="hover:text-primary transition-colors">
                          +233 551 201 245
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mt-1 mr-4" />
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:scholarstudios@gmail.com" className="hover:text-primary transition-colors">
                          scholarstudios@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mt-1 mr-4" />
                    <div>
                      <h3 className="font-bold mb-1">Location</h3>
                      <p className="text-gray-600">Accra, Ghana</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8">Follow Me</h2>
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <div className="flex flex-col space-y-6">
                  <a
                    href="https://www.instagram.com/scholar_studios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group"
                  >
                    <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-primary transition-colors mr-4">
                      <Instagram className="h-6 w-6 group-hover:text-white" />
                    </div>
                    <span className="font-medium group-hover:text-primary transition-colors">Instagram</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/jamel-martey-944981228/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group"
                  >
                    <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-primary transition-colors mr-4">
                      <Linkedin className="h-6 w-6 group-hover:text-white" />
                    </div>
                    <span className="font-medium group-hover:text-primary transition-colors">LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/mjmartey19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group"
                  >
                    <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-primary transition-colors mr-4">
                      <Github className="h-6 w-6 group-hover:text-white" />
                    </div>
                    <span className="font-medium group-hover:text-primary transition-colors">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Me Here</h2>
            <p className="text-gray-600">Visit my office in Accra, Ghana</p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254936.0588945949!2d-0.2661015!3d5.5912055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Scholar Studio Location"
            ></iframe>
          </div>
        </div>
      </section> */}
    </div>
  )
}
