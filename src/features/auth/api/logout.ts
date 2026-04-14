import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { axiosInstance } from '@/shared/api'

const logout = async () => {
  try {
    return (await axiosInstance.post('/profile/logout')).data
  } catch {
    return { response: true }
  }
}

export function useLogout() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      localStorage.removeItem('token')
      queryClient.setQueryData(['me'], null)
      queryClient.removeQueries({ queryKey: ['me'] })
      toast.success('Вы вышли из аккаунта')
    },
    onError: err => {
      console.error(err)
      toast.error('Не удалось выйти из аккаунта')
    },
  })
}
