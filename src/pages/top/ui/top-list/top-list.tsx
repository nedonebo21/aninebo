'use client'

import { useAnimeTop } from '@/entities/anime'
import { Typography } from '@/shared/ui'
import { useState } from 'react'
import { AnimeVideoType } from '@/entities/anime'
import { SelectTypeButtons } from './select-type-buttons'
import { TopItems } from './top-items'

export const TopList = () => {
  const [activeType, setActiveType] = useState<AnimeVideoType>('tv')

  const { data } = useAnimeTop({ types: activeType })

  const catalog = data?.response

  const getTypeName = () => {
    if (activeType === 'tv') return 'сериалов'
    if (activeType === 'movie') return 'фильмов'
    if (activeType === 'ona') return 'ONA'
  }

  return (
    <>
      <Typography variant={'title'} as={'h1'}>
        Топ-100 аниме {getTypeName()}
      </Typography>
      <SelectTypeButtons activeType={activeType} onChange={setActiveType} />
      <TopItems catalog={catalog} />
    </>
  )
}
