import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui'
import { CircleQuestionMarkIcon } from 'lucide-react'

type LastOnlineTooltipProps = {
  lastOnlineDate: string
}
export const LastOnlineTooltip = ({ lastOnlineDate }: LastOnlineTooltipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger className={'ml-2 text-gray-400'}>
        <CircleQuestionMarkIcon width={16} height={16} />
      </TooltipTrigger>
      <TooltipContent>
        <p>Был(а) {lastOnlineDate}</p>
      </TooltipContent>
    </Tooltip>
  )
}
