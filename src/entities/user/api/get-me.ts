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
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60 * 24,
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  })
}
