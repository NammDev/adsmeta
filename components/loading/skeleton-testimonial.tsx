import { cn } from '@/lib/utils'

interface SkeletonTestimonialProps {
  className?: string
}

export function SkeletonTestimonial({ className }: SkeletonTestimonialProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-gray-200 bg-white shadow-sm p-6 overflow-hidden relative',
        className
      )}
    >
      {/* Gradient accent */}
      <div className='absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-300 to-purple-300'></div>

      {/* Content */}
      <div className='space-y-3'>
        <div className='h-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-md animate-pulse'></div>
        <div className='h-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-md animate-pulse'></div>
        <div className='h-4 w-3/4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-md animate-pulse'></div>
      </div>

      {/* Author */}
      <div className='mt-6 flex items-center'>
        <div className='h-12 w-12 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse'></div>
        <div className='ml-4'>
          <div className='h-4 w-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md animate-pulse mb-2'></div>
          <div className='h-3 w-32 bg-gradient-to-r from-gray-100 to-gray-200 rounded-md animate-pulse'></div>
        </div>
      </div>
    </div>
  )
}
