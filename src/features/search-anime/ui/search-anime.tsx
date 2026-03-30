'use client'

import { useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { SearchSuggestions } from './search-suggestions'
import { useSearchData, useSearchState } from '@/features/search-anime/model'
import { SearchInput } from './search-input'

export const SearchAnime = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
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

  useEffect(() => {
    if (pathname !== '/search') {
      handleClear()
      return
    }

    const searchWordFromQuery = (searchParams?.get('word') ?? '').replaceAll('+', ' ').trim()

    if (!searchWordFromQuery) {
      handleClear()
      return
    }

    handleSearchChange(searchWordFromQuery)
  }, [pathname, searchParams, handleClear, handleSearchChange])

  const handleSubmit = () => {
    const searchValue = search.trim()

    if (searchValue.length < 2) {
      return
    }

    const params = new URLSearchParams()
    params.set('word', searchValue)

    handleBlur()
    router.push(`/search?${params.toString()}`)
  }

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
