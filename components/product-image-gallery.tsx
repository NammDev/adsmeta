"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProductImageGalleryProps {
  mainImage: string
  thumbnails: string[]
  altText: string
}

export default function ProductImageGallery({ mainImage, thumbnails, altText }: ProductImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(mainImage)
  const allImages = [mainImage, ...thumbnails]

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 h-[400px] flex items-center justify-center relative">
        <Image
          src={currentImage || "/placeholder.svg"}
          alt={altText}
          width={500}
          height={400}
          className="max-h-full w-auto object-contain"
        />

        {/* Navigation arrows for mobile */}
        {allImages.length > 1 && (
          <>
            <button
              className="absolute left-2 bg-white rounded-full p-1 shadow-md opacity-70 hover:opacity-100 md:hidden"
              onClick={() => {
                const currentIndex = allImages.indexOf(currentImage)
                const prevIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1
                setCurrentImage(allImages[prevIndex])
              }}
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button
              className="absolute right-2 bg-white rounded-full p-1 shadow-md opacity-70 hover:opacity-100 md:hidden"
              onClick={() => {
                const currentIndex = allImages.indexOf(currentImage)
                const nextIndex = currentIndex === allImages.length - 1 ? 0 : currentIndex + 1
                setCurrentImage(allImages[nextIndex])
              }}
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {allImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          <button
            className={`border-2 rounded-md overflow-hidden w-20 h-20 flex-shrink-0 ${
              currentImage === mainImage ? "border-facebook" : "border-gray-200"
            }`}
            onClick={() => setCurrentImage(mainImage)}
          >
            <Image
              src={mainImage || "/placeholder.svg"}
              alt={altText}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </button>

          {thumbnails.map((thumb, index) => (
            <button
              key={index}
              className={`border-2 rounded-md overflow-hidden w-20 h-20 flex-shrink-0 ${
                currentImage === thumb ? "border-facebook" : "border-gray-200"
              }`}
              onClick={() => setCurrentImage(thumb)}
            >
              <Image
                src={thumb || "/placeholder.svg"}
                alt={`${altText} thumbnail ${index + 1}`}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
