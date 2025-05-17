export function SkeletonHero() {
  return (
    <section className="relative pt-8 pb-0 md:pt-10 md:pb-0 bg-blue-50/10">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl">
          {/* Title placeholder */}
          <div className="h-10 bg-gray-200 rounded-md w-3/4 animate-pulse mb-4"></div>

          {/* Subtitle placeholder */}
          <div className="h-5 bg-gray-200 rounded-md w-full animate-pulse"></div>
          <div className="h-5 bg-gray-200 rounded-md w-5/6 animate-pulse mt-2"></div>
        </div>
      </div>

      {/* Background illustrations placeholders */}
      <div className="absolute top-1/4 left-[15%] w-[180px] h-[180px] opacity-15">
        <div className="w-full h-full rounded-full bg-blue-200/50 animate-pulse"></div>
      </div>

      <div className="absolute top-1/4 right-[10%] w-[200px] h-[200px] opacity-15">
        <div className="w-full h-full rounded-full bg-blue-200/50 animate-pulse"></div>
      </div>
    </section>
  )
}
