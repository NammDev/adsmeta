export default function SkeletonSecondaryPage() {
  return (
    <div className="min-h-screen">
      {/* Header Skeleton */}
      <div className="bg-gradient-to-b from-gray-50 to-white pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Title and Subtitle Skeleton */}
            <div className="w-48 h-8 bg-gray-200 rounded-lg mx-auto mb-3 animate-pulse"></div>
            <div className="w-64 h-4 bg-gray-100 rounded-lg mx-auto animate-pulse"></div>

            {/* Optional Breadcrumbs Skeleton */}
            <div className="flex items-center justify-center mt-4 space-x-2">
              <div className="w-16 h-3 bg-gray-100 rounded animate-pulse"></div>
              <div className="w-3 h-3 bg-gray-100 rounded-full animate-pulse"></div>
              <div className="w-20 h-3 bg-gray-100 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Section 1 */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="w-36 h-6 rounded-lg bg-gray-200 animate-pulse mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-48 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse"></div>
            ))}
          </div>
        </div>

        {/* Section 2 */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="w-40 h-6 rounded-lg bg-gray-200 animate-pulse mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse"></div>
            <div className="space-y-4">
              <div className="h-6 w-3/4 rounded-lg bg-gray-200 animate-pulse"></div>
              <div className="h-4 w-full rounded-lg bg-gray-100 animate-pulse"></div>
              <div className="h-4 w-full rounded-lg bg-gray-100 animate-pulse"></div>
              <div className="h-4 w-2/3 rounded-lg bg-gray-100 animate-pulse"></div>
              <div className="h-10 w-32 rounded-lg bg-gray-200 animate-pulse mt-4"></div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="max-w-5xl mx-auto">
          <div className="w-32 h-6 rounded-lg bg-gray-200 animate-pulse mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
