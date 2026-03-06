export type AnimeSeasons = {
  season: 'winter' | 'spring' | 'summer' | 'autumn'
}

export type AnimeOngoings = {
  response: AnimeOngoingsResponse[]
}

export type AnimeOngoingsResponse = {
  title: string
  description: string
  poster: {
    small: string
    medium: string
    big: string
    huge: string
    fullsize: string
    mega: string
  }
  anime_url: string
  anime_id: number
  episodes: {
    aired: number
    count: number
    next_date?: number
    prev_date?: number
  }
}

export type AnimeBySeasonResponse = {
  response: Anime[]
}

export type Anime = {
  anime_id: number
  anime_status: AnimeStatus
  anime_url: string
  poster: Poster
  rating: Rating
  title: string
  type: AnimeType
  year: number
  description: string
  views: number
  season: number
  min_age: MinAge
  user: User
  remote_ids: RemoteIds
  top: Top
  blocked_in: string[]
}

type AnimeStatus = {
  title: string
  class: string
  alias: string
  value: number
}

type Poster = {
  small: string
  medium: string
  big: string
  huge: string
  fullsize: string
  mega: string
}

type Rating = {
  counters: number
  average: number
}

type AnimeType = {
  name: string
  value: number
  shortname: string
  alias: string
}

type MinAge = {
  value: number
  title: string
  title_long: string
}

type User = {
  list: UserList
  rating: number
}

type UserList = {
  is_fav: boolean
  list: {
    title: string
    href: string
    id: number
  }
}

type RemoteIds = {
  worldart_id: number
  worldart_type: string
  kp_id: number
  anidub_id: number
  sr_id: number
  anilibria_alias: string
  shikimori_id: number
  myanimelist_id: number
}

type Top = {
  global: number
  category: number
}
