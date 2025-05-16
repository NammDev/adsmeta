"use client"

import { useCart } from "@/context/cart-context"
import { ShoppingBag } from "lucide-react"

export function CartButton() {
  const { itemCount, toggleCart, animateCount } = useCart()

  return (
    <button
      onClick={toggleCart}
      className="relative p-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
      aria-label={`Shopping cart with ${itemCount} items`}
    >
      <ShoppingBag className="h-5 w-5 text-gray-700" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-[10px] font-medium text-white">
          {itemCount}
        </span>
      )}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"></span>
    </button>
  )
}
