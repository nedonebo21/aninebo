import { Container, HomeLink } from '@/shared/ui'
import { TopList } from './top-list'
import { AnimeVideoType } from '@/entities/anime'

type TopPageProps = {
  type: AnimeVideoType
}

export const TopPage = ({ type }: TopPageProps) => {
  return (
    <Container className={'my-10'}>
      <HomeLink className={'ml-0'} />
      <TopList activeType={type} />
    </Container>
  )
}
