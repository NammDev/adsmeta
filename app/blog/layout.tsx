import type React from "react"
import "../globals.css"
import "./blog.css"
import "./blog-post.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GoAds - Buy Facebook Profiles, Verified BMs, Pages",
  description: "Premium Facebook Ads solutions for businesses and marketers",
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
