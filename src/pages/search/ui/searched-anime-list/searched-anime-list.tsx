'use client'

import { Typography } from '@/shared/ui'
import { SearchedAnimeItems } from './searched-anime-items'
import { useAnimeSearch } from '@/features/search-anime/api'

type SearchedAnimeListProps = {
  trimmedWord: string
}
export const SearchedAnimeList = ({ trimmedWord }: SearchedAnimeListProps) => {
  const { data, isLoading } = useAnimeSearch(trimmedWord, 24)

  const animeList = Array.isArray(data?.response) ? data.response : []
  return (
    <>
      <Typography variant={'title'} as={'h1'} className={'mb-2'}>
        Аниме по запросу "{trimmedWord}"
      </Typography>

      {!trimmedWord && (
        <Typography className={'text-muted-foreground'}>
          Введите минимум 2 символа в строке поиска
        </Typography>
      )}

      {trimmedWord && <SearchedAnimeItems isLoading={isLoading} animeList={animeList} />}

      {!isLoading && trimmedWord && animeList.length === 0 && (
        <Typography className={'mt-2 text-muted-foreground'}>
          По вашему запросу "{trimmedWord}" ничего не найдено
        </Typography>
      )}
    </>
  )
}
