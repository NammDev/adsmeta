import type React from "react"
import "../globals.css"
import "./blog.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "EasyAdsPack Blog - Facebook Advertising Insights",
  description: "Expert insights, guides, and tips for Facebook advertising success",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
