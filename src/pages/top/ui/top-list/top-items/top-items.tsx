import { Anime } from '@/entities/anime'
import { TopItem } from './top-item'

type CatalogItemsProps = {
  catalog?: Anime[]
}
export const TopItems = ({ catalog }: CatalogItemsProps) => {
  return (
    <div className={'flex flex-wrap items-center gap-2'}>
      {catalog?.map(anime => (
        <TopItem key={anime.anime_id} anime={anime} />
      ))}
    </div>
  )
}
