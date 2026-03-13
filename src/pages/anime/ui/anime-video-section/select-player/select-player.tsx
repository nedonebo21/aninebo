import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui'

type SelectPlayerProps = {
  players: string[]
  selectedPlayer: string
  setSelectedPlayer: (player: string) => void
}
export const SelectPlayer = ({ players, selectedPlayer, setSelectedPlayer }: SelectPlayerProps) => {
  const handlePlayerSelect = (player: string) => {
    setSelectedPlayer(player)
  }

  return (
    <Select value={selectedPlayer} onValueChange={handlePlayerSelect}>
      <SelectTrigger className={'w-[220px]'}>
        <SelectValue placeholder={'Выберите плеер'} />
      </SelectTrigger>
      <SelectContent>
        {players.map(player => (
          <SelectItem key={player} value={player}>
            {player}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
