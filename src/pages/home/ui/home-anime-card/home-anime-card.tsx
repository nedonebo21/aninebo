import Link from 'next/link'
import type { ReactNode } from 'react'

import { truncate } from '@/shared/lib'
import { Typography } from '@/shared/ui'

type HomeAnimeCardProps = {
  animeId: number
  imageUrl: string
  imageAlt: string
  subtitle: ReactNode
  title: string
}

export const HomeAnimeCard = ({
  animeId,
  imageUrl,
  imageAlt,
  subtitle,
  title,
}: HomeAnimeCardProps) => {
  return (
    <div
      className={
        'w-[190px] flex-shrink-0 overflow-hidden rounded-md bg-secondary shadow-md transition-all hover:bg-secondary/60 hover:shadow-lg'
      }
    >
      <Link href={`/anime/${animeId}`}>
        <div>
          <img className={'h-[240px] w-full'} src={imageUrl} alt={imageAlt} />
        </div>
        <div className={'flex flex-col p-1'}>
          <Typography as={'span'} variant={'bodyBold'} className={'text-sm'}>
            {truncate(title)}
          </Typography>
          {subtitle}
        </div>
      </Link>
    </div>
  )
}
