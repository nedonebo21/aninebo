export type UpdateProfileRequest = {
  bg_color?: number
  text?: {
    right?: string
    left?: string
  }
  hide?: {
    discord?: boolean
    shiki?: boolean
    tg?: boolean
    vk?: boolean
  }
  profile_bg_img?: number
  lists_privacy?: 'public' | 'private'
  notifications?: {
    tg?: boolean
    vk?: boolean
  }
  about?: string
  bdate?: string
  sex?: number
}
