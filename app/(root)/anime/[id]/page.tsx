import { AnimePage } from '@/pages/anime'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params

  return <AnimePage animeId={resolvedParams.id} />
}
