"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const companies = [
  { name: "Vercel", logo: "/logos/vercel.svg" },
  { name: "Supabase", logo: "/logos/supabase.svg" },
  { name: "Raycast", logo: "/logos/raycast.svg" },
  { name: "Agency Partner", logo: "/agency-partner-logo.svg" },
]

export default function TrustIndicatorsSection() {
  const [duplicatedCompanies, setDuplicatedCompanies] = useState(companies)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Duplicate the companies array to ensure smooth infinite scrolling
    setDuplicatedCompanies([...companies, ...companies, ...companies])
  }, [])

  return (
    <section className="w-full bg-gray-50 overflow-hidden border-y border-gray-200">
      <div className="max-w-[1176px] h-[84px] mx-auto px-4 flex items-center">
        <div className="flex flex-row items-center">
          {/* Left side text */}
          <div className="w-full md:w-1/4 pr-0 md:pr-8 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 leading-tight">
              Trusted by leading marketing agencies worldwide
            </h3>
          </div>

          {/* Right side scrolling logos */}
          <div
            className="hidden md:block w-3/4 relative overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 4%, rgb(0, 0, 0) 96%, rgba(0, 0, 0, 0) 100%)",
            }}
          >
            <div ref={containerRef} className="flex items-center animate-marquee">
              {duplicatedCompanies.map((company, index) => (
                <div key={`${company.name}-${index}`} className="flex-shrink-0 mx-5">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    width={100}
                    height={30}
                    className="h-6 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
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
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
