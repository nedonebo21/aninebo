import { SearchAnimeResponse } from '@/features/search-anime/model'
import { AnimePreviewCard, AnimePreviewCardSkeleton, Typography } from '@/shared/ui'
import { EyeIcon, StarIcon } from 'lucide-react'

type SearchedAnimeProps = {
  isLoading: boolean
  animeList: SearchAnimeResponse[]
}
export const SearchedAnimeItems = ({ animeList, isLoading }: SearchedAnimeProps) => {
  return (
    <div className={'flex flex-wrap items-center gap-2'}>
      {isLoading
        ? Array.from({ length: 18 }).map((_, index) => <AnimePreviewCardSkeleton key={index} />)
        : animeList.map(anime => (
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
                  <Typography
                    as={'span'}
                    className={'flex items-center gap-1 text-xs text-gray-400'}
                  >
                    <StarIcon className={'h-4 w-4'} /> {anime.rating.counters}
                  </Typography>
                </div>
              }
            />
          ))}
    </div>
  )
}
