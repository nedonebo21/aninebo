import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/shared/lib/utils'

type HomeLinkProps = {
  className?: string
}

export const HomeLink = ({ className }: HomeLinkProps) => {
  return (
    <Link
      className={cn(
        'inline-flex items-center gap-1 text-base hover:text-green-600 mb-2 ml-2 transition-all',
        className
      )}
      href={'/'}
    >
      На главную <ChevronRight width={14} height={14} />
    </Link>
  )
}
