import { axiosInstance } from '@/shared/api'
import { AnimeResponse, AnimeVideoType } from '@/entities/anime/model/types'
import { useQuery } from '@tanstack/react-query'

type AnimeCatalogOptions = {
  types?: AnimeVideoType
  limit?: number
  sort?: string
}

const getAnimeTop = async ({ types = 'tv', sort = 'top', limit }: AnimeCatalogOptions) => {
  return (await axiosInstance.get<AnimeResponse>('/anime', { params: { types, limit, sort } })).data
}

export function useAnimeTop({ types, sort = 'top', limit = 100 }: AnimeCatalogOptions = {}) {
  return useQuery({
    queryKey: ['anime', 'top', types, limit, sort],
    queryFn: () => getAnimeTop({ types, limit, sort }),
    staleTime: 1000 * 60 * 60,
  })
}
