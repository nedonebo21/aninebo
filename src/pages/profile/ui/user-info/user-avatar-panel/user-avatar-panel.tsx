import { AvatarWithCircle } from './avatar-with-circle'
import { OnlineStatus } from './online-status'
import { UserActions } from './user-actions'

type UserAvatarPanelProps = {
  lastOnlineDate: string
  isOnline: boolean
  avatar?: string
}
export const UserAvatarPanel = ({ lastOnlineDate, isOnline, avatar }: UserAvatarPanelProps) => {
  return (
    <div className={'flex flex-col gap-2'}>
      <OnlineStatus isOnline={isOnline} lastOnlineDate={lastOnlineDate} />
      <AvatarWithCircle isOnline={isOnline} avatar={avatar} />
      <UserActions />
    </div>
  )
}
