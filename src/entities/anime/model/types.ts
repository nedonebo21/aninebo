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
