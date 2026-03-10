'use client'

import { useState } from 'react'

import { SignInForm } from '@/features/auth/ui/sign-in-form'
import { SignUpForm } from '@/features/auth/ui/sign-up-form'
import { Button, Card } from '@/shared/ui'

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false)

  return !isLogin ? (
    <>
      <h1 className={'mb-2'}>Регистрация</h1>
      <Card className={'p-5'}>
        <SignUpForm />
        <div className={'flex flex-col items-center mt-2'}>
          <span>Есть аккаунт?</span>
          <Button
            className={'cursor-pointer text-green-600'}
            onClick={() => setIsLogin(true)}
            variant={'link'}
          >
            Войти
          </Button>
        </div>
      </Card>
    </>
  ) : (
    <>
      <h1 className={'mb-2'}>Вход</h1>
      <Card className={'p-5'}>
        <SignInForm />
        <div className={'flex flex-col items-center mt-2'}>
          <span>Нет аккаунта?</span>
          <Button
            className={'cursor-pointer text-green-600'}
            onClick={() => setIsLogin(false)}
            variant={'link'}
          >
            Регистрация
          </Button>
        </div>
      </Card>
    </>
  )
}
