import { Container, HomeLink } from '@/shared/ui'
import { TopList } from './top-list'

export const TopPage = () => {
  return (
    <Container className={'mt-10'}>
      <HomeLink className={'ml-0'} />
      <TopList />
    </Container>
  )
}
