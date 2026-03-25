import { TopPage } from '@/pages/top'
import { AnimeVideoType } from '@/entities/anime/model/types'
import { redirect } from 'next/navigation'

const VALID_TYPES: AnimeVideoType[] = ['tv', 'movie', 'ona']

type TopPageProps = {
  params: Promise<{ type: string }>
}

export default async function TopTypePage({ params }: TopPageProps) {
  const { type } = await params

  if (!VALID_TYPES.includes(type as AnimeVideoType)) {
    redirect('/top/tv')
  }

  return <TopPage type={type as AnimeVideoType} />
}
