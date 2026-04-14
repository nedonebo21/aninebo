import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { axiosInstance } from '@/shared/api'

const changeUserNickname = async ({ id, nickname }: { id: number; nickname?: string }) => {
  return (
    await axiosInstance.patch(`/users/${id}`, {
      nickname,
    })
  ).data
}

export function useChangeUserNickname() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: changeUserNickname,
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
