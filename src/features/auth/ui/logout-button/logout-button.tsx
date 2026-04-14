'use client'

import { useRouter } from 'next/navigation'

import { useLogout } from '@/features/auth/api'
import { Button } from '@/shared/ui'

export const LogoutButton = () => {
  const router = useRouter()

  const { mutate: logout } = useLogout()

  const onLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        router.push('/')
      },
    })
  }

  return (
    <Button
      onClick={onLogout}
      className={'text-left justify-start w-full cursor-pointer'}
      variant={'destructive'}
    >
      Выйти
    </Button>
  )
}
