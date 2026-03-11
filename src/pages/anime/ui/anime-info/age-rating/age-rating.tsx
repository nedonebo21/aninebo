import { Typography } from '@/shared/ui'

type AgeRatingProps = {
  ageRating?: string
}
export const AgeRating = ({ ageRating }: AgeRatingProps) => {
  return (
    <div>
      <Typography as={'span'} variant={'bodyNormal'}>
        Возрастной рейтинг:{' '}
      </Typography>
      <Typography as={'span'} className={'border border-yellow-300 rounded-sm px-1 text-sm'}>
        {ageRating}
      </Typography>
    </div>
  )
}
