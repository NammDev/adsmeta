"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { X, ShoppingBag } from "lucide-react"

interface CartNotificationProps {
  show: boolean
  item?: {
    id: string
    name: string
    price: number
    quantity: number
    image: string
    category: string
  }
  onClose: () => void
}

export function CartNotification({ show, item, onClose }: CartNotificationProps) {
  const { openCart } = useCart()
  const [isVisible, setIsVisible] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const notificationRef = useRef<HTMLDivElement>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  useEffect(() => {
    if (show) {
      setIsVisible(true)

      // Play notification sound
      if (audioRef.current) {
        audioRef.current.currentTime = 0
        audioRef.current.play().catch((err) => console.log("Audio play failed:", err))
      }

      // Auto-hide after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(false)
        onClose()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  // Touch event handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)

    // If swiping left, move the notification with the finger
    if (touchStart && touchEnd && touchStart > touchEnd) {
      const distance = touchStart - touchEnd
      if (notificationRef.current && distance > 0) {
        notificationRef.current.style.transform = `translateX(-${distance}px)`
      }
    }
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    // Reset transform
    if (notificationRef.current) {
      notificationRef.current.style.transform = ""
    }

    // Swipe left to dismiss
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance

    if (isLeftSwipe) {
      setIsVisible(false)
      setTimeout(onClose, 300)
    }
  }

  if (!show || !item) return null

  const handleViewCart = () => {
    openCart()
    onClose()
  }

  const handleContinueShopping = () => {
    onClose()
  }

  return (
    <>
      {/* Hidden audio element for notification sound */}
      <audio ref={audioRef} src="/notification-sound.mp3" preload="auto" />

      <div
        className={`fixed top-4 right-4 z-[9999] w-[85%] max-w-[320px] ${
          isVisible ? "opacity-100 animate-slide-in-right" : "opacity-0 translate-x-full"
        } transition-all duration-300`}
        ref={notificationRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
      >
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          <div className="flex justify-between items-center p-3 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center">
              <ShoppingBag size={16} className="text-facebook mr-2" />
              <h3 className="font-medium text-sm">Added to cart!</h3>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700" aria-label="Close notification">
              <X size={16} />
            </button>
          </div>

          <div className="p-3">
            <div className="flex gap-3">
              <div className="w-16 h-16 relative flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm mb-1 truncate">{item.name}</h4>
                <p className="text-xs text-gray-600 mb-1">{item.category}</p>
                <p className="text-xs text-gray-600 mb-1">Quantity: {item.quantity}</p>
                <p className="font-bold text-sm">€{item.price}</p>
              </div>
            </div>
          </div>

          <div className="p-3 pt-0 flex gap-2">
            <Button onClick={handleContinueShopping} variant="outline" className="flex-1 text-xs py-1 h-8">
              Continue
            </Button>
            <Button
              onClick={handleViewCart}
              className="flex-1 bg-facebook hover:bg-facebook-dark text-white text-xs py-1 h-8"
            >
              View Cart
            </Button>
          </div>

          <div className="px-3 pb-2 text-center">
            <p className="text-xs text-gray-500">Swipe left to dismiss</p>
          </div>
        </div>
      </div>
    </>
  )
}
