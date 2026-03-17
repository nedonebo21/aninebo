import { cn } from '@/shared/lib/utils'

type AvatarWithCircleProps = {
  isOnline: boolean
  avatar?: string
}
export const AvatarWithCircle = ({ isOnline, avatar }: AvatarWithCircleProps) => {
  return (
    <div className={'relative'}>
      <img className={'rounded-md'} src={avatar} alt={'Avatar'} />
      <div
        className={cn('absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 shadow-md', {
          'bg-green-500': isOnline,
          'bg-violet-500': !isOnline,
        })}
      />
    </div>
  )
}
