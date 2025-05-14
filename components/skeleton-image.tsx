import { cn } from "@/lib/utils"

interface SkeletonImageProps {
  aspectRatio?: "square" | "video" | "portrait" | "product" | "hero" | "custom"
  customRatio?: string
  width?: string
  height?: string
  rounded?: "none" | "sm" | "md" | "lg" | "full"
  className?: string
  animation?: "pulse" | "shimmer" | "none"
}

export function SkeletonImage({
  aspectRatio = "square",
  customRatio,
  width,
  height,
  rounded = "md",
  className,
  animation = "pulse",
}: SkeletonImageProps) {
  // Map aspect ratios to Tailwind classes
  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    product: "aspect-[4/3]",
    hero: "aspect-[16/9]",
    custom: customRatio ? `aspect-[${customRatio}]` : "aspect-square",
  }

  // Map rounded options to Tailwind classes
  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  }

  // Map animation options to Tailwind classes
  const animationClasses = {
    pulse: "animate-pulse",
    shimmer: "animate-shimmer bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:400%_100%]",
    none: "",
  }

  return (
    <div
      className={cn(
        "bg-gray-200 overflow-hidden",
        aspectRatioClasses[aspectRatio],
        roundedClasses[rounded],
        animationClasses[animation],
        className,
      )}
      style={{
        width: width || "100%",
        height: height || "auto",
      }}
    >
      {/* Optional SVG pattern for more visual interest */}
      {animation !== "shimmer" && (
        <svg
          className="w-full h-full text-gray-300 opacity-20"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zm0 9h7v7h-7v-7zm-9 0h7v7H4v-7z" />
        </svg>
      )}
    </div>
  )
}

// Add shimmer animation to globals.css
// @keyframes shimmer {
//   0% { background-position: 100% 0; }
//   100% { background-position: 0 0; }
// }
// .animate-shimmer {
//   animation: shimmer 2s infinite linear;
// }
