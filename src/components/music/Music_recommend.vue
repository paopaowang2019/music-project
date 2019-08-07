<template>
  <div class="music-recommend">
    <mt-header title="音乐推荐">
      <router-link :to="{name: 'Music'}" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    Music_recommend
  </div>
</template>

<script>
export default {
  name: 'music_recommend',
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
