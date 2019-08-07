export const playing = state => state.playing

export const currentIndex = state => state.currentIndex

export const songList = state => state.songList

export const currentSong = state => state.songList[state.currentIndex]
