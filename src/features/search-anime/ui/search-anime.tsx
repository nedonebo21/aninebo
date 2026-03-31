'use client'

import { SearchSuggestions } from './search-suggestions'
import { useSearchAnime } from '@/features/search-anime/model'
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
    searchedAnime,
    handleSubmit,
  } = useSearchAnime()

  return (
    <>
      {focused && <div className={'fixed top-0 left-0 right-0 bottom-0 z-30 bg-black/50'} />}
      <form
        ref={ref}
        onSubmit={event => {
          event.preventDefault()
          handleSubmit()
        }}
        className={'relative z-30 flex h-11 flex-1 items-center justify-between rounded-2xl'}
      >
        <SearchInput
          search={search}
          isCleared={isCleared}
          onFocus={handleFocus}
          onChange={handleSearchChange}
          onClear={handleClear}
        />
      </form>

      <SearchSuggestions searchedAnime={searchedAnime} onItemClick={handleBlur} focused={focused} />
    </>
  )
}
