import { AnimePreviewCardSkeleton } from '@/shared/ui'

import { TopItem } from './top-item'

import type { Anime } from '@/entities/anime'

type CatalogItemsProps = {
  topList?: Anime[]
  isLoading: boolean
}
export const TopItems = ({ topList, isLoading }: CatalogItemsProps) => {
  return (
    <div className={'flex flex-wrap items-center gap-2'}>
      {isLoading
        ? Array.from({ length: 18 }).map((_, index) => (
            <AnimePreviewCardSkeleton key={index} isTop />
          ))
        : topList?.map(anime => <TopItem key={anime.anime_id} anime={anime} />)}
    </div>
  )
}
