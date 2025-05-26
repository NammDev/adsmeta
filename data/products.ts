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
  text: string
  date: string
  verified?: boolean
}

// New interfaces for the restructured data
export interface ProductDescription {
  overview?: string[]
  details?: string[]
  status?: string[]
  imageDescription?: string // Path to the product image
}

export interface ProductReviewData {
  comment?: string
  author?: string
  authorTitle?: string
  count?: number
}

// Category type for type safety
export type ProductCategory = "verified-bm" | "unverified-bm" | "profile" | "page"

// Helper function to get display name from category
export function getCategoryDisplayName(category: ProductCategory): string {
  const categoryMap: Record<ProductCategory, string> = {
    "verified-bm": "Business Manager",
    "unverified-bm": "Unverified BM",
    profile: "Profiles",
    page: "Pages",
  }
  return categoryMap[category] || category
}

// Helper function to get category from display name
export function getCategoryFromDisplayName(displayName: string): ProductCategory | null {
  const reverseMap: Record<string, ProductCategory> = {
    "Business Manager": "verified-bm",
    "Unverified BM": "unverified-bm",
    Profiles: "profile",
    Pages: "page",
  }
  return reverseMap[displayName] || null
}

// This type matches the Product type in app/products-section.tsx
export interface ProductSectionItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: ProductCategory
  badge?: string
  href?: string
  reviewCount?: number
  purchases?: number
  gradient?: string
  bgGradient?: string
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
  image: string
  category: ProductCategory
  badge?: string
  stock: "in-stock" | "low-stock" | "out-of-stock"
  deliveryTime: string
  // Updated to use the new nested structures
  description?: ProductDescription
  review?: ProductReviewData
}

// Unified product interface that can support all use cases
export interface Product {
  id: string
  slug: string
  name: string
  description: string
  longDescription?: string
  // Restructured fields
  description?: ProductDescription
  review?: ProductReviewData
  price: number
  priceString?: string
  originalPrice?: number
  comparePrice?: number
  discount?: number
  popular?: boolean
  category: ProductCategory // Single category field with machine-readable values
  image: string
  images?: string[]
  reviews?: ProductReview[]
  stock?: "in-stock" | "low-stock" | "out-of-stock"
  badge?: string
  tags?: string[]
  relatedProducts?: string[] // Array of product IDs
  purchases?: number
  gradient?: string
  bgGradient?: string
}

// SINGLE SOURCE OF TRUTH - Main products data
export const products: Product[] = [
  // VERIFIED BM PRODUCTS (4)
  {
    id: "verified-bm-1",
    slug: "verified-bm",
    name: "Verified BM",
    description: "Add your agency to BM and launch ads immediately.",
    description: {
      overview: [
        "Fully verified Business Manager with official government ID attached.",
        "Ready to use immediately after purchase.",
        "Perfect for agencies and marketers needing quick ad setup.",
      ],
      details: [
        "Comes with 1 active ad account.",
        "Billing country set to random (cannot be changed).",
        "Currency & timezone can be customized for each ad account.",
      ],
      status: ["Business Manager is active, clean, and ready for immediate use."],
      imageDescription: "/images/verified-bm-dashboard.png",
    },
    review: {
      comment: "This verified BM saved us so much time. We were able to start running ads within hours of purchase.",
      author: "David Miller",
      authorTitle: "Digital Marketing Specialist",
      count: 42,
    },
    price: 80,
    priceString: "€80",
    category: "verified-bm",
    image: "/verified-facebook-business-manager-icon.png",
    stock: "in-stock",
    purchases: 124,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    id: "bm1-250-limit",
    slug: "bm1-250-limit",
    name: "Verified BM1 $250 Limit",
    description: "Verified Business Manager with $250 daily spending limit.",
    description: {
      overview: [
        "Fully verified Business Manager with official government ID attached.",
        "Comes with $250 daily ad spend limit and 1 active ad account.",
        "Stronger trust score than unverified BMs – More robust & stable.",
      ],
      details: [
        "Eligible for upgrade to BM3/BM5 after successful ad spend (up to 5 ad accounts allowed).",
        "Billing country set to random and cannot be changed.",
        "Currency & timezone can be customized for each ad account.",
        "Pixel sharing fully supported – no restrictions or errors.",
      ],
      status: ["Business Manager is active, clean, and ready for immediate use."],
      imageDescription: "/images/bm1-250-limit-dashboard.png",
    },
    review: {
      comment:
        "The BM1 with $250 limit completely transformed our Facebook advertising capabilities. Highly recommended!",
      author: "Michael Thompson",
      authorTitle: "Marketing Director",
      count: 78,
    },
    price: 180,
    priceString: "€180",
    comparePrice: 249,
    category: "verified-bm",
    image: "/bm1-250-limit.png",
    badge: "Popular",
    stock: "in-stock",
    purchases: 256,
    relatedProducts: ["verified-bm-3", "verified-bm-4", "unverified-bm-1"],
    gradient: "from-blue-600 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
  },
  {
    id: "verified-bm-3",
    slug: "verified-bm5-limited",
    name: "Verified BM5 $250 Limit",
    description: "Verified BM5 with $250 limit and 5 ad accounts.",
    description: {
      overview: [
        "Premium verified BM5 with $250 daily spending limit.",
        "Includes 5 active ad accounts ready for immediate use.",
        "Higher trust score for improved ad delivery and performance.",
      ],
      details: [
        "All 5 ad accounts come pre-verified and ready to use.",
        "Customizable currency and timezone settings for each ad account.",
        "Full pixel sharing capabilities across all accounts.",
        "Eligible for spending limit increases after successful ad campaigns.",
      ],
      status: ["All accounts are active and in perfect standing.", "No previous policy violations or restrictions."],
      imageDescription: "/images/bm5-dashboard.png",
    },
    review: {
      comment:
        "The BM5 package exceeded our expectations. Having 5 pre-verified accounts saved us weeks of setup time.",
      author: "Jennifer Adams",
      authorTitle: "Agency Owner",
      count: 36,
    },
    price: 260,
    priceString: "€260",
    category: "verified-bm",
    image: "/abstract-facebook-verified-business-manager.png",
    stock: "in-stock",
    purchases: 89,
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50",
  },
  {
    id: "verified-bm-4",
    slug: "unlimited-verified-bm5",
    name: "Unlimited Verified BM5",
    description: "Unlimited verified BM5 with 5 ad accounts.",
    description: {
      overview: [
        "Premium unlimited verified BM5 with no daily spending restrictions.",
        "Includes 5 active ad accounts with unlimited potential.",
        "Highest possible trust score for maximum ad delivery performance.",
      ],
      details: [
        "No daily spending limits - scale your campaigns without restrictions.",
        "All 5 ad accounts come pre-verified with high trust scores.",
        "Full access to all Facebook advertising features and placements.",
        "Seamless pixel sharing and custom audience creation across accounts.",
      ],
      status: [
        "All accounts are active and in perfect standing with premium status.",
        "Verified with multiple security layers for maximum account stability.",
      ],
      imageDescription: "/images/unlimited-bm5-dashboard.png",
    },
    review: {
      comment:
        "The unlimited BM5 has been a game-changer for our agency. We can now scale campaigns without any spending restrictions.",
      author: "Robert Chen",
      authorTitle: "Performance Marketing Lead",
      count: 54,
    },
    price: 350,
    priceString: "€350",
    category: "verified-bm",
    image: "/abstract-facebook-verified-business-manager.png",
    badge: "Premium",
    stock: "in-stock",
    purchases: 312,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
  },

  // UNVERIFIED BM PRODUCTS (2)
  {
    id: "unverified-bm-1",
    slug: "unverified-bm",
    name: "Unverified BM",
    description: "Basic unverified Business Manager for testing.",
    review: {
      count: 28,
    },
    price: 10,
    priceString: "€10",
    category: "unverified-bm",
    image: "/facebook-business-manager-icon.png",
    stock: "in-stock",
    purchases: 578,
    gradient: "from-teal-500 to-green-500",
    bgGradient: "from-teal-50 to-green-50",
  },
  {
    id: "unverified-bm-2",
    slug: "unverified-recovered-bm",
    name: "Recovered Unverified BM",
    description: "Recovered unverified Business Manager with history.",
    review: {
      count: 32,
    },
    price: 30,
    priceString: "€30",
    category: "unverified-bm",
    image: "/facebook-business-manager-icon.png",
    stock: "in-stock",
    purchases: 198,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
  },

  // PROFILE PRODUCTS (4)
  {
    id: "profile-1",
    slug: "asia-reinstated-2gl",
    name: "Asia Reinstated 2 Green Line",
    description: "Asia profile with 2 green line tick (verified 1 time).",
    review: {
      count: 41,
    },
    price: 25,
    priceString: "€25",
    category: "profile",
    image: "/facebook-xmdt-usa.png",
    stock: "in-stock",
    purchases: 45,
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
  },
  {
    id: "profile-2",
    slug: "asia-reinstated-3gl",
    name: "Asia Reinstated 902 3 Green Line",
    description: "Asia profile with 3 green line tick (verified 2 times).",
    review: {
      count: 47,
    },
    price: 35,
    priceString: "€35",
    category: "profile",
    image: "/facebook-xmdt-usa.png",
    stock: "in-stock",
    purchases: 72,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
  },
  {
    id: "profile-3",
    slug: "usa-reinstated-2gl",
    name: "USA Reinstated 2 Green Line",
    description: "USA profile with 2 green line tick (verified 1 time).",
    review: {
      count: 63,
    },
    price: 40,
    priceString: "€40",
    category: "profile",
    image: "/facebook-xmdt-usa.png",
    badge: "Premium",
    stock: "in-stock",
    purchases: 102,
    gradient: "from-red-500 to-rose-500",
    bgGradient: "from-red-50 to-rose-50",
  },
  {
    id: "facebook-xmdt-usa",
    slug: "facebook-xmdt-usa",
    name: "USA Reinstated 902 3 Green Line",
    description: "USA profile with 3 green line tick (verified 2 times).",
    longDescription: `Our Facebook XMDT USA Account is a premium solution for advertisers who need reliable, high-quality accounts for their marketing campaigns. These accounts are created with authentic USA profiles and come with full XMDT verification.

    XMDT verification provides an additional layer of account security and stability, making these accounts ideal for advertisers who need dependable advertising solutions. Each account is carefully created and verified to ensure maximum longevity and performance.

    These accounts are perfect for agencies and professional marketers who need reliable advertising assets for their clients or campaigns.`,
    review: {
      count: 72,
    },
    price: 50,
    priceString: "€50",
    category: "profile",
    image: "/facebook-xmdt-usa.png",
    badge: "Best Value",
    stock: "low-stock",
    purchases: 155,
    relatedProducts: ["profile-3", "profile-2", "profile-1"],
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50",
  },

  // PAGE PRODUCTS (1)
  {
    id: "page-1",
    slug: "aged-reinstated-page",
    name: "Aged Reinstated Page",
    description: "Recovered Facebook page with established history.",
    review: {
      count: 38,
    },
    price: 30,
    priceString: "€30",
    category: "page",
    image: "/facebook-pixel-icon.png",
    stock: "in-stock",
    purchases: 210,
    gradient: "from-blue-500 to-indigo-500",
    bgGradient: "from-blue-50 to-indigo-50",
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

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((product) => product.category === category)
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
    const category = product?.category || "verified-bm"
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
    category: product.category,
    badge: product.badge,
    href: `/products/${product.slug}`,
    reviewCount: product.review?.count,
    purchases: product.purchases,
    gradient: product.gradient,
    bgGradient: product.bgGradient,
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
    category: product.category,
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
  const uniqueCategories: ProductCategory[] = [...new Set(products.map((product) => product.category))]
  uniqueCategories.forEach((category) => {
    const count = products.filter((product) => product.category === category).length
    categories.push({
      id: category,
      name: getCategoryDisplayName(category),
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
    image: product.image,
    category: product.category,
    badge: product.badge,
    stock: product.stock || "in-stock",
    deliveryTime: "24 hours", // Default delivery time
    // Add the new nested structures
    description: product.description,
    review: product.review,
  }
}

// Get stock status for product detail page
export function getStockStatusInfo(status: string) {
  const stockStatus = {
    "in-stock": {
      label: "In Stock",
      color: "bg-gradient-to-r from-green-400 to-emerald-500 text-white",
    },
    "low-stock": {
      label: "Low Stock",
      color: "bg-gradient-to-r from-amber-400 to-orange-500 text-white",
    },
    "out-of-stock": {
      label: "Out of Stock",
      color: "bg-gradient-to-r from-red-400 to-rose-500 text-white",
    },
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
      getCategoryDisplayName(product.category),
    ]
      .join(" ")
      .toLowerCase()

    return searchTerms.every((term) => searchableText.includes(term))
  })
}
