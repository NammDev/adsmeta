'use client'

import { useState, useEffect } from 'react'
import SupportingPageLayout from '@/components/layout/supporting-page-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Package2,
  ShoppingBag,
} from 'lucide-react'
import { useCart } from '@/context/cart-context'
import PageSection from '@/components/page-section'

import {
  getProductsPageData,
  getProductPageCategories,
  filterProductPageItems,
  paginateProductPageItems,
  calculateTotalPages,
  generatePageNumbers,
  type ProductPageItem,
} from '@/data/products'

export default function ProductsPage() {
  // Add state for active filter and pagination
  const [activeFilter, setActiveFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 8 // 2 rows of 4 products

  // Get cart functions
  const { addItem, openCart } = useCart() || { addItem: null, openCart: null }
  const [addToCart, setAddToCart] = useState<((product: ProductPageItem) => void) | null>(null)

  useEffect(() => {
    if (addItem && openCart) {
      setAddToCart(() => (product: ProductPageItem) => {
        if (!product) return // Guard against null product

        try {
          // Extract numeric price from string (e.g., "€80" -> 80)
          // Handle different price formats safely
          const priceString = product.price || '0'
          const numericPrice = Number.parseInt(priceString.replace(/[^0-9]/g, '')) || 0

          addItem({
            id: product.id || `product-${Date.now()}`, // Fallback ID if missing
            name: product.name || 'Unnamed Product',
            price: numericPrice,
            quantity: 1,
            image: product.image || '/placeholder-32px.png',
            category: product.category || 'other',
          })
          openCart() // Open the cart drawer when adding an item
        } catch (error) {
          console.error('Error adding item to cart:', error)
          // Could add user-facing error notification here
        }
      })
    } else {
      console.warn('Cart functionality not available')
      setAddToCart(null)
    }
  }, [addItem, openCart])

  const products: ProductPageItem[] = getProductsPageData()

  const categories = getProductPageCategories()

  const filteredProducts = filterProductPageItems(activeFilter)

  const totalPages = calculateTotalPages(filteredProducts, productsPerPage)
  const currentProducts = paginateProductPageItems(filteredProducts, currentPage, productsPerPage)

  const pageNumbers = generatePageNumbers(currentPage, totalPages)

  const handleFilterChange = (categoryId: string) => {
    setActiveFilter(categoryId)
    setCurrentPage(1) // Reset to first page when filter changes
  }

  return (
    <SupportingPageLayout
      title='All Products'
      subtitle='Browse our complete collection of Facebook advertising solutions'
      showNewsletter={true}
      breadcrumbs={[{ label: 'Products', href: '/products' }]}
    >
      {/* Title Section */}
      <PageSection className='pt-6 md:pt-8 pb-0'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center mb-10'>
            <div className='flex items-center justify-center gap-3'>
              <Badge className='bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 border-0 shadow-md'>
                Facebook Products
              </Badge>
            </div>
            <h1 className='text-3xl md:text-4xl font-bold mt-3 relative inline-block'>
              <span className='relative z-10'>Facebook Advertising Solutions</span>
              <div className='absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full'></div>
            </h1>
            <p className='text-lg text-gray-600 mt-4'>
              Find the perfect tools to boost your Facebook advertising campaigns
            </p>
          </div>
        </div>
      </PageSection>

      {/* Content Section */}
      <PageSection className='pt-0 pb-12'>
        <div className='container mx-auto px-4'>
          {/* Category Filters Title */}
          <div className='mb-8 relative'>
            <div className='flex items-center gap-3 mb-6 relative z-10'>
              <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md'>
                <Package2 className='h-6 w-6 text-white' />
              </div>
              <h2 className='text-2xl font-bold relative'>
                <span className='relative z-10'>Browse Categories</span>
                <div className='absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full'></div>
              </h2>
            </div>

            <div className='flex items-center justify-between mb-4 relative z-10'>
              <span className='text-sm font-medium text-gray-700'>
                Showing {filteredProducts.length} of {products.length} products
              </span>
            </div>

            <div className='flex flex-wrap gap-2 relative z-10'>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeFilter === category.id ? 'default' : 'outline'}
                  size='sm'
                  className={`transition-all ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 border-0 shadow-sm'
                      : 'text-gray-700 hover:border-blue-400 hover:text-blue-600'
                  }`}
                  onClick={() => handleFilterChange(category.id)}
                >
                  {activeFilter === category.id && <CheckCircle className='mr-1 h-3.5 w-3.5' />}
                  {category.name}
                  <span
                    className={`ml-1.5 text-xs rounded-full px-1.5 py-0.5 ${
                      activeFilter === category.id
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {category.count}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <>
              <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 relative z-10'>
                {currentProducts.map((product) => (
                  <Link href={product.url} key={product.id} className='block'>
                    <Card className='overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl group relative h-full flex flex-col'>
                      <div className='absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                      <div className='relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-white overflow-hidden'>
                        <Image
                          src={product.image || '/placeholder.svg'}
                          alt={product.name}
                          fill
                          className='object-cover p-4 transition-transform duration-500 group-hover:scale-105'
                        />
                        {product.badge && (
                          <Badge className='absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-sm'>
                            {product.badge}
                          </Badge>
                        )}
                      </div>
                      <CardContent className='p-3 sm:p-5 relative z-10 flex flex-col flex-grow'>
                        <h3 className='text-sm sm:text-base font-semibold mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors'>
                          {product.name}
                        </h3>
                        <div className='h-10 mb-2 sm:mb-3'>
                          <p className='text-xs sm:text-sm text-gray-600 line-clamp-2'>
                            {product.description}
                          </p>
                        </div>

                        {/* Add the purchase count here */}
                        <div className='flex items-center text-gray-600 mb-2'>
                          <ShoppingBag className='h-3 w-3 mr-1' />
                          <span className='text-xs'>{product.purchases || 0} purchased</span>
                        </div>

                        <div className='flex items-center justify-between mt-auto'>
                          <span className='text-sm sm:text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                            {product.price}
                          </span>
                          <div className='flex gap-1 sm:gap-2'>
                            {addToCart && (
                              <Button
                                size='icon'
                                className='bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 text-white h-10 w-10 rounded-full shadow-md'
                                onClick={(e) => {
                                  e.preventDefault()
                                  e.stopPropagation()
                                  addToCart(product)
                                }}
                                title='Add to cart'
                              >
                                <ShoppingCart className='h-5 w-5' />
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className='flex justify-center mt-12'>
                  <nav className='flex items-center gap-1' aria-label='Pagination'>
                    <Button
                      variant='outline'
                      size='icon'
                      className='h-9 w-9 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors'
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      aria-label='Previous page'
                    >
                      <ChevronLeft className='h-4 w-4' />
                    </Button>

                    {pageNumbers.map((pageNumber, index) => {
                      if (pageNumber === 'ellipsis-start' || pageNumber === 'ellipsis-end') {
                        return (
                          <span
                            key={`ellipsis-${index}`}
                            className='px-3 py-2 text-sm text-gray-500'
                          >
                            ...
                          </span>
                        )
                      }

                      return (
                        <Button
                          key={`page-${pageNumber}`}
                          variant={currentPage === pageNumber ? 'default' : 'outline'}
                          size='icon'
                          className={`h-9 w-9 ${
                            currentPage === pageNumber
                              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 border-0 shadow-sm'
                              : 'hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300'
                          }`}
                          onClick={() => setCurrentPage(pageNumber as number)}
                          aria-label={`Page ${pageNumber}`}
                          aria-current={currentPage === pageNumber ? 'page' : undefined}
                        >
                          {pageNumber}
                        </Button>
                      )
                    })}

                    <Button
                      variant='outline'
                      size='icon'
                      className='h-9 w-9 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors'
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      aria-label='Next page'
                    >
                      <ChevronRight className='h-4 w-4' />
                    </Button>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <div className='text-center py-8 sm:py-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl relative overflow-hidden'>
              <div className='relative z-10'>
                <div className='text-3xl sm:text-4xl mb-3 sm:mb-4'>🔍</div>
                <h3 className='text-lg sm:text-xl font-semibold mb-2'>No products found</h3>
                <p className='text-sm sm:text-base text-gray-600 mb-3 sm:mb-4'>
                  We couldn't find any products matching your selected category.
                </p>
                <Button
                  onClick={() => handleFilterChange('all')}
                  size='sm'
                  className='bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 text-white shadow-sm'
                >
                  View All Products
                </Button>
              </div>
            </div>
          )}
        </div>
      </PageSection>

      {/* Additional Info Section Title */}
      <PageSection className='pt-6 md:pt-8 pb-0'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-10'>
            <h3 className='text-xl md:text-2xl font-bold'>Looking for Custom Solutions?</h3>
          </div>
        </div>
      </PageSection>

      {/* Additional Info Section Content */}
      <PageSection className='pt-0 pb-12'>
        <div className='container mx-auto px-4'>
          <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 relative overflow-hidden'>
            <div className='flex flex-col md:flex-row items-center gap-6 relative z-10'>
              <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md flex-shrink-0'>
                <ShoppingCart className='h-8 w-8 text-white' />
              </div>
              <div>
                <p className='text-gray-600 mb-4 text-center md:text-left'>
                  Check out our value packs for bundled solutions or contact our team for custom
                  requirements.
                </p>
                <div className='flex flex-wrap justify-center md:justify-start gap-3'>
                  <Button
                    asChild
                    className='bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 text-white shadow-sm'
                  >
                    <Link href='/packs'>View Value Packs</Link>
                  </Button>
                  <Button
                    asChild
                    variant='outline'
                    className='border-gray-300 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300'
                  >
                    <Link href='/contact'>Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </SupportingPageLayout>
  )
}
