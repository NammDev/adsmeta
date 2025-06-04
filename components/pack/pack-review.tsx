"use client"

import type { PackReview } from "@/data/packs"

interface PackReviewProps {
  reviews: PackReview[]
}

export default function PackSuccessStories({ reviews }: PackReviewProps) {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="py-8">
        <p className="text-gray-500 text-center">No success stories available.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {reviews.map((review, index) => (
        <div key={index}>
          <div className="py-6">
            <div className="flex items-start gap-4">
              <div
                className={`h-12 w-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex-shrink-0`}
              ></div>
              <div className="flex-1">
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                    {review.name}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">{review.role}</p>
                </div>
                <blockquote className="text-gray-700 mb-3 italic text-sm md:text-base">
                  "{review.comment}"
                </blockquote>
                {review.achievement && (
                  <div className="inline-flex items-center px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-green-50 text-green-700 text-xs md:text-sm font-medium">
                    ✓ {review.achievement}
                  </div>
                )}
              </div>
            </div>
          </div>
          {index < reviews.length - 1 && <div className="border-b border-gray-200"></div>}
        </div>
      ))}
    </div>
  )
}
