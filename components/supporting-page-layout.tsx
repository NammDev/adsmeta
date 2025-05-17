"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import PageSection from "./page-section"
import SiteFooter from "./site-footer"
import NewsletterSection from "./newsletter-section"
import { cn } from "@/lib/utils"

interface SupportingPageLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
  showNewsletter?: boolean
  breadcrumbs?: Array<{ label: string; href: string }>
  heroIcon?: ReactNode
}

export default function SupportingPageLayout({
  title,
  subtitle,
  children,
  showNewsletter = true,
  breadcrumbs,
  heroIcon,
}: SupportingPageLayoutProps) {
  return (
    <>
      {/* Page Header with enhanced styling */}
      <div className="relative overflow-hidden">
        <PageSection className="relative z-10 py-12 md:py-16 bg-transparent">
          <div className="max-w-4xl mx-auto">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-24 h-24 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-pulse-delay"></div>

            <div className="text-center relative">
              {/* Optional icon */}
              {heroIcon && (
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4 animate-bounce-slow">
                  {heroIcon}
                </div>
              )}

              {/* Title with gradient effect */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-facebook to-facebook-dark">
                  {title}
                </span>
              </h1>

              {/* Subtitle with enhanced styling */}
              {subtitle && (
                <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 relative">
                  {subtitle}
                  <span className="absolute -z-10 w-full h-full left-0 top-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-30 filter blur-xl"></span>
                </p>
              )}

              {/* Breadcrumbs with enhanced styling */}
              {breadcrumbs && (
                <div className="flex flex-wrap items-center justify-center space-x-2 mt-4 text-sm">
                  <Link href="/" className="text-gray-500 hover:text-facebook transition-colors duration-200">
                    Home
                  </Link>
                  {breadcrumbs.map((crumb, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                      <Link
                        href={crumb.href}
                        className={cn(
                          "transition-colors duration-200",
                          index === breadcrumbs.length - 1
                            ? "text-facebook font-medium"
                            : "text-gray-500 hover:text-facebook",
                        )}
                      >
                        {crumb.label}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </PageSection>
      </div>

      {/* Content */}
      <div className="flex-1 pt-8 md:pt-10 bg-transparent">{children}</div>

      {/* Newsletter Section (optional) */}
      {showNewsletter && <NewsletterSection />}

      {/* Footer */}
      <SiteFooter />
    </>
  )
}
