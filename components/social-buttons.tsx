"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Send, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface SocialButtonsProps {
  threshold?: number
  className?: string
}

export default function SocialButtons({ threshold = 300, className }: SocialButtonsProps) {
  const [isVisible, setIsVisible] = useState(false)

  // Handle scroll event to show/hide buttons
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

  // Open WhatsApp function
  const openWhatsApp = () => {
    // Replace with your actual WhatsApp number and message
    const phoneNumber = "1234567890"
    const message = "Hello! I'm interested in your products."
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  // Open Telegram function
  const openTelegram = () => {
    // Replace with your actual Telegram username or link
    const username = "yourusername"
    window.open(`https://t.me/${username}`, "_blank")
  }

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-40 flex flex-col gap-3 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
        className,
      )}
    >
      {/* WhatsApp Button */}
      <div className="relative">
        <Button
          onClick={openWhatsApp}
          className="rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white w-14 h-14 p-0 flex items-center justify-center"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />
        </Button>
      </div>

      {/* Telegram Button */}
      <div className="relative">
        <Button
          onClick={openTelegram}
          className="rounded-full shadow-lg bg-facebook hover:bg-facebook-dark text-white w-14 h-14 p-0 flex items-center justify-center"
          aria-label="Contact on Telegram"
        >
          <Send className="h-7 w-7" />
        </Button>
      </div>
    </div>
  )
}
