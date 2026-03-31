import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  UserAvatarSkeleton,
} from '@/shared/ui'
import Link from 'next/link'
import { LogoutButton } from '@/features/auth'

type UserMenuProps = {
  id?: number
  avatar?: string
  nickname?: string
  isLoading: boolean
}
export const UserMenu = ({ id, avatar, nickname, isLoading }: UserMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={'cursor-pointer'} variant={'ghost'} size={'icon'}>
          {isLoading ? (
            <UserAvatarSkeleton />
          ) : (
            <img className={'rounded-md'} src={avatar} alt={'avatar'} />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup className={'grid gap-1'}>
          <DropdownMenuLabel>{nickname}</DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <Link className={'cursor-pointer'} href={`/profile/${id}`}>
              Профиль
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
