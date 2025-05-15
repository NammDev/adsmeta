"use client"

import { useState, useRef, useEffect, type TouchEvent } from "react"
import SupportingPageLayout from "@/components/supporting-page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Package2, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

// Pack type definition
interface Pack {
  id: string
  name: string
  description: string
  price: string
  features: string[]
  image: string
  badge?: string
  url: string
  featured?: boolean
}

export default function PacksPage() {
  // Use media query to detect mobile screens
  const isMobile = useMediaQuery("(max-width: 768px)")

  // State for mobile carousel
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isScrolling, setIsScrolling] = useState(false)

  // Reduced number of packs (3-5) with featured flags
  const packs: Pack[] = [
    {
      id: "starter-pack",
      name: "Starter Pack",
      description: "Perfect for beginners starting with Facebook ads",
      price: "€199",
      features: ["1 Verified Business Manager", "1 Ad Account", "Basic setup guide", "Email support"],
      image: "/facebook-starter-pack.png",
      badge: "Popular",
      url: "/starter-pack",
      featured: true,
    },
    {
      id: "pro-pack",
      name: "Pro Pack",
      description: "For growing businesses with established ad campaigns",
      price: "€399",
      features: [
        "1 Verified BM5 with $250 limit",
        "3 Ad Accounts",
        "Advanced setup guide",
        "Priority email support",
        "1 month consultation",
      ],
      image: "/facebook-ads-success-graph.png",
      badge: "Best Value",
      url: "/pro-pack",
      featured: true,
    },
    {
      id: "agency-pack",
      name: "Agency Pack",
      description: "Complete solution for marketing agencies managing multiple clients",
      price: "€799",
      features: [
        "1 Unlimited Verified BM5",
        "5 Ad Accounts",
        "Agency setup guide",
        "Priority support",
        "3 months consultation",
        "Account strategy review",
      ],
      image: "/facebook-agency-pack.png",
      badge: "Premium",
      url: "/agency-pack",
    },
    {
      id: "business-complete-pack",
      name: "Business Complete Pack",
      description: "All-in-one solution for established businesses",
      price: "€499",
      features: [
        "1 Verified BM5 Limited",
        "2 USA Profiles",
        "1 Aged Reinstated Page",
        "Advanced setup assistance",
        "Priority support",
        "2 months consultation",
      ],
      image: "/generic-social-media-bundle.png",
      url: "/business-complete-pack",
    },
  ]

  // Separate featured packs from regular packs
  const featuredPacks = packs.filter((pack) => pack.featured)
  const regularPacks = packs.filter((pack) => !pack.featured)

  // Handle manual scroll and update active index
  useEffect(() => {
    if (!isMobile) return

    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollPosition = carouselRef.current.scrollLeft
        const cardWidth = carouselRef.current.offsetWidth
        const newIndex = Math.round(scrollPosition / cardWidth)

        // Only update if the index has actually changed
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < regularPacks.length) {
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
  }, [activeIndex, isMobile, regularPacks.length])

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
    if (activeIndex < regularPacks.length - 1) {
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

    if (isLeftSwipe && activeIndex < regularPacks.length - 1) {
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
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Featured Packs Section (Mobile Only) */}
          {isMobile && featuredPacks.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-yellow-500" />
                <h2 className="text-xl font-bold">Recommended For You</h2>
              </div>

              <div className="space-y-4">
                {featuredPacks.map((pack) => (
                  <Card
                    key={pack.id}
                    className="overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-md bg-gradient-to-r from-blue-50 to-white"
                  >
                    <div className="flex flex-row">
                      <div className="relative w-1/3 aspect-square bg-gray-100">
                        <Image
                          src={pack.image || "/placeholder.svg"}
                          alt={pack.name}
                          fill
                          className="object-cover p-2"
                        />
                        {pack.badge && (
                          <Badge className="absolute top-1 right-1 bg-facebook text-white text-xs px-1.5 py-0.5">
                            {pack.badge}
                          </Badge>
                        )}
                      </div>
                      <CardContent className="w-2/3 p-3">
                        <h3 className="text-base font-bold mb-1 line-clamp-1">{pack.name}</h3>
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">{pack.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-facebook">{pack.price}</span>
                          <Button asChild size="sm" className="bg-facebook hover:bg-facebook/90 px-2 h-8">
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

          {/* All Packs Section */}
          <div className="flex items-center gap-2 mb-4">
            <Package2 className="h-6 w-6 text-facebook" />
            <h2 className="text-2xl font-bold">{isMobile ? "All Packs" : "Value Packs"}</h2>
          </div>

          {/* Desktop View - Original Layout */}
          {!isMobile && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packs.map((pack) => (
                <Card
                  key={pack.id}
                  className="overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-video bg-gray-100">
                    <Image src={pack.image || "/placeholder.svg"} alt={pack.name} fill className="object-cover" />
                    {pack.badge && (
                      <Badge className="absolute top-3 right-3 bg-facebook text-white px-3 py-1">{pack.badge}</Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{pack.name}</h3>
                    <p className="text-gray-600 mb-4">{pack.description}</p>

                    <ul className="mb-6 space-y-2">
                      {pack.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-facebook mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-2xl font-bold text-facebook">{pack.price}</span>
                      <Button asChild className="bg-facebook hover:bg-facebook/90">
                        <Link href={pack.url}>View Pack</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Mobile View - Carousel Layout (like on landing page) */}
          {isMobile && (
            <div className="relative">
              {/* Mobile Carousel */}
              <div
                ref={carouselRef}
                className="flex overflow-x-scroll scrollbar-hide touch-pan-x"
                style={{
                  scrollSnapType: "x mandatory",
                  WebkitOverflowScrolling: "touch",
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {regularPacks.map((pack) => (
                  <div
                    key={pack.id}
                    className="min-w-full w-full flex-shrink-0 px-4"
                    style={{ scrollSnapAlign: "center" }}
                  >
                    <Card className="overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg">
                      <div className="relative aspect-video bg-gray-100">
                        <Image src={pack.image || "/placeholder.svg"} alt={pack.name} fill className="object-cover" />
                        {pack.badge && (
                          <Badge className="absolute top-3 right-3 bg-facebook text-white px-3 py-1">
                            {pack.badge}
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{pack.name}</h3>
                        <p className="text-gray-600 mb-4">{pack.description}</p>

                        <ul className="mb-6 space-y-2">
                          {pack.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <svg
                                className="h-5 w-5 text-facebook mr-2 mt-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-2xl font-bold text-facebook">{pack.price}</span>
                          <Button asChild className="bg-facebook hover:bg-facebook/90">
                            <Link href={pack.url}>View Pack</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md disabled:opacity-30 z-10"
                aria-label="Previous package"
              >
                <ChevronLeft className="h-6 w-6 text-facebook" />
              </button>

              <button
                onClick={handleNext}
                disabled={activeIndex === regularPacks.length - 1}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md disabled:opacity-30 z-10"
                aria-label="Next package"
              >
                <ChevronRight className="h-6 w-6 text-facebook" />
              </button>

              {/* Pagination Indicators */}
              <div className="flex justify-center mt-6 gap-2">
                {regularPacks.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToCard(index)}
                    className="relative h-2.5 rounded-full bg-gray-300 overflow-hidden"
                    style={{
                      width: activeIndex === index ? "1.5rem" : "0.625rem",
                      transition: "width 0.3s ease-in-out",
                    }}
                    aria-label={`Go to package ${index + 1}`}
                  >
                    <span
                      className="absolute inset-0 bg-facebook rounded-full"
                      style={{
                        opacity: activeIndex === index ? 1 : 0,
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </SupportingPageLayout>
  )
}
