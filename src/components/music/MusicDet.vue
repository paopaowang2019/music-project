<template>
  <div class="music-det">
    <router-view></router-view>
    <div class="player clearfix">
      <div class="song-img"><img :src="pic"></div>
      <div class="song-center">
        <div class="song-name">{{name}}</div>
        <div class="range">
          <my-range :bh="12" :ph="2" :max="duration" :val="rangeValue" @updateProgress="updateProgress"></my-range>
        </div>
      </div>
      <audio id="myAudio" :src="url" @canplay="audioCanplay" @timeupdate="audioTimeupdate" ref="myAudio">
        您的浏览器不支持此音频播放。
      </audio>
      <div class="current-play-list">
        <i class="my-icon my-bofangliebiao"></i>
      </div>
      <div class="play-controls" @click="changePlaying">
        <CircleProgress :size="32" :ratio="ratio">
          <i class="my-icon icon-playing" :class="['my-icon', playing ? 'my-zanting' : 'my-bofang']"></i>
        </CircleProgress>
      </div>
    </div>
  </div>
</template>

<script>
import TempServer from '@/tempServer'
import MyRange from '@my/myRange/MyRange'
import CircleProgress from '@my/circleProgress/CircleProgress'
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: 'music-det',
  data () {
    return {
      author: '',
      name: '',
      id: 28854182,
      album: '',
      url: '',
      pic: '',
      duration: 0,
      rangeValue: 0
    }
  },
  components: {
    MyRange,
    CircleProgress
  },
  computed: {
    ratio () {
      return this.rangeValue / this.duration
    },
    ...mapGetters([
      'playing',
      'currentSong',
      'songList'
    ])
  },
  methods: {
    changePlaying () {
      this.setPlaying(!this.playing)
    },
    audioCanplay () {
      this.playing ? this.$refs.myAudio.play() : this.$refs.myAudio.pause()
      this.duration = this.$refs.myAudio.duration
    },
    audioTimeupdate () {
      this.rangeValue = this.$refs.myAudio.currentTime
    },
    updateProgress (newV) {
      this.$refs.myAudio.currentTime = newV
    },
    updateProgressEnd () {
    },
    getSongInfo (id) {
      let axios = this.$axios
      axios.all([
        axios.get('/api/cloudmusic/?type=song&br=320000&id=' + id),
        axios.get('/api/cloudmusic/?type=detail&id=' + id)
      ]).then(axios.spread((res1, res2) => {
        const result1 = res1.data.data[0]
        const result2 = res2.data.songs[0]
        // console.log(result2)
        this.url = result1.url
        this.name = result2.name
        this.author = result2.ar[0].name
        this.album = result2.al.name
        this.pic = result2.al.picUrl
        this.$refs.myAudio.load()
      })).catch((err) => {
        console.log(err)
      })
    },
    ...mapMutations({
      setPlaying: 'SET_PLAYING'
    })
  },
  created () {
    this.getSongInfo(this.id)
    TempServer.$on('play', (id, name, album) => {
      if (this.id === id) return
      this.id = id
      this.name = name
      this.album = album
      this.getSongInfo(id)
      this.setPlaying(true)
      console.log(this.currentSong, this.songList)
    })
  },
  mounted () {
    this.$nextTick(() => {
      this.audio = this.$refs.myAudio
    })
  },
  watch: {
    playing (newV) {
      newV ? this.$refs.myAudio.play() : this.$refs.myAudio.pause()
    }
  }
}
</script>

<style scoped>
  .player {
    box-sizing: border-box;
    height: 46px;
    padding: 6px;
    background-color: rgba(255,255,255,.99);
    box-shadow: 0 0 5px 1px rgba(0,0,0,.1);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  #myAudio {
    display: none;
  }
  .song-name {
    margin-bottom: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .song-img {
    float: left;
  }
  .song-img,
  .song-img img {
    width: 34px;
    height: 34px;
  }
  .song-center {
    width: 50%;
    float: left;
    margin-left: 8px;
    font-size: 13px;
  }
  .current-play-list,
  .play-controls {
    width: 45px;
    line-height: 34px;
    float: right;
    text-align: center;
  }
  .current-play-list {
    margin-left: 8px;
  }
  .current-play-list i {
    font-size: 28px;
  }
  .play-controls i {
    font-size: 30px;
    font-weight: bold;
    color: rgba(204,12,12,.5);
  }
  .icon-playing {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate3d(-50%,0,0);
  }
  .mt-range {
    height: 20px;
  }
  .range /deep/ .mt-range-thumb {
    width: 10px;
    height: 10px;
    top: 5px;
    background-color: #cc0c0c;
  }
  .range /deep/ .mt-range-content {
    margin-right: 10px;
  }
  .range >>> .mt-range-runway {
    right: -10px;
  }
  .range >>> .mt-range-progress {
    background-color: #cc0c0c;
  }
</style>
