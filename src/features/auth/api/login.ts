'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { axiosInstance } from '@/shared/api'
import toast from 'react-hot-toast'

const login = async ({
  login,
  password,
  captchaToken,
}: {
  login: string
  password: string
  captchaToken: string | null
}) => {
  return (
    await axiosInstance.post('/profile/login', {
      login,
      password,
      recaptcha_response: captchaToken,
    })
  ).data
}

export function useLogin() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: login,
    onSuccess: async data => {
      const token = data?.response?.token
      if (token) {
        localStorage.setItem('token', token)
        toast.success('Вы успешно вошли!')
        await queryClient.refetchQueries({
          queryKey: ['me'],
          type: 'active',
          exact: true,
        })
      }
    },
    onError: err => {
      console.error(err)
      toast.error('Ошибка входа')
    },
  })
}
