import { Typography } from '@/shared/ui'

type AnimeTypeProps = {
  type?: string
}
export const AnimeType = ({ type }: AnimeTypeProps) => {
  return (
    <div>
      <Typography as={'span'} variant={'bodyNormal'}>
        Тип:{' '}
      </Typography>
      <Typography as={'span'} className={'text-gray-400'}>
        {type}
      </Typography>
    </div>
  )
}
