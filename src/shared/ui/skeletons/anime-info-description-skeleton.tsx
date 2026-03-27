import { Skeleton } from '@/shared/ui'

export const AnimeInfoDescriptionSkeleton = () => {
  return (
    <div className={'mt-5 w-full'}>
      <Skeleton className={'h-[24px] w-[110px]'} />
      <div className={'mt-2 flex flex-col gap-2'}>
        <Skeleton className={'h-[14px] w-full'} />
        <Skeleton className={'h-[14px] w-full'} />
        <Skeleton className={'h-[14px] w-full'} />
        <Skeleton className={'h-[14px] w-full'} />
        <Skeleton className={'h-[14px] w-full'} />
        <Skeleton className={'h-[14px] w-full'} />
        <Skeleton className={'h-[14px] w-full'} />
        <Skeleton className={'h-[14px] w-[85%]'} />
      </div>
    </div>
  )
}
