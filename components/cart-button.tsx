"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

export function CartButton() {
  const { toggleCart, itemCount } = useCart()

  return (
    <Button
      className="relative flex items-center gap-2 bg-facebook hover:bg-facebook-dark text-white transition-all duration-300"
      onClick={toggleCart}
      aria-label="Open cart"
    >
      <div className="relative">
        <ShoppingCart className="h-4 w-4" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-facebook text-[10px] rounded-full h-4 w-4 flex items-center justify-center animate-count-update">
            {itemCount}
          </span>
        )}
      </div>
      <span className="font-medium">My Purchases</span>
    </Button>
  )
}
