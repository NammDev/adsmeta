"use client"

import type { ReactNode } from "react"
import SiteFooter from "./site-footer"
import NewsletterSection from "./newsletter-section"

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
      {/* Content - with top padding */}
      <div className="flex-1 bg-transparent relative z-20 pt-2 md:pt-10">{children}</div>

      {/* Newsletter Section (optional) with specific padding */}
      {showNewsletter && (
        <div className="py-0">
          <NewsletterSection className="py-8 md:py-16" />
        </div>
      )}

      {/* Footer with no padding on parent div */}
      <div className="py-0">
        <SiteFooter className="py-8 md:py-12" />
      </div>
    </>
  )
}
