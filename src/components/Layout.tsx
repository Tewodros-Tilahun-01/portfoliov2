import type { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-dvh bg-neutral-900 text-neutral-100">
      <div className="container mx-auto px-4 py-6">
        {children}
      </div>
    </div>
  )
}
