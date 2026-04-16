"use client"

import type React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useCallback } from "react"

export default function KitchenBeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

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
  const handleContainerClick = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) {
        updateSliderPosition(e.clientX)
      }
    },
    [isDragging, updateSliderPosition],
  )

  const handleContainerTouch = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) {
        const touch = e.touches[0]
        updateSliderPosition(touch.clientX)
      }
    },
    [isDragging, updateSliderPosition],
  )

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="text-sm tracking-[0.2em] text-zinc-400 uppercase mb-4">Kitchen Transformation</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-zinc-900 leading-[1.1] mb-6 md:mb-8">
              Before & After
              <br />
              <span className="text-zinc-400">Kitchen Renovation</span>
            </h2>
         
          </div>

          {/* Before/After Slider */}
          <div
            ref={containerRef}
            className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl cursor-col-resize select-none touch-none"
            onMouseMove={handleMouseMove}
            onClick={handleContainerClick}
            onTouchStart={handleContainerTouch}
            style={{ touchAction: "none" }}
          >
            {/* Before Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/kitchen-before.webp"
                alt="Kitchen Before Renovation"
                fill
                className="object-cover"
                quality={60}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
                priority
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 md:px-4 py-2 rounded-md font-semibold text-xs md:text-sm">
                BEFORE
              </div>
            </div>

            {/* After Image */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src="/images/kitchen-after.webp"
                alt="Kitchen After Renovation"
                fill
                className="object-cover"
                quality={60}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
                priority
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 md:px-4 py-2 rounded-md font-semibold text-xs md:text-sm">
                AFTER
              </div>
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
              {/* Handle Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 cursor-grab active:cursor-grabbing">
                <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-gray-600 -ml-1" />
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gray-600 -mr-1" />
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="text-center mt-6 md:mt-8">
            <p className="text-sm md:text-base text-gray-600">
              <span className="hidden md:inline">Drag the slider</span>
              <span className="md:hidden">Swipe</span> to see the transformation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
