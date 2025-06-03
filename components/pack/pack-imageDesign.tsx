"use client"

export default function PackImageDesign({ imageDesign }: { imageDesign?: string }) {
  return (
    <div className="flex justify-center items-center p-4">
      <img
        src={imageDesign || "/placeholder.svg"}
        alt="Product connection chart"
        className="max-w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  )
}
