import Link from 'next/link'

import { cn } from '@/shared/lib/utils'
import { Typography } from '@/shared/ui'

import type { SearchAnimeResponse } from '@/features/search-anime/model'

type SearchSuggestionsProps = {
  searchedAnime: SearchAnimeResponse[]
  onItemClick: () => void
  focused: boolean
}

export const SearchSuggestions = ({
  searchedAnime,
  onItemClick,
  focused,
}: SearchSuggestionsProps) => {
  if (searchedAnime.length === 0) {
    return null
  }

  return (
    <div
      className={cn(
        'absolute w-[560px] left-[32.2%] rounded-xl top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
        focused && 'visible opacity-100 top-22 bg-secondary'
      )}
    >
      {searchedAnime.map(anime => (
        <Link
          key={anime.anime_id}
          href={`/anime/${anime.anime_id}`}
          className={
            'flex items-center gap-3 px-3 py-2 hover:bg-green-800 rounded-xl cursor-pointer'
          }
          onClick={onItemClick}
        >
          <div className="flex items-center gap-2">
            <img src={anime.poster.small} alt={anime.title} className={'rounded-sm h-8'} />
            <Typography as={'span'} variant={'bodyNormal'} className={'font-medium'}>
              {anime.title}
            </Typography>
            <Typography
              as={'span'}
              variant={'bodyNormal'}
              className={'text-sm mt-[2px] text-muted-foreground'}
            >
              {anime.year} • {anime.type.name}
            </Typography>
          </div>
        </Link>
      ))}
    </div>
  )
}
