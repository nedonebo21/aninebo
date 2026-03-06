type Seasons = 'winter' | 'spring' | 'summer' | 'autumn'

export const getCurrentSeason = (): Seasons => {
  const month = new Date().getMonth() + 1

  if (month === 12 || month === 1 || month === 2) {
    return 'winter'
  }

  if (month >= 3 && month <= 5) {
    return 'spring'
  }

  if (month >= 6 && month <= 8) {
    return 'summer'
  }

  return 'autumn'
}
