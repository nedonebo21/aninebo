export type AnimeSeasons = {
  season: 'winter' | 'spring' | 'summer' | 'autumn'
}

export type AnimeById = {
  response: AnimeByIdResponse
}

export type AnimeVideos = {
  response: VideoResponse[]
}

type VideoResponse = {
  video_id: number
  iframe_url: string
  data: {
    dubbing: string
    player: string
    player_id: number
  }
  number: string
  date: number
  index: number
  skips: {
    ending: {
      time: number
      length: number
    }
    opening: {
      time: number
      length: number
    }
  }
  views: number
  duration: number
}

export type AnimeByIdResponse = {
  anime_id: number
  anime_status: {
    title: 'онгоинг' | 'вышел' | 'анонс'
    class: string
    alias: string
    value: number
  }
  anime_url: string
  poster: {
    small: string
    medium: string
    big: string
    huge: string
    fullsize: string
    mega: string
  }
  rating: {
    average: number
    kp_rating: number
    anidub_rating: number
    counters: number
    myanimelist_rating: number
    shikimori_rating: number
    worldart_rating: number
  }
  title: string
  type: {
    name: string
    value: number
    shortname: string
    alias: string
  }
  year: number
  description: string
  views: number
  season: number
  min_age: {
    value: number
    title: string
    title_long: string
  }
  user: {
    list: {
      is_fav: boolean
      list: {
        title: string
        href: string
        id: number
      }
    }
    rating: number
  }
  remote_ids: {
    worldart_id: number
    worldart_type: string
    kp_id: number
    anidub_id: number
    sr_id: number
    anilibria_alias: string
    shikimori_id: number
    myanimelist_id: number
  }
  top: {
    category: number
    global: number
  }
  blocked_in: string[]
  original: string
  duration: number
  other_titles: string[]
  creators: Array<{
    title: string
    id: number
    url: string
  }>
  studios: Array<{
    title: string
    id: number
    url: string
  }>
  videos: Array<{
    video_id: number
    iframe_url: string
    data: {
      dubbing: string
      player: string
      player_id: number
    }
    number: string
    date: number
    index: number
    skips: {
      ending: {
        time: number
        length: number
      }
      opening: {
        time: number
        length: number
      }
    }
    views: number
    duration: number
  }>
  genres: Array<{
    title: string
    id: number
    alias: string
    url: string
  }>
  viewing_order: Array<{
    title: string
    anime_id: number
    type: {
      name: string
      value: number
      shortname: string
      alias: string
    }
    anime_url: string
    anime_status: {
      title: string
      class: string
      alias: string
      value: number
    }
    description: string
    poster: {
      small: string
      medium: string
      big: string
      huge: string
      fullsize: string
      mega: string
    }
    user: {
      list: {
        list: {
          title: string
          href: string
          id: number
        }
        is_fav: boolean
      }
      rating: number
    }
    year: number
    data: {
      id: number
      index: number
      text: string
    }
  }>
  translates: Array<{
    title: string
    href: string
    value: number
  }>
  episodes: {
    aired: number
    count: number
    next_date: number
    prev_date: number
  }
  comments_count: number
  reviews_count: number
  random_screenshots: Array<{
    sizes: {
      small: string
      full: string
    }
    id: number
    time: number
    episode: string
  }>
  posts_count: number
  partner_videos_count: number
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
