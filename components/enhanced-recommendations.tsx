"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"

// Types for our recommendations
type ProductType = "pack" | "verified-bm" | "unverified-bm" | "via" | "pixel"

interface RecommendedItem {
  id: string
  name: string
  type: ProductType
  description: string
  price: number
  imageSrc: string
  href: string
  badge?: string
}

interface EnhancedRecommendationsProps {
  currentPackId: string
  className?: string
}

export default function EnhancedRecommendations({ currentPackId, className }: EnhancedRecommendationsProps) {
  const [scrollPosition, setScrollPosition] = useState(0)

  // This would typically come from an API or data store
  // Here we're hardcoding for demonstration
  const allRecommendations: Record<string, RecommendedItem[]> = {
    "starter-pack": [
      {
        id: "pro-pack",
        name: "Pro Pack",
        type: "pack",
        description: "Scale your campaigns with verified accounts",
        price: 150,
        imageSrc: "/abstract-facebook-verified-business-manager.png",
        href: "/pro-pack",
        badge: "Upgrade",
      },
      {
        id: "verified-bm-1",
        name: "Verified BM",
        type: "verified-bm",
        description: "Launch ads instantly with verified account",
        price: 80,
        imageSrc: "/verified-facebook-business-manager-icon.png",
        href: "/#products",
      },
      {
        id: "via-xmdt-usa",
        name: "Via XMDT USA",
        type: "via",
        description: "Perfect for international advertising",
        price: 40,
        imageSrc: "/facebook-xmdt-usa.png",
        href: "/#products",
      },
      {
        id: "agency-pack",
        name: "Agency Pack",
        type: "pack",
        description: "For high-ROAS campaigns and agencies",
        price: 400,
        imageSrc: "/facebook-agency-pack.png",
        href: "/agency-pack",
      },
      {
        id: "pixel-advanced",
        name: "Advanced Pixel",
        type: "pixel",
        description: "Enhanced tracking with advanced conversion optimization",
        price: 25,
        imageSrc: "/facebook-pixel-icon.png",
        href: "/#products",
      },
    ],
    "pro-pack": [
      {
        id: "agency-pack",
        name: "Agency Pack",
        type: "pack",
        description: "For high-ROAS campaigns and agencies",
        price: 400,
        imageSrc: "/facebook-agency-pack.png",
        href: "/agency-pack",
        badge: "Upgrade",
      },
      {
        id: "verified-bm-5",
        name: "Verified BM5 Unlimited",
        type: "verified-bm",
        description: "Premium business manager with no limits",
        price: 350,
        imageSrc: "/verified-facebook-business-manager-icon.png",
        href: "/#products",
      },
      {
        id: "starter-pack",
        name: "Starter Pack",
        type: "pack",
        description: "Perfect for beginners",
        price: 50,
        imageSrc: "/facebook-starter-pack.png",
        href: "/starter-pack",
      },
      {
        id: "via-xmdt-usa-2",
        name: "Via XMDT USA Premium",
        type: "via",
        description: "Enhanced payment method for US targeting",
        price: 60,
        imageSrc: "/facebook-xmdt-usa.png",
        href: "/#products",
      },
      {
        id: "verified-bm-premium",
        name: "Premium Verified BM",
        type: "verified-bm",
        description: "Our highest quality business manager with premium support",
        price: 120,
        imageSrc: "/verified-facebook-business-manager-icon.png",
        href: "/#products",
      },
    ],
    "agency-pack": [
      {
        id: "pro-pack",
        name: "Pro Pack",
        type: "pack",
        description: "Scale your campaigns with verified accounts",
        price: 150,
        imageSrc: "/abstract-facebook-verified-business-manager.png",
        href: "/pro-pack",
      },
      {
        id: "verified-bm-5",
        name: "Verified BM5 Unlimited",
        type: "verified-bm",
        description: "Premium business manager with no limits",
        price: 350,
        imageSrc: "/verified-facebook-business-manager-icon.png",
        href: "/#products",
      },
      {
        id: "starter-pack",
        name: "Starter Pack",
        type: "pack",
        description: "Perfect for beginners",
        price: 50,
        imageSrc: "/facebook-starter-pack.png",
        href: "/starter-pack",
      },
      {
        id: "via-xmdt-usa-2",
        name: "Via XMDT USA Premium",
        type: "via",
        description: "Enhanced payment method for US targeting",
        price: 60,
        imageSrc: "/facebook-xmdt-usa.png",
        href: "/#products",
      },
      {
        id: "pixel-enterprise",
        name: "Enterprise Pixel",
        type: "pixel",
        description: "Enterprise-grade pixel with advanced analytics and integrations",
        price: 45,
        imageSrc: "/facebook-pixel-icon.png",
        href: "/#products",
      },
    ],
  }

  const recommendations = allRecommendations[currentPackId] || []

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("recommendations-container")
    if (!container) return

    const scrollAmount = 320 // Approximate width of a card + gap
    const maxScroll = container.scrollWidth - container.clientWidth

    const newPosition =
      direction === "right"
        ? Math.min(scrollPosition + scrollAmount, maxScroll)
        : Math.max(scrollPosition - scrollAmount, 0)

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    })

    setScrollPosition(newPosition)
  }

  const showLeftArrow = scrollPosition > 0
  const showRightArrow = recommendations.length > 3 && scrollPosition < (recommendations.length - 3) * 320

  return (
    <div className={cn("relative", className)}>
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white rounded-full shadow-lg p-2 border border-gray-200 hover:bg-gray-50"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>
      )}

      <div
        id="recommendations-container"
        className="flex gap-8 overflow-x-auto scrollbar-hide pb-4 pt-2 px-2 -mx-2 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {recommendations.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-[240px] sm:w-[280px]">
            <Link href={item.href} className="group block h-full">
              <Card className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md h-full flex flex-col">
                <div className="relative aspect-square bg-gray-50 p-2 sm:p-4">
                  {item.badge && (
                    <Badge className="absolute top-2 right-2 bg-facebook text-white text-xs">{item.badge}</Badge>
                  )}
                  <div className="relative w-full h-full">
                    <Image
                      src={item.imageSrc || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-contain p-2 sm:p-4"
                    />
                  </div>
                </div>
                <div className="p-3 sm:p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-1 sm:mb-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-facebook transition-colors h-[40px] sm:h-[56px] line-clamp-2">
                        {item.name}
                      </h3>
                      <Badge className="mt-1 bg-facebook/10 text-facebook text-xs">
                        {item.type === "pack"
                          ? "Pack"
                          : item.type
                              .split("-")
                              .join(" ")
                              .replace(/\b\w/g, (l) => l.toUpperCase())}
                      </Badge>
                    </div>
                    <span className="text-base sm:text-lg font-bold text-facebook">€{item.price}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2 flex-grow">
                    {item.description}
                  </p>
                  <Button className="w-full bg-facebook hover:bg-facebook-dark text-white mt-auto text-xs sm:text-sm py-1.5 sm:py-2">
                    View Details
                  </Button>
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </div>

      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white rounded-full shadow-lg p-2 border border-gray-200 hover:bg-gray-50"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>
      )}
    </div>
  )
}
