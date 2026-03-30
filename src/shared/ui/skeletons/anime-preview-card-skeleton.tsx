import { Skeleton } from '@/shared/ui'

type AnimePreviewCardSkeletonProps = {
  isTop?: boolean
}

export const AnimePreviewCardSkeleton = ({ isTop }: AnimePreviewCardSkeletonProps) => {
  return (
    <div
      className={
        'w-[190px] flex-shrink-0 overflow-hidden rounded-md bg-secondary shadow-md transition-all hover:bg-secondary/60 hover:shadow-lg'
      }
    >
      <div>
        <div>
          <Skeleton className={'h-[240px] w-full rounded-none'} />
        </div>
        <div className={'flex flex-col gap-1 p-1'}>
          <Skeleton className={'w-[182px] h-[16px]'} />
          <Skeleton className={'w-[90px] h-[16px]'} />
          {isTop && <Skeleton className={'w-[160px] h-[16px]'} />}
        </div>
      </div>
    </div>
  )
}
