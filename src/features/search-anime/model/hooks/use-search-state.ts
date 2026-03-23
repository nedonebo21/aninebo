import { useState } from 'react'
import { useClickAway } from 'react-use'
import { useRef } from 'react'

export const useSearchState = () => {
  const [search, setSearch] = useState('')
  const [focused, setFocused] = useState(false)
  const ref = useRef(null)

  useClickAway(ref, () => {
    setFocused(false)
  })

  const handleFocus = () => setFocused(true)
  const handleBlur = () => setFocused(false)
  const handleSearchChange = (value: string) => setSearch(value)
  const handleClear = () => setSearch('')

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
