"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    details: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const router = useRouter()

  // URL de tu Google Apps Script
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
      // Crear FormData en lugar de JSON
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("service", formData.service)
      formDataToSend.append("details", formData.details)

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formDataToSend,
      })

      // Redirigir a la página de agradecimiento
      router.push("/thanks")
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-zinc-100" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-sm tracking-[0.2em] text-zinc-400 uppercase mb-4">Contact</div>
            <h2 className="text-4xl md:text-5xl font-light text-zinc-900 leading-[1.1] mb-6">
              Start Your
              <br />
              <span className="text-zinc-400">Project</span>
            </h2>
            <p className="text-lg text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
              Ready to transform your space? Get in touch for a consultation and free estimate.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 shadow-xl rounded-lg border border-zinc-200">
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">
                  ❌ There was an error sending your message. Please try again or call us directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm tracking-wide text-zinc-500 uppercase mb-3 font-semibold"
                  >
                    Name *
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="border-b-2 border-zinc-200 rounded-none px-0 py-3 focus:border-blue-600 transition-colors text-zinc-800 placeholder:text-zinc-400"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm tracking-wide text-zinc-500 uppercase mb-3 font-semibold"
                  >
                    Phone *
                  </label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="border-b-2 border-zinc-200 rounded-none px-0 py-3 focus:border-blue-600 transition-colors text-zinc-800 placeholder:text-zinc-400"
                    placeholder="Your phone number"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm tracking-wide text-zinc-500 uppercase mb-3 font-semibold"
                >
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="border-b-2 border-zinc-200 rounded-none px-0 py-3 focus:border-blue-600 transition-colors text-zinc-800 placeholder:text-zinc-400"
                  placeholder="Your email address"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm tracking-wide text-zinc-500 uppercase mb-3 font-semibold"
                >
                  Service *
                </label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger
                    id="service"
                    className="border-b-2 border-zinc-200 rounded-none px-0 py-3 text-zinc-800 focus:border-blue-600"
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
                <label
                  htmlFor="details"
                  className="block text-sm tracking-wide text-zinc-500 uppercase mb-3 font-semibold"
                >
                  Project Details
                </label>
                <Textarea
                  id="details"
                  value={formData.details}
                  onChange={(e) => handleInputChange("details", e.target.value)}
                  className="border-b-2 border-zinc-200 rounded-none px-0 py-3 min-h-[100px] resize-none focus:border-blue-600 transition-colors text-zinc-800 placeholder:text-zinc-400"
                  placeholder="Tell us about your project, timeline, budget, or any specific requirements..."
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white hover:bg-red-700 disabled:bg-red-400 px-8 py-4 text-base font-medium tracking-wide transition-all duration-300 rounded-md shadow-lg hover:shadow-xl"
                  size="lg"
                >
                  {isSubmitting ? "SENDING..." : "SEND INQUIRY"}
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
            <div>
              <div className="text-sm tracking-wide text-zinc-400 uppercase mb-2">Phone</div>
              <div className="text-lg text-zinc-900">(954) 882-9589</div>
            </div>
            <div>
              <div className="text-sm tracking-wide text-zinc-400 uppercase mb-2">Email</div>
              <div className="text-lg text-zinc-900"> roy@arosecontractor.com</div>
            </div>
            <div>
              <div className="text-sm tracking-wide text-zinc-400 uppercase mb-2">Location</div>
              <div className="text-lg text-zinc-900">Sunrise, FL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
