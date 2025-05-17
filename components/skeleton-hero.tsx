export default function SkeletonHero() {
  return (
    <section className="relative z-10 pt-8 pb-0 md:pt-10 md:pb-0 bg-transparent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Skeleton Badge */}
          <div className="w-32 h-6 mb-4 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 animate-pulse"></div>

          {/* Skeleton Title */}
          <div className="w-64 h-10 mb-2 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>

          {/* Skeleton Subtitle */}
          <div className="w-80 h-6 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse"></div>
        </div>
      </div>

      {/* Skeleton Illustrations Container */}
      <div className="relative h-24 md:h-28 overflow-hidden">
        {/* Left Illustration Placeholder */}
        <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse opacity-30"></div>

        {/* Right Illustration Placeholder */}
        <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 animate-pulse opacity-30"></div>
      </div>
    </section>
  )
}
