import { Skeleton } from '@/components/ui/skeleton'
import SupportingPageLayout from '@/components/layout/supporting-page-layout'

export default function PackLoading() {
  return (
    <SupportingPageLayout
      title='Loading Pack...'
      subtitle='Please wait while we fetch the pack details'
    >
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Left Column - Pack Info */}
          <div className='lg:col-span-2 space-y-8'>
            {/* Pack Overview */}
            <Skeleton className='w-full h-64 rounded-lg' />

            {/* Pack Description */}
            <Skeleton className='w-full h-80 rounded-lg' />

            {/* What's Included */}
            <Skeleton className='w-full h-64 rounded-lg' />

            {/* FAQ Section */}
            <Skeleton className='w-full h-64 rounded-lg' />
          </div>

          {/* Right Column - Features & Purchase Info */}
          <div className='space-y-6'>
            {/* Features Card */}
            <Skeleton className='w-full h-64 rounded-lg' />

            {/* Purchase Info Card */}
            <Skeleton className='w-full h-80 rounded-lg' />

            {/* Compare Packs */}
            <Skeleton className='w-full h-48 rounded-lg' />
          </div>
        </div>
      </div>
    </SupportingPageLayout>
  )
}
