import HCaptcha from '@hcaptcha/react-hcaptcha'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { signInSchema } from '@/features/auth/model/sign-in-schema'
import { ControlledInput } from '@/shared/forms'
import { Button } from '@/shared/ui'

import type { SignInFormValues } from '@/features/auth/model/sign-in-schema'
import type { ComponentProps } from 'react'
import type { SubmitHandler } from 'react-hook-form'

type SignInFormProps = Omit<ComponentProps<'form'>, 'onSubmit'> & {
  onSubmit?: SubmitHandler<SignInFormValues>
}
export const SignInForm = ({ onSubmit: onSubmitFormProps, ...rest }: SignInFormProps) => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const router = useRouter()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      login: '',
      password: '',
    },
  })

  const onSubmit: typeof onSubmitFormProps = async (data, e) => {
    if (onSubmitFormProps) {
      await onSubmitFormProps(data)
    } else {
      try {
        console.log({ data, e, captchaToken })
        toast.success('Вы успешно вошли!')
        router.push('/')
      } catch (err) {
        console.error(err)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...rest} noValidate>
      <div className={'flex flex-col gap-2 mb-5'}>
        <ControlledInput
          label={'Логин'}
          name={'login'}
          errorMessage={errors.login?.message}
          control={control}
        />
        <ControlledInput
          label={'Пароль'}
          name={'password'}
          errorMessage={errors.password?.message}
          control={control}
        />
      </div>
      <HCaptcha
        sitekey={process.env.NEXT_PUBLIC_SITE_KEY ?? ''}
        onVerify={token => setCaptchaToken(token)}
        onExpire={() => setCaptchaToken(null)}
      />
      <Button className={'cursor-pointer mt-5 w-full'} type={'submit'}>
        Войти
      </Button>
    </form>
  )
}
