import { EpisodeItem } from '@/pages/anime/ui/anime-video-section/episodes/episode-item/episode-item'
import { EpisodeTabs } from '@/pages/anime/ui/anime-video-section/episodes/episode-tabs'

import type { VideoResponse } from '@/entities/anime/model/types'
import type { Dispatch, SetStateAction } from 'react'

type EpisodesProps = {
  filteredVideos: VideoResponse[]
  currentActiveEpisode: string
  setActiveEpisode: Dispatch<SetStateAction<string>>
}
export const Episodes = ({
  filteredVideos,
  currentActiveEpisode,
  setActiveEpisode,
}: EpisodesProps) => {
  const selectedVideo = filteredVideos.find(v => v.number === currentActiveEpisode)

  return (
    <EpisodeTabs
      videos={filteredVideos}
      activeEpisode={currentActiveEpisode}
      setActiveEpisode={setActiveEpisode}
    >
      <EpisodeItem selectedVideo={selectedVideo} />
    </EpisodeTabs>
  )
}
