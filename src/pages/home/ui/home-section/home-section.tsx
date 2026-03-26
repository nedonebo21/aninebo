import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'

import { Typography } from '@/shared/ui'

type HomeSectionProps = {
  children: ReactNode
  href: string
  title: string
}

export const HomeSection = ({ children, href, title }: HomeSectionProps) => {
  return (
    <section>
      <Link
        href={href}
        className={
          'mb-2 ml-2 inline-flex items-center gap-1 text-base transition-all hover:text-green-600'
        }
      >
        <Typography as={'span'}>{title}</Typography>
        <ChevronRight height={14} width={14} />
      </Link>
      {children}
    </section>
  )
}
