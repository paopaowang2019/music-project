<template>
    <div class="music mb80">
      <mt-header title="音乐" :fixed="false"></mt-header>
      <mt-swipe :show-indicators="true" :auto="3000">
        <mt-swipe-item>
          <img src="../../assets/swiper/swipe1.jpg" alt="img">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../assets/swiper/swipe2.jpg" alt="img">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../assets/swiper/swipe3.jpg" alt="img">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../assets/swiper/swipe4.jpg" alt="img">
        </mt-swipe-item>
      </mt-swipe>
      <div class="tab-links">
        <music-tab-item name="我的音乐" link="MusicMy" :query="{id: myListId}">
          <i class="my-icon my-wo"></i>
        </music-tab-item>
        <music-tab-item name="推荐音乐" link="MusicRecommend">
          <i class="my-icon my-elite"></i>
        </music-tab-item>
        <music-tab-item name="搜索音乐" link="MusicRanking">
          <i class="my-icon my-sousuo1"></i>
        </music-tab-item>
      </div>
      <div class="section">
        <card-title title="推荐歌单"></card-title>
        <my-card>
          <my-card-item :col="3" v-for="(playSong, i) in playlist" :key="i">
            <router-link :to="{name: 'PlayListDet', query: {id: playSong.id}}">
              <div class="play-box-song">
                <div class="play-box-img"><img :src="playSong.coverImgUrl"></div>
                <div class="play-box-text">{{playSong.name}}</div>
              </div>
            </router-link>
          </my-card-item>
        </my-card>
      </div>
      <div class="section">
        <card-title title="热门歌手"></card-title>
        <my-card class="my-card-2">
          <my-card-item :col="3" v-for="singer in singers" :key="singer.id">
            <router-link :to="{name: 'SingerSongs', query: {id: singer.id}}">
              <div class="play-box-song">
                <div class="play-box-img"><img :src="singer.picUrl" style="width: 100px;height: 100px;"></div>
                <div class="play-box-text" style="text-align: center">{{singer.name}}</div>
              </div>
            </router-link>
          </my-card-item>
        </my-card>
      </div>
    </div>
</template>

<script>
import MusicTabItem from './MusicTabItem'
import CardTitle from './CardTitle'
// import Songs from '../../../static/songs'
import {presetPlaylist, presetSingers, myListId} from 'common/api/config'
import {getArtist, getPlaylist} from 'common/api/music'
export default {
  name: 'music',
  data () {
    return {
      myListId: myListId,
      singers: [],
      playlist: []
    }
  },
  components: {
    MusicTabItem,
    CardTitle
  },
  methods: {
    getSingers () {
      for (let i = 0; i < presetSingers.length; i++) {
        getArtist(presetSingers[i].id).then((res) => {
          // console.log(res.data.artist)
          this.singers.push(res.data.artist)
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    getHomePlaylist () {
      for (let i = 0; i < presetPlaylist.length; i++) {
        getPlaylist(presetPlaylist[i].id).then((res) => {
          // console.log(res.data.playlist)
          this.playlist.push(res.data.playlist)
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  },
  created: function () {
    this.getHomePlaylist()
    this.getSingers()
  }
}
</script>

<style scoped>
  .mint-header {
    background-color: #cc0c0c
  }
  .mint-swipe {
    height: 160px;
  }
  .mint-swipe img {
    width: 100%;
    height: 100%;
  }
  .tab-links {
    padding: 15px 0;
    display: flex;
  }
  .section {
    margin: 20px 0;
  }
  .my-card {
    background-color: #f0f0f0;
  }
  .my-card-2 {
    background-color: #fff;
  }
  .my-card-2 .play-box-img img {
    box-shadow: 0 0 5px 1px rgba(0,0,0,.1);
  }
  .my-card-item a {
    text-decoration: none;
    color: inherit;
  }
  .play-box-song {
    padding: 0 3px;
  }
  .play-box-img {
    text-align: center;
  }
  .play-box-img img {
    max-width: 100%;
  }
  .play-box-text {
    height: 50px;
    line-height: 16px;
    font-size: 12px;
    padding: 5px;
    overflow: hidden;
  }
</style>
