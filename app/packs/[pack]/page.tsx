'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Check,
  ShoppingCart,
  AlertCircle,
  Package2,
  Star,
  Shield,
  Zap,
  Clock,
  CreditCard,
  Users,
  Award,
} from 'lucide-react'
import SupportingPageLayout from '@/components/supporting-page-layout'
import { useCart } from '@/context/cart-context'

// Pack type definition
interface Pack {
  id: string
  slug: string
  name: string
  description: string
  longDescription: string
  price: number
  comparePrice?: number
  features: string[]
  includes: Array<{
    name: string
    description: string
    icon?: string
  }>
  image: string
  badge?: string
  stock: 'in-stock' | 'low-stock' | 'out-of-stock'
  deliveryTime: string
  faq: Array<{ question: string; answer: string }>
}

// Sample pack data - in a real app, this would come from an API or database
const packsData: Pack[] = [
  {
    id: 'starter-pack',
    slug: 'starter-pack',
    name: 'Starter Pack',
    description: 'Perfect for beginners starting with Facebook ads',
    longDescription: `Our Starter Pack is designed for individuals and small businesses who are just beginning their journey with Facebook advertising. This comprehensive package provides everything you need to get started with confidence.

    The pack includes a verified Business Manager with basic ad account setup, essential documentation, and a beginner-friendly guide to help you navigate the Facebook ads platform. We've also included email support to assist you with any questions you might have during the setup process.

    This is the ideal solution for those who want to start advertising on Facebook without the complexity and high costs often associated with advanced advertising solutions.`,
    price: 199,
    comparePrice: 249,
    features: [
      '1 Verified Business Manager',
      '1 Ad Account',
      'Basic setup guide',
      'Email support',
      '30-day warranty',
      'Beginner-friendly documentation',
      'Access to basic tutorials',
      'Payment method setup assistance',
    ],
    includes: [
      {
        name: 'Verified Business Manager',
        description: 'A fully verified Business Manager account ready for advertising',
        icon: '/facebook-business-manager-icon.png',
      },
      {
        name: 'Ad Account',
        description: '1 standard ad account with basic spending limit',
        icon: '/facebook-payment-method-icon.png',
      },
      {
        name: 'Setup Guide',
        description: 'Step-by-step guide for beginners to start advertising',
        icon: '/facebook-ads-setup.png',
      },
    ],
    image: '/facebook-starter-pack.png',
    badge: 'Popular',
    stock: 'in-stock',
    deliveryTime: '24 hours',
    faq: [
      {
        question: 'Is this pack suitable for complete beginners?',
        answer:
          'Yes, this pack is specifically designed for beginners with no prior experience in Facebook advertising.',
      },
      {
        question: 'Can I upgrade to a more advanced pack later?',
        answer:
          "You can upgrade to our Pro Pack or Agency Pack at any time. We'll provide a discount based on your initial purchase.",
      },
      {
        question: 'What kind of support is included?',
        answer:
          'The Starter Pack includes email support to help you with basic setup and troubleshooting. Support is available during business hours.',
      },
      {
        question: 'How long does it take to set everything up?',
        answer:
          'Most users can complete the setup process in 1-2 hours following our step-by-step guide. If you encounter any issues, our support team is ready to assist.',
      },
    ],
  },
  {
    id: 'pro-pack',
    slug: 'pro-pack',
    name: 'Pro Pack',
    description: 'For growing businesses with established ad campaigns',
    longDescription: `The Pro Pack is our mid-tier solution designed for growing businesses and marketers who have some experience with Facebook advertising and are looking to scale their efforts.

    This comprehensive package includes a verified BM5 Business Manager with a $250 spending limit, multiple ad accounts, and advanced setup documentation. The Pro Pack also comes with priority email support and a one-month consultation to help you optimize your advertising strategy.

    With the Pro Pack, you'll have all the tools and resources needed to take your Facebook advertising to the next level and achieve better results for your business or clients.`,
    price: 399,
    features: [
      '1 Verified BM5 with $250 limit',
      '3 Ad Accounts',
      'Advanced setup guide',
      'Priority email support',
      '1 month consultation',
      '60-day warranty',
      'Campaign optimization tips',
      'Audience targeting strategies',
    ],
    includes: [
      {
        name: 'Verified BM5 Business Manager',
        description: 'A premium Business Manager with $250 spending limit',
        icon: '/verified-facebook-business-manager-icon.png',
      },
      {
        name: 'Multiple Ad Accounts',
        description: '3 ad accounts for different campaigns or clients',
        icon: '/multiple-payment-methods-icon.png',
      },
      {
        name: 'Pixel Setup',
        description: 'Facebook Pixel setup for conversion tracking',
        icon: '/facebook-pixel-tracking-icon.png',
      },
    ],
    image: '/facebook-ads-success-graph.png',
    badge: 'Best Value',
    stock: 'in-stock',
    deliveryTime: '48 hours',
    faq: [
      {
        question: "What's the difference between the Starter Pack and Pro Pack?",
        answer:
          'The Pro Pack includes a higher-tier Business Manager (BM5) with a $250 spending limit, 3 ad accounts instead of 1, priority support, and a one-month consultation for campaign optimization.',
      },
      {
        question: 'Is the consultation one-on-one or group-based?',
        answer:
          'The consultation is one-on-one and tailored to your specific business needs and advertising goals.',
      },
      {
        question: 'Can I add more ad accounts later?',
        answer:
          'Yes, additional ad accounts can be purchased separately or you can upgrade to our Agency Pack for more accounts.',
      },
      {
        question: 'What kind of spending limit increases can I expect?',
        answer:
          'With proper account management and consistent spending, you can typically request limit increases after 2-3 months of advertising history.',
      },
    ],
  },
  {
    id: 'agency-pack',
    slug: 'agency-pack',
    name: 'Agency Pack',
    description: 'Complete solution for marketing agencies managing multiple clients',
    longDescription: `The Agency Pack is our premium solution designed specifically for marketing agencies and professional advertisers managing multiple clients or large-scale campaigns.

    This comprehensive package includes an unlimited verified BM5 Business Manager, multiple ad accounts, and a complete agency setup guide. The Agency Pack also comes with priority support and a three-month consultation to help you optimize your client campaigns and scale your agency.

    With the Agency Pack, you'll have all the tools and resources needed to manage multiple clients efficiently and deliver exceptional results for your agency.`,
    price: 799,
    features: [
      '1 Unlimited Verified BM5',
      '5 Ad Accounts',
      'Agency setup guide',
      'Priority support',
      '3 months consultation',
      'Account strategy review',
      '90-day warranty',
      'Client management tools',
    ],
    includes: [
      {
        name: 'Unlimited Verified BM5',
        description: 'Premium Business Manager with unlimited potential',
        icon: '/verified-facebook-business-manager-icon.png',
      },
      {
        name: 'Multiple Client Setup',
        description: 'Structure for managing multiple clients efficiently',
        icon: '/growing-business-icon.png',
      },
      {
        name: 'Advanced Strategies',
        description: 'Professional-level advertising strategies and tools',
        icon: '/experienced-marketer-icon.png',
      },
    ],
    image: '/facebook-agency-pack.png',
    badge: 'Premium',
    stock: 'low-stock',
    deliveryTime: '72 hours',
    faq: [
      {
        question: 'Is this pack suitable for agencies of all sizes?',
        answer:
          "Yes, the Agency Pack is designed to scale with your agency, whether you're managing a handful of clients or dozens.",
      },
      {
        question: "What does 'unlimited' BM5 mean?",
        answer:
          'The unlimited BM5 has no preset spending limit cap and can be scaled to accommodate large advertising budgets across multiple clients.',
      },
      {
        question: 'Can I add team members to manage different clients?',
        answer:
          'Yes, the Agency Pack supports multiple team members with different permission levels for efficient client management.',
      },
      {
        question: 'What kind of consultation is included?',
        answer:
          "The 3-month consultation includes strategy sessions, account reviews, and optimization recommendations tailored to your agency's client portfolio.",
      },
    ],
  },
  // Add more packs as needed
]

// Feature icons mapping
const featureIcons = [
  <Shield className='h-4 w-4 text-white' key='shield' />,
  <Users className='h-4 w-4 text-white' key='users' />,
  <Zap className='h-4 w-4 text-white' key='zap' />,
  <Star className='h-4 w-4 text-white' key='star' />,
  <Clock className='h-4 w-4 text-white' key='clock' />,
  <Award className='h-4 w-4 text-white' key='award' />,
  <CreditCard className='h-4 w-4 text-white' key='creditcard' />,
  <Package2 className='h-4 w-4 text-white' key='package' />,
]

// Gradient backgrounds for features
const gradients = [
  'from-blue-500 to-indigo-600',
  'from-purple-500 to-pink-600',
  'from-amber-500 to-orange-600',
  'from-emerald-500 to-teal-600',
  'from-rose-500 to-red-600',
  'from-cyan-500 to-blue-600',
  'from-fuchsia-500 to-purple-600',
  'from-lime-500 to-green-600',
]

export default function PackPage() {
  const params = useParams()
  const packSlug = params.pack as string
  const [pack, setPack] = useState<Pack | null>(null)
  const { addToCart } = useCart()
  // Remove this line
  // const [activeTab, setActiveTab] = useState("description")

  useEffect(() => {
    // Find the pack based on the slug
    const foundPack = packsData.find((p) => p.slug === packSlug)
    setPack(foundPack || null)
  }, [packSlug])

  if (!pack) {
    return (
      <SupportingPageLayout
        title='Pack Not Found'
        subtitle="The pack you're looking for doesn't exist or has been removed."
        breadcrumbs={[
          { label: 'Packs', href: '/packs' },
          { label: 'Not Found', href: '#' },
        ]}
      >
        <div className='py-12 flex flex-col items-center justify-center'>
          <AlertCircle className='h-16 w-16 text-red-500 mb-4' />
          <p className='text-gray-600 mb-6'>
            Please check the URL or browse our packs to find what you're looking for.
          </p>
          <Button asChild className='bg-facebook hover:bg-facebook/90'>
            <a href='/packs'>Browse Packs</a>
          </Button>
        </div>
      </SupportingPageLayout>
    )
  }

  const handleAddToCart = () => {
    addToCart({
      id: pack.id,
      name: pack.name,
      price: pack.price,
      image: pack.image,
      quantity: 1,
      category: 'Pack',
    })
  }

  // Stock status indicator
  const stockStatus = {
    'in-stock': {
      label: 'In Stock',
      color: 'bg-gradient-to-r from-green-400 to-emerald-500 text-white',
    },
    'low-stock': {
      label: 'Low Stock',
      color: 'bg-gradient-to-r from-amber-400 to-orange-500 text-white',
    },
    'out-of-stock': {
      label: 'Out of Stock',
      color: 'bg-gradient-to-r from-red-400 to-rose-500 text-white',
    },
  }

  return (
    <div>
      <SupportingPageLayout
        title={pack.name}
        subtitle={pack.description}
        breadcrumbs={[
          { label: 'Packs', href: '/packs' },
          { label: pack.name, href: `/packs/${pack.slug}` },
        ]}
      >
        {/* Colorful Background Elements */}
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
          <div className='absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl'></div>
          <div className='absolute top-40 right-10 w-80 h-80 rounded-full bg-purple-200 opacity-20 blur-3xl'></div>
          <div className='absolute bottom-20 left-1/4 w-96 h-96 rounded-full bg-pink-200 opacity-20 blur-3xl'></div>
          <div className='absolute bottom-40 right-1/3 w-72 h-72 rounded-full bg-indigo-200 opacity-20 blur-3xl'></div>
        </div>

        <div className='container mx-auto px-4 pb-10 md:pb-12 pt-6 md:pt-8 relative z-10'>
          {/* Mobile Pack Overview */}
          <div className='md:hidden mb-6'>
            <Card className='overflow-hidden border-0 shadow-xl relative bg-white/80 backdrop-blur-sm'>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full -translate-y-1/2 translate-x-1/2 z-0'></div>
              <CardContent className='p-4 relative z-10'>
                {/* Pack Image and Details in a more balanced layout */}
                <div className='flex items-center rounded-lg p-3 bg-gradient-to-br from-gray-50 to-white mb-3 border border-gray-100 shadow-sm'>
                  {/* Pack Image */}
                  <div className='w-20 h-20 flex-shrink-0 relative rounded-md overflow-hidden border-2 border-gradient-to-r from-blue-300 to-purple-300 bg-white transform transition-transform hover:scale-105 duration-300'>
                    <div className='absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10 mix-blend-overlay'></div>
                    <Image
                      src={pack.image || '/placeholder.svg'}
                      alt={pack.name}
                      fill
                      className='object-contain p-1'
                    />
                  </div>

                  {/* Price and Stock Status */}
                  <div className='flex-1 ml-4'>
                    <div className='flex items-center gap-2 mb-1'>
                      <span className='text-xl font-bold bg-gradient-to-r from-facebook to-blue-700 bg-clip-text text-transparent'>
                        €{pack.price}
                      </span>
                      {pack.comparePrice && (
                        <span className='text-sm text-gray-500 line-through'>
                          €{pack.comparePrice}
                        </span>
                      )}
                    </div>

                    <Badge
                      className={`${
                        pack.stock === 'in-stock'
                          ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white border-0 shadow-sm'
                          : pack.stock === 'low-stock'
                          ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0 shadow-sm'
                          : 'bg-gradient-to-r from-red-400 to-rose-500 text-white border-0 shadow-sm'
                      }`}
                    >
                      {stockStatus[pack.stock].label}
                    </Badge>

                    <p className='text-xs text-gray-600 mt-1 flex items-center'>
                      <Clock className='h-3 w-3 mr-1 text-blue-500' />
                      Delivery: {pack.deliveryTime}
                    </p>
                  </div>
                </div>

                {/* Short Description */}
                <p className='text-sm text-gray-700 mb-4'>{pack.description}</p>

                {/* Add to Cart Button */}
                <Button
                  onClick={handleAddToCart}
                  className='w-full bg-gradient-to-r from-facebook to-blue-700 hover:from-facebook-dark hover:to-blue-800 text-white flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300'
                  disabled={pack.stock === 'out-of-stock'}
                >
                  <ShoppingCart className='h-5 w-5' />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Desktop Layout */}
          <div className='hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Left Column - Pack Info */}
            <div className='lg:col-span-2 space-y-8'>
              {/* Pack Overview */}
              <Card className='overflow-hidden border-0 shadow-xl relative bg-white/80 backdrop-blur-sm'>
                <div className='absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full -translate-y-1/2 translate-x-1/2 z-0'></div>
                <CardContent className='p-6 relative z-10'>
                  <div className='flex flex-col md:flex-row gap-6'>
                    {/* Pack Image */}
                    <div className='md:w-1/3 flex-shrink-0'>
                      <div className='relative aspect-square rounded-xl overflow-hidden border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 group'>
                        <div className='absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 mix-blend-overlay group-hover:opacity-70 transition-opacity duration-300'></div>
                        <Image
                          src={pack.image || '/placeholder.svg'}
                          alt={pack.name}
                          fill
                          className='object-cover transform transition-transform group-hover:scale-105 duration-500'
                        />
                        {pack.badge && (
                          <div className='absolute top-3 right-3 rotate-3'>
                            <Badge className='bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0 shadow-md px-3 py-1.5 text-sm font-bold'>
                              {pack.badge}
                            </Badge>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Pack Details */}
                    <div className='md:w-2/3'>
                      <div className='flex items-center gap-2 mb-2'>
                        <div className='w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-md'>
                          <Package2 className='h-5 w-5 text-white' />
                        </div>
                        <h2 className='text-2xl font-bold relative inline-block'>
                          <span className='relative z-10'>{pack.name}</span>
                          <div className='absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 rounded-full'></div>
                        </h2>
                      </div>

                      <div className='flex items-center gap-4 mb-4'>
                        <div className='flex items-center'>
                          <span className='text-3xl font-bold bg-gradient-to-r from-facebook to-blue-700 bg-clip-text text-transparent'>
                            €{pack.price}
                          </span>
                          {pack.comparePrice && (
                            <span className='ml-2 text-gray-500 line-through'>
                              €{pack.comparePrice}
                            </span>
                          )}
                        </div>

                        <Badge
                          className={`${
                            pack.stock === 'in-stock'
                              ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white border-0 shadow-sm'
                              : pack.stock === 'low-stock'
                              ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0 shadow-sm'
                              : 'bg-gradient-to-r from-red-400 to-rose-500 text-white border-0 shadow-sm'
                          }`}
                        >
                          {stockStatus[pack.stock].label}
                        </Badge>
                      </div>

                      <p className='text-gray-700 mb-4 text-lg'>{pack.description}</p>

                      <div className='flex flex-wrap gap-3 mb-4'>
                        {pack.features.slice(0, 4).map((feature, index) => (
                          <Badge
                            key={index}
                            className='bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-300 py-1.5 px-3 border-0'
                          >
                            <Check className='h-3.5 w-3.5 mr-1 text-green-500' />
                            {feature.split(' ')[0]}
                          </Badge>
                        ))}
                      </div>

                      <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                        <Button
                          onClick={handleAddToCart}
                          className='bg-gradient-to-r from-facebook to-blue-700 hover:from-facebook-dark hover:to-blue-800 text-white flex items-center gap-2 shadow-md hover:shadow-xl transition-all duration-300 py-6 px-8 text-lg'
                          disabled={pack.stock === 'out-of-stock'}
                        >
                          <ShoppingCart className='h-5 w-5' />
                          Add to Cart
                        </Button>

                        <Button
                          variant='outline'
                          asChild
                          className='border-gray-300 hover:border-facebook hover:text-facebook transition-colors duration-300'
                        >
                          <a href='/contact'>Contact Support</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pack Description */}
              <Card className='overflow-hidden border-0 shadow-xl relative bg-white/80 backdrop-blur-sm'>
                <div className='absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full -translate-y-1/2 -translate-x-1/2'></div>
                <div className='absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-200/10 to-indigo-200/10 rounded-full translate-y-1/2 translate-x-1/2'></div>

                <CardContent className='p-6 relative z-10'>
                  <h3 className='text-xl font-bold mb-4 relative inline-block'>
                    <span className='relative z-10'>Pack Description</span>
                    <div className='absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 rounded-full'></div>
                  </h3>

                  <div className='prose max-w-none'>
                    {pack.longDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className='mb-4 text-gray-700'>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Key Benefits */}
                  <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100 relative group overflow-hidden'>
                      <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                      <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110'>
                        <Zap className='h-6 w-6 text-white' />
                      </div>
                      <h4 className='font-bold text-center mb-2 text-blue-800'>Quick Setup</h4>
                      <p className='text-sm text-center text-gray-700'>
                        Get started with Facebook ads in minutes, not days.
                      </p>
                    </div>

                    <div className='bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-100 relative group overflow-hidden'>
                      <div className='absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                      <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110'>
                        <Shield className='h-6 w-6 text-white' />
                      </div>
                      <h4 className='font-bold text-center mb-2 text-purple-800'>
                        Verified Quality
                      </h4>
                      <p className='text-sm text-center text-gray-700'>
                        All accounts are fully verified and ready for advertising.
                      </p>
                    </div>

                    <div className='bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-100 relative group overflow-hidden'>
                      <div className='absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                      <div className='w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110'>
                        <Users className='h-6 w-6 text-white' />
                      </div>
                      <h4 className='font-bold text-center mb-2 text-amber-800'>Expert Support</h4>
                      <p className='text-sm text-center text-gray-700'>
                        Get help from our team of Facebook ads specialists.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What's Included */}
              <Card className='overflow-hidden border-0 shadow-xl relative bg-white/80 backdrop-blur-sm mt-8'>
                <div className='absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-200/10 to-blue-200/10 rounded-full -translate-y-1/2 -translate-x-1/2'></div>
                <div className='absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-200/10 to-purple-200/10 rounded-full translate-y-1/2 translate-x-1/2'></div>

                <CardContent className='p-6 relative z-10'>
                  <h3 className='text-xl font-bold mb-6 relative inline-block'>
                    <span className='relative z-10'>What's Included</span>
                    <div className='absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-purple-200 to-blue-200 opacity-70 rounded-full'></div>
                  </h3>

                  <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {pack.includes.map((item, index) => (
                      <div
                        key={index}
                        className='bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 text-center group relative overflow-hidden'
                      >
                        <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                        {item.icon && (
                          <div className='relative w-20 h-20 mx-auto mb-4 transform transition-transform group-hover:scale-110 duration-300'>
                            <div className='absolute inset-0 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-xl -rotate-6'></div>
                            <div className='absolute inset-0 bg-white rounded-xl rotate-3 border border-gray-100'></div>
                            <div className='relative w-full h-full flex items-center justify-center p-3'>
                              <Image
                                src={item.icon || '/placeholder.svg'}
                                alt={item.name}
                                width={64}
                                height={64}
                                className='object-contain'
                              />
                            </div>
                          </div>
                        )}

                        <h4 className='text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300'>
                          {item.name}
                        </h4>
                        <p className='text-sm text-gray-700'>{item.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Delivery Process */}
                  <div className='mt-10 relative'>
                    <h4 className='text-lg font-bold mb-6 text-center'>Delivery Process</h4>

                    {/* Connection Line */}
                    <div className='absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-y-1/2 hidden md:block'></div>

                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                      <div className='bg-white rounded-xl p-4 text-center relative z-10 border border-gray-100 shadow-md group hover:shadow-lg transition-all duration-300'>
                        <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300'>
                          <span className='text-white font-bold'>1</span>
                        </div>
                        <h5 className='font-bold mb-1 group-hover:text-blue-600 transition-colors duration-300'>
                          Order Placed
                        </h5>
                        <p className='text-xs text-gray-600'>
                          Your order is confirmed and processed
                        </p>
                      </div>

                      <div className='bg-white rounded-xl p-4 text-center relative z-10 border border-gray-100 shadow-md group hover:shadow-lg transition-all duration-300'>
                        <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300'>
                          <span className='text-white font-bold'>2</span>
                        </div>
                        <h5 className='font-bold mb-1 group-hover:text-blue-600 transition-colors duration-300'>
                          Account Setup
                        </h5>
                        <p className='text-xs text-gray-600'>We prepare your Facebook accounts</p>
                      </div>

                      <div className='bg-white rounded-xl p-4 text-center relative z-10 border border-gray-100 shadow-md group hover:shadow-lg transition-all duration-300'>
                        <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300'>
                          <span className='text-white font-bold'>3</span>
                        </div>
                        <h5 className='font-bold mb-1 group-hover:text-blue-600 transition-colors duration-300'>
                          Delivery
                        </h5>
                        <p className='text-xs text-gray-600'>Account details sent to your email</p>
                      </div>

                      <div className='bg-white rounded-xl p-4 text-center relative z-10 border border-gray-100 shadow-md group hover:shadow-lg transition-all duration-300'>
                        <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300'>
                          <span className='text-white font-bold'>4</span>
                        </div>
                        <h5 className='font-bold mb-1 group-hover:text-blue-600 transition-colors duration-300'>
                          Support
                        </h5>
                        <p className='text-xs text-gray-600'>Ongoing support for your questions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <Card className='overflow-hidden border-0 shadow-xl relative bg-white/80 backdrop-blur-sm mt-8'>
                <div className='absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full -translate-y-1/2 -translate-x-1/2'></div>
                <div className='absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-200/10 to-indigo-200/10 rounded-full translate-y-1/2 translate-x-1/2'></div>

                <CardContent className='p-6 relative z-10'>
                  <h3 className='text-xl font-bold mb-6 relative inline-block'>
                    <span className='relative z-10'>Frequently Asked Questions</span>
                    <div className='absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 rounded-full'></div>
                  </h3>

                  <div className='space-y-4'>
                    {pack.faq.map((item, index) => (
                      <div
                        key={index}
                        className='bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 group relative overflow-hidden'
                      >
                        <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                        <h4 className='font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 flex items-start'>
                          <span className='w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs mr-3 flex-shrink-0 mt-0.5'>
                            Q
                          </span>
                          {item.question}
                        </h4>

                        <div className='pl-9'>
                          <p className='text-gray-700'>{item.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Additional Questions */}
                  <div className='mt-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 relative overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-50'></div>

                    <h4 className='text-lg font-bold mb-3 text-center relative z-10'>
                      Still Have Questions?
                    </h4>
                    <p className='text-center text-gray-700 mb-4 relative z-10'>
                      Our team is ready to help you with any additional questions you might have.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-3 justify-center relative z-10'>
                      <Button
                        asChild
                        className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-xl'
                      >
                        <a href='/contact'>Contact Support</a>
                      </Button>
                      <Button
                        asChild
                        variant='outline'
                        className='border-gray-300 hover:border-blue-500 hover:text-blue-600 font-medium rounded-xl'
                      >
                        <a href='/faq'>View All FAQs</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Features & Purchase Info */}
            <div className='space-y-6'>
              {/* Features Card */}
              <Card className='overflow-hidden border-0 shadow-xl relative bg-white/80 backdrop-blur-sm'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/20 to-purple-200/20 rounded-full -translate-y-1/2 translate-x-1/2 z-0'></div>
                <CardContent className='p-6 relative z-10'>
                  <h3 className='text-xl font-bold mb-5 relative inline-block'>
                    <span className='relative z-10'>Features</span>
                    <div className='absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 rounded-full'></div>
                  </h3>

                  <div className='grid grid-cols-1 gap-3'>
                    {pack.features.map((feature, index) => (
                      <div
                        key={index}
                        className='flex items-start gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group'
                      >
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-br ${
                            gradients[index % gradients.length]
                          } flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110 flex-shrink-0`}
                        >
                          {featureIcons[index % featureIcons.length]}
                        </div>
                        <span className='text-gray-700 group-hover:text-gray-900 transition-colors duration-300'>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Purchase Info Card */}
              <Card className='overflow-hidden border-0 shadow-xl relative bg-white/80 backdrop-blur-sm'>
                <div className='absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full translate-y-1/2 -translate-x-1/2 z-0'></div>
                <CardContent className='p-6 relative z-10'>
                  <h3 className='text-xl font-bold mb-5 relative inline-block'>
                    <span className='relative z-10'>Purchase Information</span>
                    <div className='absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 rounded-full'></div>
                  </h3>

                  <div className='space-y-4'>
                    <div className='flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm group'>
                      <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110 flex-shrink-0'>
                        <Clock className='h-4 w-4 text-white' />
                      </div>
                      <div>
                        <h4 className='font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300 text-sm'>
                          Delivery Time
                        </h4>
                        <p className='text-gray-700 text-sm'>{pack.deliveryTime}</p>
                      </div>
                    </div>

                    <div className='flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm group'>
                      <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110 flex-shrink-0'>
                        <CreditCard className='h-4 w-4 text-white' />
                      </div>
                      <div>
                        <h4 className='font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-300 text-sm'>
                          Payment Methods
                        </h4>
                        <p className='text-gray-700 text-sm'>Credit Card, PayPal, Cryptocurrency</p>
                      </div>
                    </div>

                    <div className='flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm group'>
                      <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110 flex-shrink-0'>
                        <Users className='h-4 w-4 text-white' />
                      </div>
                      <div>
                        <h4 className='font-medium text-gray-900 group-hover:text-amber-600 transition-colors duration-300 text-sm'>
                          Support
                        </h4>
                        <p className='text-gray-700 text-sm'>Email, Live Chat (Business Hours)</p>
                      </div>
                    </div>

                    <div className='flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm group'>
                      <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110 flex-shrink-0'>
                        <Shield className='h-4 w-4 text-white' />
                      </div>
                      <div>
                        <h4 className='font-medium text-gray-900 group-hover:text-emerald-600 transition-colors duration-300 text-sm'>
                          Warranty
                        </h4>
                        <p className='text-gray-700 text-sm'>30-day replacement warranty</p>
                      </div>
                    </div>
                  </div>

                  <div className='mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5 relative overflow-hidden border border-blue-100'>
                    <div className='absolute top-0 right-0 w-20 h-20 bg-blue-200/20 rounded-full -translate-y-1/2 translate-x-1/2'></div>
                    <div className='absolute bottom-0 left-0 w-16 h-16 bg-purple-200/20 rounded-full translate-y-1/2 -translate-x-1/2'></div>

                    <h4 className='font-bold mb-2 text-center relative z-10 text-gray-800'>
                      Ready to get started?
                    </h4>
                    <p className='text-gray-600 text-sm mb-4 text-center relative z-10'>
                      Get your {pack.name} now and start advertising!
                    </p>

                    <Button
                      onClick={handleAddToCart}
                      className='w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 relative z-10'
                      disabled={pack.stock === 'out-of-stock'}
                    >
                      Add to Cart - €{pack.price}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Compare Packs */}
              <Card className='overflow-hidden border-0 shadow-xl relative bg-white/80 backdrop-blur-sm'>
                <div className='absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full -translate-y-1/2 -translate-x-1/2 z-0'></div>
                <CardContent className='p-6 relative z-10'>
                  <h3 className='text-xl font-bold mb-5 relative inline-block'>
                    <span className='relative z-10'>Compare Packs</span>
                    <div className='absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-purple-200 to-blue-200 opacity-70 rounded-full'></div>
                  </h3>

                  <div className='space-y-4'>
                    {packsData
                      .filter((p) => p.id !== pack.id)
                      .slice(0, 2)
                      .map((otherPack) => (
                        <div
                          key={otherPack.id}
                          className='flex items-center gap-4 p-3 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 group relative overflow-hidden'
                        >
                          <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                          <div className='relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden border-2 border-gradient-to-r from-blue-300 to-purple-300 bg-white shadow-sm group-hover:shadow-md transition-all duration-300'>
                            <div className='absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10 mix-blend-overlay'></div>
                            <Image
                              src={otherPack.image || '/placeholder.svg'}
                              alt={otherPack.name}
                              fill
                              className='object-cover rounded transform transition-transform group-hover:scale-105 duration-300'
                            />
                          </div>

                          <div className='flex-1 min-w-0'>
                            <h4 className='font-medium text-gray-900 truncate group-hover:text-blue-600 transition-colors duration-300'>
                              {otherPack.name}
                            </h4>
                            <p className='text-sm text-gray-600 truncate'>
                              {otherPack.description}
                            </p>
                          </div>

                          <div className='text-right'>
                            <p className='font-bold bg-gradient-to-r from-facebook to-blue-700 bg-clip-text text-transparent'>
                              €{otherPack.price}
                            </p>
                            <Button asChild variant='link' className='h-auto p-0 text-xs'>
                              <a href={`/packs/${otherPack.slug}`}>View</a>
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>

                  <Button
                    asChild
                    variant='outline'
                    className='w-full mt-4 border-gray-300 hover:border-facebook hover:text-facebook transition-colors duration-300'
                  >
                    <a href='/packs'>View All Packs</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card className='overflow-hidden border-0 shadow-xl relative bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-blue-200/10 rounded-full -translate-y-1/2 translate-x-1/2'></div>
                <div className='absolute bottom-0 left-0 w-24 h-24 bg-purple-200/10 rounded-full translate-y-1/2 -translate-x-1/2'></div>

                <CardContent className='p-6 relative z-10'>
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='text-white'
                    >
                      <path d='M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z'></path>
                      <path d='M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z'></path>
                    </svg>
                  </div>

                  <p className='text-center mb-4 italic text-gray-700'>
                    "The {pack.name} completely transformed our Facebook advertising capabilities.
                    Highly recommended!"
                  </p>

                  <div className='flex items-center justify-center'>
                    <div className='w-10 h-10 rounded-full bg-white overflow-hidden mr-3 border border-gray-200'>
                      <Image
                        src='/male-marketing-owner.png'
                        alt='Customer'
                        width={40}
                        height={40}
                        className='object-cover'
                      />
                    </div>
                    <div className='text-left'>
                      <p className='font-bold text-sm text-gray-800'>Michael Thompson</p>
                      <p className='text-gray-600 text-xs'>Marketing Director</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mobile Pack Description and Features */}
          <div className='md:hidden space-y-6 mt-4'>
            {/* Description */}
            <Card className='overflow-hidden border-0 shadow-md relative bg-white/80 backdrop-blur-sm'>
              <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-200/20 to-purple-200/20 rounded-full -translate-y-1/2 translate-x-1/2 z-0'></div>
              <CardContent className='p-4 relative z-10'>
                <h3 className='text-lg font-bold mb-3 relative inline-block'>
                  <span className='relative z-10'>Description</span>
                  <div className='absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full'></div>
                </h3>
                <div className='prose max-w-none text-sm'>
                  {pack.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className='mb-3 text-gray-700'>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className='overflow-hidden border-0 shadow-md relative bg-white/80 backdrop-blur-sm'>
              <div className='absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full translate-y-1/2 -translate-x-1/2 z-0'></div>
              <CardContent className='p-4 relative z-10'>
                <h3 className='text-lg font-bold mb-3 relative inline-block'>
                  <span className='relative z-10'>Features</span>
                  <div className='absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full'></div>
                </h3>
                <ul className='space-y-2'>
                  {pack.features.map((feature, index) => (
                    <li key={index} className='flex items-start group'>
                      <div className='mr-2 flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-sm'>
                        <Check className='h-3 w-3 text-white' />
                      </div>
                      <span className='text-sm text-gray-700'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card className='overflow-hidden border-0 shadow-md relative bg-white/80 backdrop-blur-sm'>
              <div className='absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full -translate-y-1/2 -translate-x-1/2 z-0'></div>
              <CardContent className='p-4 relative z-10'>
                <h3 className='text-lg font-bold mb-3 relative inline-block'>
                  <span className='relative z-10'>What's Included</span>
                  <div className='absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-200 to-blue-200 opacity-50 rounded-full'></div>
                </h3>
                <div className='space-y-4'>
                  {pack.includes.map((item, index) => (
                    <div key={index} className='flex items-start gap-3 group'>
                      {item.icon && (
                        <div className='relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden border-2 border-blue-300 bg-white shadow-sm mt-1'>
                          <div className='absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10 mix-blend-overlay'></div>
                          <Image
                            src={item.icon || '/placeholder.svg'}
                            alt={item.name}
                            width={48}
                            height={48}
                            className='object-contain p-1'
                          />
                        </div>
                      )}
                      <div className='flex-1'>
                        <h4 className='font-medium text-gray-900 text-sm'>{item.name}</h4>
                        <p className='text-xs text-gray-600'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className='overflow-hidden border-0 shadow-md relative bg-white/80 backdrop-blur-sm'>
              <div className='absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-200/20 to-purple-200/20 rounded-full translate-y-1/2 translate-x-1/2 z-0'></div>
              <CardContent className='p-4 relative z-10'>
                <h3 className='text-lg font-bold mb-3 relative inline-block'>
                  <span className='relative z-10'>Frequently Asked Questions</span>
                  <div className='absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full'></div>
                </h3>
                <div className='space-y-4'>
                  {pack.faq.map((item, index) => (
                    <div
                      key={index}
                      className='border-b border-gray-100 pb-4 last:border-0 last:pb-0'
                    >
                      <h4 className='font-medium text-gray-900 mb-2 text-sm flex items-start'>
                        <span className='w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs mr-2 flex-shrink-0 mt-0.5'>
                          Q
                        </span>
                        {item.question}
                      </h4>
                      <p className='text-gray-700 text-sm pl-7'>{item.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Purchase Info */}
            <Card className='overflow-hidden border-0 shadow-lg relative bg-white/80 backdrop-blur-sm'>
              <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-200/20 to-blue-200/20 rounded-full -translate-y-1/2 translate-x-1/2 z-0'></div>
              <CardContent className='p-4 relative z-10'>
                <h3 className='text-lg font-bold mb-3 relative inline-block'>
                  <span className='relative z-10'>Purchase Information</span>
                  <div className='absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-200 to-blue-200 opacity-70 rounded-full'></div>
                </h3>

                <div className='space-y-3 text-sm'>
                  <div className='flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm'>
                    <Clock className='h-5 w-5 text-blue-500 flex-shrink-0' />
                    <div>
                      <h4 className='font-medium text-gray-900 text-xs'>Delivery Time</h4>
                      <p className='text-gray-700 text-xs'>{pack.deliveryTime}</p>
                    </div>
                  </div>

                  <div className='flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm'>
                    <CreditCard className='h-5 w-5 text-purple-500 flex-shrink-0' />
                    <div>
                      <h4 className='font-medium text-gray-900 text-xs'>Payment Methods</h4>
                      <p className='text-gray-700 text-xs'>Credit Card, PayPal, Cryptocurrency</p>
                    </div>
                  </div>

                  <div className='flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm'>
                    <Users className='h-5 w-5 text-amber-500 flex-shrink-0' />
                    <div>
                      <h4 className='font-medium text-gray-900 text-xs'>Support</h4>
                      <p className='text-gray-700 text-xs'>Email, Live Chat (Business Hours)</p>
                    </div>
                  </div>
                </div>

                <div className='mt-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 relative overflow-hidden border border-blue-100'>
                  <div className='absolute top-0 right-0 w-16 h-16 bg-blue-200/10 rounded-full -translate-y-1/2 translate-x-1/2'></div>
                  <div className='absolute bottom-0 left-0 w-12 h-12 bg-purple-200/10 rounded-full translate-y-1/2 -translate-x-1/2'></div>

                  <h4 className='font-bold mb-1 text-center text-sm relative z-10 text-gray-800'>
                    Ready to get started?
                  </h4>
                  <p className='text-gray-600 text-xs mb-3 text-center relative z-10'>
                    Get your {pack.name} now!
                  </p>

                  <Button
                    onClick={handleAddToCart}
                    className='w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 text-sm relative z-10'
                    disabled={pack.stock === 'out-of-stock'}
                  >
                    Add to Cart - €{pack.price}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SupportingPageLayout>
    </div>
  )
}
