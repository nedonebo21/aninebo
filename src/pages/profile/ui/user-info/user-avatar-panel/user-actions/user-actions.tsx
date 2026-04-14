import { ImageUpIcon } from 'lucide-react'

import { EditProfileDialog } from '@/features/manage-profile'
import { Button } from '@/shared/ui'

export const UserActions = () => {
  return (
    <div className={'flex flex-col gap-1'}>
      <Button className={'cursor-pointer'}>
        <ImageUpIcon width={16} height={16} />
      </Button>
      <EditProfileDialog />
    </div>
  )
}
