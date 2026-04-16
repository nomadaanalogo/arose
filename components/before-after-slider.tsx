"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false)
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = (x / rect.width) * 100
      setSliderPosition(Math.max(0, Math.min(100, percentage)))
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove)
      document.addEventListener("mouseup", handleGlobalMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove)
      document.removeEventListener("mouseup", handleGlobalMouseUp)
    }
  }, [isDragging])

  return (
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-sm tracking-[0.2em] text-zinc-400 uppercase mb-4">Transformation</div>
          <h2 className="text-5xl md:text-6xl font-light text-zinc-900 leading-[1.1] mb-8">
            Before & After
            <br />
            <span className="text-zinc-400">Kitchen Renovation</span>
          </h2>
          <p className="text-xl text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
            See the dramatic transformation of this kitchen renovation. Drag the slider to reveal the stunning results.
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl cursor-col-resize select-none"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* Before Image */}
            <div className="absolute inset-0">
              <img
                src="/images/kitchen-before.webp"
                alt="Kitchen Before Renovation"
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-md font-semibold text-sm">
                BEFORE
              </div>
            </div>

            {/* After Image */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="/images/kitchen-after.webp"
                alt="Kitchen After Renovation"
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md font-semibold text-sm">
                AFTER
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
              onMouseDown={handleMouseDown}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
            >
              {/* Handle Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200">
                <ChevronLeft className="h-4 w-4 text-gray-600 -ml-1" />
                <ChevronRight className="h-4 w-4 text-gray-600 -mr-1" />
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="text-center mt-8">
            <p className="text-gray-600">
              <span className="hidden md:inline">Drag the slider</span>
              <span className="md:hidden">Swipe</span> to see the transformation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
