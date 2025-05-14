import { SkeletonImage } from "./skeleton-image"

export function SkeletonHero() {
  return (
    <div className="relative">
      {/* Hero background */}
      <div className="absolute inset-0 overflow-hidden">
        <SkeletonImage aspectRatio="hero" rounded="none" animation="shimmer" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero content */}
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-2xl space-y-6">
          {/* Title placeholder */}
          <div className="h-10 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2 animate-pulse"></div>

          {/* Description placeholder */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
          </div>

          {/* Buttons placeholder */}
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="h-12 bg-gray-200 rounded w-36 animate-pulse"></div>
            <div className="h-12 bg-gray-200 rounded w-36 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
