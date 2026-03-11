import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { useAnimeBySeason } from '@/entities/anime'
import { getCurrentSeason } from '@/shared/lib'
import { Typography } from '@/shared/ui'

import { SeasonItems } from './season-items'

const seasonNames: Record<string, string> = {
  winter: 'зимнего',
  spring: 'весеннего',
  summer: 'летнего',
  autumn: 'осеннего',
}

export const SeasonList = () => {
  const { data } = useAnimeBySeason({ season: getCurrentSeason() })

  const anime = data?.response ?? []

  const currentSeasonName = seasonNames[getCurrentSeason()]

  return (
    <div>
      <Link
        href={'/anime/winter'}
        className={
          'inline-flex items-center gap-1 text-base hover:text-green-600 mb-2 ml-2 transition-all'
        }
      >
        <Typography as={'span'}>Аниме {currentSeasonName} сезона</Typography>
        <ChevronRight height={14} width={14} />
      </Link>
      <SeasonItems anime={anime} />
    </div>
  )
}
