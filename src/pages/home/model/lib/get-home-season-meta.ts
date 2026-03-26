import { getCurrentSeason } from '@/shared/lib'

const seasonNames: Record<ReturnType<typeof getCurrentSeason>, string> = {
  winter: 'зимнего',
  spring: 'весеннего',
  summer: 'летнего',
  autumn: 'осеннего',
}

export const getHomeSeasonMeta = () => {
  const season = getCurrentSeason()

  return {
    season,
    href: `/anime/${season}`,
    title: `Аниме ${seasonNames[season]} сезона`,
  }
}
