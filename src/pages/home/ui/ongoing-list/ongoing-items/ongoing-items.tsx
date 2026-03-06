import { OngoingItem } from './ongoing-item'

import type { AnimeOngoingsResponse } from '@/entities/anime'

type OngoingItemsProps = {
  ongoings: AnimeOngoingsResponse[]
}
export const OngoingItems = ({ ongoings }: OngoingItemsProps) => {
  return (
    <div className={'flex items-center justify-center gap-2'}>
      {ongoings?.map(ongoing => (
        <OngoingItem key={ongoing.anime_id} ongoing={ongoing} />
      ))}
    </div>
  )
}
