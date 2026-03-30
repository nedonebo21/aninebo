'use client'

import { useAnimeOngoings } from '@/entities/anime'
import { SectionLink } from '@/shared/ui'

import { OngoingItems } from './ongoing-items'

export const OngoingList = () => {
  const { data, isLoading } = useAnimeOngoings()

  const ongoings = Array.isArray(data?.response) ? data.response.slice(1, 7) : []

  return (
    <SectionLink href={'/ongoings'} title={'Онгоинги'}>
      <OngoingItems ongoings={ongoings} isLoading={isLoading} />
    </SectionLink>
  )
}
