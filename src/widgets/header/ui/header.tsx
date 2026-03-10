'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { SearchAnime } from '@/features/search-anime'
import { SwitchTheme } from '@/features/switch-theme'
import { cn } from '@/shared/lib/utils'
import { Button, Container, NavBar } from '@/shared/ui'

import { HeaderLogo } from './header-logo'

export const Header = () => {
  const pathName = usePathname()

  const isOnAuthPage = pathName === '/auth'

  return (
    <header className={'border-b'}>
      <Container className={'flex items-center justify-between py-4 gap-4'}>
        <HeaderLogo />
        <SearchAnime />
        <NavBar />
        <div className={'flex items-center gap-4'}>
          <Link
            href={'/auth'}
            className={cn({
              'pointer-events-none': isOnAuthPage,
            })}
          >
            <Button className={cn({ 'cursor-pointer': !isOnAuthPage })} disabled={isOnAuthPage}>
              Авторизация
            </Button>
          </Link>
          <SwitchTheme />
        </div>
      </Container>
    </header>
  )
}
