import { UserActions } from './user-actions'
import { AvatarWithCircle } from './avatar-with-circle'
import { OnlineStatus } from './online-status'

type UserAvatarPanelProps = {
  onlineDate: string
  isOnline: boolean
  avatar?: string
}
export const UserAvatarPanel = ({ onlineDate, isOnline, avatar }: UserAvatarPanelProps) => {
  return (
    <div className={'flex flex-col gap-2'}>
      <OnlineStatus isOnline={isOnline} onlineDate={onlineDate} />
      <AvatarWithCircle isOnline={isOnline} avatar={avatar} />
      <UserActions />
    </div>
  )
}
