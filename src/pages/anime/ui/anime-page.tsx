'use client'

import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { useAnimeById, useAnimeVideos } from '@/entities/anime'
import { AnimeActions } from '@/pages/anime/ui/anime-actions/anime-actions'
import { AnimeHeader } from '@/pages/anime/ui/anime-header'
import { AnimeInfo } from '@/pages/anime/ui/anime-info/anime-info'
import { Card, Container } from '@/shared/ui'

type AnimePageProps = {
  animeId: string
}

export const AnimePage = ({ animeId }: AnimePageProps) => {
  const { data } = useAnimeById(animeId)

  const { data: videoData } = useAnimeVideos(animeId)

  const anime = data?.response

  const video = videoData?.response

  return (
    <Container className={'mt-10'}>
      <Link
        className={
          'inline-flex items-center gap-1 text-base hover:text-green-600 mb-2 ml-2 transition-all'
        }
        href={'/'}
      >
        На главную <ChevronRight width={14} height={14} />
      </Link>
      <Card className={'p-5'}>
        <AnimeHeader views={anime?.views} title={anime?.title} otherTitles={anime?.other_titles} />
        <div className={'flex justify-between gap-4'}>
          <div className={'min-w-[300px]'}>
            <img
              className={'w-[300px] h-[500px] rounded-md mb-2'}
              src={anime?.poster.big ?? anime?.poster.medium}
              alt={'poster'}
            />
            <AnimeActions />
          </div>
          <AnimeInfo anime={anime} />
        </div>
        <div className={'flex justify-center mt-5'}>
          <iframe className={'w-[1000px] h-[554px]'} src={video?.[0].iframe_url} />
        </div>
      </Card>
    </Container>
  )
}
