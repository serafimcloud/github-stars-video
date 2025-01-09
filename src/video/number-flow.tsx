import { interpolate, useCurrentFrame } from 'remotion'

interface Props {
  value: number
  format?: Intl.NumberFormatOptions
  className?: string
}

export function NumberFlow({ value, format, className }: Props) {
  const frame = useCurrentFrame()

  // Анимируем значение в течение 30 кадров
  const animatedValue = interpolate(frame, [0, 30], [0, value], {
    extrapolateRight: 'clamp',
  })

  return (
    <span className={className}>
      {Math.round(animatedValue).toLocaleString('en-US', format)}
    </span>
  )
}
