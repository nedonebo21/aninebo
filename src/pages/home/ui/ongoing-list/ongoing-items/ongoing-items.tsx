import { HomeAnimeCard } from '@/pages/home/ui/home-anime-card'
import { Typography } from '@/shared/ui'

import type { AnimeOngoingsResponse } from '@/entities/anime'

type OngoingItemsProps = {
  ongoings: AnimeOngoingsResponse[]
}

export const OngoingItems = ({ ongoings }: OngoingItemsProps) => {
  return (
    <div className={'flex items-center justify-center gap-2'}>
      {ongoings.map(ongoing => (
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
