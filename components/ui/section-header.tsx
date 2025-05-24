import { Badge } from "@/components/ui/badge"

interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  className?: string
  badgeClassName?: string
  titleClassName?: string
  subtitleClassName?: string
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  className = "",
  badgeClassName = "",
  titleClassName = "",
  subtitleClassName = "",
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl mx-auto text-center mb-16 ${className}`}>
      {badge && (
        <Badge
          className={`bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 mb-4 border-0 shadow-md ${badgeClassName}`}
        >
          {badge}
        </Badge>
      )}
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 relative inline-block ${titleClassName}`}>
        <span className="relative z-10 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
          {title}
        </span>
        <div className="absolute -bottom-2 left-0 right-0 h-2.5 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full"></div>
      </h2>
      {subtitle && <p className={`text-lg text-gray-600 ${subtitleClassName}`}>{subtitle}</p>}
    </div>
  )
}
