import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function openWhatsAppChat() {
  // Replace with your actual WhatsApp number (include country code without + sign)
  const phoneNumber = "1234567890" // Example: "1234567890" for +1-234-567-890
  const message = "Hello! I'm interested in learning more about your products."

  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  // Open WhatsApp in a new tab/window
  window.open(whatsappUrl, "_blank")
}
