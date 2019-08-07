<template>
  <div class="my-tab-bar" :class="{fixed: isFixed}">
    <slot></slot>
  </div>
</template>

<script>
import MyTabItem from './MyTabItem'
export default {
  name: 'my-tab-bar',
  data () {
    return {
      data: ''
    }
  },
  props: {
    isFixed: Boolean
  },
  components: {
    MyTabItem
  }
}
</script>

<style scoped>
  .my-tab-bar {
    width: 100%;
    height: 55px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    display: flex;
    text-align: center;
    z-index: 10;
    background-color: #fff;
  }
  .fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
