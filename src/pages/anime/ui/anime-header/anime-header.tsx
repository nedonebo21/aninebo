import { EyeIcon } from 'lucide-react'

import { Typography } from '@/shared/ui'

type AnimeHeaderProps = {
  views?: number
  title?: string
  otherTitles?: string[]
}
export const AnimeHeader = ({ views, title, otherTitles }: AnimeHeaderProps) => {
  const hasOtherTitles = otherTitles && otherTitles?.length > 0

  return (
    <div className={'mb-2'}>
      <Typography as={'h1'} variant={'title'}>
        {title}
      </Typography>
      <div className={'flex gap-1'}>
        {hasOtherTitles &&
          otherTitles.map(otherTitle => (
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
        <Typography as={'span'} className={' text-sm'}>
          {views}
        </Typography>
      </div>
    </div>
  )
}
