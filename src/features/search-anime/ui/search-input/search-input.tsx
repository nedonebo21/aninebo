import { Search, XIcon } from 'lucide-react'

import { Input } from '@/shared/ui'

type SearchInputProps = {
  search: string
  isCleared: boolean
  onFocus: () => void
  onChange: (value: string) => void
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
      <Search className={'absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400'} />
      <Input
        placeholder={'Поиск аниме...'}
        value={search}
        onFocus={onFocus}
        onChange={e => onChange(e.target.value)}
        className={'rounded-2xl outline-none w-full pl-11'}
      />
      {isCleared && (
        <XIcon
          onClick={onClear}
          className={
            'absolute top-1/2 translate-y-[-50%] right-3 h-5 text-gray-400 hover:text-green-800 cursor-pointer transition-all'
          }
        />
      )}
    </>
  )
}
