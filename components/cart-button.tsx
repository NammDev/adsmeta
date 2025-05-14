"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { ShoppingBag } from "lucide-react"

export function CartButton() {
  const { toggleCart, itemCount, animateCount } = useCart()

  return (
    <Button
      className="relative bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-full w-12 h-12 flex items-center justify-center group"
      onClick={toggleCart}
      aria-label="Open cart"
    >
      <ShoppingBag
        style={{ width: "24px", height: "24px", minWidth: "24px", minHeight: "24px" }}
        className="transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
      {itemCount > 0 && (
        <span
          className={`absolute -top-2 -right-2 bg-white text-[#0066FF] text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center border border-[#0066FF] ${animateCount ? "animate-count-update" : ""}`}
        >
          {itemCount}
        </span>
      )}
    </Button>
  )
}
