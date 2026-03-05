import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { axiosInstance } from '@/shared/api'

import type { RecommendedReleasesResponse } from '@/entities/anime/model/types'

type SearchParams = {
  query: string
}

const searchAnime = async ({ query }: SearchParams) => {
  const { data } = await axiosInstance.get('/app/search/releases', {
    params: {
      query,
    },
  })

  return data
}

export function useAnimeSearch(query: string) {
  const trimmedQuery = query.trim()

  return useQuery<RecommendedReleasesResponse[]>({
    queryKey: ['anime-search', trimmedQuery],
    queryFn: () => searchAnime({ query: trimmedQuery }),
    enabled: trimmedQuery.length >= 2,
    staleTime: 1000 * 60 * 3,
    placeholderData: keepPreviousData,
  })
}
