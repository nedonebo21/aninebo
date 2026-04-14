'use client'

import { useQuery } from '@tanstack/react-query'

import { axiosInstance } from '@/shared/api'

import type { UserProfile } from '@/entities/user/model/types'

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
