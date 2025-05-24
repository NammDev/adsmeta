import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function openWhatsAppChat(phoneNumber: string, message?: string) {
  const formattedPhone = phoneNumber.replace(/[^\d]/g, "")
  const encodedMessage = message ? encodeURIComponent(message) : ""
  const whatsappUrl = `https://wa.me/${formattedPhone}${message ? `?text=${encodedMessage}` : ""}`

  if (typeof window !== "undefined") {
    window.open(whatsappUrl, "_blank")
  }
}
