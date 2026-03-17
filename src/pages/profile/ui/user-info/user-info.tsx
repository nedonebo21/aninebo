'use client'

import { useMe } from '@/entities/user'
import { formatDate, isToday } from '@/shared/lib'
import { UserDetails } from './user-details'
import { UserAvatarPanel } from './user-avatar-panel'

export const UserInfo = () => {
  const { data: userData } = useMe()

  const user = userData?.response ?? null
  const registerDate = formatDate(user?.register_date ?? 0)
  const onlineDate = formatDate(user?.last_online ?? 0)
  const isOnline = isToday(user?.last_online ?? 0)

  return (
    <div className={'flex justify-between gap-2'}>
      <UserDetails registerDate={registerDate} nickname={user?.nickname} about={user?.about} />
      <UserAvatarPanel onlineDate={onlineDate} isOnline={isOnline} avatar={user?.avatars.big} />
    </div>
  )
}
