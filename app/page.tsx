"use client"

import { Suspense } from "react"
import SiteFooter from "@/components/site-footer"
import NewsletterSection from "@/components/newsletter-section"
import ProductsSection from "@/components/products-section"
import { LoadingSpinner } from "@/components/loading-spinner"
import PackagesSection from "./packages-section"
import HeroSection from "@/components/home/hero-section"
import TrustIndicatorsSection from "@/components/home/trust-indicators-section"
import WhyChooseUsSection from "@/components/home/why-choose-us-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import TrustBuildingSection from "@/components/home/trust-building-section"
import { useMediaQuery } from "@/hooks/use-media-query"
import MobileWhyTrustUsSection from "@/components/home/mobile-why-trust-us-section"

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Indicators */}
      <TrustIndicatorsSection />

      {/* Packages Section with Suspense */}
      <Suspense
        fallback={
          <div className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <div className="w-24 h-8 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
                <div className="h-10 bg-gray-200 rounded-lg w-3/4 mx-auto mb-4 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded-lg w-1/2 mx-auto animate-pulse"></div>
              </div>
              <div className="flex justify-center">
                <LoadingSpinner size={40} />
              </div>
            </div>
          </div>
        }
      >
        <PackagesSection />
      </Suspense>

      {/* Products Section */}
      <ProductsSection />

      {/* Why Choose Us Section - Show on both mobile and desktop */}
      {isMobile ? <MobileWhyTrustUsSection /> : <WhyChooseUsSection />}

      {/* Testimonials Section - Desktop only */}
      {!isMobile && <TestimonialsSection />}

      {/* Trust Building Section - Desktop only */}
      {!isMobile && <TrustBuildingSection />}

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Footer */}
      <SiteFooter />
    </main>
  )
}
