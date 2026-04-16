"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const scrollToContact = () => {
  const contactSection = document.getElementById("contact")
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" })
  }
}

const teamMembers = [
  {
    name: "Roy Delgado",
    title: "Owner & General Contractor",
    image: "/images/team-owner.webp",
    alt: "Roy Delgado - Owner & General Contractor",
  },
  {
    name: "Roy Delgado",
    title: "Operations & Procurement Manager",
    image: "/images/team-roy-operations.webp",
    alt: "Roy Delgado - Operations & Procurement Manager",
  },
  {
    name: "Christian Delgado",
    title: "Field Technician & Interior Remodel Specialist",
    image: "/images/team-christian-technician.webp",
    alt: "Christian Delgado - Field Technician & Interior Remodel Specialist",
  },
  {
    name: "Kyle Morales",
    title: "Lead Fabrication & Installation Specialist",
    image: "/images/team-kyle-fabrication.webp",
    alt: "Kyle Morales - Lead Fabrication & Installation Specialist",
  },
]

export default function AboutSection() {
  return (
    <section className="py-20 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="text-sm tracking-[0.2em] text-zinc-400 uppercase">About Arose</div>

              <h2 className="text-4xl md:text-5xl font-light text-zinc-900 leading-[1.1]">
                Built on
                <br />
                <span className="text-zinc-400">Excellence</span>
              </h2>

              <div className="space-y-4 text-lg text-zinc-600 font-light leading-relaxed">
                <p>
                  For over 25 years, we've been transforming spaces across Florida with an unwavering commitment to
                  quality and craftsmanship.
                </p>
                <p>
                  Our approach combines traditional building expertise with contemporary design sensibilities, ensuring
                  every project exceeds expectations.
                </p>
                <p>Licensed, insured, and dedicated to your vision.</p>
              </div>
            </div>

            <Button
              onClick={scrollToContact}
              className="bg-red-600 text-white hover:bg-red-700 px-6 py-4 text-base font-medium tracking-wide transition-all duration-300 rounded-none"
              size="lg"
            >
              GET FREE ESTIMATE
              <ArrowRight className="ml-3 h-4 w-4" />
            </Button>
          </div>

          {/* Right Content - Team Photos */}
          <div className="relative">
            {/* Team Section Header */}
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-light text-zinc-900 mb-2">Meet Our Team</h3>
              <p className="text-zinc-600 font-light">The skilled professionals behind every project</p>
            </div>

            {/* Team Photos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="relative group">
                  <div className="relative aspect-[4/5] bg-zinc-200 overflow-hidden rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      quality={50}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Team Member Info */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-semibold text-zinc-900 text-sm md:text-base leading-tight">{member.name}</p>
                    <p className="text-xs md:text-sm text-zinc-600 leading-tight mt-1">{member.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6 p-6 bg-white rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-red-600 mb-1">4</div>
                <div className="text-sm text-zinc-600 uppercase tracking-wide">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-red-600 mb-1">25+</div>
                <div className="text-sm text-zinc-600 uppercase tracking-wide">Years Combined</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
