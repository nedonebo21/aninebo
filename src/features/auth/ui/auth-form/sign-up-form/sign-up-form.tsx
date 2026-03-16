'use client'

import HCaptcha from '@hcaptcha/react-hcaptcha'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { signUpSchema } from '@/features/auth/model'
import { ControlledInput } from '@/shared/forms'
import { Button } from '@/shared/ui'

import type { SignUpFormValues } from '@/features/auth/model'
import type { ComponentProps } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useRegister } from '@/features/auth/api'

type SignUpFormProps = Omit<ComponentProps<'form'>, 'onSubmit'> & {
  onSubmit?: SubmitHandler<SignUpFormValues>
}
export const SignUpForm = ({ onSubmit: onSubmitFormProps, ...rest }: SignUpFormProps) => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const captchaRef = useRef<HCaptcha>(null)

  const router = useRouter()

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

  const { mutate: registerUser } = useRegister()

  const onSubmit: typeof onSubmitFormProps = (data, e) => {
    if (onSubmitFormProps) {
      onSubmitFormProps(data)
      return
    }

    if (!captchaToken) {
      toast.error('Пройдите капчу')
      return
    }

    registerUser(
      {
        email: data.email,
        username: data.username,
        password: data.password,
        captchaToken,
      },
      {
        onSuccess: () => {
          router.push('/')
        },
        onError: () => {
          setCaptchaToken(null)
          captchaRef.current?.resetCaptcha()
        },
      }
    )
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
        onVerify={token => setCaptchaToken(token)}
        onExpire={() => setCaptchaToken(null)}
      />
      <Button className={'cursor-pointer mt-5 w-full'} type={'submit'}>
        Зарегистрироваться
      </Button>
    </form>
  )
}
