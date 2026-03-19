import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Typography,
} from '@/shared/ui'
import { SettingsIcon } from 'lucide-react'
import { useMe } from '@/entities/user'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ChangeProfileFormValues, changeProfileSchema } from '@/features/manage-profile/model'
import { ComponentProps, useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { ControlledInput, ControlledTextarea } from '@/shared/forms'
import { useChangeUserNickname, useChangeProfile } from '@/features/manage-profile/api'

type ChangeProfileProps = Omit<ComponentProps<'form'>, 'onSubmit'> & {
  onSubmit?: SubmitHandler<ChangeProfileFormValues>
}

export const ChangeProfileInfo = ({ onSubmit: onSubmitFormProps, ...rest }: ChangeProfileProps) => {
  const { data: userData } = useMe()
  const { mutate: changeUserNickname } = useChangeUserNickname()
  const { mutate: changeUserInfo } = useChangeProfile()

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, dirtyFields },
  } = useForm({
    resolver: zodResolver(changeProfileSchema),
    defaultValues: {
      nickname: userData?.response.nickname ?? '',
      about: userData?.response.about ?? '',
    },
  })

  useEffect(() => {
    if (userData?.response) {
      reset({
        nickname: userData.response.nickname ?? '',
        about: userData.response.about ?? '',
      })
    }
  }, [userData, reset])

  const onSubmit: typeof onSubmitFormProps = (data, e) => {
    if (onSubmitFormProps) {
      onSubmitFormProps(data)
      return
    }

    const id = userData?.response.id
    if (!id) return

    if (dirtyFields.nickname) {
      changeUserNickname({ id, nickname: data.nickname ?? '' })
    }

    if (dirtyFields.about) {
      changeUserInfo({ about: data.about ?? '' })
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={'cursor-pointer w-full'}>
          <SettingsIcon width={16} height={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className={'sm:max-w-sm'}>
        <form onSubmit={handleSubmit(onSubmit)} {...rest} noValidate>
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
        </form>
      </DialogContent>
    </Dialog>
  )
}
