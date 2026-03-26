'use client'

import { useMemo } from 'react'
import { useMe } from '@/entities/user'
import { buildUserInfo } from '../lib'

export const useUserInfo = () => {
  const { data: userData } = useMe()
  const user = userData?.response

  return useMemo(
    () =>
      buildUserInfo({
        registerTimestamp: user?.register_date,
        lastOnlineTimestamp: user?.last_online,
        nickname: user?.nickname,
        about: user?.about,
        avatar: user?.avatars.big,
      }),
    [user]
  )
}
