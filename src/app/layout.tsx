import { GitHubStars } from '@/components/github-stars'
import { Icons } from '@/components/icons'
import { Providers } from '@/components/providers'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Link } from '@/components/ui/link'
import { env } from '@/lib/env'
import { Github } from 'lucide-react'
import type { Metadata } from 'next'
import PlausibleProvider from 'next-plausible'
import NextLink from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  title: 'GitHub Stars Video Generator',
  description:
    'Create beautiful animations showing the growth of stars on any GitHub repository. Perfect for social media posts, presentations, and documentation.',
  keywords: [
    'github',
    'stars',
    'animation',
    'video generator',
    'repository',
    'social media',
    'github stats',
    'star count',
    'visualization',
    'remotion',
    'next.js',
  ],
  authors: [
    { name: 'Sebastien Castiel', url: 'https://scastiel.dev' },
    { name: 'serafim', url: 'https://x.com/serafimcloud' },
  ],
  creator: 'serafim',
  publisher: 'serafim',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'GitHub Stars Video Generator',
    description:
      'Create beautiful animations showing the growth of stars on any GitHub repository',
    siteName: 'GitHub Stars Video Generator',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'GitHub Stars Video Generator Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@serafimcloud',
    site: '@serafimcloud',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'GitHub Stars Video Generator Preview',
      },
    ],
    title: 'GitHub Stars Video Generator',
    description:
      'Create beautiful animations showing the growth of stars on any GitHub repository',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <PlausibleProvider domain="github-stars-video" trackOutboundLinks />
      <body className="min-h-[100dvh] flex flex-col bg-background text-foreground">
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 items-center">
                <div className="flex items-center gap-2 mr-4">
                  <Github className="h-5 w-5" />
                  <span className="font-semibold">GitHub Stars Video</span>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                  <NextLink
                    href="https://github.com/serafimcloud/github-stars-video"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-full md:w-auto"
                    >
                      <Icons.gitHub className="h-4 w-4 mr-2" />
                      Star
                      <GitHubStars />
                    </Button>
                  </NextLink>
                  <ThemeToggle />
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                  <p className="text-center text-sm leading-loose md:text-left">
                    Originally created by{' '}
                    <Link href="https://scastiel.dev" underline>
                      Sebastien Castiel
                    </Link>
                    {' • '}
                    Enhanced by{' '}
                    <Link href="https://x.com/serafimcloud" underline>
                      serafim
                    </Link>
                  </p>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  Not endorsed or affiliated with GitHub.
                </p>
              </div>
            </footer>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
