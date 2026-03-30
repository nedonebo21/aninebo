import Link from 'next/link'
import type { ReactNode } from 'react'
import { StarIcon } from 'lucide-react'

import { truncate } from '@/shared/lib'
import { Typography } from '@/shared/ui'

type AnimePreviewCardProps = {
  animeId: number
  footer?: ReactNode
  imageUrl: string
  imageAlt: string
  subtitle: ReactNode
  topCategory?: number
  topRating?: number | string
  title: string
  withTopOverlay?: boolean
}

export const AnimePreviewCard = ({
  animeId,
  footer,
  imageUrl,
  imageAlt,
  subtitle,
  topCategory,
  topRating,
  title,
  withTopOverlay = false,
}: AnimePreviewCardProps) => {
  const hasTopCategory = !!topCategory
  const hasTopRating = !!topRating

  return (
    <div
      className={
        'w-[190px] flex-shrink-0 overflow-hidden rounded-md bg-secondary shadow-md transition-all hover:bg-secondary/60 hover:shadow-lg'
      }
    >
      <Link href={`/anime/${animeId}`}>
        <div className={'relative'}>
          <img className={'h-[240px] w-full'} src={imageUrl} alt={imageAlt} />
          {withTopOverlay && hasTopCategory && (
            <div className={'absolute right-0 top-1 rounded-xs bg-black/50 px-1'}>
              <Typography as={'span'} variant={'bodyBold'} className={'text-white'}>
                #{topCategory}
              </Typography>
            </div>
          )}
          {withTopOverlay && hasTopRating && (
            <div
              className={'absolute left-0 top-1 rounded-xs bg-yellow-500 px-4 py-[2px]'}
              style={{
                clipPath:
                  'polygon(0 0, calc(100% - 6px) 0, 100% 50%, calc(100% - 6px) 100%, 0 100%)',
              }}
            >
              <Typography
                as={'span'}
                variant={'bodyBold'}
                className={'flex items-center gap-1 text-white'}
              >
                <StarIcon className={'h-4 w-4'} /> {topRating}
              </Typography>
            </div>
          )}
        </div>
        <div className={'flex flex-col p-1'}>
          <Typography as={'span'} variant={'bodyBold'} className={'text-sm'}>
            {truncate(title)}
          </Typography>
          {subtitle}
          {footer}
        </div>
      </Link>
    </div>
  )
}
