'use client'

import { axiosInstance } from '@/shared/api'
import { UserProfile } from '@/entities/user/model/types'
import { useQuery } from '@tanstack/react-query'

const getMe = async (): Promise<UserProfile> => {
  return (await axiosInstance.get<UserProfile>('/profile')).data
}

export function useMe() {
  return useQuery<UserProfile>({
    queryKey: ['me'],
    queryFn: getMe,
    retry: false,
    staleTime: 0,
  })
}
