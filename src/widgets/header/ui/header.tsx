import Link from 'next/link'

import { SearchAnime } from '@/features/search-anime'
import { SwitchTheme } from '@/features/switch-theme'
import { Button, Container } from '@/shared/ui'

import { HeaderLogo } from './header-logo'

export const Header = () => {
  return (
    <header className={'border-b'}>
      <Container className={'flex items-center justify-between py-4 gap-4'}>
        <HeaderLogo />
        <SearchAnime />
        <div className={'flex items-center gap-4'}>
          <Link href={'/auth'}>
            <Button className={'cursor-pointer'}>Авторизация</Button>
          </Link>
          <SwitchTheme />
        </div>
      </Container>
    </header>
  )
}
