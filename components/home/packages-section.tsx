"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight, ShoppingCart, Crown } from "lucide-react"
import { useCart } from "@/context/cart-context"
import SectionHeader from "../ui/section-header"
import { getPackagesLandingPage } from "@/data/packs"
import MobilePackagesCarousel from "./mobile-packages-carousel"

export default function PackagesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isAdding, setIsAdding] = useState<string | null>(null)
  const { addItem, openCart } = useCart() || {}

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

  // Get packages from centralized data source
  const packages = getPackagesLandingPage()

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
      if (openCart) {
        openCart()
      }
    } catch (error) {
      console.error("Error adding to cart:", error)
    } finally {
      setTimeout(() => setIsAdding(null), 500)
    }
  }

  return (
    <section id="packages" className="py-6 md:py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <SectionHeader title="Choose Your Package" />

        {/* Desktop Grid View */}
        {!isMobile && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto md:mt-24">
            {packages.map((pkg, index) => {
              const isPremium = pkg.name === "GoAds Premium"
              const isAdvanced = pkg.name === "GoAds Advanced"
              const isElite = pkg.name === "GoAds Elite"
              const isBasic = pkg.name === "GoAds Basic"

              return (
                <div
                  key={pkg.id}
                  className={`relative ${isPremium ? "transform scale-110" : ""}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {pkg.badge && (
                    <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                      <span
                        className={`${
                          isPremium
                            ? "bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-amber-900 shadow-xl border border-amber-300"
                            : "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        } text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1`}
                      >
                        {isPremium ? <Crown className="h-3 w-3" /> : "⭐"} {pkg.badge}
                      </span>
                    </div>
                  )}

                  <Card
                    className={`${
                      isPremium
                        ? "border-2 border-amber-400 shadow-md bg-gradient-to-br from-amber-50 via-white to-yellow-50 relative overflow-hidden"
                        : "border border-gray-200 shadow-md bg-white hover:shadow-lg"
                    } rounded-xl transition-all duration-300 h-full ${
                      hoveredCard === index && !isPremium ? "transform scale-102" : ""
                    } ${isPremium ? "hover:shadow-amber-200/50 hover:shadow-2xl" : ""}`}
                  >
                    {/* Header */}
                    <div className={`${isPremium ? "p-6 pb-4" : "p-5 pb-3"} text-center relative`}>
                      {/* Premium Background Pattern */}
                      {isPremium && (
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute top-2 right-2 text-amber-400">
                            <Crown className="h-8 w-8" />
                          </div>
                          <div className="absolute bottom-2 left-2 text-amber-400">
                            <Crown className="h-6 w-6" />
                          </div>
                        </div>
                      )}

                      <h3
                        className={`${isPremium ? "text-base" : "text-sm"} font-semibold mb-2 ${
                          isPremium ? "text-amber-700" : "text-gray-600"
                        } uppercase tracking-wide relative z-10`}
                      >
                        {pkg.name.replace("GoAds ", "")}
                      </h3>

                      <div className={`${isPremium ? "mb-4" : "mb-3"} relative z-10`}>
                        <span
                          className={`${isPremium ? "text-4xl" : "text-3xl"} font-bold ${
                            isPremium
                              ? "bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent"
                              : "text-gray-900"
                          }`}
                        >
                          €{pkg.price}
                        </span>
                        <span className="text-gray-500 text-sm ml-1">/ one-time</span>
                      </div>

                      <p className={`text-gray-600 text-sm leading-relaxed relative z-10`}>
                        {pkg.description}
                      </p>
                    </div>

                    {/* Features */}
                    <CardContent
                      className={`${isPremium ? "px-6 pb-6" : "px-5 pb-5"} relative z-10`}
                    >
                      <ul className={`${isPremium ? "space-y-3 mb-7" : "space-y-2.5 mb-6"}`}>
                        {pkg.products.map((product, i) => (
                          <li key={i} className="flex items-start">
                            <div
                              className={`${isPremium ? "w-5 h-5" : "w-4 h-4"} rounded-full ${
                                isPremium
                                  ? "bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 shadow-md"
                                  : "bg-gradient-to-r from-green-400 to-blue-500"
                              } flex-shrink-0 flex items-center justify-center mt-0.5 mr-3`}
                            >
                              <Check
                                className={`${isPremium ? "h-3 w-3" : "h-2.5 w-2.5"} text-white`}
                              />
                            </div>
                            <span className={`text-gray-700 text-sm leading-relaxed`}>
                              {product.role}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Buttons */}
                      <div className="space-y-2">
                        <Button
                          className={`w-full ${isPremium ? "py-3" : "py-2"} font-semibold ${
                            isPremium ? "text-base" : "text-sm"
                          } rounded-lg transition-all duration-200 ${
                            isPremium
                              ? "bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 border border-amber-400"
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
                                <Crown className="mr-2 h-5 w-5" />
                              ) : (
                                <ShoppingCart className="mr-2 h-4 w-4" />
                              )}
                              <span>{isPremium ? "Get Premium" : "Add to Cart"}</span>
                            </>
                          )}
                        </Button>

                        <Link href={`/packs/${pkg.slug}`} className="block">
                          <Button
                            variant="outline"
                            className={`w-full ${isPremium ? "py-3" : "py-2"} font-medium ${
                              isPremium ? "text-base" : "text-sm"
                            } rounded-lg border ${
                              isPremium
                                ? "border-amber-300 hover:bg-amber-50 hover:border-amber-400 text-amber-700"
                                : "hover:bg-blue-50 hover:border-blue-300"
                            } group`}
                          >
                            <span>View Details</span>
                            <ArrowRight
                              className={`ml-2 ${
                                isPremium ? "h-4 w-4" : "h-3 w-3"
                              } transition-transform group-hover:translate-x-1`}
                            />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        )}

        {/* Mobile Carousel View */}
        {isMobile && <MobilePackagesCarousel packages={packages} />}
      </div>
    </section>
  )
}
