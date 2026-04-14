import { useAnimeById } from '@/entities/anime'

import type { AnimeByIdResponse } from '@/entities/anime'

type ReturnProps = {
  anime: AnimeByIdResponse
  isLoading: boolean
  hasData: boolean
}

export const useAnimeByIdData = (animeId: string): ReturnProps => {
  const { data } = useAnimeById(animeId)

  const anime = data?.response as AnimeByIdResponse

  return {
    anime,
    isLoading: !data,
    hasData: !!anime,
  }
}
