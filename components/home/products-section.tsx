"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star, ShoppingBag, ShoppingCart } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useCart } from "@/context/cart-context"
import {
  getProductSectionItems,
  filterProductSectionItems,
  getProductSectionFilterOptions,
  type ProductSectionItem,
} from "@/data/products"

// Use the ProductSectionItem type from data/products.ts
type Product = ProductSectionItem

// Get products data from centralized source
const allProducts: Product[] = getProductSectionItems()

// Get filter options from centralized source
const filterOptions = getProductSectionFilterOptions()

// This component will be wrapped in Suspense
function ProductsContent() {
  const [currentFilter, setCurrentFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const productsPerPage = 8

  // Add this state for tracking which product is being added
  const [isAddingToCart, setIsAddingToCart] = useState<string | null>(null)
  const { addItem, openCart } = useCart()

  // Simulate data loading
  useEffect(() => {
    // Simulate loading delay when filter or page changes
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800) // Simulate network delay

    return () => clearTimeout(timer)
  }, [currentFilter, currentPage])

  // Filter products based on selected category
  const filteredProducts = currentFilter === "all" ? allProducts : filterProductSectionItems(currentFilter)

  // Calculate pagination for desktop
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  // Scroll carousel left
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" })
    }
  }

  // Scroll carousel right
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" })
    }
  }

  // Render star rating
  const renderRating = (rating = 4.5, purchases = 0) => {
    return (
      <div className="flex items-center gap-1">
        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
        <span className="text-sm font-medium">{rating.toFixed(1)}</span>
        <span className="text-xs text-gray-500">({purchases})</span>
      </div>
    )
  }

  // Add this function to handle adding products to cart
  const handleAddToCart = (product: Product) => {
    if (!addItem) {
      console.error("Cart functionality not available")
      return
    }

    setIsAddingToCart(product.id)

    try {
      const item = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image || "/placeholder.svg",
        category: product.category,
      }

      addItem(item)

      // Open cart on desktop, or just show feedback on mobile
      if (!isMobile && openCart) {
        openCart()
      }
    } catch (error) {
      console.error("Error adding to cart:", error)
    } finally {
      setTimeout(() => setIsAddingToCart(null), 500)
    }
  }

  // Render product card (used in both mobile and desktop)
  const renderProductCard = (product: Product) => (
    <Card
      className={`border-0 rounded-xl overflow-hidden bg-gradient-to-br ${
        product.bgGradient || "from-white to-blue-50"
      } shadow-sm hover:shadow-xl transition-all duration-300 h-full transform ${
        hoveredCard === product.id ? "scale-[1.03] translate-y-[-5px]" : "scale-100"
      }`}
      onMouseEnter={() => setHoveredCard(product.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative">
          {/* Product image with enhanced animation */}
          <div className="aspect-square relative bg-white/50 group overflow-hidden">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${
                product.gradient || "from-blue-500/10 to-indigo-500/10"
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            ></div>
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className={`object-contain p-8 transition-transform duration-500 ${
                hoveredCard === product.id ? "scale-110" : "scale-100"
              }`}
            />
          </div>

          {/* Badge with enhanced styling */}
          {product.badge && (
            <div className="absolute right-4 top-4">
              <Badge
                className={`bg-gradient-to-r ${
                  product.gradient || "from-blue-500 to-indigo-500"
                } text-white border-0 shadow-md px-3 py-1 animate-fadeIn`}
              >
                {product.badge}
              </Badge>
            </div>
          )}
        </div>
      </Link>

      <CardContent className={`${isMobile ? "p-5" : "p-6"} transition-all duration-300`}>
        <Link href={`/products/${product.id}`} className="block">
          {/* Purchase count with icon */}
          <div className="flex items-center gap-1 mb-2 text-gray-600">
            <ShoppingBag className="h-3 w-3" />
            <span className="text-xs">{product.purchases} purchased</span>
          </div>

          {/* Product name with gradient on hover */}
          <h3
            className={`${
              isMobile ? "text-base" : "text-lg"
            } font-bold text-gray-900 mb-1 transition-colors duration-300 ${
              hoveredCard === product.id
                ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                : ""
            }`}
          >
            {product.name}
          </h3>

          {!isMobile && (
            <p className="text-sm text-gray-600 mb-4 line-clamp-2 transition-all duration-300">{product.description}</p>
          )}
        </Link>

        {/* Price and action with enhanced styling */}
        <div className="flex justify-between items-center mt-3">
          <span
            className={`${isMobile ? "text-lg" : "text-xl"} font-bold text-transparent bg-clip-text bg-gradient-to-r ${
              product.gradient || "from-blue-500 to-indigo-500"
            }`}
          >
            €{product.price}
          </span>
          <Button
            size={isMobile ? "sm" : "default"}
            className={`bg-gradient-to-r ${
              product.gradient || "from-blue-500 to-indigo-500"
            } hover:opacity-90 text-white border-0 shadow-sm transition-all duration-300 ${
              hoveredCard === product.id ? "shadow-md" : ""
            }`}
            onClick={(e) => {
              e.preventDefault() // Prevent navigation when clicking the button
              e.stopPropagation() // Stop event from bubbling up
              handleAddToCart(product)
            }}
          >
            {isAddingToCart === product.id ? "Adding..." : isMobile ? "Add" : "Add to Cart"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <>
      {/* Filter buttons - styled to match website */}
      <div
        className={`flex ${
          isMobile ? "flex-wrap justify-start overflow-x-auto pb-4" : "justify-center"
        } gap-3 mb-8 max-w-full`}
      >
        {filterOptions.map((option) => (
          <Button
            key={option.value}
            variant="outline"
            size={isMobile ? "sm" : "default"}
            className={`${
              isMobile
                ? "rounded-full border-0 px-4 py-1.5 text-xs !transition-all"
                : "rounded-full border-0 px-6 py-2.5 text-sm"
            } ${
              currentFilter === option.value
                ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:opacity-90 shadow-md transform scale-105 transition-all"
                : isMobile
                  ? "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gray-100 shadow-sm"
                  : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gray-100 shadow-sm"
            } transition-all duration-300`}
            onClick={() => {
              setCurrentFilter(option.value)
              setCurrentPage(1) // Reset to first page when changing filters
            }}
          >
            {option.label}
          </Button>
        ))}
      </div>

      {/* Mobile View - Enhanced Carousel */}
      {isMobile ? (
        <div className="relative md:hidden overflow-hidden">
          {/* Left navigation arrow with enhanced styling */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-2 shadow-lg transition-transform duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Products carousel with enhanced styling */}
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto pb-6 pt-2 snap-x max-w-full px-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {isLoading
              ? // Loading skeletons for mobile with enhanced animation
                Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="min-w-[160px] w-[calc(50%-8px)] flex-none snap-start animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <Card className="border-0 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 h-full">
                        <div className="aspect-square bg-white/50 animate-pulse"></div>
                        <CardContent className="p-4">
                          <div className="h-3 bg-gray-200 rounded-full w-3/4 mb-2 animate-pulse"></div>
                          <div className="h-4 bg-gray-200 rounded-full w-full mb-2 animate-pulse"></div>
                          <div className="flex justify-between items-center">
                            <div className="h-4 bg-gray-200 rounded-full w-1/4 animate-pulse"></div>
                            <div className="h-7 bg-gray-200 rounded-full w-1/3 animate-pulse"></div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))
              : filteredProducts.slice(0, 6).map((product, index) => (
                  <div
                    key={product.id}
                    className="min-w-[160px] w-[calc(50%-8px)] flex-none snap-start animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {renderProductCard(product)}
                  </div>
                ))}
          </div>

          {/* Right navigation arrow with enhanced styling */}
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-2 shadow-lg transition-transform duration-300 hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Scroll indicator dots */}
          <div className="flex justify-center gap-2 mt-4">
            {[...Array(Math.min(3, Math.ceil(filteredProducts.length / 2)))].map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === 0 ? "bg-blue-500 w-6" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>

          {/* See More Button for Mobile with enhanced styling */}
          <div className="flex justify-center mt-8">
            <Link href="/products">
              <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 text-white px-8 py-2.5 border-0 shadow-md rounded-full transition-transform duration-300 hover:scale-105">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        /* Desktop View - Grid with Pagination */
        <>
          {isLoading ? (
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <Card
                  key={i}
                  className="border-0 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="aspect-square bg-white/50 animate-pulse"></div>
                  <CardContent className="p-6">
                    <div className="h-6 bg-gray-200 rounded-full w-3/4 mb-3 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-full mb-4 animate-pulse"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-6 bg-gray-200 rounded-full w-1/4 animate-pulse"></div>
                      <div className="h-10 bg-gray-200 rounded-full w-1/3 animate-pulse"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentProducts.map((product, index) => (
                <div key={product.id} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                  {renderProductCard(product)}
                </div>
              ))}
            </div>
          )}

          {/* Enhanced pagination for desktop */}
          {totalPages > 1 && (
            <div className="hidden md:flex justify-center mt-16">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 shadow-md">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="rounded-full border-0 bg-transparent hover:bg-gray-100 disabled:opacity-50 transition-all duration-300"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" /> Prev
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant="outline"
                    className={`rounded-full border-0 transition-all duration-300 ${
                      currentPage === page
                        ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:opacity-90 shadow-md transform scale-110"
                        : "bg-transparent hover:bg-gray-100"
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="rounded-full border-0 bg-transparent hover:bg-gray-100 disabled:opacity-50 transition-all duration-300"
                >
                  Next <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default function ProductsSection() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const { addItem, openCart } = useCart()
  // Add this function to handle adding products to cart
  const handleAddToCart = (product: any) => {
    if (!addItem) {
      console.error("Cart functionality not available")
      return
    }

    try {
      const item = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image || "/placeholder.svg",
        category: product.category,
      }

      addItem(item)

      // Open cart on desktop, or just show feedback on mobile
      if (!isMobile && openCart) {
        openCart()
      }
    } catch (error) {
      console.error("Error adding to cart:", error)
    }
  }

  return (
    <section id="products" className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-lightblue">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-100 opacity-40 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-indigo-100 opacity-50 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-100 opacity-30 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 mb-4 border-0 shadow-md px-4 py-1 text-sm animate-pulse">
            Our Products
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Premium Solutions
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 opacity-50 rounded-full animate-pulse"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted solutions designed to elevate your marketing strategy and drive results
          </p>
        </div>

        {/* Category-based Product Listing */}
        <div className="space-y-8">
          {/* Business Manager Category */}
          {(() => {
            const businessManagerProducts = allProducts.filter(
              (product) => product.category === "verified-bm" || product.category === "unverified-bm",
            )

            if (businessManagerProducts.length === 0) return null

            return (
              <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.01]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">🏢</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Business Managers</h3>
                  <Badge className="bg-blue-100 text-blue-700 border-0 animate-bounce">Premium Quality</Badge>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {businessManagerProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-2xl transition-all duration-500 group transform hover:scale-[1.02] hover:-translate-y-1"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-0">
                            <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-0">
                              {product.name.split(" ").map((word, index) => {
                                const highlightWords = ["Verified", "Blue", "Tick", "Reinstated", "Super", "Strong"]
                                const isHighlight = highlightWords.some((hw) => word.includes(hw))
                                return (
                                  <span key={index} className={isHighlight ? "text-blue-600 font-bold" : ""}>
                                    {word}{" "}
                                  </span>
                                )
                              })}
                            </h4>
                            <span className="text-green-500 animate-pulse">✓</span>
                          </div>
                          <p className="text-gray-600 text-sm mb-2 group-hover:text-gray-700 transition-colors duration-300">
                            {product.description}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <ShoppingBag className="h-4 w-4 group-hover:text-blue-500 transition-colors duration-300" />
                              {product.purchases} purchased
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                              4.9 rating
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3">
                          <div className="text-right">
                            <div className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                              €{product.price}
                            </div>
                            <div className="text-sm text-gray-500">per unit</div>
                          </div>
                          <div className="flex gap-2">
                            <Link href={`/products/${product.id}`}>
                              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                                <ShoppingCart className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                                Buy Now
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })()}

          {/* Profile Account Category */}
          {(() => {
            const profileProducts = allProducts.filter((product) => product.category === "profile")

            if (profileProducts.length === 0) return null

            return (
              <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.01]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">👤</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Profile Accounts</h3>
                  <Badge className="bg-purple-100 text-purple-700 border-0 animate-bounce">Enterprise Ready</Badge>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {profileProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-2xl transition-all duration-500 group transform hover:scale-[1.02] hover:-translate-y-1"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-0">
                            <h4 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 mb-0">
                              {product.name.split(" ").map((word, index) => {
                                const highlightWords = ["Verified", "Blue", "Tick", "Premium", "Super", "Strong"]
                                const isHighlight = highlightWords.some((hw) => word.includes(hw))
                                return (
                                  <span key={index} className={isHighlight ? "text-purple-600 font-bold" : ""}>
                                    {word}{" "}
                                  </span>
                                )
                              })}
                            </h4>
                            <span className="text-green-500 animate-pulse">✓</span>
                          </div>
                          <p className="text-gray-600 text-sm mb-2 group-hover:text-gray-700 transition-colors duration-300">
                            {product.description}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <ShoppingBag className="h-4 w-4 group-hover:text-purple-500 transition-colors duration-300" />
                              {product.purchases} purchased
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                              4.8 rating
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3">
                          <div className="text-right">
                            <div className="text-2xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors duration-300">
                              €{product.price}
                            </div>
                            <div className="text-sm text-gray-500">per unit</div>
                          </div>
                          <div className="flex gap-2">
                            <Link href={`/products/${product.id}`}>
                              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                                <ShoppingCart className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                                Buy Now
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })()}

          {/* Show other categories if they exist */}
          {(() => {
            const otherProducts = allProducts.filter(
              (product) => !["verified-bm", "unverified-bm", "profile"].includes(product.category),
            )

            if (otherProducts.length === 0) return null

            // Group other products by category
            const groupedProducts = otherProducts.reduce(
              (acc, product) => {
                if (!acc[product.category]) {
                  acc[product.category] = []
                }
                acc[product.category].push(product)
                return acc
              },
              {} as Record<string, typeof otherProducts>,
            )

            return Object.entries(groupedProducts).map(([category, products]) => (
              <div
                key={category}
                className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.01]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">📊</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 capitalize">
                    {category.replace("-", " ")} Products
                  </h3>
                  <Badge className="bg-green-100 text-green-700 border-0 animate-bounce">Professional</Badge>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {products.map((product, index) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-2xl transition-all duration-500 group transform hover:scale-[1.02] hover:-translate-y-1"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-0">
                            <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300 mb-0">
                              {product.name.split(" ").map((word, index) => {
                                const highlightWords = [
                                  "Verified",
                                  "Blue",
                                  "Tick",
                                  "Premium",
                                  "Super",
                                  "Strong",
                                  "Setup",
                                ]
                                const isHighlight = highlightWords.some((hw) => word.includes(hw))
                                return (
                                  <span key={index} className={isHighlight ? "text-green-600 font-bold" : ""}>
                                    {word}{" "}
                                  </span>
                                )
                              })}
                            </h4>
                            <span className="text-green-500 animate-pulse">✓</span>
                          </div>
                          <p className="text-gray-600 text-sm mb-2 group-hover:text-gray-700 transition-colors duration-300">
                            {product.description}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <ShoppingBag className="h-4 w-4 group-hover:text-green-500 transition-colors duration-300" />
                              {product.purchases} purchased
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                              4.7 rating
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3">
                          <div className="text-right">
                            <div className="text-2xl font-bold text-green-600 group-hover:text-green-700 transition-colors duration-300">
                              €{product.price}
                            </div>
                            <div className="text-sm text-gray-500">per unit</div>
                          </div>
                          <div className="flex gap-2">
                            <Link href={`/products/${product.id}`}>
                              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                                <ShoppingCart className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                                Buy Now
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          })()}

          {/* View All Products CTA */}
          <div className="text-center mt-12">
            <Link href="/products">
              <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl transform hover:-translate-y-1 animate-pulse">
                View All Products
                <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
