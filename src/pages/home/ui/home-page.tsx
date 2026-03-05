'use client'

import { ReleaseItems } from '@/pages/home/ui/release-items/release-items'
import { Container } from '@/shared/ui'

export const HomePage = () => {
  return (
    <Container className={'mt-10'}>
      <ReleaseItems />
    </Container>
  )
}
