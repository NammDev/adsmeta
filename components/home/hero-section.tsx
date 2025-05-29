"use client"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"

// First, add the import for the PaymentMethodsCompact component at the top of the file, after the other imports
import PaymentMethodsCompact from "./payment-methods-compact"

// Import social media icons from lucide-react
import { Facebook, Instagram, Linkedin } from "lucide-react"

// Custom Discord icon component
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
)

// Custom Telegram icon component
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.49-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
)

// Custom WhatsApp icon component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

export default function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Mobile-specific hero section
  if (isMobile) {
    return (
      <section className="py-12 relative overflow-hidden">
        {/* Floating social media icons - mobile version */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[8%] left-10 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 rounded-full blur-lg opacity-20"></div>
              <WhatsAppIcon className="h-10 w-10 text-green-400/25 relative" />
            </div>
          </div>
          <div className="absolute top-20 right-10 animate-float-delay">
            <div className="relative">
              <div className="absolute inset-0 bg-pink-400 rounded-full blur-lg opacity-20"></div>
              <Instagram className="h-10 w-10 text-pink-400/25 relative" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center">
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

            <h1
              className="text-4xl font-extrabold text-gray-900 leading-tight mb-4 text-center mx-auto"
              style={{
                maxWidth: "22ch",
                marginTop: 0,
                marginBottom: "1rem",
                fontSize: "2.5rem",
                lineHeight: "3rem",
              }}
            >
              Buy{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Facebook Ads
              </span>{" "}
              Accounts and{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Business Managers
              </span>{" "}
              for Advertising!
            </h1>

            <p className="text-base text-gray-600 mb-8 max-w-md mx-auto">
              Your Marketing Partner for Success!
            </p>

            {/* Social media buttons - mobile responsive grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-12">
              <Button
                variant="ghost"
                className="flex items-center justify-center gap-2 px-3 py-3 rounded-lg hover:bg-indigo-50 hover:border-indigo-200 hover:shadow-md border border-transparent group transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-indigo-100 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
                <DiscordIcon className="h-5 w-5 text-indigo-600 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                <span className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 relative z-10">
                  Discord
                </span>
              </Button>
              <Button
                variant="ghost"
                className="flex items-center justify-center gap-2 px-3 py-3 rounded-lg hover:bg-blue-50 hover:border-blue-200 hover:shadow-md border border-transparent group transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
                <TelegramIcon className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                <span className="text-sm font-medium text-gray-900 group-hover:text-blue-500 transition-colors duration-300 relative z-10">
                  Telegram
                </span>
              </Button>
              <Button
                variant="ghost"
                className="flex items-center justify-center gap-2 px-3 py-3 rounded-lg hover:bg-green-50 hover:border-green-200 hover:shadow-md border border-transparent group transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-green-100 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
                <WhatsAppIcon className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                <span className="text-sm font-medium text-gray-900 group-hover:text-green-500 transition-colors duration-300 relative z-10">
                  WhatsApp
                </span>
              </Button>
              <Button
                variant="ghost"
                className="flex items-center justify-center gap-2 px-3 py-3 rounded-lg hover:bg-blue-50 hover:border-blue-200 hover:shadow-md border border-transparent group transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
                <Linkedin className="h-5 w-5 text-blue-700 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                <span className="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors duration-300 relative z-10">
                  LinkedIn
                </span>
              </Button>
            </div>

            {/* Payment methods block - mobile */}
            <div className="w-full overflow-hidden">
              <PaymentMethodsCompact />
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Desktop hero section - centered layout with illustrations
  return (
    <section className="py-16 pt:20 relative overflow-hidden">
      {/* Floating social media icons with blur/glow effects - strategically placed in corners */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top right - Telegram */}
        <div className="absolute top-[13%] right-[17%] animate-float">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-400 rounded-full blur-2xl opacity-25"></div>
            <TelegramIcon className="h-16 w-16 text-indigo-400/100 relative" />
          </div>
        </div>

        {/* Middle left - Facebook */}
        <div className="absolute top-[6%] left-[18%] animate-float-slow">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-25"></div>
            <Facebook className="h-14 w-14 text-blue-400/100 relative" />
          </div>
        </div>

        {/* Bottom left - Instagram */}
        <div className="absolute top-[52%] left-[22%] animate-float-delay-2">
          <div className="relative">
            <div className="absolute inset-0 bg-pink-400 rounded-full blur-2xl opacity-25"></div>
            <Instagram className="h-16 w-16 text-pink-400/30 relative" />
          </div>
        </div>

        {/* Bottom right - WhatsApp */}
        <div className="absolute top-[62%] right-[24%] animate-float-slow">
          <div className="relative">
            <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-25"></div>
            <WhatsAppIcon className="h-16 w-16 text-green-400/30 relative" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <h1
            className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6 text-center mx-auto"
            style={{
              maxWidth: "22ch",
              marginTop: 0,
              marginBottom: "1rem",
              fontSize: "4rem",
              lineHeight: "4.3rem",
            }}
          >
            Buy{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Facebook Ads
            </span>{" "}
            Accounts and{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Business Managers
            </span>{" "}
            for Advertising!
          </h1>

          <p className="text-xl text-gray-600 mb-40 max-w-2xl mx-auto">
            Your Marketing Partner for Success!
          </p>

          {/* Social media buttons - clean style */}
          <div className="flex justify-center items-center gap-8 mb-10">
            <Button
              variant="ghost"
              className="flex items-center justify-start gap-3 px-6 py-3 rounded-lg hover:bg-indigo-50 hover:border-indigo-300 hover:shadow-lg border-2 border-transparent group transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-indigo-100 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-300"></div>
              <DiscordIcon className="h-7 w-7 text-indigo-600 group-hover:scale-110 transition-transform duration-300 relative z-10" />
              <span className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 relative z-10">
                Discord
              </span>
            </Button>
            <Button
              variant="ghost"
              className="flex items-center justify-start gap-3 px-6 py-3 rounded-lg hover:bg-blue-50 hover:border-blue-300 hover:shadow-lg border-2 border-transparent group transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-300"></div>
              <TelegramIcon className="h-7 w-7 text-blue-500 group-hover:scale-110 transition-transform duration-300 relative z-10" />
              <span className="text-lg font-medium text-gray-900 group-hover:text-blue-500 transition-colors duration-300 relative z-10">
                Telegram
              </span>
            </Button>
            <Button
              variant="ghost"
              className="flex items-center justify-start gap-3 px-6 py-3 rounded-lg hover:bg-green-50 hover:border-green-300 hover:shadow-lg border-2 border-transparent group transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-green-100 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-300"></div>
              <WhatsAppIcon className="h-7 w-7 text-green-500 group-hover:scale-110 transition-transform duration-300 relative z-10" />
              <span className="text-lg font-medium text-gray-900 group-hover:text-green-500 transition-colors duration-300 relative z-10">
                WhatsApp
              </span>
            </Button>
            <Button
              variant="ghost"
              className="flex items-center justify-start gap-3 px-6 py-3 rounded-lg hover:bg-blue-50 hover:border-blue-300 hover:shadow-lg border-2 border-transparent group transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-300"></div>
              <Linkedin className="h-7 w-7 text-blue-700 group-hover:scale-110 transition-transform duration-300 relative z-10" />
              <span className="text-lg font-medium text-gray-900 group-hover:text-blue-700 transition-colors duration-300 relative z-10">
                LinkedIn
              </span>
            </Button>
          </div>

          {/* Enhanced Payment methods block */}
          <div className="flex justify-center my-0">
            <PaymentMethodsCompact />
          </div>
        </div>
      </div>
    </section>
  )
}
