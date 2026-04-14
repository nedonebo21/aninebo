import { getAnimePoster } from '@/pages/anime/model/lib'
import { AnimeActions } from '@/pages/anime/ui/anime-hero-section/anime-actions'
import { AnimeInfo } from '@/pages/anime/ui/anime-hero-section/anime-info/anime-info'
import { AnimeImgSkeleton } from '@/shared/ui'

import type { AnimeByIdResponse } from '@/entities/anime'

type AnimeHeroSectionProps = {
  anime?: AnimeByIdResponse
  isLoading: boolean
}

export const AnimeHeroSection = ({ anime, isLoading }: AnimeHeroSectionProps) => {
  const posterUrl = getAnimePoster(anime)

  return (
    <div className={'flex justify-between gap-4'}>
      <div className={'min-w-[300px]'}>
        {isLoading ? (
          <AnimeImgSkeleton />
        ) : (
          <img className={'w-[300px] h-[500px] rounded-md mb-2'} src={posterUrl} alt={'poster'} />
        )}
        <AnimeActions />
      </div>
      <AnimeInfo anime={anime} isLoading={isLoading} />
    </div>
  )
}
