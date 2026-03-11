import Link from 'next/link'

import { truncate } from '@/shared/lib'
import { Typography } from '@/shared/ui'

import type { Anime } from '@/entities/anime/model/types'

type SeasonItemProps = {
  anime: Anime
}
export const SeasonItem = ({ anime }: SeasonItemProps) => {
  return (
    <div
      className={
        'flex-shrink-0 w-[190px] rounded-md shadow-md overflow-hidden hover:shadow-lg bg-secondary hover:bg-gray-800 transition-all'
      }
    >
      <Link href={`/anime/${anime.anime_id}`}>
        <div>
          <img className={'w-full h-[240px]'} src={anime.poster.medium} alt={'releaseLogo'} />
        </div>
        <div className={'flex flex-col p-1'}>
          <Typography as={'span'} variant={'bodyBold'} className={'text-sm'}>
            {truncate(anime.title)}
          </Typography>
          <Typography
            as={'span'}
            variant={'bodyNormal'}
            className={'text-sm text-green-600 flex gap-1'}
          >
            {anime.type.name}
          </Typography>
        </div>
      </Link>
    </div>
  )
}
