import { useAnimeBySeason } from '@/entities/anime'
import { SectionLink } from '@/shared/ui'

import { getHomeSeasonMeta } from '@/pages/home/model'
import { SeasonItems } from './season-items'

export const SeasonList = () => {
  const { season, href, title } = getHomeSeasonMeta()
  const { data, isLoading } = useAnimeBySeason({ season })

  const anime = data?.response ?? []

  return (
    <SectionLink href={href} title={title}>
      <SeasonItems anime={anime} isLoading={isLoading} />
    </SectionLink>
  )
}
