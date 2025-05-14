export default function ProductPageLoading() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb skeleton */}
        <div className="flex items-center gap-2 mb-8">
          <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
          <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product image skeleton */}
          <div className="aspect-square bg-gray-100 rounded-lg animate-pulse"></div>

          {/* Product details skeleton */}
          <div>
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-5/6 mb-6 animate-pulse"></div>

            <div className="h-10 bg-gray-200 rounded w-32 mb-8 animate-pulse"></div>

            <div className="space-y-4 mb-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-gray-200 animate-pulse"></div>
                  <div className="h-5 bg-gray-200 rounded w-full animate-pulse"></div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mb-8">
              <div className="h-12 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-12 bg-gray-200 rounded w-12 animate-pulse"></div>
            </div>

            {/* Tabs skeleton */}
            <div className="border-b border-gray-200 mb-6">
              <div className="flex gap-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-10 bg-gray-200 rounded w-24 animate-pulse"></div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-5 bg-gray-200 rounded w-full animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
