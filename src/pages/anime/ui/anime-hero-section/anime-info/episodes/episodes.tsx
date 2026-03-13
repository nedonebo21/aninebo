import { Typography } from '@/shared/ui'

type EpisodesProps = {
  episodes?: number
}
export const Episodes = ({ episodes }: EpisodesProps) => {
  return (
    <div>
      <Typography as={'span'} variant={'bodyNormal'}>
        Эпизоды:{' '}
      </Typography>
      <Typography as={'span'} className={'text-gray-400'}>
        {episodes}
      </Typography>
    </div>
  )
}
