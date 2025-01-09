'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useQuery } from '@tanstack/react-query'

interface GitHubResponse {
  stargazers_count: number
}

export function GitHubStars() {
  const { data: stars, isLoading } = useQuery({
    queryKey: ['github-stars'],
    queryFn: async () => {
      const res = await fetch(
        'https://api.github.com/repos/serafimcloud/github-stars-video',
      )
      const data = (await res.json()) as GitHubResponse
      return data.stargazers_count
    },
    staleTime: 1000 * 60 * 5,
    retry: 2,
  })

  return (
    <span className="relative ml-2 inline-flex h-full items-center justify-center rounded-full pl-2 text-sm font-semibold before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-border">
      {isLoading ? <Skeleton className="h-4 w-8" /> : stars}
    </span>
  )
}
