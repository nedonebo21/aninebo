import { Typography } from '@/shared/ui'

import type { AnimeByIdResponse } from '@/entities/anime/model/types'

type CreatorsProps = {
  anime?: AnimeByIdResponse
}
export const Creators = ({ anime }: CreatorsProps) => {
  return (
    <div>
      <Typography as={'span'} variant={'bodyNormal'}>
        Режиссер:{' '}
      </Typography>
      <Typography as={'span'} className={'text-gray-400'}>
        {anime?.creators.map(creator => creator.title).join(', ')}
      </Typography>
    </div>
  )
}
