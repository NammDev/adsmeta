import Image from "next/image"

export default function TrustIndicatorsSection() {
  return (
    <section className="py-8 md:py-16 bg-lightblue">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-gray-600 mb-10 text-sm uppercase tracking-wider font-medium">
          Trusted by leading marketing agencies worldwide
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 items-center justify-items-center">
          {/* Only show first 2 logos on mobile */}
          <div className="relative h-12 w-full max-w-[140px]">
            <Image
              src="/agency-partner-logo.svg"
              alt="Agency Partner 1"
              width={140}
              height={48}
              className="h-full w-auto object-contain"
              priority
            />
          </div>

          <div className="relative h-12 w-full max-w-[140px]">
            <Image
              src="/agency-partner-logo.svg"
              alt="Agency Partner 2"
              width={140}
              height={48}
              className="h-full w-auto object-contain"
              priority
            />
          </div>

          {/* These 3 logos will only show on desktop */}
          <div className="relative h-12 w-full max-w-[140px] hidden md:block">
            <Image
              src="/agency-partner-logo.svg"
              alt="Agency Partner 3"
              width={140}
              height={48}
              className="h-full w-auto object-contain"
              priority
            />
          </div>

          <div className="relative h-12 w-full max-w-[140px] hidden md:block">
            <Image
              src="/agency-partner-logo.svg"
              alt="Agency Partner 4"
              width={140}
              height={48}
              className="h-full w-auto object-contain"
              priority
            />
          </div>

          <div className="relative h-12 w-full max-w-[140px] hidden md:block">
            <Image
              src="/agency-partner-logo.svg"
              alt="Agency Partner 5"
              width={140}
              height={48}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </div>

        <p className="text-center text-gray-500 mt-10 text-sm max-w-xl mx-auto">
          Join thousands of marketing professionals who trust our Facebook Ads solutions to scale their businesses
        </p>
      </div>
    </section>
  )
}
