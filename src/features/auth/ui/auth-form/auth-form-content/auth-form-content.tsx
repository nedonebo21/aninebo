import { Card, Typography } from '@/shared/ui'

import { AuthFormToggle } from './auth-form-toggle'
import { SignInForm } from './sign-in-form'
import { SignUpForm } from './sign-up-form'

type AuthFormContentProps = {
  isLogin: boolean
  onToggle: () => void
}

export const AuthFormContent = ({ isLogin, onToggle }: AuthFormContentProps) => {
  return (
    <>
      <Typography as={'h1'} className={'mb-2'}>
        {isLogin ? 'Вход' : 'Регистрация'}
      </Typography>
      <Card className={'p-5'}>
        {isLogin ? <SignInForm /> : <SignUpForm />}
        <AuthFormToggle isLogin={isLogin} onToggle={onToggle} />
      </Card>
    </>
  )
}
