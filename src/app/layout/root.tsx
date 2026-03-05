import { Nunito } from 'next/font/google'

import { Providers } from '@/app/providers'

import '@/shared/styles/globals.css'
import type { ReactNode } from 'react'

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang={'en'} suppressHydrationWarning>
      <body className={nunito.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
