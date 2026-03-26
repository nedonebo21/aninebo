import { HomeAnimeCard } from '@/pages/home/ui/home-anime-card'
import { Typography } from '@/shared/ui'

import type { Anime } from '@/entities/anime/model/types'

type SeasonItemsProps = {
  anime: Anime[]
}

export const SeasonItems = ({ anime }: SeasonItemsProps) => {
  return (
    <div className={'flex items-center justify-center gap-2'}>
      {anime.map(item => (
        <HomeAnimeCard
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
