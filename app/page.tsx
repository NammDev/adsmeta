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
import { useMediaQuery } from "@/hooks/use-media-query"
import BackgroundDecorations from "@/components/background-decorations"

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <main className="flex min-h-screen flex-col bg-blue-50/10 overflow-x-hidden relative">
      {/* Background decorations */}
      <BackgroundDecorations />

      {/* Content sections */}
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Trust Indicators */}
        <TrustIndicatorsSection />

        {/* Packages Section with Suspense */}
        <Suspense
          fallback={
            <div className="py-16">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                  <div className="w-24 h-8 bg-gray-200/50 rounded-full mx-auto mb-4 animate-pulse"></div>
                  <div className="h-10 bg-gray-200/50 rounded-lg w-3/4 mx-auto mb-4 animate-pulse"></div>
                  <div className="h-6 bg-gray-200/50 rounded-lg w-1/2 mx-auto animate-pulse"></div>
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

        {/* Why Choose Us Section - Now responsive for both mobile and desktop */}
        <WhyChooseUsSection />

        {/* Testimonials Section - Desktop only */}
        {!isMobile && <TestimonialsSection />}

        {/* Newsletter Section */}
        <NewsletterSection className='py-8 md:py-12' />

        {/* Footer */}
         <SiteFooter className='py-8 md:py-12' />
      </div>
    </main>
  )
}
