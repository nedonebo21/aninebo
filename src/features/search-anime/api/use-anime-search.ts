import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { axiosInstance } from '@/shared/api'

import type { SearchAnime } from '@/features/search-anime/model/types'

type SearchParams = {
  q: string
  limit?: number
}

const searchAnime = async ({ q, limit = 6 }: SearchParams) => {
  const { data } = await axiosInstance.get('/search', {
    params: {
      q,
      limit,
    },
  })

  return data
}

export function useAnimeSearch(query: string, limit: number = 6) {
  const trimmedQuery = query.trim()

  return useQuery<SearchAnime>({
    queryKey: ['anime-search', trimmedQuery],
    queryFn: () => searchAnime({ q: trimmedQuery, limit }),
    enabled: trimmedQuery.length >= 2,
    staleTime: 1000 * 60 * 3,
    placeholderData: keepPreviousData,
  })
}
