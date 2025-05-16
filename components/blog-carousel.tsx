"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BlogCarouselProps {
  children: React.ReactNode
  itemsPerView?: number
  mobileItemsPerView?: number
  className?: string
}

export function BlogCarousel({ children, itemsPerView = 3, mobileItemsPerView = 2, className }: BlogCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [totalSlides, setTotalSlides] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Touch handling state
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Calculate total slides based on children count and items per view
  useEffect(() => {
    if (containerRef.current) {
      const childrenCount = React.Children.count(children)
      const itemsPerSlide = isMobile ? mobileItemsPerView : itemsPerView
      setTotalSlides(Math.ceil(childrenCount / itemsPerSlide))
    }
  }, [children, itemsPerView, mobileItemsPerView, isMobile])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1
      return newIndex >= totalSlides ? prevIndex : newIndex
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1
      return newIndex < 0 ? 0 : newIndex
    })
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Touch event handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentIndex < totalSlides - 1) {
      nextSlide()
    } else if (isRightSwipe && currentIndex > 0) {
      prevSlide()
    }
  }

  const itemsPerSlide = isMobile ? mobileItemsPerView : itemsPerView
  const translateValue = -currentIndex * (100 / totalSlides)

  return (
    <div className={cn("relative group", className)}>
      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translateValue}%)`, width: `${totalSlides * 100}%` }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {React.Children.map(children, (child, index) => (
            <div className="px-2" style={{ width: `${100 / (totalSlides * itemsPerSlide)}%` }}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full shadow-md border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={prevSlide}
        disabled={currentIndex === 0}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full shadow-md border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={nextSlide}
        disabled={currentIndex === totalSlides - 1}
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-facebook w-4" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
