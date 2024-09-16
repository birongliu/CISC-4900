import { cn } from '@/app/utils/functions'
import React, { ReactNode } from 'react'

export default function Button({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <button className={cn('bg-darkMaroon rounded-xl p-3 text-button-primary', className)}>{children}</button>
  )
}
