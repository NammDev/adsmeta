"use client"

import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import type { ButtonHTMLAttributes, ReactNode } from "react"

interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isLoading?: boolean
  loadingText?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

export function LoadingButton({
  children,
  isLoading = false,
  loadingText,
  variant = "default",
  size = "default",
  ...props
}: LoadingButtonProps) {
  return (
    <Button variant={variant} size={size} disabled={isLoading || props.disabled} {...props}>
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText || children}
        </>
      ) : (
        children
      )}
    </Button>
  )
}
