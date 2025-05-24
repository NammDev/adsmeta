'use client'

import SupportingPageLayout from '@/components/layout/supporting-page-layout'
import ProductsSection from '@/components/home/products-section'
import PageSection from '@/components/page-section'
import { Badge } from '@/components/ui/badge'

export default function ProductsPage() {
  return (
    <SupportingPageLayout
      title='All Products'
      subtitle='Browse our complete collection of Facebook advertising solutions'
      showNewsletter={true}
      breadcrumbs={[{ label: 'Products', href: '/products' }]}
    >
      {/* Title Section with proper spacing */}
      <PageSection className='pt-6 md:pt-8 pb-0'>
        <div className='max-w-6xl mx-auto mb-10'>
          {/* Colorful Badge and Section Title */}
          <div className='flex items-center justify-center gap-3'>
            <Badge className='bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-md px-4 py-1 text-sm'>
              Facebook Products
            </Badge>
            <h2 className='text-2xl md:text-3xl font-bold relative inline-block'>
              Advertising Solutions
              <span className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full'></span>
            </h2>
          </div>
          <p className='text-gray-600 max-w-2xl mx-auto text-center mt-2'>
            Find the perfect tools to boost your Facebook advertising campaigns
          </p>
        </div>
      </PageSection>

      {/* Content Section */}
      <PageSection className='pt-0 pb-12'>
        <ProductsSection showHeader={false} showViewAllButton={false} />
      </PageSection>
    </SupportingPageLayout>
  )
}
