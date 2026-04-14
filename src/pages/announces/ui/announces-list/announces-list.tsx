'use client'

import { EyeIcon } from 'lucide-react'

import { useAnimeTop } from '@/entities/anime'
import { AnimePreviewCard, AnimePreviewCardSkeleton, Typography } from '@/shared/ui'

export const AnnouncesList = () => {
  const { data, isLoading } = useAnimeTop({ status: 'announce' })

  const anonsList = data?.response

  return (
    <>
      <Typography variant={'title'} as={'h1'} className={'mb-2'}>
        Анонсы аниме
      </Typography>

      <div className={'flex flex-wrap items-center gap-2'}>
        {isLoading
          ? Array.from({ length: 18 }).map((_, index) => (
              <AnimePreviewCardSkeleton key={index} isTop />
            ))
          : anonsList?.map(anime => (
              <AnimePreviewCard
                key={anime.anime_id}
                animeId={anime.anime_id}
                imageUrl={anime.poster.medium}
                imageAlt={anime.title}
                title={anime.title}
                subtitle={
                  <Typography
                    as={'span'}
                    variant={'bodyNormal'}
                    className={'flex gap-1 text-sm text-green-600'}
                  >
                    {anime.type.name}
                  </Typography>
                }
                footer={
                  <div className={'flex gap-2'}>
                    <Typography
                      as={'span'}
                      className={'flex items-center gap-1 text-xs text-gray-400'}
                    >
                      <EyeIcon className={'h-4 w-4'} /> {anime.views}
                    </Typography>
                  </div>
                }
              />
            ))}
      </div>
    </>
  )
}
