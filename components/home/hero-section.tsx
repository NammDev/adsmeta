"use client"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"

// First, add the import for the PaymentMethodsCompact component at the top of the file, after the other imports
import PaymentMethodsCompact from "./payment-methods-compact"

// Import social media icons from lucide-react
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

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

// Custom Messenger icon component
const MessengerIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.301 2.246.464 3.443.464c6.627 0 12-4.974 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26l-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z" />
  </svg>
)

// Payment method icons
const StripeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409c0-.831.683-1.305 1.901-1.305c2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0C9.667 0 7.589.654 6.104 1.872C4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219c2.585.92 3.445 1.574 3.445 2.583c0 .98-.84 1.545-2.354 1.545c-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813c1.664-1.305 2.525-3.236 2.525-5.732c0-4.128-2.524-5.851-6.591-7.305z" />
  </svg>
)

const PayPalIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81c1.01 1.15 1.304 2.42 1.012 4.287c-.023.143-.047.288-.077.437c-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254c-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788l.038-.242l.733-4.655l.047-.301a.92.92 0 0 1 .91-.788h.58c3.76 0 6.705-1.528 7.565-5.946c.36-1.847.174-3.388-.777-4.471z" />
  </svg>
)

const VisaIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.112 8.262L5.97 15.758l-.89-4.628c-.132-.683-.553-.89-1.06-.916H.062L0 9.887c.827.178 1.704.431 2.478.759c.476.202.612.377.77.865l2.52 9.661h2.473l4.5-11.11zm3.757 11.11h2.329l1.459-11.11h-2.329zm7.159-11.115l-2.329.004l-2.317 11.11h2.211l.36-1.92h2.727l.203 1.92h2.023l-1.731-11.11c-.162-.995-.626-1.11-1.147-1.11zm-1.303 6.85l.805-4.539l.524 4.54zm7.354-6.11c-.57-.038-1.353.03-2.077.312c-.527.204-.521.473-.806 1.074l-2.734 9.36h2.48l.402-1.463c.189-.682.488-.962.917-1.005c.163-.017.302-.024.415-.024c.68 0 .987.248.987.827c0 .418-.23.849-.768 1.015c-.577.177-1.648.264-2.875.264c-1.529 0-2.666-.417-2.666-1.903c0-.498.037-1.084.164-1.762l.316-1.412h2.47l-.255 1.242c-.059.318-.08.584-.08.802c0 .54.351.912 1.202.912c.728 0 1.145-.178 1.145-.67c0-.342-.233-.472-.722-.472c-.383 0-.774.024-1.152.024c-1.159 0-1.871-.427-1.871-1.279c0-.255.04-.553.132-.907l.44-1.639c.124-.442.26-.758.418-.979c.535-.743 1.433-1.043 2.784-1.043c1.705 0 2.812.41 2.812 1.606c0 .397-.058.849-.191 1.347z" />
  </svg>
)

const MastercardIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.343 18.031c.058.049.12.098.181.146c-1.177.783-2.59 1.238-4.107 1.238C3.32 19.416 0 16.096 0 12c0-4.095 3.32-7.416 7.416-7.416c1.518 0 2.931.456 4.105 1.238c-.06.051-.12.098-.165.15C9.6 7.489 8.595 9.688 8.595 12c0 2.311 1.001 4.51 2.748 6.031zm5.241-13.447c-1.52 0-2.931.456-4.105 1.238c.06.051.12.098.165.15C14.4 7.489 15.405 9.688 15.405 12c0 2.31-1.001 4.507-2.748 6.031c-.058.049-.12.098-.181.146c1.177.783 2.588 1.238 4.107 1.238c4.094 0 7.416-3.32 7.416-7.416c0-4.095-3.322-7.416-7.416-7.416zM12 7.174c-.931 0-1.794.315-2.485.851c-.698.54-1.254 1.31-1.594 2.225c-.318.855-.479 1.766-.479 2.685c0 .919.164 1.829.479 2.684c.339.915.896 1.686 1.594 2.225c.689.536 1.554.851 2.485.851c.93 0 1.793-.315 2.484-.851c.697-.54 1.254-1.31 1.594-2.225c.318-.855.48-1.765.48-2.684c0-.919-.165-1.83-.48-2.685c-.339-.915-.896-1.685-1.594-2.225c-.69-.536-1.554-.851-2.484-.851z" />
  </svg>
)

const BitcoinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105C1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153l-1.315-.33l-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127l-1.32-.33l-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45l-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314c.015.02-.96-.24-.96-.24l-.66 1.51l1.71.426l.93.242l-.54 2.19l1.32.327l.54-2.17c.36.1.705.19 1.05.273l-.51 2.154l1.32.33l.545-2.19c2.24.427 3.93.257 4.64-1.774c.57-1.637-.03-2.58-1.217-3.196c.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z" />
  </svg>
)

const WiseIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.37 24h6.14l3.67-8.37h5.82l-3.67 8.37h6.14L30.34 15.63H24.52l2.76-6.3h-6.14l-2.76 6.3h-5.82l2.76-6.3H9.18L6.42 15.63H.6L0 24h8.37zm0 0" />
  </svg>
)

const IbanIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
    <path d="M7 15h2" />
    <path d="M13 15h4" />
  </svg>
)

export default function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Mobile-specific hero section
  if (isMobile) {
    return (
      <section className="py-12 relative overflow-hidden">
        {/* Colorful background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-purple-50 opacity-70"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_25%),radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.1),transparent_25%)]"></div>

        {/* Floating social media icons - mobile version */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-5 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-lg opacity-20"></div>
              <Facebook className="h-10 w-10 text-blue-400/25 relative" />
            </div>
          </div>
          <div className="absolute top-20 right-10 animate-float-delay">
            <div className="relative">
              <div className="absolute inset-0 bg-pink-400 rounded-full blur-lg opacity-20"></div>
              <Instagram className="h-10 w-10 text-pink-400/25 relative" />
            </div>
          </div>
          <div className="absolute bottom-40 left-10 animate-float-slow">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-300 rounded-full blur-lg opacity-20"></div>
              <TelegramIcon className="h-10 w-10 text-blue-300/25 relative" />
            </div>
          </div>
          <div className="absolute bottom-20 right-5 animate-float-delay-2">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 rounded-full blur-lg opacity-20"></div>
              <WhatsAppIcon className="h-10 w-10 text-green-400/25 relative" />
            </div>
          </div>
        </div>

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

            {/* Mobile buttons - main CTAs */}
            <div className="mb-6"></div>

            {/* Social media buttons - mobile clean style */}
            <div className="flex flex-col space-y-4 w-full max-w-xs mb-12">
              <Button
                variant="ghost"
                className="flex items-center justify-start gap-3 hover:bg-transparent group transition-all duration-300"
              >
                <DiscordIcon className="h-6 w-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  Discord
                </span>
              </Button>
              <Button
                variant="ghost"
                className="flex items-center justify-start gap-3 hover:bg-transparent group transition-all duration-300"
              >
                <TelegramIcon className="h-6 w-6 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-lg font-medium text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                  Telegram
                </span>
              </Button>
              <Button
                variant="ghost"
                className="flex items-center justify-start gap-3 hover:bg-transparent group transition-all duration-300"
              >
                <WhatsAppIcon className="h-6 w-6 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-lg font-medium text-gray-900 group-hover:text-green-500 transition-colors duration-300">
                  WhatsApp
                </span>
              </Button>
              <Button
                variant="ghost"
                className="flex items-center justify-start gap-3 hover:bg-transparent group transition-all duration-300"
              >
                <Linkedin className="h-6 w-6 text-blue-700 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-lg font-medium text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
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
    <section className="py-16 relative overflow-hidden">
      {/* Floating social media icons with blur/glow effects - strategically placed in corners */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left - Discord */}
        <div className="absolute top-10 left-10 animate-float">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-400 rounded-full blur-2xl opacity-25"></div>
            <DiscordIcon className="h-16 w-16 text-indigo-400/30 relative" />
          </div>
        </div>

        {/* Top right - Telegram */}
        <div className="absolute top-10 right-10 animate-float-delay">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-300 rounded-full blur-2xl opacity-25"></div>
            <TelegramIcon className="h-18 w-18 text-blue-300/30 relative" />
          </div>
        </div>

        {/* Middle left - Facebook */}
        <div className="absolute top-1/3 left-20 animate-float-slow">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-25"></div>
            <Facebook className="h-14 w-14 text-blue-400/30 relative" />
          </div>
        </div>

        {/* Middle right - Messenger */}
        <div className="absolute top-1/3 right-20 animate-float">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-25"></div>
            <MessengerIcon className="h-14 w-14 text-blue-500/30 relative" />
          </div>
        </div>

        {/* Bottom left - Instagram */}
        <div className="absolute bottom-32 left-10 animate-float-delay-2">
          <div className="relative">
            <div className="absolute inset-0 bg-pink-400 rounded-full blur-2xl opacity-25"></div>
            <Instagram className="h-16 w-16 text-pink-400/30 relative" />
          </div>
        </div>

        {/* Bottom right - WhatsApp */}
        <div className="absolute bottom-32 right-10 animate-float-slow">
          <div className="relative">
            <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-25"></div>
            <WhatsAppIcon className="h-16 w-16 text-green-400/30 relative" />
          </div>
        </div>

        {/* Bottom middle left - LinkedIn */}
        <div className="absolute bottom-10 left-1/3 animate-float">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-25"></div>
            <Linkedin className="h-14 w-14 text-blue-500/30 relative" />
          </div>
        </div>

        {/* Bottom middle right - Twitter */}
        <div className="absolute bottom-10 right-1/3 animate-float-delay">
          <div className="relative">
            <div className="absolute inset-0 bg-sky-400 rounded-full blur-2xl opacity-25"></div>
            <Twitter className="h-14 w-14 text-sky-400/30 relative" />
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

          <p className="text-xl text-gray-600 mb-24 max-w-2xl mx-auto">
            Your Marketing Partner for Success!
          </p>

          {/* Main CTA buttons section */}
          <div className="mb-8"></div>

          {/* Social media buttons - clean style */}
          <div className="flex justify-center items-center gap-12 mb-8">
            <Button
              variant="ghost"
              className="flex items-center justify-start gap-3 hover:bg-transparent group transition-all duration-300"
            >
              <DiscordIcon className="h-7 w-7 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                Discord
              </span>
            </Button>
            <Button
              variant="ghost"
              className="flex items-center justify-start gap-3 hover:bg-transparent group transition-all duration-300"
            >
              <TelegramIcon className="h-7 w-7 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-medium text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                Telegram
              </span>
            </Button>
            <Button
              variant="ghost"
              className="flex items-center justify-start gap-3 hover:bg-transparent group transition-all duration-300"
            >
              <WhatsAppIcon className="h-7 w-7 text-green-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-medium text-gray-900 group-hover:text-green-500 transition-colors duration-300">
                WhatsApp
              </span>
            </Button>
            <Button
              variant="ghost"
              className="flex items-center justify-start gap-3 hover:bg-transparent group transition-all duration-300"
            >
              <Linkedin className="h-7 w-7 text-blue-700 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-medium text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                LinkedIn
              </span>
            </Button>
          </div>

          {/* Enhanced Payment methods block */}
          <div className="flex justify-center mb-16 mt-8">
            <PaymentMethodsCompact />
          </div>
        </div>
      </div>
    </section>
  )
}
