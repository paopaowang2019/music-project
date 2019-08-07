<template>
  <div class="my-card-item" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'my-card-item',
  data () {
    return {
    }
  },
  props: {
    col: Number
  },
  components: {},
  computed: {
    styleObject: function () {
      return {
        flexBasis: 98 / this.col + '%'
      }
    }
  },
  methods: {},
  watch: {},
  created: function () {},
  mounted: function () {}
}
</script>

<style scoped>
  .my-card-item {
    flex-grow: 0;
    flex-shrink: 1;
  }

</style>
