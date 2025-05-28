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
  slug: string
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
  detail?: string
  price: number
  comparePrice?: number
  image: string
  category: ProductCategory
  badge?: string
  stock: "in-stock" | "low-stock" | "out-of-stock"
  deliveryTime: string
  imageDescription?: string
  reviewComment?: string
  reviewAuthor?: string
  reviewAuthorTitle?: string
}

// Unified product interface that can support all use cases
export interface Product {
  id: string
  slug: string
  name: string
  description: string
  detail?: string
  imageDescription?: string // Path to the product image
  reviewComment?: string
  reviewAuthor?: string
  reviewAuthorTitle?: string
  price: number
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
  reviewCount?: number
  purchases?: number
  gradient?: string
  bgGradient?: string
}

// SINGLE SOURCE OF TRUTH - Main products data
export const products: Product[] = [
  {
    id: "verified-bm-1",
    slug: "verified-bm",
    name: "Verified BM",
    description:
      "Verified Business Manager with 1 ad account and growing spend limit – ready for immediate use.",
    detail:
      "<p><strong>Verified with a government-issued ID</strong> to ensure higher trust and account stability from day one.</p><ul><li>Includes <strong>1 ad account</strong> with a starting daily limit of <strong>$50</strong>, automatically scaling up to <strong>$250</strong>.</li><li>Ready for <strong>upgrade to BM3/BM5</strong> after successful ad spend.</li><li>Pixel sharing is <strong>fully supported</strong> with no errors or limitations.</li><li>Instantly active — <strong>run ads immediately</strong> with higher trust score.</li></ul>",
    imageDescription: "/product-detail/verified-bm.png",
    reviewComment:
      "This verified BM saved us so much time. We were able to start running ads within hours of purchase.",
    reviewAuthor: "David Miller",
    reviewAuthorTitle: "Digital Marketing Specialist",
    price: 70,
    category: "verified-bm",
    image: "/products/bm_verified.png",
    stock: "in-stock",
    reviewCount: 42,
    purchases: 124,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    id: "bm1-250-limit",
    slug: "bm1-250-limit",
    name: "Verified BM1 $250 Limit",
    description: "Verified Business Manager with $250 daily spending limit – trusted and stable.",
    detail:
      "<p><strong>Verified BM1</strong> with $250 daily spend — ideal for consistent and scalable advertising.</p><ul><li>Comes with <strong>1 ad account</strong> preloaded with a <strong>$250/day limit</strong>.</li><li>Verified by government-issued ID — <strong>higher stability and trust</strong> than unverified options.</li><li>Supports <strong>BM3/BM5 upgrades</strong> once ad activity is confirmed.</li><li>Billing country is fixed randomly, but <strong>currency and timezone are customizable</strong>.</li><li>Pixel sharing is <strong>error-free and unrestricted</strong>.</li><li>Plug-and-play — <strong>active and ready to use now</strong>.</li></ul>",
    imageDescription: "/product-detail/bm1-250-limit.webp",
    reviewComment:
      "The BM1 with $250 limit completely transformed our Facebook advertising capabilities. Highly recommended!",
    reviewAuthor: "Michael Thompson",
    reviewAuthorTitle: "Marketing Director",
    price: 170,
    comparePrice: 249,
    category: "verified-bm",
    image: "/products/bm_verified.png",
    badge: "Popular",
    stock: "in-stock",
    reviewCount: 78,
    purchases: 256,
    relatedProducts: ["verified-bm-3", "verified-bm-4", "unverified-bm-1"],
    gradient: "from-blue-600 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
  },
  {
    id: "verified-bm-3",
    slug: "verified-bm5-limited",
    name: "Verified BM5 $250 Limit",
    description:
      "Verified Business Manager with 5 ad accounts – each with a $250 daily spend limit.",
    detail:
      "<p><strong>High-trust Verified BM5</strong> account with massive ad capacity for advanced advertisers.</p><ul><li><strong>5 verified ad accounts</strong>, each with a <strong>$250 daily limit</strong>.</li><li>Verified via government ID — <strong>robust and Facebook-trusted</strong>.</li><li>Billing info is random for the first account, but <strong>fully customizable for the rest</strong>.</li><li><strong>Pixel integration is seamless</strong> with no policy issues.</li><li>Perfect for scaling — <strong>launch campaigns instantly</strong>.</li></ul>",
    imageDescription: "/product-detail/verified-bm5-limited.jpg",
    reviewComment:
      "The BM5 package exceeded our expectations. Having 5 pre-verified accounts saved us weeks of setup time.",
    reviewAuthor: "Jennifer Adams",
    reviewAuthorTitle: "Agency Owner",
    price: 260,
    category: "verified-bm",
    image: "/products/bm_verified.png",
    stock: "in-stock",
    reviewCount: 36,
    purchases: 89,
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50",
  },
  {
    id: "verified-bm-4",
    slug: "unlimited-verified-bm5",
    name: "Unlimited Verified BM5",
    description:
      "Unlimited verified Business Manager with 5 ad accounts – no daily spending limits.",
    detail:
      "<p><strong>Unlimited BM5</strong> — the ultimate choice for agencies and performance marketers.</p><ul><li><strong>Reinstated, verified, and stable</strong> — trusted after successful appeal.</li><li><strong>5 ad accounts</strong> included with <strong>no daily spending limits</strong>.</li><li>First account has fixed billing details, others are <strong>fully customizable</strong>.</li><li>Ideal for <strong>high-budget scaling</strong> and ad testing.</li><li><strong>Fully active</strong> with flawless pixel sharing support.</li></ul>",
    imageDescription: "/product-detail/unlimited-verified-bm5.jpg",
    reviewComment:
      "The unlimited BM5 has been a game-changer for our agency. We can now scale campaigns without any spending restrictions.",
    reviewAuthor: "Robert Chen",
    reviewAuthorTitle: "Performance Marketing Lead",
    price: 350,
    category: "verified-bm",
    image: "/products/bm_verified.png",
    badge: "Premium",
    stock: "in-stock",
    reviewCount: 54,
    purchases: 312,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
  },

  {
    id: "unverified-bm-1",
    slug: "unverified-bm",
    name: "Unverified BM",
    description: "Basic unverified Business Manager for testing.",
    detail:
      "<p>Basic <strong>Unverified Business Manager</strong> — ideal for testing or creating your own setup.</p><ul><li><strong>No ad accounts included</strong> — clean slate for custom setup.</li><li><strong>Billing is customizable</strong> once you add accounts.</li><li>Lower trust score, but <strong>no restrictions on usage</strong>.</li><li>Pixel sharing may be limited versus verified BMs.</li><li><strong>Instantly ready</strong> for configuration and launch.</li></ul>",
    price: 10,
    category: "unverified-bm",
    image: "/products/bm_unverified.png",
    imageDescription: "/product-detail/unverified-bm.png",
    stock: "in-stock",
    reviewCount: 28,
    purchases: 578,
    gradient: "from-teal-500 to-green-500",
    bgGradient: "from-teal-50 to-green-50",
  },
  {
    id: "unverified-bm-2",
    slug: "unverified-recovered-bm",
    name: "Recovered Unverified BM",
    description: "Recovered unverified Business Manager with history.",
    detail:
      "<p><strong>Recovered Unverified BM</strong> — functional and active post-ban recovery.</p><ul><li><strong>Recovered but not verified</strong> — best for users with experience managing risk.</li><li>No ad accounts included — <strong>add your own easily</strong>.</li><li>Billing info is fully customizable when you create accounts.</li><li>Trust score is moderate — <strong>limited pixel support</strong> may apply.</li><li>Active and <strong>ready for use upon delivery</strong>.</li></ul>",
    price: 30,
    imageDescription: "/product-detail/unverified-bm.png",
    category: "unverified-bm",
    image: "/products/bm_unverified.png",
    stock: "in-stock",
    reviewCount: 32,
    purchases: 198,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
  },

  {
    id: "profile-1",
    slug: "asia-reinstated-2gl",
    name: "Asia Reinstated 2 Green Line",
    description: "Asia profile with 2 green line tick (verified 1 time).",
    detail:
      "<p><strong>Asia Reinstated Profile – 2 Green Line</strong></p><ul><li>Verified once with full government ID — <strong>great trust and approval rate</strong>.</li><li>Farmed and warmed in-house — <strong>never purchased externally</strong>.</li><li><strong>Real friends and activity</strong> — improves credibility.</li><li>Ad-ready with <strong>no setup required</strong>.</li><li><strong>Lifetime support</strong> included for long-term stability.</li></ul>",
    price: 25,
    category: "profile",
    image: "/products/fb_via.png",
    imageDescription: "/product-detail/asia-reinstated-2gl.png",
    stock: "in-stock",
    reviewCount: 41,
    purchases: 45,
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
  },
  {
    id: "profile-2",
    slug: "asia-reinstated-3gl",
    name: "Asia Reinstated 902 3 Green Line",
    description: "Asia profile with 3 green line tick (verified 2 times).",
    detail:
      "<p><strong>Asia Reinstated 902 – 3 Green Line</strong></p><ul><li><strong>Double verified</strong> via ID (SARI) for exceptional trust.</li><li>3x trust level compared to single-tick profiles.</li><li>Excellent for <strong>scalable ad campaigns</strong> with minimal review issues.</li><li>Includes <strong>email recovery</strong> to reduce lock risk.</li><li><strong>Ready to advertise after 24h warm-up</strong>.</li></ul>",
    price: 35,
    category: "profile",
    image: "/products/fb_via.png",
    imageDescription: "/product-detail/asia-reinstated-3gl.png",
    stock: "in-stock",
    reviewCount: 47,
    purchases: 72,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
  },
  {
    id: "profile-3",
    slug: "usa-reinstated-2gl",
    name: "USA Reinstated 2 Green Line",
    description: "USA profile with 2 green line tick (verified 1 time).",
    detail:
      "<p><strong>USA Reinstated – 2 Green Line</strong></p><ul><li>Full ID verification with government credentials.</li><li>Created and farmed in-house — <strong>no third-party sourcing</strong>.</li><li>Active with <strong>real engagement and credibility</strong>.</li><li><strong>Fully ready for ad use</strong> with lifetime support included.</li></ul>",
    price: 40,
    category: "profile",
    image: "/products/fb_via.png",
    badge: "Premium",
    stock: "in-stock",
    reviewCount: 63,
    imageDescription: "/product-detail/usa-reinstated-2gl.png",
    purchases: 102,
    gradient: "from-red-500 to-rose-500",
    bgGradient: "from-red-50 to-rose-50",
  },
  {
    id: "facebook-verified-usa",
    slug: "usa-reinstated-3gl",
    name: "USA Reinstated 902 3 Green Line",
    description: "USA profile with 3 green line tick (verified 2 times).",
    detail:
      "<p><strong>USA Reinstated 902 – 3 Green Line</strong></p><ul><li>Verified twice (SARI) — <strong>maximized trust and ad delivery success</strong>.</li><li>Low risk of checkpoints — email recovery provided.</li><li>Warm up for <strong>24 hours before full use</strong>.</li><li>Perfect for <strong>premium campaigns and long-term stability</strong>.</li></ul>",
    price: 50,
    category: "profile",
    image: "/products/fb_via.png",
    badge: "Best Value",
    stock: "low-stock",
    imageDescription: "/product-detail/usa-reinstated-3gl.png",
    reviewCount: 72,
    purchases: 155,
    relatedProducts: ["profile-3", "profile-2", "profile-1"],
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50",
  },
  {
    id: "page-1",
    slug: "aged-reinstated-page",
    name: "Aged Reinstated Page",
    description: "Recovered Facebook page with established history.",
    detail:
      "<p><strong>Aged Reinstated Page</strong> — pre-approved and trusted for ad use.</p><ul><li><strong>Recovered and fully approved</strong> for Facebook advertising.</li><li><strong>Customizable page name</strong> before delivery.</li><li>Green quality status — <strong>perfect for launching ad campaigns</strong>.</li><li>Instantly addable to any Business Manager — <strong>zero delay</strong>.</li></ul>",
    price: 30,
    category: "page",
    image: "/products/fb_fanpage.png",
    stock: "in-stock",
    reviewCount: 38,
    purchases: 210,
    imageDescription: "/product-detail/aged-reinstated-page.webp",
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

  return product.relatedProducts
    .map((id) => getProductById(id))
    .filter((p): p is Product => p !== undefined)
}

// PRODUCTS SECTION SPECIFIC HELPERS (for landing page)
export function getProductSectionItems(): ProductSectionItem[] {
  return products.map((product) => ({
    id: product.id,
    slug: product.slug,
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.image,
    category: product.category,
    badge: product.badge,
    href: `/products/${product.slug}`,
    reviewCount: product.reviewCount,
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
    description: product.description,
    price: `€${product.price}`,
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
  const uniqueCategories: ProductCategory[] = [
    ...new Set(products.map((product) => product.category)),
  ]
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
  itemsPerPage: number
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
  maxPageNumbersToShow = 5
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
    detail: product.detail || product.description,
    price: product.price,
    comparePrice: product.comparePrice,
    image: product.image,
    category: product.category,
    badge: product.badge,
    stock: product.stock || "in-stock",
    deliveryTime: "24 hours", // Default delivery time
    imageDescription: product.imageDescription,
    reviewComment: product.reviewComment,
    reviewAuthor: product.reviewAuthor,
    reviewAuthorTitle: product.reviewAuthorTitle,
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
    description: p.description,
    price: `€${p.price}`,
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
  const popularProducts = getPopularProducts().filter(
    (p) => !featuredProducts.some((fp) => fp.id === p.id)
  )

  return [...featuredProducts, ...popularProducts].slice(0, 3)
}

// Search products
export function searchProducts(query: string): Product[] {
  const searchTerms = query.toLowerCase().split(" ")

  return products.filter((product) => {
    const searchableText = [
      product.name,
      product.description,
      ...(product.tags || []),
      getCategoryDisplayName(product.category),
    ]
      .join(" ")
      .toLowerCase()

    return searchTerms.every((term) => searchableText.includes(term))
  })
}
