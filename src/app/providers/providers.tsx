'use client'

import NextTopLoader from 'nextjs-toploader'

import { ThemeProvider } from './theme-provider'

import type { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute={'class'}
        defaultTheme={'system'}
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      <NextTopLoader />
    </>
  )
}
