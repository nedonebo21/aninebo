import { useQuery } from '@tanstack/react-query'

import { axiosInstance } from '@/shared/api'

import type { AnimeVideos } from '@/entities/anime/model/types'

const getAnimeVideos = async (id: string): Promise<AnimeVideos> => {
  return (await axiosInstance.get<AnimeVideos>(`/anime/${id}/videos`, { params: { id } })).data
}

export function useAnimeVideos(id: string) {
  return useQuery<AnimeVideos>({
    queryKey: ['anime-videos', id],
    queryFn: () => getAnimeVideos(id),
    staleTime: 1000 * 60 * 60,
  })
}
