import { AnimePreviewCard, AnimePreviewCardSkeleton, Typography } from '@/shared/ui'

import type { Anime } from '@/entities/anime/model/types'

type SeasonItemsProps = {
  anime: Anime[]
  isLoading: boolean
}

export const SeasonItems = ({ anime, isLoading }: SeasonItemsProps) => {
  return (
    <div className={'flex items-center justify-center gap-2'}>
      {isLoading
        ? Array.from({ length: 6 }).map((_, index) => <AnimePreviewCardSkeleton key={index} />)
        : anime.map(item => (
            <AnimePreviewCard
              key={item.anime_id}
              animeId={item.anime_id}
              imageUrl={item.poster.medium}
              imageAlt={item.title}
              title={item.title}
              subtitle={
                <Typography
                  as={'span'}
                  variant={'bodyNormal'}
                  className={'flex gap-1 text-sm text-green-600'}
                >
                  {item.type.name}
                </Typography>
              }
            />
          ))}
    </div>
  )
}
