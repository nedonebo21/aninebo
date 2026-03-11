import { useQuery } from '@tanstack/react-query'

import { axiosInstance } from '@/shared/api'

import type { AnimeById } from '@/entities/anime/model/types'

const getAnimeById = async (id: string): Promise<AnimeById> => {
  return (await axiosInstance.get<AnimeById>(`/anime/${id}`)).data
}

export function useAnimeById(id: string) {
  return useQuery<AnimeById>({
    queryKey: ['anime', 'by-id', id],
    queryFn: () => getAnimeById(id),
    staleTime: 1000 * 60 * 60,
  })
}
