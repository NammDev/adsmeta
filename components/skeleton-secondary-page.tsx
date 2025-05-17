export default function SkeletonSecondaryPage() {
  return (
    <div className="min-h-screen bg-blue-50/10">
      {/* Content Skeleton with increased top padding to match new layout */}
      <div className="container px-4 md:px-6 py-10">
        {/* Simple Page Title Skeleton */}
        <div className="flex flex-col items-start mb-8">
          <div className="w-48 h-8 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse mb-2"></div>
          <div className="w-64 h-4 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse"></div>
        </div>

        {/* Content Skeleton */}
        <div className="space-y-6">
          {/* Section 1 */}
          <div className="space-y-3">
            <div className="w-36 h-6 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
            <div className="w-full h-24 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse"></div>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <div className="w-40 h-6 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-32 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse"></div>
              <div className="h-32 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse"></div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <div className="w-32 h-6 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
            <div className="w-full h-40 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
