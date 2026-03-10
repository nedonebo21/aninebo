'use client'

import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'react-hot-toast'

import { QueryProvider } from './query-provider'
import { ThemeProvider } from './theme-provider'

import type { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <QueryProvider>
        <ThemeProvider
          attribute={'class'}
          defaultTheme={'system'}
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </QueryProvider>
      <Toaster />
      <NextTopLoader />
    </>
  )
}
