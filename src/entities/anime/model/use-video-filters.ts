'use client'

import { useMemo, useState } from 'react'

import type { VideoResponse } from '@/entities/anime/model/types'

type ReturnedProps = {
  dubs: string[]
  selectedDub: string
  setSelectedDub: (dub: string) => void
  players: string[]
  selectedPlayer: string
  setSelectedPlayer: (player: string) => void
  filteredVideos: VideoResponse[]
  currentActiveEpisode: string
  setActiveEpisode: (episode: string) => void
}

export const useVideoFilters = (videos: VideoResponse[]): ReturnedProps => {
  const dubs = useMemo(() => {
    const map = new Map<string, string>()

    videos.forEach(video => {
      const dub = video.data.dubbing

      if (dub && !map.has(dub)) {
        map.set(dub, dub)
      }
    })

    return Array.from(map.values())
  }, [videos])

  const [selectedDub, setSelectedDub] = useState<string>('')

  const effectiveDub = useMemo(() => {
    if (dubs.length === 0) {
      return ''
    }

    return selectedDub && dubs.includes(selectedDub) ? selectedDub : dubs[0]
  }, [dubs, selectedDub])

  const players = useMemo(() => {
    const map = new Map<string, string>()

    const filtered = videos.filter(v => v.data.dubbing === effectiveDub)

    filtered.forEach(v => {
      const player = v.data.player

      if (player && !map.has(player)) {
        map.set(player, player)
      }
    })

    return Array.from(map.values())
  }, [videos, effectiveDub])

  const [selectedPlayer, setSelectedPlayer] = useState<string>('')

  const effectivePlayer = useMemo(() => {
    if (players.length === 0) {
      return ''
    }

    return selectedPlayer && players.includes(selectedPlayer) ? selectedPlayer : players[0]
  }, [players, selectedPlayer])

  const filteredVideos = useMemo(() => {
    let result = videos

    if (effectiveDub) {
      result = result.filter(v => v.data.dubbing === effectiveDub)
    }

    if (effectivePlayer) {
      result = result.filter(v => v.data.player === effectivePlayer)
    }

    return result
  }, [videos, effectiveDub, effectivePlayer])

  const [activeEpisode, setActiveEpisode] = useState<string>('1')

  const currentActiveEpisode = useMemo(() => {
    if (filteredVideos.length === 0) {
      return '1'
    }

    return filteredVideos.some(v => v.number === activeEpisode)
      ? activeEpisode
      : filteredVideos[0].number
  }, [filteredVideos, activeEpisode])

  return {
    dubs,
    selectedDub: effectiveDub,
    setSelectedDub,
    players,
    selectedPlayer: effectivePlayer,
    setSelectedPlayer,
    filteredVideos,
    currentActiveEpisode,
    setActiveEpisode,
  }
}
