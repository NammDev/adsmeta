"use client"

import type { ReactNode } from "react"
import SiteFooter from "./site-footer"
import NewsletterSection from "./newsletter-section"
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

      {/* Content - with top padding */}
      <div className="flex-1 bg-transparent relative z-20 pt-10">{children}</div>

      {/* Newsletter Section (optional) with specific padding */}
      {showNewsletter && (
        <div className="py-0">
          <NewsletterSection className="py-8 md:py-12" />
        </div>
      )}

      {/* Footer with no padding on parent div */}
      <div className="py-0">
        <SiteFooter className="py-8 md:py-12" />
      </div>
    </>
  )
}
