"use client"

import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
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
  const [isMounted, setIsMounted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Mount check for client-side portal rendering
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  useEffect(() => {
    if (show) {
      setIsVisible(true)

      // Play notification sound
      if (audioRef.current) {
        audioRef.current.currentTime = 0
        audioRef.current.play().catch((err) => console.log("Audio play failed:", err))
      }

      // Auto-hide after 2 seconds (reduced from 5 seconds)
      const timer = setTimeout(() => {
        setIsVisible(false)
        onClose()
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!show || !item || !isMounted) return null

  const handleViewCart = () => {
    openCart()
    onClose()
  }

  const handleContinueShopping = () => {
    onClose()
  }

  // The actual notification content
  const notificationContent = (
    <>
      {/* Hidden audio element for notification sound */}
      <audio ref={audioRef} src="/notification-sound.mp3" preload="auto" />

      <div
        className={`fixed top-4 right-4 w-[85%] max-w-[320px] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          zIndex: 2147483647, // Maximum possible z-index (2^31 - 1)
          boxShadow: "0 0 0 2000px rgba(0, 0, 0, 0)",
          pointerEvents: "auto",
        }}
      >
        <div className="bg-white rounded-lg overflow-hidden border-2 border-gray-300 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
          <div className="flex justify-between items-center p-3 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center">
              <ShoppingBag size={16} className="text-facebook mr-2" />
              <h3 className="font-medium text-sm">Added to cart!</h3>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 p-1" aria-label="Close notification">
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
        </div>
      </div>
    </>
  )

  // Use a portal to render at the root level of the DOM
  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 2147483647,
      }}
    >
      {notificationContent}
    </div>,
    document.body,
  )
}
