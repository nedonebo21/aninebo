import { cn } from '@/shared/lib/utils'

type UserAvatarProps = {
  avatar?: string
  className?: string
}
export const UserAvatar = ({ avatar, className }: UserAvatarProps) => {
  return <img className={cn('rounded-md', className)} src={avatar} alt={'avatar'} />
}
