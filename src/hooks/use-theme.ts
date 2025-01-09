'use client'

import { useTheme as useNextTheme } from 'next-themes'

export function useTheme() {
  const { theme, systemTheme } = useNextTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  return currentTheme === 'dark'
}
