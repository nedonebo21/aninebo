import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui'

type SelectDubProps = {
  dubs: string[]
  selectedDub: string
  setSelectedDub: (dub: string) => void
}
export const SelectDub = ({ dubs, selectedDub, setSelectedDub }: SelectDubProps) => {
  const handleDubSelect = (dub: string) => {
    setSelectedDub(dub)
  }

  const hasDubs = dubs.length > 0

  return (
    <Select value={selectedDub} disabled={!hasDubs} onValueChange={handleDubSelect}>
      <SelectTrigger className={'w-[220px]'}>
        <SelectValue placeholder={'Выберите озвучку'} />
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
