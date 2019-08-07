import Vue from 'vue'
import Router from 'vue-router'

// import Home from '@/components/home/Home'
// import Refresh from '@/components/myComponents/refresh/Refresh'
// import MusicDet from '@/components/music/MusicDet'
// import Music from '@/components/music/Music'
// import MusicMy from '@/components/music/Music_my'
// import MusicRecommend from '@/components/music/Music_recommend'
// import MusicRanking from '@/components/music/Music_ranking'
// import PlayListDet from '@/components/music/PlayListDet'
// import SingerSongs from '@/components/music/SingerSongs'
// import Movie from '@/components/movie/Movie'
// import Shop from '@/components/shop/Shop'
// import Self from '@/components/self/Self'

// 使用路由懒加载
const Home = () => import('@/components/home/Home')
const Refresh = () => import('@/components/myComponents/refresh/Refresh')
const MusicDet = () => import('@/components/music/MusicDet')
const Music = () => import('@/components/music/Music')
const MusicMy = () => import('@/components/music/Music_my')
const MusicRecommend = () => import('@/components/music/Music_recommend')
const MusicRanking = () => import('@/components/music/Music_ranking')
const PlayListDet = () => import('@/components/music/PlayListDet')
const SingerSongs = () => import('@/components/music/SingerSongs')
const Movie = () => import('@/components/movie/Movie')
const LinkVideo = () => import('@/components/movie/LinkVideo')
const Shop = () => import('@/components/shop/Shop')
const Self = () => import('@/components/self/Self')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'Home'}
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: {name: 'Music'},
      children: [
        {
          path: '/music',
          name: 'Music',
          component: Music
        },
        {
          path: '/movie',
          name: 'Movie',
          component: Movie
        },
        {
          path: '/shop',
          name: 'Shop',
          component: Shop
        },
        {
          path: '/self',
          name: 'Self',
          component: Self
        }
      ]
    },
    {
      path: '/music_det',
      component: MusicDet,
      children: [
        {
          path: '/music_my',
          name: 'MusicMy',
          component: MusicMy
        },
        {
          path: '/music_recommend',
          name: 'MusicRecommend',
          component: MusicRecommend
        },
        {
          path: '/music_ranking',
          name: 'MusicRanking',
          component: MusicRanking
        },
        {
          path: '/playListDet',
          name: 'PlayListDet',
          component: PlayListDet
        },
        {
          path: '/singerSongs',
          name: 'SingerSongs',
          component: SingerSongs
        }
      ]
    },
    {
      path: '/linkVideo',
      name: 'LinkVideo',
      component: LinkVideo
    },
    {
      path: '/refresh',
      name: 'Refresh',
      component: Refresh
    },
    {
      path: '*',
      redirect: {name: 'Home'}
    }
  ]
})
