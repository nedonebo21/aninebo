import { Search, XIcon } from 'lucide-react'

import { Input } from '@/shared/ui'

import type { Dispatch, SetStateAction } from 'react'

type SearchInputProps = {
  search: string
  isCleared: boolean
  onFocus: () => void
  onChange: Dispatch<SetStateAction<string>>
  onClear: () => void
}

export const SearchInput = ({
  search,
  isCleared,
  onFocus,
  onChange,
  onClear,
}: SearchInputProps) => {
  return (
    <>
      <button
        type={'submit'}
        aria-label={'search'}
        className={
          'absolute top-1/2 left-3 h-5 -translate-y-1/2 text-gray-400 transition-all hover:text-green-800'
        }
      >
        <Search className={'h-5'} />
      </button>
      <Input
        placeholder={'Поиск аниме...'}
        value={search}
        onFocus={onFocus}
        onChange={e => onChange(e.target.value)}
        className={'w-full rounded-2xl pl-11 outline-none'}
      />
      {isCleared && (
        <XIcon
          onClick={onClear}
          className={
            'absolute top-1/2 right-3 h-5 -translate-y-1/2 cursor-pointer text-gray-400 transition-all hover:text-green-800'
          }
        />
      )}
    </>
  )
}
