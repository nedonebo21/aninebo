import { cn } from '@/shared/lib/utils'
import { Typography } from '@/shared/ui'

type StatusProps = {
  status?: 'анонс' | 'вышел' | 'онгоинг'
}
export const Status = ({ status }: StatusProps) => {
  const finished = status === 'вышел'

  const ongoing = status === 'онгоинг'

  const anons = status === 'анонс'

  return (
    <div>
      <Typography as={'span'} variant={'bodyNormal'}>
        Статус:{' '}
      </Typography>
      <Typography
        as={'span'}
        className={cn('px-1 rounded-sm', {
          'bg-green-600': finished,
          'bg-red-600': anons,
          'bg-yellow-600': ongoing,
        })}
      >
        {status}
      </Typography>
    </div>
  )
}
