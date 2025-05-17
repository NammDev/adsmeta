"use client"

import { useCart, type CartItem } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ShoppingCart, X, Plus, Minus, Trash2, CreditCard, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Badge } from "@/components/ui/badge"

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart()
  const [isAnimating, setIsAnimating] = useState(false)
  const isMobile = useMediaQuery("(max-width: 767px)")

  // Handle animations and keyboard events
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart()
    }

    if (isOpen) {
      setIsAnimating(true)
      document.addEventListener("keydown", handleEscape)
      // Prevent body scrolling when cart is open
      document.body.style.overflow = "hidden"
    } else {
      // Restore scrolling when cart is closed
      document.body.style.overflow = ""
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen, closeCart])

  // If cart is closed and not animating, don't render anything
  if (!isOpen && !isAnimating) return null

  return (
    <>
      {/* Semi-transparent overlay with blur */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Cart sidebar/modal - Creative design */}
      <div
        className={`fixed z-50 bg-white shadow-2xl transition-all duration-300 ease-out overflow-hidden
          ${
            isMobile
              ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md max-h-[85vh] rounded-2xl"
              : "right-0 top-1/2 -translate-y-1/2 h-auto max-h-[85vh] w-full max-w-md rounded-l-2xl"
          } ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        style={{
          animation: isOpen
            ? isMobile
              ? "fadeIn 0.3s ease-out"
              : "slideIn 0.4s ease-out"
            : isMobile
              ? "fadeOut 0.3s ease-in forwards"
              : "slideOut 0.3s ease-in forwards",
          boxShadow: "0 10px 50px rgba(0, 0, 0, 0.15), 0 0 20px rgba(0, 102, 255, 0.1)",
        }}
        onAnimationEnd={() => {
          if (!isOpen) setIsAnimating(false)
        }}
      >
        <style jsx global>{`
          @keyframes slideIn {
            0% { transform: translate(105%, -50%); }
            70% { transform: translate(-5px, -50%); }
            100% { transform: translate(0, -50%); }
          }
          
          @keyframes slideOut {
            0% { transform: translate(0, -50%); }
            100% { transform: translate(105%, -50%); }
          }
          
          @keyframes fadeIn {
            0% { opacity: 0; transform: translate(-50%, -40%); }
            100% { opacity: 1; transform: translate(-50%, -50%); }
          }
          
          @keyframes fadeOut {
            0% { opacity: 1; transform: translate(-50%, -50%); }
            100% { opacity: 0; transform: translate(-50%, -40%); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .cart-pattern {
            background-image: radial-gradient(circle at 10px 10px, rgba(0, 102, 255, 0.05) 2px, transparent 0),
                              radial-gradient(circle at 25px 25px, rgba(138, 75, 175, 0.05) 2px, transparent 0);
            background-size: 30px 30px;
          }
        `}</style>

        <div className="flex h-full flex-col">
          {/* Simplified Cart Header - No background, no border */}
          <div className="px-4 py-3 md:px-6 md:py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-base md:text-lg font-semibold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Your Cart
                </h2>
                {itemCount > 0 && (
                  <Badge className="ml-1 bg-facebook/10 text-facebook border-0">
                    {itemCount} {itemCount === 1 ? "item" : "items"}
                  </Badge>
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeCart}
                className="h-8 w-8 md:h-9 md:w-9 text-gray-700 hover:bg-gray-100 rounded-full"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          </div>

          {/* Cart Items - Creative design */}
          {items.length > 0 ? (
            <>
              {/* Use ScrollArea with fixed height to ensure scrolling works properly */}
              <ScrollArea
                className="flex-1 overflow-auto"
                style={{
                  maxHeight: isMobile ? "calc(65vh - 180px)" : "calc(65vh - 180px)",
                  background: "linear-gradient(to bottom, #f9f5ff, #ffffff)",
                }}
              >
                <div className="p-4 md:p-6 space-y-4">
                  {items.map((item, index) => (
                    <CartItemCard key={item.id} item={item} isLast={index === items.length - 1} />
                  ))}
                </div>
              </ScrollArea>

              {/* Cart Footer - Creative design */}
              <div className="relative p-4 md:p-6 space-y-4 bg-white border-t border-blue-100/50">
                {/* Decorative wave pattern */}
                <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
                  <svg className="w-full h-6" viewBox="0 0 1200 12" preserveAspectRatio="none">
                    <path d="M0,0 C300,12 600,4 900,8 L1200,0 L1200,12 L0,12 Z" fill="url(#wave-gradient)"></path>
                    <defs>
                      <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0066FF" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#8A4BAF" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#0066FF" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Subtotal</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      €{subtotal.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="flex items-center text-xs text-green-600 mb-1">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      <span>Free shipping</span>
                    </div>
                    <p className="text-xs text-gray-500">Taxes calculated at checkout</p>
                  </div>
                </div>

                {/* Payment methods */}
                <div className="flex items-center justify-center space-x-2 py-2">
                  <div className="flex space-x-2">
                    <div className="w-8 h-5 bg-blue-600 rounded-sm"></div>
                    <div className="w-8 h-5 bg-yellow-500 rounded-sm"></div>
                    <div className="w-8 h-5 bg-green-500 rounded-sm"></div>
                    <div className="w-8 h-5 bg-red-500 rounded-sm"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full relative overflow-hidden group">
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:from-blue-600 group-hover:to-purple-600 transition-colors"></span>
                    <span className="relative flex items-center justify-center text-white">
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Checkout</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full text-sm border-blue-200 hover:bg-blue-50 text-blue-600 hover:text-blue-700 hover:border-blue-300"
                    onClick={closeCart}
                  >
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center space-y-4 px-4 py-10 md:px-6 md:py-12 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 cart-pattern opacity-50"></div>

              {/* Decorative elements */}
              <div className="absolute -right-10 top-10 w-40 h-40 rounded-full bg-blue-100/30 blur-xl"></div>
              <div className="absolute -left-10 bottom-10 w-40 h-40 rounded-full bg-purple-100/30 blur-xl"></div>

              <div className="relative">
                <div className="absolute inset-0 bg-blue-200/30 rounded-full blur-lg"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-5 rounded-full border border-blue-100">
                  <ShoppingCart className="h-8 w-8 md:h-10 md:w-10 text-gray-400" />
                </div>
              </div>

              <div className="text-center relative z-10">
                <h3 className="text-lg md:text-xl font-medium text-gray-900">Your cart is empty</h3>
                <p className="text-center text-sm md:text-base text-gray-500 max-w-xs mt-2">
                  Looks like you haven't added any products to your cart yet.
                </p>
              </div>

              <Button onClick={closeCart} className="mt-2 relative overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:from-blue-600 group-hover:to-purple-600 transition-colors"></span>
                <span className="relative flex items-center justify-center text-white">Continue Shopping</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

function CartItemCard({ item, isLast }: { item: CartItem; isLast: boolean }) {
  const { removeItem, updateQuantity } = useCart()

  return (
    <div className="relative group">
      {/* Card background with hover effect */}
      <div className="absolute inset-0 bg-white rounded-xl transition-all duration-300 group-hover:shadow-md"></div>

      {/* Decorative accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-400 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Card content */}
      <div className="relative p-3 flex gap-3 md:gap-4">
        <div className="relative h-16 w-16 md:h-20 md:w-20 overflow-hidden rounded-lg flex-shrink-0">
          {/* Image background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>

          {/* Product image with hover effect */}
          <div className="relative h-full w-full p-2">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h4 className="font-medium text-sm md:text-base line-clamp-1 text-gray-900 group-hover:text-blue-600 transition-colors">
              {item.name}
            </h4>
            <p className="text-xs md:text-sm text-gray-500 capitalize">
              {item.category?.replace("-", " ") || "Product"}
            </p>
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center rounded-md overflow-hidden border border-blue-100 bg-white">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 md:h-8 md:w-8 rounded-none hover:bg-blue-50 text-gray-500 hover:text-blue-600"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                <Minus className="h-3 w-3" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <span className="w-6 md:w-8 text-center text-xs md:text-sm font-medium">{item.quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 md:h-8 md:w-8 rounded-none hover:bg-blue-50 text-gray-500 hover:text-blue-600"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <Plus className="h-3 w-3" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>

            <div className="flex items-center gap-1 md:gap-2">
              <span className="font-medium text-sm md:text-base bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                €{(item.price * item.quantity).toFixed(2)}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 md:h-8 md:w-8 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 className="h-3 w-3 md:h-4 md:w-4" />
                <span className="sr-only">Remove item</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
