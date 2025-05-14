import { SkeletonCard } from "@/components/ui/skeleton-card"

export default function ProductsSectionLoading() {
  return (
    <section className="py-20 bg-lightblue">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-24 h-8 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
          <div className="h-10 bg-gray-200 rounded-lg w-3/4 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-lg w-1/2 mx-auto animate-pulse"></div>
        </div>

        {/* Filter buttons skeleton */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-10 bg-gray-200 rounded-md w-28 animate-pulse"></div>
          ))}
        </div>

        {/* Product cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[...Array(8)].map((_, i) => (
            <SkeletonCard key={i} variant="product" hasBadge={i % 3 === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
