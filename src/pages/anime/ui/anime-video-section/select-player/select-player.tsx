import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui'

import type { Dispatch, SetStateAction } from 'react'

type SelectPlayerProps = {
  players: string[]
  selectedPlayer: string
  setSelectedPlayer: Dispatch<SetStateAction<string>>
}
export const SelectPlayer = ({ players, selectedPlayer, setSelectedPlayer }: SelectPlayerProps) => {
  const hasPlayers = players.length > 0

  return (
    <Select value={selectedPlayer} disabled={!hasPlayers} onValueChange={setSelectedPlayer}>
      <SelectTrigger className={'w-[220px]'}>
        <SelectValue placeholder={'Р’С‹Р±РµСЂРёС‚Рµ РїР»РµРµСЂ'} />
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
