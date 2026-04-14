'use client'

import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'react-hot-toast'

import { TooltipProvider } from '@/shared/ui'

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
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </QueryProvider>
      <Toaster />
      <NextTopLoader />
    </>
  )
}
