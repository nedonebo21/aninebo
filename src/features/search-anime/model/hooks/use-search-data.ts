import { useAnimeSearch } from '@/features/search-anime/api'
import { useDebounce } from '@/shared/lib'

export const useSearchData = (search: string) => {
  const debouncedSearch = useDebounce(search, 500)
  const { data } = useAnimeSearch(debouncedSearch)
  
  return {
    searchedAnime: data?.response || [],
  }
}
