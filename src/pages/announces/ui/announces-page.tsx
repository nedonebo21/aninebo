import { Container, HomeLink } from '@/shared/ui'

import { AnnouncesList } from './announces-list'

export const AnnouncesPage = () => {
  return (
    <Container className={'my-10'}>
      <HomeLink className={'ml-0'} />
      <AnnouncesList />
    </Container>
  )
}
