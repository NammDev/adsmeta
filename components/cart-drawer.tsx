"use client"

import { useCart, type CartItem } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart()
  const [isAnimating, setIsAnimating] = useState(false)

  // Handle animations and keyboard events
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart()
    }

    if (isOpen) {
      setIsAnimating(true)
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, closeCart])

  // If cart is closed and not animating, don't render anything
  if (!isOpen && !isAnimating) return null

  return (
    <>
      {/* Semi-transparent overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Cart sidebar */}
      <div
        className={`fixed right-0 top-1/2 z-50 max-h-[80vh] w-full max-w-md -translate-y-1/2 rounded-l-xl bg-white shadow-xl transition-all duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-[105%]"
        }`}
        style={{
          animation: isOpen ? "slideIn 0.4s ease-out" : "slideOut 0.3s ease-in forwards",
        }}
        onAnimationEnd={() => {
          if (!isOpen) setIsAnimating(false)
        }}
      >
        <style jsx global>{`
          @keyframes slideIn {
            0% { transform: translate(105%, -50%); }
            70% { transform: translate(-5px, -50%); }
            100% { transform: translate(0, -50%); }
          }
          
          @keyframes slideOut {
            0% { transform: translate(0, -50%); }
            100% { transform: translate(105%, -50%); }
          }
        `}</style>

        <div className="flex h-full flex-col">
          {/* Cart Header */}
          <div className="flex items-center justify-between border-b px-6 py-4">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-facebook" />
              <h2 className="text-lg font-semibold">Your Cart</h2>
              {itemCount > 0 && (
                <span className="ml-1 rounded-full bg-facebook/10 px-2 py-0.5 text-xs font-medium text-facebook">
                  {itemCount} {itemCount === 1 ? "item" : "items"}
                </span>
              )}
            </div>
            <Button variant="ghost" size="icon" onClick={closeCart} className="h-8 w-8">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          {/* Cart Items */}
          {items.length > 0 ? (
            <>
              {/* Use ScrollArea with fixed height to ensure scrolling works properly */}
              <ScrollArea className="flex-1 overflow-auto" style={{ maxHeight: "calc(80vh - 180px)" }}>
                <div className="space-y-4 p-6">
                  {items.map((item) => (
                    <CartItemCard key={item.id} item={item} />
                  ))}
                </div>
              </ScrollArea>

              {/* Cart Footer - Fixed at bottom */}
              <div className="border-t p-6 space-y-4 bg-white">
                <div className="flex items-center justify-between font-medium">
                  <span>Subtotal</span>
                  <span>€{subtotal.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-500">Shipping and taxes calculated at checkout</p>
                <Button className="w-full bg-facebook hover:bg-facebook/90 text-white">Checkout</Button>
                <Button variant="outline" className="w-full" onClick={closeCart}>
                  Continue Shopping
                </Button>
              </div>
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center space-y-4 px-6 py-12">
              <div className="rounded-full bg-gray-100 p-6">
                <ShoppingCart className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium">Your cart is empty</h3>
              <p className="text-center text-gray-500">Looks like you haven't added any products to your cart yet.</p>
              <Button onClick={closeCart} className="mt-4 bg-facebook hover:bg-facebook/90 text-white">
                Continue Shopping
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

function CartItemCard({ item }: { item: CartItem }) {
  const { removeItem, updateQuantity } = useCart()

  return (
    <div className="flex gap-4">
      <div className="relative h-20 w-20 overflow-hidden rounded-md border bg-gray-50 flex-shrink-0">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover p-2" />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h4 className="font-medium">{item.name}</h4>
          <p className="text-sm text-gray-500 capitalize">{item.category?.replace("-", " ") || "Product"}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-3 w-3" />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            <span className="w-8 text-center text-sm">{item.quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="h-3 w-3" />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">€{(item.price * item.quantity).toFixed(2)}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-400 hover:text-red-500"
              onClick={() => removeItem(item.id)}
            >
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Remove item</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
