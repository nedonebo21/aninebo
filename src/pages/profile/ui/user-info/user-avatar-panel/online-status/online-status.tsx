import { Typography } from '@/shared/ui'
import { cn } from '@/shared/lib/utils'
import { LastOnlineTooltip } from './last-online-tooltip'

type OnlineStatusProps = {
  isOnline: boolean
  onlineDate: string
}
export const OnlineStatus = ({ isOnline, onlineDate }: OnlineStatusProps) => {
  return (
    <div className={'flex gap-1 items-center'}>
      <Typography>Статус:</Typography>
      <Typography className={cn({ 'text-green-600': isOnline, 'text-violet-500': !isOnline })}>
        {isOnline ? 'Онлайн' : 'Оффлайн'}
      </Typography>
      <LastOnlineTooltip onlineDate={onlineDate} />
    </div>
  )
}
