import type { AnimeByIdResponse } from '@/entities/anime'

export const getAnimePoster = (anime?: AnimeByIdResponse) => {
  return anime?.poster.big ?? anime?.poster.medium
}

export const hasOtherTitles = (otherTitles?: string[]) => {
  return otherTitles && otherTitles.length > 0
}
