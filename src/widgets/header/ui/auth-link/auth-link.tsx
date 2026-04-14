import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui'

export const AuthLink = () => {
  const pathName = usePathname()

  const isOnAuthPage = pathName === '/auth'

  return (
    <Link
      href={'/auth'}
      className={cn({
        'pointer-events-none': isOnAuthPage,
      })}
    >
      <Button className={cn({ 'cursor-pointer': !isOnAuthPage })} disabled={isOnAuthPage}>
        Авторизация
      </Button>
    </Link>
  )
}
