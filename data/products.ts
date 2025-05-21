export interface ProductFeature {
  id: string
  name: string
  included: boolean
  highlight?: boolean
}

export interface ProductImage {
  src: string
  alt: string
}

export interface ProductInclude {
  name: string
  description: string
  icon?: string
}

export interface ProductReview {
  id: string
  author: string
  rating: number
  text: string
  date: string
  verified?: boolean
}

// This type matches the Product type in app/products-section.tsx
export interface ProductSectionItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: "verified-bm" | "unverified-bm" | "profile" | "page"
  badge?: string
  href?: string
  rating?: number
  reviewCount?: number
}

// This type matches the Product type in app/products/page.tsx
export interface ProductPageItem {
  id: string
  name: string
  description: string
  price: string
  category: string
  image: string
  badge?: string
  url: string
  purchases?: number
}

// This type matches the Product type in app/products/[product]/page.tsx
export interface ProductDetailItem {
  id: string
  slug: string
  name: string
  description: string
  longDescription: string
  price: number
  comparePrice?: number
  features: string[]
  image: string
  category: string
  badge?: string
  stock: "in-stock" | "low-stock" | "out-of-stock"
  deliveryTime: string
  faq: Array<{ question: string; answer: string }>
}

// Unified product interface that can support all use cases
export interface Product {
  id: string
  slug: string
  name: string
  description: string
  shortDescription?: string
  longDescription?: string
  price: number
  priceString?: string
  originalPrice?: number
  comparePrice?: number
  discount?: number
  popular?: boolean
  featured?: boolean
  category: string
  productCategory: "verified-bm" | "unverified-bm" | "profile" | "page" // For products-section.tsx compatibility
  image: string
  images?: string[]
  features: ProductFeature[]
  simpleFeatures?: string[]
  benefits?: string[]
  idealFor?: string[]
  faqs?: Array<{
    question: string
    answer: string
  }>
  includes?: ProductInclude[]
  reviews?: ProductReview[]
  stock?: "in-stock" | "low-stock" | "out-of-stock"
  deliveryTime?: string
  callToAction?: string
  secondaryCallToAction?: string
  badge?: string
  tags?: string[]
  relatedProducts?: string[] // Array of product IDs
  rating?: number // For products-section.tsx compatibility
  reviewCount?: number // For products-section.tsx compatibility
  purchases?: number // For products/page.tsx compatibility
}

// SINGLE SOURCE OF TRUTH - Main products data
export const products: Product[] = [
  // VERIFIED BM PRODUCTS (4)
  {
    id: "verified-bm-1",
    slug: "verified-bm",
    name: "Verified BM",
    description: "Add your agency to BM and launch ads immediately.",
    shortDescription: "Add your agency to BM and launch ads",
    price: 80,
    priceString: "€80",
    category: "Business Manager",
    productCategory: "verified-bm",
    image: "/verified-facebook-business-manager-icon.png",
    features: [
      { id: "feature-1", name: "Verified Business Manager", included: true, highlight: true },
      { id: "feature-2", name: "Ready to use immediately", included: true },
      { id: "feature-3", name: "Basic support", included: true },
    ],
    simpleFeatures: ["Verified Business Manager", "Ready to use immediately", "Basic support"],
    stock: "in-stock",
    deliveryTime: "24 hours",
    rating: 4.8,
    reviewCount: 42,
    purchases: 124,
  },
  {
    id: "bm1-250-limit",
    slug: "bm1-250-limit",
    name: "Verified BM1 $250 Limit",
    description: "Verified Business Manager with $250 daily spending limit.",
    shortDescription: "Verified BM1 with $250 limit",
    longDescription: `Our Business Manager BM1 with $250 Limit is perfect for advertisers looking to start or scale their Facebook advertising campaigns. This fully verified account comes with a $250 spending limit and is ready to use immediately after purchase.

    The Business Manager is the central hub for managing your Facebook advertising assets, including ad accounts, pages, and pixels. With this BM1, you'll have a solid foundation to build your advertising strategy.

    All our Business Managers are created with legitimate business information and are fully verified to ensure long-term stability and compliance with Facebook's policies.`,
    price: 180,
    priceString: "€180",
    comparePrice: 249,
    category: "Business Manager",
    productCategory: "verified-bm",
    image: "/verified-facebook-business-manager-icon.png",
    features: [
      { id: "feature-1", name: "Fully verified Business Manager", included: true, highlight: true },
      { id: "feature-2", name: "$250 spending limit", included: true },
      { id: "feature-3", name: "Ready to use immediately", included: true },
      { id: "feature-4", name: "Compliant with Facebook policies", included: true },
      { id: "feature-5", name: "Secure payment methods added", included: true },
      { id: "feature-6", name: "30-day warranty", included: true, highlight: true },
      { id: "feature-7", name: "Setup assistance included", included: true },
      { id: "feature-8", name: "Email support", included: true },
    ],
    simpleFeatures: [
      "Fully verified Business Manager",
      "$250 spending limit",
      "Ready to use immediately",
      "Compliant with Facebook policies",
      "Secure payment methods added",
      "30-day warranty",
      "Setup assistance included",
      "Email support",
    ],
    badge: "Popular",
    stock: "in-stock",
    deliveryTime: "24 hours",
    faqs: [
      {
        question: "How soon can I start using the Business Manager after purchase?",
        answer:
          "You can start using the Business Manager immediately after purchase. We'll provide you with all the necessary login details and setup instructions.",
      },
      {
        question: "Can I increase the spending limit later?",
        answer:
          "Yes, you can request a spending limit increase directly through Facebook after establishing a good payment history.",
      },
      {
        question: "Is this compliant with Facebook's policies?",
        answer:
          "Yes, all our Business Managers are created with legitimate business information and are fully verified to ensure compliance with Facebook's policies.",
      },
      {
        question: "What happens if my account gets restricted?",
        answer:
          "We offer a 30-day warranty on all our Business Managers. If your account gets restricted within this period, we'll provide a replacement at no additional cost.",
      },
    ],
    rating: 4.9,
    reviewCount: 78,
    purchases: 256,
    relatedProducts: ["verified-bm-3", "verified-bm-4", "unverified-bm-1"],
  },
  {
    id: "verified-bm-3",
    slug: "verified-bm5-limited",
    name: "Verified BM5 $250 Limit",
    description: "Verified BM5 with $250 limit and 5 ad accounts.",
    shortDescription: "Verified BM5 with $250 limit and 5 ad accounts",
    price: 260,
    priceString: "€260",
    category: "Business Manager",
    productCategory: "verified-bm",
    image: "/abstract-facebook-verified-business-manager.png",
    features: [
      { id: "feature-1", name: "Verified BM5", included: true, highlight: true },
      { id: "feature-2", name: "$250 spending limit", included: true },
      { id: "feature-3", name: "5 ad accounts", included: true },
      { id: "feature-4", name: "30-day warranty", included: true },
    ],
    simpleFeatures: ["Verified BM5", "$250 spending limit", "5 ad accounts", "30-day warranty"],
    stock: "in-stock",
    deliveryTime: "24 hours",
    rating: 4.7,
    reviewCount: 36,
    purchases: 89,
  },
  {
    id: "verified-bm-4",
    slug: "unlimited-verified-bm5",
    name: "Unlimited Verified BM5",
    description: "Unlimited verified BM5 with 5 ad accounts.",
    shortDescription: "Unlimited verified BM5 with 5 ad accounts",
    price: 350,
    priceString: "€350",
    category: "Business Manager",
    productCategory: "verified-bm",
    image: "/abstract-facebook-verified-business-manager.png",
    features: [
      { id: "feature-1", name: "Unlimited verified BM5", included: true, highlight: true },
      { id: "feature-2", name: "No spending limit", included: true },
      { id: "feature-3", name: "5 ad accounts", included: true },
      { id: "feature-4", name: "Premium support", included: true },
      { id: "feature-5", name: "30-day warranty", included: true },
    ],
    simpleFeatures: [
      "Unlimited verified BM5",
      "No spending limit",
      "5 ad accounts",
      "Premium support",
      "30-day warranty",
    ],
    badge: "Premium",
    stock: "in-stock",
    deliveryTime: "24 hours",
    rating: 4.9,
    reviewCount: 54,
    purchases: 312,
  },

  // UNVERIFIED BM PRODUCTS (2)
  {
    id: "unverified-bm-1",
    slug: "unverified-bm",
    name: "Unverified BM",
    description: "Basic unverified Business Manager for testing.",
    shortDescription: "Unverified BM for ad account",
    price: 10,
    priceString: "€10",
    category: "Unverified BM",
    productCategory: "unverified-bm",
    image: "/facebook-business-manager-icon.png",
    features: [
      { id: "feature-1", name: "Unverified Business Manager", included: true },
      { id: "feature-2", name: "Testing purposes", included: true },
      { id: "feature-3", name: "Basic support", included: true },
    ],
    simpleFeatures: ["Unverified Business Manager", "Testing purposes", "Basic support"],
    stock: "in-stock",
    deliveryTime: "12 hours",
    rating: 4.5,
    reviewCount: 28,
    purchases: 578,
  },
  {
    id: "unverified-bm-2",
    slug: "unverified-recovered-bm",
    name: "Recovered Unverified BM",
    description: "Recovered unverified Business Manager with history.",
    shortDescription: "Unverified recovered BM for ad account",
    price: 30,
    priceString: "€30",
    category: "Unverified BM",
    productCategory: "unverified-bm",
    image: "/facebook-business-manager-icon.png",
    features: [
      { id: "feature-1", name: "Recovered unverified BM", included: true },
      { id: "feature-2", name: "Account history", included: true },
      { id: "feature-3", name: "Basic support", included: true },
    ],
    simpleFeatures: ["Recovered unverified BM", "Account history", "Basic support"],
    stock: "in-stock",
    deliveryTime: "24 hours",
    rating: 4.6,
    reviewCount: 32,
    purchases: 198,
  },

  // PROFILE PRODUCTS (4)
  {
    id: "profile-1",
    slug: "asia-reinstated-2gl",
    name: "Asia Reinstated 2 Green Line",
    description: "Asia profile with 2 green line tick (verified 1 time).",
    shortDescription: "Asia reinstated profile with 2 green line tick (verified 1 time)",
    price: 25,
    priceString: "€25",
    category: "Profiles",
    productCategory: "profile",
    image: "/facebook-xmdt-usa.png",
    features: [
      { id: "feature-1", name: "Asia profile", included: true },
      { id: "feature-2", name: "2 green line tick", included: true },
      { id: "feature-3", name: "Verified 1 time", included: true },
    ],
    simpleFeatures: ["Asia profile", "2 green line tick", "Verified 1 time"],
    stock: "in-stock",
    deliveryTime: "24 hours",
    rating: 4.7,
    reviewCount: 41,
    purchases: 45,
  },
  {
    id: "profile-2",
    slug: "asia-reinstated-3gl",
    name: "Asia Reinstated 902 3 Green Line",
    description: "Asia profile with 3 green line tick (verified 2 times).",
    shortDescription: "Asia reinstated 902 profile with 3 green line tick (verified 2 times)",
    price: 35,
    priceString: "€35",
    category: "Profiles",
    productCategory: "profile",
    image: "/facebook-xmdt-usa.png",
    features: [
      { id: "feature-1", name: "Asia 902 profile", included: true },
      { id: "feature-2", name: "3 green line tick", included: true },
      { id: "feature-3", name: "Verified 2 times", included: true },
    ],
    simpleFeatures: ["Asia 902 profile", "3 green line tick", "Verified 2 times"],
    stock: "in-stock",
    deliveryTime: "24 hours",
    rating: 4.8,
    reviewCount: 47,
    purchases: 72,
  },
  {
    id: "profile-3",
    slug: "usa-reinstated-2gl",
    name: "USA Reinstated 2 Green Line",
    description: "USA profile with 2 green line tick (verified 1 time).",
    shortDescription: "USA reinstated profile with 2 green line tick (verified 1 time)",
    price: 40,
    priceString: "€40",
    category: "Profiles",
    productCategory: "profile",
    image: "/facebook-xmdt-usa.png",
    features: [
      { id: "feature-1", name: "USA profile", included: true },
      { id: "feature-2", name: "2 green line tick", included: true },
      { id: "feature-3", name: "Verified 1 time", included: true },
    ],
    simpleFeatures: ["USA profile", "2 green line tick", "Verified 1 time"],
    badge: "Premium",
    stock: "in-stock",
    deliveryTime: "24 hours",
    rating: 4.9,
    reviewCount: 63,
    purchases: 102,
  },
  {
    id: "facebook-xmdt-usa",
    slug: "facebook-xmdt-usa",
    name: "USA Reinstated 902 3 Green Line",
    description: "USA profile with 3 green line tick (verified 2 times).",
    shortDescription: "USA reinstated 902 profile with 3 green line tick (verified 2 times)",
    longDescription: `Our Facebook XMDT USA Account is a premium solution for advertisers who need reliable, high-quality accounts for their marketing campaigns. These accounts are created with authentic USA profiles and come with full XMDT verification.

    XMDT verification provides an additional layer of account security and stability, making these accounts ideal for advertisers who need dependable advertising solutions. Each account is carefully created and verified to ensure maximum longevity and performance.

    These accounts are perfect for agencies and professional marketers who need reliable advertising assets for their clients or campaigns.`,
    price: 50,
    priceString: "€50",
    category: "Profiles",
    productCategory: "profile",
    image: "/facebook-xmdt-usa.png",
    features: [
      { id: "feature-1", name: "Authentic USA-based profile", included: true, highlight: true },
      { id: "feature-2", name: "Full XMDT verification", included: true },
      { id: "feature-3", name: "High-quality account with history", included: true },
      { id: "feature-4", name: "Ready for advertising", included: true },
      { id: "feature-5", name: "Compatible with Business Manager", included: true },
      { id: "feature-6", name: "30-day warranty", included: true, highlight: true },
      { id: "feature-7", name: "Setup assistance included", included: true },
      { id: "feature-8", name: "Priority support", included: true },
    ],
    simpleFeatures: [
      "Authentic USA-based profile",
      "Full XMDT verification",
      "High-quality account with history",
      "Ready for advertising",
      "Compatible with Business Manager",
      "30-day warranty",
      "Setup assistance included",
      "Priority support",
    ],
    badge: "Best Value",
    stock: "low-stock",
    deliveryTime: "48 hours",
    faqs: [
      {
        question: "What is XMDT verification?",
        answer:
          "XMDT verification is an advanced security feature that adds an extra layer of protection to Facebook accounts, making them more stable and less likely to be flagged by Facebook's security systems.",
      },
      {
        question: "Can I connect this account to my existing Business Manager?",
        answer: "Yes, you can connect this account to your existing Business Manager as an admin or advertiser.",
      },
      {
        question: "Why are USA accounts better for advertising?",
        answer:
          "USA accounts typically have better performance for advertising due to the market's high value and Facebook's prioritization of the region. They also face fewer restrictions compared to accounts from other regions.",
      },
      {
        question: "Do you provide the email access for this account?",
        answer:
          "Yes, we provide full email access for all our XMDT USA accounts, giving you complete control over the account.",
      },
    ],
    rating: 5.0,
    reviewCount: 72,
    purchases: 155,
    relatedProducts: ["profile-3", "profile-2", "profile-1"],
  },

  // PAGE PRODUCTS (1)
  {
    id: "page-1",
    slug: "aged-reinstated-page",
    name: "Aged Reinstated Page",
    description: "Recovered Facebook page with established history.",
    shortDescription: "Aged reinstated Facebook page",
    price: 30,
    priceString: "€30",
    category: "Pages",
    productCategory: "page",
    image: "/facebook-pixel-icon.png",
    features: [
      { id: "feature-1", name: "Aged Facebook page", included: true },
      { id: "feature-2", name: "Reinstated", included: true },
      { id: "feature-3", name: "Established history", included: true },
    ],
    simpleFeatures: ["Aged Facebook page", "Reinstated", "Established history"],
    stock: "in-stock",
    deliveryTime: "24 hours",
    rating: 4.6,
    reviewCount: 38,
    purchases: 210,
  },
]

// Helper functions
export function getAllProducts(): Product[] {
  return products
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
}

export function getFeaturedProducts(): Product[] {
  // Products with badges are considered featured
  return products.filter((product) => product.badge)
}

export function getPopularProducts(): Product[] {
  // Products with high purchase counts are considered popular
  return [...products].sort((a, b) => (b.purchases || 0) - (a.purchases || 0)).slice(0, 5)
}

export function getProductsWithDiscount(): Product[] {
  return products.filter((product) => product.comparePrice && product.price < product.comparePrice)
}

export function getRelatedProducts(productId: string): Product[] {
  const product = getProductById(productId)
  if (!product || !product.relatedProducts || product.relatedProducts.length === 0) {
    // If no related products specified, return other products in the same category
    const category = product?.category || ""
    return products.filter((p) => p.id !== productId && p.category === category).slice(0, 3)
  }

  return product.relatedProducts.map((id) => getProductById(id)).filter((p): p is Product => p !== undefined)
}

// PRODUCTS SECTION SPECIFIC HELPERS (for landing page)
export function getProductSectionItems(): ProductSectionItem[] {
  return products.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.image,
    category: product.productCategory,
    badge: product.badge,
    href: `/products/${product.slug}`,
    rating: product.rating,
    reviewCount: product.reviewCount,
  }))
}

export function getProductSectionFilterOptions() {
  return [
    { label: "All Products", value: "all" },
    { label: "Business Manager", value: "verified-bm" },
    { label: "Unverified BM", value: "unverified-bm" },
    { label: "Profiles", value: "profile" },
    { label: "Pages", value: "page" },
  ]
}

export function filterProductSectionItems(category: string): ProductSectionItem[] {
  const items = getProductSectionItems()
  if (category === "all") {
    return items
  }
  return items.filter((product) => product.category === category)
}

// PRODUCTS PAGE SPECIFIC HELPERS
export function getProductsPageData(): ProductPageItem[] {
  return products.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.shortDescription || product.description,
    price: product.priceString || `€${product.price}`,
    category: product.category.toLowerCase().replace(/\s+/g, "-"),
    image: product.image,
    badge: product.badge,
    url: `/products/${product.slug}`,
    purchases: product.purchases,
  }))
}

export function getProductPageCategories() {
  const categories = [
    {
      id: "all",
      name: "All Products",
      count: products.length,
    },
  ]

  // Get unique categories and their counts
  const uniqueCategories = [...new Set(products.map((product) => product.category))]
  uniqueCategories.forEach((category) => {
    const count = products.filter((product) => product.category === category).length
    categories.push({
      id: category.toLowerCase().replace(/\s+/g, "-"),
      name: category,
      count,
    })
  })

  return categories
}

export function filterProductPageItems(category: string): ProductPageItem[] {
  const items = getProductsPageData()
  if (category === "all") {
    return items
  }
  return items.filter((product) => product.category === category)
}

// Pagination helper for products page
export function paginateProductPageItems(
  items: ProductPageItem[],
  currentPage: number,
  itemsPerPage: number,
): ProductPageItem[] {
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  return items.slice(indexOfFirstItem, indexOfLastItem)
}

// Calculate total pages for pagination
export function calculateTotalPages(items: ProductPageItem[], itemsPerPage: number): number {
  return Math.ceil(items.length / itemsPerPage)
}

// Generate page numbers array for pagination
export function generatePageNumbers(
  currentPage: number,
  totalPages: number,
  maxPageNumbersToShow = 5,
): (number | string)[] {
  const pageNumbers = []

  if (totalPages <= maxPageNumbersToShow) {
    // If we have 5 or fewer pages, show all page numbers
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i)
    }
  } else {
    // Always include first page
    pageNumbers.push(1)

    // Calculate start and end of page numbers to show
    let startPage = Math.max(2, currentPage - 1)
    let endPage = Math.min(totalPages - 1, currentPage + 1)

    // Adjust if we're near the beginning
    if (currentPage <= 2) {
      endPage = 4
    }

    // Adjust if we're near the end
    if (currentPage >= totalPages - 2) {
      startPage = totalPages - 3
    }

    // Add ellipsis after first page if needed
    if (startPage > 2) {
      pageNumbers.push("ellipsis-start")
    }

    // Add middle pages
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }

    // Add ellipsis before last page if needed
    if (endPage < totalPages - 1) {
      pageNumbers.push("ellipsis-end")
    }

    // Always include last page
    pageNumbers.push(totalPages)
  }

  return pageNumbers
}

// PRODUCT DETAIL PAGE SPECIFIC HELPERS
export function getProductDetailData(slug: string): ProductDetailItem | null {
  const product = getProductBySlug(slug)
  if (!product) return null

  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    description: product.description,
    longDescription: product.longDescription || product.description,
    price: product.price,
    comparePrice: product.comparePrice,
    features: product.simpleFeatures || product.features.map((f) => f.name),
    image: product.image,
    category: product.category,
    badge: product.badge,
    stock: product.stock || "in-stock",
    deliveryTime: product.deliveryTime || "24 hours",
    faq: product.faqs || [],
  }
}

// Get stock status for product detail page
export function getStockStatusInfo(status: string) {
  const stockStatus = {
    "in-stock": { label: "In Stock", color: "bg-gradient-to-r from-green-400 to-emerald-500 text-white" },
    "low-stock": { label: "Low Stock", color: "bg-gradient-to-r from-amber-400 to-orange-500 text-white" },
    "out-of-stock": { label: "Out of Stock", color: "bg-gradient-to-r from-red-400 to-rose-500 text-white" },
  }
  return stockStatus[status as keyof typeof stockStatus] || stockStatus["in-stock"]
}

// Get related products for product detail page
export function getRelatedProductsForDetail(productId: string): any[] {
  const product = getProductById(productId)
  if (!product) return []

  // Get related products
  const relatedProducts = getRelatedProducts(productId)

  // Format for the detail page
  return relatedProducts.map((p) => ({
    id: p.id,
    name: p.name,
    description: p.shortDescription || p.description,
    price: p.priceString || `€${p.price}`,
    image: p.image,
    url: `/products/${p.slug}`,
  }))
}

// Landing page specific helper
export function getLandingPageProducts(): Product[] {
  // Return featured or popular products for the landing page
  const featuredProducts = getFeaturedProducts()
  if (featuredProducts.length >= 3) {
    return featuredProducts.slice(0, 3)
  }

  // If not enough featured products, include popular ones
  const popularProducts = getPopularProducts().filter((p) => !featuredProducts.some((fp) => fp.id === p.id))

  return [...featuredProducts, ...popularProducts].slice(0, 3)
}

// Search products
export function searchProducts(query: string): Product[] {
  const searchTerms = query.toLowerCase().split(" ")

  return products.filter((product) => {
    const searchableText = [
      product.name,
      product.description,
      product.shortDescription,
      product.longDescription,
      ...(product.tags || []),
      product.category,
      ...(product.simpleFeatures || []),
    ]
      .join(" ")
      .toLowerCase()

    return searchTerms.every((term) => searchableText.includes(term))
  })
}

// Filter and sort products
export function filterProducts({
  categories = [],
  minPrice,
  maxPrice,
  tags = [],
  sortBy = "featured",
}: {
  categories?: string[]
  minPrice?: number
  maxPrice?: number
  tags?: string[]
  sortBy?: "featured" | "price-asc" | "price-desc" | "name" | "newest"
}): Product[] {
  let filtered = [...products]

  // Filter by category
  if (categories.length > 0) {
    filtered = filtered.filter((p) => categories.includes(p.category.toLowerCase().replace(/\s+/g, "-")))
  }

  // Filter by price range
  if (minPrice !== undefined) {
    filtered = filtered.filter((p) => p.price >= minPrice)
  }

  if (maxPrice !== undefined) {
    filtered = filtered.filter((p) => p.price <= maxPrice)
  }

  // Filter by tags
  if (tags.length > 0) {
    filtered = filtered.filter((p) => p.tags && tags.some((tag) => p.tags?.includes(tag)))
  }

  // Sort products
  switch (sortBy) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price)
      break
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price)
      break
    case "name":
      filtered.sort((a, b) => a.name.localeCompare(b.name))
      break
    case "newest":
      // Sort by purchases as a proxy for "newest"
      filtered.sort((a, b) => (b.purchases || 0) - (a.purchases || 0))
      break
    case "featured":
    default:
      // Put featured products (with badges) first, then sort by rating
      filtered.sort((a, b) => {
        if (a.badge && !b.badge) return -1
        if (!a.badge && b.badge) return 1
        return (b.rating || 0) - (a.rating || 0)
      })
  }

  return filtered
}
