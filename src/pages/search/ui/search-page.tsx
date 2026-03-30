import { Container, HomeLink } from '@/shared/ui'
import { SearchedAnimeList } from './searched-anime-list'

export type SearchPageProps = {
  searchWord: string
}

export const SearchPage = ({ searchWord }: SearchPageProps) => {
  const trimmedWord = searchWord.trim()

  return (
    <Container className={'my-10'}>
      <HomeLink className={'ml-0'} />
      <SearchedAnimeList trimmedWord={trimmedWord} />
    </Container>
  )
}
