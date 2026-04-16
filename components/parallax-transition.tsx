"use client"

import { useEffect, useState } from "react"

export default function ParallaxTransition() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 40)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      {/* Parallax Layers */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 to-slate-900"
        style={{ transform: `translateY(${progress * 0.5}px)` }}
      ></div>

      <div className="absolute inset-0 opacity-20" style={{ transform: `translateY(${progress * 0.3}px)` }}>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-cover"></div>
      </div>

      {/* Center Content */}
      <div className="text-center z-10">
        <div
          className="mb-8"
          style={{
            opacity: Math.max(0, 1 - progress / 50),
            transform: `translateY(${progress * 0.8}px)`,
          }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-4 tracking-wide">Crafting Excellence</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto"></div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-px bg-slate-700 mx-auto relative">
          <div
            className="h-full bg-gradient-to-r from-gold-600 to-gold-400 transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gold-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translateY(${progress * (0.5 + Math.random() * 0.5)}px)`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        ></div>
      ))}
    </div>
  )
}
