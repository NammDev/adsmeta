"use client"

import Image from "next/image"
import { useState } from "react"
import { ImageOff } from "lucide-react"

interface FallbackImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fallbackClassName?: string
}

export function FallbackImage({ src, alt, width, height, className = "", fallbackClassName = "" }: FallbackImageProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${fallbackClassName || className}`}
        style={{ width, height }}
      >
        <ImageOff className="h-8 w-8" />
      </div>
    )
  }

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setError(true)}
    />
  )
}
