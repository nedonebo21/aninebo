'use client'

import { Button } from '@/shared/ui'
import { useLogout } from '@/features/auth/api'
import { useRouter } from 'next/navigation'

export const LogoutButton = () => {
  const router = useRouter()
  const { mutate: logout } = useLogout()

  const onLogout = () => {
    logout()
    router.push('/')
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
