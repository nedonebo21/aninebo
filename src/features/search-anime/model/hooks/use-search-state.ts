import { useCallback, useState, useRef } from 'react'
import { useClickAway } from 'react-use'

export const useSearchState = () => {
  const [search, setSearch] = useState('')

  const [focused, setFocused] = useState(false)

  const ref = useRef(null)

  useClickAway(ref, () => {
    setFocused(false)
  })

  const handleFocus = useCallback(() => setFocused(true), [])

  const handleBlur = useCallback(() => setFocused(false), [])

  const handleSearchChange = useCallback((value: string) => setSearch(value), [])

  const handleClear = useCallback(() => setSearch(''), [])

  return {
    search,
    focused,
    ref,
    handleFocus,
    handleBlur,
    handleSearchChange,
    handleClear,
    isCleared: search.length > 0,
  }
}
