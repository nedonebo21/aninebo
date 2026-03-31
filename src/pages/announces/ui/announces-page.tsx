import { AnnouncesList } from './announces-list'
import { Container, HomeLink } from '@/shared/ui'

export const AnnouncesPage = () => {
  return (
    <Container className={'my-10'}>
      <HomeLink className={'ml-0'} />
      <AnnouncesList />
    </Container>
  )
}
