import * as types from './mutation-types'
export default {
  [types.SET_PLAYING] (state, newV) {
    state.playing = newV
  },
  [types.SET_CURRENT_INDEX] (state, newV) {
    state.currentIndex = newV
  },
  [types.SET_SONG_LIST] (state, newV) {
    state.songList = newV
  }

}
