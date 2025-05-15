"use client"

import { useState, useEffect } from "react"
import SupportingPageLayout from "@/components/supporting-page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"

// Product type definition
interface Product {
  id: string
  name: string
  description: string
  price: string
  category: string
  image: string
  badge?: string
  url: string
}

// Category type definition
interface Category {
  id: string
  name: string
  count: number
}

export default function ProductsPage() {
  // Add state for active filter and pagination
  const [activeFilter, setActiveFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 8 // 2 rows of 4 products

  // Get cart functions
  const { addItem, openCart } = useCart() || { addItem: null, openCart: null }
  const [addToCart, setAddToCart] = useState<((product: Product) => void) | null>(null)

  useEffect(() => {
    if (addItem && openCart) {
      setAddToCart(() => (product: Product) => {
        if (!product) return // Guard against null product

        try {
          // Extract numeric price from string (e.g., "€80" -> 80)
          // Handle different price formats safely
          const priceString = product.price || "0"
          const numericPrice = Number.parseInt(priceString.replace(/[^0-9]/g, "")) || 0

          addItem({
            id: product.id || `product-${Date.now()}`, // Fallback ID if missing
            name: product.name || "Unnamed Product",
            price: numericPrice,
            quantity: 1,
            image: product.image || "/placeholder-32px.png",
            category: product.category || "other",
          })
          openCart() // Open the cart drawer when adding an item
        } catch (error) {
          console.error("Error adding item to cart:", error)
          // Could add user-facing error notification here
        }
      })
    } else {
      console.warn("Cart functionality not available")
      setAddToCart(null)
    }
  }, [addItem, openCart])

  // All products data
  const products: Product[] = [
    {
      id: "verified-bm-1",
      name: "Verified BM",
      description: "Add your agency to BM and launch ads",
      price: "€80",
      category: "business-manager",
      image: "/facebook-verified-business-manager.png",
      url: "/verified-bm",
    },
    {
      id: "verified-bm-2",
      name: "Verified BM1 Limited",
      description: "Verified BM1 with $250 limit",
      price: "€180",
      category: "business-manager",
      image: "/facebook-business-manager-icon.png",
      badge: "Popular",
      url: "/bm1-250-limit",
    },
    {
      id: "verified-bm-3",
      name: "Verified BM5 Limited",
      description: "Verified BM5 with $250 limit and 5 ad accounts",
      price: "€260",
      category: "business-manager",
      image: "/verified-facebook-business-manager-icon.png",
      url: "/verified-bm5-limited",
    },
    {
      id: "verified-bm-4",
      name: "Unlimited Verified BM5",
      description: "Unlimited verified BM5 with 5 ad accounts",
      price: "€350",
      category: "business-manager",
      image: "/abstract-facebook-verified-business-manager.png",
      badge: "Premium",
      url: "/unlimited-verified-bm5",
    },
    {
      id: "unverified-bm-1",
      name: "Unverified BM",
      description: "Unverified BM for ad account",
      price: "€10",
      category: "unverified-bm",
      image: "/abstract-facebook-business-manager.png",
      url: "/unverified-bm",
    },
    {
      id: "unverified-bm-2",
      name: "Unverified Recovered BM",
      description: "Unverified recovered BM for ad account",
      price: "€30",
      category: "unverified-bm",
      image: "/facebook-ads-setup.png",
      url: "/unverified-recovered-bm",
    },
    {
      id: "profile-1",
      name: "Asia Reinstated 2 Green Line",
      description: "Asia reinstated profile with 2 green line tick (verified 1 time)",
      price: "€25",
      category: "profiles",
      image: "/facebook-ads-dashboard-beginners.png",
      url: "/asia-reinstated-2gl",
    },
    {
      id: "profile-2",
      name: "Asia Reinstated 902 3 Green Line",
      description: "Asia reinstated 902 profile with 3 green line tick (verified 2 times)",
      price: "€35",
      category: "profiles",
      image: "/facebook-ads-dashboard.png",
      url: "/asia-reinstated-3gl",
    },
    {
      id: "profile-3",
      name: "USA Reinstated 2 Green Line",
      description: "USA reinstated profile with 2 green line tick (verified 1 time)",
      price: "€40",
      category: "profiles",
      image: "/facebook-pixel-icon.png",
      url: "/usa-reinstated-2gl",
    },
    {
      id: "profile-4",
      name: "USA Reinstated 902 3 Green Line",
      description: "USA reinstated 902 profile with 3 green line tick (verified 2 times)",
      price: "€50",
      category: "profiles",
      badge: "Best Value",
      image: "/facebook-pixel-tracking-icon.png",
      url: "/usa-reinstated-3gl",
    },
    {
      id: "page-1",
      name: "Aged Reinstated Page",
      description: "Aged reinstated Facebook page",
      price: "€30",
      category: "pages",
      image: "/growing-business-icon.png",
      url: "/aged-reinstated-page",
    },
    // Adding more dummy products to demonstrate pagination
    {
      id: "verified-bm-5",
      name: "Verified BM Premium",
      description: "Premium verified business manager with extended features",
      price: "€120",
      category: "business-manager",
      image: "/facebook-verified-business-manager.png",
      url: "/verified-bm-premium",
    },
    {
      id: "verified-bm-6",
      name: "Verified BM2 Limited",
      description: "Verified BM2 with $500 limit",
      price: "€220",
      category: "business-manager",
      image: "/facebook-business-manager-icon.png",
      url: "/bm2-500-limit",
    },
    {
      id: "verified-bm-7",
      name: "Verified BM10 Limited",
      description: "Verified BM10 with $250 limit and 10 ad accounts",
      price: "€320",
      category: "business-manager",
      image: "/verified-facebook-business-manager-icon.png",
      url: "/verified-bm10-limited",
    },
    {
      id: "verified-bm-8",
      name: "Unlimited Verified BM10",
      description: "Unlimited verified BM10 with 10 ad accounts",
      price: "€450",
      category: "business-manager",
      image: "/abstract-facebook-verified-business-manager.png",
      badge: "Premium Plus",
      url: "/unlimited-verified-bm10",
    },
    {
      id: "unverified-bm-3",
      name: "Unverified BM Plus",
      description: "Enhanced unverified BM for ad account",
      price: "€15",
      category: "unverified-bm",
      image: "/abstract-facebook-business-manager.png",
      url: "/unverified-bm-plus",
    },
    {
      id: "profile-5",
      name: "Europe Reinstated 2 Green Line",
      description: "Europe reinstated profile with 2 green line tick",
      price: "€45",
      category: "profiles",
      image: "/facebook-ads-dashboard-beginners.png",
      url: "/europe-reinstated-2gl",
    },
    {
      id: "profile-6",
      name: "Europe Reinstated 3 Green Line",
      description: "Europe reinstated profile with 3 green line tick",
      price: "€55",
      category: "profiles",
      image: "/facebook-ads-dashboard.png",
      url: "/europe-reinstated-3gl",
    },
    {
      id: "page-2",
      name: "Premium Reinstated Page",
      description: "Premium aged reinstated Facebook page",
      price: "€45",
      category: "pages",
      image: "/growing-business-icon.png",
      badge: "Premium",
      url: "/premium-reinstated-page",
    },
  ]

  // Calculate category counts and create category data
  const categoryCounts = products.reduce(
    (acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const categories: Category[] = [
    { id: "all", name: "All Products", count: products.length },
    { id: "business-manager", name: "Business Manager", count: categoryCounts["business-manager"] || 0 },
    { id: "unverified-bm", name: "Unverified BM", count: categoryCounts["unverified-bm"] || 0 },
    { id: "profiles", name: "Profiles", count: categoryCounts["profiles"] || 0 },
    { id: "pages", name: "Pages", count: categoryCounts["pages"] || 0 },
  ]

  // Filter products based on active category
  const filteredProducts =
    activeFilter === "all" ? products : products.filter((product) => product.category === activeFilter)

  // Reset to first page when changing filters
  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId)
    setCurrentPage(1)
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  // Generate page numbers array
  const pageNumbers = []
  const maxPageNumbersToShow = 5

  if (totalPages <= maxPageNumbersToShow) {
    // If we have 5 or fewer pages, show all page numbers
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i)
    }
  } else {
    // Always include first page
    pageNumbers.push(1)

    // Calculate start and end of page numbers to show
    let startPage = Math.max(2, currentPage - 1)
    let endPage = Math.min(totalPages - 1, currentPage + 1)

    // Adjust if we're near the beginning
    if (currentPage <= 2) {
      endPage = 4
    }

    // Adjust if we're near the end
    if (currentPage >= totalPages - 2) {
      startPage = totalPages - 3
    }

    // Add ellipsis after first page if needed
    if (startPage > 2) {
      pageNumbers.push("ellipsis-start")
    }

    // Add middle pages
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }

    // Add ellipsis before last page if needed
    if (endPage < totalPages - 1) {
      pageNumbers.push("ellipsis-end")
    }

    // Always include last page
    pageNumbers.push(totalPages)
  }

  return (
    <SupportingPageLayout
      title="All Products"
      subtitle="Browse our complete collection of Facebook advertising solutions"
      showNewsletter={true}
      breadcrumbs={[{ label: "Products", href: "/products" }]}
    >
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-700">
                Showing {filteredProducts.length} of {products.length} products
              </span>
              <span className="text-xs text-gray-500">Select category</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  size="sm"
                  className={`transition-all ${
                    activeFilter === category.id
                      ? "bg-facebook text-white hover:bg-facebook/90"
                      : "text-gray-700 hover:border-facebook hover:text-facebook"
                  }`}
                  onClick={() => handleFilterChange(category.id)}
                >
                  {activeFilter === category.id && <CheckCircle className="mr-1 h-3.5 w-3.5" />}
                  {category.name}
                  <span className="ml-1.5 text-xs rounded-full px-1.5 py-0.5 bg-gray-100 text-gray-600">
                    {category.count}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {currentProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="relative aspect-[4/3] bg-gray-100">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover p-4"
                      />
                      {product.badge && (
                        <Badge className="absolute top-2 right-2 bg-facebook text-white">{product.badge}</Badge>
                      )}
                    </div>
                    <CardContent className="p-3 sm:p-5">
                      <h3 className="text-sm sm:text-base font-semibold mb-1 line-clamp-1">{product.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2 hidden sm:block">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm sm:text-lg font-bold text-facebook">{product.price}</span>
                        <div className="flex gap-1 sm:gap-2">
                          {addToCart && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="px-1 sm:px-2 h-8 w-8 sm:h-auto sm:w-auto"
                              onClick={() => addToCart(product)}
                              title="Add to cart"
                            >
                              <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4" />
                            </Button>
                          )}
                          <Button
                            asChild
                            size="sm"
                            className="bg-facebook hover:bg-facebook/90 px-2 sm:px-3 h-8 sm:h-auto"
                          >
                            <Link href={product.url}>View</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <nav className="flex items-center gap-1" aria-label="Pagination">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9"
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      aria-label="Previous page"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>

                    {pageNumbers.map((pageNumber, index) => {
                      if (pageNumber === "ellipsis-start" || pageNumber === "ellipsis-end") {
                        return (
                          <span key={`ellipsis-${index}`} className="px-3 py-2 text-sm text-gray-500">
                            ...
                          </span>
                        )
                      }

                      return (
                        <Button
                          key={`page-${pageNumber}`}
                          variant={currentPage === pageNumber ? "default" : "outline"}
                          size="icon"
                          className={`h-9 w-9 ${
                            currentPage === pageNumber ? "bg-facebook text-white hover:bg-facebook/90" : ""
                          }`}
                          onClick={() => setCurrentPage(pageNumber as number)}
                          aria-label={`Page ${pageNumber}`}
                          aria-current={currentPage === pageNumber ? "page" : undefined}
                        >
                          {pageNumber}
                        </Button>
                      )
                    })}

                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9"
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      aria-label="Next page"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-8 sm:py-16">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔍</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">No products found</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                We couldn't find any products matching your selected category.
              </p>
              <Button onClick={() => handleFilterChange("all")} size="sm" className="text-sm">
                View All Products
              </Button>
            </div>
          )}
        </div>
      </section>
    </SupportingPageLayout>
  )
}
