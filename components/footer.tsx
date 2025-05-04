import Link from "next/link"
import { Instagram, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">
             
                Scholar
              
            </h3>
            <p className="text-gray-400 mb-6">
              Crafting digital experiences that inspire and engage.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/scholar_studios"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/jamel-martey-944981228/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/mjmartey19"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 hover:text-white transition-all transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Full-Stack Digital Solutions
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Branding
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-white p-2 rounded-lg mr-3">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+233551201245" className="hover:text-white transition-colors font-medium">
                    +233 551 201 245
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white p-2 rounded-lg mr-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:schorlar2468@gmail.com" className="hover:text-white transition-colors font-medium">
                    schorlar2468@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white p-2 rounded-lg mr-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <span className="font-medium">Accra, Ghana</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Scholar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}