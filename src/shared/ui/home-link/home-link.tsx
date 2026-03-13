import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export const HomeLink = () => {
  return (
    <Link
      className={
        'inline-flex items-center gap-1 text-base hover:text-green-600 mb-2 ml-2 transition-all'
      }
      href={'/'}
    >
      На главную <ChevronRight width={14} height={14} />
    </Link>
  )
}
