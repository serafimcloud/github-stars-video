import { CompositionPlayer } from '@/app/composition-player'
import { RepositoryForm } from '@/app/repository-form'
import { ResultCard } from '@/app/result-card'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Loader2, Video } from 'lucide-react'
import Image from 'next/image'
import { Suspense } from 'react'
import { getGithubStarsInfo } from '../lib/github-stars-info'

export default async function Home({
  searchParams,
}: {
  searchParams: { repository?: string }
}) {
  const repository = searchParams.repository ?? 'rorkai/21st'

  return (
    <main className="container flex flex-col gap-8 justify-center items-center py-8">
      <RepositoryForm initialRepository={repository} />
      <Suspense
        key={repository}
        fallback={
          <ResultCard>
            <div className="w-full h-full flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <div>Loading…</div>
            </div>
          </ResultCard>
        }
      >
        <div className="flex flex-col items-center gap-6 w-full max-w-[1280px]">
          <RepositoryResult repository={repository} />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Video className="w-4 h-4" />
            <span>
              To save this animation, simply record your screen while it plays
            </span>
          </div>
        </div>
      </Suspense>
    </main>
  )
}

async function RepositoryResult({ repository }: { repository: string }) {
  const inputProps = await getGithubStarsInfo(repository)

  return (
    <>
      {inputProps === null ? (
        <ResultCard className="relative">
          <CardHeader>
            <CardTitle>Error</CardTitle>
            <CardDescription>Repository not found</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              It looks like the repository you entered (
              <strong>{repository}</strong>) does not exist.
            </p>
            <Image
              src="/lost.gif"
              alt=""
              width={198}
              height={187}
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
            />
          </CardContent>
        </ResultCard>
      ) : (
        <ResultCard inputProps={inputProps}>
          <CompositionPlayer inputProps={inputProps} />
        </ResultCard>
      )}
    </>
  )
}
