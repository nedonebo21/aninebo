import HCaptcha from '@hcaptcha/react-hcaptcha'
import { zodResolver } from '@hookform/resolvers/zod'
import type { ComponentProps } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import type { SignInFormValues } from '@/features/auth/model'
import { signInSchema } from '@/features/auth/model'
import { ControlledInput } from '@/shared/forms'
import { Button } from '@/shared/ui'
import { useCaptcha, useAuthForm } from '@/features/auth/model'

type SignInFormProps = Omit<ComponentProps<'form'>, 'onSubmit'> & {
  onSubmit?: SubmitHandler<SignInFormValues>
}

export const SignInForm = ({ onSubmit: onSubmitFormProps, ...rest }: SignInFormProps) => {
  const { captchaToken, captchaRef, handleVerify, handleExpire, resetCaptcha, validateCaptcha } =
    useCaptcha()
  const { handleSignIn } = useAuthForm()

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

  const onSubmit: typeof onSubmitFormProps = (data, e) => {
    if (onSubmitFormProps) {
      onSubmitFormProps(data, e)
      return
    }

    if (!validateCaptcha()) {
      return
    }

    handleSignIn(data, {
      captchaToken,
      onCaptchaError: resetCaptcha,
    })
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
        ref={captchaRef}
        sitekey={process.env.NEXT_PUBLIC_SITE_KEY ?? ''}
        onVerify={handleVerify}
        onExpire={handleExpire}
      />
      <Button className={'cursor-pointer mt-5 w-full'} type={'submit'}>
        Войти
      </Button>
    </form>
  )
}
