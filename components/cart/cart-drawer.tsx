"use client"

import { useCart, type CartItem } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Badge } from "@/components/ui/badge"
import { openTelegram, openWhatsApp } from "@/lib/utils"
import { useRouter } from "next/navigation"

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
            0% {
              transform: translate(105%, -50%);
            }
            70% {
              transform: translate(-5px, -50%);
            }
            100% {
              transform: translate(0, -50%);
            }
          }

          @keyframes slideOut {
            0% {
              transform: translate(0, -50%);
            }
            100% {
              transform: translate(105%, -50%);
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translate(-50%, -40%);
            }
            100% {
              opacity: 1;
              transform: translate(-50%, -50%);
            }
          }

          @keyframes fadeOut {
            0% {
              opacity: 1;
              transform: translate(-50%, -50%);
            }
            100% {
              opacity: 0;
              transform: translate(-50%, -40%);
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes pulse {
            0%,
            100% {
              opacity: 0.6;
            }
            50% {
              opacity: 1;
            }
          }

          @keyframes spin-slow {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .cart-pattern {
            background-image: radial-gradient(
                circle at 10px 10px,
                rgba(0, 102, 255, 0.05) 2px,
                transparent 0
              ),
              radial-gradient(circle at 25px 25px, rgba(138, 75, 175, 0.05) 2px, transparent 0);
            background-size: 30px 30px;
          }
        `}</style>

        <div className="flex h-full flex-col">
          {/* Simplified Cart Header - No background, no border */}
          <div className="px-4 py-3 md:px-6 md:py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-base md:text-lg font-semibold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center">
                  Your Cart
                  {itemCount > 0 && (
                    <Badge className="ml-2 bg-facebook/10 text-facebook border-0">
                      {itemCount} {itemCount === 1 ? "item" : "items"}
                    </Badge>
                  )}
                </h2>
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
                  {items.map((item) => (
                    <div key={`cart-item-${item.id}`} className="relative group">
                      <CartItemCard key={`cart-item-card-${item.id}`} item={item} />
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Cart Footer - Creative design */}
              <div className="relative p-4 md:p-6 md:pt-2 pt-2 space-y-4 bg-white border-t border-blue-100/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      €{subtotal.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Purchase Instructions */}
                  <div className="text-center mb-4">
                    <p className="text-base font-bold text-gray-900 leading-relaxed">
                      How to Purchase: Contact us to complete your order via your preferred channel.
                    </p>
                  </div>

                  {/* Support Channel Buttons */}
                  <div className="flex gap-2 mb-4">
                    <Button
                      key="telegram"
                      onClick={() => openTelegram()}
                      className="flex-1 h-10 relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:from-blue-600 group-hover:to-purple-600 transition-colors"></span>
                      <span className="relative flex items-center justify-center text-white text-sm">
                        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                        </svg>
                        Telegram
                      </span>
                    </Button>

                    <Button
                      key="whatsapp"
                      onClick={() => openWhatsApp()}
                      className="flex-1 h-10 relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:from-blue-600 group-hover:to-purple-600 transition-colors"></span>
                      <span className="relative flex items-center justify-center text-white text-sm">
                        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                        WhatsApp
                      </span>
                    </Button>
                  </div>
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
                <span className="relative flex items-center justify-center text-white">
                  Continue Shopping
                </span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

function CartItemCard({ item }: { item: CartItem }) {
  const { removeItem, updateQuantity, closeCart } = useCart()
  const router = useRouter()

  const handleProductClick = () => {
    closeCart()
    router.push(`/${item.slug}`)
  }

  return (
    <>
      {/* Card background with hover effect */}
      <div className="absolute inset-0 bg-white rounded-xl transition-all duration-300 group-hover:shadow-md"></div>

      {/* Decorative accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-400 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Card content */}
      <div className="relative p-3 flex gap-3 md:gap-4">
        <div className="relative h-12 w-12 md:h-20 md:w-20 overflow-hidden rounded-lg flex-shrink-0">
          {/* Image background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>

          {/* Product image with hover effect */}
          <div className="relative h-full w-full">
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
            <h4
              onClick={handleProductClick}
              className="font-medium text-sm md:text-base line-clamp-1 text-gray-900 group-hover:text-blue-600 transition-colors cursor-pointer"
            >
              {item.name}
            </h4>
          </div>

          <div className="flex items-center justify-between">
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
              <span className="w-6 md:w-8 text-center text-xs md:text-sm font-medium">
                {item.quantity}
              </span>
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
    </>
  )
}
