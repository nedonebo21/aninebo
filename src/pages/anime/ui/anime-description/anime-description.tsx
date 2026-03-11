import { Typography } from '@/shared/ui'

type AnimeDescriptionProps = {
  description?: string
}
export const AnimeDescription = ({ description }: AnimeDescriptionProps) => {
  return (
    <div className={'w-full mt-5'}>
      <Typography as={'h3'}>Описание</Typography>
      <div className={'mt-2'}>
        <Typography className={'text-gray-400'}>{description}</Typography>
      </div>
    </div>
  )
}
