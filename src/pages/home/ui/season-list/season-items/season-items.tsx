import { SeasonItem } from './season-item'

import type { Anime } from '@/entities/anime/model/types'

type SeasonItemsProps = {
  anime: Anime[]
}
export const SeasonItems = ({ anime }: SeasonItemsProps) => {
  return (
    <div className={'flex items-center justify-center gap-2'}>
      {anime?.map(anime => (
        <SeasonItem key={anime.anime_id} anime={anime} />
      ))}
    </div>
  )
}
