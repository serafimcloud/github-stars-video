import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Props } from '@/video/schema'
import { ReactNode } from 'react'

export function ResultCard({
  children,
  className,
  inputProps,
}: {
  children?: ReactNode
  className?: string
  inputProps?: Partial<Props>
}) {
  return (
    <div className="w-full max-w-[640px] aspect-video">
      <Card
        className={cn(
          className,
          'w-full h-full overflow-hidden bg-card text-card-foreground rounded-[0.5rem] border-0 shadow-none',
        )}
      >
        {children}
      </Card>
    </div>
  )
}
