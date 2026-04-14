import { SelectDub } from '@/pages/anime/ui/anime-video-section/select-dub'
import { SelectPlayer } from '@/pages/anime/ui/anime-video-section/select-player'

import type { Dispatch, SetStateAction } from 'react'

type VideoFiltersProps = {
  dubs: string[]
  players: string[]
  selectedPlayer: string
  selectedDub: string
  setSelectedPlayer: Dispatch<SetStateAction<string>>
  setSelectedDub: Dispatch<SetStateAction<string>>
}
export const VideoFilters = ({
  players,
  dubs,
  selectedPlayer,
  selectedDub,
  setSelectedDub,
  setSelectedPlayer,
}: VideoFiltersProps) => {
  return (
    <div className={'flex items-center gap-1 mb-4'}>
      <SelectPlayer
        players={players}
        selectedPlayer={selectedPlayer}
        setSelectedPlayer={setSelectedPlayer}
      />
      <SelectDub dubs={dubs} selectedDub={selectedDub} setSelectedDub={setSelectedDub} />
    </div>
  )
}
