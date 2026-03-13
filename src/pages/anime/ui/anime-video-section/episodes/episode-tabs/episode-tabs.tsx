import { memo } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'

import type { VideoResponse } from '@/entities/anime/model/types'
import type { ReactNode } from 'react'

type EpisodeTabsProps = {
  videos: VideoResponse[]
  activeEpisode: string
  setActiveEpisode: (episode: string) => void
  children: ReactNode
}
export const EpisodeTabs = memo(
  ({ videos, activeEpisode, setActiveEpisode, children }: EpisodeTabsProps) => {
    const handleActiveEpisodeSet = (episode: string) => {
      setActiveEpisode(episode)
    }

    console.log(videos)

    return (
      <Tabs className={'w-full'} value={activeEpisode} onValueChange={handleActiveEpisodeSet}>
        <TabsList className={'mb-6 flex flex-wrap justify-start gap-2 bg-transparent p-0 h-auto'}>
          {videos.map(video => (
            <TabsTrigger
              key={video.video_id}
              value={video.number}
              className={
                'rounded-none border-b-2 cursor-pointer hover:border-primary border-input data-[state=active]:border-green-600 data-[state=active]:shadow-none data-[state=active]:bg-transparent px-4 py-2'
              }
            >
              {video.number}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={activeEpisode} className={'mt-0 focus-visible:outline-none'}>
          {children}
        </TabsContent>
      </Tabs>
    )
  }
)

EpisodeTabs.displayName = 'EpisodeTabs'
