"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Sparkles, Star } from "lucide-react"

const companies = [
  { name: "Vercel", logo: "/logos/vercel.svg" },
  { name: "Supabase", logo: "/logos/supabase.svg" },
  { name: "Raycast", logo: "/logos/raycast.svg" },
  { name: "Agency Partner", logo: "/logos/agency-partner-logo.svg" },
]

export default function TrustIndicatorsSection() {
  const [duplicatedCompanies, setDuplicatedCompanies] = useState(companies)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Duplicate the companies array to ensure smooth infinite scrolling
    setDuplicatedCompanies([...companies, ...companies, ...companies])
  }, [])

  return (
    <section className="py-8 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Mobile Layout - Stacked */}
        <div className="block md:hidden">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 flex flex-wrap items-center justify-center gap-2">
              Trusted by Leading Marketing Agencies Worldwide
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm p-6">
            <div
              className="relative overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)",
              }}
            >
              <div ref={containerRef} className="flex items-center animate-marquee">
                {duplicatedCompanies.map((company, index) => (
                  <div key={`${company.name}-${index}`} className="flex-shrink-0 mx-6">
                    <div className="relative h-10 w-full max-w-[120px] group">
                      <Image
                        src={company.logo || "/placeholder.svg"}
                        alt={`${company.name} logo`}
                        width={120}
                        height={40}
                        className="h-full w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side (1/3 + 2/3) */}
        <div className="hidden md:flex items-center gap-12">
          {/* Left Side - Title with Badge (1/3) */}
          <div className="w-1/3 flex justify-center">
            <div className="text-center">
              <p className="text-lg text-gray-600 flex flex-col items-center gap-3">
                <span>Trusted by</span>
                <span>Marketing Agencies Worldwide</span>
              </p>
            </div>
          </div>

          {/* Right Side - Scrolling Logos (2/3) */}
          <div className="w-2/3">
            <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm p-8">
              <div
                className="relative overflow-hidden"
                style={{
                  maskImage:
                    "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 8%, rgb(0, 0, 0) 92%, rgba(0, 0, 0, 0) 100%)",
                }}
              >
                <div ref={containerRef} className="flex items-center animate-marquee">
                  {duplicatedCompanies.map((company, index) => (
                    <div key={`${company.name}-${index}`} className="flex-shrink-0 mx-8 lg:mx-12">
                      <div className="relative h-12 w-full max-w-[120px] bg-white/60 backdrop-blur-sm rounded-lg p-2 shadow-sm border border-gray-100/50 hover:bg-white/80 transition-all duration-300">
                        <Image
                          src={company.logo || "/placeholder.svg"}
                          alt={`${company.name} logo`}
                          width={120}
                          height={40}
                          className="h-full w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </section>
  )
}
