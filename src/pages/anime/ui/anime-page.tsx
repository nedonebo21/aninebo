'use client'

import { useAnimeById } from '@/entities/anime'
import { AnimeHeader } from '@/pages/anime/ui/anime-header'
import { AnimeHeroSection } from '@/pages/anime/ui/anime-hero-section'
import { AnimeVideoSection } from '@/pages/anime/ui/anime-video-section'
import { Card, Container, HomeLink } from '@/shared/ui'

type AnimePageProps = {
  animeId: string
}

export const AnimePage = ({ animeId }: AnimePageProps) => {
  const { data } = useAnimeById(animeId)

  const anime = data?.response

  return (
    <Container className={'mt-10'}>
      <HomeLink />
      <Card className={'p-5'}>
        <AnimeHeader views={anime?.views} title={anime?.title} otherTitles={anime?.other_titles} />
        <AnimeHeroSection anime={anime} />
        <AnimeVideoSection animeId={animeId} />
      </Card>
    </Container>
  )
}
