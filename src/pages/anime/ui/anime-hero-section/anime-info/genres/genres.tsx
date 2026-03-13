import { Typography } from '@/shared/ui'

import type { AnimeByIdResponse } from '@/entities/anime/model/types'

type GenresProps = {
  anime?: AnimeByIdResponse
}
export const Genres = ({ anime }: GenresProps) => {
  return (
    <>
      <Typography className={'mb-1'}>Жанры:</Typography>
      <div className={'flex gap-1 flex-wrap'}>
        {anime?.genres.map(genre => (
          <Typography
            key={genre.id}
            as={'span'}
            className={'border rounded-md border-green-600 p-1'}
          >
            {genre.title}
          </Typography>
        ))}
      </div>
    </>
  )
}
