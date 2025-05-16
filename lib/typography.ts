import { cn } from '@/lib/utils'

// Heading styles with responsive sizing
export const headingStyles = {
  h1: 'text-fluid-h1 font-bold text-gray-900',
  h2: 'text-fluid-h2 font-bold text-gray-900',
  h3: 'text-fluid-h3 font-semibold text-gray-900',
  h4: 'text-fluid-h4 font-semibold text-gray-900',
  h5: 'text-fluid-h5 font-medium text-gray-900',
}

// Body text styles with responsive sizing
export const textStyles = {
  lead: 'text-fluid-body-lg text-gray-700',
  body: 'text-fluid-body text-gray-700',
  small: 'text-fluid-body-sm text-gray-600',
}

// Utility functions for applying typography styles
export function heading(variant: keyof typeof headingStyles, className?: string) {
  return cn(headingStyles[variant], className)
}

export function text(variant: keyof typeof textStyles, className?: string) {
  return cn(textStyles[variant], className)
}

// Responsive spacing for typography
export const textSpacing = {
  section: 'space-y-6 md:space-y-8',
  paragraph: 'space-y-4 md:space-y-6',
}
