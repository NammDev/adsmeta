import { SkeletonImage } from "./skeleton-image"

export function SkeletonProductGallery() {
  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 h-[400px] flex items-center justify-center">
        <SkeletonImage aspectRatio="product" className="w-full h-full" animation="shimmer" />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="border-2 border-gray-200 rounded-md overflow-hidden w-20 h-20 flex-shrink-0">
            <SkeletonImage aspectRatio="square" rounded="sm" animation={index % 2 === 0 ? "pulse" : "shimmer"} />
          </div>
        ))}
      </div>
    </div>
  )
}
