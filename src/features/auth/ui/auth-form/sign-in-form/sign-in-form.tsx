import HCaptcha from '@hcaptcha/react-hcaptcha'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { ComponentProps, useRef } from 'react'
import { useState } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import type { SignInFormValues } from '@/features/auth/model'
import { signInSchema } from '@/features/auth/model'
import { ControlledInput } from '@/shared/forms'
import { Button } from '@/shared/ui'
import { useLogin } from '@/features/auth/api'
import { useQueryClient } from '@tanstack/react-query'

type SignInFormProps = Omit<ComponentProps<'form'>, 'onSubmit'> & {
  onSubmit?: SubmitHandler<SignInFormValues>
}
export const SignInForm = ({ onSubmit: onSubmitFormProps, ...rest }: SignInFormProps) => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const captchaRef = useRef<HCaptcha>(null)
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

  const { mutate: loginUser } = useLogin()
  const queryClient = useQueryClient()

  const onSubmit: typeof onSubmitFormProps = (data, e) => {
    if (onSubmitFormProps) {
      onSubmitFormProps(data)
      return
    }

    if (!captchaToken) {
      toast.error('Пройдите капчу')
      return
    }

    loginUser(
      {
        login: data.login,
        password: data.password,
        captchaToken,
      },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({ queryKey: ['me'] })
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
        onVerify={token => setCaptchaToken(token)}
        onExpire={() => setCaptchaToken(null)}
      />
      <Button className={'cursor-pointer mt-5 w-full'} type={'submit'}>
        Войти
      </Button>
    </form>
  )
}
