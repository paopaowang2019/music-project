<template>
  <div class="link-video mt40">
    <mt-header title="影视播放" fixed>
        <span @click="$router.push('/movie')" slot="left">
          <mt-button icon="back">返回</mt-button>
        </span>
    </mt-header>
    <iframe :src="link" name="iframe-name" frameborder="0" scrolling="auto"></iframe>
  </div>
</template>

<script>
export default {
  name: 'link-video',
  data () {
    return {
      link: ''
    }
  },
  components: {},
  computed: {},
  methods: {},
  watch: {},
  created: function () {
    console.log(this.$router)
    this.link = this.$route.query.link
  },
  mounted: function () {},
  destroyed: function () {}
}
</script>

<style scoped>
  .link-video iframe {
    width: 100%;
    height: 800px;
  }
</style>
