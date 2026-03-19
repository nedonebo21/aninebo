import { Typography } from '@/shared/ui'

type UserDetailsProps = {
  registerDate: string
  nickname?: string
  about?: string
}
export const UserDetails = ({ registerDate, nickname, about }: UserDetailsProps) => {
  return (
    <div className={'flex flex-col gap-2'}>
      <div className={'flex gap-1'}>
        <Typography className={'text-gray-400'}>Дата регистрации:</Typography>
        <Typography>{registerDate}</Typography>
      </div>
      <div className={'flex gap-1 items-center'}>
        <Typography className={'text-gray-400'}>Никнейм:</Typography>
        <Typography>{nickname}</Typography>
      </div>
      <div className={'flex flex-col gap-1'}>
        <Typography className={'text-gray-400'}>Описание:</Typography>
        <Typography>{about || 'Вы ещё не добавили описание.'}</Typography>
      </div>
    </div>
  )
}
