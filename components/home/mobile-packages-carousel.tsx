"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight, ShoppingCart, Crown } from "lucide-react"
import { CartNotification } from "@/components/cart/cart-notification"
import { useCart } from "@/context/cart-context"

interface MobilePackagesCarouselProps {
  packages: any[]
}

export default function MobilePackagesCarousel({ packages }: MobilePackagesCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(1) // Start with Premium pack
  const [isAdding, setIsAdding] = useState<string | null>(null)
  const [showNotification, setShowNotification] = useState(false)
  const [addedItem, setAddedItem] = useState<any>(null)
  const { addItem, openCart } = useCart() || {}
  const carouselRef = useRef<HTMLDivElement>(null)

  // Touch handling for carousel
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const minSwipeDistance = 50

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

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === packages.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? packages.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const handleAddToCart = (pkg: any) => {
    if (!addItem) {
      console.error("Cart functionality not available")
      return
    }

    setIsAdding(pkg.id)

    try {
      const item = {
        id: pkg.id,
        slug: `packs/${pkg.slug}`,
        name: pkg.name,
        price: pkg.price,
        quantity: 1,
        image: pkg.image,
        category: pkg.category,
      }

      addItem(item)
      setAddedItem(item)
      setShowNotification(true)
    } catch (error) {
      console.error("Error adding to cart:", error)
    } finally {
      setTimeout(() => setIsAdding(null), 500)
    }
  }

  const handleCloseNotification = () => {
    setShowNotification(false)
  }

  return (
    <div className="relative max-w-xs mx-auto">
      <div
        ref={carouselRef}
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {packages.map((pkg, index) => {
            const isPremium = pkg.name === "GoAds Premium"
            const isAdvanced = pkg.name === "GoAds Advanced"
            const isElite = pkg.name === "GoAds Elite"
            const isBasic = pkg.name === "GoAds Basic"

            return (
              <div key={pkg.id} className="w-full flex-shrink-0 px-2">
                <div className="relative">
                  {pkg.badge && (
                    <div className="absolute -top-3 left-0 right-0 flex justify-center z-20">
                      <span
                        className={`${
                          isPremium
                            ? "bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-amber-900 shadow-xl border border-amber-300"
                            : "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        } text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1`}
                      >
                        {isPremium ? <Crown className="h-3 w-3" /> : "⭐"} {pkg.badge}
                      </span>
                    </div>
                  )}

                  <Card
                    className={`${
                      isPremium
                        ? "border-2 border-amber-400 shadow-xl bg-gradient-to-br from-amber-50 via-white to-yellow-50 relative overflow-hidden"
                        : "border border-gray-200 shadow-md bg-white"
                    } rounded-xl h-full ${pkg.badge ? "mt-3" : ""}`}
                  >
                    {/* Header */}
                    <div className={`${isPremium ? "p-5 pb-3" : "p-4 pb-2"} text-center relative`}>
                      {/* Premium Background Pattern */}
                      {isPremium && (
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute top-1 right-1 text-amber-400">
                            <Crown className="h-6 w-6" />
                          </div>
                        </div>
                      )}

                      <h3
                        className={`${isPremium ? "text-sm" : "text-xs"} font-semibold mb-2 ${
                          isPremium ? "text-amber-700" : "text-gray-600"
                        } uppercase tracking-wide relative z-10`}
                      >
                        {pkg.name.replace("GoAds ", "")}
                      </h3>

                      <div className={`${isPremium ? "mb-3" : "mb-2"} relative z-10`}>
                        <span
                          className={`${isPremium ? "text-3xl" : "text-2xl"} font-bold ${
                            isPremium
                              ? "bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent"
                              : "text-gray-900"
                          }`}
                        >
                          {pkg.price}
                        </span>
                        <span className="text-gray-500 text-xs ml-1">/ one-time</span>
                      </div>

                      <p className={`text-gray-600 text-xs leading-relaxed relative z-10`}>
                        {pkg.description}
                      </p>
                    </div>

                    {/* Features */}
                    <CardContent className={`${isPremium ? "p-5 pt-0" : "p-4 pt-0"} relative z-10`}>
                      <ul className={`${isPremium ? "space-y-2.5 mb-5" : "space-y-2 mb-4"}`}>
                        {pkg.products.slice(0, 4).map((product: any, i: number) => (
                          <li key={i} className="flex items-start">
                            <div
                              className={`${isPremium ? "w-4 h-4" : "w-3 h-3"} rounded-full ${
                                isPremium
                                  ? "bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 shadow-md"
                                  : "bg-gradient-to-r from-green-400 to-blue-500"
                              } flex-shrink-0 flex items-center justify-center mt-0.5 mr-2`}
                            >
                              <Check
                                className={`${isPremium ? "h-2.5 w-2.5" : "h-2 w-2"} text-white`}
                              />
                            </div>
                            <span className="text-gray-700 text-xs leading-relaxed">
                              {product.role}
                            </span>
                          </li>
                        ))}
                        {pkg.products.length > 4 && (
                          <li className="text-xs text-gray-500 italic ml-5">
                            +{pkg.products.length - 4} more products
                          </li>
                        )}
                      </ul>

                      {/* Buttons */}
                      <div className="space-y-2">
                        <Button
                          className={`w-full ${
                            isPremium ? "py-2.5" : "py-2"
                          } font-semibold text-xs rounded-lg ${
                            isPremium
                              ? "bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-700 text-white shadow-lg border border-amber-400"
                              : isAdvanced
                              ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                              : isElite
                              ? "bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white"
                              : "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white"
                          }`}
                          onClick={() => handleAddToCart(pkg)}
                          disabled={isAdding === pkg.id}
                        >
                          {isAdding === pkg.id ? (
                            "Adding..."
                          ) : (
                            <>
                              {isPremium ? (
                                <Crown className="mr-1 h-3 w-3" />
                              ) : (
                                <ShoppingCart className="mr-1 h-3 w-3" />
                              )}
                              <span>{isPremium ? "Get Premium" : "Add to Cart"}</span>
                            </>
                          )}
                        </Button>

                        <Link href={`/packs/${pkg.slug}`}>
                          <Button
                            variant="outline"
                            className={`w-full py-2 font-medium text-xs rounded-lg border ${
                              isPremium
                                ? "border-amber-300 hover:bg-amber-50 hover:border-amber-400 text-amber-700"
                                : "hover:bg-blue-50 hover:border-blue-300"
                            }`}
                          >
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 gap-1.5">
        {packages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-gradient-to-r from-amber-500 to-yellow-600 w-5"
                : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to package ${index + 1}`}
          />
        ))}
      </div>

      {/* Cart notification */}
      <CartNotification
        show={showNotification}
        item={addedItem}
        onClose={handleCloseNotification}
      />
    </div>
  )
}
