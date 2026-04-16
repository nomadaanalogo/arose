"use client"

import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wrench, MapPin, Briefcase, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef, useCallback } from "react"

interface EntranceCurtainProps {
  onEnter: () => void
}

export default function EntranceCurtain({ onEnter }: EntranceCurtainProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }, [])

  // Mouse Events
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      setIsDragging(true)
      updateSliderPosition(e.clientX)
    },
    [updateSliderPosition],
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return
      e.preventDefault()
      updateSliderPosition(e.clientX)
    },
    [isDragging, updateSliderPosition],
  )

  // Touch Events
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault()
      setIsDragging(true)
      const touch = e.touches[0]
      updateSliderPosition(touch.clientX)
    },
    [updateSliderPosition],
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return
      e.preventDefault()
      const touch = e.touches[0]
      updateSliderPosition(touch.clientX)
    },
    [isDragging, updateSliderPosition],
  )

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  // Container click/touch for direct positioning
  const handleContainerInteraction = useCallback(
    (clientX: number) => {
      updateSliderPosition(clientX)
    },
    [updateSliderPosition],
  )

  const handleContainerClick = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) {
        handleContainerInteraction(e.clientX)
      }
    },
    [isDragging, handleContainerInteraction],
  )

  const handleContainerTouch = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) {
        const touch = e.touches[0]
        handleContainerInteraction(touch.clientX)
      }
    },
    [isDragging, handleContainerInteraction],
  )

  // Global event handlers
  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false)
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      updateSliderPosition(e.clientX)
    }

    const handleGlobalTouchEnd = () => setIsDragging(false)
    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (!isDragging) return
      e.preventDefault()
      const touch = e.touches[0]
      updateSliderPosition(touch.clientX)
    }

    if (isDragging) {
      // Mouse events
      document.addEventListener("mousemove", handleGlobalMouseMove)
      document.addEventListener("mouseup", handleGlobalMouseUp)

      // Touch events
      document.addEventListener("touchmove", handleGlobalTouchMove, { passive: false })
      document.addEventListener("touchend", handleGlobalTouchEnd)
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove)
      document.removeEventListener("mouseup", handleGlobalMouseUp)
      document.removeEventListener("touchmove", handleGlobalTouchMove)
      document.removeEventListener("touchend", handleGlobalTouchEnd)
    }
  }, [isDragging, updateSliderPosition])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden py-8">
      {/* Header with Logo */}
      <div className="absolute top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="text-center">
          <Image
            src="/images/arose-logo.png"
            alt="Arose Contractors Logo"
            width={140}
            height={46}
            className="h-8 md:h-10 w-auto mx-auto mb-2"
            priority
            quality={90}
          />
          <p className="text-xs md:text-sm tracking-[0.3em] text-slate-600 font-semibold">
            PREMIUM REMODELING SERVICES
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-4 md:px-6 max-w-4xl mx-auto mt-16 md:mt-20">
        {/* Before/After Slider */}
        <div className="my-6 md:my-12 relative transition-all duration-300">
          <div
            ref={containerRef}
            className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl cursor-col-resize select-none max-w-full md:max-w-2xl mx-auto touch-none"
            onMouseMove={handleMouseMove}
            onClick={handleContainerClick}
            onTouchStart={handleContainerTouch}
            style={{ touchAction: "none" }}
          >
            {/* Before Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/basement-after-optimized.webp"
                alt="Basement After Renovation - Beautiful Home Office"
                fill
                className="object-cover"
                priority
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* After Image */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src="/images/basement-before-optimized.webp"
                alt="Basement Before Renovation - Unfinished Storage Space"
                fill
                className="object-cover"
                loading="eager"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize z-10"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Handle Circle - Larger on mobile */}
              <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                  isMobile ? "w-16 h-16" : "w-12 h-12"
                } bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 cursor-grab active:cursor-grabbing`}
              >
                <ChevronLeft className={`${isMobile ? "h-5 w-5" : "h-4 w-4"} text-gray-600 -ml-1`} />
                <ChevronRight className={`${isMobile ? "h-5 w-5" : "h-4 w-4"} text-gray-600 -mr-1`} />
              </div>
            </div>
          </div>
        </div>

        {/* Main Message */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-slate-900 leading-tight mb-4">
            Renovate your space with style, precision and confidence
          </h2>
        </div>

        {/* Features List - Vertical Layout */}
        <div className="space-y-4 md:space-y-6 mb-8 md:mb-12 max-w-3xl mx-auto">
          {[
            {
              icon: Wrench,
              text: "We care like it's our own home.",
              delay: "0ms",
            },
            {
              icon: MapPin,
              text: "From kitchens to roofs, closets and additions.",
              delay: "200ms",
            },
            {
              icon: Briefcase,
              text: "Over 25 years creating spaces.",
              delay: "600ms",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 md:space-x-6 group animate-in slide-in-from-left duration-700"
              style={{ animationDelay: feature.delay }}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105">
                <feature.icon className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600" />
              </div>
              <p className="text-sm md:text-base lg:text-lg text-slate-700 leading-relaxed text-left pt-1 md:pt-2 lg:pt-3 group-hover:text-slate-900 transition-colors duration-300">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mb-8 md:mb-12">
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-light leading-relaxed text-slate-600 animate-in fade-in duration-1000 delay-800">
            Increase your property value and enjoy the change from day one.
          </p>
        </div>

        {/* CTA */}
        <div className="relative group animate-in slide-in-from-bottom duration-700 delay-1000">
          <Button
            onClick={onEnter}
            className="relative bg-blue-600 text-white hover:bg-blue-700 px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-6 text-sm md:text-base lg:text-lg font-semibold tracking-wide transition-all duration-300 rounded-lg border-2 border-blue-700 hover:border-blue-800 shadow-xl hover:shadow-2xl transform hover:scale-105"
            size="lg"
          >
            EXPLORE OUR WORK
            <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      </div>

      {/* Subtle accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent"></div>
    </div>
  )
}
