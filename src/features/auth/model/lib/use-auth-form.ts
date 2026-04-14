import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { useLogin, useRegister } from '@/features/auth/api'

import type { SignInFormValues, SignUpFormValues } from '@/features/auth/model'

type AuthFormOptions = {
  captchaToken: string | null
  onCaptchaError?: () => void
}

export const useAuthForm = () => {
  const router = useRouter()

  const queryClient = useQueryClient()

  const { mutate: loginUser } = useLogin()

  const { mutate: registerUser } = useRegister()

  const handleSignIn = (data: SignInFormValues, options?: AuthFormOptions) => {
    loginUser(
      {
        login: data.login,
        password: data.password,
        captchaToken: options?.captchaToken ?? null,
      },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({ queryKey: ['me'] })
          router.push('/')
        },
        onError: () => {
          options?.onCaptchaError?.()
        },
      }
    )
  }

  const handleSignUp = (data: SignUpFormValues, options?: AuthFormOptions) => {
    registerUser(
      {
        email: data.email,
        username: data.username,
        password: data.password,
        captchaToken: options?.captchaToken ?? null,
      },
      {
        onSuccess: () => {
          router.push('/')
        },
        onError: () => {
          options?.onCaptchaError?.()
        },
      }
    )
  }

  return {
    handleSignIn,
    handleSignUp,
  }
}
