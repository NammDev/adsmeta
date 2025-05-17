import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { heading, text, headingStyles, textStyles } from "@/components/typography"

interface TypographyProps {
  children: ReactNode
  className?: string
}

// Heading components
export function H1({ children, className }: TypographyProps) {
  return <h1 className={heading("h1", className)}>{children}</h1>
}

export function H2({ children, className }: TypographyProps) {
  return <h2 className={heading("h2", className)}>{children}</h2>
}

export function H3({ children, className }: TypographyProps) {
  return <h3 className={heading("h3", className)}>{children}</h3>
}

export function H4({ children, className }: TypographyProps) {
  return <h4 className={heading("h4", className)}>{children}</h4>
}

export function H5({ children, className }: TypographyProps) {
  return <h5 className={heading("h5", className)}>{children}</h5>
}

// Text components
export function Lead({ children, className }: TypographyProps) {
  return <p className={text("lead", className)}>{children}</p>
}

export function Body({ children, className }: TypographyProps) {
  return <p className={text("body", className)}>{children}</p>
}

export function Small({ children, className }: TypographyProps) {
  return <p className={text("small", className)}>{children}</p>
}

// Muted text variant
export function Muted({ children, className }: TypographyProps) {
  return <p className={cn("text-fluid-body-sm text-gray-500", className)}>{children}</p>
}

// Inline text formatting
export function InlineCode({ children, className }: TypographyProps) {
  return <code className={cn("rounded bg-gray-100 px-1 py-0.5 font-mono text-sm", className)}>{children}</code>
}

// For reference, these are the available typography styles
export const typographyStyles = {
  h1: headingStyles.h1,
  h2: headingStyles.h2,
  h3: headingStyles.h3,
  h4: headingStyles.h4,
  h5: headingStyles.h5,
  lead: textStyles.lead,
  body: textStyles.body,
  small: textStyles.small,
  muted: "text-fluid-body-sm text-gray-500",
  code: "rounded bg-gray-100 px-1 py-0.5 font-mono text-sm",
}
