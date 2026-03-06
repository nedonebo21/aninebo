'use client'

import { OngoingList } from '@/pages/home/ui/ongoing-list/ongoing-list'
import { SeasonList } from '@/pages/home/ui/season-list/season-list'
import { Container } from '@/shared/ui'

export const HomePage = () => {
  return (
    <Container className={'flex flex-col gap-5 mt-10'}>
      <OngoingList />
      <SeasonList />
    </Container>
  )
}
