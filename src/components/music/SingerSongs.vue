<template>
  <div class="singer-songs mb80">
    <scroll-bgc-opacity rgb="81,87,103" :step="120">
      <mt-header title="歌单列表" fixed>
        <span slot="left" @click="$router.go(-1)">
          <mt-button icon="back">返回</mt-button>
        </span>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </scroll-bgc-opacity>
    <div class="music-my-img">
      <!--<img :src="songs[0].al.picUrl">-->
      <img :src="singer.picUrl">
      <div class="music-my-text">
        <div>{{singer.name}}</div>
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
export default {
  name: 'singer-songs',
  data () {
    return {
      songs: [],
      singer: {}
    }
  },
  created: function () {
    const self = this
    const axios = self.$axios
    const id = this.$route.query.id
    axios.all([
      axios.get('/api/cloudmusic/?type=artist&id=' + id)
      // axios.get('/api/cloudmusic/?type=search&search_type=100&s=' + id)
    ]).then(axios.spread((res1) => {
      this.songs = res1.data.hotSongs
      this.singer = res1.data.artist
      // this.singer = res2.data.result.artists[0]
      // console.log(res1.data)
    })).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
  .singer-songs {
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
