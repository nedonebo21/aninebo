'use client'

import { useAnimeOngoings } from '@/entities/anime'

import { HomeSection } from '../home-section'
import { OngoingItems } from './ongoing-items'

export const OngoingList = () => {
  const { data } = useAnimeOngoings()

  const ongoings = Array.isArray(data?.response) ? data.response.slice(1, 7) : []

  return (
    <HomeSection href={'/ongoings'} title={'Онгоинги'}>
      <OngoingItems ongoings={ongoings} />
    </HomeSection>
  )
}
