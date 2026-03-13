import { EpisodeItem } from '@/pages/anime/ui/anime-video-section/episodes/episode-item/episode-item'
import { EpisodeTabs } from '@/pages/anime/ui/anime-video-section/episodes/episode-tabs'

import type { VideoResponse } from '@/entities/anime/model/types'

type EpisodesProps = {
  filteredVideos: VideoResponse[]
  currentActiveEpisode: string
  setActiveEpisode: (episode: string) => void
}
export const Episodes = ({
  filteredVideos,
  currentActiveEpisode,
  setActiveEpisode,
}: EpisodesProps) => {
  const selectedVideo = filteredVideos.find(v => v.number === currentActiveEpisode)

  const handleActiveEpisodeSet = (episode: string) => {
    setActiveEpisode(episode)
  }

  return (
    <EpisodeTabs
      videos={filteredVideos}
      activeEpisode={currentActiveEpisode}
      setActiveEpisode={handleActiveEpisodeSet}
    >
      <EpisodeItem selectedVideo={selectedVideo} />
    </EpisodeTabs>
  )
}
