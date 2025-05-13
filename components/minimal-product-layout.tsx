"use client"

import type React from "react"

import { useEffect } from "react"
import SiteFooter from "@/components/site-footer"
import NewsletterSection from "@/components/newsletter-section"

interface MinimalProductLayoutProps {
  children: React.ReactNode
}

export default function MinimalProductLayout({ children }: MinimalProductLayoutProps) {
  useEffect(() => {
    // Force scroll to top when the component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">{children}</main>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
