"use client"

import type React from "react"
import { useCart } from "hooks/use-cart"
import { useUI } from "hooks/use-ui"
import { Button } from "components/ui"
import { useIsMobile } from "hooks/use-is-mobile"
import { useRouter } from "next/navigation"

interface ProductSectionItem {
  id: string
  name: string
  price: number
  description: string
  image?: string
  category: string
}

interface ProductsSectionProps {
  title: string
  products: ProductSectionItem[]
}

const ProductsSection = ({ title, products }: ProductsSectionProps) => {
  const isMobile = useIsMobile()
  const { addItem } = useCart()
  const { openCart } = useUI()
  const router = useRouter()

  const handleAddToCart = (product: ProductSectionItem, event: React.MouseEvent) => {
    event.stopPropagation() // Prevent card click

    if (!addItem) {
      console.error("Cart functionality not available")
      return
    }

    try {
      const item = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image || "/placeholder.svg",
        category: product.category,
      }

      addItem(item)

      // Open cart on desktop, or just show feedback on mobile
      if (!isMobile && openCart) {
        openCart()
      }
    } catch (error) {
      console.error("Error adding to cart:", error)
    }
  }

  const handleCardClick = (productId: string) => {
    router.push(`/products/${productId}`)
  }

  const featuredProducts = products.slice(0, 2)
  const otherProducts = products.slice(2, 4)
  const moreProducts = products.slice(4, 6)

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>

        {/* Featured Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => handleCardClick(product.id)}
              className="bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-2xl transition-all duration-500 group transform hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
            >
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="rounded-xl mb-4 w-full object-cover aspect-[4/3]"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-3">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">${product.price}</span>
                <Button onClick={(e) => handleAddToCart(product, e)}>Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>

        {/* Other Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {otherProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => handleCardClick(product.id)}
              className="bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-2xl transition-all duration-500 group transform hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
            >
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="rounded-xl mb-4 w-full object-cover aspect-[4/3]"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-3">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">${product.price}</span>
                <Button onClick={(e) => handleAddToCart(product, e)}>Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>

        {/* More Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {moreProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => handleCardClick(product.id)}
              className="bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-2xl transition-all duration-500 group transform hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
            >
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="rounded-xl mb-4 w-full object-cover aspect-[4/3]"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-3">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">${product.price}</span>
                <Button onClick={(e) => handleAddToCart(product, e)}>Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
