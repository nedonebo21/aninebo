import { Typography } from '@/shared/ui'

import type { AnimeByIdResponse } from '@/entities/anime/model/types'

type StudiosProps = {
  anime?: AnimeByIdResponse
}
export const Studios = ({ anime }: StudiosProps) => {
  return (
    <div>
      <Typography as={'span'} variant={'bodyNormal'}>
        Озвучка:{' '}
      </Typography>
      <Typography as={'span'} className={'text-green-600'}>
        {anime?.studios.map(studio => studio.title).join(', ')}
      </Typography>
    </div>
  )
}
