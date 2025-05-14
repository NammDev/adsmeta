"use client"

import { useState, useRef, useEffect, type TouchEvent } from "react"
import { Badge } from "@/components/ui/badge"
import ProductCard from "@/components/product-card"
import { useMediaQuery } from "@/hooks/use-media-query"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function PackagesSection() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [activeIndex, setActiveIndex] = useState(1) // Start with Pro Pack (index 1)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isScrolling, setIsScrolling] = useState(false)

  const packages = [
    {
      title: "Starter Pack",
      description: "Perfect for beginners",
      price: 50,
      features: ["1 Unverified BM (€10, code 5)", "1 Via XMDT Asia (€25, code 7)", "1 Pixel (€15)", "7-Day Support"],
      href: "/starter-pack",
      isPopular: false,
    },
    {
      title: "Pro Pack",
      description: "Scale your campaigns",
      price: 150,
      features: [
        "1 Verified BM (€80, code 1)",
        "2 Via XMDT (1 Asia €25, 1 USA €40)",
        "1 Pixel (€15)",
        "7-Day Warranty",
      ],
      href: "/pro-pack",
      isPopular: true,
    },
    {
      title: "Agency Pack",
      description: "For high-ROAS campaigns",
      price: 400,
      features: [
        "1 Verified BM5 Unlimited (€350, code 4)",
        "2 Via XMDT USA (€40 x 2, code 9)",
        "1 Pixel (€15)",
        "14-Day Warranty",
      ],
      href: "/agency-pack",
      isPopular: false,
    },
  ]

  // Initialize carousel to show Pro Pack on first render
  useEffect(() => {
    if (isMobile && carouselRef.current) {
      // Wait a bit for the DOM to be fully rendered
      setTimeout(() => {
        if (carouselRef.current) {
          const cardWidth = carouselRef.current.offsetWidth
          carouselRef.current.scrollLeft = cardWidth // Scroll to second card (Pro Pack)
        }
      }, 100)
    }
  }, [isMobile])

  // Handle manual scroll and update active index
  useEffect(() => {
    const handleScroll = () => {
      if (isMobile && carouselRef.current) {
        const scrollPosition = carouselRef.current.scrollLeft
        const cardWidth = carouselRef.current.offsetWidth
        const newIndex = Math.round(scrollPosition / cardWidth)

        // Only update if the index has actually changed
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < packages.length) {
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
  }, [activeIndex, isMobile, packages.length])

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
    if (activeIndex < packages.length - 1) {
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

    if (isLeftSwipe && activeIndex < packages.length - 1) {
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
    <section id="packages" className="py-10 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-3 md:mb-4">Packages</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Choose the perfect solution to launch and scale your Facebook advertising campaigns.
          </p>
        </div>

        {isMobile ? (
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
              {packages.map((pkg, index) => (
                <div
                  key={pkg.title}
                  className="min-w-full w-full flex-shrink-0 px-4"
                  style={{ scrollSnapAlign: "center" }}
                >
                  <ProductCard
                    title={pkg.title}
                    description={pkg.description}
                    price={pkg.price}
                    features={pkg.features}
                    href={pkg.href}
                    isPopular={pkg.isPopular}
                  />
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
              disabled={activeIndex === packages.length - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md disabled:opacity-30 z-10"
              aria-label="Next package"
            >
              <ChevronRight className="h-6 w-6 text-facebook" />
            </button>

            {/* Pagination Indicators - Fixed Animation */}
            <div className="flex justify-center mt-6 gap-2">
              {packages.map((_, index) => (
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
        ) : (
          // Desktop Grid Layout (unchanged)
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {packages.map((pkg) => (
              <ProductCard
                key={pkg.title}
                title={pkg.title}
                description={pkg.description}
                price={pkg.price}
                features={pkg.features}
                href={pkg.href}
                isPopular={pkg.isPopular}
              />
            ))}
          </div>
        )}

        <div className="mt-8 sm:mt-12 bg-facebook/10 text-facebook text-center py-4 sm:py-6 px-4 sm:px-8 rounded-lg">
          <p className="text-base sm:text-lg font-medium">
            First 50 Buyers Get 10% Off! Use Code: <span className="font-bold">META10</span>
          </p>
        </div>
      </div>
    </section>
  )
}
