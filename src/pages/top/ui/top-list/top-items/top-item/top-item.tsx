import { EyeIcon, StarIcon } from 'lucide-react'

import { Anime } from '@/entities/anime'
import { AnimePreviewCard, Typography } from '@/shared/ui'

type CatalogItemProps = {
  anime: Anime
}

export const TopItem = ({ anime }: CatalogItemProps) => {
  const rating = anime.rating.average.toFixed(2)

  return (
    <AnimePreviewCard
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
      withTopOverlay
      topCategory={anime.top.category}
      topRating={rating}
      footer={
        <div className={'flex gap-2'}>
          <Typography as={'span'} className={'flex items-center gap-1 text-xs text-gray-400'}>
            <EyeIcon className={'h-4 w-4'} /> {anime.views}
          </Typography>
          <Typography as={'span'} className={'flex items-center gap-1 text-xs text-gray-400'}>
            <StarIcon className={'h-4 w-4'} /> {anime.rating.counters}
          </Typography>
        </div>
      }
    />
  )
}
