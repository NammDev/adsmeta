import { SkeletonImage } from '@/components/loading/skeleton-image'

export default function ProductsLoading() {
  return (
    <div className='min-h-screen py-10 sm:py-16'>
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mx-auto text-center mb-10 sm:mb-16'>
          <div className='w-24 h-8 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse'></div>
          <div className='h-8 sm:h-10 bg-gray-200 rounded-lg w-3/4 mx-auto mb-4 animate-pulse'></div>
          <div className='h-5 sm:h-6 bg-gray-200 rounded-lg w-1/2 mx-auto animate-pulse'></div>
        </div>

        {/* Filter buttons skeleton - improved for mobile */}
        <div className='flex overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center gap-4 mb-8 sm:mb-12'>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className='h-8 sm:h-10 bg-gray-200 rounded-md w-24 sm:w-28 flex-shrink-0 animate-pulse'
            ></div>
          ))}
        </div>

        {/* Product cards grid - improved for mobile */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
          {[...Array(8)].map((_, i) => (
            <SkeletonImage key={i} variant='product' hasBadge={i % 3 === 0} />
          ))}
        </div>

        {/* Pagination skeleton - improved for mobile */}
        <div className='flex justify-center mt-8 sm:mt-12'>
          <div className='flex items-center space-x-2'>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className='h-8 w-8 sm:h-10 sm:w-10 bg-gray-200 rounded-md animate-pulse'
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
