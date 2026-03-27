import { useAnimeBySeason } from '@/entities/anime'

import { getHomeSeasonMeta } from '@/pages/home/model'
import { HomeSection } from '../home-section'
import { SeasonItems } from './season-items'

export const SeasonList = () => {
  const { season, href, title } = getHomeSeasonMeta()
  const { data, isLoading } = useAnimeBySeason({ season })

  const anime = data?.response ?? []

  return (
    <HomeSection href={href} title={title}>
      <SeasonItems anime={anime} isLoading={isLoading} />
    </HomeSection>
  )
}
