import { Typography } from '@/shared/ui'

type YearReleasedProps = {
  year?: number
}
export const YearReleased = ({ year }: YearReleasedProps) => {
  return (
    <div>
      <Typography as={'span'} variant={'bodyNormal'}>
        Год выхода:{' '}
      </Typography>
      <Typography as={'span'} className={'text-gray-400'}>
        {year}
      </Typography>
    </div>
  )
}
