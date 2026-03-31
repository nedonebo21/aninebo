import { axiosInstance } from '@/shared/api'
import { AnimeResponse, AnimeVideoType } from '@/entities/anime/model/types'
import { useQuery } from '@tanstack/react-query'

type AnimeCatalogOptions = {
  types?: AnimeVideoType
  status?: 'announce'
  limit?: number
  sort?: string
}

const getAnimeTop = async ({ types, status, sort = 'top', limit }: AnimeCatalogOptions) => {
  return (
    await axiosInstance.get<AnimeResponse>('/anime', {
      params: { types, status, limit, sort },
    })
  ).data
}

export function useAnimeTop({ types, status, sort = 'top', limit = 100 }: AnimeCatalogOptions = {}) {
  return useQuery({
    queryKey: ['anime', 'top', types, status, limit, sort],
    queryFn: () => getAnimeTop({ types, status, limit, sort }),
    staleTime: 1000 * 60 * 60,
  })
}
