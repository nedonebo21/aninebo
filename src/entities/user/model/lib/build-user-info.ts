import { formatDate, isToday } from '@/shared/lib'

type BuildUserInfoParams = {
  registerTimestamp?: number
  lastOnlineTimestamp?: number
  nickname?: string
  about?: string
  avatar?: string
}

type UserInfo = {
  registerDate: string
  lastOnlineDate: string
  isOnline: boolean
  nickname?: string
  about?: string
  avatar?: string
}

export const buildUserInfo = ({
  registerTimestamp = 0,
  lastOnlineTimestamp = 0,
  nickname,
  about,
  avatar,
}: BuildUserInfoParams): UserInfo => {
  return {
    registerDate: formatDate(registerTimestamp),
    lastOnlineDate: formatDate(lastOnlineTimestamp),
    isOnline: isToday(lastOnlineTimestamp),
    nickname,
    about,
    avatar,
  }
}
