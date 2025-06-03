"use client"

import { useState, useRef, useEffect, type TouchEvent } from "react"
import SupportingPageLayout from "@/components/layout/supporting-page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Package2, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"
import PageSection from "@/components/page-section"
import SectionHeader from "@/components/ui/section-header"
import { getPackagesListPage, type PackageListPage } from "@/data/packs"
import MobilePackagesCarousel from "@/components/home/mobile-packages-carousel"

export default function PacksPage() {
  // Use media query to detect mobile screens
  const isMobile = useMediaQuery("(max-width: 768px)")

  // State for mobile carousel
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isScrolling, setIsScrolling] = useState(false)

  // Get packs data from centralized source
  const packs: PackageListPage[] = getPackagesListPage()

  // Separate featured packs from regular packs
  const featuredPacks = [packs[2], packs[1]] // Get Premium (index 2) then Advanced (index 1)

  // Handle manual scroll and update active index
  useEffect(() => {
    if (!isMobile) return

    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollPosition = carouselRef.current.scrollLeft
        const cardWidth = carouselRef.current.offsetWidth
        const newIndex = Math.round(scrollPosition / cardWidth)

        // Only update if the index has actually changed
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < packs.length) {
          setActiveIndex(newIndex)
        }
      }
    }

    const handleScrollEnd = () => {
      setIsScrolling(false)
    }

    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll)
      carousel.addEventListener("scrollend", handleScrollEnd)
      return () => {
        carousel.removeEventListener("scroll", handleScroll)
        carousel.removeEventListener("scrollend", handleScrollEnd)
      }
    }
  }, [activeIndex, isMobile, packs.length])

  // Navigate to specific card
  const scrollToCard = (index: number) => {
    if (carouselRef.current) {
      setIsScrolling(true)
      const cardWidth = carouselRef.current.offsetWidth
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      })
      setActiveIndex(index)

      // Set a timeout to ensure isScrolling is reset even if scrollend doesn't fire
      setTimeout(() => {
        setIsScrolling(false)
      }, 500)
    }
  }

  // Navigate to previous card
  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToCard(activeIndex - 1)
    }
  }

  // Navigate to next card
  const handleNext = () => {
    if (activeIndex < packs.length - 1) {
      scrollToCard(activeIndex + 1)
    }
  }

  // Touch handlers for swiping
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && activeIndex < packs.length - 1) {
      handleNext()
    }

    if (isRightSwipe && activeIndex > 0) {
      handlePrev()
    }

    // Reset values
    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <SupportingPageLayout
      title="All Packs"
      subtitle="Bundled solutions for every advertising need"
      showNewsletter={true}
      breadcrumbs={[{ label: "Packs", href: "/packs" }]}
    >
      {/* Title Section */}
      <PageSection className="pt-6 md:pt-8 pb-0">
        <SectionHeader title="Packages" />
      </PageSection>

      {/* Content Section */}
      <PageSection className="pt-0 pb-8">
        <div className="container mx-auto px-4">
          {/* Featured Packs Section (Mobile Only) */}
          {isMobile && featuredPacks.length > 0 && (
            <div className="mb-12 relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full opacity-20 translate-y-1/4 -translate-x-1/4"></div>

              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-md">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold relative">
                  <span className="relative z-10">Recommended For You</span>
                  <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-yellow-200 to-orange-200 opacity-50 rounded-full"></div>
                </h2>
              </div>

              <div className="space-y-4">
                {featuredPacks.map((pack) => (
                  <Card
                    key={pack.id}
                    className="overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex flex-row relative z-10">
                      <div className="relative w-1/3 aspect-square bg-gradient-to-br from-gray-50 to-white overflow-hidden">
                        <Image
                          src={pack.image || "/placeholder.svg"}
                          alt={pack.name}
                          width={250}
                          height={250}
                          className="object-cover p-2 transition-transform duration-300 group-hover:scale-105"
                        />
                        {pack.badge && (
                          <Badge className="absolute top-1 right-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-1.5 py-0.5 border-0">
                            {pack.badge}
                          </Badge>
                        )}
                      </div>
                      <CardContent className="w-2/3 p-3">
                        <h3 className="text-base font-bold mb-1 line-clamp-1 group-hover:text-facebook transition-colors">
                          {pack.name}
                        </h3>
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                          {pack.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {pack.price}
                          </span>
                          <Button
                            asChild
                            size="sm"
                            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 text-white px-2 h-8 shadow-sm"
                          >
                            <Link href={pack.url}>View Pack</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Packs Section Title */}
          <div className="flex items-center gap-3 mb-10 relative z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
              <Package2 className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold relative">
              <span className="relative z-10">{isMobile ? "All Packs" : "Value Packs"}</span>
              <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full"></div>
            </h2>
          </div>

          {/* All Packs Section Content */}
          <div className="relative pt-0">
            {/* Desktop View - Redesigned Layout with Square Images */}
            {!isMobile && (
              <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {packs.map((pack, index) => {
                    const isPremium = pack.name === "GoAds Premium"
                    const isAdvanced = pack.name === "GoAds Advanced"
                    const isElite = pack.name === "GoAds Elite"
                    const isBasic = pack.name === "GoAds Basic"

                    return (
                      <div
                        key={pack.id}
                        className={`relative ${
                          isPremium ? "lg:transform lg:scale-105 lg:z-10" : ""
                        }`}
                      >
                        {pack.badge && (
                          <div className="absolute -top-4 left-0 right-0 flex justify-center z-20">
                            <span
                              className={`${
                                isPremium
                                  ? "bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-amber-900 shadow-xl border border-amber-300"
                                  : "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                              } text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1`}
                            >
                              {isPremium ? "👑" : "⭐"} {pack.badge}
                            </span>
                          </div>
                        )}

                        <Card
                          className={`${
                            isPremium
                              ? "border-2 border-amber-400 shadow-xl bg-gradient-to-br from-amber-50 via-white to-yellow-50 relative overflow-hidden"
                              : isAdvanced
                              ? "border border-blue-200 shadow-md bg-white hover:shadow-lg hover:border-blue-300"
                              : isElite
                              ? "border border-purple-200 shadow-md bg-white hover:shadow-lg hover:border-purple-300"
                              : "border border-gray-200 shadow-md bg-white hover:shadow-lg"
                          } rounded-xl transition-all duration-300 h-full group ${
                            isPremium
                              ? "hover:shadow-amber-200/50 hover:shadow-2xl"
                              : "hover:transform hover:scale-102"
                          }`}
                        >
                          {/* Premium Background Pattern */}
                          {isPremium && (
                            <div className="absolute inset-0 opacity-5">
                              <div className="absolute top-2 right-2 text-amber-400">
                                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                              </div>
                              <div className="absolute bottom-2 left-2 text-amber-400">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                              </div>
                            </div>
                          )}

                          {/* Square Image Container - Perfect for 400x400 images */}
                          <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-white overflow-hidden rounded-t-xl">
                            <Image
                              src={pack.image || "/placeholder.svg"}
                              alt={pack.name}
                              width={400}
                              height={400}
                              className="object-cover transition-transform duration-500 group-hover:scale-105 p-4"
                            />
                          </div>

                          {/* Header Section - Inspired by landing page */}
                          <div
                            className={`${
                              isPremium ? "p-5 pb-3" : "p-4 pb-3"
                            } text-center relative`}
                          >
                            <h3
                              className={`${
                                isPremium ? "text-base" : "text-sm"
                              } font-semibold mb-2 ${
                                isPremium ? "text-amber-700" : "text-gray-600"
                              } uppercase tracking-wide relative z-10`}
                            >
                              {pack.name.replace("GoAds ", "")}
                            </h3>

                            <div className={`${isPremium ? "mb-4" : "mb-3"} relative z-10`}>
                              <span
                                className={`${isPremium ? "text-3xl" : "text-2xl"} font-bold ${
                                  isPremium
                                    ? "bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent"
                                    : "text-gray-900"
                                }`}
                              >
                                {pack.price}
                              </span>
                              <span className="text-gray-500 text-sm ml-1">/ one-time</span>
                            </div>

                            <p className={`text-gray-600 text-sm leading-relaxed relative z-10`}>
                              {pack.description}
                            </p>
                          </div>

                          {/* Features Section */}
                          <CardContent
                            className={`${isPremium ? "px-5 pb-5" : "px-4 pb-4"} relative z-10`}
                          >
                            <ul
                              className={`${
                                isPremium ? "space-y-2.5 mb-6" : "space-y-2 mb-5"
                              } min-h-[100px]`}
                            >
                              {pack.products.slice(0, 3).map((product, i) => (
                                <li key={i} className="flex items-start">
                                  <div
                                    className={`${isPremium ? "w-4 h-4" : "w-3 h-3"} rounded-full ${
                                      isPremium
                                        ? "bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 shadow-md"
                                        : "bg-gradient-to-r from-green-400 to-blue-500"
                                    } flex-shrink-0 flex items-center justify-center mt-0.5 mr-2`}
                                  >
                                    <svg
                                      className={`${
                                        isPremium ? "h-2.5 w-2.5" : "h-2 w-2"
                                      } text-white`}
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                  </div>
                                  <span className={`text-gray-700 text-sm leading-relaxed`}>
                                    {product.role}
                                  </span>
                                </li>
                              ))}
                              {pack.products.length > 3 && (
                                <li className={`text-sm text-gray-500 italic ml-5`}>
                                  +{pack.products.length - 3} more products
                                </li>
                              )}
                            </ul>

                            <Button
                              asChild
                              className={`w-full ${
                                isPremium ? "py-2.5" : "py-2"
                              } font-semibold text-sm rounded-lg transition-all duration-200 ${
                                isPremium
                                  ? "bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 border border-amber-400"
                                  : isAdvanced
                                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                                  : isElite
                                  ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                                  : "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white"
                              }`}
                            >
                              <Link href={pack.url} className="flex items-center justify-center">
                                {isPremium ? "👑" : "📦"} View Pack
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Mobile Carousel View */}
            {isMobile && <MobilePackagesCarousel packages={packs} />}
          </div>
        </div>
      </PageSection>

      <PageSection className="py-8 md:py-16">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full opacity-20 translate-y-1/2 -translate-x-1/4"></div>

          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div>
              <p className="text-gray-600 mb-4 text-center md:text-left">
                We offer tailored packages for businesses with specific requirements. Contact our
                team to discuss your needs.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 text-white shadow-sm"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </SupportingPageLayout>
  )
}
