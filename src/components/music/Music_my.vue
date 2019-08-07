<template>
  <div class="music-my">
    <scroll-bgc-opacity rgb="81,87,103" :step="200">
      <mt-header title="我的音乐" fixed>
        <span @click="$router.go(-1)" slot="left">
          <mt-button icon="back">返回</mt-button>
        </span>
      </mt-header>
    </scroll-bgc-opacity>
    <div class="music-my-img">
      <!--<img :src="songs[0].al.picUrl">-->
      <img :src="imgUrl">
      <div class="music-my-text">
        <div>我的音乐</div>
      </div>
    </div>
    <div>
      <song
        v-for="song in songs"
        :key="song.id"
        :id="song.id"
        :name="song.name"
        :album="song.al.name"
        :singer="song.ar[0].name"
      ></song>
    </div>
  </div>
</template>

<script>
import {getPlaylist} from 'common/api/music'

export default {
  name: 'music_my',
  data () {
    return {
      songs: [],
      imgUrl: ''
    }
  },
  methods: {
    getMyList () {
      const id = this.$route.query.id
      getPlaylist(id).then((res) => {
        // console.log(res.data)
        this.songs = res.data.playlist.tracks
        this.imgUrl = res.data.playlist.coverImgUrl
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  created: function () {
    this.getMyList()
  }
}
</script>

<style scoped>
  .music-my {
    margin-bottom: 50px;
  }
  .music-my-img {
    padding: 70px 0 50px 20px;
    background-color: rgba(81,87,103,.8);
  }
  .music-my-img img {
    width: 120px;
    height: 120px;
  }
  .music-my-text {
    display: inline-block;
    margin-left: 20px;
    vertical-align: top;
    color: #fff;
    font-size: 18px;
    letter-spacing: 1px;
  }

</style>
