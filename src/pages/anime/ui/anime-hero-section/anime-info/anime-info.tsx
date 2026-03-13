'use client'

import { AgeRating } from '@/pages/anime/ui/anime-hero-section/anime-info/age-rating'
import { AnimeDescription } from '@/pages/anime/ui/anime-hero-section/anime-info/anime-description'
import { AnimeType } from '@/pages/anime/ui/anime-hero-section/anime-info/anime-type'
import { Creators } from '@/pages/anime/ui/anime-hero-section/anime-info/creators'
import { Episodes } from '@/pages/anime/ui/anime-hero-section/anime-info/episodes'
import { Genres } from '@/pages/anime/ui/anime-hero-section/anime-info/genres'
import { Status } from '@/pages/anime/ui/anime-hero-section/anime-info/status'
import { Studios } from '@/pages/anime/ui/anime-hero-section/anime-info/studios'
import { YearReleased } from '@/pages/anime/ui/anime-hero-section/anime-info/year-released'
import { Card } from '@/shared/ui'

import type { AnimeByIdResponse } from '@/entities/anime/model/types'

type AnimeInfoProps = {
  anime?: AnimeByIdResponse
}
export const AnimeInfo = ({ anime }: AnimeInfoProps) => {
  return (
    <Card className={'rounded-md p-4 flex flex-col gap-[6px] w-full'}>
      <YearReleased year={anime?.year} />
      <AnimeType type={anime?.type.name} />
      <Status status={anime?.anime_status.title} />
      <Episodes episodes={anime?.episodes.aired} />
      <AgeRating ageRating={anime?.min_age.title} />
      <div>
        <Genres anime={anime} />
        <Creators anime={anime} />
        <Studios anime={anime} />
      </div>
      <AnimeDescription description={anime?.description} />
    </Card>
  )
}
