'use client'

import { useUserInfo } from '@/entities/user'

import { UserAvatarPanel } from './user-avatar-panel'
import { UserDetails } from './user-details'

export const UserInfo = () => {
  const userInfo = useUserInfo()

  return (
    <div className={'flex justify-between gap-2'}>
      <UserDetails
        registerDate={userInfo.registerDate}
        nickname={userInfo.nickname}
        about={userInfo.about}
      />
      <UserAvatarPanel
        lastOnlineDate={userInfo.lastOnlineDate}
        isOnline={userInfo.isOnline}
        avatar={userInfo.avatar}
      />
    </div>
  )
}
