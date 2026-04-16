"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft, Phone, Mail } from "lucide-react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"

export default function ThanksPage() {
  const router = useRouter()

  const handleGoHome = () => {
    router.push("/")
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center px-6 pt-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight mb-4">Thank You!</h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent mx-auto mb-6"></div>
          </div>

          {/* Main Message */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-slate-700 mb-6">We received your inquiry</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Our team will contact you shortly to discuss your project and schedule a free consultation.
            </p>

            {/* What's Next */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200 mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">What happens next?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    1
                  </div>
                  <p className="text-slate-600">We'll contact you within 24 hours</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    2
                  </div>
                  <p className="text-slate-600">Schedule a free consultation and site visit</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    3
                  </div>
                  <p className="text-slate-600">Provide you with a detailed estimate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <p className="text-slate-600 mb-4">Need to reach us immediately?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-slate-700">
                <Phone className="h-5 w-5 text-red-600" />
                <span className="font-medium">(954) 882-9589</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700">
                <Mail className="h-5 w-5 text-red-600" />
                <span className="font-medium">roy@arosecontractor.com</span>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <Button
            onClick={handleGoHome}
            variant="outline"
            className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3 text-base font-medium bg-transparent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    </>
  )
}
