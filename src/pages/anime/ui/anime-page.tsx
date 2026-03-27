'use client'

import { AnimeHeader } from '@/pages/anime/ui/anime-header'
import { AnimeHeroSection } from '@/pages/anime/ui/anime-hero-section'
import { AnimeVideoSection } from '@/pages/anime/ui/anime-video-section'
import { Card, Container, HomeLink } from '@/shared/ui'

import { useAnimeByIdData } from '@/entities/anime'

type AnimePageProps = {
  animeId: string
}

export const AnimePage = ({ animeId }: AnimePageProps) => {
  const { anime, isLoading } = useAnimeByIdData(animeId)

  return (
    <Container className={'mt-10'}>
      <HomeLink />
      <Card className={'p-5'}>
        <AnimeHeader
          views={anime?.views}
          title={anime?.title}
          otherTitles={anime?.other_titles}
          isLoading={isLoading}
        />
        <AnimeHeroSection anime={anime} isLoading={isLoading} />
        <AnimeVideoSection animeId={animeId} />
      </Card>
    </Container>
  )
}
