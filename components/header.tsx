"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

const scrollToContact = () => {
  const contactSection = document.getElementById("contact")
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" })
  }
}

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/arose-logo.png"
              alt="Arose Contractors Logo"
              width={120}
              height={40}
              className="h-7 md:h-9 w-auto"
              priority
              quality={90}
            />
          </div>

          {/* CTA Button */}
          <a href="tel:+19548829589">
            <Button
              className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md shadow-sm hover:shadow-md"
              size="sm"
            >
              Free Estimate · (954) 882-9589
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
