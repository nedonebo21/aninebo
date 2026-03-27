'use client'

import { AgeRating } from './age-rating'
import { AnimeDescription } from './anime-description'
import { AnimeType } from './anime-type'
import { Creators } from './creators'
import { Episodes } from './episodes'
import { Genres } from './genres'
import { Status } from './status'
import { Studios } from './studios'
import { YearReleased } from './year-released'
import {
  AnimeInfoDescriptionSkeleton,
  AnimeInfoRowSkeleton,
  AnimeInfoTagsSkeleton,
  Card,
} from '@/shared/ui'

import type { AnimeByIdResponse } from '@/entities/anime/model/types'

type AnimeInfoProps = {
  anime?: AnimeByIdResponse
  isLoading: boolean
}
export const AnimeInfo = ({ anime, isLoading }: AnimeInfoProps) => {
  return (
    <Card className={'rounded-md p-4 flex flex-col gap-[6px] w-full'}>
      {isLoading ? (
        <>
          <AnimeInfoRowSkeleton labelWidth={'w-[95px]'} valueWidth={'w-[60px]'} />
          <AnimeInfoRowSkeleton labelWidth={'w-[35px]'} valueWidth={'w-[90px]'} />
          <AnimeInfoRowSkeleton labelWidth={'w-[60px]'} valueWidth={'w-[80px]'} />
          <AnimeInfoRowSkeleton labelWidth={'w-[75px]'} valueWidth={'w-[45px]'} />
          <AnimeInfoRowSkeleton labelWidth={'w-[145px]'} valueWidth={'w-[40px]'} />
          <AnimeInfoTagsSkeleton />
          <AnimeInfoDescriptionSkeleton />
        </>
      ) : (
        <>
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
        </>
      )}
    </Card>
  )
}
