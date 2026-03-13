import {
  ClockAlert,
  EyeIcon,
  EyeOffIcon,
  FlagIcon,
  HeartPlusIcon,
  NotebookIcon,
} from 'lucide-react'

import { Button } from '@/shared/ui'

export const AnimeActions = () => {
  return (
    <div className={'flex items-center justify-center gap-1 flex-wrap'}>
      <Button size={'sm'}>
        <HeartPlusIcon width={20} height={20} />
      </Button>
      <Button size={'sm'}>
        <EyeIcon width={20} height={20} />
      </Button>
      <Button size={'sm'}>
        <NotebookIcon width={20} height={20} />
      </Button>
      <Button size={'sm'}>
        <FlagIcon width={20} height={20} />
      </Button>
      <Button size={'sm'}>
        <ClockAlert width={20} height={20} />
      </Button>
      <Button size={'sm'}>
        <EyeOffIcon width={20} height={20} />
      </Button>
    </div>
  )
}
