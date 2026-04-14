'use client'

import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { axiosInstance } from '@/shared/api'

const register = async ({
  email,
  username,
  password,
  captchaToken,
}: {
  email: string
  username: string
  password: string
  captchaToken: string | null
}) => {
  return (
    await axiosInstance.post('/users', {
      email,
      username,
      password,
      'g-recaptcha-response': captchaToken,
    })
  ).data
}

export function useRegister() {
  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      toast.success('Регистрация прошла! Проверьте ваш Email')
    },
    onError: err => {
      console.error(err)
      toast.error('Ошибка регистрации')
    },
  })
}
