import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/shared/ui'
import Link from 'next/link'
import { LogoutButton } from '@/features/auth'

type UserMenuProps = {
  id?: number
  avatar?: string
  nickname?: string
}
export const UserMenu = ({ id, avatar, nickname }: UserMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} size={'icon'}>
          <img className={'rounded-md'} src={avatar} alt={'avatar'} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup className={'grid gap-1'}>
          <DropdownMenuLabel>{nickname}</DropdownMenuLabel>
          <DropdownMenuItem>
            <Link href={`/profile/${id}`}>Профиль</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
