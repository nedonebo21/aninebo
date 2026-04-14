import { redirect } from 'next/navigation'

import { TopPage } from '@/pages/top'

import type { AnimeVideoType } from '@/entities/anime/model/types'

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
