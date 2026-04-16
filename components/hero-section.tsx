"use client"

import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Wrench, MapPin, Briefcase } from "lucide-react"

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    details: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "error">("idle")
  const router = useRouter()

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzM0hW55PIr_oFyjrPGTMJL1hd9mXPze2HzRCYVs3Rq91ySg9qc7CdXsqxnOl1-i1_f/exec"

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("service", formData.service)
      formDataToSend.append("details", formData.details)

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formDataToSend,
      })

      router.push("/thanks")
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-slate-50 to-white relative overflow-hidden py-12 md:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1200&width=1200')] bg-cover bg-center"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Content - Hero Message */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            {/* Logo for mobile */}
            <div className="lg:hidden text-center mb-6">
              <Image
                src="/images/arose-logo.png"
                alt="Arose Contractors Logo"
                width={140}
                height={46}
                className="h-8 w-auto mx-auto mb-2"
                priority
                quality={90}
              />
              <p className="text-xs tracking-[0.3em] text-slate-600 font-semibold">PREMIUM REMODELING SERVICES</p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center px-3 md:px-4 py-2 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-full shadow-sm">
                <span className="text-xs md:text-sm font-semibold text-amber-800">
                  25+ Years of Excellence • Licensed & Insured
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-slate-900 leading-tight">
                Renovate your space
                <span className="block mt-2 text-blue-600">with style, precision</span>
                <span className="block text-red-600">and confidence</span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed">
                25 years of delivering exceptional results. On time, on budget, with zero excuses. Your dream space
                awaits.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 md:space-y-4">
              {[
                {
                  icon: Wrench,
                  text: "We care like it's our own home.",
                },
                {
                  icon: MapPin,
                  text: "From kitchens to roofs, closets and additions.",
                },
                {
                  icon: Briefcase,
                  text: "Over 25 years creating spaces.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 md:space-x-4 group">
                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  </div>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed pt-1 md:pt-2">{feature.text}</p>
                </div>
              ))}
            </div>

            {/* Stats - Only visible on desktop */}
            <div className="hidden lg:grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 mb-1">25+</div>
                <p className="text-sm text-slate-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 mb-1">500+</div>
                <p className="text-sm text-slate-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 mb-1">100%</div>
                <p className="text-sm text-slate-600">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-24">
            <div className="bg-white p-6 md:p-8 shadow-2xl rounded-xl border border-slate-200">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-light mb-2 text-blue-600">Get Free Estimate</h2>
                <p className="text-sm md:text-base text-slate-600">
                  Fill out the form and we'll contact you within 24 hours
                </p>
              </div>

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium text-sm">
                    ❌ There was an error. Please try again or call us directly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full border-slate-300 focus:border-blue-600 focus:ring-blue-600"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone *
                    </label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full border-slate-300 focus:border-blue-600 focus:ring-blue-600"
                      placeholder="(954) 123-4567"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full border-slate-300 focus:border-blue-600 focus:ring-blue-600"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                    Service *
                  </label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger
                      id="service"
                      className="w-full border-slate-300 focus:border-blue-600 focus:ring-blue-600"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kitchen">Kitchen Design</SelectItem>
                      <SelectItem value="bathroom">Bathroom Renovation</SelectItem>
                      <SelectItem value="addition">Home Addition</SelectItem>
                      <SelectItem value="closet">Custom Closets</SelectItem>
                      <SelectItem value="roofing">Roofing Solutions</SelectItem>
                      <SelectItem value="complete">Complete Remodeling</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-semibold text-slate-700 mb-2">
                    Project Details
                  </label>
                  <Textarea
                    id="details"
                    value={formData.details}
                    onChange={(e) => handleInputChange("details", e.target.value)}
                    className="w-full border-slate-300 focus:border-blue-600 focus:ring-blue-600 min-h-[100px] resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white hover:bg-red-700 disabled:bg-red-400 px-8 py-6 text-base font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
                  size="lg"
                >
                  {isSubmitting ? "SENDING..." : "GET FREE ESTIMATE"}
                </Button>

                <p className="text-xs text-center text-slate-500">
                  We respect your privacy. Your information is secure.
                </p>
              </form>
            </div>

            {/* Contact Info Below Form */}
            <div className="mt-6 text-center text-sm text-slate-600">
              <p className="mb-2">Or contact us directly:</p>
              <p className="font-semibold text-slate-900">(954) 882-9589</p>
              <p className="text-slate-600">Roy@arosecontractor.com</p>
            </div>
          </div>
        </div>

        {/* Stats for Mobile - Below hero */}
        <div className="grid grid-cols-3 gap-4 mt-12 lg:hidden">
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900 mb-1">25+</div>
            <p className="text-xs text-slate-600">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900 mb-1">500+</div>
            <p className="text-xs text-slate-600">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900 mb-1">100%</div>
            <p className="text-xs text-slate-600">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
