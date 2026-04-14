import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { axiosInstance } from '@/shared/api'

import type { UpdateProfileRequest } from '@/features/manage-profile/model'

const changeUserInfo = async (body: UpdateProfileRequest) => {
  return (await axiosInstance.patch('/profile', body)).data
}

export function useChangeProfile() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: changeUserInfo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['me'] })
      toast.success('Данные успешно изменены')
    },
    onError: err => {
      console.error(err)
      toast.error('Ошибка смены данных')
    },
  })
}
