'use client'

import { OngoingList } from '@/pages/home/ui/ongoing-list/ongoing-list'
import { Container } from '@/shared/ui'

export const HomePage = () => {
  return (
    <Container className={'mt-10'}>
      <OngoingList />
    </Container>
  )
}
