/**
 * Форматирует Unix timestamp (в секундах) в читаемую дату на русском языке.
 *
 * @example
 * formatDate(1104537600) // "1 января 2005 года"
 * formatDate(1104537600, { withYear: false }) // "1 января"
 * formatDate(1104537600, { short: true }) // "01.01.2005"
 */

type FormatDateOptions = {
  /** Добавлять ли "года" в конце. По умолчанию true */
  withYear?: boolean
  /** Короткий формат ДД.ММ.ГГГГ. По умолчанию false */
  short?: boolean
}

export const formatDate = (timestamp: number, options: FormatDateOptions = {}): string => {
  const { withYear = true, short = false } = options

  const date = new Date(timestamp * 1000)

  if (short) {
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }

  const formatted = date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  // toLocaleDateString с year возвращает "1 января 2005 г."
  // Заменяем "г." на "года"
  if (withYear) {
    return formatted.replace(/\s*г\.$/, ' года')
  }

  // Без года — убираем год целиком
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
  })
}
