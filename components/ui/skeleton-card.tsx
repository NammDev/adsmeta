interface SkeletonCardProps {
  variant?: "product" | "package" | "blog"
  hasBadge?: boolean
}

export function SkeletonCard({ variant = "product", hasBadge = false }: SkeletonCardProps) {
  switch (variant) {
    case "product":
      return (
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white h-full">
          {/* Image placeholder */}
          <div className="aspect-[4/3] bg-gray-100 animate-pulse"></div>

          <div className="p-4 sm:p-5">
            <div className="flex justify-between items-start mb-2">
              {/* Title placeholder */}
              <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse"></div>

              {/* Badge placeholder (conditional) */}
              {hasBadge && <div className="h-5 bg-gray-200 rounded-full w-16 animate-pulse"></div>}
            </div>

            {/* Description placeholder - two lines */}
            <div className="h-4 bg-gray-200 rounded w-full mb-1 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-3 animate-pulse"></div>

            {/* Price and buttons row */}
            <div className="flex justify-between items-center mt-4">
              {/* Price placeholder */}
              <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>

              {/* Action buttons placeholder */}
              <div className="flex gap-2">
                <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      )

    case "package":
      return (
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white h-full">
          {/* Package header with conditional popular tag */}
          {hasBadge && <div className="h-7 bg-gray-200 w-28 absolute top-0 right-0 animate-pulse"></div>}

          <div className="p-6 sm:p-8">
            {/* Title placeholder */}
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>

            {/* Description placeholder */}
            <div className="h-4 bg-gray-200 rounded w-full mb-4 animate-pulse"></div>

            {/* Price placeholder */}
            <div className="flex items-end mb-6">
              <div className="h-10 bg-gray-200 rounded w-24 animate-pulse"></div>
              <div className="h-5 bg-gray-200 rounded w-16 ml-2 animate-pulse"></div>
            </div>

            {/* Features list placeholder */}
            <div className="space-y-4 mb-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-gray-200 animate-pulse"></div>
                  <div className="h-5 bg-gray-200 rounded w-full animate-pulse"></div>
                </div>
              ))}
            </div>

            {/* Buttons placeholder */}
            <div className="flex flex-col gap-3">
              <div className="h-12 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-12 bg-gray-200 rounded w-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )

    case "blog":
      return (
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white h-full">
          {/* Image placeholder */}
          <div className="aspect-video bg-gray-100 animate-pulse"></div>

          <div className="p-5">
            {/* Category placeholder */}
            <div className="h-5 bg-gray-200 rounded-full w-24 mb-3 animate-pulse"></div>

            {/* Title placeholder */}
            <div className="h-6 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>

            {/* Description placeholder */}
            <div className="h-4 bg-gray-200 rounded w-full mb-1 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-1 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-4 animate-pulse"></div>

            {/* Date and read more */}
            <div className="flex justify-between items-center mt-4">
              <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
              <div className="h-5 bg-gray-200 rounded w-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      )
  }
}
