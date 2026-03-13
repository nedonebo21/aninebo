import { useAnimeVideos, useVideoFilters } from '@/entities/anime'
import { Episodes } from '@/pages/anime/ui/anime-video-section/episodes'
import { VideoFilters } from '@/pages/anime/ui/anime-video-section/video-filters'

type AnimeVideoSectionProps = {
  animeId: string
}

export const AnimeVideoSection = ({ animeId }: AnimeVideoSectionProps) => {
  const { data: videoData } = useAnimeVideos(animeId)

  const videos = videoData?.response ?? []

  const {
    dubs,
    selectedDub,
    setSelectedDub,
    players,
    selectedPlayer,
    setSelectedPlayer,
    filteredVideos,
    currentActiveEpisode,
    setActiveEpisode,
  } = useVideoFilters(videos)

  return (
    <div className={'mt-5'}>
      <VideoFilters
        dubs={dubs}
        players={players}
        selectedPlayer={selectedPlayer}
        selectedDub={selectedDub}
        setSelectedPlayer={setSelectedPlayer}
        setSelectedDub={setSelectedDub}
      />
      <Episodes
        filteredVideos={filteredVideos}
        currentActiveEpisode={currentActiveEpisode}
        setActiveEpisode={setActiveEpisode}
      />
    </div>
  )
}
