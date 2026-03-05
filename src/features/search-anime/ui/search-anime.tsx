'use client'

import { Search } from 'lucide-react'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { useClickAway } from 'react-use'

import { useAnimeSearch } from '@/features/search-anime/api/use-anime-search'
import { useDebounce } from '@/shared/lib'
import { cn } from '@/shared/lib/utils'
import { Input } from '@/shared/ui'

export const SearchAnime = () => {
  const [search, setSearch] = useState('')

  const [focused, setFocused] = useState(false)

  const ref = useRef(null)

  const debouncedSearch = useDebounce(search, 500)

  const handleFocusOn = () => {
    setFocused(true)
  }

  const handleItemClick = () => {
    setFocused(false)
  }

  useClickAway(ref, () => {
    setFocused(false)
  })

  const { data: searchedAnime, isLoading, isFetching, error } = useAnimeSearch(debouncedSearch)

  const displayedAnime = searchedAnime?.slice(0, 8) ?? []

  return (
    <>
      {focused && <div className={'fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30'} />}
      <div
        ref={ref}
        className={'flex rounded-2xl flex-1 justify-between items-center relative h-11 z-30'}
      >
        <Search className={'absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400'} />
        <Input
          placeholder={'Поиск аниме...'}
          value={search}
          onFocus={handleFocusOn}
          onChange={e => setSearch(e.target.value)}
          className={'rounded-2xl outline-none w-full pl-11'}
        />
      </div>

      {displayedAnime.length ? (
        <div
          className={cn(
            'absolute w-[730px] left-1/3 rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
            focused && 'visible opacity-100 top-22 bg-secondary'
          )}
        >
          {displayedAnime.map(anime => (
            <Link
              key={anime.id}
              href={`/anime/${anime.id}`}
              className={'flex items-center gap-3 px-3 py-2 hover:bg-primary/10 cursor-pointer'}
              onClick={handleItemClick}
            >
              <div className={'flex items-center gap-2'}>
                <img
                  src={`https://anilibria.tv${anime.poster?.preview}`}
                  alt={anime.name.main}
                  className={'rounded-sm h-8'}
                />
                <span className={'font-medium'}>{anime.name.main}</span>
                <span className={'text-sm mt-[2px] text-muted-foreground'}>
                  {anime.year} • {anime.type.value}
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        debouncedSearch && <div>Ничего не найдено</div>
      )}
    </>
  )
}
