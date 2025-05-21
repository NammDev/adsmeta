import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return `€${amount.toFixed(2)}`
}

/**
 * Opens a WhatsApp chat with the specified phone number and message
 * @param message - The message to pre-fill in the WhatsApp chat
 * @param phoneNumber - The phone number to chat with (default: +84865717497)
 */
export function openWhatsAppChat(message: string, phoneNumber = "84865717497") {
  // Remove any + signs or spaces from the phone number
  const formattedNumber = phoneNumber.replace(/[+\s]/g, "")

  // Create the WhatsApp URL with the encoded message
  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`

  // Open WhatsApp in a new tab/window
  window.open(whatsappUrl, "_blank")
}
