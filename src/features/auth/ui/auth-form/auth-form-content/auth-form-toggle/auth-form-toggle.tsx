import { Button, Typography } from '@/shared/ui'

type AuthFormToggleProps = {
  isLogin: boolean
  onToggle: () => void
}

export const AuthFormToggle = ({ isLogin, onToggle }: AuthFormToggleProps) => {
  return (
    <div className={'flex flex-col items-center mt-4'}>
      <Typography as={'span'}>{isLogin ? 'Нет аккаунта?' : 'Есть аккаунт?'}</Typography>
      <Button className={'cursor-pointer text-green-600'} onClick={onToggle} variant={'link'}>
        {isLogin ? 'Регистрация' : 'Войти'}
      </Button>
    </div>
  )
}
