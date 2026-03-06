'use client'

import { Search, XIcon } from 'lucide-react'
import { useRef, useState } from 'react'
import { useClickAway } from 'react-use'

import { useAnimeSearch } from '@/features/search-anime/api'
import { useDebounce } from '@/shared/lib'
import { Input } from '@/shared/ui'

import { SearchSuggestions } from './search-suggestions'

export const SearchAnime = () => {
  const [search, setSearch] = useState('')

  const [focused, setFocused] = useState(false)

  const debouncedSearch = useDebounce(search, 500)

  const { data, isLoading, isFetching, error } = useAnimeSearch(debouncedSearch)

  const ref = useRef(null)

  const handleFocusOn = () => {
    setFocused(true)
  }

  const handleItemClick = () => {
    setFocused(false)
  }

  useClickAway(ref, () => {
    setFocused(false)
  })

  const isCleared = search.length > 0

  const handleSearchClear = () => {
    setSearch('')
  }

  const searchedAnime = data?.response || []

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
        {isCleared && (
          <XIcon
            onClick={handleSearchClear}
            className={
              'absolute top-1/2 translate-y-[-50%] right-3 h-5 text-gray-400 hover:text-green-800 cursor-pointer transition-all'
            }
          />
        )}
      </div>

      <SearchSuggestions
        searchedAnime={searchedAnime}
        onItemClick={handleItemClick}
        focused={focused}
      />
    </>
  )
}
