"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import NewsletterSection from "./newsletter-section"
import { useMediaQuery } from "@/hooks/use-media-query"

interface ClientSupportingPageLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
  showNewsletter?: boolean
  breadcrumbs?: Array<{ label: string; href: string }>
}

export default function ClientSupportingPageLayout({
  title,
  subtitle,
  children,
  showNewsletter = false,
  breadcrumbs = [],
}: ClientSupportingPageLayoutProps) {
  // We can use useMediaQuery here since this is a client component
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          {breadcrumbs.length > 0 && (
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-facebook">
                Home
              </Link>
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" />
                  <Link href={crumb.href} className="hover:text-facebook">
                    {crumb.label}
                  </Link>
                </div>
              ))}
            </div>
          )}
          <h1 className={`text-3xl ${isMobile ? "" : "md:text-4xl"} font-bold text-gray-900`}>{title}</h1>
          {subtitle && <p className="mt-2 text-xl text-gray-600">{subtitle}</p>}
        </div>
      </div>

      <main>{children}</main>

      {showNewsletter && <NewsletterSection />}
    </div>
  )
}
