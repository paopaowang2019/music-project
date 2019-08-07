<template>
  <div class="my-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'my-card',
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {},
  watch: {},
  created: function () {},
  mounted: function () {}
}
</script>

<style scoped>
  .my-card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

</style>
