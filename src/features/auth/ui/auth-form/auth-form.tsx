'use client'

import { useState } from 'react'

import { SignInForm } from './sign-in-form'
import { SignUpForm } from './sign-up-form'
import { Button, Card, Typography } from '@/shared/ui'

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false)

  return !isLogin ? (
    <>
      <Typography as={'h1'} className={'mb-2'}>
        Регистрация
      </Typography>
      <Card className={'p-5'}>
        <SignUpForm />
        <div className={'flex flex-col items-center mt-4'}>
          <Typography as={'span'}>Есть аккаунт?</Typography>
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
      <Typography as={'h1'} className={'mb-2'}>
        Вход
      </Typography>
      <Card className={'p-5'}>
        <SignInForm />
        <div className={'flex flex-col items-center mt-4'}>
          <Typography as={'span'}>Нет аккаунта?</Typography>
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
