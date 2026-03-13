import { SelectDub } from '@/pages/anime/ui/anime-video-section/select-dub'
import { SelectPlayer } from '@/pages/anime/ui/anime-video-section/select-player'

type VideoFiltersProps = {
  dubs: string[]
  players: string[]
  selectedPlayer: string
  selectedDub: string
  setSelectedPlayer: (player: string) => void
  setSelectedDub: (dub: string) => void
}
export const VideoFilters = ({
  players,
  dubs,
  selectedPlayer,
  selectedDub,
  setSelectedDub,
  setSelectedPlayer,
}: VideoFiltersProps) => {
  const handlePlayerSelect = (player: string) => {
    setSelectedPlayer(player)
  }

  const handleDubSelect = (dub: string) => {
    setSelectedDub(dub)
  }

  return (
    <div className={'flex items-center gap-1 mb-4'}>
      <SelectPlayer
        players={players}
        selectedPlayer={selectedPlayer}
        setSelectedPlayer={handlePlayerSelect}
      />
      <SelectDub dubs={dubs} selectedDub={selectedDub} setSelectedDub={handleDubSelect} />
    </div>
  )
}
