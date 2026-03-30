'use client'

import { EyeIcon, StarIcon } from 'lucide-react'

import { useAnimeSearch } from '@/features/search-anime/api'
import {
  AnimePreviewCard,
  AnimePreviewCardSkeleton,
  Container,
  HomeLink,
  Typography,
} from '@/shared/ui'

export type SearchPageProps = {
  searchWord: string
}

export const SearchPage = ({ searchWord }: SearchPageProps) => {
  const trimmedWord = searchWord.trim()
  const { data, isLoading } = useAnimeSearch(trimmedWord, 24)

  const animeList = Array.isArray(data?.response) ? data.response : []

  return (
    <Container className={'my-10'}>
      <HomeLink className={'ml-0'} />
      <Typography variant={'title'} as={'h1'} className={'mb-2'}>
        Аниме по запросу "{trimmedWord}"
      </Typography>

      {!trimmedWord && (
        <Typography className={'text-muted-foreground'}>
          Введите минимум 2 символа в строке поиска
        </Typography>
      )}

      {trimmedWord && (
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
      )}

      {!isLoading && trimmedWord && animeList.length === 0 && (
        <Typography className={'mt-2 text-muted-foreground'}>
          По вашему запросу "{trimmedWord}" ничего не найдено
        </Typography>
      )}
    </Container>
  )
}
