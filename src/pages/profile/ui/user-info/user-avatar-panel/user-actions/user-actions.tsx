import { Button } from '@/shared/ui'
import { ImageUpIcon, SettingsIcon } from 'lucide-react'

export const UserActions = () => {
  return (
    <div className={'flex flex-col gap-1'}>
      <Button className={'cursor-pointer'}>
        <ImageUpIcon width={16} height={16} />
      </Button>
      <Button className={'cursor-pointer'}>
        <SettingsIcon width={16} height={16} />
      </Button>
    </div>
  )
}
