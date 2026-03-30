import { SearchPage } from '@/pages/search'
import { getSearchWord } from '@/shared/lib'

type SearchRoutePageProps = {
  searchParams: Promise<{ word?: string | string[] }>
}

export default async function SearchRoutePage({ searchParams }: SearchRoutePageProps) {
  const resolvedSearchParams = await searchParams
  const searchWord = getSearchWord(resolvedSearchParams.word).replaceAll('+', ' ')

  return <SearchPage searchWord={searchWord} />
}
