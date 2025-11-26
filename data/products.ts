export interface ProductReview {
  id: string
  author?: string
  authorTitle?: string
  comment: string
  count?: number
}

// Category type for type safety
export type ProductCategory =
  | 'verified-bm'
  | 'unverified-bm'
  | 'profile'
  | 'page'
  | 'ad-account'
  | 'waba'
  | 'service'

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
  purchases?: number
  gradient?: string
  bgGradient?: string
}

// This type matches the Product type in app/products/[product]/page.tsx
export interface ProductDetailItem extends Product {
  id: string
  slug: string
  name: string
  description: string
  price: number
  comparePrice?: number
  category: ProductCategory
  image: string
  stock: 'in-stock' | 'low-stock' | 'out-of-stock'
  badge?: string
  purchases?: number

  detail?: string
  imageDescription?: string

  review?: ProductReview
}

// Unified product interface that can support all use cases
export interface Product {
  id: string
  slug: string
  name: string
  description: string
  price: number
  comparePrice?: number
  category: ProductCategory // Single category field with machine-readable values
  image: string
  stock?: 'in-stock' | 'low-stock' | 'out-of-stock'
  badge?: string
  purchases?: number

  detail?: string
  imageDescription?: string // Path to the product image

  review?: ProductReview

  gradient?: string
  bgGradient?: string
}

// SINGLE SOURCE OF TRUTH - Main products data
export const products: Product[] = [
  {
    id: 'verified-bm-1',
    slug: 'verified-bm',
    name: 'Verified BM1',
    description:
      'Verified Business Manager with 1 ads account and growing spend limit – ready for immediate use.',
    detail:
      '<p><strong>Verified with a government-issued ID</strong> to ensure higher trust and account stability from day one.</p><ul><li>Includes <strong>1 ads account</strong> with a starting daily limit of <strong>$50</strong>, automatically scaling up to <strong>$250</strong>.</li><li>Ready for <strong>upgrade to BM3/BM5</strong> after successful ads spend.</li><li>Pixel sharing is <strong>fully supported</strong> with no errors or limitations.</li><li>Instantly active — <strong>run ads immediately</strong> with higher trust score.</li></ul>',
    imageDescription: '/product-detail/verified-bm.png',
    review: {
      id: 'review-1',
      author: 'David Miller',
      authorTitle: 'Digital Marketing Specialist',
      comment:
        'This verified BM saved us so much time. We were able to start running ads within hours of purchase.',
      count: 42,
    },
    price: 80,
    category: 'verified-bm',
    image: '/products/bm_verified.png',
    stock: 'in-stock',
    purchases: 1242,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
  },
  // {
  //   id: 'bm1-250-limit',
  //   slug: 'bm1-250-limit',
  //   name: 'Verified BM1 $250 Limit',
  //   description: 'Verified Business Manager with $250 daily spending limit – trusted and stable.',
  //   detail:
  //     '<p><strong>Verified BM1</strong> with $250 daily spend — ideal for consistent and scalable advertising.</p><ul><li>Comes with <strong>1 ads account</strong> preloaded with a <strong>$250/day limit</strong>.</li><li>Verified by government-issued ID — <strong>higher stability and trust</strong> than unverified options.</li><li>Supports <strong>BM3/BM5 upgrades</strong> once ads activity is confirmed.</li><li>Billing country is fixed randomly, but <strong>currency and timezone are customizable</strong>.</li><li>Pixel sharing is <strong>error-free and unrestricted</strong>.</li><li>Plug-and-play — <strong>active and ready to use now</strong>.</li></ul>',
  //   imageDescription: '/product-detail/bm1-250-limit.webp',
  //   review: {
  //     id: 'review-2',
  //     author: 'Michael Thompson',
  //     authorTitle: 'Marketing Director',
  //     comment:
  //       'The BM1 with $250 limit completely transformed our Facebook advertising capabilities. Highly recommended!',
  //     count: 78,
  //   },
  //   price: 170,
  //   comparePrice: 249,
  //   category: 'verified-bm',
  //   image: '/products/bm_verified.png',
  //   stock: 'in-stock',

  //   purchases: 2526,
  //   gradient: 'from-blue-600 to-indigo-600',
  //   bgGradient: 'from-blue-50 to-indigo-50',
  // },
  {
    id: 'verified-bm-3',
    slug: 'verified-bm5-limited',
    name: 'Verified BM5 $250 Limit',
    description:
      'Verified Business Manager with 5 ads accounts – each with a $250 daily spend limit.',
    detail:
      '<p><strong>High-trust Verified BM5</strong> account with massive ads capacity for advanced advertisers.</p><ul><li><strong>5 verified ads accounts</strong>, each with a <strong>$250 daily limit</strong>.</li><li>Verified via government ID — <strong>robust and Facebook-trusted</strong>.</li><li>Billing info is random for the first account, but <strong>fully customizable for the rest</strong>.</li><li><strong>Pixel integration is seamless</strong> with no policy issues.</li><li>Perfect for scaling — <strong>launch campaigns instantly</strong>.</li></ul>',
    imageDescription: '/product-detail/verified-bm5-limited.jpg',
    review: {
      id: 'review-3',
      author: 'Jennifer Adams',
      authorTitle: 'Agency Owner',
      comment:
        'The BM5 package exceeded our expectations. Having 5 pre-verified accounts saved us weeks of setup time.',
      count: 36,
    },
    price: 290,
    category: 'verified-bm',
    image: '/products/bm_verified.png',
    stock: 'in-stock',
    purchases: 1849,
    gradient: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-50 to-purple-50',
  },
  {
    id: 'verified-bm-8',
    slug: 'unlimited-unverified-bm5',
    name: 'Unlimited BM5',
    description: 'Unlimited Business Manager with 5 ads accounts – no daily spending limits.',
    detail:
      '<p><strong>Unlimited BM5</strong> — the ultimate choice for agencies and performance marketers.</p><ul><li><strong>Reinstated, verified, and stable</strong> — trusted after successful appeal.</li><li><strong>5 ads accounts</strong> included with <strong>no daily spending limits</strong>.</li><li>First account has fixed billing details, others are <strong>fully customizable</strong>.</li><li>Ideal for <strong>high-budget scaling</strong> and ads testing.</li><li><strong>Fully active</strong> with flawless pixel sharing support.</li></ul>',
    imageDescription: '/product-detail/unlimited-verified-bm5.jpg',

    review: {
      id: 'review-4',
      author: 'Robert Chen',
      authorTitle: 'Performance Marketing Lead',
      comment:
        'The unlimited BM5 has been a game-changer for our agency. We can now scale campaigns without any spending restrictions.',
      count: 54,
    },

    price: 330,
    category: 'verified-bm',
    image: '/products/bm_verified.png',
    badge: 'Premium',
    stock: 'in-stock',
    purchases: 3212,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
  },
  {
    id: 'verified-bm-4',
    slug: 'unlimited-verified-bm5',
    name: 'Unlimited Verified BM5',
    description:
      'Unlimited verified Business Manager with 5 ads accounts – no daily spending limits.',
    detail:
      '<p><strong>Unlimited BM5</strong> — the ultimate choice for agencies and performance marketers.</p><ul><li><strong>Reinstated, verified, and stable</strong> — trusted after successful appeal.</li><li><strong>5 ads accounts</strong> included with <strong>no daily spending limits</strong>.</li><li>First account has fixed billing details, others are <strong>fully customizable</strong>.</li><li>Ideal for <strong>high-budget scaling</strong> and ads testing.</li><li><strong>Fully active</strong> with flawless pixel sharing support.</li></ul>',
    imageDescription: '/product-detail/unlimited-verified-bm5.jpg',

    review: {
      id: 'review-4',
      author: 'Robert Chen',
      authorTitle: 'Performance Marketing Lead',
      comment:
        'The unlimited BM5 has been a game-changer for our agency. We can now scale campaigns without any spending restrictions.',
      count: 54,
    },

    price: 390,
    category: 'verified-bm',
    image: '/products/bm_verified.png',
    badge: 'Premium',
    stock: 'in-stock',
    purchases: 3212,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
  },

  // {
  //   id: 'unverified-bm-1',
  //   slug: 'unverified-bm',
  //   name: 'Unverified BM',
  //   description: 'Basic unverified Business Manager for testing.',
  //   detail:
  //     '<p>Basic <strong>Unverified Business Manager</strong> — ideal for testing or creating your own setup.</p><ul><li><strong>No ads accounts included</strong> — clean slate for custom setup.</li><li><strong>Billing is customizable</strong> once you add accounts.</li><li>Lower trust score, but <strong>no restrictions on usage</strong>.</li><li>Pixel sharing may be limited versus verified BMs.</li><li><strong>Instantly ready</strong> for configuration and launch.</li></ul>',
  //   price: 10,
  //   category: 'unverified-bm',
  //   image: '/products/bm_unverified.png',
  //   imageDescription: '/product-detail/unverified-bm.png',
  //   stock: 'in-stock',

  //   review: {
  //     id: 'review-5',
  //     author: 'John Smith',
  //     authorTitle: 'Marketing Manager',
  //     comment:
  //       'The unverified BM is a great option for those who want to test the waters before committing to a verified setup.',
  //   },

  //   purchases: 578,
  //   gradient: 'from-teal-500 to-green-500',
  //   bgGradient: 'from-teal-50 to-green-50',
  // },
  // {
  //   id: 'unverified-bm-2',
  //   slug: 'unverified-recovered-bm',
  //   name: 'Recovered Unverified BM',
  //   description: 'Recovered unverified Business Manager with history.',
  //   detail:
  //     '<p><strong>Recovered Unverified BM</strong> — functional and active post-ban recovery.</p><ul><li><strong>Recovered but not verified</strong> — best for users with experience managing risk.</li><li>No ads accounts included — <strong>add your own easily</strong>.</li><li>Billing info is fully customizable when you create accounts.</li><li>Trust score is moderate — <strong>limited pixel support</strong> may apply.</li><li>Active and <strong>ready for use upon delivery</strong>.</li></ul>',
  //   price: 30,
  //   imageDescription: '/product-detail/unverified-bm.png',
  //   category: 'unverified-bm',
  //   image: '/products/bm_unverified.png',
  //   stock: 'in-stock',
  //   review: {
  //     id: 'review-6',
  //     author: 'Jane Doe',
  //     authorTitle: 'Business Owner',
  //     comment:
  //       'The recovered unverified BM is a great option for those who want to test the waters before committing to a verified setup.',
  //   },
  //   purchases: 398,
  //   gradient: 'from-green-500 to-emerald-500',
  //   bgGradient: 'from-green-50 to-emerald-50',
  // },

  {
    id: 'profile-1',
    slug: 'asia-reinstated-2gl',
    name: 'Asia Reinstated Aged Profile',
    description: 'Asia profile with 2 green line tick (verified 1 time).',
    detail:
      '<p><strong>Asia Reinstated Profile – 2 Green Line</strong></p><ul><li>Verified once with full government ID — <strong>great trust and approval rate</strong>.</li><li>Farmed and warmed in-house — <strong>never purchased externally</strong>.</li><li><strong>Real friends and activity</strong> — improves credibility.</li><li>Ad-ready with <strong>no setup required</strong>.</li><li><strong>Lifetime support</strong> included for long-term stability.</li></ul>',
    price: 30,
    category: 'profile',
    image: '/products/fb_via.png',
    imageDescription: '/product-detail/asia-reinstated-2gl.png',
    stock: 'in-stock',
    review: {
      id: 'review-7',
      author: 'John Doe',
      authorTitle: 'Marketing Manager',
      comment:
        'The Asia reinstated profile is a great option for those who want to test the waters before committing to a verified setup.',
    },
    purchases: 4335,
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50',
  },
  {
    id: 'profile-3',
    slug: 'usa-reinstated-2gl',
    name: 'USA Reinstated Aged Profile',
    description: 'USA profile with 2 green line tick (verified 1 time).',
    detail:
      '<p><strong>USA Reinstated – 2 Green Line</strong></p><ul><li>Full ID verification with government credentials.</li><li>Created and farmed in-house — <strong>no third-party sourcing</strong>.</li><li>Active with <strong>real engagement and credibility</strong>.</li><li><strong>Fully ready for ads use</strong> with lifetime support included.</li></ul>',
    price: 40,
    category: 'profile',
    image: '/products/fb_via.png',
    badge: 'Premium',
    stock: 'in-stock',
    review: {
      id: 'review-9',
      author: 'John Doe',
      authorTitle: 'Marketing Manager',
      comment:
        'The USA reinstated profile is a great option for those who want to test the waters before committing to a verified setup.',
    },
    imageDescription: '/product-detail/usa-reinstated-2gl.png',
    purchases: 1202,
    gradient: 'from-red-500 to-rose-500',
    bgGradient: 'from-red-50 to-rose-50',
  },
  // {
  //   id: 'profile-2',
  //   slug: 'asia-reinstated-3gl',
  //   name: 'Asia Reinstated 902 3 Green Line',
  //   description: 'Asia profile with 3 green line tick (verified 2 times).',
  //   detail:
  //     '<p><strong>Asia Reinstated 902 – 3 Green Line</strong></p><ul><li><strong>Double verified</strong> via ID (SARI) for exceptional trust.</li><li>3x trust level compared to single-tick profiles.</li><li>Excellent for <strong>scalable ads campaigns</strong> with minimal review issues.</li><li>Includes <strong>email recovery</strong> to reduce lock risk.</li><li><strong>Ready to advertise after 24h warm-up</strong>.</li></ul>',
  //   price: 35,
  //   category: 'profile',
  //   image: '/products/fb_via.png',
  //   imageDescription: '/product-detail/asia-reinstated-3gl.png',
  //   stock: 'in-stock',
  //   review: {
  //     id: 'review-8',
  //     author: 'Jane Doe',
  //     authorTitle: 'Business Owner',
  //     comment:
  //       'The Asia reinstated profile is a great option for those who want to test the waters before committing to a verified setup.',
  //   },
  //   purchases: 1272,
  //   gradient: 'from-orange-500 to-red-500',
  //   bgGradient: 'from-orange-50 to-red-50',
  // },
  // {
  //   id: 'facebook-verified-usa',
  //   slug: 'usa-reinstated-3gl',
  //   name: 'USA Reinstated 902 3 Green Line',
  //   description: 'USA profile with 3 green line tick (verified 2 times).',
  //   detail:
  //     '<p><strong>USA Reinstated 902 – 3 Green Line</strong></p><ul><li>Verified twice (SARI) — <strong>maximized trust and ads delivery success</strong>.</li><li>Low risk of checkpoints — email recovery provided.</li><li>Warm up for <strong>24 hours before full use</strong>.</li><li>Perfect for <strong>premium campaigns and long-term stability</strong>.</li></ul>',
  //   price: 50,
  //   category: 'profile',
  //   image: '/products/fb_via.png',
  //   badge: 'Best Value',
  //   stock: 'low-stock',
  //   imageDescription: '/product-detail/usa-reinstated-3gl.png',
  //   review: {
  //     id: 'review-10',
  //     author: 'Jane Doe',
  //     authorTitle: 'Business Owner',
  //     comment:
  //       'The USA reinstated profile is a great option for those who want to test the waters before committing to a verified setup.',
  //   },
  //   purchases: 1455,
  //   gradient: 'from-rose-500 to-pink-500',
  //   bgGradient: 'from-rose-50 to-pink-50',
  // },

  {
    id: 'profile-9',
    slug: 'asia-aged-double-reinstated',
    name: 'Premium Asia Reinstated Aged Profile',
    description: 'Aged Asia profile, verified twice for maximum stability.',
    detail:
      '<p><strong>Asia Aged + Double Reinstated Profile</strong></p><ul><li><strong>Aged Account:</strong> Created between 2013–2021 with long usage history.</li><li><strong>Double Reinstated:</strong> Verified twice with government-issued ID.</li><li><strong>Trusted for Ads:</strong> Stable for running long-term campaigns.</li><li><strong>Real Activity:</strong> Friends, posts, and engagement to boost credibility.</li><li><strong>Ad-Ready:</strong> Start ads after a short warm-up.</li><li><strong>Lifetime Support</strong> included for reliability.</li></ul>',
    price: 40,
    category: 'profile',
    image: '/products/fb_via.png',
    imageDescription: '/product-detail/asia-aged-double-reinstated.png',
    stock: 'in-stock',
    review: {
      id: 'review-21',
      author: 'Nguyen Hoang',
      authorTitle: 'Media Buyer',
      comment:
        'Stable Asia aged profile, the double verification really makes ads safer and smoother.',
    },
    purchases: 845,
    gradient: 'from-emerald-500 to-green-600',
    bgGradient: 'from-emerald-50 to-green-50',
  },
  {
    id: 'profile-10',
    slug: 'usa-aged-double-reinstated',
    name: 'Premium USA Reinstated Aged Profile',
    description: 'Premium US aged profile, verified twice with high trust.',
    detail:
      '<p><strong>USA Aged + Double Reinstated Profile</strong></p><ul><li><strong>Aged Account:</strong> Created between 2012–2020 with authentic usage.</li><li><strong>Advertising Access Reinstated (Twice):</strong> Verified twice with government ID.</li><li><strong>High Trust Score:</strong> Stronger approval rate for ad accounts.</li><li><strong>Organic Activity:</strong> Real friends, posts, and activity included.</li><li><strong>Fewer Restrictions:</strong> US profiles deliver stronger and more consistent ad results.</li><li><strong>Ad-Ready:</strong> Run ads after 24h warm-up.</li><li><strong>Lifetime Support</strong> provided.</li></ul>',
    price: 50,
    category: 'profile',
    image: '/products/fb_via.png',
    imageDescription: '/product-detail/usa-aged-double-reinstated.png',
    stock: 'in-stock',
    review: {
      id: 'review-22',
      author: 'David Carter',
      authorTitle: 'Ad Specialist',
      comment:
        'The US aged double reinstated profile is one of the most reliable assets we’ve used for scaling campaigns.',
    },
    purchases: 690,
    gradient: 'from-blue-600 to-indigo-600',
    bgGradient: 'from-blue-50 to-indigo-50',
  },
  {
    id: 'profile-11',
    slug: 'asia-super-aged-double-reinstated',
    name: 'Asia Super Aged (7 years+) & Double Reinstated Profile',
    description: 'Super aged Asia profile, verified twice and highly stable.',
    detail:
      '<p><strong>Asia Super Aged + Double Reinstated Profile</strong></p><ul><li><strong>Super Aged Account:</strong> Created between 2009–2015 with extensive usage history.</li><li><strong>Double Reinstated:</strong> Verified twice with official ID for superior stability.</li><li><strong>Trusted for High Budgets:</strong> Strong approval and minimal checkpoint risk.</li><li><strong>Super Active:</strong> Real friends, timeline activity, and engagement.</li><li><strong>Ad Performance:</strong> Ideal for scaling campaigns quickly.</li><li><strong>Ad-Ready:</strong> Start campaigns after a simple 24h warm-up.</li><li><strong>Lifetime Support</strong> included.</li></ul>',
    price: 95,
    category: 'profile',
    image: '/products/fb_via.png',
    imageDescription: '/product-detail/asia-super-aged-double-reinstated.png',
    stock: 'in-stock',
    review: {
      id: 'review-23',
      author: 'Pham Tuan',
      authorTitle: 'Agency Owner',
      comment:
        'Asia super aged profile works extremely well — stable, trusted, and great for long-term campaigns.',
    },
    purchases: 530,
    gradient: 'from-purple-600 to-violet-600',
    bgGradient: 'from-purple-50 to-violet-50',
  },
  {
    id: 'profile-12',
    slug: 'usa-super-aged-double-reinstated',
    name: 'USA Super Aged (7 years+) & Double Reinstated Profile',
    description: 'Super aged US profile with double reinstatement and maximum trust.',
    detail:
      '<p><strong>USA Super Aged + Double Reinstated Profile</strong></p><ul><li><strong>Aged Account:</strong> Created between 2010–2022 with long-term usage and history.</li><li><strong>Advertising Access Reinstated (Twice):</strong> Verified twice with government-issued ID.</li><li><strong>SARI Verified:</strong> 3x stronger than regular ARI profiles.</li><li><strong>High Ad Performance:</strong> Trusted and stable for long-term ad use.</li><li><strong>Created in the USA:</strong> Stronger delivery and fewer restrictions.</li><li><strong>Super Active:</strong> Real activity, friend list, and trusted digital footprint.</li><li><strong>Ad-Ready:</strong> Start running ads after a simple 24-hour warm-up.</li><li><strong>Lifetime Support:</strong> We’re always here to help.</li></ul>',
    price: 110,
    category: 'profile',
    image: '/products/fb_via.png',
    imageDescription: '/product-detail/usa-super-aged-double-reinstated.png',
    stock: 'low-stock',
    review: {
      id: 'review-24',
      author: 'Chris Martin',
      authorTitle: 'Marketing Director',
      comment:
        'The US super aged profile is by far the strongest we’ve used. Reliable, high-trust, and great for premium clients.',
    },
    purchases: 460,
    gradient: 'from-red-600 to-pink-600',
    bgGradient: 'from-red-50 to-pink-50',
  },
  {
    id: 'page-1',
    slug: 'aged-reinstated-page',
    name: 'Aged Reinstated Page',
    description: 'Recovered Facebook page with established history.',
    detail:
      '<p><strong>Aged Reinstated Page</strong> — pre-approved and trusted for ads use.</p><ul><li><strong>Recovered and fully approved</strong> for Facebook advertising.</li><li><strong>Customizable page name</strong> before delivery.</li><li>Green quality status — <strong>perfect for launching ads campaigns</strong>.</li><li>Instantly addable to any Business Manager — <strong>zero delay</strong>.</li></ul>',
    price: 35,
    category: 'page',
    image: '/products/fb_fanpage.png',
    stock: 'in-stock',
    review: {
      id: 'review-11',
      author: 'John Doe',
      authorTitle: 'Marketing Manager',
      comment:
        'The aged reinstated page is a great option for those who want to test the waters before committing to a verified setup.',
    },
    purchases: 2120,
    imageDescription: '/product-detail/aged-reinstated-page.webp',
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50',
  },
  {
    id: 'page-2',
    slug: '1k-3k-follower-fanpage',
    name: '1k-3k Follower Fanpage',
    description: 'Facebook page with 1k–3k followers.',
    detail:
      '<p><strong>1k-3k Follower Fanpage</strong> — start your brand with an engaged base.</p><ul><li>Comes with <strong>1,000–3,000 followers</strong>.</li><li>Organic-looking follower distribution.</li><li>Green status and ad-safe.</li><li>Boosts credibility for new businesses.</li></ul>',
    price: 45,
    category: 'page',
    image: '/products/fb_fanpage.png',
    stock: 'in-stock',
    review: {
      id: 'review-13',
      author: 'David Nguyen',
      authorTitle: 'Growth Hacker',
      comment:
        'Having 1k+ followers instantly helps improve trust and makes ads perform better in the first phase.',
    },
    purchases: 1340,
    imageDescription: '/product-detail/1k-3k-follower-fanpage.webp',
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50',
  },
  {
    id: 'page-3',
    slug: '5k-6k-follower-fanpage',
    name: '5k-6k Follower Fanpage',
    description: 'Facebook page with 5k–6k followers.',
    detail:
      '<p><strong>5k-6k Follower Fanpage</strong> — solid starting point for credibility.</p><ul><li>Delivered with <strong>5,000–6,000 followers</strong>.</li><li>Active and natural follower growth patterns.</li><li>Pre-checked quality status for ad campaigns.</li><li>Boosts trust and improves engagement rates.</li></ul>',
    price: 65,
    category: 'page',
    image: '/products/fb_fanpage.png',
    stock: 'in-stock',
    review: {
      id: 'review-14',
      author: 'Sophia Lee',
      authorTitle: 'Brand Manager',
      comment:
        'With 5k+ followers, our ads got better CTR and the page looked much more professional to clients.',
    },
    purchases: 980,
    imageDescription: '/product-detail/5k-6k-follower-fanpage.webp',
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50',
  },
  {
    id: 'page-4',
    slug: '7k-8k-follower-fanpage',
    name: '7k-8k Follower Fanpage',
    description: 'Facebook page with 7k–8k followers.',
    detail:
      '<p><strong>7k-8k Follower Fanpage</strong> — build instant authority for your brand.</p><ul><li>Comes with <strong>7,000–8,000 followers</strong>.</li><li>High trust factor and engagement-friendly.</li><li>Green quality status guaranteed.</li><li>Perfect for scaling ad campaigns from day one.</li></ul>',
    price: 85,
    category: 'page',
    image: '/products/fb_fanpage.png',
    stock: 'in-stock',
    review: {
      id: 'review-15',
      author: 'Mark Johnson',
      authorTitle: 'Advertising Consultant',
      comment:
        'This level of followers gave our brand instant credibility. Ads converted much faster.',
    },
    purchases: 760,
    imageDescription: '/product-detail/7k-8k-follower-fanpage.webp',
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50',
  },
  {
    id: 'page-8',
    slug: '10k-follower-fanpage',
    name: '10k Follower Fanpage',
    description:
      'Facebook fanpage with 10,000 followers — ready for immediate monetization and engagement.',
    detail:
      '<p><strong>10k Follower Fanpage</strong> — established and ready for growth.</p><ul><li><strong>10,000 active followers</strong> with organic engagement potential.</li><li>Pre-warmed fanpage ready for immediate monetization setup.</li><li>Established audience base for higher engagement rates.</li><li>Green quality status for reliable ad delivery.</li><li>Perfect for brand promotion, content marketing, or revenue generation.</li><li>Flexible for niche or general audience targeting.</li></ul>',
    price: 110,
    category: 'page',
    image: '/products/fb_fanpage.png',
    stock: 'in-stock',
    purchases: 274,
    imageDescription: '/product-detail/10k-follower-fanpage.png',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
  },
  {
    id: 'page-5',
    slug: 'running-ads-livestream-page',
    name: 'Running Ads Livestream Page',
    description: 'Facebook page optimized for livestream ads campaigns.',
    detail:
      '<p><strong>Running Ads Livestream Page</strong> — perfect for direct sales and livestream advertising.</p><ul><li>Pre-approved for <strong>running ads without restrictions</strong>.</li><li>Optimized for livestream interaction and conversion.</li><li>Comes with strong page history and stability.</li><li>Great for e-commerce or influencer campaigns.</li></ul>',
    price: 200,
    category: 'page',
    image: '/products/fb_fanpage.png',
    stock: 'in-stock',
    review: {
      id: 'review-16',
      author: 'Lisa Tran',
      authorTitle: 'E-commerce Founder',
      comment:
        'We used the livestream page and immediately saw higher engagement on our sales sessions.',
    },
    purchases: 420,
    imageDescription: '/product-detail/running-ads-livestream-page.webp',
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50',
  },
  {
    id: 'ad-account-1',
    slug: 'ad-account-50-dsl',
    name: 'Ad account $50 DSL',
    description: 'Ad account with $50 daily spend limit (DSL) — ready for immediate ad delivery.',
    price: 70,
    category: 'ad-account',
    image: '/products/ad_account.png',
    stock: 'in-stock',
    purchases: 157,
    imageDescription: '/product-detail/ad-account-50-dsl.png',
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50',
  },
  {
    id: 'ad-account-2',
    slug: 'ad-account-250-dsl',
    name: 'Ad account $250 DSL',
    description:
      'Ad account with $250 daily spend limit (DSL) — higher capacity for scaling campaigns.',
    price: 190,
    category: 'ad-account',
    image: '/products/ad_account.png',
    stock: 'in-stock',
    purchases: 1214,
    imageDescription: '/product-detail/ad-account-250-dsl.png',
    gradient: 'from-amber-600 to-red-500',
    bgGradient: 'from-amber-50 to-red-50',
  },
  {
    id: 'ad-account-3',
    slug: 'ad-account-nolimit-dsl',
    name: 'Ad account Nolimit DSL',
    description: 'No-limit ad account (DSL) — suitable for large budgets and continuous scaling.',
    price: 290,
    category: 'ad-account',
    image: '/products/ad_account.png',
    stock: 'in-stock',
    purchases: 657,
    imageDescription: '/product-detail/ad-account-nolimit-dsk.png',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
  },
  {
    id: 'waba-1',
    slug: 'bm-whatsapp-api-250-limit-verified',
    name: 'BM WhatsApp API 250 limit verified',
    description:
      'Business Manager with WhatsApp Business API — 250 message limit, verified account.',
    detail:
      '<p><strong>BM WhatsApp API 250 Limit Verified</strong> — for small to medium WhatsApp businesses.</p><ul><li><strong>Verified Business Manager</strong> with WhatsApp integration.</li><li><strong>250 message daily limit</strong> for customer interactions.</li><li>Fully compliant with Meta policies.</li><li>Ready for immediate deployment.</li><li>Includes support and monitoring.</li></ul>',
    price: 100,
    category: 'waba',
    image: '/products/waba.png',
    stock: 'in-stock',
    purchases: 1424,
    imageDescription: '/product-detail/waba-250-limit.png',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
  },
  {
    id: 'waba-2',
    slug: 'bm-whatsapp-api-2k-limit-verified',
    name: 'BM WhatsApp API 2k limit verified',
    description:
      'Business Manager with WhatsApp Business API — 2,000 message limit, verified account.',
    detail:
      '<p><strong>BM WhatsApp API 2k Limit Verified</strong> — for growing WhatsApp businesses.</p><ul><li><strong>Verified Business Manager</strong> with full WhatsApp API access.</li><li><strong>2,000 message daily limit</strong> for scaling customer communication.</li><li>Advanced features and automations supported.</li><li>Higher throughput for business growth.</li><li>Priority support included.</li></ul>',
    price: 280,
    category: 'waba',
    image: '/products/waba.png',
    stock: 'in-stock',
    purchases: 812,
    imageDescription: '/product-detail/waba-2k-limit.png',
    gradient: 'from-lime-500 to-green-600',
    bgGradient: 'from-lime-50 to-green-50',
  },
  {
    id: 'waba-3',
    slug: 'bm-whatsapp-api-10k-limit-verified',
    name: 'BM WhatsApp API 10k limit verified',
    description:
      'Business Manager with WhatsApp Business API — 10,000 message limit, verified account.',
    detail:
      '<p><strong>BM WhatsApp API 10k Limit Verified</strong> — for enterprise WhatsApp solutions.</p><ul><li><strong>Verified Business Manager</strong> with unlimited WhatsApp API capabilities.</li><li><strong>10,000 message daily limit</strong> for high-volume customer engagement.</li><li>Full API documentation and webhook support.</li><li>Custom integrations and advanced automation.</li><li><strong>24/7 dedicated support</strong> included.</li></ul>',
    price: 1400,
    category: 'waba',
    image: '/products/waba.png',
    stock: 'in-stock',
    purchases: 112,
    imageDescription: '/product-detail/waba-10k-limit.png',
    gradient: 'from-teal-500 to-green-600',
    bgGradient: 'from-teal-50 to-green-50',
  },
  {
    id: 'page-6',
    slug: 'monetized-page-10k-follower',
    name: 'Monetized Page with 10k follower',
    description:
      'Monetized Facebook page with 10k followers — generate revenue through ads and engagement.',
    detail:
      '<p><strong>Monetized Page with 10k Followers</strong> — ready for instant monetization.</p><ul><li><strong>Facebook Partner Monetized</strong> — earn from ads and content.</li><li><strong>10,000 established followers</strong> with organic engagement.</li><li>Revenue sharing enabled — start earning immediately.</li><li>Higher CPM potential with larger audience base.</li><li><strong>Fully compliant</strong> with Facebook monetization policies.</li><li>Additional followers available at $190 per 10k.</li></ul>',
    price: 300,
    category: 'page',
    image: '/products/fb_fanpage.png',
    stock: 'in-stock',
    purchases: 1472,
    imageDescription: '/product-detail/monetized-page-10k-follower.png',
    gradient: 'from-blue-600 to-purple-600',
    bgGradient: 'from-blue-50 to-purple-50',
  },
  {
    id: 'page-7',
    slug: 'blue-verification-badge-page',
    name: 'Blue Verification BADGE Page',
    description:
      'Facebook page with official blue verification badge — maximum credibility and trust.',
    detail:
      '<p><strong>Blue Verification BADGE Page</strong> — the ultimate page authority.</p><ul><li><strong>Official blue verification badge</strong> — Facebook&apos;s highest trust indicator.</li><li>Instantly boosts credibility with audiences.</li><li><strong>Eligibility for premium features</strong> automatically granted.</li><li>Faster ad approvals and higher quality score.</li><li>Perfect for brands, influencers, and businesses.</li><li>Verified status never expires with proper maintenance.</li></ul>',
    price: 400,
    category: 'page',
    image: '/products/fb_fanpage.png',
    stock: 'in-stock',
    purchases: 234,
    imageDescription: '/product-detail/blue-verification-badge-page.png',
    gradient: 'from-indigo-600 to-blue-600',
    bgGradient: 'from-indigo-50 to-blue-50',
  },
  {
    id: 'service-1',
    slug: 'unbanned-bm-with-request-review-button',
    name: 'Unbanned BM has request review button',
    description: 'Unbanned Business Manager with request review button functionality enabled.',
    detail:
      '<p><strong>Unbanned BM with Request Review Button</strong> — reinstate your BM quickly.</p><ul><li><strong>Successfully unbanned</strong> and fully operational.</li><li><strong>Request review button active</strong> — appeal options still available.</li><li>Ready for immediate use in advertising campaigns.</li><li>Full access to all Business Manager features.</li><li>Stable account status with monitoring support.</li></ul>',
    price: 400,
    category: 'service',
    image: '/products/service_unbanned_bm.png',
    stock: 'in-stock',
    purchases: 212,
    imageDescription: '/product-detail/unbanned-bm-request-review.png',
    gradient: 'from-orange-500 to-red-600',
    bgGradient: 'from-orange-50 to-red-50',
  },
  {
    id: 'service-2',
    slug: 'unbanned-bm-no-request-review-button',
    name: 'Unbanned BM has no request review button',
    description:
      'Unbanned Business Manager without request review button — fully closed account status.',
    detail:
      '<p><strong>Unbanned BM with No Request Review Button</strong> — permanently reinstated.</p><ul><li><strong>Permanently unbanned</strong> — no further review options needed.</li><li><strong>No request review button</strong> — account status is final and locked in.</li><li>Maximum stability and long-term reliability.</li><li>Full Business Manager access for all advertising functions.</li><li>Best choice for committed long-term campaigns.</li></ul>',
    price: 600,
    category: 'service',
    image: '/products/service_unbanned_bm.png',
    stock: 'in-stock',
    purchases: 112,
    imageDescription: '/product-detail/unbanned-bm-no-request-review.png',
    gradient: 'from-red-600 to-pink-600',
    bgGradient: 'from-red-50 to-pink-50',
  },
]

// Helper function to get display name from category
export function getCategoryDisplayName(category: ProductCategory): string {
  const categoryMap: Record<ProductCategory, string> = {
    'verified-bm': 'Business Manager',
    'unverified-bm': 'Unverified BM',
    profile: 'Profiles',
    page: 'Pages',
    'ad-account': 'Ad Accounts',
    waba: 'WhatsApp Business API',
    service: 'Services',
  }
  return categoryMap[category] || category
}

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

export function getRelatedProducts(productId: string): Product[] {
  const product = getProductById(productId)
  const category = product?.category || 'verified-bm'
  return products.filter((p) => p.id !== productId && p.category === category).slice(0, 3)
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
    purchases: product.purchases,
    gradient: product.gradient,
    bgGradient: product.bgGradient,
  }))
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
    stock: product.stock || 'in-stock',
    imageDescription: product.imageDescription,
    review: product.review
      ? {
          id: product.review.id,
          comment: product.review.comment,
          author: product.review.author,
          authorTitle: product.review.authorTitle,
          count: product.review.count,
        }
      : undefined,
  }
}
