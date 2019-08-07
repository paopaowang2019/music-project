<template>
  <div class="scroll-bgc-opacity" :style="{backgroundColor: bgc}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'scroll-bgc-opacity',
  data () {
    return {
      pos: 0
    }
  },
  props: {
    jump: Boolean,
    step: {
      type: Number,
      default: 60
    },
    initRgba: { // 初始颜色
      type: String,
      default: '0,0,0,.1'
    },
    rgb: {
      type: String,
      required: true
    }
  },
  computed: {
    bgc: function () {
      let temp = this.pos / this.step
      if (this.jump) {
        return temp > 1 ? 'rgb(' + this.rgb + ')' : 'rgba(' + this.initRgba + ')'
      }
      let opacity = temp > 1 ? 1 : temp
      return 'rgba(' + this.rgb + ',' + opacity + ')'
    }
  },
  methods: {
    handleScroll (event) {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.pos = scrollTop
      // console.log('scroll', scrollTop)
    }
  },
  created: function () {},
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
  .scroll-bgc-opacity {
    height: 100%;
  }
  .scroll-bgc-opacity>* {
    background-color: inherit;
  }
</style>
