'use client'

import { useAnimeSearch } from '@/features/search-anime/api'
import { Typography } from '@/shared/ui'

import { SearchedAnimeItems } from './searched-anime-items'

type SearchedAnimeListProps = {
  trimmedWord: string
}
export const SearchedAnimeList = ({ trimmedWord }: SearchedAnimeListProps) => {
  const { data, isLoading } = useAnimeSearch(trimmedWord, 24)

  const animeList = Array.isArray(data?.response) ? data.response : []

  return (
    <>
      <Typography variant={'title'} as={'h1'} className={'mb-2'}>
        РђРЅРёРјРµ РїРѕ Р·Р°РїСЂРѕСЃСѓ {`"${trimmedWord}"`}
      </Typography>

      {trimmedWord && <SearchedAnimeItems isLoading={isLoading} animeList={animeList} />}

      {!isLoading && trimmedWord && animeList.length === 0 && (
        <Typography className={'mt-2 text-muted-foreground'}>
          РџРѕ РІР°С€РµРјСѓ Р·Р°РїСЂРѕСЃСѓ {`"${trimmedWord}"`} РЅРёС‡РµРіРѕ РЅРµ РЅР°Р№РґРµРЅРѕ
        </Typography>
      )}
    </>
  )
}
