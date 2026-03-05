'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useRecommendedReleases } from '@/entities/anime/api/get-recommended-releases'
import { Card } from '@/shared/ui'

export const ReleaseItems = () => {
  const { data: releases, isLoading, error } = useRecommendedReleases()

  const truncate = (text: string, maxLength: number = 20) => {
    if (!text) {
      return ''
    }

    if (text.length <= maxLength) {
      return text
    }

    return text.slice(0, maxLength - 3) + '...'
  }

  return (
    <>
      <h1 className={'mb-2 ml-2'}>Рекомендованные релизы:</h1>
      <div className={'flex items-center justify-center gap-2'}>
        {releases?.map(release => (
          <div
            key={release.id}
            className={
              'flex-shrink-0 w-[190px] rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow bg-secondary'
            }
          >
            <Link href={`/anime/${release.id}`}>
              <div>
                <img
                  className={'w-full h-[220px]'}
                  src={`https://anilibria.tv${release.poster.preview}`}
                  alt={'releaseLogo'}
                />
              </div>
              <div className={'flex flex-col p-1'}>
                <strong className={'text-sm'}>{truncate(release.name.main)}</strong>
                <span className={'text-sm'}>
                  Эпизоды: <strong>{release.episodes_total ?? '--'}</strong>
                </span>
                <span className={'text-gray-400 text-[12px] mt-2'}>{release.type.value}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
