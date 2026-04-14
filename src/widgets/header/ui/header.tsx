'use client'

import { useMe } from '@/entities/user'
import { SearchAnime } from '@/features/search-anime'
import { SwitchTheme } from '@/features/switch-theme'
import { Container, NavBar } from '@/shared/ui'
import { AuthLink } from '@/widgets/header/ui/auth-link'
import { UserMenu } from '@/widgets/header/ui/user-menu'

import { HeaderLogo } from './header-logo'

export const Header = () => {
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
          {isAuth ? (
            <UserMenu
              id={userData?.id}
              avatar={userData?.avatars.big}
              nickname={userData?.nickname}
              isLoading={isLoading}
            />
          ) : (
            <AuthLink />
          )}
          <SwitchTheme />
        </div>
      </Container>
    </header>
  )
}
