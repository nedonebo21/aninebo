import { Skeleton } from '@/shared/ui'

export const AnimeInfoTagsSkeleton = () => {
  return (
    <div className={'mt-1'}>
      <Skeleton className={'mb-2 h-[16px] w-[70px]'} />
      <div className={'mb-2 flex flex-wrap gap-1'}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className={'h-[28px] w-[90px] rounded-md'} />
        ))}
      </div>
      <div className={'mb-2 flex items-center gap-2'}>
        <Skeleton className={'h-[16px] w-[90px]'} />
        <Skeleton className={'h-[16px] w-[220px]'} />
      </div>
      <div className={'flex items-center gap-2'}>
        <Skeleton className={'h-[16px] w-[90px]'} />
        <Skeleton className={'h-[16px] w-[180px]'} />
      </div>
    </div>
  )
}
