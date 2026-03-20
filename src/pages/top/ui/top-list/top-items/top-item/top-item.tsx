import Link from 'next/link'
import { Typography } from '@/shared/ui'
import { truncate } from '@/shared/lib'
import { Anime } from '@/entities/anime'
import { EyeIcon, StarIcon } from 'lucide-react'

type CatalogItemProps = {
  anime: Anime
}
export const TopItem = ({ anime }: CatalogItemProps) => {
  const rating = anime.rating.average.toFixed(2)
  return (
    <div
      className={
        'flex-shrink-0 w-[190px] rounded-md shadow-md overflow-hidden hover:shadow-lg bg-secondary hover:bg-secondary/60 transition-all'
      }
    >
      <Link href={`/anime/${anime.anime_id}`}>
        <div className={'relative'}>
          <img className={'w-full h-[240px]'} src={anime.poster.medium} alt={'releaseLogo'} />
          <div className={'absolute rounded-xs px-1 top-1 right-0 bg-black/50'}>
            <Typography as={'span'} variant={'bodyBold'} className={'text-white'}>
              #{anime.top.category}
            </Typography>
          </div>
          <div
            className={'absolute rounded-xs px-4 py-[2px] top-1 left-0 bg-yellow-500'}
            style={{
              clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 50%, calc(100% - 6px) 100%, 0 100%)',
            }}
          >
            <Typography
              as={'span'}
              variant={'bodyBold'}
              className={'text-white flex gap-1 items-center'}
            >
              <StarIcon className={'w-4 h-4'} /> {rating}
            </Typography>
          </div>
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
          <div className={'flex gap-2'}>
            <Typography as={'span'} className={'flex gap-1 items-center text-gray-400 text-xs'}>
              <EyeIcon className={'w-4 h-4'} /> {anime.views}
            </Typography>
            <Typography as={'span'} className={'flex gap-1 items-center text-gray-400 text-xs'}>
              <StarIcon className={'w-4 h-4'} /> {anime.rating.counters}
            </Typography>
          </div>
        </div>
      </Link>
    </div>
  )
}
