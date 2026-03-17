import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui'
import { CircleQuestionMarkIcon } from 'lucide-react'

type LastOnlineTooltipProps = {
  onlineDate: string
}
export const LastOnlineTooltip = ({ onlineDate }: LastOnlineTooltipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger className={'ml-2 text-gray-400'}>
        <CircleQuestionMarkIcon width={16} height={16} />
      </TooltipTrigger>
      <TooltipContent>
        <p>Был(а) {onlineDate}</p>
      </TooltipContent>
    </Tooltip>
  )
}
