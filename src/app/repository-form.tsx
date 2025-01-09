'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export function RepositoryForm({
  initialRepository,
}: {
  initialRepository: string
}) {
  const [repository, setRepository] = useState(initialRepository)
  const router = useRouter()

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    router.push(`/?repository=${repository}`)
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label htmlFor="repository" className="text-foreground">
          GitHub Repository
        </Label>
        <div className="flex gap-2">
          <Input
            id="repository"
            placeholder="owner/repository"
            value={repository}
            onChange={(e) => setRepository(e.target.value)}
            className="bg-background border-input focus:ring-primary"
          />
          <Button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Generate
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Enter a GitHub repository name to generate a beautiful animation of
          its stars history.
        </p>
      </div>
    </form>
  )
}
