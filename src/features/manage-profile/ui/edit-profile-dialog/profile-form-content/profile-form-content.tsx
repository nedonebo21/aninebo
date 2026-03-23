import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Typography,
} from '@/shared/ui'
import { Button } from '@/shared/ui'
import { ControlledInput, ControlledTextarea } from '@/shared/forms'

type ProfileFormContentProps = {
  control: any
  errors: any
  onSubmit: () => void
}

export const ProfileFormContent = ({ control, errors, onSubmit }: ProfileFormContentProps) => {
  return (
    <>
      <DialogHeader className={'mb-4'}>
        <DialogTitle>Редактирование профиля</DialogTitle>
        <DialogDescription>
          Измените информацию в полях. Нажмите "Сохранить", чтобы применить изменения.
        </DialogDescription>
      </DialogHeader>
      <div className={'flex flex-col gap-2 mb-4'}>
        <ControlledInput
          control={control}
          errorMessage={errors.nickname?.message}
          label={'Никнейм'}
          name={'nickname'}
          placeholder={'Введите никнейм'}
        />
        <Typography variant={'warning'}>
          Смена никнейма будет доступна через час, после последнего изменения
        </Typography>
        <ControlledTextarea
          control={control}
          errorMessage={errors.about?.message}
          label={'Описание'}
          name={'about'}
          placeholder={'Введите описание'}
        />
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button className={'cursor-pointer'} variant={'outline'} type={'button'}>
            Отмена
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button className={'cursor-pointer'} type={'submit'}>
            Сохранить
          </Button>
        </DialogClose>
      </DialogFooter>
    </>
  )
}
