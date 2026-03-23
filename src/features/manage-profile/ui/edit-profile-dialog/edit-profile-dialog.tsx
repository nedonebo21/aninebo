import { Button, Dialog, DialogContent, DialogTrigger } from '@/shared/ui'
import { SettingsIcon } from 'lucide-react'
import { SubmitHandler } from 'react-hook-form'
import { ComponentProps } from 'react'

import { useProfileForm } from '@/features/manage-profile/model'
import { ProfileFormContent } from './profile-form-content'

type ChangeProfileProps = Omit<ComponentProps<'form'>, 'onSubmit'> & {
  onSubmit?: SubmitHandler<any>
}

export const EditProfileDialog = ({ onSubmit: onSubmitFormProps, ...rest }: ChangeProfileProps) => {
  const { control, errors, handleSubmit, handleProfileUpdate } = useProfileForm()

  const onSubmit: typeof onSubmitFormProps = (data, e) => {
    if (onSubmitFormProps) {
      onSubmitFormProps(data, e)
      return
    }

    handleProfileUpdate(data)
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
          <ProfileFormContent control={control} errors={errors} onSubmit={handleSubmit(onSubmit)} />
        </form>
      </DialogContent>
    </Dialog>
  )
}
