export type UserProfile = {
  response: UserProfileResponse
}

type UserProfileResponse = {
  id: number
  nickname: string
  about: string
  banned: boolean
  ids: {
    shikimori?: {
      id: number
      nickname: string
    }
    vk?: number
    tg_nickname?: string
  }
  avatars: {
    big: string
    full: string
    small: string
  }
  bdate: number
  last_online: number
  sex: number
  roles: string[]
  register_date: number
  texts: {
    color: number
    left: string
    right: string
  }
  banner: {
    cropped: string
    full: string
  }
  lists_privacy: string
  privacy: {
    shiki_public: boolean
    tg_public: boolean
    vk_public: boolean
    discord_public: boolean
  }
  notifications: {
    vk: boolean
    telegram: boolean
    count: number
  }
  messages: {
    unread_count: number
  }
}
