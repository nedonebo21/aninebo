'use client'

import { SearchSuggestions } from './search-suggestions'
import { useSearchState, useSearchData } from '@/features/search-anime/model'
import { SearchInput } from './search-input'

export const SearchAnime = () => {
  const {
    search,
    focused,
    ref,
    handleFocus,
    handleBlur,
    handleSearchChange,
    handleClear,
    isCleared,
  } = useSearchState()

  const { searchedAnime } = useSearchData(search)

  return (
    <>
      {focused && <div className={'fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30'} />}
      <div
        ref={ref}
        className={'flex rounded-2xl flex-1 justify-between items-center relative h-11 z-30'}
      >
        <SearchInput
          search={search}
          isCleared={isCleared}
          onFocus={handleFocus}
          onChange={handleSearchChange}
          onClear={handleClear}
        />
      </div>

      <SearchSuggestions searchedAnime={searchedAnime} onItemClick={handleBlur} focused={focused} />
    </>
  )
}
