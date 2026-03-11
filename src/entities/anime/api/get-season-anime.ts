import { useQuery } from '@tanstack/react-query'

import { axiosInstance } from '@/shared/api'

import type { AnimeBySeasonResponse, AnimeSeasons } from '@/entities/anime/model/types'

type AnimeBySeasonOptions = {
  season: AnimeSeasons
  limit?: number
}

const getAnimeBySeason = async ({
  season,
  limit = 6,
}: AnimeBySeasonOptions): Promise<AnimeBySeasonResponse> => {
  const { data } = await axiosInstance.get<AnimeBySeasonResponse>('/anime', {
    params: {
      season,
      limit,
    },
  })

  return data
}

export function useAnimeBySeason(season: AnimeSeasons, limit: number = 6) {
  return useQuery<AnimeBySeasonResponse>({
    queryKey: ['anime', 'season'],
    queryFn: () => getAnimeBySeason({ season, limit }),
    staleTime: 1000 * 60 * 60,
  })
}
