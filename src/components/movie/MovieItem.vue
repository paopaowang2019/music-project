<template>
  <div class="movie-item">
    <div class="movie-img"><img :src="picUrl"></div>
    <div class="movie-name">{{name}}</div>
  </div>
</template>

<script>
export default {
  name: 'movie-item',
  data () {
    return {
    }
  },
  props: {
    picUrl: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: true
    }
  }
}
</script>

<style scoped>
  .movie-item {
    width: 100%;
    height: 100%;
  }
  .movie-img {
    max-width: 100%;
  }
  .movie-name {
    text-align: center;
    font-size: 12px;
    color: #666;
  }

</style>
