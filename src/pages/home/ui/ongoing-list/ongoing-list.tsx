'use client'

import { useAnimeOngoings } from '@/entities/anime'

import { HomeSection } from '../home-section'
import { OngoingItems } from './ongoing-items'

export const OngoingList = () => {
  const { data, isLoading } = useAnimeOngoings()

  const ongoings = Array.isArray(data?.response) ? data.response.slice(1, 7) : []

  return (
    <HomeSection href={'/ongoings'} title={'Онгоинги'}>
      <OngoingItems ongoings={ongoings} isLoading={isLoading} />
    </HomeSection>
  )
}
