"use client"

import { type ReactNode, useMemo } from "react"
import PageSection from "./page-section"
import { useMediaQuery } from "@/hooks/use-media-query"

interface ClientPageSectionProps {
  children: ReactNode
  bgColor?: string
  mediaQuery?: string
}

export default function ClientPageSection({ children, bgColor, mediaQuery }: ClientPageSectionProps) {
  // Only use useMediaQuery if mediaQuery is provided
  const matches = useMemo(() => {
    return mediaQuery ? useMediaQuery(mediaQuery) : true
  }, [mediaQuery])

  if (!matches) return null

  return <PageSection bgColor={bgColor}>{children}</PageSection>
}
