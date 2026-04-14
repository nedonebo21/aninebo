import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { useSearchData } from './use-search-data'
import { useSearchState } from './use-search-state'

export const useSearchAnime = () => {
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

  return {
    search,
    focused,
    ref,
    isCleared,
    searchedAnime,
    handleFocus,
    handleBlur,
    handleSearchChange,
    handleClear,
    handleSubmit,
  }
}
