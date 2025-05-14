"use client"

import type { ReactNode } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

interface MediaQueryWrapperProps {
  children: (matches: boolean) => ReactNode
  query: string
}

export function MediaQueryWrapper({ children, query }: MediaQueryWrapperProps) {
  const matches = useMediaQuery(query)
  return <>{children(matches)}</>
}
