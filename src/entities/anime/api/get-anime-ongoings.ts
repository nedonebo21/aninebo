import { useQuery } from '@tanstack/react-query'

import { axiosInstance } from '@/shared/api/instance'

import type { AnimeOngoings } from '@/entities/anime/model/types'

const getAnimeOngoings = async (): Promise<AnimeOngoings> => {
  const { data } = await axiosInstance.get<AnimeOngoings>('/anime/schedule')

  return data
}

export function useAnimeOngoings() {
  return useQuery({
    queryKey: ['anime', 'ongoings'],
    queryFn: () => getAnimeOngoings(),
    staleTime: 1000 * 60 * 60,
  })
}
