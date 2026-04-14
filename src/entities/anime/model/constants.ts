import type { AnimeVideoType } from '@/entities/anime'

export const ANIME_TYPES: { label: string; value: AnimeVideoType }[] = [
  { label: 'Сериалы', value: 'tv' },
  { label: 'Фильмы', value: 'movie' },
  { label: 'ONA', value: 'ona' },
]
