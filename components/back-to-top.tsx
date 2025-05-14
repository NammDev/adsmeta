"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface BackToTopProps {
  threshold?: number
  className?: string
  showLabel?: boolean
}

export default function BackToTop({ threshold = 300, className, showLabel = false }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  // Handle scroll event to show/hide button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Initial check
    handleScroll()

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-40 rounded-full shadow-lg transition-all duration-300 bg-facebook hover:bg-facebook-dark text-white",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
        className,
      )}
      size="icon"
      aria-label="Back to top"
    >
      <ChevronUp className="h-6 w-6" />
      {showLabel && <span className="ml-2">Back to top</span>}
    </Button>
  )
}
