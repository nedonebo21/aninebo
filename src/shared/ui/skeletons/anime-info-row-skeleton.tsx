import { Skeleton } from '@/shared/ui'

type AnimeInfoRowSkeletonProps = {
  labelWidth?: string
  valueWidth?: string
}

export const AnimeInfoRowSkeleton = ({
  labelWidth = 'w-[90px]',
  valueWidth = 'w-[120px]',
}: AnimeInfoRowSkeletonProps) => {
  return (
    <div className={'flex items-center gap-2'}>
      <Skeleton className={`h-[16px] ${labelWidth}`} />
      <Skeleton className={`h-[16px] ${valueWidth}`} />
    </div>
  )
}
