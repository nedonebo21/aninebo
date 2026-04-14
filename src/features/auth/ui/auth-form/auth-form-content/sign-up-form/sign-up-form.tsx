'use client'

import HCaptcha from '@hcaptcha/react-hcaptcha'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { signUpSchema, useCaptcha, useAuthForm } from '@/features/auth/model'
import { ControlledInput } from '@/shared/forms'
import { Button } from '@/shared/ui'

import type { SignUpFormValues } from '@/features/auth/model'
import type { ComponentProps } from 'react'
import type { SubmitHandler } from 'react-hook-form'

type SignUpFormProps = Omit<ComponentProps<'form'>, 'onSubmit'> & {
  onSubmit?: SubmitHandler<SignUpFormValues>
}

export const SignUpForm = ({ onSubmit: onSubmitFormProps, ...rest }: SignUpFormProps) => {
  const { captchaToken, captchaRef, handleVerify, handleExpire, resetCaptcha, validateCaptcha } =
    useCaptcha()

  const { handleSignUp } = useAuthForm()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      username: '',
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

    handleSignUp(data, {
      captchaToken,
      onCaptchaError: resetCaptcha,
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...rest} noValidate>
      <div className={'flex flex-col gap-2 mb-5'}>
        <ControlledInput
          label={'Email'}
          name={'email'}
          errorMessage={errors.email?.message}
          control={control}
        />
        <ControlledInput
          label={'Никнейм'}
          name={'username'}
          errorMessage={errors.username?.message}
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
        Зарегистрироваться
      </Button>
    </form>
  )
}
