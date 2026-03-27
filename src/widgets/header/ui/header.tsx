'use client'

import { usePathname } from 'next/navigation'

import { SearchAnime } from '@/features/search-anime'
import { SwitchTheme } from '@/features/switch-theme'
import { Container, NavBar } from '@/shared/ui'

import { HeaderLogo } from './header-logo'
import { useMe } from '@/entities/user'
import { UserMenu } from '@/widgets/header/ui/user-menu'
import { AuthLink } from '@/widgets/header/ui/auth-link'

export const Header = () => {
  const pathName = usePathname()

  const isOnAuthPage = pathName === '/auth'

  const { data, isLoading, error } = useMe()

  const userData = data?.response
  const isAuth = !error

  return (
    <header
      className={
        'border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
      }
    >
      <Container className={'flex items-center justify-between py-4 gap-4'}>
        <HeaderLogo />
        <SearchAnime />
        <NavBar />
        <div className={'flex items-center gap-4'}>
          {!isAuth ? (
            <AuthLink isOnAuthPage={isOnAuthPage} />
          ) : (
            <UserMenu
              id={userData?.id}
              avatar={userData?.avatars.big}
              nickname={userData?.nickname}
              isLoading={isLoading}
            />
          )}
          <SwitchTheme />
        </div>
      </Container>
    </header>
  )
}
