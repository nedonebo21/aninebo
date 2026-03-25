import { AnimeVideoType } from '@/entities/anime/model/types'
import { Button } from '@/shared/ui'
import { cn } from '@/shared/lib/utils'
import { useRouter } from 'next/navigation'

const ANIME_TYPES: { label: string; value: AnimeVideoType }[] = [
  { label: 'Сериалы', value: 'tv' },
  { label: 'Фильмы', value: 'movie' },
  { label: 'ONA', value: 'ona' },
]

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
