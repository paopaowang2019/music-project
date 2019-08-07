<template>
  <div class="my-range">
    <div class="my-range-content" :style="contentStyle" ref="rangeWidth">
      <div class="my-range-runway" ref="runway" :style="runwayStyle"></div>
      <div class="my-range-progress" ref="prog" :style="progressStyle"></div>
      <div class="my-range-thumb" ref="thumb" :style="thumbStyle" @touchstart="thumbStart" @touchmove="thumbMove" @touchend="thumbEnd"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-range',
  data () {
    return {
      contentStyle: {
        height: this.bh + 'px',
        marginRight: this.bh + 'px'
      },
      runwayStyle: {
        borderTopWidth: this.ph + 'px',
        right: -this.bh + 'px'
      },
      progressStyle: {
        width: (this.val / this.max * 100) + '%',
        height: this.ph + 'px'
      },
      thumbStyle: {
        left: (this.val / this.max * 100) + '%',
        width: this.bh + 'px',
        height: this.bh + 'px'
      },
      touch: {}
    }
  },
  props: {
    bh: {
      type: Number,
      default: 10
    },
    ph: {
      type: Number,
      default: 2
    },
    max: {
      type: Number,
      default: 100
    },
    val: {
      type: Number,
      default: 50
    }
  },
  computed: {
    progress: function () {
      return (this.val / this.max) * 100
    }
  },
  methods: {
    thumbStart (e) {
      this.thumbInit = true
      this.thumbX = e.touches[0].clientX
      // console.log(this.thumbX, e)
    },
    thumbMove (e) {
      if (!this.thumbInit) return
      this.newX = Math.min(this.val / this.max * this.rangeWidth + (e.touches[0].clientX - this.thumbX), this.rangeWidth)
      if (this.newX < 0) this.newX = 0
      console.log(this.newX)
      let newVal = this.newX / this.rangeWidth * this.max
      this.$emit('updateProgress', newVal)
      this._updatePos(this.progress)
    },
    thumbEnd (e) {
      // console.log(e)
      this.$emit('updateProgressEnd')
      this.thumbInit = false
    },
    _updatePos (n) {
      this.$set(this.progressStyle, 'width', n + '%')
      this.$set(this.thumbStyle, 'left', n + '%')
    }
  },
  created () {
    this.thumbInit = false
  },
  mounted () {
    this.$nextTick(() => {
      this.rangeWidth = this.$refs.rangeWidth.clientWidth
      // console.log(this.rangeWidth)
    })
  },
  watch: {
    progress (newVal) {
      this._updatePos(newVal)
    }
  }
}
</script>

<style scoped>
  .my-range-content {
    position: relative;
  }
  .my-range-runway {
    border-top: solid #a9acb1;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate3d(0, -50%, 0);
  }
  .my-range-progress {
    position: absolute;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    background-color: #cc0c0c;
  }
  .my-range-thumb {
    border-radius: 50%;
    box-shadow: 0 2px 3px 1px rgba(0,0,0,.3);
    position: absolute;
    top: 0;
    background-color: #cc0c0c;
  }
</style>
