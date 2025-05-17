import type React from "react"
import { cn } from "@/lib/utils"

interface PageSectionProps {
  children: React.ReactNode
  bgColor?: string
  className?: string
  id?: string
}

export default function PageSection({ children, bgColor, className, id }: PageSectionProps) {
  // Create the background color class based on the bgColor prop
  let bgColorClass = ""

  if (bgColor === "facebook-light") {
    bgColorClass = "bg-lightblue"
  } else if (bgColor === "facebook") {
    bgColorClass = "bg-facebook"
  } else if (bgColor === "gray-light") {
    bgColorClass = "bg-gray-50"
  } else if (bgColor === "white") {
    bgColorClass = "bg-white"
  } else if (bgColor === "transparent") {
    bgColorClass = "bg-transparent"
  }
  // If no bgColor is provided, default to transparent instead of white
  else {
    bgColorClass = "bg-transparent"
  }

  return (
    <section id={id} className={cn("py-8 md:py-12 lg:py-16 px-4 md:px-6", bgColorClass, className)}>
      {children}
    </section>
  )
}
