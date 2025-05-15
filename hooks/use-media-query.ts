"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  // Initialize with false to avoid hydration mismatch
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== "undefined") {
      // Create the media query
      const media = window.matchMedia(query)

      // Set the initial value
      setMatches(media.matches)

      // Define our event listener
      const listener = () => setMatches(media.matches)

      // Add the listener
      media.addEventListener("change", listener)

      // Remove the listener on cleanup
      return () => media.removeEventListener("change", listener)
    }

    // Return false during SSR
    return () => {}
  }, [query])

  return matches
}
