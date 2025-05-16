"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import ProgressBar from "@badrap/bar-of-progress"

const progress = new ProgressBar({
  size: 2,
  color: "#0066FF", // Using the facebook blue from your theme
  className: "z-50",
  delay: 100,
})

export function TopProgressBar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParams.toString()

    // This effect runs on mount and when the URL changes
    // We finish any in-progress loading when a new page has loaded
    progress.finish()

    // Return a cleanup function that starts the progress bar
    // when the component unmounts (which happens on navigation)
    return () => {
      progress.start()
    }
  }, [pathname, searchParams])

  return null
}
