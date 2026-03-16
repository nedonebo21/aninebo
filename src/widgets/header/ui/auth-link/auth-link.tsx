import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui'
import Link from 'next/link'

type AuthLinkProps = {
  isOnAuthPage: boolean
}
export const AuthLink = ({ isOnAuthPage }: AuthLinkProps) => {
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
