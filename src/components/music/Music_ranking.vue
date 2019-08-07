<template>
  <div class="music-ranking">
    <mt-header title="音乐排行">
      <router-link :to="{name: 'Music'}" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    Music_ranking
  </div>
</template>

<script>
export default {
  name: 'music_ranking',
  data () {
    return {
      data: ''
    }
  },
  computed: {},
  methods: {},
  watch: {},
  created: function () {},
  mounted: function () {}
}
</script>

<style scoped>

</style>
