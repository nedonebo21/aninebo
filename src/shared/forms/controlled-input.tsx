'use client'

import { useController } from 'react-hook-form'

import { ClearButton, Input } from '@/shared/ui'

import type { Control, FieldValues, UseControllerProps } from 'react-hook-form'

type ControlledInputProps<T extends FieldValues> = {
  label?: string
  required?: boolean
  className?: string
  placeholder?: string
  errorMessage?: string
  control: Control<T>
} & Omit<UseControllerProps<T>, 'control'>

export const ControlledInput = <T extends FieldValues>({
  label,
  required,
  className,
  errorMessage,
  name,
  rules,
  control,
  ...rest
}: ControlledInputProps<T>) => {
  const {
    field: { onChange, onBlur, value },
  } = useController({
    name,
    rules,
    control,
    ...rest,
  })

  const handleClear = () => {
    onChange('')
  }

  const isError = !!errorMessage

  const isClearable = !!value

  return (
    <label className={className}>
      {label && (
        <p className={'flex gap-1 text-sm font-medium mb-1'}>
          {label}
          {required && <div className={'text-red-500'}>*</div>}
        </p>
      )}
      <div className={'relative'}>
        <Input className={'h-10 text-md'} {...{ ...rest, value, onChange, onBlur, id: name }} />
        {isClearable && <ClearButton onClick={handleClear} />}
      </div>
      {isError && <p className={'text-sm mt-2 text-red-500'}>{errorMessage}</p>}
    </label>
  )
}
