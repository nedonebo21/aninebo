import { Suspense } from 'react'

import { Header } from '@/widgets/header'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'AniNebo | Главная',
  description: 'Aninebo is Anime-Hosting by nedonebo21',
}

export default function HomeLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <main className={'min-h-screen'}>
      <Suspense>
        <Header />
      </Suspense>
      {children}
    </main>
  )
}
