"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import type { JSX } from "react"

// Helper function to render description with consistent strong tag styling
const ServiceDescription = ({ description }: { description: () => JSX.Element }) => {
  return description()
}

const services = [
  {
    title: "Home Additions",
    description: () => (
      <div className="space-y-4">
        <p>
          Looking to <strong className="text-gray-800 font-bold">expand your living space</strong>? We help you add
          rooms and <strong className="text-gray-800 font-bold">accommodate changing needs</strong> through various
          types of additions.
        </p>
        <p>
          Whether it&apos;s <strong className="text-gray-800 font-bold">converting a garage</strong> into living space,
          adding <strong className="text-gray-800 font-bold">a carport enclosure</strong>, or creating{" "}
          <strong className="text-gray-800 font-bold">an extension to your living area</strong> - we handle all types of
          home expansions.
        </p>
      </div>
    ),
    image: "/images/additions-1.webp",
    galleryImages: [
      "/images/additions-1.webp",
      "/images/additions-2.webp",
      "/images/additions-3.webp",
      "/images/additions-4.webp",
    ],
  },
  {
    title: "Full Home Remodels",
    description: () => (
      <div className="space-y-4">
        <p>
          Experience <strong className="text-gray-800 font-bold">total transformations from vision to reality</strong>.
          We manage every aspect of your complete home renovation project.
        </p>
        <p>
          From <strong className="text-gray-800 font-bold">initial design concepts</strong> to{" "}
          <strong className="text-gray-800 font-bold">final finishing touches</strong>, we ensure your entire home
          reflects your style and meets your needs.
        </p>
      </div>
    ),
    image: "/images/fullhome-4.webp",
    galleryImages: [
      "/images/fullhome-1.webp",
      "/images/fullhome-2.webp",
      "/images/fullhome-3.webp",
      "/images/fullhome-4.webp",
      "/images/fullhome-5.webp",
      "/images/fullhome-6.webp",
      "/images/fullhome-7.webp",
    ],
  },
  {
    title: "New Construction",
    description: () => (
      <div className="space-y-4">
        <p>
          We bring your <strong className="text-gray-800 font-bold">dream home to life from the ground up</strong>.
          From <strong className="text-gray-800 font-bold">structural framing</strong> to{" "}
          <strong className="text-gray-800 font-bold">final finishes</strong>, we manage every phase of new construction
          with precision and craftsmanship.
        </p>
        <p>
          Our team ensures every detail meets the highest standards — delivering a{" "}
          <strong className="text-gray-800 font-bold">brand-new space built exactly to your vision</strong>,
          on time and on budget.
        </p>
      </div>
    ),
    image: "/images/newconstruction-1.webp",
    galleryImages: [
      "/images/newconstruction-1.webp",
      "/images/newconstruction-2.webp",
      "/images/newconstruction-3.webp",
      "/images/newconstruction-4.webp",
      "/images/newconstruction-5.webp",
      "/images/newconstruction-6.webp",
    ],
  },
  {
    title: "Kitchen Design",
    description: () => (
      <div className="space-y-4">
        <p>
          Residential Kitchens are a <strong className="text-gray-800 font-bold">focal point</strong> with the{" "}
          <strong className="text-gray-800 font-bold">highest return on investment</strong>. A{" "}
          <strong className="text-gray-800 font-bold">high-quality kitchen</strong> significantly boosts your property&apos;s{" "}
          <strong className="text-gray-800 font-bold">resale value</strong>.
        </p>
        <p>
          Whether a full renovation or minor updates, smart budgeting and the right decisions lead to{" "}
          <strong className="text-gray-800 font-bold">great results and valuable upgrades</strong>.
        </p>
      </div>
    ),
    image: "/images/kitchen-1.png",
    galleryImages: ["/images/kitchen-1.png", "/images/kitchen-2.png", "/images/kitchen-3.png", "/images/kitchen-4.png"],
  },
  {
    title: "Bathroom Renovation",
    description: () => (
      <div className="space-y-4">
        <p>
          We help you <strong className="text-gray-800 font-bold">transform your bathroom</strong> into a more{" "}
          <strong className="text-gray-800 font-bold">functional and aesthetically pleasing space</strong>. We guide you
          through every step, from <strong className="text-gray-800 font-bold">layout planning</strong> (considering
          plumbing and electrical) to <strong className="text-gray-800 font-bold">design choices</strong> (modern,
          traditional, etc.).
        </p>
        <p>For significant remodels, we start with careful demolition before bringing your vision to life.</p>
      </div>
    ),
    image: "/images/bathroom-6.png",
    galleryImages: [
      "/images/bathroom-1.png",
      "/images/bathroom-2.png",
      "/images/bathroom-3.png",
      "/images/bathroom-4.png",
    ],
  },
  {
    title: "Custom Closets",
    description: () => (
      <div className="space-y-4">
        <p>
          We specialize in <strong className="text-gray-800 font-bold">designing customized closets</strong> and storage
          solutions for <strong className="text-gray-800 font-bold">residential or commercial spaces</strong>.
        </p>
        <p>
          Our expertise in <strong className="text-gray-800 font-bold">space planning and organization</strong>{" "}
          maximizes storage capacity, creating{" "}
          <strong className="text-gray-800 font-bold">functional and beautiful closet systems</strong>.
        </p>
      </div>
    ),
    image: "/images/custom-closet-1.png",
    galleryImages: [
      "/images/custom-closet-1.png",
      "/placeholder.svg?height=300&width=300&text=Closet+2",
      "/placeholder.svg?height=300&width=300&text=Closet+3",
      "/placeholder.svg?height=300&width=300&text=Closet+4",
    ],
  },
]

const scrollToContact = () => {
  const contactSection = document.getElementById("contact")
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" })
  }
}

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-white" id="services">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-sm tracking-[0.2em] text-slate-500 uppercase mb-4">Our Services</div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-[1.1] mb-6">
            Crafting Spaces
            <br />
            <span className="text-slate-500">That Inspire</span>
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
            Every project is an opportunity to create something extraordinary. We approach each space with meticulous
            attention to detail and unwavering commitment to excellence.
          </p>

          {/* CTA Button */}
          <Button
            onClick={scrollToContact}
            className="bg-red-600 text-white hover:bg-red-700 px-6 py-4 text-base font-medium tracking-wide transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
            size="lg"
          >
            GET FREE ESTIMATE
            <ArrowRight className="ml-3 h-4 w-4" />
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Dialog key={index}>
              <div className="group p-6 rounded-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 hover:shadow-xl hover:scale-105 hover:from-blue-100 hover:to-blue-150">
                <div className="aspect-[4/3] mb-4 overflow-hidden relative rounded-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    quality={50}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Hover overlay — desktop only */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center">
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="bg-white/90 text-slate-900 hover:bg-white border-0 px-4 py-2 shadow-lg"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        See More
                      </Button>
                    </DialogTrigger>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-slate-900 group-hover:text-blue-800 transition-colors font-bold text-xl">
                    {service.title}
                  </h3>
                  <div className="text-slate-700 leading-relaxed text-sm">
                    <ServiceDescription description={service.description} />
                  </div>

                  {/* Always visible on mobile */}
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="md:hidden mt-2 border-blue-300 text-blue-700 hover:bg-blue-50"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      See Gallery
                    </Button>
                  </DialogTrigger>
                </div>
              </div>

              <DialogContent className="max-w-2xl w-[95vw] p-4 md:p-6">
                <DialogHeader>
                  <DialogTitle className="text-xl font-light">{service.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4 px-8">
                  <Carousel opts={{ loop: true }}>
                    <CarouselContent>
                      {service.galleryImages.map((img, i) => (
                        <CarouselItem key={i}>
                          <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-slate-100">
                            <Image
                              src={img || "/placeholder.svg"}
                              alt={`${service.title} ${i + 1}`}
                              fill
                              className="object-cover"
                              loading="lazy"
                              quality={75}
                              sizes="(max-width: 640px) 90vw, 600px"
                            />
                          </div>
                          <p className="text-center text-sm text-slate-400 mt-2">{i + 1} / {service.galleryImages.length}</p>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-8" />
                    <CarouselNext className="-right-8" />
                  </Carousel>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button
            onClick={scrollToContact}
            className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-4 text-base font-medium tracking-wide transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
            size="lg"
          >
            START YOUR PROJECT
            <ArrowRight className="ml-3 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
