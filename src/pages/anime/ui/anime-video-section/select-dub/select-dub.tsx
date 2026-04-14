import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui'

import type { Dispatch, SetStateAction } from 'react'

type SelectDubProps = {
  dubs: string[]
  selectedDub: string
  setSelectedDub: Dispatch<SetStateAction<string>>
}
export const SelectDub = ({ dubs, selectedDub, setSelectedDub }: SelectDubProps) => {
  const hasDubs = dubs.length > 0

  return (
    <Select value={selectedDub} disabled={!hasDubs} onValueChange={setSelectedDub}>
      <SelectTrigger className={'w-[220px]'}>
        <SelectValue placeholder={'Р’С‹Р±РµСЂРёС‚Рµ РѕР·РІСѓС‡РєСѓ'} />
      </SelectTrigger>
      <SelectContent>
        {dubs.map(dub => (
          <SelectItem key={dub} value={dub}>
            {dub}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
