<template>
  <div class="song">
    <div class="song-left" @click="playSong">
      <div class="song-name">{{name}}</div>
      <div class="song-info">{{info}}</div>
    </div>
    <div class="song-more">
      <button @click="moreClick"><span>•••</span></button>
    </div>
  </div>
</template>

<script>
import TempServer from '@/tempServer'
export default {
  name: 'song',
  data () {
    return {
    }
  },
  props: {
    name: String,
    singer: String,
    album: String,
    id: Number
  },
  computed: {
    info: function () {
      return this.singer + (this.album ? ' - ' + this.album : '')
    }
  },
  methods: {
    moreClick () {
      this.$emit('more', this.id, this.name, this.album)
    },
    playSong () {
      TempServer.$emit('play', this.id, this.name, this.album)
    }
  }
}
</script>

<style scoped>
  .song {
    padding: 8px 0;
    margin-left: 8px;
    border-bottom: 1px solid #f0f0f0;
    overflow: hidden;
    position: relative;
  }
  .song-left {
    margin-right: 50px;
  }
  .song-name {
    margin-bottom: 3px;
    font-size: 15px;
  }
  .song-info {
    font-size: 12px;
    color: #888;
  }
  .song-more {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }
  .song-more button {
    width: 46px;
    height: 100%;
    padding: 1px 10px;
    margin: 0;
    border: 0;
    outline: none;
    background-color: #fff;
    -webkit-tap-highlight-color: unset;
  }
  .song-more button:active {
    background-color: #ddd;
  }
  .song-more button span {
    display: block;
    transform: rotate(90deg);
    color: #aaa;
  }
  .song-name, .song-info{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }

</style>
