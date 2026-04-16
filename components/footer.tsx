import Image from "next/image"
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          

          {/* Copyright */}
          <div className="text-sm text-zinc-400">© 2025 Arose Contractors. All rights reserved.</div>
        </div>

        {/* Services and Contact */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Kitchen Remodeling
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Bathroom Renovation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Home Additions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Custom Closets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Roofing Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  General Contracting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3 text-slate-300 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div>10228 NW 50th St</div>
                  <div>Sunrise, FL 33351</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <div>(954) 882-9589</div>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <div>{"Roy@arosecontractor.com  "}</div>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <p className="text-slate-300 leading-relaxed mb-4 max-w-md text-sm">
                Transforming spaces with 25+ years of excellence in luxury remodeling. Your trusted partner for
                residential and commercial projects in Florida.
              </p>

              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
