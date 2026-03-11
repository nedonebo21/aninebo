'use client'

import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { useAnimeOngoings } from '@/entities/anime'
import { Typography } from '@/shared/ui'

import { OngoingItems } from './ongoing-items'

export const OngoingList = () => {
  const { data } = useAnimeOngoings()

  const ongoings = data?.response.slice(1, 7) || []

  return (
    <div>
      <Link
        href={'/ongoings'}
        className={
          'inline-flex items-center gap-1 text-base hover:text-green-600 mb-2 ml-2 transition-all'
        }
      >
        <Typography as={'span'}>Онгоинги</Typography>
        <ChevronRight height={14} width={14} />
      </Link>
      <OngoingItems ongoings={ongoings} />
    </div>
  )
}
