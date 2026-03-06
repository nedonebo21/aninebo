import Link from 'next/link'

import { truncate } from '@/shared/lib'

import type { AnimeOngoingsResponse } from '@/entities/anime'

type OngoingItemProps = {
  ongoing: AnimeOngoingsResponse
}
export const OngoingItem = ({ ongoing }: OngoingItemProps) => {
  return (
    <div
      className={
        'flex-shrink-0 w-[190px] rounded-md shadow-md overflow-hidden hover:shadow-lg bg-secondary hover:bg-gray-800 transition-all'
      }
    >
      <Link href={`/anime/${ongoing.anime_id}`}>
        <div>
          <img className={'w-full h-[240px]'} src={ongoing.poster.medium} alt={'releaseLogo'} />
        </div>
        <div className={'flex flex-col p-1'}>
          <strong className={'text-sm'}>{truncate(ongoing.title)}</strong>
          <span className={'text-sm flex items-center gap-1'}>
            Эпизоды:
            <span className={'text-green-600 text-sm'}>{ongoing.episodes.aired}</span>
          </span>
        </div>
      </Link>
    </div>
  )
}
