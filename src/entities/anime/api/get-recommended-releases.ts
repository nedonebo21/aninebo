import { useQuery } from '@tanstack/react-query'

import { axiosInstance } from '@/shared/api/instance'

import type { RecommendedReleasesResponse } from '@/entities/anime/model/types'

type GetRecommendedOptions = {
  limit?: number
}

const getRecommendedReleases = async ({
  limit = 6,
}: GetRecommendedOptions): Promise<RecommendedReleasesResponse[]> => {
  const { data } = await axiosInstance.get<RecommendedReleasesResponse[]>(
    '/anime/releases/recommended',
    {
      params: {
        limit,
      },
    }
  )

  return data
}

export function useRecommendedReleases(limit = 6) {
  return useQuery({
    queryKey: ['anime', limit],
    queryFn: () => getRecommendedReleases({ limit }),
    staleTime: 1000 * 60 * 60,
  })
}
