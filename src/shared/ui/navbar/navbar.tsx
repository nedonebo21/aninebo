'use client'

import Link from 'next/link'
import * as React from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/shared/ui/shadcn'

const animeMenu: { title: string; href: string }[] = [
  {
    title: 'Каталог',
    href: '/catalog',
  },
  {
    title: 'Онгоинги',
    href: '/ongoings',
  },
  {
    title: 'Анонсы',
    href: '/anons',
  },
]

export const NavBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className={'hidden md:flex'}>
          <NavigationMenuTrigger>Аниме</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={'flex flex-col'}>
              {animeMenu.map(anime => (
                <ListItem key={anime.title} title={anime.title} href={anime.href} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href={'/top'}>Топ 100</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props} className={'p-4 hover:bg-green-600 transition-all'}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className={'flex flex-col gap-1 text-sm'}>
            <div className={'leading-none font-medium'}>{title}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
