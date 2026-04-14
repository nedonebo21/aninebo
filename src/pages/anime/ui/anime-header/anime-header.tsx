import { EyeIcon } from 'lucide-react'

import { hasOtherTitles } from '@/pages/anime/model/lib'
import {
  AnimeOtherTitlesSkeleton,
  AnimeTitleSkeleton,
  AnimeViewsSkeleton,
  Typography,
} from '@/shared/ui'

type AnimeHeaderProps = {
  views?: number
  title?: string
  otherTitles?: string[]
  isLoading: boolean
}

export const AnimeHeader = ({ views, title, otherTitles, isLoading }: AnimeHeaderProps) => {
  const showOtherTitles = hasOtherTitles(otherTitles)

  return (
    <div className={'mb-2'}>
      {isLoading ? (
        <AnimeTitleSkeleton />
      ) : (
        <Typography as={'h1'} className={'mb-2'} variant={'title'}>
          {title}
        </Typography>
      )}
      <div className={'flex flex-wrap gap-1'}>
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => <AnimeOtherTitlesSkeleton key={index} />)
          : showOtherTitles &&
            otherTitles?.map(otherTitle => (
              <Typography
                key={otherTitle}
                className={'text-gray-400 border border-primary rounded-sm px-2 py-[2px]'}
              >
                {otherTitle}
              </Typography>
            ))}
      </div>
      <div className={'flex items-center gap-1 mt-2 text-gray-400'}>
        <EyeIcon width={16} height={16} />
        {isLoading ? (
          <AnimeViewsSkeleton />
        ) : (
          <Typography as={'span'} className={' text-sm'}>
            {views}
          </Typography>
        )}
      </div>
    </div>
  )
}
