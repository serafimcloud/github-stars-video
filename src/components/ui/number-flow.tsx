'use client'

import { default as NumberFlowOriginal } from '@number-flow/react'
import type { ComponentProps } from 'react'

export function NumberFlow(props: ComponentProps<typeof NumberFlowOriginal>) {
  return <NumberFlowOriginal {...props} />
}
