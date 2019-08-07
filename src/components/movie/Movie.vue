<template>
    <div class="music mt40 mb80">
      <mt-header title="视频" fixed></mt-header>
      <div class="play-link">
        <input type="text" v-model="videoLink" placeholder="输入视频地址">
        <button class="to-link" @click="toVideo">转到</button>
      </div>
      <div class="movie-list">
        <ul class="clearfix">
          <li v-for="item in movies" :key="item.id">
            <movie-item :picUrl="item.videoImgUrl" :name="item.videoName"></movie-item>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import MovieItem from './MovieItem'
import {vipUrl} from 'common/api/config'
import {getDBtop250, getYKvideo} from 'common/api/movie'

export default {
  name: 'movie',
  data () {
    return {
      movies: [],
      videoLink: '',
      page: 1
    }
  },
  components: {
    MovieItem
  },
  computed: {
    resultLink: function () {
      return vipUrl + this.videoLink
    }
  },
  methods: {
    toVideo (e) {
      console.log(e)
      this.$router.push({name: 'LinkVideo', query: {link: this.resultLink}})
    },
    _getYKvideo: function (page) {
      getYKvideo(page)
        .then(res => {
          this.movies = res.data.obj.records
          // console.log(this.movies)
        })
        .catch(err => {
          console.log(err)
        })
    },
    _getDBtop250: function () {
      getDBtop250().then(res => {
        this.movies = res.data.data.records
        console.log(this.movies)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created: function () {
    this.page = 1
    this._getYKvideo(this.page)
  }
}
</script>

<style scoped>
  .mint-header {
    background-color: #cc0c0c;
  }
  .play-link {
    padding: 10px 80px 10px 10px;
    position: relative;
  }
  .play-link input {
    width: 100%;
    height: 23px;
    padding-left: 20px;
    outline: none;
    background-color: unset;
    border: 1px solid #cc0c0c;
    border-radius: 15px;
    font-size: 12px;
    color: #666;
  }
  .to-link {
    padding: 5px 10px;
    background-color: unset;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: bold;
    color: rgba(204,12,12,.6);
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
  .movie-list ul {
    margin: 0;
    padding: 0;
  }
  .movie-list li {
    width: 45.8%;
    margin: 20px 2%;
    list-style: none;
    float: left;
  }

</style>
