import { SkeletonImage } from "../skeleton-image"

export function SkeletonTestimonial() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 h-full">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 mr-4">
          <SkeletonImage aspectRatio="square" rounded="full" animation="pulse" />
        </div>
        <div>
          <div className="h-5 bg-gray-200 rounded w-32 mb-1 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
        </div>
      </div>

      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <div key={star} className="w-5 h-5 mr-1 bg-gray-200 rounded-full animate-pulse"></div>
        ))}
      </div>

      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
      </div>

      <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div>
    </div>
  )
}
