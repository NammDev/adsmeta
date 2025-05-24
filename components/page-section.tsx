import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface PageSectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function PageSection({ children, className, id }: PageSectionProps) {
  return (
    <section id={id} className={cn('py-16', className)}>
      <div className='container px-4 md:px-6'>{children}</div>
    </section>
  )
}
