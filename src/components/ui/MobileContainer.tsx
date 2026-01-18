import { ReactNode } from 'react'

interface MobileContainerProps {
  children: ReactNode
}

export function MobileContainer({ children }: MobileContainerProps) {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Mobile: full width / Desktop: centered mobile viewport */}
      <div className="mx-auto max-w-[430px] min-h-screen relative">
        {/* Desktop border effect */}
        <div className="hidden md:block fixed inset-0 bg-dark-900 z-0" />
        <div className="hidden md:block fixed top-0 left-1/2 -translate-x-1/2 w-[430px] h-full border-x border-dark-700/50 z-0" />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  )
}
