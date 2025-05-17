import { cn } from "@/lib/utils"

interface SkeletonCardProps {
  className?: string
  hasImage?: boolean
  hasFooter?: boolean
}

export function SkeletonCard({ className, hasImage = true, hasFooter = true }: SkeletonCardProps) {
  return (
    <div className={cn("rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden", className)}>
      {/* Card Header - Gradient Badge */}
      <div className="h-2 bg-gradient-to-r from-blue-300 to-purple-300 animate-pulse"></div>

      {hasImage && <div className="w-full aspect-[4/3] bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>}
      <div className="p-4">
        {/* Title */}
        <div className="h-6 w-3/4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md animate-pulse mb-3"></div>

        {/* Content */}
        <div className="space-y-2">
          <div className="h-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-md animate-pulse"></div>
          <div className="h-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-md animate-pulse"></div>
          <div className="h-4 w-2/3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-md animate-pulse"></div>
        </div>

        {hasFooter && (
          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
            <div className="h-8 w-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-md animate-pulse"></div>
            <div className="h-8 w-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  )
}
