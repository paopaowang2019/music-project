<template>
  <transition name="slide">
    <div class="play-list-det mb80">
      <scroll-bgc-opacity rgb="81,87,103" :step="120">
        <mt-header title="歌单列表" fixed>
          <span slot="left" @click="$router.go(-1)">
            <mt-button icon="back">返回</mt-button>
          </span>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
      </scroll-bgc-opacity>
      <div class="playlist-info clearfix">
        <div class="info-img"><img :src="playlist.coverImgUrl"></div>
        <div class="info-text">
          <div class="info-name">{{playlist.name}}</div>
          <div class="info-tag">
            <span v-for="(tag, i) in playlist.tags" :key="i">{{tag}}</span>
          </div>
          <div class="info-updata-time" v-cloak>{{playlist.updateTime | dateFormat('YYYY-MM-DD') | myCurrency}}</div>
        </div>
      </div>
      <div class="playlist-songs">
        <song
          v-for="song in songs"
          :key="song.id"
          :id="song.id"
          :name="song.name"
          :album="song.al.name"
          :singer="song.ar[0].name"
          @more="moreHandler"
          @play="playSong"
        ></song>
      </div>
      <div class="song-operation">
        <my-shade :show="showOperation" @hideShade="hideShade">
          <h3 style="color: #000;">这是一段测试文字</h3>
        </my-shade>
      </div>
    </div>
  </transition>
</template>

<script>
import {getPlaylist} from 'common/api/music'
import {mapMutations} from 'vuex'

export default {
  name: 'play-list-det',
  data () {
    return {
      playlist: [],
      showOperation: false
    }
  },
  computed: {
    songs: function () {
      return this.playlist.tracks
    }
  },
  methods: {
    moreHandler (id, name, album) {
      // console.log(id, name, album)
      this.showOperation = true
    },
    hideShade () {
      this.showOperation = false
    },
    playSong (id, name, album) {
      console.log(id)
    },
    ...mapMutations({
      setSongList: 'SET_SONG_LIST'
    })
  },
  filters: {
    myCurrency: function (myInput) {
      return '更新时间：' + myInput
    }
  },
  created: function () {
    const id = this.$route.query.id
    getPlaylist(id).then((res) => {
      this.playlist = res.data.playlist
      console.log(res.data.playlist)
      for (let i = 0; i < res.data.playlist.tracks.length; i++) {
        console.log(res.data.playlist.tracks[i])
      }
      // this.setSongList()
    })
  }
}
</script>

<style scoped>
  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
  }
  .slide-enter, .slide-leave-to {
    transform: translate3d(100%,0,0);
  }
  .playlist-info {
    box-sizing: border-box;
    width: 100%;
    height: 260px;
    padding-top: 70px;
    padding-left: 30px;
    background-color: rgba(81, 87, 103, .9);
  }
  .playlist-info .info-img {
    width: 120px;
    height: 120px;
    float: left;
  }
  .playlist-info .info-text {
    /*float: left;*/
    margin: 0 30px 0 140px;
    font-size: 15px;
    color: #fff;
  }
  .info-name {
    margin-bottom: 20px;
  }
  .info-tag {
    margin-bottom: 20px;
    font-size: 12px;
  }
  .info-tag span {
    display: inline-block;
    padding: 1px 6px;
    margin-right: 5px;
    border: 1px solid #eee;
    border-radius: 5px;
  }
  .info-updata-time {
    font-size: 12px;
    color: #eee;
  }

</style>
