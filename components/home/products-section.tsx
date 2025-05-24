"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, ShoppingBag, ShoppingCart } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useCart } from "@/context/cart-context"
import { getProductSectionItems, type ProductSectionItem } from "@/data/products"

interface ProductsSectionProps {
  showHeader?: boolean
  showViewAllButton?: boolean
  maxProductsPerCategory?: number
}

export default function ProductsSection({
  showHeader = true,
  showViewAllButton = true,
  maxProductsPerCategory,
}: ProductsSectionProps) {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const { addItem, openCart } = useCart()

  // Get products data from centralized source
  const allProducts = getProductSectionItems()

  // Group products by category for the new UI
  let businessManagerProducts = allProducts.filter(
    (product) => product.category === "verified-bm" || product.category === "unverified-bm",
  )

  let profileProducts = allProducts.filter((product) => product.category === "profile")

  let otherProducts = allProducts.filter(
    (product) => !["verified-bm", "unverified-bm", "profile"].includes(product.category),
  )

  // Limit products per category if specified (for landing page)
  if (maxProductsPerCategory) {
    businessManagerProducts = businessManagerProducts.slice(0, maxProductsPerCategory)
    profileProducts = profileProducts.slice(0, maxProductsPerCategory)
    otherProducts = otherProducts.slice(0, maxProductsPerCategory)
  }

  // Group other products by category
  const groupedOtherProducts = otherProducts.reduce(
    (acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = []
      }
      acc[product.category].push(product)
      return acc
    },
    {} as Record<string, typeof otherProducts>,
  )

  // Add this function to handle adding products to cart
  const handleAddToCart = (product: ProductSectionItem) => {
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

  // Helper function to highlight keywords in product names
  const highlightKeywords = (name: string) => {
    const highlightWords = ["Verified", "Blue", "Tick", "Reinstated", "Super", "Strong", "Premium", "Setup"]
    return name.split(" ").map((word, index) => {
      const isHighlight = highlightWords.some((hw) => word.includes(hw))
      return (
        <span key={index} className={isHighlight ? "text-blue-600 font-bold" : ""}>
          {word}{" "}
        </span>
      )
    })
  }

  return (
    <section id="products" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        {showHeader && (
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
        )}

        {/* Category-based Product Listing */}
        <div className="space-y-8">
          {/* Business Manager Category */}
          {businessManagerProducts.length > 0 && (
            <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.01]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">🏢</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Business Managers</h3>
                <Badge className="bg-blue-100 text-blue-700 border-0 animate-bounce hover:bg-transparent">
                  Premium Quality
                </Badge>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {businessManagerProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-2xl transition-all duration-500 group transform hover:scale-[1.02] hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Mobile Layout */}
                    <div className="flex flex-col gap-3 md:hidden">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-0">
                            {highlightKeywords(product.name)}
                          </h4>
                        </div>
                        <p className="text-gray-600 text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300">
                          {product.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <ShoppingBag className="h-4 w-4 group-hover:text-blue-500 transition-colors duration-300" />
                            {product.purchases} purchased
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-row items-center justify-between gap-3">
                        <div className="text-left">
                          <div className="text-xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                            €{product.price}
                          </div>
                          <div className="text-xs text-gray-500">per unit</div>
                        </div>
                        <div className="flex gap-2">
                          <Link href={`/products/${product.id}`}>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-1.5 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg text-sm"
                            >
                              Buy Now
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:flex md:flex-row md:items-center justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-0">
                            {highlightKeywords(product.name)}
                          </h4>
                        </div>
                        <p className="text-gray-600 text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300">
                          {product.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <ShoppingBag className="h-4 w-4 group-hover:text-blue-500 transition-colors duration-300" />
                            {product.purchases} purchased
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-row items-center gap-3">
                        <div className="text-right">
                          <div className="text-xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                            €{product.price}
                          </div>
                          <div className="text-xs text-gray-500">per unit</div>
                        </div>
                        <div className="flex gap-2">
                          <Link href={`/products/${product.id}`}>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-1.5 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg text-sm"
                            >
                              <ShoppingCart className="h-3 w-3 mr-1.5 group-hover:animate-bounce" />
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
          )}

          {/* Profile Account Category */}
          {profileProducts.length > 0 && (
            <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.01]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">👤</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Profile Accounts</h3>
                <Badge className="bg-purple-100 text-purple-700 border-0 animate-bounce hover:bg-transparent">
                  Enterprise Ready
                </Badge>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {profileProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-2xl transition-all duration-500 group transform hover:scale-[1.02] hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Mobile Layout */}
                    <div className="flex flex-col gap-3 md:hidden">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 mb-0">
                            {highlightKeywords(product.name)}
                          </h4>
                        </div>
                        <p className="text-gray-600 text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300">
                          {product.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <ShoppingBag className="h-4 w-4 group-hover:text-purple-500 transition-colors duration-300" />
                            {product.purchases} purchased
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-row items-center justify-between gap-3">
                        <div className="text-left">
                          <div className="text-xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors duration-300">
                            €{product.price}
                          </div>
                          <div className="text-xs text-gray-500">per unit</div>
                        </div>
                        <div className="flex gap-2">
                          <Link href={`/products/${product.id}`}>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-1.5 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg text-sm"
                            >
                              Buy Now
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:flex md:flex-row md:items-center justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 mb-0">
                            {highlightKeywords(product.name)}
                          </h4>
                        </div>
                        <p className="text-gray-600 text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300">
                          {product.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <ShoppingBag className="h-4 w-4 group-hover:text-purple-500 transition-colors duration-300" />
                            {product.purchases} purchased
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-row items-center gap-3">
                        <div className="text-right">
                          <div className="text-xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors duration-300">
                            €{product.price}
                          </div>
                          <div className="text-xs text-gray-500">per unit</div>
                        </div>
                        <div className="flex gap-2">
                          <Link href={`/products/${product.id}`}>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-1.5 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg text-sm"
                            >
                              <ShoppingCart className="h-3 w-3 mr-1.5 group-hover:animate-bounce" />
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
          )}

          {/* Show other categories if they exist */}
          {Object.entries(groupedOtherProducts).map(([category, products]) => (
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
                <Badge className="bg-green-100 text-green-700 border-0 animate-bounce hover:bg-transparent">
                  Professional
                </Badge>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-2xl transition-all duration-500 group transform hover:scale-[1.02] hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Mobile Layout */}
                    <div className="flex flex-col gap-3 md:hidden">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300 mb-0">
                            {highlightKeywords(product.name)}
                          </h4>
                        </div>
                        <p className="text-gray-600 text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300">
                          {product.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <ShoppingBag className="h-4 w-4 group-hover:text-green-500 transition-colors duration-300" />
                            {product.purchases} purchased
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-row items-center justify-between gap-3">
                        <div className="text-left">
                          <div className="text-xl font-bold text-green-600 group-hover:text-green-700 transition-colors duration-300">
                            €{product.price}
                          </div>
                          <div className="text-xs text-gray-500">per unit</div>
                        </div>
                        <div className="flex gap-2">
                          <Link href={`/products/${product.id}`}>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-1.5 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg text-sm"
                            >
                              Buy Now
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:flex md:flex-row md:items-center justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300 mb-0">
                            {highlightKeywords(product.name)}
                          </h4>
                        </div>
                        <p className="text-gray-600 text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300">
                          {product.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <ShoppingBag className="h-4 w-4 group-hover:text-green-500 transition-colors duration-300" />
                            {product.purchases} purchased
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-row items-center gap-3">
                        <div className="text-right">
                          <div className="text-xl font-bold text-green-600 group-hover:text-green-700 transition-colors duration-300">
                            €{product.price}
                          </div>
                          <div className="text-xs text-gray-500">per unit</div>
                        </div>
                        <div className="flex gap-2">
                          <Link href={`/products/${product.id}`}>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-1.5 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg text-sm"
                            >
                              <ShoppingCart className="h-3 w-3 mr-1.5 group-hover:animate-bounce" />
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
          ))}

          {/* View All Products CTA */}
          {showViewAllButton && (
            <div className="text-center mt-12">
              <Link href="/products">
                <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl transform hover:-translate-y-1 animate-pulse">
                  View All Products
                  <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
