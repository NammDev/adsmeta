"use client"

import type { ReactNode } from "react"
import SiteFooter from "./site-footer"
import NewsletterSection from "./newsletter-section"
import Image from "next/image"
import MetaPlanetSvg from "./meta-planet-svg"
import BackgroundDecorations from "./background-decorations"

interface SupportingPageLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
  showNewsletter?: boolean
  heroIcon?: ReactNode
  breadcrumbs?: Array<{ label: string; href: string }>
}

export default function SupportingPageLayout({
  title,
  subtitle,
  children,
  showNewsletter = true,
  heroIcon,
  breadcrumbs,
}: SupportingPageLayoutProps) {
  return (
    <>
      {/* Background decorations from landing page */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <BackgroundDecorations />
        {/* Light blue background overlay */}
        <div className="absolute inset-0 bg-blue-50/10"></div>
      </div>

      {/* Hero Section with minimal design and zero bottom padding - overriding PageSection default padding */}
      <div className="relative overflow-hidden">
        <section className="relative z-10 pt-8 pb-0 md:pt-10 md:pb-0 bg-transparent">
          <div className="container px-4 md:px-6">
            {/* Illustrations positioned around the hero */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Rocket illustration - moved to the left */}
              <div className="absolute top-[15%] left-[15%]">
                <Image src="/blue-rocket-illustration.png" alt="" width={180} height={180} className="opacity-15" />
              </div>

              {/* META Planet SVG - keeping only this one */}
              <div className="absolute top-[10%] right-[15%]">
                <MetaPlanetSvg className="opacity-15" />
              </div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
              <div className="text-center">
                {/* Hero icon - only shown if provided */}
                {heroIcon && (
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm mb-4 border border-blue-200/20">
                    <div className="relative z-10 text-facebook">{heroIcon}</div>
                  </div>
                )}

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-facebook to-facebook-dark">
                    {title}
                  </span>
                </h1>

                {/* Subtitle */}
                {subtitle && <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto mb-0">{subtitle}</p>}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Content - no padding */}
      <div className="flex-1 bg-transparent relative z-10">{children}</div>

      {/* Newsletter Section (optional) */}
      {showNewsletter && <NewsletterSection />}

      {/* Footer */}
      <SiteFooter />
    </>
  )
}
