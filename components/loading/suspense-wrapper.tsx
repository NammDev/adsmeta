'use client'

import { Suspense, type ReactNode } from 'react'
import { LoadingSpinner } from '@/components/loading/loading-spinner'

interface SuspenseWrapperProps {
  children: ReactNode
  fallback?: ReactNode
}

export function SuspenseWrapper({ children, fallback }: SuspenseWrapperProps) {
  const defaultFallback = (
    <div className='flex justify-center items-center py-12'>
      <LoadingSpinner size={36} />
    </div>
  )

  return <Suspense fallback={fallback || defaultFallback}>{children}</Suspense>
}
