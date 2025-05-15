import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface PageSectionProps {
  children: ReactNode
  className?: string
  noPadding?: boolean
  spacious?: boolean
  bgColor?: "white" | "gray-50" | "facebook-light"
}

export default function PageSection({
  children,
  className,
  noPadding = false,
  spacious = false,
  bgColor = "white",
}: PageSectionProps) {
  const bgColorClass =
    bgColor === "gray-50" ? "bg-lightblue" : bgColor === "facebook-light" ? "bg-lightblue" : "bg-white"

  return (
    <section className={cn(bgColorClass, className)}>
      <div
        className={cn(
          "container mx-auto px-4 relative",
          !noPadding && (spacious ? "py-8 md:py-12" : "py-6 md:py-8"),
          spacious && "max-w-6xl",
        )}
      >
        {children}
      </div>
    </section>
  )
}
