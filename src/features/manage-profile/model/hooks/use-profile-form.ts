import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useMe } from '@/entities/user'
import { useChangeUserNickname, useChangeProfile } from '@/features/manage-profile/api'

import { changeProfileSchema } from '../change-profile-schema'

import type { ChangeProfileFormValues } from '../change-profile-schema'

export const useProfileForm = () => {
  const { data: userData } = useMe()

  const { mutate: changeUserNickname } = useChangeUserNickname()

  const { mutate: changeUserInfo } = useChangeProfile()

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, dirtyFields },
  } = useForm<ChangeProfileFormValues>({
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

  const handleProfileUpdate = (data: ChangeProfileFormValues) => {
    const id = userData?.response.id

    if (!id) {
      return
    }

    if (dirtyFields.nickname) {
      changeUserNickname({ id, nickname: data.nickname ?? '' })
    }

    if (dirtyFields.about) {
      changeUserInfo({ about: data.about ?? '' })
    }
  }

  return {
    control,
    errors,
    handleSubmit,
    handleProfileUpdate,
  }
}
