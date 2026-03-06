export type SearchAnime = {
  response: SearchAnimeResponse[]
}

export type SearchAnimeResponse = {
  anime_id: number
  anime_status: {
    title: string
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
    counters: number
    average: number
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
    worldart_id?: number
    worldart_type?: string
    kp_id?: number
    anidub_id?: number
    sr_id?: number
    anilibria_alias?: string
    shikimori_id?: number
    myanimelist_id?: number
  }
  top: {
    global: number
    category: number
  }
  blocked_in: string[]
}
