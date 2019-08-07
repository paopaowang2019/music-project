<template>
  <transition name="shade">
    <div class="my-shade" @click="hideShade" v-if="show">
      <transition>
        <div class="shade-content" @click.stop>
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'my-shade',
  data () {
    return {
    }
  },
  props: {
    show: Boolean
  },
  components: {},
  computed: {
  },
  methods: {
    hideShade () {
      this.$emit('hideShade')
    }
  },
  watch: {},
  created: function () {},
  mounted: function () {},
  destroyed: function () {}
}
</script>

<style scoped>
  .shade-enter-active, .shade-leave-active {
    transition: all .3s;
  }
  .shade-enter, .shade-leave-to {
    opacity: 0;
  }
  .my-shade {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: rgba(0,0,0,.5);
  }
  .shade-content {
    background-color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
