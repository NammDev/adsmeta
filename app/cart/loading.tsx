import { SkeletonImage } from "@/components/skeleton-image"

export default function CartLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Cart items skeletons */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-lg bg-white">
              <div className="w-full sm:w-32 h-32">
                <SkeletonImage aspectRatio="square" rounded="md" animation="pulse" />
              </div>

              <div className="flex-1 space-y-3">
                <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>

                <div className="flex justify-between items-center pt-2">
                  <div className="h-6 bg-gray-200 rounded w-20 animate-pulse"></div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order summary skeleton */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 h-fit">
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-6 animate-pulse"></div>

          <div className="space-y-4 mb-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex justify-between">
                <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
              </div>
            ))}
          </div>

          <div className="h-px bg-gray-200 my-4"></div>

          <div className="flex justify-between mb-6">
            <div className="h-6 bg-gray-200 rounded w-24 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-20 animate-pulse"></div>
          </div>

          <div className="h-12 bg-gray-200 rounded w-full animate-pulse mb-3"></div>
          <div className="h-12 bg-gray-200 rounded w-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
