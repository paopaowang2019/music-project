<template>
  <div class="circle-progress">
    <svg :width="size" :height="size" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle class="progress-background" r="50" cx="50" cy="50"></circle>
      <circle class="progress-bar" r="50" cx="50" cy="50" :stroke-dasharray="strokeDasharray" :stroke-dashoffset="strokeDashoffset"></circle>
    </svg>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'circle-progress',
  props: {
    size: {
      type: Number,
      default: 50
    },
    ratio: {
      type: Number,
      default: 0
    }
  },
  computed: {
    strokeDasharray () {
      return Math.PI * 100
    },
    strokeDashoffset () {
      return this.strokeDasharray * (1 - this.ratio)
    }
  }
}
</script>

<style scoped>
  .circle-progress {
    position: relative;
  }
  .progress-background {
    stroke: rgba(204, 12, 12, 0.5);
    stroke-width: 8px;
    fill: transparent;
    transform-origin: center;
    transform: scale(0.9);
  }
  .progress-bar {
    stroke: #cc0c0c;
    stroke-width: 10px;
    fill: transparent;
    transform-origin: center;
    transform: scale(0.9) rotate(-90deg);
  }
</style>
