import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Zap,
  AlertTriangle,
  DollarSign,
  BluetoothOffIcon as HeadphonesOff,
  CheckCircle,
  ArrowRight,
  Facebook,
  Phone,
} from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Mobile-specific hero section
  if (isMobile) {
    return (
      <section className="py-10 relative overflow-hidden">
        {/* Colorful background elements */}
        {/* Mobile-specific hero section */}

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-md">
              Professional Facebook Ads Solutions
            </div>

            {/* Enhanced Facebook Logo for Mobile */}
            <div className="relative mb-8 mt-2">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 p-0.5 shadow-xl animate-pulse-slow">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
                  <div className="relative z-10 transform transition-transform animate-float">
                    <Facebook className="h-14 w-14 text-[#1877F2]" />
                  </div>
                </div>
              </div>

              {/* Orbiting checkmark */}
              <div className="absolute w-full h-full top-0 left-0 animate-orbit">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
                  <span className="animate-bounce">✓</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-2 -left-2 w-5 h-5 rounded-full bg-blue-300 opacity-70 animate-pulse"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-purple-300 opacity-70 animate-pulse-slow"></div>

              {/* Ripple effect */}
              <div className="absolute inset-0 w-28 h-28 rounded-full border-4 border-blue-400/30 animate-ripple"></div>
              <div className="absolute inset-0 w-28 h-28 rounded-full border-4 border-blue-400/20 animate-ripple-delay"></div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
              Your Shortcut to Stable{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                BM & VIA
              </span>{" "}
              Facebook Accounts
            </h1>

            <p className="text-base text-gray-600 mb-6 max-w-md mx-auto">
              <span className="text-red-500 font-semibold">Tired of ad bans?</span> Losing revenue from checkpoints?
              Getting nowhere with Facebook support? GoAds delivers verified accounts with 24/7 expert assistance.
            </p>

            {/* "Why advertisers choose GoAds" section for mobile */}
            <div className="w-full max-w-xs mb-8 bg-white rounded-lg border border-gray-200 p-4 shadow-md relative overflow-hidden">
              <div className="mb-3">
                <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-md shadow-sm">
                  Why advertisers choose GoAds
                </span>
              </div>

              <div className="flex flex-col gap-3 relative z-10">
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-1.5 rounded-full">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                  </div>
                  <p className="text-sm text-left text-gray-600">
                    <span className="font-semibold text-gray-900">No more unexpected account bans</span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-1.5 rounded-full">
                    <DollarSign className="h-4 w-4 text-orange-500" />
                  </div>
                  <p className="text-sm text-left text-gray-600">
                    <span className="font-semibold text-gray-900">Stop losing revenue</span> while waiting for new
                    accounts
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-1.5 rounded-full">
                    <HeadphonesOff className="h-4 w-4 text-purple-500" />
                  </div>
                  <p className="text-sm text-left text-gray-600">
                    <span className="font-semibold text-gray-900">Get expert support</span> when Facebook leaves you
                    stranded
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile buttons - simplified to two buttons */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs mb-8">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-4 rounded-md shadow-md">
                <Link href="#packages" className="flex items-center justify-center gap-2">
                  Get Account
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="bg-white hover:bg-green-50 text-gray-700 border-gray-300 hover:border-green-300 font-medium py-4 rounded-md"
              >
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-green-600" />
                  WhatsApp
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Desktop hero section - original two-column layout with repositioned Facebook logo
  return (
    <section className="py-10 md:py-16 relative overflow-hidden">
      {/* Colorful background elements */}

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1.5 rounded-full text-sm font-medium inline-block shadow-md">
                Professional Facebook Ads Solutions
              </div>

              {/* Enhanced Facebook Logo - Smaller version next to the title */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 p-0.5 shadow-xl animate-pulse-slow">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-80"></div>
                    <div className="absolute inset-0 bg-blue-100/30 rounded-full blur-md animate-pulse-slow"></div>
                    <div className="relative z-10 transform transition-transform animate-float">
                      <Facebook className="h-9 w-9 text-[#1877F2] drop-shadow-[0_0_8px_rgba(24,119,242,0.6)]" />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  <span className="animate-bounce">✓</span>
                </div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-blue-300 opacity-70 animate-pulse"></div>
                <div className="absolute top-1/2 -right-2 w-3 h-3 rounded-full bg-purple-300 opacity-70 animate-pulse-delay"></div>
                <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-blue-400/30 animate-ripple"></div>
                <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-blue-400/20 animate-ripple-delay"></div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Your Shortcut to Stable{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                BM & VIA
              </span>{" "}
              Facebook Accounts
            </h1>

            <p className="text-base md:text-lg text-gray-600">
              <span className="text-red-500 font-semibold">Tired of ad bans?</span> Losing revenue from checkpoints?
              Getting nowhere with Facebook support? GoAds delivers verified accounts with 24/7 expert assistance.
            </p>

            {/* "Why advertisers choose GoAds" section */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-md relative overflow-hidden">
              {/* Top border accent */}

              <div className="mb-3">
                <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-md shadow-sm">
                  Why advertisers choose GoAds
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 relative z-10">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="bg-red-100 p-2 rounded-full shadow-sm flex-shrink-0">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                  </div>
                  <span className="text-gray-700 text-sm">No more unexpected account bans</span>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="bg-orange-100 p-2 rounded-full shadow-sm flex-shrink-0">
                    <DollarSign className="h-4 w-4 text-orange-500" />
                  </div>
                  <span className="text-gray-700 text-sm">Stop losing revenue while waiting for new accounts</span>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="bg-purple-100 p-2 rounded-full shadow-sm flex-shrink-0">
                    <HeadphonesOff className="h-4 w-4 text-purple-500" />
                  </div>
                  <span className="text-gray-700 text-sm">Get expert support when Facebook leaves you stranded</span>
                </div>
              </div>
            </div>

            {/* SIMPLIFIED: Just two buttons in one line */}
            <div className="grid grid-cols-2 gap-4">
              {/* Main CTA button */}
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-5 rounded-md shadow-md transition-all hover:shadow-lg">
                <Link href="#packages" className="flex items-center justify-center gap-2">
                  Get Your Account
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              {/* WhatsApp support button */}
              <Button
                variant="outline"
                className="bg-white hover:bg-green-50 text-gray-700 border-gray-300 hover:border-green-300 font-medium py-5 rounded-md transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-green-600" />
                  WhatsApp Support
                </span>
              </Button>
            </div>
          </div>

          {/* Right column with illustrations and Facebook logo */}
          <div className="hidden md:block relative">
            {/* Problem illustration */}
            <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-white rounded-lg border border-gray-200 p-6 transform -rotate-6 shadow-xl z-10 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-50 to-orange-50 opacity-70"></div>
              <div className="absolute top-3 right-3 z-20">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded text-xs font-medium shadow-sm">
                  PROBLEM
                </span>
              </div>
              <div className="h-full w-full flex flex-col items-center justify-center relative z-10">
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center shadow-md">
                    <AlertTriangle className="h-8 w-8 text-red-500" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
                    !
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Account Restricted</h3>
                  <p className="text-sm text-gray-600">
                    Your ad account has been disabled for not complying with our Advertising Policies
                  </p>
                </div>
                <div className="mt-4 w-full">
                  <div className="w-full h-3 bg-white rounded-full overflow-hidden shadow-inner">
                    <div className="w-[15%] h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>Appeal Status</span>
                    <span className="font-medium">15%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution illustration */}
            <div className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-white rounded-lg border border-gray-200 p-6 transform rotate-6 shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-50 to-blue-50 opacity-70"></div>
              <div className="absolute top-3 right-3 z-20">
                <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 py-1 rounded text-xs font-medium shadow-sm">
                  SOLUTION
                </span>
              </div>
              <div className="h-full w-full flex flex-col items-center justify-center relative z-10">
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center shadow-md">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
                    ✓
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">GoAds Account</h3>
                  <p className="text-sm text-gray-600">Verified Business Manager with active ad campaigns</p>
                </div>
                <div className="mt-4 w-full">
                  <div className="w-full h-3 bg-white rounded-full overflow-hidden shadow-inner">
                    <div className="w-[98%] h-full bg-gradient-to-r from-green-500 to-teal-400 rounded-full"></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>Account Health</span>
                    <span className="font-medium">98%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center connecting element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div className="absolute bottom-28 right-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-lg shadow-lg whitespace-nowrap">
                <div className="text-sm font-medium">From stuck to scaling</div>
                <div className="text-lg font-bold">in 5 minutes</div>
              </div>
            </div>

            {/* Enhanced Facebook Logo - Bigger and positioned in the bottom-right corner */}
            <div className="absolute bottom-[-233px] right-[-80px] z-30 perspective">
              <div className="relative w-56 h-56 animate-float">
                {/* Main Facebook logo with 3D effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 shadow-2xl transform rotate-y-minus-20 animate-pulse-slow">
                  <div className="absolute inset-2 rounded-xl bg-white flex items-center justify-center">
                    <div className="relative">
                      {/* Facebook logo with enhanced glow effect */}
                      <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-2xl animate-pulse-slow"></div>
                      <Facebook className="h-36 w-36 text-[#1877F2] drop-shadow-[0_0_15px_rgba(24,119,242,0.8)]" />

                      {/* Inner glow */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-xl animate-pulse-slow"></div>

                      {/* Animated particles around the logo */}
                      <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-blue-300 animate-orbit-small"></div>
                      <div className="absolute bottom-0 left-0 w-5 h-5 rounded-full bg-purple-300 animate-orbit-small-reverse"></div>
                      <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-teal-300 animate-orbit-small-delay"></div>
                      <div className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-green-300 animate-orbit-small-delay-reverse"></div>
                    </div>
                  </div>
                </div>

                {/* Verification badge */}
                <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-teal-500 p-0.5 shadow-lg animate-bounce-slow">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <CheckCircle className="h-10 w-10 text-green-500" />
                  </div>
                </div>

                {/* Orbiting elements */}
                <div className="absolute w-full h-full animate-orbit">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-100 border border-blue-300 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-blue-500" />
                  </div>
                </div>

                <div className="absolute w-full h-full animate-orbit-reverse">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full bg-purple-100 border border-purple-300 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-purple-500" />
                  </div>
                </div>

                {/* Ripple effects */}
                <div className="absolute inset-0 w-56 h-56 rounded-full border-4 border-blue-400/30 animate-ripple"></div>
                <div className="absolute inset-0 w-56 h-56 rounded-full border-4 border-blue-400/20 animate-ripple-delay"></div>
                <div className="absolute inset-0 w-56 h-56 rounded-full border-4 border-blue-400/10 animate-ripple-delay-2"></div>

                {/* Extra decorative elements */}
                <div className="absolute -bottom-8 -left-8 w-10 h-10 rounded-full bg-purple-100 border border-purple-200 z-0 animate-pulse-slow"></div>
                <div className="absolute -top-10 -right-10 w-8 h-8 rounded-full bg-blue-100 border border-blue-200 z-0 animate-pulse"></div>
                <div className="absolute top-1/3 -left-12 w-6 h-6 rounded-full bg-green-100 border border-green-200 z-0 animate-pulse-delay"></div>
                <div className="absolute bottom-1/4 -right-8 w-5 h-5 rounded-full bg-teal-100 border border-teal-200 z-0 animate-pulse-delay-2"></div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-purple-100 border border-purple-200 z-0"></div>
            <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-blue-100 border border-blue-200 z-0"></div>
            <div className="absolute top-1/2 left-1/3 w-4 h-4 rounded-full bg-green-100 border border-green-200 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
