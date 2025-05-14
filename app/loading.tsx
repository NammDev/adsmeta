import { SkeletonCard } from "@/components/ui/skeleton-card"

export default function HomeLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero section skeleton */}
      <div className="bg-lightblue py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <div className="h-8 bg-gray-200 rounded-full w-32 mb-4 animate-pulse"></div>
              <div className="h-12 bg-gray-200 rounded-lg w-full mb-3 animate-pulse"></div>
              <div className="h-12 bg-gray-200 rounded-lg w-5/6 mb-6 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded-lg w-full mb-2 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded-lg w-full mb-2 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded-lg w-4/5 mb-8 animate-pulse"></div>
              <div className="flex gap-4">
                <div className="h-12 bg-gray-200 rounded-md w-32 animate-pulse"></div>
                <div className="h-12 bg-gray-200 rounded-md w-32 animate-pulse"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-full max-w-md aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Packages section skeleton */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="w-24 h-8 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded-lg w-3/4 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded-lg w-1/2 mx-auto animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <SkeletonCard key={i} variant="package" hasBadge={i === 1} />
            ))}
          </div>
        </div>
      </div>

      {/* Products section skeleton */}
      <div className="py-20 bg-lightblue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="w-24 h-8 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded-lg w-3/4 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded-lg w-1/2 mx-auto animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[...Array(4)].map((_, i) => (
              <SkeletonCard key={i} variant="product" hasBadge={i % 2 === 0} />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials section skeleton */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="w-24 h-8 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded-lg w-3/4 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded-lg w-1/2 mx-auto animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse mr-4"></div>
                  <div>
                    <div className="h-5 bg-gray-200 rounded w-32 mb-1 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 mr-1 bg-gray-200 rounded-full animate-pulse"></div>
                    ))}
                  </div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
