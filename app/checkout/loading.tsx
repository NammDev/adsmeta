import { SkeletonImage } from "@/components/skeleton-image"

export default function CheckoutLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Shipping information skeleton */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-6 animate-pulse"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {[1, 2, 3, 4].map((field) => (
                <div key={field} className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                  <div className="h-10 bg-gray-200 rounded w-full animate-pulse"></div>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-4">
              <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
              <div className="h-10 bg-gray-200 rounded w-full animate-pulse"></div>
            </div>
          </div>

          {/* Payment method skeleton */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-6 animate-pulse"></div>

            <div className="space-y-4 mb-4">
              {[1, 2].map((method) => (
                <div key={method} className="h-16 bg-gray-200 rounded w-full animate-pulse"></div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((field) => (
                <div key={field} className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                  <div className="h-10 bg-gray-200 rounded w-full animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order summary skeleton */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 h-fit">
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-6 animate-pulse"></div>

          <div className="space-y-4 mb-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex gap-3">
                <div className="w-16 h-16 flex-shrink-0">
                  <SkeletonImage aspectRatio="square" rounded="md" animation="pulse" />
                </div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
              </div>
            ))}
          </div>

          <div className="h-px bg-gray-200 my-4"></div>

          <div className="space-y-3 mb-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex justify-between">
                <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
              </div>
            ))}
          </div>

          <div className="h-12 bg-gray-200 rounded w-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
