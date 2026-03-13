import iframeResizer from '@iframe-resizer/parent'
import { useEffect, useRef } from 'react'

import { Typography } from '@/shared/ui'

import type { VideoResponse } from '@/entities/anime/model/types'

type EpisodeItemProps = {
  selectedVideo?: VideoResponse
}
export const EpisodeItem = ({ selectedVideo }: EpisodeItemProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (iframeRef.current && selectedVideo?.iframe_url) {
      iframeResizer(
        {
          license: 'GPLv3',
          log: false,
          checkOrigin: false,
          scrolling: false,
          tolerance: 5,
          bodyMargin: 0,
          bodyPadding: 0,
          waitForLoad: true,
        },
        iframeRef.current
      )
    }
  }, [selectedVideo?.iframe_url])

  return selectedVideo ? (
    <div className={'flex justify-center'}>
      <iframe
        ref={iframeRef}
        className={'w-full min-h-[300px] rounded-md aspect-video shadow-lg'}
        src={selectedVideo.iframe_url}
        allowFullScreen
        loading={'lazy'}
      />
    </div>
  ) : (
    <Typography className={'p-6 text-muted-foreground'} variant={'bodyNormal'}>
      Серия не найдена
    </Typography>
  )
}
