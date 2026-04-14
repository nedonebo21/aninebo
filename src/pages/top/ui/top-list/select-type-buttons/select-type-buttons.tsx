import { useRouter } from 'next/navigation'

import { ANIME_TYPES } from '@/entities/anime'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui'

import type { AnimeVideoType } from '@/entities/anime'

type SelectTypeButtonProps = {
  activeType: AnimeVideoType
}
export const SelectTypeButtons = ({ activeType }: SelectTypeButtonProps) => {
  const router = useRouter()

  return (
    <div className={'flex gap-1 items-center mb-2'}>
      {ANIME_TYPES.map(({ label, value }) => (
        <Button
          key={value}
          onClick={() => router.push(`/top/${value}`)}
          className={cn('cursor-pointer', {
            'bg-green-600 text-white pointer-events-none': activeType === value,
          })}
          variant={'outline'}
          size={'sm'}
        >
          {label}
        </Button>
      ))}
    </div>
  )
}
