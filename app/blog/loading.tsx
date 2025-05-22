import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent } from '@/components/ui/card'
import SupportingPageLayout from '@/components/layout/supporting-page-layout'
import PageSection from '@/components/page-section'
import { BookOpen, TrendingUp, Eye, CalendarIcon } from 'lucide-react'

export default function BlogLoading() {
  return (
    <SupportingPageLayout
      title='Blog'
      subtitle='Expert insights, guides, and tips for Facebook advertising success'
      breadcrumbs={[{ label: 'Blog', href: '/blog' }]}
    >
      {/* Blog Categories - Skeleton */}
      <PageSection bgColor='facebook-light' className='py-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex overflow-x-auto pb-2 md:pb-0 md:flex-wrap md:justify-center gap-3'>
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className='h-9 w-24 rounded-full' />
              ))}
          </div>
        </div>
      </PageSection>

      {/* Featured Post - Skeleton */}
      <PageSection className='pt-8 pb-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex items-center gap-2 mb-6'>
            <BookOpen className='h-5 w-5 text-facebook' />
            <h2 className='text-xl md:text-2xl font-bold'>Featured Article</h2>
          </div>

          <div className='bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100'>
            <div className='md:flex'>
              <div className='md:w-1/2'>
                <Skeleton className='h-64 md:h-96 w-full' />
              </div>
              <div className='md:w-1/2 p-6 md:p-8'>
                <Skeleton className='h-6 w-24 mb-3' />
                <Skeleton className='h-10 w-full mb-3' />
                <Skeleton className='h-4 w-full mb-2' />
                <Skeleton className='h-4 w-full mb-2' />
                <Skeleton className='h-4 w-3/4 mb-4' />
                <div className='flex items-center gap-4 mb-4'>
                  <Skeleton className='h-4 w-24' />
                  <Skeleton className='h-4 w-20' />
                  <Skeleton className='h-4 w-20' />
                </div>
                <Skeleton className='h-10 w-32' />
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Two Column Layout: Most Viewed + Regular Posts - Skeleton */}
      <PageSection className='py-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid md:grid-cols-3 gap-8'>
            {/* Most Viewed Posts Column - Skeleton */}
            <div className='md:col-span-1'>
              <div className='flex items-center gap-2 mb-6'>
                <Eye className='h-5 w-5 text-facebook' />
                <h2 className='text-xl font-bold'>Most Viewed</h2>
              </div>

              <div className='space-y-6'>
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className='flex gap-4'>
                      <Skeleton className='w-24 h-24 rounded-lg flex-shrink-0' />
                      <div className='flex-1'>
                        <Skeleton className='h-4 w-16 mb-1' />
                        <Skeleton className='h-5 w-full mb-1' />
                        <Skeleton className='h-5 w-3/4 mb-1' />
                        <div className='flex items-center gap-3'>
                          <Skeleton className='h-3 w-16' />
                          <Skeleton className='h-3 w-12' />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Regular Posts Grid - Skeleton */}
            <div className='md:col-span-2'>
              <div className='flex items-center gap-2 mb-6'>
                <TrendingUp className='h-5 w-5 text-facebook' />
                <h2 className='text-xl font-bold'>Latest Articles</h2>
              </div>

              <div className='grid sm:grid-cols-2 gap-6'>
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <Card key={i} className='border border-gray-100 rounded-xl overflow-hidden'>
                      <Skeleton className='h-48 w-full' />
                      <CardContent className='p-5'>
                        <div className='flex items-center justify-between mb-2'>
                          <Skeleton className='h-5 w-20' />
                          <Skeleton className='h-4 w-24' />
                        </div>
                        <Skeleton className='h-6 w-full mb-1' />
                        <Skeleton className='h-6 w-3/4 mb-2' />
                        <Skeleton className='h-4 w-full mb-1' />
                        <Skeleton className='h-4 w-full mb-3' />
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center gap-3'>
                            <Skeleton className='h-4 w-16' />
                            <Skeleton className='h-4 w-16' />
                          </div>
                          <Skeleton className='h-4 w-20' />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Daily New Posts Section - Skeleton */}
      <PageSection bgColor='facebook-light' className='py-10'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex items-center justify-between mb-6'>
            <div className='flex items-center gap-2'>
              <CalendarIcon className='h-5 w-5 text-facebook' />
              <h2 className='text-xl font-bold'>New Posts Every Day</h2>
            </div>
            <Skeleton className='h-4 w-16' />
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <Card key={i} className='border border-gray-100 rounded-xl overflow-hidden'>
                  <Skeleton className='h-48 w-full' />
                  <CardContent className='p-5'>
                    <div className='flex items-center justify-between mb-2'>
                      <Skeleton className='h-5 w-20' />
                      <Skeleton className='h-4 w-24' />
                    </div>
                    <Skeleton className='h-6 w-full mb-1' />
                    <Skeleton className='h-6 w-3/4 mb-2' />
                    <Skeleton className='h-4 w-full mb-1' />
                    <Skeleton className='h-4 w-full mb-3' />
                    <div className='flex items-center justify-between'>
                      <Skeleton className='h-4 w-16' />
                      <Skeleton className='h-8 w-28' />
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </PageSection>

      {/* Pagination - Skeleton */}
      <PageSection className='py-10'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex justify-center'>
            <div className='flex items-center space-x-2'>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className='h-10 w-24' />
                ))}
            </div>
          </div>
        </div>
      </PageSection>
    </SupportingPageLayout>
  )
}
