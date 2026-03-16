import { axiosInstance } from '@/shared/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

const logout = async () => {
  return (await axiosInstance.post('/profile/logout')).data
}

export function useLogout() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: logout,
    onMutate: () => {
      localStorage.removeItem('token')
    },
    onSuccess: () => {
      queryClient.clear()
      toast.success('Вы вышли из аккаунта')
    },
    onError: err => {
      console.error(err)
      toast.error('Не удалось выйти из аккаунта')
    },
  })
}
