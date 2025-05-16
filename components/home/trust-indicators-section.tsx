import Image from "next/image"

export default function TrustIndicatorsSection() {
  return (
    <section className="py-8 md:py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative">
        <h3 className="text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-sm uppercase tracking-wider font-bold">
          Trusted by leading marketing agencies worldwide
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 items-center justify-items-center">
          {/* Partner logos with colorful backgrounds */}
          <div className="relative h-16 w-full max-w-[160px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-3 shadow-sm border border-blue-100">
            <Image
              src="/agency-partner-logo.svg"
              alt="Agency Partner 1"
              width={140}
              height={48}
              className="h-full w-auto object-contain"
              priority
            />
          </div>

          <div className="relative h-16 w-full max-w-[160px] bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3 shadow-sm border border-purple-100">
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
          <div className="relative h-16 w-full max-w-[160px] bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-3 shadow-sm border border-green-100 hidden md:block">
            <Image
              src="/agency-partner-logo.svg"
              alt="Agency Partner 3"
              width={140}
              height={48}
              className="h-full w-auto object-contain"
              priority
            />
          </div>

          <div className="relative h-16 w-full max-w-[160px] bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-3 shadow-sm border border-orange-100 hidden md:block">
            <Image
              src="/agency-partner-logo.svg"
              alt="Agency Partner 4"
              width={140}
              height={48}
              className="h-full w-auto object-contain"
              priority
            />
          </div>

          <div className="relative h-16 w-full max-w-[160px] bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-3 shadow-sm border border-red-100 hidden md:block">
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

        <div className="text-center mt-12 relative">
          <div className="inline-block">
            <p className="text-gray-600 text-sm max-w-xl mx-auto relative z-10">
              Join{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                thousands of marketing professionals
              </span>{" "}
              who trust our Facebook Ads solutions to scale their businesses
            </p>
            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
