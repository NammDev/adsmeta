import { Skeleton } from "@/components/ui/skeleton"
import SupportingPageLayout from "@/components/supporting-page-layout"

export default function ProductLoading() {
  return (
    <SupportingPageLayout title="Loading Product..." subtitle="Please wait while we fetch the product details">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Product Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Product Overview */}
            <Skeleton className="w-full h-64 rounded-lg" />

            {/* Product Description */}
            <Skeleton className="w-full h-80 rounded-lg" />

            {/* FAQ Section */}
            <Skeleton className="w-full h-64 rounded-lg" />
          </div>

          {/* Right Column - Features & Purchase Info */}
          <div className="space-y-6">
            {/* Features Card */}
            <Skeleton className="w-full h-64 rounded-lg" />

            {/* Purchase Info Card */}
            <Skeleton className="w-full h-80 rounded-lg" />

            {/* Trust Indicators */}
            <Skeleton className="w-full h-48 rounded-lg" />
          </div>
        </div>
      </div>
    </SupportingPageLayout>
  )
}
