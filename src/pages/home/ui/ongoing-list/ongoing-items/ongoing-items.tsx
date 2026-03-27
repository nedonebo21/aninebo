import { HomeAnimeCard } from '@/pages/home/ui/home-anime-card'
import { HomeAnimeCardSkeleton, Typography } from '@/shared/ui'

import type { AnimeOngoingsResponse } from '@/entities/anime'

type OngoingItemsProps = {
  ongoings: AnimeOngoingsResponse[]
  isLoading: boolean
}

export const OngoingItems = ({ ongoings, isLoading }: OngoingItemsProps) => {
  return (
    <div className={'flex items-center justify-center gap-2'}>
      {isLoading
        ? Array.from({ length: 6 }).map((_, index) => <HomeAnimeCardSkeleton key={index} />)
        : ongoings.map(ongoing => (
            <HomeAnimeCard
              key={ongoing.anime_id}
              animeId={ongoing.anime_id}
              imageUrl={ongoing.poster.medium}
              imageAlt={ongoing.title}
              title={ongoing.title}
              subtitle={
                <Typography as={'span'} className={'flex items-center gap-1 text-sm'}>
                  Эпизоды:
                  <Typography
                    as={'span'}
                    variant={'bodyNormal'}
                    className={'text-sm text-green-600'}
                  >
                    {ongoing.episodes.aired}
                  </Typography>
                </Typography>
              }
            />
          ))}
    </div>
  )
}
