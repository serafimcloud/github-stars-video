import { cn } from '@/lib/utils'
import NextLink from 'next/link'
import { ComponentPropsWithoutRef } from 'react'

export interface LinkProps extends ComponentPropsWithoutRef<typeof NextLink> {
  href: string
  underline?: boolean
}

export function Link({ className, underline, ...props }: LinkProps) {
  return (
    <NextLink
      className={cn(
        'text-primary hover:text-primary/80 transition-colors',
        underline && 'underline underline-offset-4',
        className,
      )}
      {...props}
    />
  )
}
