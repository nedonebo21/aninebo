import { Card, Container, HomeLink, Typography } from '@/shared/ui'
import { UserInfo } from './user-info'

export const ProfilePage = () => {
  return (
    <Container className={'mt-10'}>
      <HomeLink />
      <Card className={'p-4'}>
        <Typography className={'mb-4'} variant={'title'} as={'h1'}>
          Профиль
        </Typography>
        <UserInfo />
      </Card>
    </Container>
  )
}
