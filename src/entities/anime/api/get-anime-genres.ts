import { useQuery } from '@tanstack/react-query'

import { axiosInstance } from '@/shared/api'

import type { GenresResponse } from '@/entities/anime/model/types'

const getAnimeGenres = async (): Promise<GenresResponse[]> => {
  const { data } = await axiosInstance.get<GenresResponse[]>('/anime/genres')

  return data
}

export function useAnimeGenres() {
  return useQuery({
    queryKey: ['anime', 'genres'],
    queryFn: getAnimeGenres,
    staleTime: 1000 * 60 * 60,
  })
}
