import { AuthForm } from '@/features/auth'
import { Container } from '@/shared/ui'

export const AuthPage = () => {
  return (
    <Container className={'mt-10 max-w-[600px]'}>
      <AuthForm />
    </Container>
  )
}
