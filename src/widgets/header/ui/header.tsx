import { SwitchTheme } from '@/features/switch-theme'
import { Button, Container } from '@/shared/ui'

import { HeaderLogo } from './header-logo'

export const Header = () => {
  return (
    <header className={'border-b'}>
      <Container className={'flex items-center justify-between py-4'}>
        <HeaderLogo />
        <div className={'flex items-center gap-4'}>
          <Button>Авторизация</Button>
          <SwitchTheme />
        </div>
      </Container>
    </header>
  )
}
