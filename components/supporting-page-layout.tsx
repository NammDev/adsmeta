"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import PageSection from "./page-section"
import SiteFooter from "./site-footer"
import NewsletterSection from "./newsletter-section"

interface SupportingPageLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
  showNewsletter?: boolean
  breadcrumbs?: Array<{ label: string; href: string }>
}

export default function SupportingPageLayout({
  title,
  subtitle,
  children,
  showNewsletter = true,
  breadcrumbs,
}: SupportingPageLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Page Header */}
      <PageSection bgColor="facebook-light" className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center py-6 md:py-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">{title}</h1>
          {subtitle && <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}

          {breadcrumbs && (
            <div className="flex flex-wrap items-center justify-center space-x-2 mt-4 text-sm text-gray-500">
              <Link href="/" className="hover:text-facebook">
                Home
              </Link>
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <ChevronRight className="h-4 w-4" />
                  <Link href={crumb.href} className="hover:text-facebook">
                    {crumb.label}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </PageSection>

      {/* Content - Removed top padding as requested */}
      <div className="flex-1 bg-white">{children}</div>

      {/* Newsletter Section (optional) */}
      {showNewsletter && <NewsletterSection />}

      {/* Footer */}
      <SiteFooter />
    </main>
  )
}
