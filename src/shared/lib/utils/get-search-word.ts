export const getSearchWord = (word?: string | string[]) => {
  if (!word) {
    return ''
  }

  if (Array.isArray(word)) {
    return word[0] ?? ''
  }

  return word
}
