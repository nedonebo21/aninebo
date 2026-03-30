'use client'

import { AnimeVideoType, useAnimeTop } from '@/entities/anime'
import { Typography } from '@/shared/ui'
import { SelectTypeButtons } from './select-type-buttons'
import { TopItems } from './top-items'

type TopListProps = {
  activeType: AnimeVideoType
}

export const TopList = ({ activeType }: TopListProps) => {
  const { data, isLoading } = useAnimeTop({ types: activeType })

  const topList = data?.response

  const getTypeName = () => {
    if (activeType === 'tv') return 'сериалов'
    if (activeType === 'movie') return 'фильмов'
    if (activeType === 'ona') return 'ONA'
  }

  return (
    <>
      <Typography variant={'title'} className={'mb-2'} as={'h1'}>
        Топ-100 аниме {getTypeName()}
      </Typography>
      <SelectTypeButtons activeType={activeType} />
      <TopItems topList={topList} isLoading={isLoading} />
    </>
  )
}
