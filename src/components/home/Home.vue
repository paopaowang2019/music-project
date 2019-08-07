<template>
  <div class="home">
    <transition name="home" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <my-tab-bar :isFixed="true">
      <my-tab-item link="Music" name="音乐" @dblclick="refresh">
        <i class="my-icon my-changpian"></i>
      </my-tab-item>
      <my-tab-item link="Movie" name="电影">
        <i class="my-icon my-bofang"></i>
      </my-tab-item>
      <my-tab-item link="Shop" name="商城">
        <i class="my-icon my-shangcheng"></i>
      </my-tab-item>
      <my-tab-item link="Self" name="我的">
        <i class="my-icon my-wo1"></i>
      </my-tab-item>
    </my-tab-bar>
  </div>
</template>

<script>
import TempServer from '@/tempServer'
import MyTabItem from '../myComponents/myTabBar/MyTabItem'
export default {
  name: 'home',
  data () {
    return {
      data: ''
    }
  },
  components: {
    MyTabItem
  },
  methods: {
    refresh () {
      alert(0)
      this.$router.replace({
        path: '/refresh',
        query: {
          t: Date.now()
        }
      })
    },
    created () {
      TempServer.$on('play', (id, name, album) => {
        alert(id, name, album)
      })
    }
  }
}
</script>

<style scoped>
  .home-enter-active, .home-leave-active {
    transition: opacity .2s;
  }
  .home-enter, .home-leave-to {
    opacity: 0;
  }
  /deep/ .my-tab-icon i {
    font-size: 25px;
    color: #cc0c0c;
  }
  /deep/ .my-tab-item .router-link-exact-active .my-tab-icon i {
    color: #fbf9ff;
  }
  >>> .my-tab-item .router-link-exact-active .my-tab-name {
    color: #fff;
  }
</style>
